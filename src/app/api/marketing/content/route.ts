import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  generateBlogPostTemplate,
  generateCaseStudyTemplate,
  generateTutorialTemplate,
  generateFAQContent,
} from '@/lib/marketing/content'

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
    let content

    switch (type) {
      case 'blog':
        content = generateBlogPostTemplate(data as unknown as Parameters<typeof generateBlogPostTemplate>[0])
        break
      case 'case-study':
        content = generateCaseStudyTemplate(data as unknown as Parameters<typeof generateCaseStudyTemplate>[0])
        break
      case 'tutorial':
        content = generateTutorialTemplate(data as unknown as Parameters<typeof generateTutorialTemplate>[0])
        break
      case 'faq':
        content = generateFAQContent(String(data.category || 'general'))
        break
      default:
        return NextResponse.json({ error: 'Type de contenu invalide' }, { status: 400 })
    }

    return NextResponse.json({ success: true, content })
  } catch {
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 })
  }
}
