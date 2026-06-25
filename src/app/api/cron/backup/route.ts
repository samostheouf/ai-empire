import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { logger } from '@/lib/logger'
import { verifyCronAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const result = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const [users, templates, orders, revenueResult] = await Promise.all([
      prisma.apiUser.count(),
      prisma.template.count(),
      prisma.order.count(),
      prisma.order.aggregate({ _sum: { amount: true }, where: { status: 'completed' } }),
    ])

    const today = new Date().toISOString().split('T')[0]
    const totalRevenue = revenueResult._sum.amount || 0

    const existing = await prisma.dailyBackup.findUnique({ where: { date: today } })
    if (existing) {
      await prisma.dailyBackup.update({
        where: { date: today },
        data: { users, templates, orders, totalRevenue },
      })
    } else {
      await prisma.dailyBackup.create({
        data: { date: today, users, templates, orders, totalRevenue },
      })
    }

    logger.info('cron-backup', 'Daily backup completed', { date: today, users, templates, orders, totalRevenue })

    return { date: today, users, templates, orders, totalRevenue }
  }, null)

  if (!result) {
    logger.error('cron-backup', 'Daily backup failed')
    return NextResponse.json({ error: 'Backup failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true, snapshot: result })
}
