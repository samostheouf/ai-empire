import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

/**
 * Source de verite du prix pour les integrations et les agents.
 * NE PAS coder 4999/4500 en dur ici : le prix reel est celui de la vente active
 * (pilote par /api/cron/luxury-pricing). Une valeur en dur a deja affiche 4999€
 * alors que le prix etait 4500€.
 */
export async function GET() {
  const active = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findFirst({ where: { status: 'active' }, orderBy: { createdAt: 'desc' } })
  }, null as any)

  const price = active ? Number(active.price) : 4500

  return NextResponse.json({
    success: true,
    service: 'HERMES LUXURY',
    timestamp: new Date().toISOString(),
    mode: `FAST ${price}€ floor — 4 plateformes`,
    price,
    currency: 'EUR',
    sku: active ? active.sku : null,
    views: active ? active.views : 0,
    status: active ? active.status : null,
    autonomy: 'Vercel + GitHub Actions 5m',
    termux_required: false,
  }, { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } })
}
