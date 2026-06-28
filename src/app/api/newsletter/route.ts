import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail } from '@/lib/input-validation'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`newsletter:${ip}`, 5, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 5)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    const { email } = await request.json()

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400, headers: { "Cache-Control": "no-store" } })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const existing = await prisma.waitlist.findUnique({ where: { email: validEmail } })
      if (!existing) {
        await prisma.waitlist.create({
          data: { email: validEmail, source: 'newsletter' },
        })
      }
    }, null)

    return NextResponse.json({ success: true, message: 'Inscription réussie' })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
