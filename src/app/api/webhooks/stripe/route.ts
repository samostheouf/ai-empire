import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { safeQuery } from '@/lib/db';
import { sendOrderConfirmation } from '@/lib/email';
import { trackWebhookComplete } from '@/lib/server-analytics';
import { logger } from '@/lib/logger';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app';

export async function POST(request: NextRequest) {
  const webhookErrors: string[] = []
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
    return NextResponse.json({ error: 'Signature invalide' }, { status: 400 });
  }

  const alreadyProcessed = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const existing = await prisma.webhookEvent.findUnique({ where: { eventId: event.id } });
    return !!existing;
  }, false);

  if (alreadyProcessed) {
    return NextResponse.json({ received: true, message: 'Duplicate event ignored' });
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    await prisma.webhookEvent.create({
      data: { eventId: event.id, provider: 'stripe', type: event.type, status: 'processing' },
    });
  }, null);

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        const { templateId, email } = session.metadata || {};

        if (templateId && email) {
          await safeQuery(async () => {
            const { prisma } = await import('@/lib/db');
            const existing = await prisma.order.findUnique({ where: { sessionId: session.id } });
            if (existing) {
              return;
            }

            const template = await prisma.template.findUnique({ where: { id: templateId } });

            await prisma.order.create({
              data: {
                templateId,
                email,
                amount: session.amount_total || 0,
                sessionId: session.id,
                status: 'completed',
              },
            });

            await prisma.template.update({
              where: { id: templateId },
              data: { downloads: { increment: 1 } },
            });

            let existingUser = await prisma.apiUser.findUnique({ where: { email } });
            if (!existingUser) {
              const crypto = await import('crypto');
              const apiKey = 'napi_' + crypto.randomUUID().replace(/-/g, '');
              existingUser = await prisma.apiUser.create({
                data: {
                  email,
                  apiKey,
                  plan: 'starter',
                  credits: 100,
                },
              });
              try {
                const { sendApiKeyEmail } = await import('@/lib/email');
                const apiKeyResult = await sendApiKeyEmail({ to: email, apiKey, plan: 'starter' });
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
              } catch (e) {
                webhookErrors.push('api_key_email: ' + (e instanceof Error ? e.message : String(e)));
                await safeQuery(async () => {
                  const { prisma } = await import('@/lib/db');
                  await prisma.emailLog.create({
                    data: {
                      to: email,
                      subject: 'API Key',
                      status: 'failed',
                      error: e instanceof Error ? e.message : String(e),
                    },
                  });
                }, null);
              }
            }

            if (template) {
              const downloadUrl = template.fileUrl || `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id=${session.id}&template_id=${templateId}`;
              try {
                const emailResult = await sendOrderConfirmation({
                  to: email,
                  templateName: template.name,
                  templatePrice: template.price,
                  downloadUrl,
                });
                await safeQuery(async () => {
                  const { prisma } = await import('@/lib/db');
                  await prisma.emailLog.create({
                    data: {
                      to: email,
                      subject: `Order confirmation: ${template.name}`,
                      status: emailResult.success ? 'sent' : 'failed',
                      error: emailResult.success ? null : JSON.stringify(emailResult.error),
                    },
                  });
                }, null);
              } catch (emailError) {
                logger.error('webhook', 'Order confirmation email failed', { email, error: emailError instanceof Error ? emailError.message : String(emailError) });
                await safeQuery(async () => {
                  const { prisma } = await import('@/lib/db');
                  await prisma.emailLog.create({
                    data: {
                      to: email,
                      subject: `Order confirmation: ${template.name}`,
                      status: 'failed',
                      error: emailError instanceof Error ? emailError.message : String(emailError),
                    },
                  });
                }, null);
              }

              await handleReferralCommission(email, session.amount_total || 0, webhookErrors);
              await handleAffiliateCommission(email, session.id, session.amount_total || 0, session.metadata || {});
              await sendWelcomeSequence(email, template.name);
              await autoAssignReferralProgram(email, webhookErrors);
              await scheduleUpsellEmail(email);
            }
          }, null);
        }
        break;
      }

      case 'checkout.session.expired': {
        break;
      }

      case 'payment_intent.payment_failed': {
        break;
      }

      default:
    }
  } catch (err) {
    logger.error('webhook', 'Webhook processing failed', { eventId: event?.id, type: event?.type, error: err instanceof Error ? err.message : 'Unknown' });
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db');
      await prisma.webhookEvent.update({
        where: { eventId: event.id },
        data: { status: 'failed', lastError: err instanceof Error ? err.message : 'Unknown error' },
      });
    }, null);
    await trackWebhookComplete('stripe', event?.type || 'unknown', event?.id || 'unknown', false);
    return NextResponse.json({ error: 'Webhook processing failed', details: err instanceof Error ? err.message : 'Unknown error', eventId: event?.id }, { status: 500 });
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    await prisma.webhookEvent.update({
      where: { eventId: event.id },
        data: { status: 'completed' },
    });
  }, null);
  await trackWebhookComplete('stripe', event?.type || 'unknown', event?.id || 'unknown', true);
  const response: Record<string, unknown> = { received: true };
  if (webhookErrors.length > 0) response.warnings = webhookErrors;
  return NextResponse.json(response);
}

async function handleReferralCommission(email: string, amount: number, errors: string[]) {
  await safeQuery(async () => {
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

      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        const commissionEuros = (commission / 100).toFixed(2);
        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
          to: referral.referrerEmail,
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
  }, null);
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
  await safeQuery(async () => {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
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
  }, null);
}

async function autoAssignReferralProgram(email: string, errors: string[]) {
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db');
    const existing = await prisma.referral.findFirst({ where: { referrerEmail: email } });
    if (!existing) {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
      let code = 'ref_';
      for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      await prisma.referral.create({
        data: { code, referrerEmail: email },
      });

      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
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
  }, null);
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
