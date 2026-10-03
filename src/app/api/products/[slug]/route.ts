import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const product = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.template.findUnique({
          where: { slug },
          include: {
            _count: { select: { orders: true } },
          },
        })
      },
      null,
    )

    if (!product) {
      return NextResponse.json({ error: 'Produit non trouvé' }, { status: 404 })
    }

    return NextResponse.json(
      {
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        category: product.category,
        tags: product.tags,
        previewUrl: product.previewUrl,
        screenshot: product.screenshot,
        features: product.features,
        fileUrl: product.fileUrl,
        liveDemo: product.liveDemo,
        stripeProductId: product.stripeProductId,
        stripePriceId: product.stripePriceId,
        downloads: product.downloads,
        featured: product.featured,
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
        orderCount: product._count?.orders || 0,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      },
    )
  } catch (error) {
    console.error('[product detail API]', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération du produit' }, { status: 500 })
  }
}
