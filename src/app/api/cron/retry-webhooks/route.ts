import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { logger } from '@/lib/logger'
import { verifyCronAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

const MAX_RETRIES = 3

export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const result = await retryFailedWebhookEvents()

  return NextResponse.json({ success: true, result })
}

/**
 * Retries failed Stripe webhook events persisted in the DB.
 * Each event's raw payload is stored on `webhookEvent.payload`, so events
 * survive cold starts and can be replayed by this cron job.
 */
async function retryFailedWebhookEvents() {
  const { processStripeWebhookEvent } = await import('@/lib/webhook-processor')

  return safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const failedEvents = await prisma.webhookEvent.findMany({
      where: { status: 'failed', retryCount: { lt: MAX_RETRIES } },
      orderBy: { createdAt: 'asc' },
      take: 50,
    })

    let retried = 0
    let succeeded = 0
    let permanentlyFailed = 0

    for (const event of failedEvents) {
      if (!event.payload) {
        // Legacy event stored before payload persistence — nothing to replay.
        await prisma.webhookEvent.update({
          where: { id: event.id },
          data: { status: 'dead_letter', lastError: 'No payload stored' },
        })
        permanentlyFailed++
        continue
      }

      try {
        await prisma.webhookEvent.update({
          where: { id: event.id },
          data: { status: 'retrying', retryCount: { increment: 1 } },
        })

        await processStripeWebhookEvent(event.payload as Record<string, unknown>)

        await prisma.webhookEvent.update({
          where: { id: event.id },
          data: { status: 'completed', nextRetryAt: null },
        })
        succeeded++
        retried++

        logger.info('cron-retry-webhooks', 'Webhook event retried successfully', {
          eventId: event.eventId,
          attempt: event.retryCount + 1,
        })
      } catch (err) {
        const attempts = event.retryCount + 1
        const isFinalFailure = attempts >= MAX_RETRIES

        await prisma.webhookEvent.update({
          where: { id: event.id },
          data: {
            status: isFinalFailure ? 'dead_letter' : 'failed',
            lastError: err instanceof Error ? err.message : String(err),
            nextRetryAt: isFinalFailure ? null : new Date(Date.now() + 60_000),
          },
        })
        retried++
        if (isFinalFailure) permanentlyFailed++

        logger.warn('cron-retry-webhooks', isFinalFailure ? 'Webhook event moved to dead letter' : 'Webhook event retry failed', {
          eventId: event.eventId,
          attempt: attempts,
          error: err instanceof Error ? err.message : String(err),
        })
      }
    }

    return { retried, succeeded, permanentlyFailed, totalFailed: failedEvents.length }
  }, null)
}
