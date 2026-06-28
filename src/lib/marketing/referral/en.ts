import crypto from 'crypto'

export interface ReferralCode {
  code: string
  userId: string
  createdAt: Date
  uses: number
  maxUses: number
}

export interface ReferralReward {
  type: 'credits' | 'discount'
  value: number
  description: string
}

export function generateReferralCode(userId: string): string {
  const hash = crypto.createHash('sha256').update(userId + Date.now()).digest('hex')
  return `REF${hash.substring(0, 8).toUpperCase()}`
}

export function getReferralRewards(referralCount: number): ReferralReward[] {
  const rewards: ReferralReward[] = []

  if (referralCount >= 1) {
    rewards.push({
      type: 'credits',
      value: 50,
      description: '50 free credits for your first referral',
    })
  }

  if (referralCount >= 5) {
    rewards.push({
      type: 'credits',
      value: 200,
      description: '200 bonus credits for 5 referrals',
    })
  }

  if (referralCount >= 10) {
    rewards.push({
      type: 'discount',
      value: 20,
      description: '20% off your next renewal',
    })
  }

  if (referralCount >= 25) {
    rewards.push({
      type: 'credits',
      value: 500,
      description: '500 bonus credits for 25 referrals',
    })
  }

  return rewards
}

export interface ReferralStats {
  totalReferrals: number
  successfulReferrals: number
  pendingReferrals: number
  creditsEarned: number
  currentRewardTier: string
  nextRewardAt: number
  referralLink: string
}

export function calculateReferralStats(
  userId: string,
  referralCount: number,
  creditsEarned: number
): ReferralStats {
  const rewards = getReferralRewards(referralCount)
  const currentReward = rewards[rewards.length - 1]

  let nextRewardAt = 5
  if (referralCount >= 25) nextRewardAt = 50
  else if (referralCount >= 10) nextRewardAt = 25
  else if (referralCount >= 5) nextRewardAt = 10

  return {
    totalReferrals: referralCount,
    successfulReferrals: referralCount,
    pendingReferrals: 0,
    creditsEarned,
    currentRewardTier: currentReward?.description || 'None',
    nextRewardAt,
    referralLink: `${process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'}/ref/${generateReferralCode(userId)}`,
  }
}

export interface ReferralDashboardData {
  stats: ReferralStats
  recentReferrals: Array<{
    id: string
    email: string
    status: 'completed' | 'pending'
    date: Date
    reward: number
  }>
  rewards: ReferralReward[]
  leaderboard: Array<{
    rank: number
    name: string
    referralCount: number
    badge: string
  }>
}

export function getReferralBadge(referralCount: number): string {
  if (referralCount >= 50) return '🏆 Ambassador'
  if (referralCount >= 25) return '⭐ Expert'
  if (referralCount >= 10) return '🎯 Ambassador'
  if (referralCount >= 5) return '🚀 Active'
  if (referralCount >= 1) return '👍 Beginner'
  return '🆕 New'
}

export interface ShareableContent {
  platform: 'twitter' | 'linkedin' | 'email'
  text: string
  url: string
}

export function generateShareableContent(
  referralLink: string,
  userName: string
): ShareableContent[] {
  return [
    {
      platform: 'twitter',
      text: `🚀 I recommend NeuraAPI - AI APIs and premium templates for developers. Use my link to get 50 free credits: ${referralLink}`,
      url: referralLink,
    },
    {
      platform: 'linkedin',
      text: `I just discovered NeuraAPI, a complete solution for developers who want to integrate AI into their projects. Powerful APIs and professional templates included. Join us with my referral link: ${referralLink}`,
      url: referralLink,
    },
    {
      platform: 'email',
      text: `Hey! I invite you to discover NeuraAPI, an AI API and premium template platform. By using my link, you get 50 free credits. Sign up here: ${referralLink}`,
      url: referralLink,
    },
  ]
}
