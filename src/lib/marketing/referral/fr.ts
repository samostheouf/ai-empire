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
      description: '50 crédits gratuits pour votre premier parrainage',
    })
  }

  if (referralCount >= 5) {
    rewards.push({
      type: 'credits',
      value: 200,
      description: '200 crédits bonus pour 5 parrainages',
    })
  }

  if (referralCount >= 10) {
    rewards.push({
      type: 'discount',
      value: 20,
      description: '20% de réduction sur votre prochain renouvellement',
    })
  }

  if (referralCount >= 25) {
    rewards.push({
      type: 'credits',
      value: 500,
      description: '500 crédits bonus pour 25 parrainages',
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
    currentRewardTier: currentReward?.description || 'Aucun',
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
  if (referralCount >= 50) return '🏆 Ambassadeur'
  if (referralCount >= 25) return '⭐ Expert'
  if (referralCount >= 10) return '🎯 Ambassadeur'
  if (referralCount >= 5) return '🚀 Actif'
  if (referralCount >= 1) return '👍 Débutant'
  return '🆕 Nouveau'
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
      text: `🚀 Je recommande NeuraAPI - APIs IA et templates premium pour développeurs. Utilisez mon lien pour obtenir 50 crédits gratuits : ${referralLink}`,
      url: referralLink,
    },
    {
      platform: 'linkedin',
      text: `Je viens de découvrir NeuraAPI, une solution complète pour les développeurs qui souhaitent intégrer l'IA dans leurs projets. APIs performantes et templates professionnels inclus. Rejoignez-nous avec mon lien de parrainage : ${referralLink}`,
      url: referralLink,
    },
    {
      platform: 'email',
      text: `Salut ! Je t'invite à découvrir NeuraAPI, une plateforme d'APIs IA et templates premium. En utilisant mon lien, tu obtiens 50 crédits gratuits. Inscris-toi ici : ${referralLink}`,
      url: referralLink,
    },
  ]
}
