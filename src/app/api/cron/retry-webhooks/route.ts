import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { logger } from '@/lib/logger'

export const dynamic = 'force-dynamic'

const MAX_RETRIES = 3

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const result = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const failedEvents = await prisma.webhookEvent.findMany({
      where: { status: 'failed', retryCount: { lt: MAX_RETRIES } },
      orderBy: { createdAt: 'asc' },
      take: 50,
    })

    let retried = 0
    let permanentlyFailed = 0

    for (const event of failedEvents) {
      await prisma.webhookEvent.update({
        where: { id: event.id },
        data: { retryCount: { increment: 1 }, status: 'retrying' },
      })
      retried++

      logger.info('cron-retry-webhooks', 'Retrying webhook event', {
        eventId: event.eventId,
        provider: event.provider,
        retryCount: event.retryCount + 1,
      })
    }

    const shouldFailPermanently = await prisma.webhookEvent.findMany({
      where: { status: 'failed', retryCount: { gte: MAX_RETRIES } },
    })
    permanentlyFailed = shouldFailPermanently.length

    for (const event of shouldFailPermanently) {
      await prisma.webhookEvent.update({
        where: { id: event.id },
        data: { status: 'dead_letter' },
      })
      logger.warn('cron-retry-webhooks', 'Webhook permanently failed', {
        eventId: event.eventId,
        retryCount: event.retryCount,
      })
    }

    return { retried, permanentlyFailed, totalFailed: failedEvents.length }
  }, null)

  return NextResponse.json({ success: true, result })
}
