import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateString } from '@/lib/input-validation'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { createHash } from 'crypto'

const AGENT_PLANS = {
  pro: {
    name: 'NeuraAPI AI Agents Pro',
    description: '3 AI Agents — Support, Lead Gen, Content — 5000 conversations/mois',
    price: 4900,
    interval: 'month',
    agents: 3,
    conversations: 5000,
  },
  business: {
    name: 'NeuraAPI AI Agents Business',
    description: 'Unlimited AI Agents — All 6 agents — Unlimited conversations',
    price: 14900,
    interval: 'month',
    agents: 999,
    conversations: 999999,
  },
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`checkout-agents:${ip}`, 10, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 10)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    const { plan, email, promoCode } = await request.json()

    if (!plan || !AGENT_PLANS[plan as keyof typeof AGENT_PLANS]) {
      return NextResponse.json({ error: 'Plan invalide' }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (promoCode && !validateString(promoCode, 50)) {
      return NextResponse.json({ error: 'Code promo invalide' }, { status: 400 })
    }

    const selectedPlan = AGENT_PLANS[plan as keyof typeof AGENT_PLANS]

    let stripePriceId: string

    const existingProduct = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.template.findFirst({
        where: { slug: `agent-${plan}` },
      })
    }, null)

    if (existingProduct?.stripePriceId) {
      stripePriceId = existingProduct.stripePriceId
    } else {
      try {
        const product = await stripe.products.create({
          name: selectedPlan.name,
          description: selectedPlan.description,
          metadata: { type: 'agent-subscription', plan },
        })

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: selectedPlan.price,
          currency: 'eur',
          recurring: { interval: 'month' },
        })

        stripePriceId = price.id

        await safeQuery(async () => {
          const { prisma } = await import('@/lib/db')
          return prisma.template.create({
            data: {
              name: selectedPlan.name,
              slug: `agent-${plan}`,
              description: selectedPlan.description,
              price: selectedPlan.price,
              category: 'agents',
              tags: 'ai,agents,subscription',
              previewUrl: '/agents',
              screenshot: '/logo.jpg',
              features: JSON.stringify([`${selectedPlan.agents} agents`, `${selectedPlan.conversations} conversations/mois`]),
              fileUrl: '',
              stripeProductId: product.id,
              stripePriceId: price.id,
            },
          })
        }, null)
      } catch (productError) {
        console.error('Failed to create Stripe product:', productError)
        throw new Error('Impossible de créer le produit Stripe')
      }
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

    const sessionParams: Record<string, unknown> = {
      mode: 'subscription',
      line_items: [{ price: stripePriceId, quantity: 1 }],
      customer_email: email,
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/agents`,
      metadata: { plan, type: 'agent-subscription' },
      allow_promotion_codes: true,
    }

    if (promoCode) {
      const promoCodes = await stripe.promotionCodes.list({ code: promoCode.toUpperCase(), limit: 1 })
      const validPromo = promoCodes.data[0]
      if (validPromo?.active) {
        sessionParams.discounts = [{ promotion_code: validPromo.id }]
      }
    }

    const idempotencyKey = createHash('sha256')
      .update(`${email}:${plan}:${promoCode || ''}`)
      .digest('hex')

    const session = await stripe.checkout.sessions.create(
      sessionParams as never,
      { idempotencyKey }
    )

    return NextResponse.json({
      success: true,
      url: session.url,
      sessionId: session.id,
    })
  } catch (error) {
    console.error('Agent checkout error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    )
  }
}
