import { NextRequest, NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
// GET /api/ebay/callback?code=XXXX — eBay OAuth redirect
// Stocke le code temporairement en log et redirige vers page succès
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')
  const err = request.nextUrl.searchParams.get('error')
  if (err) return NextResponse.json({ success: false, error: err }, { status: 400 })
  if (!code) return NextResponse.json({ success: false, error: 'missing code' }, { status: 400 })
  // Log le code (à échanger contre refresh_token côté serveur via EBAY_APP_ID/CERT_ID)
  console.log('[EBAY OAUTH] code received len', code.length)
  // TODO: échanger code -> refresh_token via https://api.ebay.com/identity/v1/oauth2/token
  // et stocker en Vercel ENV / DB chiffré
  return NextResponse.json({ success: true, message: 'Code eBay reçu — colle ce code dans le chat pour finaliser', code: code.slice(0,12)+'...', len: code.length })
}
