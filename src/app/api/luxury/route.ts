import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const sales = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findMany({ orderBy: { createdAt: 'desc' }, take: 10, include: { logs: { take: 5, orderBy: { createdAt: 'desc' } } } })
  }, [])
  return NextResponse.json({ success: true, sales })
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  const { action, sku, platform, price, title } = body

  if (action === 'create') {
    const created = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.luxurySale.upsert({
        where: { sku },
        update: { title: title || sku, price: price || 4999, status: 'active', metadata: body.metadata || {} },
        create: { sku, title: title || sku, price: price || 4999, currency: 'EUR', status: 'active', metadata: body.metadata || {} },
      })
    }, null)
    return NextResponse.json({ success: !!created, created })
  }

  if (action === 'sold') {
    const updated = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findUnique({ where: { sku } })
      if (!sale) return null
      const u = await prisma.luxurySale.update({ where: { sku }, data: { status: 'sold', platform: platform || 'unknown' } })
      await prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'sold', message: `SOLD marque par humain — plateforme: ${platform || 'unknown'} — NE PAS REINVENTER VENTE`, data: { platform: platform || 'unknown', sku } as any } })
      return u
    }, null)
    return NextResponse.json({ success: !!updated, updated })
  }

  if (action === 'view' || action === 'watcher' || action === 'offer') {
    const updated = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findUnique({ where: { sku } })
      if (!sale) return null
      const data: any = {}
      if (action === 'view') data.views = { increment: 1 }
      if (action === 'watcher') data.watchers = { increment: 1 }
      if (action === 'offer') data.offers = price ? { push: price } : undefined
      return prisma.luxurySale.update({ where: { sku }, data })
    }, null)
    return NextResponse.json({ success: !!updated })
  }

  return NextResponse.json({ error: 'action inconnue: create, sold, view, watcher, offer' }, { status: 400 })
}
