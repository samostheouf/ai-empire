/**
 * Products data layer — bridge entre le cache statique et Prisma.
 */

import { prisma } from '@/lib/db'

export interface ProductData {
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
  orderCount?: number
  featured: boolean
  createdAt: Date
  updatedAt: Date
  _count?: { orders: number }
}

export async function getAll(): Promise<ProductData[]> {
  try {
    return await prisma.template.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { orders: true } } },
    })
  } catch {
    return []
  }
}

export async function getById(slug: string): Promise<ProductData | null> {
  try {
    return await prisma.template.findUnique({
      where: { slug },
      include: { _count: { select: { orders: true } } },
    })
  } catch {
    return null
  }
}

export async function getRelated(slug: string, limit = 4): Promise<ProductData[]> {
  try {
    const current = await prisma.template.findUnique({
      where: { slug },
      select: { category: true },
    })

    const where: Record<string, unknown> = { slug: { not: slug } }
    if (current?.category) {
      where.category = current.category
    }

    return await prisma.template.findMany({
      where,
      orderBy: { downloads: 'desc' },
      take: limit,
      include: { _count: { select: { orders: true } } },
    })
  } catch {
    return []
  }
}

export interface ListOptions {
  page: number
  pageSize: number
  category?: string
  search?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
  featured?: boolean
}

export interface ListResult {
  products: ProductData[]
  total: number
  categories: string[]
}

export async function list(opts: ListOptions): Promise<ListResult> {
  const { page, pageSize, category, search, sort, minPrice, maxPrice, featured } = opts

  const where: Record<string, unknown> = {}

  if (category) where.category = category
  if (featured) where.featured = true
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

  let orderBy: Record<string, string> = { createdAt: 'desc' }
  if (sort === 'price_asc') orderBy = { price: 'asc' }
  else if (sort === 'price_desc') orderBy = { price: 'desc' }
  else if (sort === 'popular') orderBy = { downloads: 'desc' }

  try {
    const [products, total, categories] = await Promise.all([
      prisma.template.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: { _count: { select: { orders: true } } },
      }),
      prisma.template.count({ where }),
      prisma.template.findMany({
        where: { category: { not: '' } },
        select: { category: true },
        distinct: ['category'],
      }),
    ])

    return {
      products,
      total,
      categories: categories
        .map((c) => (typeof c === 'string' ? c : (c as { category: string }).category))
        .filter(Boolean)
        .sort(),
    }
  } catch {
    return { products: [], total: 0, categories: [] }
  }
}

export const products = {
  getAll,
  getById,
  getRelated,
  list,
} as const
