export interface ScheduledPost {
  id: string
  platform: 'twitter' | 'linkedin' | 'facebook'
  content: string
  hashtags: string[]
  scheduledAt: string
  status: 'pending' | 'published' | 'failed'
  mediaUrl?: string
  metrics?: PostMetrics
}

export interface PostMetrics {
  likes: number
  shares: number
  comments: number
  impressions: number
  clicks: number
}

export interface ScheduleRequest {
  platform: 'twitter' | 'linkedin' | 'facebook' | 'all'
  content: string
  hashtags?: string[]
  scheduledAt?: string
  mediaUrl?: string
}

const OPTIMAL_TIMES = {
  twitter: ['09:00', '12:00', '17:00', '20:00'],
  linkedin: ['08:00', '10:00', '12:00', '17:00'],
  facebook: ['09:00', '13:00', '15:00', '19:00'],
}

export function getOptimalTime(platform: string): string {
  const times = OPTIMAL_TIMES[platform as keyof typeof OPTIMAL_TIMES] || OPTIMAL_TIMES.twitter
  const now = new Date()
  const currentHour = now.getHours()

  for (const time of times) {
    const hour = parseInt(time.split(':')[0])
    if (hour > currentHour) {
      const [h, m] = time.split(':')
      const scheduled = new Date(now)
      scheduled.setHours(parseInt(h), parseInt(m), 0, 0)
      return scheduled.toISOString()
    }
  }

  const tomorrow = new Date(now)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [h, m] = times[0].split(':')
  tomorrow.setHours(parseInt(h), parseInt(m), 0, 0)
  return tomorrow.toISOString()
}

export function generatePostId(): string {
  return `post_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function calculateEngagementRate(metrics: PostMetrics): number {
  const totalEngagement = metrics.likes + metrics.shares + metrics.comments
  if (metrics.impressions === 0) return 0
  return Math.round((totalEngagement / metrics.impressions) * 100 * 100) / 100
}

export function getBestPostingDays(platform: string): string[] {
  const days: Record<string, string[]> = {
    twitter: ['Mardi', 'Mercredi', 'Jeudi'],
    linkedin: ['Mardi', 'Mercredi', 'Jeudi'],
    facebook: ['Vendredi', 'Samedi', 'Dimanche'],
  }
  return days[platform] || days.twitter
}

export function formatScheduledPosts(posts: ScheduledPost[]): {
  pending: ScheduledPost[]
  published: ScheduledPost[]
  failed: ScheduledPost[]
  totalEngagement: number
} {
  const pending = posts.filter(p => p.status === 'pending')
  const published = posts.filter(p => p.status === 'published')
  const failed = posts.filter(p => p.status === 'failed')

  const totalEngagement = published.reduce((sum, post) => {
    if (!post.metrics) return sum
    return sum + post.metrics.likes + post.metrics.shares + post.metrics.comments
  }, 0)

  return { pending, published, failed, totalEngagement }
}

export function generateAutoPostFromTemplate(templateName: string, templateCategory: string, features: string[]): string {
  const featureList = features.slice(0, 3).join(' • ')
  return `🚀 ${templateName} est maintenant disponible !

Un template ${templateCategory} professionnel pour vos projets.

✨ ${featureList}

Découvrez-le sur NeuraAPI 👇

#NextJS #Templates #WebDev #SaaS`
}
