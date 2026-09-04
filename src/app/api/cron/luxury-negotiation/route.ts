import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'
export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  // FAST 3j: floor 4999 ferme J0-J3, jamais <4500, auto-accept >=4999, contre-offre 4700-4998, refus <4700
  const log = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxuryLog.create({ data: { saleId: 'negotiation', level: 'info', message: 'luxury-negotiation heartbeat — floor 4999 (FAST 3j), no offers to process (awaiting marketplace API)', metadata: { floor: 4999, floorAbsolute: 4500, mode: 'FAST 3j' } } })
  }, null)
  return NextResponse.json({ success: true, service: 'luxury-negotiation', floor: 4999, floorAbsolute: 4500, log: !!log })
}
