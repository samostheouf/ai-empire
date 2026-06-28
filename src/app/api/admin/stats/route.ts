import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET() {
  try {
    const stats = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db')
        const [users, orders, templates, revenue] = await Promise.all([
          prisma.apiUser.count(),
          prisma.order.count(),
          prisma.template.count(),
          prisma.order.aggregate({
            _sum: { amount: true },
            where: { status: 'completed' },
          }),
        ])
        return { users, orders, templates, revenue: revenue._sum.amount ?? 0 }
      },
      { users: 0, orders: 0, templates: 0, revenue: 0 }
    )

    return NextResponse.json(stats, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la récupération des statistiques' }, { status: 500, headers: { 'Cache-Control': 'private, no-store' } })
  }
}
