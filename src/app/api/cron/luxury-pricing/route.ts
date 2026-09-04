import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

// PRICING 09h: ajuste -3% si 0 vues après 48h, jamais <4500
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }
  const now = new Date()
  const sale = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ where: { status: 'active' }, orderBy: { createdAt: 'desc' } })
  }, null as any)

  if (!sale) {
    return NextResponse.json({ success: true, message: 'no active sale', timestamp: now.toISOString() })
  }

  const daysActive = (now.getTime() - new Date(sale.createdAt).getTime()) / (1000*60*60*24)
  const views = (sale as any).views || 0
  let action = 'HOLD'
  let newPrice = (sale as any).price
  let reason = `views=${views} days=${daysActive.toFixed(1)} floor 4500`

  // Règle HERMES DYNAMIC_PRICING: -3% si 0 vues après 48h et jamais <4500
  if (daysActive >= 2 && views === 0 && newPrice > 4500) {
    newPrice = Math.max(4500, Math.round(newPrice * 0.97))
    action = 'ADJUST -3%'
    reason = `0 vues après ${daysActive.toFixed(1)}j → baisse 3% → ${newPrice}€`
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.luxurySale.update({ where: { id: (sale as any).id }, data: { price: newPrice } })
      await prisma.luxuryLog.create({ data: { saleId: (sale as any).id, type: 'pricing', message: reason, data: { oldPrice: (sale as any).price, newPrice, views, daysActive } as any } })
    }, null)
  } else {
    await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.luxuryLog.create({ data: { saleId: (sale as any).id, type: 'pricing', message: `HOLD — ${reason}`, data: { price: newPrice, views, daysActive } as any } })
    }, null)
  }

  return NextResponse.json({ success: true, timestamp: now.toISOString(), sale: { sku: (sale as any).sku, price: (sale as any).price, newPrice, action, reason } })
}
