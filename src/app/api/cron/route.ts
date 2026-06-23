import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const CRON_SECRET = process.env.CRON_SECRET

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const task = searchParams.get('task') || 'all'

    const cronErrors: string[] = []
    const results: Record<string, unknown> = {}

    if (task === 'all' || task === 'cleanup') {
      results.cleanup = await runCleanup()
    }
    if (task === 'all' || task === 'analytics') {
      results.analytics = await runAnalyticsUpdate()
    }
    if (task === 'all' || task === 'weekly-report') {
      results.weeklyReport = await runWeeklyReport()
    }
    if (task === 'all' || task === 're-engagement') {
      results.reEngagement = await runReEngagement(cronErrors)
    }

    const cronResponse: Record<string, unknown> = { success: true, timestamp: new Date().toISOString(), results }
    if (cronErrors.length > 0) cronResponse.warnings = cronErrors
    return NextResponse.json(cronResponse)
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error', details: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 })
  }
}

async function runCleanup() {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

  const deletedOrders = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const result = await prisma.order.deleteMany({
      where: {
        status: 'pending',
        createdAt: { lt: thirtyDaysAgo },
      },
    })
    return result.count
  }, 0)

  const deletedUsage = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const result = await prisma.usageLog.deleteMany({
      where: {
        createdAt: { lt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) },
      },
    })
    return result.count
  }, 0)

  return {
    staleOrdersDeleted: deletedOrders,
    oldUsageLogsDeleted: deletedUsage,
  }
}

async function runAnalyticsUpdate() {
  return await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const [userCount, orderCount, totalRevenue] = await Promise.all([
      prisma.apiUser.count(),
      prisma.order.count({ where: { status: 'completed' } }),
      prisma.order.aggregate({
        where: { status: 'completed' },
        _sum: { amount: true },
      }),
    ])
    return {
      totalUsers: userCount,
      totalOrders: orderCount,
      totalRevenue: totalRevenue._sum.amount || 0,
    }
  }, { totalUsers: 0, totalOrders: 0, totalRevenue: 0 })
}

async function runWeeklyReport() {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1))
  weekStart.setHours(0, 0, 0, 0)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 6)
  weekEnd.setHours(23, 59, 59, 999)

  const weekKey = weekStart.toISOString().split('T')[0]

  return await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const existing = await prisma.analyticsReport.findUnique({ where: { week: weekKey } })
    if (existing) return { status: 'already_exists', week: weekKey }

    const events = await prisma.analyticsEvent.findMany({
      where: { createdAt: { gte: weekStart, lte: weekEnd } },
    })

    const uniqueVisitors = new Set(events.map(e => e.visitorId))
    const purchases = events.filter(e => e.event === 'checkout_complete')
    const pageViews = events.filter(e => e.event === 'page_view')

    const pageCount: Record<string, number> = {}
    pageViews.forEach(e => {
      pageCount[e.page] = (pageCount[e.page] || 0) + 1
    })
    const topPageEntry = Object.entries(pageCount).sort(([, a], [, b]) => b - a)[0]
    const topPage = topPageEntry ? topPageEntry[0] : undefined

    const orders = await prisma.order.findMany({
      where: {
        status: 'completed',
        createdAt: { gte: weekStart, lte: weekEnd },
      },
    })
    const revenue = orders.reduce((sum, o) => sum + o.amount, 0)
    const totalVisitors = uniqueVisitors.size
    const conversionRate = totalVisitors > 0 ? (purchases.length / totalVisitors) * 100 : 0

    await prisma.analyticsReport.create({
      data: {
        week: weekKey,
        totalVisitors,
        totalConversions: purchases.length,
        revenue,
        conversionRate,
        topPage,
      },
    })

    return {
      week: weekKey,
      totalVisitors,
      totalConversions: purchases.length,
      revenue,
      conversionRate: conversionRate.toFixed(2) + '%',
      topPage,
    }
  }, { status: 'error', week: weekKey })
}

async function runReEngagement(errors: string[]) {
  return await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)

    const events = await prisma.analyticsEvent.findMany({
      where: { createdAt: { gte: sevenDaysAgo } },
    })

    const visitorEvents: Record<string, { visits: number; hasPurchased: boolean }> = {}
    events.forEach(e => {
      if (!visitorEvents[e.visitorId]) visitorEvents[e.visitorId] = { visits: 0, hasPurchased: false }
      if (e.event === 'page_view') visitorEvents[e.visitorId].visits++
      if (e.event === 'checkout_complete') visitorEvents[e.visitorId].hasPurchased = true
    })

    const candidates = Object.entries(visitorEvents)
      .filter(([, v]) => v.visits >= 3 && !v.hasPurchased)
      .map(([id]) => id)

    const recentEmails = await prisma.reEngagementEmail.findMany({
      where: { sentAt: { gte: thirtyDaysAgo } },
      select: { visitorId: true },
    })
    const alreadySent = new Set(recentEmails.map(e => e.visitorId))

    let queued = 0
    for (const visitorId of candidates) {
      if (alreadySent.has(visitorId)) continue
      const userEvent = events.find(e => e.visitorId === visitorId && e.event === 'page_view')
      if (!userEvent) continue

      const waitlistEntry = await prisma.waitlist.findFirst({ where: { source: 'landing' } })

      const email = waitlistEntry?.email || `visitor-${visitorId.slice(0, 8)}@placeholder.local`

      await prisma.reEngagementEmail.create({
        data: { visitorId, email },
      })

      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
          to: email,
          subject: '🎉 Dernière chance — Votre template vous attend !',
          html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"></head>
            <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
              <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                </div>
                <div style="padding: 32px;">
                  <h2 style="color: #1e293b;">Vous nous avez manqué !</h2>
                  <p style="color: #64748b;">Nous avons remarqué que vous avez visité notre site plusieurs fois. Découvrez nos templates premium et lancez votre prochain projet aujourd'hui.</p>
                  <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 24px 0;">
                    Voir les templates
                  </a>
                </div>
              </div>
            </body>
            </html>
          `,
        })
      } catch (e) {
      errors.push('reengagement_email: ' + (e instanceof Error ? e.message : String(e)));
    }
      queued++
    }

    return { candidatesIdentified: candidates.length, emailsQueued: queued }
  }, { candidatesIdentified: 0, emailsQueued: 0 })
}
