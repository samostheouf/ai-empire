import crypto from 'crypto'
import { NextResponse } from 'next/server'

const PBKDF2_ITERATIONS = 100000
const KEY_LENGTH = 64
const DIGEST = 'sha512'

interface AuthResult {
  user: { id: string; email: string; apiKey: string; plan: string; credits: number; createdAt: Date } | null
  error: NextResponse | null
}

/**
 * Hashes a password using PBKDF2 with a random 16-byte salt.
 *
 * Returns a string in the format `salt:hash` (both hex-encoded).
 * Uses 100 000 iterations and SHA-512 for strong key derivation.
 *
 * @param password - The plaintext password to hash.
 * @returns A salted hash string suitable for storage.
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString('hex')
  const derived = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, DIGEST)
  return `${salt}:${derived.toString('hex')}`
}

/**
 * Verifies a plaintext password against a previously stored PBKDF2 hash.
 *
 * Uses `crypto.timingSafeEqual` to prevent timing attacks.
 *
 * @param password - The plaintext password to verify.
 * @param stored - The stored hash in `salt:hash` format.
 * @returns `true` if the password matches, `false` otherwise.
 */
export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const derived = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, DIGEST)
  return crypto.timingSafeEqual(Buffer.from(derived), Buffer.from(hash, 'hex'))
}

/**
 * Authenticates an API request by validating the `x-api-key` header.
 *
 * Looks up the key in the `apiUser` table via Prisma. Returns the
 * authenticated user on success, or a 401 JSON response on failure.
 *
 * @param request - The incoming HTTP request containing the API key header.
 * @returns An `AuthResult` with either the authenticated user or an error response.
 */
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

/**
 * Verifies that a request carries a valid `Authorization: Bearer <CRON_SECRET>` header.
 *
 * Uses constant-time comparison to prevent timing attacks. Returns `false`
 * if either the header or the `CRON_SECRET` environment variable is missing.
 *
 * @param request - The incoming HTTP request.
 * @returns `true` if the bearer token matches the cron secret.
 */
export function verifyCronAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization') || ''
  const expected = `Bearer ${process.env.CRON_SECRET || ''}`
  if (!authHeader || !expected) return false
  const a = Buffer.from(authHeader)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}
