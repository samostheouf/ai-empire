import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
  const period = searchParams.get('period') || '7d'

  const days = period === '30d' ? 30 : period === '90d' ? 90 : 7
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const data = await safeQuery(
    async () => {
      const { prisma } = await import('@/lib/db')

      const [totalUsers, totalOrders, totalRevenue, totalCreditsUsed, recentOrders, allUsers, allOrders] = await Promise.all([
        prisma.apiUser.count(),
        prisma.order.count(),
        prisma.order.aggregate({ _sum: { amount: true }, where: { status: 'completed' } }),
        prisma.usageLog.aggregate({ _sum: { tokens: true } }),
        prisma.order.findMany({
          where: { createdAt: { gte: startDate } },
          include: { template: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
        }),
        prisma.apiUser.findMany({ select: { createdAt: true, plan: true } }),
        prisma.order.findMany({ select: { createdAt: true, amount: true, template: { select: { name: true } } }, where: { status: 'completed' } }),
      ])

      const now = new Date()
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const newUsersToday = allUsers.filter(u => u.createdAt >= todayStart).length
      const ordersToday = allOrders.filter(o => o.createdAt >= todayStart).length
      const revenueToday = allOrders.filter(o => o.createdAt >= todayStart).reduce((sum, o) => sum + o.amount, 0)

      const templateSales = new Map<string, { sales: number; revenue: number }>()
      allOrders.forEach(o => {
        const name = o.template?.name || 'Inconnu'
        const existing = templateSales.get(name) || { sales: 0, revenue: 0 }
        existing.sales++
        existing.revenue += o.amount
        templateSales.set(name, existing)
      })

      const topTemplates = Array.from(templateSales.entries())
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5)

      const planCounts = new Map<string, number>()
      allUsers.forEach(u => {
        const plan = u.plan || 'starter'
        planCounts.set(plan, (planCounts.get(plan) || 0) + 1)
      })

      const planDistribution = Array.from(planCounts.entries())
        .map(([plan, count]) => ({
          plan,
          count,
          percentage: Math.round((count / Math.max(allUsers.length, 1)) * 100),
        }))
        .sort((a, b) => b.count - a.count)

      const revenueByDay = new Map<string, number>()
      const usersByDay = new Map<string, number>()
      for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - i)
        const key = date.toISOString().split('T')[0]
        revenueByDay.set(key, 0)
        usersByDay.set(key, 0)
      }

      allOrders.forEach(o => {
        const key = o.createdAt.toISOString().split('T')[0]
        if (revenueByDay.has(key)) {
          revenueByDay.set(key, (revenueByDay.get(key) || 0) + o.amount)
        }
      })

      allUsers.forEach(u => {
        const key = u.createdAt.toISOString().split('T')[0]
        if (usersByDay.has(key)) {
          usersByDay.set(key, (usersByDay.get(key) || 0) + 1)
        }
      })

      return {
        overview: {
          totalUsers,
          totalOrders,
          totalRevenue: totalRevenue._sum.amount ?? 0,
          totalCreditsUsed: totalCreditsUsed._sum.tokens ?? 0,
          activeUsers: totalUsers,
          newUsersToday,
          ordersToday,
          revenueToday,
        },
        revenue: Array.from(revenueByDay.entries()).map(([date, amount]) => ({ date, amount })),
        users: Array.from(usersByDay.entries()).map(([date, count]) => ({ date, count })),
        topTemplates,
        planDistribution,
        recentOrders: recentOrders.map(o => ({
          id: o.id,
          email: o.email,
          template: o.template?.name || 'Template',
          amount: o.amount,
          date: o.createdAt.toISOString(),
        })),
      }
    },
    {
      overview: {
        totalUsers: 0,
        totalOrders: 0,
        totalRevenue: 0,
        totalCreditsUsed: 0,
        activeUsers: 0,
        newUsersToday: 0,
        ordersToday: 0,
        revenueToday: 0,
      },
      revenue: [],
      users: [],
      topTemplates: [],
      planDistribution: [],
      recentOrders: [],
    }
  )

    return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la récupération des analytics' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
