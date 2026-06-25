import { NextResponse } from 'next/server'
import { prisma, safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

let tableReady = false
let tablePromise: Promise<void> | null = null

async function ensureTable() {
  if (tableReady) return
  if (!prisma) return
  if (!tablePromise) {
    tablePromise = prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "WebVital" (
        "id" TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
        "name" TEXT NOT NULL,
        "value" DOUBLE PRECISION NOT NULL,
        "rating" TEXT NOT NULL,
        "page" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `).then(() => { tableReady = true }).catch(() => { tableReady = false })
  }
  await tablePromise
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body.name || typeof body.value !== 'number' || !body.page) {
      return NextResponse.json({ error: 'Invalid metric data' }, { status: 400 })
    }

    await ensureTable()

    if (prisma) {
      await safeQuery(
        () => prisma!.webVital.create({
          data: {
            name: body.name,
            value: Math.round(body.value * 100) / 100,
            rating: body.rating || 'unknown',
            page: body.page,
          },
        }),
        null
      )
    }

    return NextResponse.json({ ok: true }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to process metric' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const now = new Date()

  let fromTime: Date
  let toTime: Date
  let period: string

  const fromParam = searchParams.get('from')
  const toParam = searchParams.get('to')
  const range = searchParams.get('range') || '24h'

  if (fromParam && toParam) {
    fromTime = new Date(parseInt(fromParam))
    toTime = new Date(parseInt(toParam))
    const diffHours = Math.round((toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60))
    period = `${diffHours}h custom`
  } else {
    toTime = now
    const rangeMs: Record<string, number> = {
      '1h': 1 * 60 * 60 * 1000,
      '6h': 6 * 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000,
      '7d': 7 * 24 * 60 * 60 * 1000,
      '30d': 30 * 24 * 60 * 60 * 1000,
    }
    fromTime = new Date(toTime.getTime() - (rangeMs[range] || rangeMs['24h']))
    period = range
  }

  await ensureTable()

  const metrics = await safeQuery(
    () => prisma!.webVital.findMany({
      where: { createdAt: { gte: fromTime, lte: toTime } },
      orderBy: { createdAt: 'desc' },
    }),
    []
  )

  const byName: Record<string, { count: number; good: number; needsImprovement: number; poor: number; p50: number; p95: number }> = {}
  for (const m of metrics) {
    if (!byName[m.name]) {
      byName[m.name] = { count: 0, good: 0, needsImprovement: 0, poor: 0, p50: 0, p95: 0 }
    }
    const entry = byName[m.name]
    entry.count++
    if (m.rating === 'good') entry.good++
    else if (m.rating === 'needs-improvement') entry.needsImprovement++
    else entry.poor++
  }

  for (const [name, stats] of Object.entries(byName)) {
    const values = metrics.filter(m => m.name === name).map(m => m.value).sort((a, b) => a - b)
    stats.p50 = values[Math.floor(values.length * 0.5)] || 0
    stats.p95 = values[Math.floor(values.length * 0.95)] || 0
  }

  const byPage: Record<string, Record<string, number>> = {}
  for (const m of metrics) {
    if (!byPage[m.page]) byPage[m.page] = {}
    byPage[m.page][m.name] = (byPage[m.page][m.name] || 0) + 1
  }

  const topPages = Object.entries(byPage)
    .sort(([, a], [, b]) => Object.values(b).reduce((s, v) => s + v, 0) - Object.values(a).reduce((s, v) => s + v, 0))
    .slice(0, 10)
    .map(([page, counts]) => ({ page, metrics: counts }))

  return NextResponse.json({
    period,
    totalSamples: metrics.length,
    metrics: byName,
    topPages,
    score: calculateOverallScore(byName),
    lastUpdated: new Date().toISOString(),
  })
}

function calculateOverallScore(metrics: Record<string, { count: number; good: number }>): number {
  if (Object.keys(metrics).length === 0) return 0
  let totalGood = 0
  let totalSamples = 0
  for (const stats of Object.values(metrics)) {
    totalGood += stats.good
    totalSamples += stats.count
  }
  return totalSamples > 0 ? Math.round((totalGood / totalSamples) * 100) : 0
}
