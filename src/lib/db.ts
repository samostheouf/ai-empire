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

enum CircuitState {
  CLOSED = 'closed',
  OPEN = 'open',
  HALF_OPEN = 'half_open',
}

interface CircuitBreakerState {
  state: CircuitState
  failureCount: number
  lastFailureTime: number
  successCount: number
}

const circuitBreaker: CircuitBreakerState = {
  state: CircuitState.CLOSED,
  failureCount: 0,
  lastFailureTime: 0,
  successCount: 0,
}

const FAILURE_THRESHOLD = 5
const RECOVERY_TIMEOUT_MS = 30000
const SUCCESS_THRESHOLD = 3

function isCircuitOpen(): boolean {
  if (circuitBreaker.state === CircuitState.OPEN) {
    const now = Date.now()
    if (now - circuitBreaker.lastFailureTime >= RECOVERY_TIMEOUT_MS) {
      circuitBreaker.state = CircuitState.HALF_OPEN
      circuitBreaker.successCount = 0
      logger.info('database', 'Circuit breaker entering half-open state')
      return false
    }
    return true
  }
  return false
}

function recordSuccess(): void {
  if (circuitBreaker.state === CircuitState.HALF_OPEN) {
    circuitBreaker.successCount++
    if (circuitBreaker.successCount >= SUCCESS_THRESHOLD) {
      circuitBreaker.state = CircuitState.CLOSED
      circuitBreaker.failureCount = 0
      logger.info('database', 'Circuit breaker closed - database recovered')
    }
  } else {
    circuitBreaker.failureCount = 0
  }
}

function recordFailure(): void {
  circuitBreaker.failureCount++
  circuitBreaker.lastFailureTime = Date.now()

  if (circuitBreaker.state === CircuitState.HALF_OPEN) {
    circuitBreaker.state = CircuitState.OPEN
    logger.error('database', 'Circuit breaker reopened - database still unhealthy')
  } else if (circuitBreaker.failureCount >= FAILURE_THRESHOLD) {
    circuitBreaker.state = CircuitState.OPEN
    logger.error('database', 'Circuit breaker opened after consecutive failures', {
      failureCount: circuitBreaker.failureCount,
    })
  }
}

export function getCircuitBreakerState(): CircuitBreakerState {
  return { ...circuitBreaker }
}

/**
 * Executes a database query with automatic error handling, circuit breaker, and fallback.
 *
 * If the circuit is open, the fallback is returned immediately without attempting the query.
 * If the query throws, the error is logged, the circuit breaker records the failure,
 * and `fallback` is returned instead.
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

  if (isCircuitOpen()) {
    logger.warn('database', 'Circuit open, returning fallback')
    return fallback
  }

  try {
    const result = await queryFn()
    recordSuccess()
    return result
  } catch (err) {
    recordFailure()
    logger.error('database', 'Query failed', {
      error: err instanceof Error ? err.message : String(err),
      circuitState: circuitBreaker.state,
      failureCount: circuitBreaker.failureCount,
    })
    return fallback
  }
}
