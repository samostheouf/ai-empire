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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
}

async function findTemplateByIdOrSlug(value: string) {
  // Try id first, then slug
  const byId = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.template.findUnique({ where: { id: value } })
  }, null)
  if (byId) return byId
  const bySlug = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.template.findFirst({ where: { slug: value } })
  }, null)
  return bySlug
}

async function createCheckoutSession(template: { id: string; name: string; price: number; stripePriceId: string | null; fileUrl: string }, emailNormalized: string | undefined, promoCode: string | undefined, referralCode: string | undefined, affiliateCode: string | undefined) {
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

  const sessionParams: Record<string, unknown> = {
    payment_method_types: ['card'],
    ...(emailNormalized ? { customer_email: emailNormalized } : {}),
    mode: 'payment',
    success_url: `${APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}&template_id=${template.id}`,
    cancel_url: `${APP_URL}/pricing`,
    metadata: {
      templateId: template.id,
      email: emailNormalized || '',
      promoCode: promoCode || '',
      referralCode: referralCode || '',
      affiliateCode: affiliateCode || '',
      templateName: template.name,
      fileUrl: template.fileUrl,
    },
  }

  if (template.stripePriceId) {
    sessionParams.line_items = [{ price: template.stripePriceId, quantity: 1 }]
    if (discountApplied) {
      const couponId = await createDiscountCoupon(promoCode!)
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
        product_data: { name: template.name, metadata: { templateId: template.id, promoCode: promoCode || '' } },
        unit_amount: finalPrice,
      },
      quantity: 1,
    }]
  }

  const idempotencyKey = createHash('sha256')
    .update(`${emailNormalized || 'guest'}:${template.id}:${promoCode || ''}:${Math.floor(Date.now() / 3600000)}`)
    .digest('hex')

  const session = await stripe.checkout.sessions.create(
    sessionParams as Stripe.Checkout.SessionCreateParams,
    { idempotencyKey }
  )

  return { session, finalPrice, serverPrice, discountApplied, discountDescription }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
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
    const { templateId, pack, packId, templateTitle, email, promoCode, referralCode, affiliateCode } = (body ?? {}) as {
      templateId?: string; pack?: string; packId?: string; templateTitle?: string; email?: string; promoCode?: string; referralCode?: string; affiliateCode?: string
    }

    const rawTemplateId = templateId || packId || pack
    if (!validateId(rawTemplateId)) {
      return NextResponse.json({ error: 'ID template invalide' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
    }

    // templateTitle optional now — only validate if provided
    if (templateTitle !== undefined && templateTitle !== null && templateTitle !== '' && !validateString(templateTitle, 200)) {
      return NextResponse.json({ error: 'Titre template invalide' }, { status: 400 })
    }

    // email optional — Stripe collectera si absent (friction 0) comme hype-empire
    const emailNormalized = validateEmail(email) || undefined

    if (promoCode && !validateString(promoCode, 50)) {
      return NextResponse.json({ error: 'Code promo invalide' }, { status: 400 })
    }

    if (referralCode && !validateString(referralCode, 100)) {
      return NextResponse.json({ error: 'Code de parrainage invalide' }, { status: 400 })
    }

    if (affiliateCode && !validateString(affiliateCode, 100)) {
      return NextResponse.json({ error: 'Code affilié invalide' }, { status: 400 })
    }

    const template = await findTemplateByIdOrSlug(rawTemplateId!)

    if (!template) {
      return NextResponse.json({ error: 'Template introuvable' }, { status: 404 })
    }

    const { session, finalPrice, serverPrice, discountApplied, discountDescription } = await createCheckoutSession(template, emailNormalized, promoCode, referralCode, affiliateCode)

    return NextResponse.json({
      url: session.url,
      originalPrice: serverPrice,
      finalPrice,
      discountApplied,
      discountDescription: discountDescription || null,
      promoCode: promoCode || null,
    }, { headers: rlHeaders })
  } catch (err) {
    console.error('Checkout session creation error:', err)
    return NextResponse.json({ error: 'Erreur lors de la création de la session' }, { status: 500 })
  }
}

// GET support for direct links : /api/checkout?pack=xxx&email=optional -> 303 redirect Stripe (comme hype-empire)
export async function GET(request: NextRequest) {
  const ip = getClientIp(request)
  const rl = await rateLimit(`checkout:${ip}`, 10, 60_000)
  if (!rl.allowed) {
    return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429, headers: getRateLimitHeaders(rl, 10) })
  }

  const packParam = request.nextUrl.searchParams.get('pack') || request.nextUrl.searchParams.get('packId') || request.nextUrl.searchParams.get('templateId') || request.nextUrl.searchParams.get('template_id')
  const emailParam = request.nextUrl.searchParams.get('email')
  const promoParam = request.nextUrl.searchParams.get('promo') || request.nextUrl.searchParams.get('promoCode') || undefined
  const referralParam = request.nextUrl.searchParams.get('ref') || request.nextUrl.searchParams.get('referralCode') || undefined
  const affiliateParam = request.nextUrl.searchParams.get('aff') || request.nextUrl.searchParams.get('affiliateCode') || undefined

  if (!packParam || !validateId(packParam)) {
    return NextResponse.redirect(`${APP_URL}/pricing`, 302)
  }

  const emailNormalized = validateEmail(emailParam) || undefined

  const template = await findTemplateByIdOrSlug(packParam)
  if (!template) {
    return NextResponse.redirect(`${APP_URL}/pricing`, 302)
  }

  try {
    const { session } = await createCheckoutSession(template, emailNormalized, promoParam || undefined, referralParam || undefined, affiliateParam || undefined)
    if (session.url) return NextResponse.redirect(session.url, 303)
    return NextResponse.json({ url: session.url })
  } catch (e) {
    console.error('Checkout GET error', e)
    return NextResponse.redirect(`${APP_URL}/pricing`, 302)
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
    couponCache.delete(couponCache.keys().next().value as string)
  }
  couponCache.set(upperCode, coupon.id)
  return coupon.id
}
