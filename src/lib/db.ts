import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getDatabaseUrl(): string | undefined {
  const url = process.env.DATABASE_URL
  if (!url) return undefined
  if (url.includes('connection_limit')) return url
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}connection_limit=5`
}

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

export const prisma: PrismaClient = getPrismaClient() as PrismaClient

export async function safeQuery<T>(queryFn: () => Promise<T>, fallback: T): Promise<T> {
  if (!prisma) return fallback
  try {
    await prisma.$connect()
    return await queryFn()
  } catch (err) {
    console.error('[safeQuery] Database error:', err)
    return fallback
  } finally {
    prisma.$disconnect().catch(() => {})
  }
}
