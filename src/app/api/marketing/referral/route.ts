import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  generateReferralCode,
  getReferralRewards,
  calculateReferralStats,
  getReferralBadge,
  generateShareableContent,
} from '@/lib/marketing/referral'

const referralData = new Map<string, {
  count: number
  credits: number
  referredUsers: Array<{ email: string; date: string; status: string }>
}>()

export async function GET(request: Request) {
  try {
    const auth = await authenticateApiKey(request);
    if (auth.error) return auth.error;


    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const action = searchParams.get('action')

    if (!userId) {
      return NextResponse.json({ error: 'userId requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const data = referralData.get(userId) || { count: 5, credits: 250, referredUsers: [] }
    const stats = calculateReferralStats(userId, data.count, data.credits)
    const rewards = getReferralRewards(data.count)
    const badge = getReferralBadge(data.count)
    const code = generateReferralCode(userId)
    const shareableContent = generateShareableContent(stats.referralLink, userId)

    if (action === 'share') {
      return NextResponse.json({
        code,
        shareableContent,
        referralLink: stats.referralLink,
      }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    if (action === 'leaderboard') {
      const leaderboard = [
        { rank: 1, name: 'Alice M.', referrals: 45, badge: '🏆 Ambassadeur' },
        { rank: 2, name: 'Bob D.', referrals: 32, badge: '⭐ Expert' },
        { rank: 3, name: 'Claire L.', referrals: 28, badge: '🎯 Ambassadeur' },
        { rank: 4, name: 'David P.', referrals: 15, badge: '🚀 Actif' },
        { rank: 5, name: 'Emma R.', referrals: 8, badge: '👍 Débutant' },
      ]

      return NextResponse.json({ leaderboard }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    return NextResponse.json({
      stats,
      rewards,
      badge,
      code,
      referralLink: stats.referralLink,
      shareableContent,
      recentReferrals: data.referredUsers,
    }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { userId, referredEmail, code } = body

    if (!userId || !referredEmail) {
      return NextResponse.json({ error: 'userId et referredEmail requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    if (code) {
      const existingUser = referralData.get(userId) || { count: 0, credits: 0, referredUsers: [] }
      existingUser.referredUsers.push({
        email: referredEmail,
        date: new Date().toISOString(),
        status: 'completed',
      })
      referralData.set(userId, existingUser)
    }

    const userCode = generateReferralCode(userId)
    const referralLink = `${process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'}/ref/${userCode}`

    return NextResponse.json({
      success: true,
      message: `Parrainage enregistré pour ${referredEmail}`,
      reward: 50,
      referralLink,
      code: userCode,
    }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de l\'enregistrement' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function PATCH(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { userId, action, referralEmail } = body

    if (!userId || !action) {
      return NextResponse.json({ error: 'userId et action requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const data = referralData.get(userId) || { count: 0, credits: 0, referredUsers: [] }

    if (action === 'claim') {
      const rewards = getReferralRewards(data.count)
      const reward = rewards[rewards.length - 1]

      return NextResponse.json({
        success: true,
        reward,
        message: 'Récompense réclamée avec succès',
      }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    return NextResponse.json({ error: 'Action invalide' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
