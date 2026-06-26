import crypto from 'crypto'
import { NextResponse } from 'next/server'

const SESSION_SECRET = process.env.SESSION_SECRET
if (!SESSION_SECRET || SESSION_SECRET === 'build-time-fallback' || SESSION_SECRET === 'changeme' || SESSION_SECRET.length < 32) {
  throw new Error('[SECURITY] SESSION_SECRET must be a strong random string (min 32 chars). Set it in your environment.')
}
const SESSION_MAX_AGE = 60 * 60 * 8 // 8 hours in seconds
const SESSION_COOKIE = 'admin_session'

interface SessionPayload {
  role: 'admin'
  iat: number
  exp: number
}

function hmacSign(data: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(data).digest('hex')
}

export function createSessionCookie(): string {
  const payload: SessionPayload = {
    role: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
  }
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const signature = hmacSign(body, SESSION_SECRET)
  return `${body}.${signature}`
}

export function verifySession(sessionToken: string): SessionPayload | null {
  try {
    const [body, signature] = sessionToken.split('.')
    if (!body || !signature) return null

    const expectedSig = hmacSign(body, SESSION_SECRET)
    const sigBuf = Buffer.from(signature, 'hex')
    const expectedBuf = Buffer.from(expectedSig, 'hex')
    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) return null

    const payload: SessionPayload = JSON.parse(Buffer.from(body, 'base64url').toString())
    if (payload.exp < Math.floor(Date.now() / 1000)) return null
    if (payload.role !== 'admin') return null

    return payload
  } catch {
    return null
  }
}

export function setSessionCookie(response: NextResponse): NextResponse {
  const token = createSessionCookie()
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  })
  return response
}

export function destroySessionCookie(response: NextResponse): NextResponse {
  response.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0,
  })
  return response
}

export function getSessionFromRequest(request: Request): SessionPayload | null {
  const cookieHeader = request.headers.get('cookie') || ''
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map((c) => {
      const [key, ...val] = c.trim().split('=')
      return [key, val.join('=')]
    })
  )
  const token = cookies[SESSION_COOKIE]
  if (!token) return null
  return verifySession(token)
}
