import { Metadata } from 'next'
import { products } from '@/lib/products-data'
import { generateProductSchema } from '@/lib/seo'
import { ItemListSchema } from '@/lib/jsonld'
import dynamic from 'next/dynamic'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'Catalogue de Templates Premium',
    template: '%s | NeuraAPI Templates',
  },
  description: 'Explorez notre catalogue de templates Next.js premium avec intégration IA. SaaS, e-commerce, landing pages et plus.',
  openGraph: {
    title: 'Catalogue de Templates Premium — NeuraAPI',
    description: 'Découvrez nos templates Next.js premium avec IA intégrée.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catalogue de Templates Premium',
  },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/fr/products',
  },
}

const ITEMS_PER_PAGE = 12

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; search?: string; sort?: string; minPrice?: string; maxPrice?: string; featured?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params.page || '1', 10))
  const category = params.category || undefined
  const search = params.search || undefined
  const sort = params.sort || 'newest'
  const minPrice = params.minPrice ? parseInt(params.minPrice, 10) : undefined
  const maxPrice = params.maxPrice ? parseInt(params.maxPrice, 10) : undefined
  const featured = params.featured === 'true'

  const result = await products.list({
    page,
    pageSize: ITEMS_PER_PAGE,
    category,
    search,
    sort,
    minPrice,
    maxPrice,
    featured,
  })

  const totalPages = Math.ceil(result.total / ITEMS_PER_PAGE)
  const baseUrl = 'https://ai-empire-steel.vercel.app/fr/products'

  // JSON-LD ItemList
  const itemListSchema: ItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: result.products.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${baseUrl}/${p.slug}`,
      name: p.name,
      description: p.description.slice(0, 200),
      image: p.screenshot || p.previewUrl || undefined,
      offers: p.stripePriceId
        ? {
            '@type': 'Offer',
            price: p.price,
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          }
        : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-b from-indigo-950 via-indigo-900 to-gray-900 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              Catalogue de Templates Premium
            </h1>
            <p className="mt-3 text-lg text-indigo-200 max-w-2xl">
              Découvrez nos templates Next.js production-ready avec intégration IA.
              Chaque template est livré avec Stripe, auth et responsive design.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur-sm px-4 py-4 shadow-sm">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <input
                type="search"
                name="search"
                defaultValue={search || ''}
                placeholder="Rechercher un template..."
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category filter */}
            <select
              name="category"
              defaultValue={category || ''}
              className="rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">Toutes les catégories</option>
              {result.categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* Price range */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                name="minPrice"
                defaultValue={minPrice?.toString() || ''}
                placeholder="Prix min (centimes)"
                className="w-24 rounded-lg border border-gray-300 bg-white py-2 px-2 text-sm input-mode-numeric shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
              <span className="text-gray-400">—</span>
              <input
                type="number"
                name="maxPrice"
                defaultValue={maxPrice?.toString() || ''}
                placeholder="Prix max"
                className="w-24 rounded-lg border border-gray-300 bg-white py-2 px-2 text-sm input-mode-numeric shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Sort */}
            <select
              name="sort"
              defaultValue={sort}
              className="rounded-lg border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="newest">Plus récents</option>
              <option value="popular">Plus populaires</option>
              <option value="price_asc">Prix croissant</option>
              <option value="price_desc">Prix décroissant</option>
            </select>

            {/* Featured toggle */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={featured}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Vedettes uniquement
            </label>

            <button
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              onClick={() => {
                const form = document.querySelector('form') as HTMLFormElement
                if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
              }}
            >
              Filtrer
            </button>

            {/* Reset */}
            {(category || search || minPrice || maxPrice || featured) && (
              <button
                className="text-sm text-indigo-600 hover:text-indigo-800"
                onClick={() => window.location.href = baseUrl}
              >
                Réinitialiser
              </button>
            )}
          </div>
        </section>

        {/* Results summary */}
        <section className="border-b border-gray-200 px-4 py-4">
          <div className="mx-auto max-w-6xl flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {result.total} template{result.total !== 1 ? 's' : ''} found
              {category && <> dans <span className="font-medium text-gray-700">{category}</span></>}
            </p>
            <nav className="flex items-center gap-2 text-sm" aria-label="Pagination">
              {page > 1 && (
                <a
                  href={`?page=${page - 1}${category ? `&category=${category}` : ''}${search ? `&search=${encodeURIComponent(search)}` : ''}${sort ? `&sort=${sort}` : ''}`}
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  ← Précédent
                </a>
              )}
              <span className="px-2 text-gray-500">
                Page <span className="font-medium text-gray-700">{page}</span> sur {totalPages || 1}
              </span>
              {page < totalPages && (
                <a
                  href={`?page=${page + 1}${category ? `&category=${category}` : ''}${search ? `&search=${encodeURIComponent(search)}` : ''}${sort ? `&sort=${sort}` : ''}`}
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  Suivant →
                </a>
              )}
            </nav>
          </div>
        </section>

        {/* Product Grid */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {result.products.length === 0 ? (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
                <p className="text-lg text-gray-500">Aucun template ne correspond à vos critères.</p>
                <button
                  className="mt-4 text-indigo-600 hover:text-indigo-800 underline"
                  onClick={() => window.location.href = baseUrl}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {result.products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      {(product.screenshot || product.previewUrl) && (
                        <img
                          src={product.screenshot || product.previewUrl}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      {product.featured && (
                        <div className="absolute top-2 right-2 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-amber-900 shadow">
                          ⭐
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Category + Tags */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
                          {product.category}
                        </span>
                      </div>

                      {/* Price + CTA */}
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                        <div>
                          <span className="text-lg font-bold text-indigo-600">
                            {(product.price / 100).toFixed(0)}€
                          </span>
                          {product.downloads > 0 && (
                            <span className="ml-2 text-xs text-gray-400">
                              {product.downloads} téléchargements
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-indigo-500 font-medium group-hover:text-indigo-700 transition-colors">
                          Voir →
                        </span>
                      </div>

                      {/* BuyButton inline (mini version) */}
                      <div className="mt-3">
                        <MiniBuyButton
                          templateId={product.id}
                          templateName={product.name}
                          price={product.price}
                          previewUrl={product.previewUrl}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pagination footer */}
        {totalPages > 1 && (
          <section className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl flex items-center justify-center gap-2">
              {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
                const pageNum = i + 1
                return (
                  <a
                    key={pageNum}
                    href={`?page=${pageNum}${category ? `&category=${category}` : ''}${search ? `&search=${encodeURIComponent(search)}` : ''}${sort ? `&sort=${sort}` : ''}`}
                    className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                      pageNum === page
                        ? 'bg-indigo-600 text-white'
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </a>
                )
              })}
            </div>
          </section>
        )}
      </div>

      {/* Mini BuyButton (client component, dynamically imported) */}
      {/* This is a lightweight inline version to avoid full BuyButton overhead on grid */}
    </>
  )
}

// Minimal buy button for grid view (inline, no full BuyButton overhead)
function MiniBuyButton({
  templateId,
  templateName,
  price,
  previewUrl,
}: {
  templateId: string
  templateName: string
  price: number
  previewUrl?: string
}) {
  return (
    <form
      action="/api/checkout"
      method="POST"
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        const email = prompt('Votre email pour le téléchargement:')
        if (!email) return
        fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ templateId, templateTitle: templateName, price, email }),
        }).then((r) => r.json()).then((data) => {
          if (data.url) window.location.href = data.url
        })
      }}
    >
      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
      >
        Acheter — {(price / 100).toFixed(0)}€
      </button>
    </form>
  )
}
