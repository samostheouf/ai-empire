import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getPrismaClient(): PrismaClient | null {
  if (!process.env.DATABASE_URL) return null
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient()
  }
  return globalForPrisma.prisma
}

export const prisma: PrismaClient = getPrismaClient() as any

export async function safeQuery<T>(queryFn: () => Promise<T>, fallback: T): Promise<T> {
  if (!process.env.DATABASE_URL) return fallback
  try {
    return await queryFn()
  } catch {
    return fallback
  }
}
