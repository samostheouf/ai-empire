import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Edge-compatible in-memory rate limiter (middleware runs on Edge, not Node.js)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function rateLimit(key: string, limit: number = 100, windowMs: number = 60_000): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(key)
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true, remaining: limit - 1, resetIn: Math.ceil(windowMs / 1000) }
  }
  entry.count++
  if (entry.count > limit) {
    return { allowed: false, remaining: 0, resetIn: Math.ceil((entry.resetAt - now) / 1000) }
  }
  return { allowed: true, remaining: limit - entry.count, resetIn: Math.ceil((entry.resetAt - now) / 1000) }
}

function getRateLimitHeaders(result: { remaining: number; resetIn: number }, limit: number) {
  return {
    'X-RateLimit-Limit': String(limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(result.resetIn),
  } as Record<string, string>
}
import { validateCsrfOrigin } from '@/lib/csrf'

const SESSION_SECRET = process.env.SESSION_SECRET || 'neuraapi-session-secret-change-me'
if (!SESSION_SECRET || SESSION_SECRET === 'changeme' || SESSION_SECRET === 'neuraapi-session-secret-change-me') {
  console.warn('[SECURITY] SESSION_SECRET not configured — using fallback. Set a strong secret in production.')
}
if (!SESSION_SECRET) {
  throw new Error('SESSION_SECRET (or ADMIN_PASSWORD) must be set')
}
const SESSION_COOKIE = 'admin_session'

const AUTH_RATE_LIMIT = 20
const API_RATE_LIMIT = 100
const STRICT_RATE_LIMIT = 30
const WEBHOOK_RATE_LIMIT = 100
const DEMO_RATE_LIMIT = 20

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
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.ip ||
    'unknown'
  )
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

  const expectedSig = await hmacSign(body, SESSION_SECRET)
  // Constant-time comparison without Node.js Buffer
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
  const ip = getClientIp(request)
  const pathname = request.nextUrl.pathname
  const method = request.method

  if (pathname.startsWith('/api/webhooks/')) {
    const result = rateLimit(`webhook:${ip}`, WEBHOOK_RATE_LIMIT, 60_000)
    const headers = getRateLimitHeaders(result, WEBHOOK_RATE_LIMIT)
    if (!result.allowed) {
      return new NextResponse(JSON.stringify({ error: 'Trop de requêtes. Réessayez plus tard.' }), {
        status: 429,
        headers: { ...headers, 'Content-Type': 'application/json' },
      })
    }
    return NextResponse.next()
  }

  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const adminError = await verifyAdminSession(request)
    if (adminError) return adminError
  }

  if (pathname === '/api/demo') {
    const result = rateLimit(`demo:${ip}`, DEMO_RATE_LIMIT, 60_000)
    const headers = getRateLimitHeaders(result, DEMO_RATE_LIMIT)
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

    const isAnalytics = pathname.startsWith('/api/analytics') || pathname === '/api/ai/chat'
    if (!isAnalytics) {
      const csrfResult = validateCsrfOrigin(request)
      if (!csrfResult.valid) {
        return new NextResponse(JSON.stringify({ error: csrfResult.error || 'Requête refusée' }), {
          status: 403,
          headers: { ...headers, 'Content-Type': 'application/json' },
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

  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))))
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
