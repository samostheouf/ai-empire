import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET() {
  try {
    const result = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const viewsToday = await prisma.analyticsEvent.groupBy({
      by: ['page'],
      where: {
        event: 'template_view',
        createdAt: { gte: today },
        page: { contains: '/templates/' },
      },
      _count: { id: true },
    })

    const viewMap: Record<string, number> = {}
    for (const v of viewsToday) {
      const slug = v.page?.replace('/templates/', '').replace(/\?.*/, '') || ''
      if (slug) viewMap[slug] = v._count.id
    }

    return viewMap
  }, {} as Record<string, number>)

    return NextResponse.json(result, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    })
  } catch {
    return NextResponse.json({} as Record<string, number>, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120' },
    })
  }
}
