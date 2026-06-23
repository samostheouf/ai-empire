import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import crypto from 'crypto'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { validateCsrfOrigin } from '@/lib/csrf'

const SESSION_SECRET = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || ''
if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRET (or ADMIN_PASSWORD) must be set')
}
const SESSION_COOKIE = 'admin_session'

const AUTH_RATE_LIMIT = 20
const API_RATE_LIMIT = 100
const STRICT_RATE_LIMIT = 30

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
]

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.ip ||
    'unknown'
  )
}

function hmacSign(data: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(data).digest('hex')
}

function verifyAdminSession(request: NextRequest): NextResponse | null {
  const sessionToken = request.cookies.get(SESSION_COOKIE)?.value
  if (!sessionToken) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const [body, signature] = sessionToken.split('.')
  if (!body || !signature) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const expectedSig = hmacSign(body, SESSION_SECRET)
  const sigBuf = Buffer.from(signature, 'hex')
  const expectedBuf = Buffer.from(expectedSig, 'hex')
  if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const payload = JSON.parse(Buffer.from(body, 'base64url').toString())
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

export function middleware(request: NextRequest) {
  const ip = getClientIp(request)
  const pathname = request.nextUrl.pathname
  const method = request.method

  if (pathname.startsWith('/api/webhooks/')) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const adminError = verifyAdminSession(request)
    if (adminError) return adminError
  }

  if (pathname.startsWith('/api/auth/')) {
    const result = rateLimit(`auth:${ip}`, AUTH_RATE_LIMIT, 60_000)
    const headers = getRateLimitHeaders(result, AUTH_RATE_LIMIT)
    if (!result.allowed) {
      return new NextResponse(JSON.stringify({ error: 'Trop de requêtes. Réessayez plus tard.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }
    const response = NextResponse.next()
    for (const [key, value] of Object.entries(headers)) {
      response.headers.set(key, value)
    }
    return response
  }

  if (pathname.startsWith('/api/')) {
    const isStrict = pathname.startsWith('/api/billing') || pathname.startsWith('/api/checkout') || pathname.startsWith('/api/marketing')
    const limit = isStrict ? STRICT_RATE_LIMIT : API_RATE_LIMIT
    const prefix = isStrict ? 'strict' : 'api'
    const result = rateLimit(`${prefix}:${ip}`, limit, 60_000)
    const headers = getRateLimitHeaders(result, limit)

    if (!result.allowed) {
      return new NextResponse(JSON.stringify({ error: 'Trop de requêtes. Réessayez plus tard.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    const csrfResult = validateCsrfOrigin(request)
    if (!csrfResult.valid) {
      return new NextResponse(JSON.stringify({ error: csrfResult.error || 'Requête refusée' }), {
        status: 403,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }

    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
      const isPublic = PUBLIC_POST_ENDPOINTS.some(ep => pathname.startsWith(ep))
      if (!isPublic) {
        const apiKey = request.headers.get('x-api-key')
        if (!apiKey) {
          return new NextResponse(JSON.stringify({ error: 'Authentification requise' }), {
            status: 401,
            headers: { ...headers, 'Content-Type': 'application/json' },
          })
        }
      }
    }

    const response = NextResponse.next()
    for (const [key, value] of Object.entries(headers)) {
      response.headers.set(key, value)
    }
    return response
  }

  const nonce = crypto.randomBytes(16).toString('base64')
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://js.stripe.com https://fonts.googleapis.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' https://images.unsplash.com data: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://api.stripe.com https://js.stripe.com https://checkout.stripe.com",
    "frame-src https://js.stripe.com https://hooks.stripe.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "report-uri /api/csp-report",
  ].join('; ')

  request.headers.set('x-nonce', nonce)
  const finalResponse = NextResponse.next({ request })
  finalResponse.headers.set('Content-Security-Policy', csp)

  return finalResponse
}

export const config = {
  matcher: ['/api/:path*', '/admin/:path*'],
}
