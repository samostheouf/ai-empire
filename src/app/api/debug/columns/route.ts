import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { prisma } = await import('@/lib/db')
    const rows = await prisma.$queryRawUnsafe<{ column_name: string }[]>(
      "SELECT column_name FROM information_schema.columns WHERE table_name='AnalyticsEvent'"
    )
    return NextResponse.json({ columns: rows.map(r => r.column_name) })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
