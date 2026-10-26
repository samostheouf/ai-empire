import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { logger } from '@/lib/logger'
import { validateId } from '@/lib/input-validation'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const apiKey = request.headers.get('x-api-key')

    if (!authHeader && !apiKey) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const fromParam = searchParams.get('from')
    const toParam = searchParams.get('to')
    const pageFilter = searchParams.get('page')
    const isLive = searchParams.get('live') === 'true'

    const fromDate = isLive
      ? new Date(Date.now() - 24 * 60 * 60 * 1000)
      : fromParam ? new Date(fromParam) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    const toDate = toParam ? new Date(toParam + 'T23:59:59.999Z') : new Date()

    const data = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const baseWhere = `createdAt >= '${fromDate.toISOString()}' AND createdAt <= '${toDate.toISOString()}'`
      const pvWhere = `${baseWhere} AND event = 'page_view'`

      const countsResult = await prisma.$queryRawUnsafe<{ total: bigint }[]>(`
        SELECT COUNT(*) AS total FROM "AnalyticsEvent" WHERE ${pvWhere}
      `)
      const totalPageViews = Number(countsResult[0]?.total ?? 0)

      const uniqueVisitorsResult = await prisma.$queryRawUnsafe<{ cnt: bigint }[]>(`
        SELECT COUNT(DISTINCT "visitorId") AS cnt FROM "AnalyticsEvent" WHERE ${pvWhere}
      `)
      const uniquePageViewVisitors = Number(uniqueVisitorsResult[0]?.cnt ?? 0)

      const topPages = await prisma.$queryRawUnsafe<{ page: string; views: bigint; unique_visitors: bigint }[]>(`
        SELECT
          page,
          COUNT(*) AS views,
          COUNT(DISTINCT "visitorId") AS unique_visitors
        FROM "AnalyticsEvent"
        WHERE ${pvWhere} AND page IS NOT NULL
        GROUP BY page
        ORDER BY views DESC
        LIMIT 20
      `)

      const topPagesMapped = topPages.map((p) => ({
        page: p.page,
        views: Number(p.views),
        uniqueVisitors: Number(p.unique_visitors),
      }))

      const validatedPage = pageFilter ? validateId(pageFilter) : null
      const pageViewsFiltered: { visitorId: string }[] = validatedPage
        ? await prisma.$queryRawUnsafe<{ visitorId: string }[]>(`
            SELECT "visitorId" FROM "AnalyticsEvent"
            WHERE ${pvWhere} AND page = ${validatedPage}
          `)
        : []

      const avgTimeOnPage = 0
      const timeDistribution = { '0-10s': 0, '10-30s': 0, '30-60s': 0, '60s+': 0 }

      const ctaCounts: Record<string, number> = {}

      const funnelResult = await prisma.$queryRawUnsafe<{ event: string; cnt: bigint }[]>(`
        SELECT event, COUNT(*) AS cnt
        FROM "AnalyticsEvent"
        WHERE ${baseWhere} AND event IN ('register_start', 'register_complete', 'checkout_start', 'checkout_complete')
        GROUP BY event
      `)
      const funnelMap: Record<string, number> = {}
      for (const row of funnelResult) {
        funnelMap[row.event] = Number(row.cnt)
      }
      const registerStarts = funnelMap['register_start'] ?? 0
      const registerCompletes = funnelMap['register_complete'] ?? 0
      const checkoutStarts = funnelMap['checkout_start'] ?? 0
      const checkoutCompletes = funnelMap['checkout_complete'] ?? 0

      const scrollStats: Record<number, number> = { 25: 0, 50: 0, 75: 0, 100: 0 }

      const deviceCounts: Record<string, number> = {}
      const browserCounts: Record<string, number> = {}

      const utmSourceCounts: Record<string, number> = {}
      const utmMediumCounts: Record<string, number> = {}
      const utmCampaignCounts: Record<string, number> = {}

      const last7DaysResult = await prisma.$queryRawUnsafe<{ day: string; visitors: bigint; conversions: bigint }[]>(`
        WITH days AS (
          SELECT generate_series(
            (CURRENT_DATE - INTERVAL '6 days')::date,
            CURRENT_DATE::date,
            INTERVAL '1 day'
          )::date AS day
        )
        SELECT
          to_char(d.day, 'YYYY-MM-DD') AS day,
          COUNT(DISTINCT ae."visitorId") AS visitors,
          COUNT(*) FILTER (WHERE ae.event = 'checkout_complete') AS conversions
        FROM days d
        LEFT JOIN "AnalyticsEvent" ae ON ae."createdAt" >= d.day::timestamp AND ae."createdAt" < (d.day + INTERVAL '1 day')::timestamp
        GROUP BY d.day
        ORDER BY d.day ASC
      `)
      const last7Days: Array<{ date: string; visitors: number; conversions: number }> = last7DaysResult.map((r) => ({
        date: r.day,
        visitors: Number(r.visitors),
        conversions: Number(r.conversions),
      }))

      return {
        totalPageViews,
        uniqueVisitors: uniquePageViewVisitors,
        funnel: {
          visitors: uniquePageViewVisitors,
          registerStarts,
          registerCompletes,
          checkoutStarts,
          checkoutCompletes,
          conversionRate: uniquePageViewVisitors > 0
            ? ((checkoutCompletes / uniquePageViewVisitors) * 100).toFixed(2) + '%'
            : '0%',
        },
        topPages: topPagesMapped,
        avgTimeOnPage,
        timeDistribution,
        scrollDepths: scrollStats,
        ctaClickRates: ctaCounts,
        deviceBreakdown: { devices: deviceCounts, browsers: browserCounts },
        utmTraffic: { source: utmSourceCounts, medium: utmMediumCounts, campaign: utmCampaignCounts },
        last7Days,
        totalEvents: totalPageViews,
        dateRange: { from: fromDate.toISOString(), to: toDate.toISOString() },
        isLive,
      }
    }, {
      totalPageViews: 0,
      uniqueVisitors: 0,
      funnel: { visitors: 0, registerStarts: 0, registerCompletes: 0, checkoutStarts: 0, checkoutCompletes: 0, conversionRate: '0%' },
      topPages: [],
      avgTimeOnPage: 0,
      timeDistribution: { '0-10s': 0, '10-30s': 0, '30-60s': 0, '60s+': 0 },
      scrollDepths: { 25: 0, 50: 0, 75: 0, 100: 0 },
      ctaClickRates: {},
      deviceBreakdown: { devices: {}, browsers: {} },
      utmTraffic: { source: {}, medium: {}, campaign: {} },
      last7Days: [],
      totalEvents: 0,
      dateRange: { from: '', to: '' },
      isLive: false,
    })

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
