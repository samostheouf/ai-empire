import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { stripe } from '@/lib/stripe'

export const dynamic = 'force-dynamic'

export async function GET() {
  const checks: Record<string, { status: string; detail?: string }> = {}

  // DB check
  try {
    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      await prisma.$queryRaw`SELECT 1`
      return true
    }, false)
    checks.database = result ? { status: 'ok' } : { status: 'degraded', detail: 'query failed' }
  } catch (err) {
    checks.database = { status: 'error', detail: err instanceof Error ? err.message : 'unknown' }
  }

  // Stripe check
  try {
    await stripe.balance.retrieve()
    checks.stripe = { status: 'ok' }
  } catch (err) {
    checks.stripe = { status: 'error', detail: err instanceof Error ? err.message : 'unknown' }
  }

  const allOk = Object.values(checks).every((c) => c.status === 'ok')
  return NextResponse.json({
    status: allOk ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    checks,
  }, { status: allOk ? 200 : 503 })
}