import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { safeQuery } from '@/lib/db';
import { trackWebhookComplete } from '@/lib/server-analytics';
import { logger } from '@/lib/logger';
import { sendAlert } from '@/lib/alerts';
import { processStripeWebhookEvent } from '@/lib/webhook-processor';

const RETRY_DELAYS_MS = [5000, 30000, 120000]

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook not configured', details: 'STRIPE_WEBHOOK_SECRET is not configured' }, { status: 500 })
  }

  let stripeEvent;
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');

    if (!sig) {
      return NextResponse.json({ error: 'Signature manquante' }, { status: 400 });
    }

    stripeEvent = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret
    );
  } catch (err) {
    logger.error('webhook', 'Invalid webhook signature', { error: err instanceof Error ? err.message : 'Unknown' });
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
  }

  const evtType = (stripeEvent.type as string) || '';
  const eventId = (stripeEvent.id as string) || '';

  // Persist payload so the cron retry job can replay this event even after a
  // cold start / new serverless instance.
  // Create-first (atomic): if the unique constraint on eventId is violated
  // (P2002), the event is already processed or being processed concurrently.
  const claimResult = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    try {
      await prisma.webhookEvent.create({
        data: { eventId, provider: 'stripe', type: evtType, status: 'processing', payload: JSON.parse(JSON.stringify(stripeEvent)) },
      });
      return 'claimed';
    } catch (err) {
      if (err instanceof Error && 'code' in err && (err as { code?: string }).code === 'P2002') {
        return 'duplicate';
      }
      throw err;
    }
  }, null);

  if (claimResult === 'duplicate') {
    return NextResponse.json({ received: true, message: 'Duplicate event ignored' });
  }

  try {
    await processStripeWebhookEvent(stripeEvent as unknown as Record<string, unknown>)
  } catch (err) {
    logger.error('webhook', 'Webhook processing failed', { eventId, type: evtType, error: err instanceof Error ? err.message : 'Unknown' });

    sendAlert(
      'Webhook Processing Failed',
      `Event ${eventId} (${evtType}) failed: ${err instanceof Error ? err.message : 'Unknown error'}`
    ).catch(() => {})

    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db');
      await prisma.webhookEvent.update({
        where: { eventId: eventId },
        data: {
          status: 'failed',
          lastError: err instanceof Error ? err.message : 'Unknown error',
          retryCount: 1,
          nextRetryAt: new Date(Date.now() + RETRY_DELAYS_MS[0]),
        },
      });
    }, null);
    await trackWebhookComplete('stripe', evtType || 'unknown', eventId || 'unknown', false);
    return NextResponse.json({ error: 'Webhook processing failed', details: err instanceof Error ? err.message : 'Unknown error', eventId, retry: true }, { status: 500 });
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    await prisma.webhookEvent.update({
      where: { eventId: eventId },
      data: { status: 'completed' },
    });
  }, null);
  await trackWebhookComplete('stripe', evtType || 'unknown', eventId || 'unknown', true);

  return NextResponse.json({ received: true });
}

