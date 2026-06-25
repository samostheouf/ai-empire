import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail, sanitizeInput } from '@/lib/input-validation'
import { EMAIL_FROM } from '@/lib/email'
import { Resend } from 'resend'
import { logger } from '@/lib/logger'

const resend = new Resend(process.env.RESEND_API_KEY)
const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
  let code = 'ref_'
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

function getBadge(referralCount: number): string {
  if (referralCount >= 50) return '🏆 Légende'
  if (referralCount >= 25) return '⭐ Expert'
  if (referralCount >= 10) return '🎯 Ambassadeur'
  if (referralCount >= 5) return '🚀 Actif'
  if (referralCount >= 1) return '👍 Débutant'
  return '🆕 Nouveau'
}

function getRewardTiers(referralCount: number) {
  const tiers = [
    { min: 1, label: 'Débutant', reward: '50 crédits', color: '#94a3b8' },
    { min: 5, label: 'Actif', reward: '200 crédits', color: '#3b82f6' },
    { min: 10, label: 'Ambassadeur', reward: '-20% réduction', color: '#8b5cf6' },
    { min: 25, label: 'Expert', reward: '500 crédits', color: '#f59e0b' },
    { min: 50, label: 'Légende', reward: '1000 crédits', color: '#ef4444' },
  ]

  return tiers.map((tier) => ({
    ...tier,
    reached: referralCount >= tier.min,
    current: referralCount >= tier.min && (referralCount < (tiers[tiers.indexOf(tier) + 1]?.min || Infinity)),
  }))
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email')
    const view = request.nextUrl.searchParams.get('view') || 'dashboard'

    if (view === 'leaderboard') {
      return getLeaderboard()
    }

    if (view === 'earnings') {
      if (!validateEmail(email)) {
        return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
      }
      return getMonthlyEarnings(email as string)
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const emailStr = email as string
      let referral = await prisma.referral.findFirst({ where: { referrerEmail: emailStr } })

      if (!referral) {
        referral = await prisma.referral.create({
          data: {
            code: generateReferralCode(),
            referrerEmail: emailStr,
          },
        })
      }

      const totalReferrals = await prisma.referral.count({ where: { referrerEmail: emailStr } })
      const completedReferrals = await prisma.referral.count({ where: { referrerEmail: emailStr, status: 'completed' } })
      const totalCommission = await prisma.referral.aggregate({
        where: { referrerEmail: emailStr },
        _sum: { commissionEarned: true },
      })

      const recentReferrals = await prisma.referral.findMany({
        where: { referrerEmail: emailStr, status: 'completed' },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          referredEmail: true,
          commissionEarned: true,
          status: true,
          createdAt: true,
        },
      })

      const currentMonth = new Date().toISOString().slice(0, 7)
      const monthEarnings = await prisma.referralEarning.findUnique({
        where: { email_month: { email: emailStr, month: currentMonth } },
      })

      return {
        code: referral.code,
        link: `${appUrl}?ref=${referral.code}`,
        totalReferrals,
        completedReferrals,
        totalCommission: totalCommission._sum.commissionEarned || 0,
        monthlyEarnings: monthEarnings?.amount || 0,
        currentMonth,
        recentReferrals: recentReferrals.map((r) => ({
          id: r.id,
          email: r.referredEmail ? r.referredEmail.replace(/(.{2}).*(@.*)/, '$1***$2') : null,
          commission: r.commissionEarned,
          status: r.status,
          date: r.createdAt,
        })),
        rewards: getRewardTiers(totalReferrals),
      }
    }, null)

    if (!result) {
      return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { authenticateApiKey } = await import('@/lib/auth')
    const auth = await authenticateApiKey(request)
    if (auth.error) return auth.error

    const body = await request.json()
    const { referrerEmail, referredEmail } = body

    if (!validateEmail(referrerEmail) || !validateEmail(referredEmail)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (referrerEmail === referredEmail) {
      return NextResponse.json({ error: 'Vous ne pouvez pas vous parrainer vous-même' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const existingReferral = await prisma.referral.findFirst({
        where: { referredEmail: referredEmail as string },
      })

      if (existingReferral) {
        return { success: false, message: 'Cet email a déjà été parrainé' }
      }

      const referrerRef = await prisma.referral.findFirst({
        where: { referrerEmail: referrerEmail as string },
      })

      if (!referrerRef) {
        return { success: false, message: 'Code de parrainage introuvable' }
      }

      const referral = await prisma.referral.update({
        where: { id: referrerRef.id },
        data: {
          referredEmail: referredEmail as string,
          status: 'signup',
          creditsAwarded: 50,
        },
      })

      const referrerUser = await prisma.apiUser.findFirst({ where: { email: referrerEmail as string } })
      if (referrerUser) {
        await prisma.apiUser.update({
          where: { id: referrerUser.id },
          data: { credits: { increment: 50 } },
        })
      }

      return {
        success: true,
        referral: { id: referral.id, code: referral.code },
        creditsAwarded: 50,
      }
    }, { success: false, message: 'Erreur serveur' })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { authenticateApiKey } = await import('@/lib/auth')
    const auth = await authenticateApiKey(request)
    if (auth.error) return auth.error

    const body = await request.json()
    const { referralId, orderId, amount } = body

    if (!referralId || !orderId) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const referral = await prisma.referral.findUnique({ where: { id: referralId } })
      if (!referral) return { success: false, commission: 0 }
      if (referral.status === 'completed') return { success: true, commission: referral.commissionEarned, duplicate: true }

      const commission = Math.round(19.00 * 0.20)

      await prisma.referral.update({
        where: { id: referralId },
        data: {
          status: 'completed',
          commissionEarned: commission,
        },
      })

      const referrerUser = await prisma.apiUser.findFirst({ where: { email: referral.referrerEmail } })
      if (referrerUser) {
        await prisma.apiUser.update({
          where: { id: referrerUser.id },
          data: { credits: { increment: 50 } },
        })
      }

      try {
        await resend.emails.send({
          from: EMAIL_FROM,
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
                  <p style="color: #64748b; margin: 0 0 16px;">Votre filleul vient d'effectuer un achat. Vous avez gagné <strong>${commission / 100}€</strong> de commission !</p>
                  <p style="color: #64748b; margin: 0 0 8px;">+50 crédits bonus ajoutés à votre compte.</p>
                  <a href="${appUrl}/dashboard" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 24px;">
                    Voir mon tableau de bord
                  </a>
                </div>
              </div>
            </body></html>
          `,
        })
      } catch (e) {
        logger.error('referral', 'Failed to send referral notification email', { error: e instanceof Error ? e.message : String(e) });
      }

      return { success: true, commission }
    }, { success: false, commission: 0 })

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function getLeaderboard() {
  try {
    const leaderboard = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const topReferrers = await prisma.referral.groupBy({
        by: ['referrerEmail'],
        where: { status: 'completed' },
        _count: { id: true },
        _sum: { commissionEarned: true },
        orderBy: { _count: { id: 'desc' } },
        take: 10,
      })

      const topByCommission = await prisma.referral.groupBy({
        by: ['referrerEmail'],
        where: { status: 'completed' },
        _sum: { commissionEarned: true },
        _count: { id: true },
        orderBy: { _sum: { commissionEarned: 'desc' } },
        take: 10,
      })

      return {
        topByReferrals: topReferrers.map((r, index) => ({
          rank: index + 1,
          email: r.referrerEmail.replace(/(.{2}).*(@.*)/, '$1***$2'),
          referralCount: r._count.id,
          totalCommission: r._sum.commissionEarned || 0,
          badge: getBadge(r._count.id),
        })),
        topByCommission: topByCommission.map((r, index) => ({
          rank: index + 1,
          email: r.referrerEmail.replace(/(.{2}).*(@.*)/, '$1***$2'),
          totalCommission: r._sum.commissionEarned || 0,
          referralCount: r._count.id,
          badge: getBadge(r._count.id),
        })),
      }
    }, { topByReferrals: [], topByCommission: [] })

    return NextResponse.json(leaderboard)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function getMonthlyEarnings(email: string) {
  try {
    const earnings = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')

      const allEarnings = await prisma.referralEarning.findMany({
        where: { email },
        orderBy: { month: 'desc' },
        take: 12,
      })

      const totalAllTime = allEarnings.reduce((sum, e) => sum + e.amount, 0)

      return {
        earnings: allEarnings.map((e) => ({
          month: e.month,
          amount: e.amount,
          amountEuros: (e.amount / 100).toFixed(2),
        })),
        totalAllTime,
        totalAllTimeEuros: (totalAllTime / 100).toFixed(2),
      }
    }, { earnings: [], totalAllTime: 0, totalAllTimeEuros: '0.00' })

    return NextResponse.json(earnings)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
