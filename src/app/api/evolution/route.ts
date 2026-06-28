import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const reports = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.evolutionReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
  }, [])

  return NextResponse.json({ success: true, reports })
}
