interface RateLimitEntry {
  count: number
  resetTime: number
}

const store = new Map<string, RateLimitEntry>()

function cleanupExpiredEntries() {
  const now = Date.now()
  const keysToDelete: string[] = []
  store.forEach((entry, key) => {
    if (now > entry.resetTime) {
      keysToDelete.push(key)
    }
  })
  for (const key of keysToDelete) {
    store.delete(key)
  }
}

export function rateLimit(
  ip: string,
  limit: number = 100,
  windowMs: number = 60_000
): { allowed: boolean; remaining: number; resetIn: number } {
  cleanupExpiredEntries()

  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetTime) {
    store.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: limit - 1, resetIn: windowMs }
  }

  if (entry.count >= limit) {
    const resetIn = Math.ceil((entry.resetTime - now) / 1000)
    return { allowed: false, remaining: 0, resetIn }
  }

  entry.count++
  const resetIn = Math.ceil((entry.resetTime - now) / 1000)
  return { allowed: true, remaining: limit - entry.count, resetIn }
}

export function getRateLimitHeaders(
  result: ReturnType<typeof rateLimit>,
  limit: number
): Record<string, string> {
  return {
    'X-RateLimit-Limit': String(limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(result.resetIn),
  }
}
