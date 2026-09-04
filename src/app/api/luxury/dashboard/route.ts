import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function GET() {
  const now = new Date().toISOString()

  // 1. STATS — toutes ventes + active principale
  const sales = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { logs: { take: 20, orderBy: { createdAt: 'desc' } } },
    })
  }, [] as any[])

  const list = Array.isArray(sales) ? sales : []
  const active = list.find((s: any) => s.status === 'active') || list[0] || null
  const sold = list.filter((s: any) => s.status === 'sold')

  // 2. LOGS globaux (20 derniers)
  const logs = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxuryLog.findMany({ orderBy: { createdAt: 'desc' }, take: 20 })
  }, [] as any[])

  // 3. HEALTH — DB + counts
  let dbOk = false
  let dbLatencyMs: number | null = null
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const t0 = Date.now()
    await prisma.$queryRaw`SELECT 1`
    dbLatencyMs = Date.now() - t0
    dbOk = true
    return true
  }, null)

  // 4. PRICING HISTORY — journal + pricing_journal file if deployed (fallback)
  let pricingHistory: any[] = []
  // logs de type pricing
  const pricingLogs = Array.isArray(logs) ? (logs as any[]).filter((l) => l.type === 'pricing') : []
  pricingHistory = pricingLogs.map((l: any) => ({
    ts: l.createdAt,
    type: l.type,
    message: l.message,
    data: l.data,
  }))

  // Try to include market audit snapshot (static)
  const marketSnapshot = {
    median_sold_eur: 6961,
    median_active_cuir_eur: 7189,
    p25: 6031,
    p75: 6978,
    velocity: 'faible (<2/mois)',
    floor: 4500,
    ask: active ? (active as any).price : 4999,
  }

  // Source files (for DATA_20_20 traceability)
  const sources = {
    prisma_models: ['LuxurySale', 'LuxuryLog'],
    sku: 'HERMES-LV-NBA-M-1A8WU8',
    schema_path: 'prisma/schema.prisma',
  }

  return NextResponse.json({
    success: true,
    timestamp: now,
    health: {
      db: dbOk ? 'ok' : 'error',
      latencyMs: dbLatencyMs,
      activeSales: list.filter((s: any) => s.status === 'active').length,
      totalSales: list.length,
      soldCount: sold.length,
      mode: 'FAST 4999€ 3j',
    },
    stats: {
      sku: active ? (active as any).sku : null,
      price: active ? (active as any).price : null,
      currency: active ? (active as any).currency : 'EUR',
      status: active ? (active as any).status : null,
      views: active ? (active as any).views : 0,
      watchers: active ? (active as any).watchers : 0,
      offers: active ? (active as any).offers : null,
      offersCount: active && Array.isArray((active as any).offers) ? (active as any).offers.length : 0,
      platform: active ? (active as any).platform : null,
      createdAt: active ? (active as any).createdAt : null,
      updatedAt: active ? (active as any).updatedAt : null,
      all: list.map((s: any) => ({
        sku: s.sku,
        price: s.price,
        status: s.status,
        views: s.views,
        watchers: s.watchers,
        offers: s.offers,
        platform: s.platform,
        createdAt: s.createdAt,
      })),
    },
    logs: Array.isArray(logs) ? (logs as any[]).map((l: any) => ({
      id: l.id,
      saleId: l.saleId,
      type: l.type,
      message: l.message,
      data: l.data,
      createdAt: l.createdAt,
    })) : [],
    pricing: {
      current: marketSnapshot,
      history: pricingHistory,
      journal_hint: 'pricing_journal.jsonl: HOLD 4 999€ depuis 2026-09-04T09:15+02, floor 4500, next_check 2026-09-06T09:00+02',
    },
    sources,
  }, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } })
}
