'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Sparkles, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { useI18n } from '@/i18n'

const STORAGE_KEY = 'neura_sticky_cta_dismissed'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [exiting, setExiting] = useState(false)
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (localStorage.getItem(STORAGE_KEY)) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const threshold = isMobile ? 300 : 800

    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setVisible(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDismiss = () => {
    setExiting(true)
    setTimeout(() => {
      setDismissed(true)
      setVisible(false)
      localStorage.setItem(STORAGE_KEY, '1')
    }, 300)
  }

  if (!visible || dismissed) return null

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
      exiting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100 animate-slide-up'
    }`}>
      <div className="bg-indigo-950/98 backdrop-blur-xl border-t border-indigo-700/50 shadow-2xl shadow-indigo-500/20">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">
              <Sparkles className="w-3 h-3 text-indigo-400 inline mr-1" aria-hidden="true" />
              {t('sticky100Credits')}
            </p>
            <p className="text-[10px] text-indigo-300/60 truncate">{t('stickyNoCard')}</p>
          </div>
          <Link
            href="/register"
            onClick={() => trackEvent('cta_click', { label: 'sticky_cta_mobile', location: 'bottom_bar' })}
            className="flex-shrink-0 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 flex items-center gap-1.5 hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 active:scale-[0.98]"
          >
            {t('stickyStart')}
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1.5 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-800/50 transition-all duration-200 active:scale-90"
            aria-label={t('stickyClose')}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
