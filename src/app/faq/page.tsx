'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Search, ArrowRight, Sparkles } from 'lucide-react'
import { useI18n } from '@/i18n'
import Breadcrumb from '@/components/Breadcrumb'

const faqs = [
  {
    categoryKey: 'faqCatProduct',
    items: [
      { qKey: 'faqQ1Question', aKey: 'faqQ1Answer' },
      { qKey: 'faqQ2Question', aKey: 'faqQ2Answer' },
      { qKey: 'faqQ3Question', aKey: 'faqQ3Answer' },
      { qKey: 'faqQ4Question', aKey: 'faqQ4Answer' },
    ],
  },
  {
    categoryKey: 'faqCatTarification',
    items: [
      { qKey: 'faqQ5Question', aKey: 'faqQ5Answer' },
      { qKey: 'faqQ6Question', aKey: 'faqQ6Answer' },
      { qKey: 'faqQ7Question', aKey: 'faqQ7Answer' },
      { qKey: 'faqQ8Question', aKey: 'faqQ8Answer' },
    ],
  },
  {
    categoryKey: 'faqCatTechnique',
    items: [
      { qKey: 'faqQ9Question', aKey: 'faqQ9Answer' },
      { qKey: 'faqQ10Question', aKey: 'faqQ10Answer' },
      { qKey: 'faqQ11Question', aKey: 'faqQ11Answer' },
      { qKey: 'faqQ12Question', aKey: 'faqQ12Answer' },
    ],
  },
  {
    categoryKey: 'faqCatSecuriteLegal',
    items: [
      { qKey: 'faqQ13Question', aKey: 'faqQ13Answer' },
      { qKey: 'faqQ14Question', aKey: 'faqQ14Answer' },
      { qKey: 'faqQ15Question', aKey: 'faqQ15Answer' },
    ],
  },
]

export default function FAQPage() {
  const { t: rawT, locale } = useI18n()
  const t = rawT as (key: string) => string
  const [openIdx, setOpenIdx] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const faqSchema = faqs.flatMap(cat => cat.items.map(item => ({
    '@type': 'Question',
    name: t(item.qKey),
    acceptedAnswer: { '@type': 'Answer', text: t(item.aKey) },
  })))

  const filtered = faqs.map(cat => ({
    ...cat,
    category: t(cat.categoryKey),
    items: cat.items.filter(
      item =>
        t(item.qKey).toLowerCase().includes(search.toLowerCase()) ||
        t(item.aKey).toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0)

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema }),
        }}
      />
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Breadcrumb items={[{ name: 'FAQ', href: '/faq' }]} />
          <h1 className="text-4xl font-bold text-white sm:text-5xl mt-8">{t('faqTitle')}</h1>
          <p className="mt-4 text-lg text-indigo-300">
            {t('faqSubtitle')}
          </p>
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={t('faqSearchPlaceholder')}
              aria-label={t('faqSearchPlaceholder')}
              className="w-full rounded-xl border border-indigo-800/50 bg-indigo-900/30 pl-11 pr-4 py-3 text-white placeholder:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {filtered.map(cat => (
            <div key={cat.categoryKey}>
              <h2 className="text-xl font-bold text-white mb-6">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item, i) => {
                  const key = `${cat.categoryKey}-${i}`
                  const isOpen = openIdx === key
                  return (
                    <div key={key} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-medium text-white pr-4">{t(item.qKey)}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-indigo-300 text-sm leading-relaxed">
                          {t(item.aKey)}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl relative overflow-hidden p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative">
            <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
            <h2 className="mt-6 text-3xl font-bold text-white">
              {t('faqCtaTitle') || 'Prêt à commencer ?'}
            </h2>
            <p className="mt-4 text-indigo-200/80 max-w-lg mx-auto">
              {t('faqCtaDesc') || 'Rejoignez des milliers de développeurs qui utilisent NeuraAPI pour intégrer l\'IA dans leurs projets.'}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/25 w-full sm:w-auto justify-center"
              >
                <Sparkles className="w-5 h-5" />
                {t('faqCtaButton') || 'Commencer gratuitement'}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-white/10 transition-all w-full sm:w-auto justify-center flex items-center gap-2"
              >
                {t('faqCtaPricing') || 'Voir les tarifs'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
