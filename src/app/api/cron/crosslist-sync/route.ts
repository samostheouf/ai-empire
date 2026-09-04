import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

// CROSSLIST-SYNC 5m — SOLD trigger + desactivation <15min
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  }
  const now = new Date().toISOString()
  const sold = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findMany({ where: { status: 'sold' }, take: 3, orderBy: { updatedAt: 'desc' } })
  }, [] as any[])
  const active = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.count({ where: { status: 'active' } })
  }, 0)
  if (Array.isArray(sold) && sold.length > 0) {
    const recentCrosslist = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.luxuryLog.findFirst({ where: { type: 'crosslist', createdAt: { gte: new Date(Date.now() - 15*60*1000) } }, orderBy: { createdAt: 'desc' } })
    }, null as any)
    if (!recentCrosslist) {
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        const s: any = sold[0]
        await prisma.luxuryLog.create({ data: { saleId: s.id, type: 'crosslist', message: `CROSSLIST-SYNC: SOLD ${s.sku} sur ${s.platform ?? 'unknown'} — desactiver eBay/Grailed/Vestiaire <15min`, data: { sold: sold.map((x:any)=>({sku:x.sku, platform:x.platform, price:x.price})), activeCount: active, deadline: new Date(Date.now()+15*60*1000).toISOString() } as any } })
      }, null)
    }
    return NextResponse.json({ success: true, timestamp: now, action: 'CROSSLIST_ALERT', sold: (sold as any[]).map((s:any)=>({ sku:s.sku, platform:s.platform, price:s.price, updatedAt:s.updatedAt })), activeCount: active, instruction: 'Desactiver les autres plateformes immediatement — voir listing/CROSS_LIST_20_20.md checklist', sla: '<15min' })
  }
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const sale = await prisma.luxurySale.findFirst({ orderBy:{ createdAt:'desc' } })
    if (sale) await prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'crosslist', message: `crosslist-sync heartbeat — ${active} active, 0 sold — stock OK`, data: { activeCount: active } as any } })
  }, null)
  return NextResponse.json({ success: true, timestamp: now, action: 'HEARTBEAT', activeCount: active, soldCount: 0, sla: '<15min si SOLD' })
}
export async function POST(request: NextRequest) { return GET(request) }
