import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { callAI } from '@/lib/ai'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const idea = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.blogIdea.findFirst({
      where: { status: 'pending' },
      orderBy: { createdAt: 'asc' },
    })
  }, null)

  if (!idea) {
    return NextResponse.json({ success: true, message: 'No pending blog ideas' })
  }

  const result = await callAI(
    `Write a detailed blog article of approximately 2000 words about: "${idea.title}".\nKeywords to include: ${idea.keywords}.\n\nWrite in a professional, engaging tone. Include an introduction, multiple sections with headings, and a conclusion. Make it SEO-friendly.`,
    3000
  )

  if (!result.content) {
    return NextResponse.json({ success: false, error: 'AI generation failed' }, { status: 500 })
  }

  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.blogIdea.update({
      where: { id: idea.id },
      data: {
        status: 'published',
        content: result.content,
      },
    })
  }, null)

  return NextResponse.json({
    success: true,
    ideaId: idea.id,
    title: idea.title,
    contentLength: result.content.length,
    provider: result.provider,
  })
}
