import { NextResponse } from 'next/server'
import { safeQuery, prisma } from '@/lib/db'

export async function GET() {
  const stats = await safeQuery(async () => {
    const [totalVisitors, totalRegistrations, totalApiCalls, successfulPayments] = await Promise.all([
      prisma.analyticsEvent.findMany({
        where: { event: 'page_view' },
        select: { visitorId: true },
      }).then(events => new Set(events.map(e => e.visitorId)).size),
      prisma.apiUser.count(),
      prisma.usageLog.count(),
      prisma.webhookEvent.findMany({
        where: { type: 'checkout.session.completed', processed: true },
      }).then(events => events.length),
    ])

    const revenue = await safeQuery(async () => {
      const result = await prisma.$queryRaw<[{ sum: bigint | null }]>`
        SELECT SUM(CAST(data AS NUMERIC)) as sum
        FROM "WebhookEvent"
        WHERE type = 'checkout.session.completed'
          AND processed = true
      `
      return Number(result[0]?.sum ?? 0)
    }, 0)

    const conversionRate = totalVisitors > 0
      ? ((totalRegistrations / totalVisitors) * 100).toFixed(2)
      : '0.00'

    return {
      totalVisitors,
      totalRegistrations,
      totalApiCalls,
      successfulPayments,
      revenue,
      conversionRate,
    }
  }, {
    totalVisitors: 0,
    totalRegistrations: 0,
    totalApiCalls: 0,
    successfulPayments: 0,
    revenue: 0,
    conversionRate: '0.00',
  })

  return NextResponse.json(stats, {
    headers: { 'Cache-Control': 'private, max-age=30' },
  })
}
