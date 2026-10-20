import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'
import { LUXURY_FLOOR } from '@/lib/luxury-intent'
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  // Floor ABSOLU 4500€ (LUXURY_FLOOR), sans échéance — règle 43/39.
  // L'ancienne règle glissante J0-J3 = 4999 a été retirée le 20/10 : le floor
  // 4500 n'a aucune échéance (luxury-pricing HOLD 4500).
  const sale = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
  }, null as any)
  const daysActive = sale ? (Date.now() - new Date(sale.createdAt).getTime()) / (1000 * 60 * 60 * 24) : 0
  const floor = LUXURY_FLOOR
  const mode = `${LUXURY_FLOOR} (absolu)`
  const log = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    if (!sale) return null
    return prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'negotiation', message: `luxury-negotiation heartbeat — floor ${floor} (${mode}), no offers to process (awaiting marketplace API)`, data: { floor, floorAbsolute: 4500, mode, daysActive: Number(daysActive.toFixed(1)) } } })
  }, null)
  return NextResponse.json({ success: true, service: 'luxury-negotiation', floor, floorAbsolute: 4500, mode, daysActive: Number(daysActive.toFixed(1)), log: !!log })
}
