import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { validateCsrfOrigin } from '@/lib/csrf'

const SESSION_SECRET = process.env.SESSION_SECRET
if (!SESSION_SECRET) {
  console.error('[SECURITY] SESSION_SECRET is not set')
  throw new Error('SESSION_SECRET must be set in environment variables')
}
const SECRET: string = SESSION_SECRET
const SESSION_COOKIE = 'admin_session'

const ALLOWED_ORIGINS = [
  process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app',
  'https://ai-empire-steel.vercel.app',
]

const PUBLIC_POST_ENDPOINTS = [
  '/api/auth/register',
  '/api/auth/login',
  '/api/newsletter',
  '/api/free-template',
  '/api/checkout',
  '/api/affiliate',
  '/api/demo',
  '/api/recovery',
  '/api/contact',
  '/api/live-viewers',
  '/api/analytics/web-vitals',
  '/api/analytics/ab-test',
  '/api/ai/chat',
]

function getClientIp(request: NextRequest): string {
  const vercelForwardedFor = request.headers.get('x-vercel-forwarded-for')
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(',')[0]?.trim() || 'unknown'
  }
  return (
    request.headers.get('x-real-ip') ||
    request.ip ||
    'unknown'
  )
}

function getCorsHeaders(request: NextRequest): Record<string, string> {
  const origin = request.headers.get('origin')
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key, X-CSRF-Token, X-Requested-With',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  }
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin
    headers['Access-Control-Allow-Credentials'] = 'true'
  }
  return headers
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false, ['sign']
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(data))
  return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function verifyAdminSession(request: NextRequest): Promise<NextResponse | null> {
  const sessionToken = request.cookies.get(SESSION_COOKIE)?.value
  if (!sessionToken) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const [body, signature] = sessionToken.split('.')
  if (!body || !signature) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const expectedSig = await hmacSign(body, SECRET)
  if (signature.length !== expectedSig.length) return new NextResponse('Unauthorized', { status: 401 })
  let r = 0
  for (let i = 0; i < signature.length; i++) { r |= signature.charCodeAt(i) ^ expectedSig.charCodeAt(i) }
  if (r !== 0) return new NextResponse('Unauthorized', { status: 401 })

  try {
    const payload = JSON.parse(atob(body.replace(/-/g,'+').replace(/_/g,'/')))
    if (payload.role !== 'admin') {
      return new NextResponse('Forbidden', { status: 403 })
    }
    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return new NextResponse('Session expired', { status: 401 })
    }
  } catch {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return null
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const method = request.method

  if (pathname.startsWith('/api/webhooks/')) {
    const response = NextResponse.next()
    const corsHeaders = getCorsHeaders(request)
    for (const [key, value] of Object.entries(corsHeaders)) {
      response.headers.set(key, value)
    }
    return response
  }

  if (method === 'OPTIONS') {
    const corsHeaders = getCorsHeaders(request)
    return new NextResponse(null, { status: 204, headers: corsHeaders })
  }

  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const adminError = await verifyAdminSession(request)
    if (adminError) return adminError
  }

  if (pathname.startsWith('/api/')) {
    const isAnalytics = pathname.startsWith('/api/analytics') || pathname === '/api/ai/chat'
    const isPublicPost = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(method) &&
      PUBLIC_POST_ENDPOINTS.some(ep => pathname.startsWith(ep))

    if (!isAnalytics && !isPublicPost) {
      const csrfResult = validateCsrfOrigin(request)
      if (!csrfResult.valid) {
        return new NextResponse(JSON.stringify({ error: csrfResult.error || 'Requête refusée' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    }

    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
      const isPublic = PUBLIC_POST_ENDPOINTS.some(ep => pathname.startsWith(ep))
      if (!isPublic) {
        const apiKey = request.headers.get('x-api-key')
        if (!apiKey) {
          return new NextResponse(JSON.stringify({ error: 'Authentification requise' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          })
        }
      }
    }

    const response = NextResponse.next()
    const corsHeaders = getCorsHeaders(request)
    for (const [key, value] of Object.entries(corsHeaders)) {
      response.headers.set(key, value)
    }
    return response
  }

  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://js.stripe.com https://fonts.googleapis.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' https://images.unsplash.com https://*.stripe.com data: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://api.stripe.com https://js.stripe.com https://checkout.stripe.com https://api.groq.com https://api.openai.com",
    "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://checkout.stripe.com",
    "worker-src 'self' blob:",
    "child-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
    "report-uri /api/csp-report",
  ].join('; ')

  request.headers.set('x-nonce', nonce)
  const finalResponse = NextResponse.next({ request })
  finalResponse.headers.set('Content-Security-Policy', csp)

  return finalResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
