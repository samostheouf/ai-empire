import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET() {
  try {
    const templates = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.template.findMany({
          orderBy: { createdAt: 'desc' },
        })
      },
      []
    )

    return NextResponse.json(templates, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la récupération des templates' }, { status: 500 })
  }
}
