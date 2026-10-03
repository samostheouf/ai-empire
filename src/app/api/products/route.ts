import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit'
import { parseJsonField } from '@/lib/utils'

export interface ProductListItem {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  tags: string
  previewUrl: string
  screenshot: string
  features: string
  stripeProductId: string | null
  stripePriceId: string | null
  downloads: number
  featured: boolean
  createdAt: string
  _count?: { orders: number }
}

export interface ProductsResponse {
  products: ProductListItem[]
  total: number
  page: number
  pageSize: number
  categories: string[]
}

export async function GET(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown'
    const rl = await rateLimit(`products:${ip}`, 60, 60_000)
    const rlHeaders = getRateLimitHeaders(rl, 60)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    const { searchParams } = new URL(request.url)
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
    const pageSize = Math.min(50, Math.max(1, parseInt(searchParams.get('pageSize') || '12', 10)))
    const category = searchParams.get('category') || undefined
    const search = searchParams.get('search') || undefined
    const sort = searchParams.get('sort') || 'newest'
    const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!, 10) : undefined
    const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!, 10) : undefined
    const featured = searchParams.get('featured') === 'true'

    const { prisma } = await import('@/lib/db')

    // Build where clause
    const where: Record<string, unknown> = {}

    if (category) {
      where.category = category
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' as const } },
        { description: { contains: search, mode: 'insensitive' as const } },
        { tags: { contains: search, mode: 'insensitive' as const } },
      ]
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {}
      if (minPrice !== undefined) (where.price as Record<string, number>).gte = minPrice
      if (maxPrice !== undefined) (where.price as Record<string, number>).lte = maxPrice
    }

    if (featured) {
      where.featured = true
    }

    // Build orderBy
    let orderBy: Record<string, string> = { createdAt: 'desc' }
    if (sort === 'price_asc') orderBy = { price: 'asc' }
    else if (sort === 'price_desc') orderBy = { price: 'desc' }
    else if (sort === 'popular') orderBy = { downloads: 'desc' }

    const [products, total, categories] = await safeQuery(
      async () => {
        const [prods, totalCount, cats] = await Promise.all([
          prisma.template.findMany({
            where,
            orderBy,
            skip: (page - 1) * pageSize,
            take: pageSize,
            include: { _count: { select: { orders: true } } },
          }),
          prisma.template.count({ where }),
          prisma.template.findMany({
            where: { category: { not: 'null' } },
            select: { category: true },
            distinct: ['category'],
          }),
        ])
        return [prods, totalCount, cats] as const
      },
      [[], 0, []],
    )

    const categoryList = categories
      .map((c) => (typeof c === 'string' ? c : (c as { category: string }).category))
      .filter(Boolean)
      .sort()

    const items: ProductListItem[] = products.map((p) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,
      price: p.price,
      category: p.category,
      tags: p.tags,
      previewUrl: p.previewUrl,
      screenshot: p.screenshot,
      features: p.features,
      stripeProductId: p.stripeProductId,
      stripePriceId: p.stripePriceId,
      downloads: p.downloads,
      featured: p.featured,
      createdAt: p.createdAt.toISOString(),
      _count: p._count,
    }))

    return NextResponse.json(
      {
        products: items,
        total,
        page,
        pageSize,
        categories: categoryList,
      } satisfies ProductsResponse,
      {
        headers: {
          'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=300',
        },
      },
    )
  } catch (error) {
    console.error('[products API]', error)
    return NextResponse.json({ error: 'Erreur lors de la récupération des produits' }, { status: 500 })
  }
}
