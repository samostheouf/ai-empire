import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const rl = await rateLimit(`evolution:${ip}`, 30, 60_000)
  const rlHeaders = getRateLimitHeaders(rl, 30)
  if (!rl.allowed) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
  }

  const reports = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.evolutionReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
  }, [])

  return NextResponse.json({ success: true, reports })
}
