import { PrismaClient } from '@prisma/client'
import { logger } from '@/lib/logger'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Appends a `connection_limit=5` query parameter to the database URL
 * if one is not already present, to bound connection pool size.
 *
 * @returns The augmented database URL, or `undefined` if `DATABASE_URL` is not set.
 */
function getDatabaseUrl(): string | undefined {
  const url = process.env.DATABASE_URL
  if (!url) return undefined
  if (url.includes('connection_limit')) return url
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}connection_limit=5`
}

/**
 * Returns a singleton PrismaClient, reusing the instance across hot reloads
 * in development. Returns `null` when `DATABASE_URL` is missing.
 */
function getPrismaClient(): PrismaClient | null {
  const url = getDatabaseUrl()
  if (!url) return null
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({
      datasourceUrl: url,
    })
  }
  return globalForPrisma.prisma
}

/**
 * Singleton Prisma client for database access.
 * Cast to non-nullable for convenience; callers should be aware it may
 * be effectively null when `DATABASE_URL` is unset (e.g. at build time).
 */
export const prisma: PrismaClient = getPrismaClient() as PrismaClient

/**
 * Executes a database query with automatic error handling and fallback.
 *
 * If the query throws, the error is logged and `fallback` is returned instead.
 * This prevents database failures from crashing API routes.
 *
 * @param queryFn - Async function that performs the database query.
 * @param fallback - Value to return when the query fails.
 * @returns The query result, or `fallback` on error.
 *
 * @example
 * ```ts
 * const users = await safeQuery(
 *   () => prisma.user.findMany(),
 *   []
 * )
 * ```
 */
export async function safeQuery<T>(queryFn: () => Promise<T>, fallback: T): Promise<T> {
  if (!prisma) return fallback
  try {
    return await queryFn()
  } catch (err) {
    logger.error('database', 'Query failed', { error: err instanceof Error ? err.message : String(err) })
    return fallback
  }
}
