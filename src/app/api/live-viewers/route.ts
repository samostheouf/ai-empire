import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

const activeVisitors = new Map<string, number>()
const VISITOR_TIMEOUT = 30000

function getActiveCount(): number {
  const now = Date.now()
  for (const [key, timestamp] of activeVisitors) {
    if (now - timestamp > VISITOR_TIMEOUT) {
      activeVisitors.delete(key)
    }
  }
  return activeVisitors.size
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { visitorId } = body

    if (!visitorId || typeof visitorId !== 'string') {
      return NextResponse.json({ count: getActiveCount() })
    }

    activeVisitors.set(visitorId, Date.now())

    return NextResponse.json({ count: getActiveCount() })
  } catch {
    return NextResponse.json({ count: activeVisitors.size })
  }
}

export async function GET() {
  try {
    const dbCount = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const fiveMinAgo = new Date(Date.now() - 5 * 60 * 1000)
      return prisma.analyticsEvent.count({
        where: {
          event: 'page_view',
          createdAt: { gte: fiveMinAgo },
        },
      })
    }, 0)

    const memoryCount = getActiveCount()
    const count = Math.max(memoryCount, Math.min(dbCount, 50))

    return NextResponse.json({
      count: Math.max(count, 1),
    }, {
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    })
  } catch {
    return NextResponse.json({ count: 1 })
  }
}
