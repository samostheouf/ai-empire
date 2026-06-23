import { NextRequest, NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'

const BACKEND_URL = process.env.BIZ_SERVICE_URL || 'http://localhost:8003'

export async function GET(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const response = await fetch(`${BACKEND_URL}/clients/`, {
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const response = await fetch(`${BACKEND_URL}/clients/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to create client' }, { status: 500 })
  }
}
