import { safeQuery } from '../db'

describe('safeQuery', () => {
  const originalEnv = process.env.DATABASE_URL

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.DATABASE_URL
    } else {
      process.env.DATABASE_URL = originalEnv
    }
  })

  it('returns fallback when DATABASE_URL is not set', async () => {
    delete process.env.DATABASE_URL
    const result = await safeQuery(async () => 'data', 'fallback')
    expect(result).toBe('fallback')
  })

  it('returns query result when DATABASE_URL is set', async () => {
    process.env.DATABASE_URL = 'postgresql://localhost:5432/test'
    const result = await safeQuery(async () => 'success', 'fallback')
    expect(result).toBe('success')
  })

  it('returns fallback on query error', async () => {
    process.env.DATABASE_URL = 'postgresql://localhost:5432/test'
    const result = await safeQuery(async () => {
      throw new Error('DB error')
    }, 'fallback')
    expect(result).toBe('fallback')
  })

  it('preserves complex return types', async () => {
    process.env.DATABASE_URL = 'postgresql://localhost:5432/test'
    const fallback = { count: 0, items: [] as string[] }
    const result = await safeQuery(async () => ({ count: 5, items: ['a', 'b'] }), fallback)
    expect(result).toEqual({ count: 5, items: ['a', 'b'] })
  })
})
