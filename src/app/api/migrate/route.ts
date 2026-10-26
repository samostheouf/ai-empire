import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const secret = req.headers.get('x-migrate-secret')
  if (secret !== 'fix-data-column-2026') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  try {
    await prisma.$executeRawUnsafe('ALTER TABLE "AnalyticsEvent" ADD COLUMN IF NOT EXISTS "data" TEXT;')
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 })
  }
}
