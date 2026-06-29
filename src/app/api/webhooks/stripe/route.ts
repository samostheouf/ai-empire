import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { safeQuery } from '@/lib/db';
import { sendOrderConfirmation } from '@/lib/email';
import { trackWebhookComplete } from '@/lib/server-analytics';
import { logger } from '@/lib/logger';
import { sendAlert } from '@/lib/alerts';
import { Resend } from 'resend';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app';

let resendClient: Resend | null = null
function getResendClient(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY)
  }
  return resendClient
}

interface WebhookRetryJob {
  eventId: string
  eventType: string
  attempt: number
  maxAttempts: number
  nextRetryAt: number
  payload: string
  createdAt: number
}

const MAX_RETRY_ATTEMPTS = 3
const RETRY_DELAYS_MS = [5000, 30000, 120000]

let retryQueue: WebhookRetryJob[] = []
let deadLetterQueue: WebhookRetryJob[] = []

function enqueueRetry(job: WebhookRetryJob): void {
  retryQueue.push(job)
  logger.warn('webhook', `Enqueued retry for event ${job.eventId}`, {
    attempt: job.attempt,
    nextRetryAt: new Date(job.nextRetryAt).toISOString(),
  })
}

function moveToDeadLetter(job: WebhookRetryJob): void {
  deadLetterQueue.push(job)
  if (deadLetterQueue.length > 100) {
    deadLetterQueue = deadLetterQueue.slice(-100)
  }
  logger.error('webhook', `Event ${job.eventId} moved to dead letter queue`, {
    eventType: job.eventType,
    totalAttempts: job.attempt,
  })
  sendAlert(
    'Webhook Dead Letter',
    `Event ${job.eventId} (${job.eventType}) failed after ${job.attempt} attempts and moved to dead letter queue.`
  ).catch(() => {})
}

async function processRetryQueue(): Promise<void> {
  const now = Date.now()
  const readyJobs = retryQueue.filter(j => j.nextRetryAt <= now)
  retryQueue = retryQueue.filter(j => j.nextRetryAt > now)

  for (const job of readyJobs) {
    try {
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db');
        await prisma.webhookEvent.upsert({
          where: { eventId: job.eventId },
          update: { status: 'retrying', retryCount: job.attempt },
          create: { eventId: job.eventId, provider: 'stripe', type: job.eventType, status: 'retrying', retryCount: job.attempt },
        });
      }, null);

      const event = JSON.parse(job.payload);
      await processWebhookEvent(event, job.attempt);

      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db');
        await prisma.webhookEvent.update({
          where: { eventId: job.eventId },
          data: { status: 'completed', retryCount: job.attempt },
        });
      }, null);
    } catch {
      if (job.attempt >= MAX_RETRY_ATTEMPTS) {
        moveToDeadLetter(job)
      } else {
        enqueueRetry({
          ...job,
          attempt: job.attempt + 1,
          nextRetryAt: Date.now() + RETRY_DELAYS_MS[job.attempt] || RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1],
        })
      }
    }
  }
}

async function processWebhookEvent(event: { id: string; type: string; data: { object: Record<string, unknown> } }, attempt: number = 0): Promise<void> {
  const webhookErrors: string[] = []

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const { templateId, email } = (session.metadata || {}) as Record<string, string>;

      if (templateId && email) {
        const dbResult = await safeQuery(async () => {
          const { prisma } = await import('@/lib/db');
          const existing = await prisma.order.findUnique({ where: { sessionId: session.id as string } });
          if (existing) {
            return { skipped: true } as const;
          }

          const template = await prisma.template.findUnique({ where: { id: templateId } });

          await prisma.order.create({
            data: {
              templateId,
              email,
              amount: (session.amount_total as number) || 0,
              sessionId: session.id as string,
              status: 'completed',
            },
          });

          await prisma.template.update({
            where: { id: templateId },
            data: { downloads: { increment: 1 } },
          });

          let existingUser = await prisma.apiUser.findUnique({ where: { email } });
          let newApiKey: string | null = null;
          if (!existingUser) {
            const crypto = await import('crypto');
            const apiKey = 'napi_' + crypto.randomUUID().replace(/-/g, '');
            existingUser = await prisma.apiUser.create({
              data: {
                email,
                apiKey,
                plan: 'starter',
                credits: 100,
                stripeId: session.customer as string,
              },
            });
            newApiKey = apiKey;
          }

          return {
            skipped: false,
            template,
            newApiKey,
            email,
            sessionId: session.id as string,
            amount: (session.amount_total as number) || 0,
            metadata: (session.metadata || {}) as Record<string, string>,
            downloadUrl: template?.fileUrl || `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id=${session.id}&template_id=${templateId}`,
          };
        }, null as { skipped: true } | { skipped: false; template: { name: string; price: number } | null; newApiKey: string | null; email: string; sessionId: string; amount: number; metadata: Record<string, string>; downloadUrl: string } | null);

        if (!dbResult || dbResult.skipped) break;

        await handleReferralCommission(dbResult.email, dbResult.amount, webhookErrors);
        await handleAffiliateCommission(dbResult.email, dbResult.sessionId, dbResult.amount, dbResult.metadata);
        await autoAssignReferralProgram(dbResult.email, webhookErrors);
        await scheduleUpsellEmail(dbResult.email);

        try {
          if (dbResult.newApiKey) {
            const { sendApiKeyEmail } = await import('@/lib/email');
            const apiKeyResult = await sendApiKeyEmail({ to: email, apiKey: dbResult.newApiKey, plan: 'starter' });
            await safeQuery(async () => {
              const { prisma } = await import('@/lib/db');
              await prisma.emailLog.create({
                data: {
                  to: email,
                  subject: 'API Key',
                  status: apiKeyResult.success ? 'sent' : 'failed',
                  error: apiKeyResult.success ? null : JSON.stringify(apiKeyResult.error),
                },
              });
            }, null);
          }
        } catch (e) {
          webhookErrors.push('api_key_email: ' + (e instanceof Error ? e.message : String(e)));
        }

        if (dbResult.template) {
          try {
            const emailResult = await sendOrderConfirmation({
              to: email,
              templateName: dbResult.template.name,
              templatePrice: dbResult.template.price,
              downloadUrl: dbResult.downloadUrl,
            });
            await safeQuery(async () => {
              const { prisma } = await import('@/lib/db');
              await prisma.emailLog.create({
                data: {
                  to: email,
                  subject: `Order confirmation: ${dbResult.template!.name}`,
                  status: emailResult.success ? 'sent' : 'failed',
                  error: emailResult.success ? null : JSON.stringify(emailResult.error),
                },
              });
            }, null);
          } catch (emailError) {
            webhookErrors.push('order_confirmation_email: ' + (emailError instanceof Error ? emailError.message : String(emailError)));
          }

          try {
            await sendWelcomeSequence(email, dbResult.template.name);
          } catch (e) {
            webhookErrors.push('welcome_email: ' + (e instanceof Error ? e.message : String(e)));
          }
        }
      }
      break;
    }

    case 'checkout.session.expired': {
      logger.info('webhook', `Event ${event.type} received for session ${event.data.object.id}`);
      break;
    }

    case 'payment_intent.payment_failed': {
      logger.info('webhook', `Event ${event.type} received for session ${event.data.object.id}`);
      break;
    }

    case 'invoice.paid': {
      const invoice = event.data.object;
      const customerId = invoice.customer;
      const subscriptionId = invoice.subscription;
      logger.info('webhook', `Invoice paid: ${invoice.id} for customer ${customerId}`);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      const customerId = subscription.customer;
      logger.info('webhook', `Subscription deleted: ${subscription.id}`);
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db');
        const user = await prisma.apiUser.findFirst({
          where: { stripeId: customerId as string }
        });
        if (user) {
          await prisma.apiUser.update({
            where: { id: user.id },
            data: { plan: 'starter', credits: 100 }
          });
        }
      }, null);
      break;
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object;
      logger.info('webhook', `Subscription updated: ${subscription.id}, status: ${subscription.status}`);
      break;
    }

    default:
  }

  if (webhookErrors.length > 0) {
    logger.warn('webhook', `Webhook processed with warnings for event ${event.id}`, { warnings: webhookErrors })
  }
}

export async function POST(request: NextRequest) {
  await processRetryQueue()

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json({ error: 'Webhook not configured', details: 'STRIPE_WEBHOOK_SECRET is not configured' }, { status: 500 })
  }

  let event;
  try {
    const body = await request.text();
    const sig = request.headers.get('stripe-signature');

    if (!sig) {
      return NextResponse.json({ error: 'Signature manquante' }, { status: 400 });
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret
    );
  } catch (err) {
    logger.error('webhook', 'Invalid webhook signature', { error: err instanceof Error ? err.message : 'Unknown' });
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
  }

  const alreadyProcessed = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const existing = await prisma.webhookEvent.findUnique({ where: { eventId: event.id } });
    return existing?.status === 'completed';
  }, false);

  if (alreadyProcessed) {
    return NextResponse.json({ received: true, message: 'Duplicate event ignored' });
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    await prisma.webhookEvent.upsert({
      where: { eventId: event.id },
      update: { status: 'processing' },
      create: { eventId: event.id, provider: 'stripe', type: event.type, status: 'processing' },
    });
  }, null);

  try {
    await processWebhookEvent(event, 0)
  } catch (err) {
    logger.error('webhook', 'Webhook processing failed', { eventId: event?.id, type: event?.type, error: err instanceof Error ? err.message : 'Unknown' });

    sendAlert(
      'Webhook Processing Failed',
      `Event ${event.id} (${event.type}) failed: ${err instanceof Error ? err.message : 'Unknown error'}`
    ).catch(() => {})

    const retryJob: WebhookRetryJob = {
      eventId: event.id,
      eventType: event.type,
      attempt: 1,
      maxAttempts: MAX_RETRY_ATTEMPTS,
      nextRetryAt: Date.now() + RETRY_DELAYS_MS[0],
      payload: JSON.stringify(event),
      createdAt: Date.now(),
    }
    enqueueRetry(retryJob)

    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db');
      await prisma.webhookEvent.update({
        where: { eventId: event.id },
        data: { status: 'failed', lastError: err instanceof Error ? err.message : 'Unknown error', retryCount: 1 },
      });
    }, null);
    await trackWebhookComplete('stripe', event?.type || 'unknown', event?.id || 'unknown', false);
    return NextResponse.json({ error: 'Webhook processing failed', details: err instanceof Error ? err.message : 'Unknown error', eventId: event?.id, retry: true }, { status: 500 });
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    await prisma.webhookEvent.update({
      where: { eventId: event.id },
      data: { status: 'completed' },
    });
  }, null);
  await trackWebhookComplete('stripe', event?.type || 'unknown', event?.id || 'unknown', true);

  return NextResponse.json({ received: true });
}

async function handleReferralCommission(email: string, amount: number, errors: string[]) {
  const result = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const referral = await prisma.referral.findFirst({
      where: { referredEmail: email, status: 'signup' },
    });
    if (referral) {
      const commission = Math.round(amount * 0.20);
      await prisma.referral.update({
        where: { id: referral.id },
        data: { status: 'completed', commissionEarned: commission },
      });

      const referrer = await prisma.apiUser.findFirst({ where: { email: referral.referrerEmail } });
      if (referrer) {
        await prisma.apiUser.update({
          where: { id: referrer.id },
          data: { credits: { increment: 50 } },
        });
      }

      return { referrerEmail: referral.referrerEmail, commission };
    }
    return null;
  }, null);

  if (result) {
    try {
      const commissionEuros = (result.commission / 100).toFixed(2);
      await getResendClient().emails.send({
        from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
        to: result.referrerEmail,
        subject: '🎉 Votre filleul a effectué un achat !',
        html: `
          <!DOCTYPE html>
          <html><body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Commission gagnée !</p>
              </div>
              <div style="padding: 32px;">
                <h2 style="margin: 0 0 16px; color: #1e293b;">Félicitations ! 🎉</h2>
                <p style="color: #64748b; margin: 0 0 16px;">Votre filleul vient d'effectuer un achat. Vous avez gagné <strong>${commissionEuros}€</strong> de commission !</p>
                <p style="color: #64748b; margin: 0 0 8px;">+50 crédits bonus ajoutés à votre compte.</p>
                <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 24px;">
                  Voir mon tableau de bord
                </a>
              </div>
            </div>
          </body></html>
        `,
      });
    } catch (e) {
      errors.push('referral_commission_email: ' + (e instanceof Error ? e.message : String(e)));
    }
  }
}

async function handleAffiliateCommission(
  email: string,
  sessionId: string,
  amount: number,
  metadata: Record<string, string>
) {
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const affCode = metadata.affiliateCode || '';
    if (affCode) {
      const affiliate = await prisma.affiliate.findUnique({ where: { trackingCode: affCode } });
      if (affiliate) {
        const commission = Math.round(amount * affiliate.commissionRate);
        await prisma.affiliateReferral.create({
          data: {
            affiliateId: affiliate.id,
            visitorEmail: email,
            orderId: sessionId,
            commission,
            converted: true,
          },
        });
        await prisma.affiliate.update({
          where: { id: affiliate.id },
          data: {
            totalReferrals: { increment: 1 },
            totalConversions: { increment: 1 },
            totalEarned: { increment: commission },
          },
        });
      }
    }
  }, null);
}

async function sendWelcomeSequence(email: string, templateName: string) {
  await getResendClient().emails.send({
    from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
    to: email,
    subject: '🚀 Bienvenue ! Votre guide de démarrage rapide',
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
        <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Bienvenue dans l'aventure !</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="color: #1e293b; margin: 0 0 16px;">Merci pour votre achat de ${templateName} !</h2>
            <p style="color: #64748b; margin: 0 0 16px;">Voici les prochaines étapes pour démarrer :</p>
            <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="color: #1e293b; margin: 0 0 8px;"><strong>1.</strong> Téléchargez votre template</p>
              <p style="color: #1e293b; margin: 0 0 8px;"><strong>2.</strong> Installez-le avec npx create-next-app</p>
              <p style="color: #1e293b; margin: 0 0 8px;"><strong>3.</strong> Configurez vos APIs dans .env.local</p>
              <p style="color: #1e293b; margin: 0;"><strong>4.</strong> Déployez sur Vercel</p>
            </div>
            <a href="${appUrl}/docs" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 16px;">
              📖 Voir la documentation
            </a>
            <a href="${appUrl}/templates" style="display: block; background: white; color: #4F46E5; border: 1px solid #4F46E5; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              🛒 Découvrir d'autres templates
            </a>
          </div>
        </div>
      </body>
      </html>
    `,
  });
}

async function autoAssignReferralProgram(email: string, errors: string[]) {
  const code = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const existing = await prisma.referral.findFirst({ where: { referrerEmail: email } });
    if (!existing) {
      const crypto = await import('crypto');
      const newCode = 'ref_' + crypto.randomBytes(8).toString('hex');

      await prisma.referral.create({
        data: { code: newCode, referrerEmail: email },
      });

      return newCode;
    }
    return null;
  }, null);

  if (code) {
    try {
      await getResendClient().emails.send({
        from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
        to: email,
        subject: '🎁 Vous êtes maintenant dans le programme de parrainage !',
        html: `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"></head>
          <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
            <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Programme de parrainage</p>
              </div>
              <div style="padding: 32px;">
                <h2 style="color: #1e293b; margin: 0 0 16px;">Recommandez et gagnez ! 💰</h2>
                <p style="color: #64748b; margin: 0 0 16px;">Votre code de parrainage :</p>
                <div style="background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 16px; text-align: center; margin-bottom: 24px;">
                  ${code}
                </div>
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                  <p style="color: #166534; margin: 0 0 8px;"><strong>Comment ça marche :</strong></p>
                  <p style="color: #166534; margin: 0 0 4px;">✅ Partagez votre lien : ${appUrl}?ref=${code}</p>
                  <p style="color: #166534; margin: 0 0 4px;">✅ Votre filleul s'inscrit et achète</p>
                  <p style="color: #166534; margin: 0;">✅ Vous gagnez 20% de commission</p>
                </div>
                <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                  Voir mon tableau de bord
                </a>
              </div>
            </div>
          </body>
          </html>
        `,
      });
    } catch (e) {
      errors.push('referral_program_email: ' + (e instanceof Error ? e.message : String(e)));
    }
  }
}

async function scheduleUpsellEmail(email: string) {
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const user = await prisma.apiUser.findFirst({ where: { email } });
    if (user) {
      await prisma.upsellEmail.create({
        data: {
          userId: user.id,
          email,
          sent: false,
          converted: false,
        },
      });
    }
  }, null);
}
