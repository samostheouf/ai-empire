import { NextRequest, NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'

const BACKEND_URL = process.env.BIZ_SERVICE_URL || 'http://localhost:8003'

export async function GET(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const { searchParams } = new URL(request.url)
    const clientId = searchParams.get('client_id')
    
    let url = `${BACKEND_URL}/billing/invoices/`
    if (clientId) {
      const params = new URLSearchParams({ client_id: clientId });
      url += `?${params.toString()}`
    }
    
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(10000),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const response = await fetch(`${BACKEND_URL}/billing/invoices`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    })
    const data = await response.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to create invoice' }, { status: 500 })
  }
}
