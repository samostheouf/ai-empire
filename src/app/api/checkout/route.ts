import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { safeQuery } from '@/lib/db'
import { validateEmail, validateId, validateString } from '@/lib/input-validation'
import type Stripe from 'stripe'

const PROMO_CODES: Record<string, { discount: number; description: string }> = {
  LANCEMENT30: { discount: 0.30, description: 'Offre de lancement -30%' },
  BIENVENUE20: { discount: 0.20, description: 'Bienvenue -20%' },
  PARTENAIRE15: { discount: 0.15, description: 'Partenaire -15%' },
}

export async function POST(request: NextRequest) {
  try {
    const { templateId, templateTitle, email, promoCode, referralCode, affiliateCode } = await request.json()

    if (!validateId(templateId)) {
      return NextResponse.json({ error: 'ID template invalide' }, { status: 400 })
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

    let sessionParams: Record<string, unknown> = {
      payment_method_types: ['card'],
      customer_email: email,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}&template_id=${templateId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: { templateId, email, promoCode: promoCode || '', referralCode: referralCode || '', affiliateCode: affiliateCode || '', templateName: template.name, fileUrl: template.fileUrl },
    }

    if (template.stripePriceId) {
      sessionParams.line_items = [{ price: template.stripePriceId, quantity: 1 }]
      if (discountApplied) {
        sessionParams.discounts = [{ coupon: await createDiscountCoupon(promoCode!) }]
      }
    } else {
      sessionParams.line_items = [{
        price_data: {
          currency: 'eur',
          product_data: { name: template.name, metadata: { templateId, promoCode: promoCode || '' } },
          unit_amount: finalPrice,
        },
        quantity: 1,
      }]
    }

    const session = await stripe.checkout.sessions.create(sessionParams as Stripe.Checkout.SessionCreateParams)

    return NextResponse.json({
      url: session.url,
      originalPrice: serverPrice,
      finalPrice,
      discountApplied,
      discountDescription: discountDescription || null,
      promoCode: promoCode || null,
    })
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la création de la session' }, { status: 500 })
  }
}

async function createDiscountCoupon(code: string): Promise<string> {
  const promo = PROMO_CODES[code.toUpperCase()]
  if (!promo) return ''
  const coupon = await stripe.coupons.create({
    percent_off: promo.discount * 100,
    duration: 'once',
    name: promo.description,
  })
  return coupon.id
}
