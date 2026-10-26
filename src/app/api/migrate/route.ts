import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  const secret = req.headers.get('x-migrate-secret')
  if (secret !== 'fix-data-column-2026') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const url = process.env.DATABASE_URL
  if (!url) return NextResponse.json({ error: 'no DATABASE_URL' }, { status: 500 })
  const sep = url.includes('?') ? '&' : '?'
  const client = new PrismaClient({ datasourceUrl: `${url}${sep}connection_limit=1` })
  try {
    await client.$executeRawUnsafe('ALTER TABLE "AnalyticsEvent" ADD COLUMN IF NOT EXISTS "data" TEXT;')
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 })
  } finally {
    await client.$disconnect()
  }
}
