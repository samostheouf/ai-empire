import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// Transfert temporaire des cles Stripe vers prompt-empire. A SUPPRIMER apres usage.
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const vercelToken = request.nextUrl.searchParams.get('vercelToken')
  const targetProject = request.nextUrl.searchParams.get('targetProject')
  if (!vercelToken || !targetProject) {
    return NextResponse.json({ error: 'vercelToken et targetProject requis' }, { status: 400 })
  }

  const keys: Record<string, string | undefined> = {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  }
  if (!keys.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'STRIPE_SECRET_KEY absente' }, { status: 500 })
  }

  const results: Record<string, string> = {}
  for (const [name, value] of Object.entries(keys)) {
    if (!value) continue
    const res = await fetch(
      `https://api.vercel.com/v10/projects/${targetProject}/env?upsert=true`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${vercelToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: name, value, type: 'encrypted', target: ['production','preview','development'] }),
      }
    )
    results[name] = res.ok ? 'ok' : `error ${res.status}`
  }
  return NextResponse.json({ ok: true, results })
}
