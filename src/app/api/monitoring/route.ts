import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { isDemoMode } from '@/lib/ai'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const timestamp = new Date().toISOString()

    const dbCheck = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.$queryRaw`SELECT 1`
      return true
    }, null)

    const dbStatus: 'ok' | 'error' = dbCheck ? 'ok' : 'error'
    const aiProvider = isDemoMode() ? 'demo' : 'live'
    let status: 'healthy' | 'degraded' | 'unhealthy' = 'healthy'
    if (dbStatus === 'error') status = 'unhealthy'
    else if (aiProvider === 'demo') status = 'degraded'

    return NextResponse.json({
      status,
      timestamp,
      version: '1.0.0',
      services: {
        frontend: { status: 'ok' },
        database: { status: dbStatus },
        ai: { status: aiProvider === 'demo' ? 'demo' : 'ok', provider: aiProvider },
      },
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' },
    })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la vérification du statut' }, { status: 500 })
  }
}
