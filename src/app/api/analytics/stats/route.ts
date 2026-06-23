import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

function parseUserAgent(ua: string | null): { device: string; browser: string } {
  if (!ua) return { device: 'Inconnu', browser: 'Inconnu' }
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua)
  let browser = 'Autre'
  if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome'
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari'
  else if (ua.includes('Firefox')) browser = 'Firefox'
  else if (ua.includes('Edg')) browser = 'Edge'
  return { device: isMobile ? 'Mobile' : 'Desktop', browser }
}

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

      const baseWhere = { createdAt: { gte: fromDate, lte: toDate } }

      const [totalPageViews, uniqueVisitorResult, uniquePageViewVisitorResult] = await Promise.all([
        prisma.analyticsEvent.count({ where: { ...baseWhere, event: 'page_view' } }),
        prisma.analyticsEvent.findMany({
          where: baseWhere,
          select: { visitorId: true },
          distinct: ['visitorId'],
        }),
        prisma.analyticsEvent.findMany({
          where: { ...baseWhere, event: 'page_view' },
          select: { visitorId: true },
          distinct: ['visitorId'],
        }),
      ])

      const uniqueVisitors = uniqueVisitorResult.length
      const uniquePageViewVisitors = uniquePageViewVisitorResult.length

      const pageViewGroup = await prisma.analyticsEvent.groupBy({
        by: ['page'],
        where: { ...baseWhere, event: 'page_view' },
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
        take: 20,
      })

      const topPages = await Promise.all(
        pageViewGroup
          .filter((g): g is typeof g & { page: string } => g.page !== null)
          .map(async (g) => {
            const visitors = await prisma.analyticsEvent.findMany({
              where: { ...baseWhere, event: 'page_view', page: g.page },
              select: { visitorId: true },
              distinct: ['visitorId'],
            })
            return { page: g.page, views: g._count.id, uniqueVisitors: visitors.length }
          })
      )

      const pageViewsFiltered = pageFilter
        ? await prisma.analyticsEvent.findMany({
            where: { ...baseWhere, event: 'page_view', page: pageFilter },
            select: { data: true, visitorId: true },
          })
        : []

      const timeEvents = await prisma.analyticsEvent.findMany({
        where: { ...baseWhere, event: 'time_on_page' },
        select: { data: true },
      })

      let avgTimeOnPage = 0
      const timeDistribution = { '0-10s': 0, '10-30s': 0, '30-60s': 0, '60s+': 0 }
      let totalTime = 0
      for (const e of timeEvents) {
        try {
          const parsed = e.data ? JSON.parse(e.data) : null
          const secs = parsed?.seconds || 0
          totalTime += secs
          if (secs <= 10) timeDistribution['0-10s']++
          else if (secs <= 30) timeDistribution['10-30s']++
          else if (secs <= 60) timeDistribution['30-60s']++
          else timeDistribution['60s+']++
        } catch (err) {
          logger.error('analytics', 'Failed to parse time distribution', { error: err instanceof Error ? err.message : String(err) })
        }
      }
      if (timeEvents.length > 0) avgTimeOnPage = Math.round(totalTime / timeEvents.length)

      const ctaEvents = await prisma.analyticsEvent.findMany({
        where: { ...baseWhere, event: 'cta_click' },
        select: { data: true },
      })
      const ctaCounts: Record<string, number> = {}
      for (const e of ctaEvents) {
        try {
          const parsed = e.data ? JSON.parse(e.data) : null
          const label = parsed?.label || 'inconnu'
          ctaCounts[label] = (ctaCounts[label] || 0) + 1
        } catch {
          ctaCounts['inconnu'] = (ctaCounts['inconnu'] || 0) + 1
        }
      }

      const [registerStarts, registerCompletes, checkoutStarts, checkoutCompletes] = await Promise.all([
        prisma.analyticsEvent.count({ where: { ...baseWhere, event: 'register_start' } }),
        prisma.analyticsEvent.count({ where: { ...baseWhere, event: 'register_complete' } }),
        prisma.analyticsEvent.count({ where: { ...baseWhere, event: 'checkout_start' } }),
        prisma.analyticsEvent.count({ where: { ...baseWhere, event: 'checkout_complete' } }),
      ])

      const scrollEvents = await prisma.analyticsEvent.findMany({
        where: { ...baseWhere, event: 'scroll_depth' },
        select: { data: true },
      })
      const scrollStats: Record<number, number> = { 25: 0, 50: 0, 75: 0, 100: 0 }
      for (const e of scrollEvents) {
        try {
          const parsed = e.data ? JSON.parse(e.data) : null
          const depth = parsed?.depth
          if (depth && depth in scrollStats) scrollStats[depth]++
        } catch (err) {
          logger.error('analytics', 'Failed to parse scroll depth data', { error: err instanceof Error ? err.message : String(err) })
        }
      }

      const deviceEvents = await prisma.analyticsEvent.findMany({
        where: { ...baseWhere, event: 'page_view' },
        select: { data: true },
      })
      const deviceCounts: Record<string, number> = {}
      const browserCounts: Record<string, number> = {}
      for (const e of deviceEvents) {
        try {
          const parsed = e.data ? JSON.parse(e.data) : null
          const ua = parsed?.userAgent || null
          const { device, browser } = parseUserAgent(ua)
          deviceCounts[device] = (deviceCounts[device] || 0) + 1
          browserCounts[browser] = (browserCounts[browser] || 0) + 1
        } catch (err) {
          logger.error('analytics', 'Failed to parse device data', { error: err instanceof Error ? err.message : String(err) })
        }
      }

      const allEventsForUtm = await prisma.analyticsEvent.findMany({
        where: baseWhere,
        select: { data: true },
      })
      const utmSourceCounts: Record<string, number> = {}
      const utmMediumCounts: Record<string, number> = {}
      const utmCampaignCounts: Record<string, number> = {}
      for (const e of allEventsForUtm) {
        try {
          const parsed = e.data ? JSON.parse(e.data) : null
          if (parsed?.utmSource) utmSourceCounts[parsed.utmSource] = (utmSourceCounts[parsed.utmSource] || 0) + 1
          if (parsed?.utmMedium) utmMediumCounts[parsed.utmMedium] = (utmMediumCounts[parsed.utmMedium] || 0) + 1
          if (parsed?.utmCampaign) utmCampaignCounts[parsed.utmCampaign] = (utmCampaignCounts[parsed.utmCampaign] || 0) + 1
        } catch (err) {
          logger.error('analytics', 'Failed to parse UTM data', { error: err instanceof Error ? err.message : String(err) })
        }
      }

      const last7Days: Array<{ date: string; visitors: number; conversions: number }> = []
      for (let i = 6; i >= 0; i--) {
        const d = new Date()
        d.setDate(d.getDate() - i)
        const dayStr = d.toISOString().split('T')[0]
        const dayStart = new Date(dayStr + 'T00:00:00.000Z')
        const dayEnd = new Date(dayStr + 'T23:59:59.999Z')

        const [dayVisitorResult, dayConversions] = await Promise.all([
          prisma.analyticsEvent.findMany({
            where: { createdAt: { gte: dayStart, lte: dayEnd } },
            select: { visitorId: true },
            distinct: ['visitorId'],
          }),
          prisma.analyticsEvent.count({
            where: { createdAt: { gte: dayStart, lte: dayEnd }, event: 'checkout_complete' },
          }),
        ])
        last7Days.push({ date: dayStr, visitors: dayVisitorResult.length, conversions: dayConversions })
      }

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
        topPages,
        avgTimeOnPage,
        timeDistribution,
        scrollDepths: scrollStats,
        ctaClickRates: ctaCounts,
        deviceBreakdown: { devices: deviceCounts, browsers: browserCounts },
        utmTraffic: { source: utmSourceCounts, medium: utmMediumCounts, campaign: utmCampaignCounts },
        last7Days,
        totalEvents: totalPageViews + timeEvents.length + ctaEvents.length + scrollEvents.length + deviceEvents.length,
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
