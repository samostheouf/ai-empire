import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateString } from '@/lib/input-validation'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { createHash } from 'crypto'
import { logger } from '@/lib/logger'
import { SUBSCRIPTION_PLANS } from '@/lib/plans'

// Prix, noms et quotas proviennent de la source unique src/lib/plans.ts :
// c'est ce meme objet qui alimente l'affichage client et la session Stripe.
// Ne jamais reintroduire de montant en dur ici (cf. bug 19 EUR affiche / 49 EUR debite).
const AGENT_PLANS = SUBSCRIPTION_PLANS

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

        // `create` echoue si le slug existe deja (contrainte unique). Cas
        // reel : le template est present SANS stripePriceId (creation
        // interrompue, ancien import), ou deux requetes arrivent en meme
        // temps. Dans les deux cas l'echec faisait repondre 500 au client
        // alors que la session Stripe etait deja creee. On tente un upsert :
        // la session est deja usable, seule la ligne de cache manquait.
        await safeQuery(async () => {
          const { prisma } = await import('@/lib/db')
          return prisma.template.upsert({
            where: { slug: `agent-${plan}` },
            update: {
              stripeProductId: product.id,
              stripePriceId: price.id,
              price: selectedPlan.price,
            },
            create: {
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
        logger.error('checkout-agents', 'Failed to create Stripe product', { error: productError instanceof Error ? productError.message : String(productError) })
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

    // AVANT : la clé ne contenait que email:plan:promo — donc elle était
    // DÉFINITIVE. Un client dont le paiement a échoué (session abandonnée,
    // refus banque) ne pouvait plus jamais recommencer : Stripe renvoyait
    // « Keys for idempotent requests can only be used with the same
    // parameters ». La clé doit tourner : chaque heure donne une clé neuve,
    // un double-clic dans la même heure reste protégé.
    //
    // `stripePriceId` entre dans la clé parce que le montant facturé EN DÉPEND
    // de lui : si le Price Stripe est recréé (plan modifié, Price régénéré à la
    // main), la même clé présenterait des paramètres différents et Stripe
    // refuserait la session. Sans lui, un simple changement de Price bloque un
    // client qui avait déjà tenté un achat sur ce plan.
    const idempotencyKey = createHash('sha256')
      .update(
        `${email}:${plan}:${promoCode || ''}:${stripePriceId}:${Math.floor(Date.now() / 3600000)}`
      )
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
    logger.error('checkout-agents', 'Agent checkout error', { error: error instanceof Error ? error.message : String(error) })
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session de paiement' },
      { status: 500 }
    )
  }
}
