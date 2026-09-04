import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  const log = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const sale = await prisma.luxurySale.findFirst({ orderBy: { createdAt: 'desc' } })
    if (!sale) return null
    return prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'negotiation', message: 'luxury-negotiation heartbeat — floor 4999 (FAST 3j), no offers to process (awaiting marketplace API)', data: { floor: 4999, floorAbsolute: 4500, mode: 'FAST 3j' } } })
  }, null)
  return NextResponse.json({ success: true, service: 'luxury-negotiation', floor: 4999, floorAbsolute: 4500, log: !!log })
}
