import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { authenticateApiKey } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const auth = await authenticateApiKey(request)
  if (auth.error) return auth.error

  const reports = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.evolutionReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
  }, [])

  return NextResponse.json({ success: true, reports })
}
