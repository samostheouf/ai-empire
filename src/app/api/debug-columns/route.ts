import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const secret = req.headers.get('x-migrate-secret')
  if (secret !== 'fix-data-column-2026') {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  const url = process.env.DATABASE_URL
  if (!url) return NextResponse.json({ error: 'no DATABASE_URL' }, { status: 500 })
  const sep = url.includes('?') ? '&' : '?'
  const client = new PrismaClient({ datasourceUrl: `${url}${sep}connection_limit=1` })
  try {
    const cols: any = await client.$queryRawUnsafe(
      `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'AnalyticsEvent' ORDER BY ordinal_position`
    )
    return NextResponse.json({ columns: cols })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? String(e) }, { status: 500 })
  } finally {
    await client.$disconnect()
  }
}
