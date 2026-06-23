import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  generateTwitterPost,
  generateLinkedInPost,
  generatePromotionalTwitterPost,
  generatePromotionalLinkedInPost,
} from '@/lib/marketing/social'

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  let body: { type?: string; data?: Record<string, unknown> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Données invalides' }, { status: 400 })
  }

  const { type, data } = body

  if (!type || typeof type !== 'string') {
    return NextResponse.json({ error: 'Le champ type est requis' }, { status: 400 })
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: 'Le champ data est requis' }, { status: 400 })
  }

  try {
    let posts

    switch (type) {
      case 'template':
        posts = {
          twitter: generateTwitterPost(data as unknown as Parameters<typeof generateTwitterPost>[0]),
          linkedin: generateLinkedInPost(data as unknown as Parameters<typeof generateLinkedInPost>[0]),
        }
        break
      case 'promotional':
        posts = {
          twitter: generatePromotionalTwitterPost(data as unknown as Parameters<typeof generatePromotionalTwitterPost>[0]),
          linkedin: generatePromotionalLinkedInPost(data as unknown as Parameters<typeof generatePromotionalLinkedInPost>[0]),
        }
        break
      default:
        return NextResponse.json({ error: 'Type de publication invalide' }, { status: 400 })
    }

    return NextResponse.json({ success: true, posts })
  } catch {
    return NextResponse.json({ error: 'Failed to generate posts' }, { status: 500 })
  }
}
