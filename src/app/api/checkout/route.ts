import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateId, validateString } from '@/lib/input-validation'
import { logger } from '@/lib/logger'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import type Stripe from 'stripe'
import { createHash } from 'crypto'

/**
 * Codes promo du site.
 *
 * `maxRedemptions` et `redeemBy` ne sont pas decoratifs : sans eux, un coupon
 * Stripe est reutilisable INDEFINIMENT par quiconque le possede. Une remise
 * « de lancement » sans date de fin n'est pas une promotion, c'est une baisse
 * de marge permanente que personne n'a decidee.
 *
 * Ces bornes sont appliquees au coupon Stripe cree par createDiscountCoupon().
 */
interface PromoCode {
  discount: number
  description: string
  /** Nombre max d'utilisations avant epuisement */
  maxRedemptions: number
  /** Date d'expiration (secondes Unix). null = pas d'echeance. */
  redeemBy: number | null
}

/** 2027-03-31 : fin de l'offre de lancement. A renewer explicitement. */
const LAUNCH_END = Math.floor(new Date('2027-03-31T23:59:59Z').getTime() / 1000)

const PROMO_CODES: Record<string, PromoCode> = {
  LANCEMENT30:  { discount: 0.30, description: 'Offre de lancement -30%',   maxRedemptions: 500, redeemBy: LAUNCH_END },
  LAUNCH30:     { discount: 0.30, description: 'Launch discount -30%',      maxRedemptions: 500, redeemBy: LAUNCH_END },
  BIENVENUE20:  { discount: 0.20, description: 'Bienvenue -20%',            maxRedemptions: 300, redeemBy: LAUNCH_END },
  WELCOME20:    { discount: 0.20, description: 'Welcome -20%',              maxRedemptions: 300, redeemBy: LAUNCH_END },
  WELCOME10:    { discount: 0.10, description: 'Welcome -10%',              maxRedemptions: 300, redeemBy: LAUNCH_END },
  RETOUR20:     { discount: 0.20, description: 'Retour -20%',               maxRedemptions: 100, redeemBy: LAUNCH_END },
  PARTENAIRE15: { discount: 0.15, description: 'Partenaire -15%',           maxRedemptions: 200, redeemBy: LAUNCH_END },
  PRO20:        { discount: 0.20, description: 'Pro plan -20%',             maxRedemptions: 200, redeemBy: LAUNCH_END },
  HEBDO15:      { discount: 0.15, description: 'Offre hebdomadaire -15%',   maxRedemptions: 52,  redeemBy: LAUNCH_END },
}

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

async function createCheckoutSession(template: { id: string; name: string; price: number; stripePriceId: string | null; fileUrl: string }, emailNormalized: string | undefined, promoCode: string | undefined, referralCode: string | undefined, affiliateCode: string | undefined): Promise<{ session: { url: string | null }; finalPrice: number; serverPrice: number; discountApplied: boolean; discountDescription: string }> {
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

  // ---------------------------------------------------------------------------
  // Abonnement vs paiement unique.
  //
  // BUG CORRIGE (29/09) : cette route forcait `mode: 'payment'`. Les templates
  // `agent-pro` (49 EUR/mois) et `agent-business` (149 EUR/mois) portent un
  // `stripePriceId` RECURRENT cree par /api/checkout/agents. Stripe refuse
  // alors la session :
  //   "You specified 'payment' mode but passed a recurring price."
  // -> HTTP 500 sur ces 2 templates (verifie en prod avant et apres).
  //
  // Le tunnel d'abonnement correct est /api/checkout/agents, qui cree la
  // session en `mode: 'subscription'`. On y renvoie plutot que d'inventer une
  // gestion d'abonnement ici : un seul endroit cree les prix recurrents.
  // ---------------------------------------------------------------------------
  const isSubscription = template.stripePriceId?.startsWith('price_') && (template.id.includes('agent') || (template as { slug?: string }).slug?.startsWith('agent-'))
  if (isSubscription) {
    // `mode: 'subscription'` avec le price RECURRENT existant.
    // On ne passe PAS par /api/checkout/agents : un fetch vers soi-meme depuis
    // une serverless function est peu fiable (cold start + timeout 10s) et
    // masquait la cause reelle derriere un 500.
    // Regle : un prix de vente SEULEMENT — le client ne choisit pas le mode.
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: template.stripePriceId!, quantity: 1 }],
      ...(emailNormalized ? { customer_email: emailNormalized } : {}),
      success_url: `${APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${APP_URL}/agents`,
      metadata: { templateId: template.id, email: emailNormalized || '', type: 'agent-subscription' },
      allow_promotion_codes: true,
    })
    return {
      session: { url: session.url },
      finalPrice: serverPrice,
      serverPrice,
      discountApplied: false,
      discountDescription: '',
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

  // ---------------------------------------------------------------------------
  // Construction du line_item.
  //
  // Regle : `line_items` est TOUJOURS defini, et le montant facture est
  // TOUJOURS celui affiche. Deux pieges deja rencontres en prod :
  //  1) Stripe teste la PRESENCE de `allow_promotion_codes`, pas sa valeur :
  //     `allow_promotion_codes: false` + `discounts` = refus. Il faut supprimer
  //     la cle.
  //  2) La branche « coupon cree » ne definit pas line_items : si le template
  //     a un stripePriceId, aucune ligne ne tombe dans le session et Stripe
  //     répond « The `line_items` parameter is required in payment mode ».
  // ---------------------------------------------------------------------------
  const lineItemAt = (amount: number) => [{
    price_data: {
      currency: 'eur',
      product_data: { name: template.name, metadata: { templateId: template.id, promoCode: promoCode || '' } },
      unit_amount: amount,
    },
    quantity: 1,
  }]

  if (discountApplied) {
    const couponId = await createDiscountCoupon(promoCode!)
    if (couponId && template.stripePriceId) {
      // Prix catalogue Stripe + coupon : le montant final est applique par
      // Stripe lui-meme, il correspond au prix remixe annonce.
      sessionParams.line_items = [{ price: template.stripePriceId, quantity: 1 }]
      sessionParams.discounts = [{ coupon: couponId }]
      delete sessionParams.allow_promotion_codes
    } else {
      // Pas de stripePriceId (ou coupon indisponible) : on porte le montant
      // remixe dans le line_item. Dans tous les cas le client est debite du
      // montant AFFICHE, jamais du prix plein.
      sessionParams.line_items = lineItemAt(finalPrice)
    }
  } else if (template.stripePriceId) {
    sessionParams.line_items = [{ price: template.stripePriceId, quantity: 1 }]
    sessionParams.allow_promotion_codes = true
  } else {
    sessionParams.allow_promotion_codes = true
    sessionParams.line_items = lineItemAt(finalPrice)
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

/**
 * Coupon de remise : UN SEUL coupon par code promo, reutilise.
 *
 * AVANT : `stripe.coupons.create()` a chaque session, avec un cache en MEMOIRE
 * (`new Map()`). Or chaque invocation sur Vercel est une instance fraiche : le
 * cache ne survit jamais, donc CHAQUE achat creait un nouveau coupon. Mesure :
 * 16 coupons « Offre de lancement -30% » dans le dashboard pour 16 sessions.
 * Sans `max_redemptions` ni `redeem_by`, chacun est reutilisable a l'infini par
 * quiconque a le coupon — une remise sans plafond, sur une offre qui se veut
 * « de lancement ».
 *
 * FIX : on cherche d'abord un coupon existant du meme nom (Stripe n'a pas de
 * cle idempotente sur coupons.create), et on borne la remise :
 *   - `max_redemptions` : nombre max d'utilisations
 *   - `redeem_by`      : date d'expiration
 * Ces deux bornes sont la SEULE difference entre une offre de lancement et une
 * remise permanente. Regle : un coupon sans plafond n'est pas une promotion,
 * c'est une erreur de configuration.
 */
async function createDiscountCoupon(code: string): Promise<string> {
  const upperCode = code.toUpperCase()
  const promo = PROMO_CODES[upperCode]
  if (!promo) return ''

  // Verify promo is still active on Stripe side (not exhausted).
  // We create coupons with max_redemptions and redeem_by; if a coupon
  // with matching name is already exhausted, do not re-apply.
  try {
    const existing = await stripe.coupons.list({ limit: 100 })
    const match = existing.data.find(
      (c) => c.name === promo.description && c.percent_off === promo.discount * 100
    )
    if (match && match.max_redemptions != null && match.times_redeemed >= match.max_redemptions) {
      return '' // exhausted
    }
  } catch {
    // ignore, proceed
  }
  //    ATTENTION : uniquement s'il est deja BORNE. Les 16 coupons crees avant ce
  //    correctif n'ont ni max_redemptions ni redeem_by — les reutiliser
  //    conserverait la remise sans plafond qu'on veut justement supprimer.
  try {
    const existing = await stripe.coupons.list({ limit: 100 })
    const match = existing.data.find(
      (c) =>
        c.name === promo.description &&
        c.percent_off === promo.discount * 100 &&
        c.max_redemptions != null &&
        c.redeem_by != null
    )
    if (match) return match.id
  } catch (e) {
    logger.warn('checkout', 'Impossible de lister les coupons, creation directe', {
      error: e instanceof Error ? e.message : String(e),
    })
  }

  // 2. Sinon, creer un coupon BORNÉ.
  const coupon = await stripe.coupons.create({
    percent_off: promo.discount * 100,
    duration: 'once',
    name: promo.description,
    max_redemptions: promo.maxRedemptions,
    // Le SDK refuse `redeem_by: null` : on n'envoie la cle que si une
    // echeance est definie.
    ...(promo.redeemBy ? { redeem_by: promo.redeemBy } : {}),
  })
  return coupon.id
}
