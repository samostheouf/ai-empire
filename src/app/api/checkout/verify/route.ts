import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('session_id')
  if (!sessionId) {
    return NextResponse.json({ error: 'session_id requis' }, { status: 400 })
  }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json({
      payment_status: session.payment_status,
      status: session.status,
      customer_email: session.customer_email,
      metadata: session.metadata,
    })
  } catch (err) {
    console.error('[checkout/verify] error', err)
    return NextResponse.json({ error: 'Session introuvable' }, { status: 404 })
  }
}