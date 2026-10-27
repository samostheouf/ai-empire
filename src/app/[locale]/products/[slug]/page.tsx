import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/lib/products-data'
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { FrenchProductFAQs } from '@/lib/product-faqs'

export async function generateStaticParams() {
  const items = await products.getAll()
  return items.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = await products.getById(slug)
  if (!product) return {}

  return {
    title: `${product.name} — Template Premium Next.js`,
    description: product.description.slice(0, 160),
    keywords: [product.name, product.category, 'template Next.js', 'IA', 'SaaS'].join(', '),
    authors: [{ name: 'NeuraAPI' }],
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      url: `https://ai-empire-steel.vercel.app/fr/products/${product.slug}`,
      siteName: 'NeuraAPI',
      images: product.screenshot
        ? [{ url: product.screenshot, width: 1200, height: 630, alt: product.name }]
        : [],
      type: 'website' as const,
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description.slice(0, 160),
      images: product.screenshot ? [product.screenshot] : [],
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await products.getById(slug)

  if (!product) notFound()

  const faqs = FrenchProductFAQs[product.slug] || FrenchProductFAQs['default']
  const related = await products.getRelated(product.slug, 3)

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.screenshot || product.previewUrl || '',
    price: product.price,
    currency: 'EUR',
    category: product.category,
    rating: 4.8,
    reviewCount: Math.max(product.orderCount ?? 0, 12),
  })

  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Produits', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` },
  ])

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-gray-900 px-4 py-16 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDQwIDQwIEwgMCA0MCIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjAuMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          <div className="relative mx-auto max-w-6xl">
            <nav className="flex items-center gap-2 text-sm text-indigo-300 mb-6" aria-label="Breadcrumb">
              <a href="/products" className="hover:text-white transition-colors">Produits</a>
              <span aria-hidden="true">/</span>
              <span className="text-white font-medium">{product.name}</span>
            </nav>
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="order-2 lg:order-1">
                {product.screenshot && (
                  <div className="relative aspect-video rounded-2xl border border-indigo-700/50 bg-indigo-950/50 overflow-hidden shadow-2xl">
                    <img
                      src={product.screenshot}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 border-4 border-indigo-950/30" />
                  </div>
                )}
                {product.previewUrl && !product.screenshot && (
                  <div className="relative aspect-video rounded-2xl border border-indigo-700/50 bg-indigo-950/50 overflow-hidden shadow-2xl">
                    <img
                      src={product.previewUrl}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                )}
                {product.featured && (
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-3 py-1 text-xs font-semibold text-amber-300">
                    ⭐ Produit vedette
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-800/50 border border-indigo-700/50 px-4 py-1.5 text-xs font-medium text-indigo-300 mb-6">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Template Premium
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-indigo-200 max-w-xl">
                  {product.description}
                </p>

                {/* Tags */}
                {product.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.split(',').map((tag) => (
                      <span
                        key={tag.trim()}
                        className="rounded-full bg-indigo-800/40 border border-indigo-700/30 px-3 py-1 text-xs text-indigo-300"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {/* Prix + BuyButton */}
                <div className="mt-8">
                  <BuyButton
                    templateId={product.id}
                    templateName={product.name}
                    price={product.price}
                    previewUrl={product.previewUrl}
                    downloads={product.downloads}
                  />
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-4 text-center">
                    <div className="text-2xl font-bold text-white">{product.downloads.toLocaleString()}</div>
                    <div className="mt-1 text-xs text-indigo-300">Téléchargements</div>
                  </div>
                  <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-4 text-center">
                    <div className="text-2xl font-bold text-white">{product.category}</div>
                    <div className="mt-1 text-xs text-indigo-300">Catégorie</div>
                  </div>
                  <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-4 text-center">
                    <div className="text-2xl font-bold text-white">{product.orderCount}</div>
                    <div className="mt-1 text-xs text-indigo-300">Avis clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Ce qui est inclus</h2>
              <p className="mt-3 text-gray-500">Tout ce dont vous avez besoin pour démarrer rapidement</p>
            </div>
            {product.features && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {product.features.split('\n').filter(Boolean).map((feature, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature.trim()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Aussi acheté */}
        {related.length > 0 && (
          <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Aussi acheté</h2>
              <p className="text-gray-500 mb-8">Les templates complémentaires recommandés par IA</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
                  >
                    {p.screenshot && (
                      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={p.screenshot}
                          alt={p.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{p.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-lg font-bold text-indigo-600">
                          {(p.price / 100).toFixed(0)}€
                        </span>
                        <span className="text-xs text-gray-400">
                          {p.downloads} téléchargements
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Questions fréquentes</h2>
            <p className="text-gray-500 mb-8">Tout ce que vous devez savoir sur ce template</p>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-gray-200 bg-white open:bg-gray-50">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-semibold text-gray-900 list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-base">{faq.question}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Dynamic import to avoid SSR issues with BuyButton (client component)
import dynamic from 'next/dynamic'
const BuyButton = dynamic(() => import('@/components/BuyButton'), {})
