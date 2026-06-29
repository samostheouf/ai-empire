'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { X, Gift, ArrowRight, Download, Mail, Check } from 'lucide-react'
import { trackEvent, trackExitIntentPopup } from '@/lib/analytics'
import { useI18n } from '@/i18n'

const STORAGE_KEY = 'neura_exit_popup_shown'
const FREQ_CAP_KEY = 'neura_exit_popup_last_shown'
const AB_TEST_KEY = 'neura_exit_ab_variant'
const POPUP_TIMEOUT = 30000
const SCROLL_DEPTH_THRESHOLD = 0.6
const FREQ_CAP_HOURS = 24

type PopupVariant = 'free_template' | 'discount'

function getVariant(): PopupVariant {
  if (typeof window === 'undefined') return 'free_template'
  const stored = localStorage.getItem(AB_TEST_KEY)
  if (stored === 'free_template' || stored === 'discount') return stored
  const variant: PopupVariant = Math.random() < 0.5 ? 'free_template' : 'discount'
  localStorage.setItem(AB_TEST_KEY, variant)
  return variant
}

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [variant, setVariant] = useState<PopupVariant>('free_template')
  const { t: rawT } = useI18n()
  const t = rawT as (key: string) => string

  useEffect(() => {
    if (typeof window === 'undefined') return

    setVariant(getVariant())

    if (sessionStorage.getItem(STORAGE_KEY)) return

    const lastShown = localStorage.getItem(FREQ_CAP_KEY)
    if (lastShown) {
      const hoursSinceLastShown = (Date.now() - Number(lastShown)) / (1000 * 60 * 60)
      if (hoursSinceLastShown < FREQ_CAP_HOURS) return
    }

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const showPopup = (location: string) => {
      setVisible(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
      localStorage.setItem(FREQ_CAP_KEY, String(Date.now()))
      trackExitIntentPopup(getVariant(), 'show')
      trackEvent('cta_click', { label: 'exit_intent_trigger', location })
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        showPopup('mouse_leave')
      }
    }

    const handleScrollDepth = () => {
      if (dismissed || sessionStorage.getItem(STORAGE_KEY)) return
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const scrollPercent = window.scrollY / scrollHeight
        if (scrollPercent >= SCROLL_DEPTH_THRESHOLD) {
          showPopup('scroll_depth')
        }
      }
    }

    const timeout = setTimeout(() => {
      if (!dismissed && !sessionStorage.getItem(STORAGE_KEY)) {
        showPopup('idle_timeout')
      }
    }, POPUP_TIMEOUT)

    if (!isMobile) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    window.addEventListener('scroll', handleScrollDepth, { passive: true })

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScrollDepth)
      clearTimeout(timeout)
    }
  }, [dismissed])

  const handleDismiss = useCallback(() => {
    setVisible(false)
    setDismissed(true)
  }, [])

  useEffect(() => {
    if (!visible || dismissed) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleDismiss()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible, dismissed, handleDismiss])

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
      trackExitIntentPopup(variant, 'convert')
      trackEvent('cta_click', { label: 'exit_intent_newsletter', location: 'popup', variant })
    } catch (err) {
      console.error('Exit intent newsletter submission failed:', err)
      setSubmitted(true)
    }
  }

  if (!visible || dismissed) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={handleDismiss}
        aria-hidden="true"
      />
      <div role="dialog" aria-modal="true" aria-label={variant === 'discount' ? 'Offre de réduction' : t('exitFreeOfferAria')} className="relative w-full max-w-md rounded-2xl border border-indigo-800 bg-indigo-950 shadow-2xl shadow-indigo-500/10 p-8 animate-scale-in">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-800/50 transition-colors"
          aria-label={t('exitClose')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
          <Gift className="w-7 h-7 text-green-400" />
        </div>

        {variant === 'discount' ? (
          <>
            <h2 className="text-2xl font-bold text-white">-20% sur votre premier mois</h2>
            <p className="mt-3 text-indigo-300 text-sm leading-relaxed">
              Profitez de -20% sur le plan Pro avec le code <span className="font-bold text-white">WELCOME20</span>. Offre valable 48h.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white">{t('exitTitle')}</h2>
            <p className="mt-3 text-indigo-300 text-sm leading-relaxed">
              {t('exitDesc')}
            </p>
          </>
        )}

        <div className="mt-6 space-y-3">
          {variant === 'free_template' && (
            <Link
              href="/free"
              onClick={() => trackEvent('cta_click', { label: 'exit_intent_free_template', location: 'popup', variant })}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/20"
            >
              <Download className="w-4 h-4" />
              {t('exitDownloadFree')}
            </Link>
          )}

          {variant === 'discount' && (
            <Link
              href="/pricing"
              onClick={() => trackEvent('cta_click', { label: 'exit_intent_discount_cta', location: 'popup', variant })}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <ArrowRight className="w-4 h-4" />
              Voir les tarifs
            </Link>
          )}

          {!submitted ? (
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-2">
                <label htmlFor="exit-intent-email" className="sr-only">
                  {t('exitEmailAria') || 'Adresse email'}
                </label>
                <input
                  id="exit-intent-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="flex-1 rounded-xl bg-indigo-900/50 border border-indigo-700 px-4 py-3 text-sm text-white placeholder:text-indigo-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  aria-label="Envoyer"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <p className="text-xs text-indigo-500 text-center">
                {t('exitNewsletterText')}
              </p>
            </form>
          ) : (
            <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center" aria-live="polite">
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm font-medium">
                <Check className="w-4 h-4" />
                {t('exitThankYou')}
              </div>
            </div>
          )}

          <button
            onClick={handleDismiss}
            aria-label={t('exitClose')}
            className="w-full rounded-xl border border-indigo-800 px-6 py-3 text-sm text-indigo-300 hover:bg-indigo-900/50 transition-all"
          >
            {t('exitNoThanks')}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-indigo-500">
          {t('exitNoCommitment')}
        </p>
      </div>
    </div>
  )
}
