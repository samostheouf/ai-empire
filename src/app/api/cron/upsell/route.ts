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

    const upsellErrors: string[] = []
    const results = await Promise.allSettled([
      findUpsellCandidates(),
      sendMonthlyReferralReport(upsellErrors),
    ])

    const response: Record<string, unknown> = {
      success: true,
      timestamp: new Date().toISOString(),
      upsell: results[0].status === 'fulfilled' ? results[0].value : { error: 'Échec' },
      referralReport: results[1].status === 'fulfilled' ? results[1].value : { error: 'Échec' },
    }
    if (upsellErrors.length > 0) response.warnings = upsellErrors
    return NextResponse.json(response)
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error', details: err instanceof Error ? err.message : 'Unknown error' }, { status: 500 })
  }
}

async function findUpsellCandidates() {
  const candidates = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const freeUsers = await prisma.apiUser.findMany({
      where: { plan: 'starter' },
      select: { id: true, email: true },
    })

    const results: Array<{ email: string; apiCalls: number; sent: boolean }> = []

    for (const user of freeUsers) {
      const usageCount = await prisma.usageLog.count({
        where: { userId: user.id },
      })

      if (usageCount >= 50) {
        const alreadySent = await prisma.upsellEmail.findFirst({
          where: { userId: user.id, sent: true },
        })

        if (!alreadySent) {
          await sendUpsellEmail(user.email, usageCount)
          await prisma.upsellEmail.updateMany({
            where: { userId: user.id, sent: false },
            data: { sent: true },
          })
          results.push({ email: user.email, apiCalls: usageCount, sent: true })
        } else {
          const converted = await prisma.order.findFirst({
            where: { email: user.email, status: 'completed' },
          })
          if (converted) {
            await prisma.upsellEmail.updateMany({
              where: { userId: user.id },
              data: { converted: true },
            })
          }
          results.push({ email: user.email, apiCalls: usageCount, sent: false })
        }
      }
    }

    return {
      candidatesFound: results.length,
      emailsSent: results.filter((r) => r.sent).length,
      details: results,
    }
  }, { candidatesFound: 0, emailsSent: 0, details: [] })

  return candidates
}

async function sendUpsellEmail(email: string, apiCalls: number) {
  await safeQuery(async () => {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const potentialRevenue = Math.round(apiCalls * 0.02 * 12)
    const currentCost = 0
    const monthlySavings = Math.round(potentialRevenue * 0.3)

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
      to: email,
      subject: '📊 Votre activité augmente — Passez au plan Pro !',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
          <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Passez à la vitesse supérieure</p>
            </div>
            <div style="padding: 32px;">
              <h2 style="color: #1e293b; margin: 0 0 16px;">Vous êtes très actif ! 📈</h2>
              <p style="color: #64748b; margin: 0 0 16px;">Nous avons remarqué que vous utilisez intensivement AI Empire. Voici votre activité :</p>

              <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <p style="color: #1e293b; margin: 0 0 8px;"><strong>Appels API :</strong> ${apiCalls}+ appels</p>
                <p style="color: #1e293b; margin: 0 0 8px;"><strong>Plan actuel :</strong> Gratuit</p>
                <p style="color: #1e293b; margin: 0;"><strong>Potentiel mensuel :</strong> ${potentialRevenue}€ de valeur</p>
              </div>

              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <p style="color: #166534; margin: 0 0 8px;"><strong>Calculator ROI :</strong></p>
                <p style="color: #166534; margin: 0 0 4px;">💰 Investissement plan Pro : 49€/mois</p>
                <p style="color: #166534; margin: 0 0 4px;">📈 Valeur générée : ${potentialRevenue}€/mois</p>
                <p style="color: #166534; margin: 0;">✅ ROI : ${potentialRevenue > 0 ? Math.round((potentialRevenue / 49) * 100) : 0}%</p>
              </div>

              <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <p style="color: #92400e; margin: 0 0 8px;"><strong>🎁 Offre spéciale :</strong></p>
                <p style="color: #92400e; margin: 0 0 4px;">-20% sur votre premier mois Pro</p>
                <p style="color: #92400e; margin: 0;"><strong>Code : PRO20</strong></p>
              </div>

              <a href="${appUrl}/pricing" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 16px;">
                🚀 Passer au plan Pro
              </a>
              <p style="color: #94a3b8; font-size: 13px; margin: 0; text-align: center;">
                Offre valable 48 heures. Pas de engagement.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
  }, null)
}

async function sendMonthlyReferralReport(errors: string[]) {
  const now = new Date()
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)
  const monthKey = `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, '0')}`

  const report = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const referrers = await prisma.referral.findMany({
      where: { status: 'completed' },
      distinct: ['referrerEmail'],
      select: { referrerEmail: true },
    })

    let reportsSent = 0

    for (const { referrerEmail } of referrers) {
      const monthReferrals = await prisma.referral.count({
        where: {
          referrerEmail,
          status: 'completed',
          createdAt: { gte: lastMonth, lte: lastMonthEnd },
        },
      })

      const monthEarnings = await prisma.referral.aggregate({
        where: {
          referrerEmail,
          status: 'completed',
          createdAt: { gte: lastMonth, lte: lastMonthEnd },
        },
        _sum: { commissionEarned: true },
      })

      const totalEarnings = await prisma.referral.aggregate({
        where: {
          referrerEmail,
          status: 'completed',
        },
        _sum: { commissionEarned: true },
      })

      const earnings = monthEarnings._sum.commissionEarned || 0
      const total = totalEarnings._sum.commissionEarned || 0

      if (earnings > 0) {
        await prisma.referralEarning.upsert({
          where: { email_month: { email: referrerEmail, month: monthKey } },
          update: { amount: earnings },
          create: { email: referrerEmail, amount: earnings, month: monthKey },
        })

        try {
          const { Resend } = await import('resend')
          const resend = new Resend(process.env.RESEND_API_KEY)
          const earningsEuros = (earnings / 100).toFixed(2)
          const totalEuros = (total / 100).toFixed(2)

          await resend.emails.send({
            from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
            to: referrerEmail,
            subject: `📊 Votre rapport de parrainage — ${lastMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head><meta charset="utf-8"></head>
              <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
                <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                  <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                    <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Rapport mensuel de parrainage</p>
                  </div>
                  <div style="padding: 32px;">
                    <h2 style="color: #1e293b; margin: 0 0 16px;">Résumé du mois</h2>
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                      <p style="color: #166534; margin: 0 0 4px;"><strong>Filleuls ce mois :</strong> ${monthReferrals}</p>
                      <p style="color: #166534; margin: 0 0 4px;"><strong>Gains du mois :</strong> ${earningsEuros}€</p>
                      <p style="color: #166534; margin: 0;"><strong>Gains totaux :</strong> ${totalEuros}€</p>
                    </div>
                    <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                      Voir mon tableau de bord
                    </a>
                  </div>
                </div>
              </body>
              </html>
            `,
          })
          reportsSent++
        } catch (e) {
          errors.push('referral_report_email: ' + (e instanceof Error ? e.message : String(e)));
        }      }
    }

    return {
      month: monthKey,
      referrersContacted: referrers.length,
      reportsSent,
    }
  }, { month: monthKey, referrersContacted: 0, reportsSent: 0 })

  return report
}
