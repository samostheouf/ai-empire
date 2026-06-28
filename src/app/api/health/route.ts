import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const startTime = Date.now()

    const dbCheck = (async () => {
      try {
        await prisma.$queryRaw`SELECT 1`
        return true
      } catch {
        return false
      }
    })()

    const aiCheck = (async () => {
      const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY
      if (!apiKey) return { status: 'not_configured' }
      return { status: 'configured' }
    })()

    const stripeCheck = (async () => {
      const secretKey = process.env.STRIPE_SECRET_KEY
      if (!secretKey) return { status: 'not_configured' }
      return { status: 'configured' }
    })()

    const emailCheck = (async () => {
      const apiKey = process.env.RESEND_API_KEY
      if (!apiKey) return { status: 'not_configured' }
      return { status: 'configured' }
    })()

    const [dbOk, aiResult, stripeResult, emailResult] = await Promise.all([dbCheck, aiCheck, stripeCheck, emailCheck])

    const services: Record<string, { status: string; latencyMs?: number }> = {
      frontend: { status: 'ok' },
      database: { status: dbOk ? 'ok' : 'error' },
      ai: aiResult,
      stripe: stripeResult,
      email: emailResult,
    }

    const criticalOk = dbOk
    let status: 'healthy' | 'degraded' | 'unhealthy' = criticalOk ? 'healthy' : 'degraded'
    if (!dbOk) status = 'unhealthy'

    return NextResponse.json({
      status,
      timestamp: new Date().toISOString(),
      uptime: Math.floor(process.uptime()),
      version: '1.0.0',
      services,
      latencyMs: Date.now() - startTime,
    }, {
      headers: { 'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60' },
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}