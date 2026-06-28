import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function GET(request: NextRequest) {
  try {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const report = await generateWeeklyReport()

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      report,
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function generateWeeklyReport() {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
  weekStart.setHours(0, 0, 0, 0)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 6)
  weekEnd.setHours(23, 59, 59, 999)

  const weekKey = weekStart.toISOString().split('T')[0]

  const existing = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.analyticsReport.findUnique({ where: { week: weekKey } })
  }, null)

  if (existing) {
    return { status: 'already_exists', week: weekKey, report: existing }
  }

  const data = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const events = await prisma.analyticsEvent.findMany({
      where: { createdAt: { gte: weekStart, lte: weekEnd } },
    })

    const uniqueVisitors = new Set(events.map(e => e.visitorId))
    const pageViews = events.filter(e => e.event === 'page_view')
    const signups = events.filter(e => e.event === 'signup')
    const purchases = events.filter(e => e.event === 'checkout_complete')

    const pageCount: Record<string, number> = {}
    pageViews.forEach(e => {
      pageCount[e.page] = (pageCount[e.page] || 0) + 1
    })
    const topPages = Object.entries(pageCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }))

    const referrerCount: Record<string, number> = {}
    events.forEach(e => {
      const ref = e.data || 'direct'
      referrerCount[ref] = (referrerCount[ref] || 0) + 1
    })
    const topReferrers = Object.entries(referrerCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([ref, count]) => ({ referrer: ref, count }))

    const orders = await prisma.order.findMany({
      where: {
        status: 'completed',
        createdAt: { gte: weekStart, lte: weekEnd },
      },
    })
    const revenue = orders.reduce((sum, o) => sum + o.amount, 0)

    const totalVisitors = uniqueVisitors.size
    const conversionRate = totalVisitors > 0 ? (purchases.length / totalVisitors) * 100 : 0

    const emailLogs = await prisma.emailLog.findMany({
      where: { sentAt: { gte: weekStart, lte: weekEnd } },
    })
    const emailsSent = emailLogs.length
    const emailsFailed = emailLogs.filter(e => e.status === 'failed').length

    const newUsers = await prisma.apiUser.count({
      where: { createdAt: { gte: weekStart, lte: weekEnd } },
    })

    const reportData = {
      week: weekKey,
      period: { from: weekStart.toISOString(), to: weekEnd.toISOString() },
      visitors: {
        total: totalVisitors,
        unique: uniqueVisitors.size,
        pageViews: pageViews.length,
      },
      signups: {
        total: signups.length,
        newUsers,
      },
      purchases: {
        total: purchases.length,
        revenue,
        avgOrderValue: purchases.length > 0 ? Math.round(revenue / purchases.length) : 0,
      },
      conversion: {
        visitorToSignup: totalVisitors > 0 ? ((signups.length / totalVisitors) * 100).toFixed(2) + '%' : '0%',
        visitorToPurchase: conversionRate.toFixed(2) + '%',
      },
      topPages,
      topReferrers,
      email: {
        sent: emailsSent,
        failed: emailsFailed,
        successRate: emailsSent > 0 ? (((emailsSent - emailsFailed) / emailsSent) * 100).toFixed(1) + '%' : '0%',
      },
    }

    await prisma.analyticsReport.create({
      data: {
        week: weekKey,
        totalVisitors,
        totalConversions: purchases.length,
        revenue,
        conversionRate,
        topPage: topPages[0]?.page,
        topReferrer: topReferrers[0]?.referrer,
      },
    })

    return reportData
  }, { week: weekKey, period: { from: weekStart.toISOString(), to: weekEnd.toISOString() }, visitors: { total: 0, unique: 0, pageViews: 0 }, signups: { total: 0, newUsers: 0 }, purchases: { total: 0, revenue: 0, avgOrderValue: 0 }, conversion: { visitorToSignup: '0%', visitorToPurchase: '0%' }, topPages: [], topReferrers: [], email: { sent: 0, failed: 0, successRate: '0%' } })

  return data
}
