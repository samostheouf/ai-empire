'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Home, ArrowLeft, Compass } from 'lucide-react'
import { useI18n } from '@/i18n'

import { TranslationKeys } from '@/i18n/config'

const SUGGESTED_LINKS_KEYS: { nameKey: keyof TranslationKeys; href: string; descKey: keyof TranslationKeys }[] = [
  { nameKey: 'notFoundTemplatesDesc', href: '/templates', descKey: 'notFoundTemplatesDesc' },
  { nameKey: 'navPricing', href: '/pricing', descKey: 'notFoundPricingDesc' },
  { nameKey: 'navDocs', href: '/docs', descKey: 'notFoundDocsDesc' },
  { nameKey: 'navGuide', href: '/guide', descKey: 'notFoundGuideDesc' },
  { nameKey: 'navBlog', href: '/blog', descKey: 'notFoundBlogDesc' },
]

export default function NotFound() {
  const [query, setQuery] = useState('')
  const { t } = useI18n()

  const links = SUGGESTED_LINKS_KEYS.map(l => ({
    name: t(l.nameKey as Parameters<typeof t>[0]),
    href: l.href,
    desc: t(l.descKey as Parameters<typeof t>[0]),
  }))

  const filteredLinks = query
    ? links.filter(link =>
        link.name.toLowerCase().includes(query.toLowerCase()) ||
        link.desc.toLowerCase().includes(query.toLowerCase())
      )
    : links

  return (
    <div className="bg-[#0f0a2e] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg animate-fade-in-up">
        <div className="relative mx-auto w-28 h-28 mb-6">
          <div className="absolute inset-0 rounded-full bg-indigo-500/10 animate-morph" />
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center">
            <Compass className="h-14 w-14 text-indigo-400 animate-spin-slow" />
          </div>
        </div>
        <p className="text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-3">{t('notFoundTitle')}</h1>
        <p className="text-indigo-300/80 mb-8">
          {t('notFoundDesc')}
        </p>

        <div className="relative max-w-sm mx-auto mb-8">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" aria-hidden="true" />
          <input
            type="text"
            placeholder={t('notFoundSearch')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t('notFoundSearch')}
            className="w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 py-3.5 text-sm text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all input-focus"
          />
        </div>

        <div className="space-y-2 max-w-sm mx-auto mb-8">
          {filteredLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-200 group animate-fade-in-up stagger-${i + 1}`}
            >
              <div className="text-left">
                <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {link.name}
                </span>
                <p className="text-xs text-indigo-400/60 mt-0.5">{link.desc}</p>
              </div>
              <ArrowLeft className="w-4 h-4 text-indigo-500/50 group-hover:text-indigo-300 rotate-180 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
            </Link>
          ))}
          {filteredLinks.length === 0 && query && (
            <div className="py-8 animate-fade-in">
              <p className="text-sm text-indigo-400/60">{t('notFoundNoResults')} &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            {t('notFoundHome')}
          </Link>
          <button
            onClick={() => window.history.back()}
            aria-label={t('notFoundBack')}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/10 transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('notFoundBack')}
          </button>
        </div>
      </div>
    </div>
  )
}
