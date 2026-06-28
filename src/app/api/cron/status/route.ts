import { NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const CRONS = [
  { path: '/api/cron', name: 'main', schedule: '0 3 * * *', description: 'Cleanup, analytics, weekly report, re-engagement' },
  { path: '/api/cron/daily-marketing', name: 'daily-marketing', schedule: '0 8 * * *', description: 'Social posts, re-engagement emails, blog ideas' },
  { path: '/api/cron/seo-monitor', name: 'seo-monitor', schedule: '0 6 * * *', description: 'SEO monitoring' },
  { path: '/api/cron/upsell', name: 'upsell', schedule: '0 10 * * 1', description: 'Weekly upsell campaigns' },
  { path: '/api/cron/send-welcome-sequence', name: 'welcome-sequence', schedule: '0 6 * * *', description: 'Welcome email sequence' },
  { path: '/api/cron/daily-seo', name: 'daily-seo', schedule: '0 7 * * *', description: 'Daily SEO optimization' },
  { path: '/api/cron/weekly-report', name: 'weekly-report', schedule: '0 9 * * 1', description: 'Weekly analytics report' },
  { path: '/api/cron/self-evolution', name: 'self-evolution', schedule: '0 4 * * *', description: 'Self-evolution tasks' },
  { path: '/api/cron/backup', name: 'backup', schedule: '0 3 * * 0', description: 'Weekly database backup' },
  { path: '/api/cron/retry-webhooks', name: 'retry-webhooks', schedule: '0 2 * * *', description: 'Retry failed webhooks' },
  { path: '/api/cron/health-check', name: 'health-check', schedule: '0 5 * * *', description: 'Cron health check' },
  { path: '/api/cron/auto-blog', name: 'auto-blog', schedule: '0 5 * * *', description: 'Auto blog generation' },
]

export async function GET(request: Request) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const lastExecutions = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const [lastBackup, lastReport, lastWebhook] = await Promise.all([
      prisma.dailyBackup.findFirst({ orderBy: { createdAt: 'desc' }, select: { createdAt: true } }),
      prisma.analyticsReport.findFirst({ orderBy: { createdAt: 'desc' }, select: { createdAt: true } }),
      prisma.webhookEvent.findFirst({ orderBy: { createdAt: 'desc' }, select: { createdAt: true } }),
    ])

    return {
      backup: lastBackup?.createdAt?.toISOString() || null,
      'weekly-report': lastReport?.createdAt?.toISOString() || null,
      'retry-webhooks': lastWebhook?.createdAt?.toISOString() || null,
    }
  }, {} as Record<string, string | null>)

  const crons = CRONS.map((cron) => ({
    ...cron,
    lastExecution: lastExecutions[cron.name] || null,
  }))

  return NextResponse.json({
    totalCrons: CRONS.length,
    crons,
    timestamp: new Date().toISOString(),
  })
}
