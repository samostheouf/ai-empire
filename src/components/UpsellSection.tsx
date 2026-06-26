import Link from 'next/link'
import { Star, ArrowRight, Download } from 'lucide-react'

interface UpsellTemplate {
  name: string
  slug: string
  price: number
  category?: string
  downloads?: number
}

interface UpsellSectionProps {
  templates: UpsellTemplate[]
  promoCode?: string
  variant?: 'compact' | 'full'
}

export default function UpsellSection({ templates, promoCode, variant = 'compact' }: UpsellSectionProps) {
  if (templates.length === 0) return null

  if (variant === 'full') {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4">
              <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              Les plus populaires
            </span>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Vous pourriez aussi aimer
            </h2>
            <p className="mt-3 text-indigo-300/70">
              Découvrez nos templates les mieux notés par la communauté
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {templates.map((tpl) => (
              <Link
                key={tpl.slug}
                href={`/templates/${tpl.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                {tpl.category && (
                  <span className="text-xs font-medium text-indigo-400">{tpl.category}</span>
                )}
                <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-indigo-300 transition-colors">{tpl.name}</h3>
                {tpl.downloads !== undefined && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-indigo-300/60">
                    <Download className="w-3 h-3" aria-hidden="true" />
                    {tpl.downloads} téléchargements
                  </div>
                )}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-gradient">{tpl.price / 100}€</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  Voir le template <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div>
      <p className="text-sm font-semibold text-white mb-3 text-center">Vous pourriez aussi aimer</p>
      <div className="grid grid-cols-3 gap-3">
        {templates.map((t) => (
          <Link
            key={t.slug}
            href={`/templates/${t.slug}`}
            className="rounded-xl border border-indigo-800 bg-indigo-900/30 p-3 text-center hover:border-indigo-600 hover:bg-indigo-900/50 transition-all group"
          >
            <p className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors truncate">{t.name}</p>
            <p className="text-xs text-indigo-400 mt-1">{(t.price / 100).toFixed(0)}€</p>
          </Link>
        ))}
      </div>
      {promoCode && (
        <p className="text-xs text-indigo-400/60 text-center mt-3">-20% avec le code {promoCode}</p>
      )}
    </div>
  )
}
