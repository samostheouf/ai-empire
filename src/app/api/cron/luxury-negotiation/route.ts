import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  // Le floor glissant est le meme partout : J0-J3 = 4999 (FAST), J+3 = 4500 (absolu).
  // Une valeur en dur ici a deja ressorti 4999 alors que le prix etait 4500.
  const sale = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
  }, null as any)
  const daysActive = sale ? (Date.now() - new Date(sale.createdAt).getTime()) / (1000 * 60 * 60 * 24) : 0
  const floor = daysActive >= 3 ? 4500 : 4999
  const mode = daysActive >= 3 ? '4500 (absolu)' : '4999 (FAST 3j)'
  const log = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    if (!sale) return null
    return prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'negotiation', message: `luxury-negotiation heartbeat — floor ${floor} (${mode}), no offers to process (awaiting marketplace API)`, data: { floor, floorAbsolute: 4500, mode, daysActive: Number(daysActive.toFixed(1)) } } })
  }, null)
  return NextResponse.json({ success: true, service: 'luxury-negotiation', floor, floorAbsolute: 4500, mode, daysActive: Number(daysActive.toFixed(1)), log: !!log })
}
