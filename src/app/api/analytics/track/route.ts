import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { sanitizeInput, validateString } from '@/lib/input-validation'

export const dynamic = 'force-dynamic'

interface TrackingPayload {
  event: string
  page: string
  visitorId: string
  timestamp: number
  data?: Record<string, unknown>
}

export async function POST(request: NextRequest) {
  try {
    const body: TrackingPayload = await request.json()

    if (!body.event || !body.page || !body.visitorId) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    const safeEvent = validateString(body.event, 200) || body.event
    const safePage = validateString(body.page, 2000) || body.page
    const safeVisitorId = validateString(body.visitorId, 200) || body.visitorId

    const fiveSecondsAgo = new Date(Date.now() - 5000)
    const existingEvent = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return await prisma.analyticsEvent.findFirst({
        where: {
          event: safeEvent,
          page: safePage,
          visitorId: safeVisitorId,
          createdAt: { gte: fiveSecondsAgo },
        },
      })
    }, null)

    if (existingEvent) {
      return NextResponse.json({ ok: true, deduplicated: true })
    }

    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.analyticsEvent.create({
        data: {
          event: safeEvent,
          page: safePage,
          visitorId: safeVisitorId,
          data: body.data ? JSON.stringify(body.data) : null,
        },
      })
    }, null)

    return NextResponse.json({ ok: true }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 })
  }
}
