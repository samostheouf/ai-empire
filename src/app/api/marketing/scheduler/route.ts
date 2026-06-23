import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  ScheduledPost,
  getOptimalTime,
  generatePostId,
  generateAutoPostFromTemplate,
  formatScheduledPosts,
} from '@/lib/marketing/scheduler'

const scheduledPosts: ScheduledPost[] = []

export async function GET(request: Request) {
  try {
    const auth = await authenticateApiKey(request);
    if (auth.error) return auth.error;

    const { searchParams } = new URL(request.url)
    const platform = searchParams.get('platform')
    const status = searchParams.get('status')

    let filtered = [...scheduledPosts]

    if (platform) {
      filtered = filtered.filter(p => p.platform === platform)
    }

    if (status) {
      filtered = filtered.filter(p => p.status === status)
    }

    const stats = formatScheduledPosts(filtered)

    return NextResponse.json({
      posts: filtered,
      stats,
      optimalTimes: {
        twitter: ['09:00', '12:00', '17:00', '20:00'],
        linkedin: ['08:00', '10:00', '12:00', '17:00'],
        facebook: ['09:00', '13:00', '15:00', '19:00'],
      },
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { platform, content, hashtags, scheduledAt, mediaUrl, autoGenerate, templateData } = body

    if (autoGenerate && templateData) {
      const autoContent = generateAutoPostFromTemplate(
        templateData.name,
        templateData.category,
        templateData.features
      )

      const platforms = platform === 'all'
        ? ['twitter', 'linkedin', 'facebook']
        : [platform]

      const posts: ScheduledPost[] = platforms.map(p => ({
        id: generatePostId(),
        platform: p as ScheduledPost['platform'],
        content: autoContent,
        hashtags: hashtags || ['NeuraAPI', 'NextJS', 'WebDev'],
        scheduledAt: scheduledAt || getOptimalTime(p),
        status: 'pending',
      }))

      scheduledPosts.push(...posts)

      return NextResponse.json({
        success: true,
        posts,
        message: `${posts.length} post(s) planifié(s)`,
      })
    }

    if (!content) {
      return NextResponse.json({ error: 'Contenu requis' }, { status: 400 })
    }

    if (platform === 'all') {
      const posts: ScheduledPost[] = ['twitter', 'linkedin', 'facebook'].map(p => ({
        id: generatePostId(),
        platform: p as ScheduledPost['platform'],
        content,
        hashtags: hashtags || [],
        scheduledAt: scheduledAt || getOptimalTime(p),
        status: 'pending',
        mediaUrl,
      }))

      scheduledPosts.push(...posts)

      return NextResponse.json({
        success: true,
        posts,
        message: `${posts.length} post(s) planifié(s)`,
      })
    }

    const post: ScheduledPost = {
      id: generatePostId(),
      platform: platform || 'twitter',
      content,
      hashtags: hashtags || [],
      scheduledAt: scheduledAt || getOptimalTime(platform || 'twitter'),
      status: 'pending',
      mediaUrl,
    }

    scheduledPosts.push(post)

    return NextResponse.json({
      success: true,
      post,
      message: 'Post planifié avec succès',
    })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la planification' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const auth = await authenticateApiKey(request);
    if (auth.error) return auth.error;

    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('id')

    if (!postId) {
      return NextResponse.json({ error: 'ID du post requis' }, { status: 400 })
    }

    const index = scheduledPosts.findIndex(p => p.id === postId)
    if (index === -1) {
      return NextResponse.json({ error: 'Post non trouvé' }, { status: 404 })
    }

    scheduledPosts.splice(index, 1)

    return NextResponse.json({ success: true, message: 'Post supprimé' })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
