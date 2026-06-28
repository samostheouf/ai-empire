import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma, safeQuery } from '@/lib/db'

export async function GET() {
  try {
    const [stripeProducts, templates] = await Promise.all([
      stripe.products.list({ active: true, limit: 100 }),
      safeQuery(() => prisma.template.findMany({ orderBy: { createdAt: 'desc' } }), []),
    ])

    return NextResponse.json({
      stripeProducts: stripeProducts.data,
      templates,
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue'
    return NextResponse.json({ error: message }, { status: 500, headers: { 'Cache-Control': 'private, no-store' } })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))
    const { templateId } = body as { templateId?: string }

    if (!templateId) {
      const templates = await safeQuery(
        () => prisma.template.findMany({ where: { stripeProductId: null } }),
        [],
      )

      const results: { id: string; stripeProductId: string; stripePriceId: string }[] = []

      for (const tpl of templates) {
        const product = await stripe.products.create({
          name: tpl.name,
          description: tpl.description,
          metadata: { templateId: tpl.id },
        })

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: tpl.price,
          currency: 'eur',
        })

        await prisma.template.update({
          where: { id: tpl.id },
          data: {
            stripeProductId: product.id,
            stripePriceId: price.id,
          },
        })

        results.push({
          id: tpl.id,
          stripeProductId: product.id,
          stripePriceId: price.id,
        })
      }

      return NextResponse.json({ synced: results.length, products: results }, { headers: { 'Cache-Control': 'private, no-store' } })
    }

    const template = await safeQuery(
      () => prisma.template.findUnique({ where: { id: templateId } }),
      null,
    )

    if (!template) {
      return NextResponse.json({ error: 'Template introuvable.' }, { status: 404, headers: { 'Cache-Control': 'private, no-store' } })
    }

    if (template.stripeProductId) {
      return NextResponse.json({ error: 'Ce template a déjà un produit Stripe.' }, { status: 409, headers: { 'Cache-Control': 'private, no-store' } })
    }

    const product = await stripe.products.create({
      name: template.name,
      description: template.description,
      metadata: { templateId: template.id },
    })

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: template.price,
      currency: 'eur',
    })

    await prisma.template.update({
      where: { id: templateId },
      data: {
        stripeProductId: product.id,
        stripePriceId: price.id,
      },
    })

    return NextResponse.json({
      id: template.id,
      stripeProductId: product.id,
      stripePriceId: price.id,
    }, { headers: { 'Cache-Control': 'private, no-store' } })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue'
    return NextResponse.json({ error: message }, { status: 500, headers: { 'Cache-Control': 'private, no-store' } })
  }
}
