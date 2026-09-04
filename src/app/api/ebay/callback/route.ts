import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * GET /api/ebay/callback?code=XXX&state=YYY
 * eBay OAuth Authorization Code Grant — échange code → access_token + refresh_token
 *
 * Docs: https://developer.ebay.com/api-docs/static/oauth-authorization-code-grant.html
 * Token endpoint: POST https://api.ebay.com/identity/v1/oauth2/token
 * Scopes requis: https://api.ebay.com/oauth/api_scope/sell.inventory
 *               https://api.ebay.com/oauth/api_scope/sell.marketing
 *               https://api.ebay.com/oauth/api_scope/sell.fulfillment
 *               + https://api.ebay.com/oauth/api_scope/sell.analytics.readonly (pour ebay-sync vues)
 *
 * ENV requis:
 *   EBAY_APP_ID     (= Client ID / AppID from developer.ebay.com)
 *   EBAY_CERT_ID    (= Client Secret / Cert ID)
 *   EBAY_RU_NAME    (= RuName — ex: Samostheouf-Samosthe-PRD-xx-xxxxx)
 *   EBAY_ENV        (= production | sandbox, défaut production)
 *   EBAY_TOKEN_ENCRYPTION_KEY (= hex 32 bytes — génère: openssl rand -hex 32)
 *   DATABASE_URL    (= Prisma PostgreSQL — déjà existant)
 */

function getEnv(): { appId: string; certId: string; ruName: string; env: string; encKey: string } {
  return {
    appId: process.env.EBAY_APP_ID || '',
    certId: process.env.EBAY_CERT_ID || '',
    ruName: process.env.EBAY_RU_NAME || process.env.EBAY_REDIRECT_URI || '',
    env: (process.env.EBAY_ENV || 'production').toLowerCase(),
    encKey: process.env.EBAY_TOKEN_ENCRYPTION_KEY || process.env.CRON_SECRET || '',
  }
}

function getTokenUrl(env: string): string {
  return env === 'sandbox'
    ? 'https://api.sandbox.ebay.com/identity/v1/oauth2/token'
    : 'https://api.ebay.com/identity/v1/oauth2/token'
}

// AES-256-GCM chiffré — clé dérivée via SHA256 du secret (zero plain en DB)
function encrypt(plain: string, keyMaterial: string): string {
  const key = crypto.createHash('sha256').update(keyMaterial).digest() // 32 bytes
  const iv = crypto.randomBytes(12)
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv)
  const enc = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()
  // format: iv:tag:ciphertext (hex)
  return `${iv.toString('hex')}:${tag.toString('hex')}:${enc.toString('hex')}`
}

function decrypt(ciphertext: string, keyMaterial: string): string {
  const [ivHex, tagHex, encHex] = ciphertext.split(':')
  if (!ivHex || !tagHex || !encHex) throw new Error('format chiffre invalide')
  const key = crypto.createHash('sha256').update(keyMaterial).digest()
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(ivHex, 'hex'))
  decipher.setAuthTag(Buffer.from(tagHex, 'hex'))
  const dec = Buffer.concat([decipher.update(Buffer.from(encHex, 'hex')), decipher.final()])
  return dec.toString('utf8')
}

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')
  const state = request.nextUrl.searchParams.get('state')
  const err = request.nextUrl.searchParams.get('error')
  const errDesc = request.nextUrl.searchParams.get('error_description')

  if (err) {
    return NextResponse.json({ success: false, error: err, error_description: errDesc }, { status: 400 })
  }
  if (!code) {
    return NextResponse.json(
      { success: false, error: 'missing code', hint: 'Appelle /api/ebay/auth pour initier le flow OAuth eBay' },
      { status: 400 }
    )
  }

  // CSRF state optionnel — si EBAY_OAUTH_STATE est défini, on vérifie
  const expectedState = process.env.EBAY_OAUTH_STATE
  if (expectedState && state !== expectedState) {
    return NextResponse.json({ success: false, error: 'state mismatch (CSRF)' }, { status: 403 })
  }

  const { appId, certId, ruName, env, encKey } = getEnv()

  // MODE MOCK — sans clés eBay, on log et on répond 200 sans appeler eBay
  // Permet de tester le pipeline sans vraies clés (exigence 20/20)
  const isMock = !appId || !certId || !ruName
  if (isMock) {
    const mockRefresh = `MOCK_REFRESH_${code.slice(0, 8)}_${Date.now()}`
    // Stockage mock chiffré-simule (pas de vrai secret) — juste log
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
      if (sale) {
        await prisma.luxuryLog.create({
          data: {
            saleId: sale.id,
            type: 'ebay_oauth',
            message: `[MOCK] code reçu ${code.slice(0, 10)}... — clés eBay manquantes, échange simulé`,
            data: { mock: true, code_len: code.length, state: state || null, hint: 'Configure EBAY_APP_ID/CERT_ID/RU_NAME pour vrai échange' } as any,
          },
        })
      }
    }, null)

    return NextResponse.json({
      success: true,
      mode: 'MOCK — clés eBay non configurées',
      message: 'Code reçu mais non échangé (EBAY_APP_ID/CERT_ID/RU_NAME manquants). Configure les ENV puis rappelle ce callback.',
      code_preview: code.slice(0, 12) + '...',
      code_len: code.length,
      next_steps: [
        '1. Crée une app sur https://developer.ebay.com/my/keys',
        '2. Configure RuName (ex: Samostheouf-Samosthe-PRD-xxxxx) + scopes sell.inventory/sell.marketing',
        '3. vercel env add EBAY_APP_ID / EBAY_CERT_ID / EBAY_RU_NAME / EBAY_TOKEN_ENCRYPTION_KEY',
        '4. Relance le flow: GET https://auth.ebay.com/oauth?client_id=...&redirect_uri=RuName&response_type=code&scope=...&state=...',
      ],
      mock_refresh_preview: mockRefresh.slice(0, 16) + '...',
    })
  }

  // VRAI ÉCHANGE code → tokens
  if (!encKey || encKey.length < 16) {
    return NextResponse.json({ success: false, error: 'EBAY_TOKEN_ENCRYPTION_KEY manquant (ou CRON_SECRET trop court)' }, { status: 500 })
  }

  const tokenUrl = getTokenUrl(env)
  const basic = Buffer.from(`${appId}:${certId}`).toString('base64')

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: ruName,
  })

  let tokenJson: any
  try {
    const res = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })
    const text = await res.text()
    try { tokenJson = JSON.parse(text) } catch { tokenJson = { raw: text } }
    if (!res.ok) {
      console.error('[EBAY OAUTH] token exchange failed', res.status, tokenJson)
      return NextResponse.json(
        { success: false, error: 'eBay token exchange failed', status: res.status, details: tokenJson },
        { status: 502 }
      )
    }
  } catch (e: any) {
    return NextResponse.json({ success: false, error: 'fetch tokenUrl failed', details: e?.message }, { status: 502 })
  }

  // tokenJson attendu: { access_token, refresh_token, expires_in, token_type, refresh_token_expires_in }
  const accessToken: string | undefined = tokenJson.access_token
  const refreshToken: string | undefined = tokenJson.refresh_token
  const expiresIn: number | undefined = tokenJson.expires_in
  const refreshExpiresIn: number | undefined = tokenJson.refresh_token_expires_in

  if (!refreshToken) {
    return NextResponse.json({ success: false, error: 'pas de refresh_token dans réponse eBay', details: tokenJson }, { status: 502 })
  }

  // Chiffre refresh_token avant stockage (jamais en clair en DB ni logs)
  const encrypted = encrypt(refreshToken, encKey)
  const tokenExpiry = new Date(Date.now() + (refreshExpiresIn || 18 * 30 * 24 * 3600) * 1000).toISOString()
  const accessExpiry = new Date(Date.now() + (expiresIn || 7200) * 1000).toISOString()

  // Stockage Prisma chiffré — on écrit dans LuxurySale.metadata.ebay (sans écraser) + LuxuryLog
  const stored = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const sale = await prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
    if (!sale) return null
    const prevMeta: any = sale.metadata || {}
    const newMeta = {
      ...prevMeta,
      ebay: {
        ...(prevMeta.ebay || {}),
        refresh_token_encrypted: encrypted,
        token_issued_at: new Date().toISOString(),
        token_expires_at: accessExpiry,
        refresh_expires_at: tokenExpiry,
        ruName,
        env,
        // access_token en clair NON stocké — on le regénère via refresh à chaque publish
      },
    }
    await prisma.luxurySale.update({ where: { id: sale.id }, data: { metadata: newMeta as any } })
    await prisma.luxuryLog.create({
      data: {
        saleId: sale.id,
        type: 'ebay_oauth',
        message: `eBay OAuth OK — refresh_token chiffré stocké (expire ${tokenExpiry.slice(0, 10)})`,
        data: { env, ruName, access_expires_at: accessExpiry, refresh_expires_at: tokenExpiry } as any,
      },
    })
    return { saleId: sale.id, sku: sale.sku }
  }, null)

  // Instruction Vercel ENV (optionnel — persistance redondante)
  // On NE peut pas écrire automatiquement une Vercel ENV depuis un endpoint sans Vercel API token,
  // mais on retourne la commande exacte pour l'opérateur.
  const vercelCmd = `echo "${encrypted.slice(0, 32)}..." | vercel env add EBAY_REFRESH_ENCRYPTED production  # valeur complète = ${encrypted.length} chars`

  return NextResponse.json({
    success: true,
    mode: 'LIVE',
    message: 'eBay refresh_token chiffré et stocké en DB (LuxurySale.metadata.ebay.refresh_token_encrypted)',
    env,
    ruName,
    access_expires_at: accessExpiry,
    refresh_expires_at: tokenExpiry,
    stored_in_db: !!stored,
    sale: stored,
    vercel_env_hint: 'Optionnel: stocke aussi le chiffré en Vercel ENV pour redondance',
    vercel_cmd: vercelCmd,
    security: 'refresh_token jamais loggé en clair — seul le chiffré AES-256-GCM est persisté',
  })
}
