import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

function getTokenUrl(env: string): string {
  return env === 'sandbox' ? 'https://api.sandbox.ebay.com/identity/v1/oauth2/token' : 'https://api.ebay.com/identity/v1/oauth2/token'
}
function getApiBase(env: string): string {
  return env === 'sandbox' ? 'https://api.sandbox.ebay.com' : 'https://api.ebay.com'
}
function decrypt(ciphertext: string, keyMaterial: string): string {
  const [ivHex, tagHex, encHex] = ciphertext.split(':')
  if (!ivHex || !tagHex || !encHex) throw new Error('format chiffre invalide')
  const key = crypto.createHash('sha256').update(keyMaterial).digest()
  const d = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(ivHex, 'hex'))
  d.setAuthTag(Buffer.from(tagHex, 'hex'))
  return Buffer.concat([d.update(Buffer.from(encHex, 'hex')), d.final()]).toString('utf8')
}
async function getAccessToken(refreshToken: string, appId: string, certId: string, env: string): Promise<string> {
  const tokenUrl = getTokenUrl(env)
  const basic = Buffer.from(`${appId}:${certId}`).toString('base64')
  const scopes = [
    'https://api.ebay.com/oauth/api_scope/sell.inventory',
    'https://api.ebay.com/oauth/api_scope/sell.marketing',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment',
    'https://api.ebay.com/oauth/api_scope/sell.analytics.readonly',
  ].join(' ')
  const body = new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refreshToken, scope: scopes })
  const r = await fetch(tokenUrl, { method: 'POST', headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
  const t = await r.text()
  let j: any; try { j = JSON.parse(t) } catch { j = { raw: t } }
  if (!r.ok) throw new Error(`refresh failed ${r.status} ${JSON.stringify(j).slice(0, 600)}`)
  return j.access_token
}

/**
 * GET /api/cron/ebay-sync
 * Cron 5-15min optionnel — sync vues/offres/négociation auto floor 4 999€
 *
 * Auth: Bearer CRON_SECRET (verifyCronAuth)
 *
 * Floor rules FAST 3j:
 *   - Offre >= 4999 → ACCEPT (ou auto-accept via eBay Best Offer si configuré)
 *   - 4700..4998 → COUNTER 4999 (contre-offre unique)
 *   - < 4700 → DECLINE
 *   Après J+3: floor passe à 4500 (absolute floor), logique identique décalée.
 *
 * Data sources (si tokens présents):
 *   - Analytics API: GET /sell/analytics/v1/traffic_report (vues)
 *   - Sell Inventory: GET /sell/inventory/v1/offer?sku=... (offres + best offers)
 * Sans tokens: mode MOCK — lit LuxurySale.views/watchers/offers depuis DB et applique même logique.
 */
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })

  const now = new Date()
  const dryRun = request.nextUrl.searchParams.get('dryRun') === 'true'

  const appId = process.env.EBAY_APP_ID || ''
  const certId = process.env.EBAY_CERT_ID || ''
  const env = (process.env.EBAY_ENV || 'production').toLowerCase()
  const encKey = process.env.EBAY_TOKEN_ENCRYPTION_KEY || process.env.CRON_SECRET || ''
  const hasEbayCreds = !!(appId && certId)

  // Charge la vente active
  const sale: any = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ where: { status: 'active' }, orderBy: { createdAt: 'desc' } })
  }, null)

  if (!sale) return NextResponse.json({ success: true, message: 'no active sale', timestamp: now.toISOString() })

  const daysActive = (now.getTime() - new Date(sale.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  const floor = daysActive >= 3 ? 4500 : 4999 // floor glissant J+3
  const floorLabel = daysActive >= 3 ? '4500 (absolute)' : '4999 (FAST 3j)'

  // --- Collecte vues/offres ---
  let views: number = sale.views || 0
  let watchers: number = sale.watchers || 0
  let offers: any[] = Array.isArray(sale.offers) ? sale.offers : []
  let ebayLive: any = null
  let source: string = 'DB (mock)'

  // Si creds + refresh_token stocké, tente live eBay
  let refreshToken: string | null = null
  if (hasEbayCreds && (sale.metadata as any)?.ebay?.refresh_token_encrypted) {
    try { refreshToken = decrypt((sale.metadata as any).ebay.refresh_token_encrypted, encKey) } catch {}
  }
  if (hasEbayCreds && refreshToken && !dryRun) {
    try {
      const accessToken = await getAccessToken(refreshToken, appId, certId, env)
      const base = getApiBase(env)
      const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' }

      // 1) Offers — GET /sell/inventory/v1/offer?sku=LV-NBA-M-001
      const offerRes = await fetch(`${base}/sell/inventory/v1/offer?sku=${encodeURIComponent(sale.sku)}`, { headers })
      const offerText = await offerRes.text()
      let offerJson: any; try { offerJson = JSON.parse(offerText) } catch { offerJson = { raw: offerText } }

      // 2) Negotiation — Best Offers via Sell Negotiation API (si offerId connu)
      // GET /sell/negotiation/v1/best_offer?offer_id={offerId}  (nécessite offerId publié)
      let negotiation: any = null
      const offerId = (sale.metadata as any)?.ebay?.lastOfferId || (offerJson.offers && offerJson.offers[0]?.offerId)
      if (offerId) {
        const negRes = await fetch(`${base}/sell/negotiation/v1/best_offer?offer_id=${encodeURIComponent(offerId)}`, { headers })
        const negText = await negRes.text()
        try { negotiation = JSON.parse(negText) } catch { negotiation = { raw: negText, status: negRes.status } }
      }

      // 3) Traffic — Analytics (vues) — nécessite rapport
      // POST /sell/analytics/v1/traffic_report — on le tente mais peut 403 si scope manquant
      let traffic: any = null
      try {
        const trRes = await fetch(`${base}/sell/analytics/v1/traffic_report`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ dimension: 'LISTING', filter: `sku:{${sale.sku}}`, metrics: ['LISTING_VIEWS', 'LISTING_IMPRESSIONS'] }),
        } as any)
        const trText = await trRes.text()
        try { traffic = JSON.parse(trText) } catch { traffic = { raw: trText, status: trRes.status } }
        if (traffic?.records?.[0]?.metrics) {
          const mv = traffic.records[0].metrics
          views = mv.LISTING_VIEWS || views
        }
      } catch {}

      ebayLive = { offers: offerJson, negotiation, traffic }
      source = 'eBay LIVE'
      // Met à jour DB avec vues live si dispo
      if (ebayLive.traffic?.records || offerJson?.total !== undefined) {
        await safeQuery(async () => {
          const { prisma } = await import('@/lib/db')
          await prisma.luxurySale.update({ where: { id: sale.id }, data: { views, watchers } as any })
        }, null)
      }
    } catch (e: any) {
      ebayLive = { error: e?.message?.slice(0, 800) }
      source = 'eBay LIVE failed → fallback DB'
    }
  }

  // --- Négociation auto ---
  // Offers dans sale.offers peuvent être [{amount, currency, buyer, at}] ou présents dans ebayLive
  // On normalise depuis DB si pas de live
  const pendingOffers: { amount: number; raw: any }[] = []
  for (const o of offers) {
    const amt = typeof o === 'number' ? o : (o.amount || o.price || o.value || 0)
    if (amt > 0) pendingOffers.push({ amount: Number(amt), raw: o })
  }
  // Si live negotiation a des bestOffers, on les ajoute
  if (ebayLive?.negotiation?.bestOffers) {
    for (const bo of ebayLive.negotiation.bestOffers) {
      const amt = Number(bo.price?.value || bo.amount || 0)
      if (amt > 0) pendingOffers.push({ amount: amt, raw: bo })
    }
  }

  type Decision = 'ACCEPT' | 'COUNTER_4999' | 'COUNTER_4500' | 'DECLINE' | 'HOLD'
  const decisions: { amount: number; decision: Decision; reason: string }[] = []
  for (const o of pendingOffers) {
    const a = o.amount
    let dec: Decision
    let reason: string
    if (floor === 4999) {
      if (a >= 4999) { dec = 'ACCEPT'; reason = `>= floor FAST 4999 → ACCEPT` }
      else if (a >= 4700) { dec = 'COUNTER_4999'; reason = `4700-4998 → COUNTER 4999 (1x)` }
      else { dec = 'DECLINE'; reason = `<4700 → DECLINE` }
    } else {
      if (a >= 4500) { dec = 'ACCEPT'; reason = `J+3 floor 4500 → ACCEPT >=4500` }
      else if (a >= 4300) { dec = 'COUNTER_4500'; reason = `4300-4499 J+3 → COUNTER 4500` }
      else { dec = 'DECLINE'; reason = `<4300 J+3 → DECLINE` }
    }
    decisions.push({ amount: a, decision: dec, reason })
  }

  const action: Decision | 'HOLD' = decisions.length ? decisions[0].decision : 'HOLD'

  // Log sync
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    await prisma.luxuryLog.create({
      data: {
        saleId: sale.id,
        type: 'ebay_sync',
        message: `ebay-sync ${source} — views ${views} watchers ${watchers} offers ${pendingOffers.length} floor ${floorLabel} action ${action}`,
        data: { source, views, watchers, offersCount: pendingOffers.length, floor, floorLabel, daysActive: Number(daysActive.toFixed(2)), decisions, ebayLive: ebayLive ? { hasOffers: !!ebayLive.offers, hasNegotiation: !!ebayLive.negotiation } : null } as any,
      },
    })
  }, null)

  // En dryRun ou HOLD, on ne touche pas à eBay
  // En LIVE avec décision, on pourrait appeler Sell Negotiation API pour répondre
  // PATCH /sell/negotiation/v1/best_offer/{bestOfferId}/(accept|decline|counter) — à activer quand offerId live dispo

  return NextResponse.json({
    success: true,
    timestamp: now.toISOString(),
    source,
    sale: { sku: sale.sku, price: sale.price, views, watchers, daysActive: Number(daysActive.toFixed(2)) },
    floor: { value: floor, label: floorLabel, rule: 'J0-J3: 4999 / J+3: 4500 absolute — jamais sous floor sans humain' },
    offers: { count: pendingOffers.length, items: pendingOffers.slice(0, 5) },
    decisions,
    action,
    ebayLivePreview: ebayLive ? (JSON.stringify(ebayLive).slice(0, 1200) + (JSON.stringify(ebayLive).length > 1200 ? '...' : '')) : null,
    next: decisions.length ? `Décision ${action} — ${decisions[0].reason} — ${hasEbayCreds && refreshToken ? 'LIVE: appel Sell Negotiation API pour exécuter' : 'MOCK: simuler via POST /api/luxury {action:"offer", price:4999}'}` : 'HOLD — aucune offre en attente',
    cron_hint: 'Ajoute dans vercel.json: { "path": "/api/cron/ebay-sync", "schedule": "0 */6 * * *" } + GitHub Actions 5m fallback',
  })
}
