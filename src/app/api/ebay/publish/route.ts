import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

// --- Helpers eBay token ---

function getTokenUrl(env: string): string {
  return env === 'sandbox'
    ? 'https://api.sandbox.ebay.com/identity/v1/oauth2/token'
    : 'https://api.ebay.com/identity/v1/oauth2/token'
}
function getInventoryBase(env: string): string {
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

async function getAccessTokenFromRefresh(refreshToken: string, appId: string, certId: string, env: string, ruName: string): Promise<any> {
  const tokenUrl = getTokenUrl(env)
  const basic = Buffer.from(`${appId}:${certId}`).toString('base64')
  // eBay: refresh_token grant — scope peut être réduit; on demande les scopes publish
  const scopes = [
    'https://api.ebay.com/oauth/api_scope/sell.inventory',
    'https://api.ebay.com/oauth/api_scope/sell.marketing',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment',
    'https://api.ebay.com/oauth/api_scope/sell.analytics.readonly',
  ].join(' ')
  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    scope: scopes,
  })
  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  const text = await res.text()
  let json: any
  try { json = JSON.parse(text) } catch { json = { raw: text } }
  if (!res.ok) throw new Error(`eBay refresh failed ${res.status}: ${JSON.stringify(json).slice(0, 800)}`)
  return json // { access_token, expires_in, token_type }
}

// --- TOP1_MARKETING_PACK payload ---

const TOP1 = {
  sku: 'LV-NBA-M-001',
  titles: {
    FR: 'Louis Vuitton x NBA Leather Varsity Jacket M FW21 Virgil Abloh Noir 3x Porté',
    EN: 'Louis Vuitton x NBA Leather Varsity Jacket M FW21 Virgil Abloh Black Mint',
    DE: 'Louis Vuitton x NBA Leder Varsity Jacke M FW21 Virgil Abloh Schwarz Top',
    IT: 'Louis Vuitton x NBA Giacca Varsity Pelle M FW21 Virgil Abloh Nero Perfetta',
    JP: 'ルイ・ヴィトン x NBA レザー バーシティジャケット M FW21 ヴァージル・アブロー',
  },
  // 14 photos — ordre TOP1 (face/dos/profil/détails/étiquettes)
  // En prod: URLs Vercel Blob / Cloudinary / Supabase Storage publiques HTTPS
  // Placeholder ordre — l'appelant doit fournir imageUrls[14] sinon fallback
  aspect: 'Louis Vuitton x NBA Leather Basketball Varsity Jacket',
  brand: 'Louis Vuitton',
  mpn: '1A8WU8',
  condition: 'USED_EXCELLENT', // eBay conditionEnum: NEW, LIKE_NEW, NEW_WITH_DEFECTS, USED_EXCELLENT etc.
  price: 4999,
  currency: 'EUR',
  quantity: 1,
  // Category eBay FR: 1059 outerwear? Mais LV x NBA varsity = 57988 Jackets? On utilise 57988 par défaut + aspects
  categoryId: '57988', // eBay category: Jackets — à ajuster selon eBay category suggestion API
  marketplaceId: 'EBAY_FR',
  fulfillmentPolicyIdEnv: 'EBAY_FULFILLMENT_POLICY_ID',
  paymentPolicyIdEnv: 'EBAY_PAYMENT_POLICY_ID',
  returnPolicyIdEnv: 'EBAY_RETURN_POLICY_ID',
  merchantLocationKeyEnv: 'EBAY_MERCHANT_LOCATION_KEY',
}

function buildInventoryItemPayload(opts: { locale: string; imageUrls: string[]; description: string }) {
  const { imageUrls, description } = opts
  return {
    availability: { shipToLocationAvailability: { quantity: 1 } },
    condition: TOP1.condition,
    conditionDescription: 'Porté 3 fois uniquement — État PARFAIT A+ — Aucune tache, aucun accro, cuir intact, laine dense, bord-côte impeccable. Stocké sur cintre housse.',
    packageWeightAndSize: { dimensions: { height: 12, length: 45, width: 35, unit: 'CENTIMETER' }, weight: { value: 1.8, unit: 'KILOGRAM' } },
    product: {
      title: TOP1.titles.FR, // titre canon 80c — utilisé pour InventoryItem; Offer peut override par locale
      description, // HTML ou texte — eBay accepte HTML limité
      aspects: {
        Brand: [TOP1.brand],
        Type: ['Varsity Jacket'],
        Material: ['Leather', 'Wool'],
        Size: ['M'],
        Color: ['Black'],
        Designer: ['Virgil Abloh'],
        Collection: ['FW21'],
        'Model': ['Leather Basketball Jacket'],
        MPN: [TOP1.mpn],
        Condition: ['Excellent'],
      },
      brand: TOP1.brand,
      mpn: TOP1.mpn,
      imageUrls: imageUrls.slice(0, 14),
    },
  }
}

function buildOfferPayload(sku: string, marketplaceId: string, formatTitle: string, price: number, currency: string) {
  return {
    sku,
    marketplaceId,
    format: 'FIXED_PRICE',
    listingDescription: formatTitle, // eBay Offer listingDescription = longue description (on réutilise)
    availableQuantity: 1,
    listingPolicies: {
      // Ces IDs viennent de Sell Account API — doivent être créés une fois via POST /sell/account/v1/...
      // Fallback: si non configurés, eBay renvoie 403 — on laisse l'erreur remonter avec hint
      fulfillmentPolicyId: process.env.EBAY_FULFILLMENT_POLICY_ID || 'MISSING_FULFILLMENT_POLICY',
      paymentPolicyId: process.env.EBAY_PAYMENT_POLICY_ID || 'MISSING_PAYMENT_POLICY',
      returnPolicyId: process.env.EBAY_RETURN_POLICY_ID || 'MISSING_RETURN_POLICY',
      ...(process.env.EBAY_MERCHANT_LOCATION_KEY ? { merchantLocationKey: process.env.EBAY_MERCHANT_LOCATION_KEY } : {}),
    },
    pricingSummary: { price: { value: String(price), currency } },
    // categoryId est défini sur l'offer (pas l'inventoryItem)
    categoryId: TOP1.categoryId,
    merchantLocationKey: process.env.EBAY_MERCHANT_LOCATION_KEY || undefined,
    // listingDuration: GTC = Good Till Cancelled (standard luxe)
    listingDuration: 'GTC',
    includeCatalogProductDetails: true,
  }
}

// --- Route ---

/**
 * POST /api/ebay/publish
 * Auth: Bearer CRON_SECRET ou x-admin-key (ADMIN_API_KEY)
 * Body: { imageUrls?: string[14], locale?: 'FR'|'EN'|'DE'|'IT'|'JP', dryRun?: boolean, sku?: string, price?: number }
 *
 * Flux eBay Sell Inventory:
 *   1) refresh_token → access_token (POST /identity/v1/oauth2/token grant_type=refresh_token)
 *   2) PUT /sell/inventory/v1/inventory_item/{sku}  (createInventoryItem)
 *   3) POST /sell/inventory/v1/offer                (createOffer)
 *   4) POST /sell/inventory/v1/offer/{offerId}/publish (publishOffer)
 *
 * Docs:
 *   https://developer.ebay.com/api-docs/sell/inventory/types/api:InventoryItem
 *   https://developer.ebay.com/api-docs/sell/inventory/methods/createOrReplaceInventoryItem
 *   https://developer.ebay.com/api-docs/sell/inventory/methods/createOffer
 *   https://developer.ebay.com/api-docs/sell/inventory/methods/publishOffer
 */
export async function POST(request: NextRequest) {
  // Auth — CRON_SECRET ou ADMIN_API_KEY
  const auth = request.headers.get('authorization') || ''
  const cronOk = process.env.CRON_SECRET && auth === `Bearer ${process.env.CRON_SECRET}`
  const adminKey = request.headers.get('x-admin-key') || request.headers.get('x-api-key') || ''
  const adminOk = process.env.ADMIN_API_KEY && adminKey === process.env.ADMIN_API_KEY
  if (!cronOk && !adminOk) {
    return NextResponse.json({ success: false, error: 'Non autorisé — Bearer CRON_SECRET ou x-admin-key requis' }, { status: 401 })
  }

  const body = await request.json().catch(() => ({}))
  const dryRun: boolean = body.dryRun === true || body.mock === true
  const sku: string = body.sku || TOP1.sku
  const price: number = body.price || TOP1.price
  const locale: string = body.locale || 'FR'
  const marketplaceId: string = body.marketplaceId || TOP1.marketplaceId
  let imageUrls: string[] = body.imageUrls || []

  // Fallback images — 14 placeholders si non fournis (mock). En prod, fournir vos URLs Blob
  if (imageUrls.length === 0) {
    const base = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
    // On pointe vers un pattern générique — l'appelant DOIT remplacer par vraies photos evidence/original/*.jpg uploadées
    imageUrls = Array.from({ length: 14 }, (_, i) => `${base}/api/placeholder/ebay/${String(i + 1).padStart(2, '0')}.jpg`)
  }

  // Descriptions 5 langues (extraits TOP1_MARKETING_PACK — 10 points condensés)
  const descriptions: Record<string, string> = {
    FR: `LOUIS VUITTON x NBA — LEATHER BASKETBALL VARSITY JACKET — FW21 VIRGIL ABLOH — TAILLE M\nPorté 3x Parfait A+ — 14 photos HD + macros VCCM09/CA36929/Made in Italy. FAST SALE 3j 4 999€ ferme (StockX Last $7,564). Envoi monde DHL Express assuré 45€ 24h + signature. Voir TOP1_MARKETING_PACK pour 10 points complets.`,
    EN: `LOUIS VUITTON x NBA — LEATHER BASKETBALL VARSITY JACKET — FW21 VIRGIL ABLOH — SIZE M\nWorn 3x Mint A+ — 14 HD photos + macros VCCM09/CA36929/Made in Italy. FAST SALE 3 days €4,999 firm (StockX Last $7,564). Worldwide DHL Express insured $50 24h + signature.`,
    DE: `LOUIS VUITTON x NBA — Leder Varsity Jacke — FW21 VIRGIL ABLOH — Gr. M\nNur 3x getragen Top A+ — 14 HD Fotos + Makro VCCM09/CA36929/Made in Italy. FAST SALE 3 Tage 4.999€ fest (StockX Last $7,564). Weltweit DHL Express versichert 24h.`,
    IT: `LOUIS VUITTON x NBA — Giacca Varsity Pelle — FW21 VIRGIL ABLOH — Taglia M\nIndossata 3 volte Perfetta A+ — 14 foto HD + macro VCCM09/CA36929/Made in Italy. FAST SALE 3 giorni 4.999€ fisso (StockX Last $7,564). Spedizione mondiale DHL Express 24h.`,
    JP: `ルイ・ヴィトン x NBA レザー バーシティジャケット — FW21 ヴァージル・アブロー — サイズM\n着用3回 美品A+ — 14枚 HD写真 + タグ VCCM09/CA36929/Made in Italy. FAST SALE 3日間 €4,999固定 (StockX Last $7,564). 世界配送 DHL Express 24h。`,
  }
  const description = descriptions[locale] || descriptions.FR
  const titleForLocale = (TOP1.titles as any)[locale] || TOP1.titles.FR

  // Vérifie titre 80c
  const titleLen = titleForLocale.length
  if (titleLen > 80) {
    return NextResponse.json({ success: false, error: `Titre ${locale} ${titleLen}c > 80c — raccourcir`, title: titleForLocale }, { status: 400 })
  }

  // ENV check
  const appId = process.env.EBAY_APP_ID || ''
  const certId = process.env.EBAY_CERT_ID || ''
  const ruName = process.env.EBAY_RU_NAME || ''
  const env = (process.env.EBAY_ENV || 'production').toLowerCase()
  const encKey = process.env.EBAY_TOKEN_ENCRYPTION_KEY || process.env.CRON_SECRET || ''

  const missingEnv = [!appId && 'EBAY_APP_ID', !certId && 'EBAY_CERT_ID', !ruName && 'EBAY_RU_NAME'].filter(Boolean)
  const isMock = dryRun || missingEnv.length > 0

  // Prépare payloads (toujours, même en mock — pour inspection)
  const inventoryPayload = buildInventoryItemPayload({ locale, imageUrls: imageUrls.slice(0, 14), description })
  // Override title par locale
  ;(inventoryPayload as any).product.title = titleForLocale
  const offerPayloadPreview = buildOfferPayload(sku, marketplaceId, description, price, TOP1.currency)

  if (isMock) {
    // Log mock en DB
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findFirst({ where: { sku }, orderBy: { createdAt: 'desc' } }) || await prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
      if (sale) {
        await prisma.luxuryLog.create({
          data: {
            saleId: sale.id,
            type: 'ebay_publish',
            message: `[MOCK] publish dryRun — sku ${sku} ${locale} ${titleLen}c — ${missingEnv.length ? 'ENV manquants: ' + missingEnv.join(',') : 'dryRun=true'}`,
            data: { mock: true, sku, locale, title: titleForLocale, titleLen, price, imageCount: imageUrls.length, missingEnv, inventoryPayload, offerPayload: offerPayloadPreview } as any,
          },
        })
      }
    }, null)

    return NextResponse.json({
      success: true,
      mode: 'MOCK',
      reason: missingEnv.length ? `ENV manquants: ${missingEnv.join(', ')} — configure via vercel env add` : 'dryRun=true',
      sku,
      locale,
      title: titleForLocale,
      titleLen,
      titleOk80: titleLen <= 80,
      imageCount: imageUrls.length,
      imageUrls: imageUrls.slice(0, 3),
      warning: imageUrls[0]?.includes('placeholder') ? 'imageUrls placeholder — uploade 14 vraies photos sur Vercel Blob puis repasse imageUrls[]' : undefined,
      inventoryPayload,
      offerPayload: offerPayloadPreview,
      flow: ['PUT /sell/inventory/v1/inventory_item/{sku}', 'POST /sell/inventory/v1/offer', 'POST /sell/inventory/v1/offer/{offerId}/publish'],
      next: 'Rejoue avec dryRun:false + vraies clés EBAY_* + 14 URLs HTTPS publiques pour publish LIVE',
      docs: 'https://developer.ebay.com/api-docs/sell/inventory/overview.html',
    })
  }

  // --- LIVE FLOW ---
  // 1) Récupère refresh_token chiffré depuis DB
  let refreshToken: string | null = null
  const saleRow: any = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ where: { sku }, orderBy: { createdAt: 'desc' } }) || prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
  }, null)

  if (saleRow?.metadata && (saleRow.metadata as any)?.ebay?.refresh_token_encrypted) {
    try {
      refreshToken = decrypt((saleRow.metadata as any).ebay.refresh_token_encrypted, encKey)
    } catch (e: any) {
      return NextResponse.json({ success: false, error: 'decrypt refresh_token échoué — EBAY_TOKEN_ENCRYPTION_KEY incorrect?', details: e?.message }, { status: 500 })
    }
  }
  // Fallback Vercel ENV direct (si DB vide mais ENV posé)
  if (!refreshToken && process.env.EBAY_REFRESH_TOKEN) {
    refreshToken = process.env.EBAY_REFRESH_TOKEN
  }
  if (!refreshToken && process.env.EBAY_REFRESH_ENCRYPTED) {
    try { refreshToken = decrypt(process.env.EBAY_REFRESH_ENCRYPTED, encKey) } catch {}
  }
  if (!refreshToken) {
    return NextResponse.json({
      success: false,
      error: 'refresh_token introuvable — passe par /api/ebay/callback d’abord',
      hint: 'Flow: https://auth.ebay.com/oauth?client_id=EBAY_APP_ID&redirect_uri=EBAY_RU_NAME&response_type=code&scope=https://api.ebay.com/oauth/api_scope/sell.inventory%20https://api.ebay.com/oauth/api_scope/sell.marketing%20https://api.ebay.com/oauth/api_scope/sell.fulfillment&state=...',
    }, { status: 428 })
  }

  // 2) refresh → access_token
  let accessToken: string
  try {
    const tok = await getAccessTokenFromRefresh(refreshToken, appId, certId, env, ruName)
    accessToken = tok.access_token
    if (!accessToken) throw new Error('no access_token in refresh response')
  } catch (e: any) {
    return NextResponse.json({ success: false, error: 'eBay refresh_token → access_token échoué', details: e?.message?.slice(0, 1000) }, { status: 502 })
  }

  const base = getInventoryBase(env)
  const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json', 'Content-Language': locale === 'JP' ? 'ja-JP' : locale === 'DE' ? 'de-DE' : locale === 'IT' ? 'it-IT' : locale === 'EN' ? 'en-US' : 'fr-FR' }

  // 3) createOrReplaceInventoryItem
  let invRes: any
  try {
    const r = await fetch(`${base}/sell/inventory/v1/inventory_item/${encodeURIComponent(sku)}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(inventoryPayload),
    })
    const t = await r.text()
    try { invRes = JSON.parse(t) } catch { invRes = { raw: t } }
    if (!r.ok) {
      return NextResponse.json({ success: false, step: 'createInventoryItem', status: r.status, details: invRes, hint: 'Vérifie imageUrls HTTPS publiques + condition + aspects. Docs: https://developer.ebay.com/api-docs/sell/inventory/methods/createOrReplaceInventoryItem' }, { status: 502 })
    }
  } catch (e: any) {
    return NextResponse.json({ success: false, step: 'createInventoryItem', error: e?.message }, { status: 502 })
  }

  // 4) createOffer
  let offerRes: any
  let offerId: string | undefined
  try {
    const offerPayload = buildOfferPayload(sku, marketplaceId, description, price, TOP1.currency)
    const r = await fetch(`${base}/sell/inventory/v1/offer`, {
      method: 'POST',
      headers,
      body: JSON.stringify(offerPayload),
    })
    const t = await r.text()
    try { offerRes = JSON.parse(t) } catch { offerRes = { raw: t } }
    if (!r.ok) {
      // Si policy manquante, message explicite
      const isPolicy = JSON.stringify(offerRes).includes('listingPolicies') || JSON.stringify(offerRes).includes('fulfillmentPolicy')
      return NextResponse.json({
        success: false,
        step: 'createOffer',
        status: r.status,
        details: offerRes,
        hint: isPolicy
          ? 'Crée d’abord les policies via Sell Account API: POST /sell/account/v1/fulfillment_policy, /payment_policy, /return_policy puis renseigne EBAY_FULFILLMENT_POLICY_ID etc. Docs: https://developer.ebay.com/api-docs/sell/account/overview.html'
          : 'Docs: https://developer.ebay.com/api-docs/sell/inventory/methods/createOffer',
      }, { status: 502 })
    }
    offerId = offerRes.offerId
  } catch (e: any) {
    return NextResponse.json({ success: false, step: 'createOffer', error: e?.message }, { status: 502 })
  }

  // 5) publishOffer
  let publishRes: any
  try {
    if (!offerId) throw new Error('offerId manquant après createOffer')
    const r = await fetch(`${base}/sell/inventory/v1/offer/${encodeURIComponent(offerId)}/publish`, {
      method: 'POST',
      headers,
    })
    const t = await r.text()
    try { publishRes = JSON.parse(t) } catch { publishRes = { raw: t } }
    if (!r.ok) {
      return NextResponse.json({ success: false, step: 'publishOffer', status: r.status, details: publishRes }, { status: 502 })
    }
  } catch (e: any) {
    return NextResponse.json({ success: false, step: 'publishOffer', error: e?.message, offerId }, { status: 502 })
  }

  // Log succès en DB
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const sale = await prisma.luxurySale.findUnique({ where: { sku } }) || saleRow
    if (sale) {
      await prisma.luxuryLog.create({
        data: {
          saleId: sale.id,
          type: 'ebay_publish',
          message: `eBay LIVE publish OK — sku ${sku} offerId ${offerId} listingId ${publishRes.listingId || ''}`,
          data: { sku, offerId, listingId: publishRes.listingId, price, marketplaceId, locale, title: titleForLocale } as any,
        },
      })
      await prisma.luxurySale.update({
        where: { id: sale.id },
        data: { platform: 'eBay', metadata: { ...(sale.metadata as any || {}), ebay: { ...((sale.metadata as any)?.ebay || {}), lastOfferId: offerId, lastListingId: publishRes.listingId, lastPublishAt: new Date().toISOString() } } as any },
      })
    }
  }, null)

  return NextResponse.json({
    success: true,
    mode: 'LIVE',
    sku,
    locale,
    title: titleForLocale,
    offerId,
    listingId: publishRes.listingId,
    listingHref: publishRes.listingHref || (publishRes.listingId ? `https://www.ebay.fr/itm/${publishRes.listingId}` : undefined),
    warnings: publishRes.warnings,
    steps: { createInventoryItem: 'OK', createOffer: 'OK', publishOffer: 'OK' },
  })
}

// GET pour inspection mock sans auth (affiche payloads)
export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale') || 'FR'
  const title = (TOP1.titles as any)[locale] || TOP1.titles.FR
  return NextResponse.json({
    service: 'ebay/publish',
    method: 'POST',
    auth: 'Bearer CRON_SECRET ou x-admin-key',
    titles80c: Object.fromEntries(Object.entries(TOP1.titles).map(([k, v]) => [k, { title: v, len: (v as string).length, ok: (v as string).length <= 80 }])),
    currentLocale: { locale, title, len: title.length, ok: title.length <= 80 },
    flow: ['PUT /sell/inventory/v1/inventory_item/{sku}', 'POST /sell/inventory/v1/offer', 'POST /sell/inventory/v1/offer/{offerId}/publish'],
    docs: 'https://developer.ebay.com/api-docs/sell/inventory/overview.html',
    mock_test: `curl -X POST https://ai-empire-steel.vercel.app/api/ebay/publish -H "Authorization: Bearer $CRON_SECRET" -H "Content-Type: application/json" -d '{"dryRun":true,"locale":"FR"}'`,
  })
}
