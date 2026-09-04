import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

/**
 * GET /api/ebay/auth — génère l'URL d'autorisation eBay OAuth
 *
 * Docs: https://developer.ebay.com/api-docs/static/oauth-authorization-code-grant.html
 * Prod consent URL: https://auth.ebay.com/oauth
 * Sandbox:          https://auth.sandbox.ebay.com/oauth
 */
export async function GET(request: NextRequest) {
  const appId = process.env.EBAY_APP_ID || ''
  const ruName = process.env.EBAY_RU_NAME || ''
  const env = (process.env.EBAY_ENV || 'production').toLowerCase()
  const state = process.env.EBAY_OAUTH_STATE || crypto.randomUUID?.() || Math.random().toString(36).slice(2)

  if (!appId || !ruName) {
    return NextResponse.json({
      success: false,
      error: 'EBAY_APP_ID ou EBAY_RU_NAME manquant',
      hint: 'vercel env add EBAY_APP_ID / EBAY_RU_NAME  — voir EBAY_AUTONOMIE_20_20.md §2',
      mock_url: 'https://auth.ebay.com/oauth?client_id=MOCK&redirect_uri=RuName&response_type=code&scope=...&state=...',
    }, { status: 428 })
  }

  const authBase = env === 'sandbox' ? 'https://auth.sandbox.ebay.com/oauth' : 'https://auth.ebay.com/oauth'
  const scopes = [
    'https://api.ebay.com/oauth/api_scope/sell.inventory',
    'https://api.ebay.com/oauth/api_scope/sell.marketing',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment',
    'https://api.ebay.com/oauth/api_scope/sell.analytics.readonly',
  ].join(' ')

  const url = new URL(authBase)
  url.searchParams.set('client_id', appId)
  url.searchParams.set('redirect_uri', ruName)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', scopes)
  url.searchParams.set('state', state)
  // prompt=login optionnel
  const redirectNow = request.nextUrl.searchParams.get('redirect') === '1'
  if (redirectNow) return NextResponse.redirect(url.toString())

  return NextResponse.json({
    success: true,
    env,
    ruName,
    authUrl: url.toString(),
    scopes: scopes.split(' '),
    state,
    next: 'Ouvre authUrl dans un navigateur vendeur eBay → autorise → callback redirige vers /api/ebay/callback?code=...',
  })
}
