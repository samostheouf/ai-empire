import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { createHash } from 'crypto'
export const dynamic = 'force-dynamic'
export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(()=>({})) as any
    const email = body.email || body.customer_email || ''
    const sku = body.sku || 'HERMES-LV-NBA-M-1A8WU8'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email valide requis' }, { status: 400 })
    }
    const sale = await safeQuery(async()=>{
      const {prisma}=await import('@/lib/db')
      return prisma.luxurySale.findUnique({where:{sku}})
    }, null as any)
    if (!sale) return NextResponse.json({ error: 'SKU introuvable', sku }, { status: 404 })
    if ((sale as any).status === 'sold') return NextResponse.json({ error: 'Deja vendu' }, { status: 410 })
    const price = (sale as any).price as number
    const currency = ((sale as any).currency || 'EUR').toLowerCase()
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
    const idempotencyKey = createHash('sha256').update(`${email}:${sku}:${Math.floor(Date.now()/3600000)}`).digest('hex')
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      mode: 'payment',
      line_items: [{
        price_data: {
          currency,
          product_data: {
            name: `LV x NBA Varsity M FW21 Virgil Abloh - ${sku}`,
            description: 'LV x NBA Leather Basketball Jacket M FW21 Virgil Abloh - Porte 3x Parfait - DHL assure',
            metadata: { sku }
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      }],
      success_url: `${appUrl}/luxury/success?session_id={CHECKOUT_SESSION_ID}&sku=${sku}`,
      cancel_url: `${appUrl}/luxury?cancel=1`,
      metadata: { sku, type: 'luxury_direct', email },
      shipping_address_collection: { allowed_countries: ['FR','DE','IT','ES','GB','US','JP','CH','BE','NL','CA','AU','SG','AE','HK','KR'] as any },
      allow_promotion_codes: false,
    } as any, { idempotencyKey })
    await safeQuery(async()=>{
      const {prisma}=await import('@/lib/db')
      await prisma.luxuryLog.create({ data: { saleId: (sale as any).id, type: 'checkout', message: `checkout direct 4500 pour ${email} session ${session.id}`, data: { sessionId: session.id, email, price } as any }})
    }, null)
    return NextResponse.json({ success: true, url: session.url, sessionId: session.id, sku, price, currency: currency.toUpperCase() })
  } catch(e:any){
    console.error('luxury checkout error', e)
    return NextResponse.json({ error: e.message || 'Erreur checkout' }, { status: 500 })
  }
}
export async function GET(){
  const sale = await safeQuery(async()=>{
    const {prisma}=await import('@/lib/db')
    return prisma.luxurySale.findUnique({where:{sku:'HERMES-LV-NBA-M-1A8WU8'}})
  }, null as any)
  return NextResponse.json({ success:true, sale, checkout:'POST /api/luxury/checkout {email}' })
}
