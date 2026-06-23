import { NextRequest, NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'

const BACKEND_URL = process.env.CORE_SERVICE_URL || 'http://localhost:8001'

export async function GET(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const response = await fetch(`${BACKEND_URL}/workflows/`, {
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch workflows' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const response = await fetch(`${BACKEND_URL}/workflows/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Failed to create workflow' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
