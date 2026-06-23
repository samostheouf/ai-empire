import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET() {
  try {
    const count = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.apiUser.count()
    }, 0)

    return NextResponse.json({ count }, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' },
    })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
