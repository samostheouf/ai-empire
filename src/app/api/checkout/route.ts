import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateId, validateString } from '@/lib/input-validation'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import type Stripe from 'stripe'
import { createHash } from 'crypto'

const PROMO_CODES: Record<string, { discount: number; description: string }> = {
  LANCEMENT30: { discount: 0.30, description: 'Offre de lancement -30%' },
  LAUNCH30: { discount: 0.30, description: 'Launch discount -30%' },
  BIENVENUE20: { discount: 0.20, description: 'Bienvenue -20%' },
  WELCOME20: { discount: 0.20, description: 'Welcome -20%' },
  WELCOME10: { discount: 0.10, description: 'Welcome -10%' },
  RETOUR20: { discount: 0.20, description: 'Retour -20%' },
  PARTENAIRE15: { discount: 0.15, description: 'Partenaire -15%' },
  PRO20: { discount: 0.20, description: 'Pro plan -20%' },
  HEBDO15: { discount: 0.15, description: 'Offre hebdomadaire -15%' },
}

const COUPON_CACHE_MAX = 100
const couponCache = new Map<string, string>()

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`checkout:${ip}`, 10, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 10)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Corps de requête JSON invalide' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
    }
    const { templateId, templateTitle, email, promoCode, referralCode, affiliateCode } = (body ?? {}) as {
      templateId?: string; templateTitle?: string; email?: string; promoCode?: string; referralCode?: string; affiliateCode?: string
    }

    if (!validateId(templateId)) {
      return NextResponse.json({ error: 'ID template invalide' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
    }

    if (!validateString(templateTitle, 200)) {
      return NextResponse.json({ error: 'Titre template invalide' }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    if (promoCode && !validateString(promoCode, 50)) {
      return NextResponse.json({ error: 'Code promo invalide' }, { status: 400 })
    }

    if (referralCode && !validateString(referralCode, 100)) {
      return NextResponse.json({ error: 'Code de parrainage invalide' }, { status: 400 })
    }

    if (affiliateCode && !validateString(affiliateCode, 100)) {
      return NextResponse.json({ error: 'Code affilié invalide' }, { status: 400 })
    }

    const template = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.template.findUnique({ where: { id: templateId } })
      },
      null
    )

    if (!template) {
      return NextResponse.json({ error: 'Template introuvable' }, { status: 404 })
    }

    const serverPrice = template.price
    let finalPrice = serverPrice
    let discountApplied = false
    let discountDescription = ''

    if (promoCode) {
      const promo = PROMO_CODES[promoCode.toUpperCase()]
      if (promo) {
        finalPrice = Math.round(serverPrice * (1 - promo.discount))
        discountApplied = true
        discountDescription = promo.description
      }
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

    let sessionParams: Record<string, unknown> = {
      payment_method_types: ['card'],
      customer_email: email,
      mode: 'payment',
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&template_id=${templateId}`,
      cancel_url: `${appUrl}/pricing`,
      metadata: { templateId, email, promoCode: promoCode || '', referralCode: referralCode || '', affiliateCode: affiliateCode || '', templateName: template.name, fileUrl: template.fileUrl },
    }

    if (template.stripePriceId) {
      sessionParams.line_items = [{ price: template.stripePriceId, quantity: 1 }]
      if (discountApplied) {
        const couponId = await createDiscountCoupon(promoCode!)
        // Empty coupon id (unknown code / Stripe failure) would break the session.
        if (couponId) {
          sessionParams.discounts = [{ coupon: couponId }]
          sessionParams.allow_promotion_codes = false
        } else {
          sessionParams.allow_promotion_codes = true
        }
      } else {
        sessionParams.allow_promotion_codes = true
      }
    } else {
      sessionParams.allow_promotion_codes = true
      sessionParams.line_items = [{
        price_data: {
          currency: 'eur',
          product_data: { name: template.name, metadata: { templateId, promoCode: promoCode || '' } },
          unit_amount: finalPrice,
        },
        quantity: 1,
      }]
    }

    const idempotencyKey = createHash('sha256')
      .update(`${email}:${templateId}:${promoCode || ''}`)
      .digest('hex')

    const session = await stripe.checkout.sessions.create(
      sessionParams as Stripe.Checkout.SessionCreateParams,
      { idempotencyKey }
    )

    return NextResponse.json({
      url: session.url,
      originalPrice: serverPrice,
      finalPrice,
      discountApplied,
      discountDescription: discountDescription || null,
      promoCode: promoCode || null,
    })
  } catch (err) {
    console.error('Checkout session creation error:', err)
    return NextResponse.json({ error: 'Erreur lors de la création de la session' }, { status: 500 })
  }
}

async function createDiscountCoupon(code: string): Promise<string> {
  const upperCode = code.toUpperCase()
  const cached = couponCache.get(upperCode)
  if (cached) return cached

  const promo = PROMO_CODES[upperCode]
  if (!promo) return ''
  const coupon = await stripe.coupons.create({
    percent_off: promo.discount * 100,
    duration: 'once',
    name: promo.description,
  })
  if (couponCache.size >= COUPON_CACHE_MAX) {
    // Bound the cache: drop the oldest entry (FIFO eviction).
    couponCache.delete(couponCache.keys().next().value as string)
  }
  couponCache.set(upperCode, coupon.id)
  return coupon.id
}
