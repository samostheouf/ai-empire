import { prisma, safeQuery } from '@/lib/db'

interface RateLimitResult {
  allowed: boolean
  remaining: number
  resetIn: number
}

export async function rateLimit(
  key: string,
  limit: number = 100,
  windowMs: number = 60_000
): Promise<RateLimitResult> {
  const windowSeconds = Math.ceil(windowMs / 1000)

  const rows = await safeQuery(
    async () => {
      return prisma.$queryRaw<{ count: number; resetAt: Date }[]>`
        INSERT INTO "RateLimit" (key, count, "resetAt")
        VALUES (${key}, 1, NOW() + (${windowSeconds} || ' seconds')::INTERVAL)
        ON CONFLICT (key) DO UPDATE SET
          count = CASE
            WHEN "RateLimit"."resetAt" < NOW() THEN 1
            ELSE "RateLimit".count + 1
          END,
          "resetAt" = CASE
            WHEN "RateLimit"."resetAt" < NOW() THEN NOW() + (${windowSeconds} || ' seconds')::INTERVAL
            ELSE "RateLimit"."resetAt"
          END
        RETURNING count, "resetAt"
      `
    },
    [] as { count: number; resetAt: Date }[]
  )

  if (rows.length === 0) {
    return { allowed: true, remaining: limit - 1, resetIn: Math.ceil(windowMs / 1000) }
  }

  const row = rows[0]
  const now = Date.now()
  const resetAt = new Date(row.resetAt).getTime()
  const resetIn = Math.ceil(Math.max(0, resetAt - now) / 1000)

  if (row.count > limit) {
    return { allowed: false, remaining: 0, resetIn }
  }

  return { allowed: true, remaining: limit - row.count, resetIn }
}

export async function resetRateLimit(key: string): Promise<void> {
  await safeQuery(
    async () => {
      await prisma.$executeRaw`DELETE FROM "RateLimit" WHERE key = ${key}`
    },
    undefined
  )
}

export function getRateLimitHeaders(
  result: RateLimitResult,
  limit: number
): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(result.resetIn),
  }
}
