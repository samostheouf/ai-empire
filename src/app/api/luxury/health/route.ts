import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    service: 'HERMES LUXURY', 
    timestamp: new Date().toISOString(),
    mode: 'FAST 4999€ 3j',
    autonomy: 'Vercel + GitHub Actions 5m',
    termux_required: false
  })
}
