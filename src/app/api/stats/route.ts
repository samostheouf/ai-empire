import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'

export async function GET(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`stats:${ip}`, 30, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 30)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    const stats = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const [userCount, templateCount, orderCount, downloadAggregate, viewsToday, completedOrders] = await Promise.all([
      prisma.apiUser.count(),
      prisma.template.count(),
      prisma.order.count({ where: { status: 'completed' } }),
      prisma.template.aggregate({ _sum: { downloads: true } }),
      prisma.analyticsEvent.count({
        where: { event: 'page_view', createdAt: { gte: today } },
      }),
      prisma.order.findMany({
        where: { status: 'completed' },
        select: { amount: true },
      }),
    ])

    const totalRevenue = completedOrders.reduce((sum, o) => sum + o.amount, 0)

    return {
      userCount,
      templateCount,
      totalDownloads: downloadAggregate._sum.downloads || 0,
      orderCount,
      totalRevenue,
      viewsToday,
    }
  }, {
    userCount: 0,
    templateCount: 10,
    totalDownloads: 0,
    orderCount: 0,
    totalRevenue: 0,
    viewsToday: 0,
  })

    return NextResponse.json(stats, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
    })
  } catch (err) {
    console.error('Stats retrieval error:', err)
    return NextResponse.json({ userCount: 0, templateCount: 10, totalDownloads: 0, orderCount: 0, totalRevenue: 0, viewsToday: 0 }, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
    })
  }
}
