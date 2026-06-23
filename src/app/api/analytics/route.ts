import { NextRequest, NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'

const BACKEND_URL = process.env.OBS_SERVICE_URL || 'http://localhost:8002'

export async function GET(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'reports'
    
    let url = `${BACKEND_URL}/analytics/`
    if (type === 'reports') url += 'reports'
    else if (type === 'insights') url += 'insights'
    
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const response = await fetch(`${BACKEND_URL}/analytics/reports`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to create analytics' }, { status: 500 })
  }
}
