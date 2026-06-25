import crypto from 'crypto'
import { NextResponse } from 'next/server'

const PBKDF2_ITERATIONS = 100000
const KEY_LENGTH = 64
const DIGEST = 'sha512'

interface AuthResult {
  user: { id: string; email: string; apiKey: string; plan: string; credits: number; createdAt: Date } | null
  error: NextResponse | null
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString('hex')
  const derived = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, DIGEST)
  return `${salt}:${derived.toString('hex')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const derived = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, DIGEST)
  return crypto.timingSafeEqual(Buffer.from(derived), Buffer.from(hash, 'hex'))
}

export async function authenticateApiKey(request: Request): Promise<AuthResult> {
  const apiKey = request.headers.get('x-api-key')
  if (!apiKey) {
    return { user: null, error: NextResponse.json({ error: 'Clé API requise' }, { status: 401 }) }
  }

  const { safeQuery } = await import('@/lib/db')
  const user = await safeQuery(
    async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.apiUser.findUnique({ where: { apiKey } })
    },
    null
  )

  if (!user) {
    return { user: null, error: NextResponse.json({ error: 'Clé API invalide' }, { status: 401 }) }
  }

  return { user, error: null }
}

export function verifyCronAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization') || ''
  const expected = `Bearer ${process.env.CRON_SECRET || ''}`
  if (!authHeader || !expected) return false
  const a = Buffer.from(authHeader)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}
