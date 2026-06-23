'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Home, ArrowLeft } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function ContactNotFound() {
  const [query, setQuery] = useState('')
  const { t } = useI18n()

  const SUGGESTED_LINKS = [
    { name: t('navTemplates'), href: '/templates', desc: t('notFoundTemplatesDesc2') },
    { name: t('navPricing'), href: '/pricing', desc: t('notFoundPricingDesc') },
    { name: t('navDocs'), href: '/docs', desc: t('notFoundDocsDesc') },
    { name: t('notFoundGuideShort'), href: '/guide', desc: t('notFoundGuideDesc2') },
    { name: t('blogTitle'), href: '/blog', desc: t('notFoundBlogDesc2') },
  ]

  const filteredLinks = query
    ? SUGGESTED_LINKS.filter(l => l.name.toLowerCase().includes(query.toLowerCase()) || l.desc.toLowerCase().includes(query.toLowerCase()))
    : SUGGESTED_LINKS

  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-indigo-600">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white">{t('notFoundContactTitle')}</h1>
        <p className="mt-4 text-indigo-300">{t('notFoundContactDesc')}</p>
        <div className="mt-8 relative max-w-sm mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
          <input type="text" placeholder={t('notFoundSearchPlaceholder')} value={query} onChange={(e) => setQuery(e.target.value)} aria-label={t('notFoundSearchAria')} className="w-full rounded-xl border border-indigo-800 bg-indigo-900/50 pl-11 pr-4 py-3.5 text-sm text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" />
        </div>
        <div className="mt-8 space-y-2 max-w-sm mx-auto">
          {filteredLinks.map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center justify-between rounded-xl border border-indigo-800/50 bg-indigo-900/30 px-5 py-4 hover:border-indigo-600/50 hover:bg-indigo-900/50 transition-all group">
              <div className="text-left">
                <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{link.name}</span>
                <p className="text-xs text-indigo-400 mt-0.5">{link.desc}</p>
              </div>
              <ArrowLeft className="w-4 h-4 text-indigo-500 group-hover:text-indigo-300 rotate-180 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
          {filteredLinks.length === 0 && query && <p className="text-sm text-indigo-400 py-4">{t('notFoundNoResultsFor').replace('{query}', query)}</p>}
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors">
            <Home className="w-4 h-4" />
            {t('footerContact')}
          </Link>
          <button onClick={() => window.history.back()} aria-label={t('notFoundBackAria')} className="flex items-center gap-2 rounded-lg border border-indigo-500 px-6 py-3 font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t('notFoundBack')}
          </button>
        </div>
      </div>
    </div>
  )
}
