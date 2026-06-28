import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'

export async function GET(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`templates:${ip}`, 30, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 30)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

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
