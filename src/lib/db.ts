import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    if (!process.env.DATABASE_URL) {
      throw new Error('Missing DATABASE_URL')
    }
    globalForPrisma.prisma = new PrismaClient()
  }
  return globalForPrisma.prisma
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    const client = getPrismaClient()
    const val = (client as any)[prop]
    if (typeof val === 'function') {
      return val.bind(client)
    }
    return val
  },
})

export async function safeQuery<T>(queryFn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await queryFn()
  } catch {
    return fallback
  }
}
