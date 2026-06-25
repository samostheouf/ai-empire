import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { testName, variant, visitorId } = body

    if (!testName || !variant) {
      return NextResponse.json({ error: 'Missing testName or variant' }, { status: 400 })
    }

    const id = visitorId || crypto.randomUUID()

    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.aBTestVariant.upsert({
        where: { testId_visitorId: { testId: testName, visitorId: id } },
        create: { testId: testName, variantName: variant, visitorId: id },
        update: { variantName: variant },
      })
    }, null)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
}

export async function GET() {
  const data = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const variants = await prisma.aBTestVariant.groupBy({
      by: ['testId', 'variantName'],
      _count: { id: true },
    })

    const results: Record<string, { variants: Record<string, number>; total: number; winner: string }> = {}

    for (const row of variants) {
      if (!results[row.testId]) {
        results[row.testId] = { variants: {}, total: 0, winner: '' }
      }
      results[row.testId].variants[row.variantName] = row._count.id
      results[row.testId].total += row._count.id
    }

    for (const test of Object.values(results)) {
      let maxCount = 0
      for (const [variant, count] of Object.entries(test.variants)) {
        if (count > maxCount) {
          maxCount = count
          test.winner = variant
        }
      }
    }

    return results
  }, {} as Record<string, { variants: Record<string, number>; total: number; winner: string }>)

  return NextResponse.json({ tests: data, lastUpdated: new Date().toISOString() })
}
