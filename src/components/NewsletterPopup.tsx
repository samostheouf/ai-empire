'use client'

import { useState, useEffect } from 'react'
import { X, BookOpen, Check, Loader2 } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { useI18n } from '@/i18n'

const STORAGE_KEY = 'neura_newsletter_shown'
const SHOW_DELAY = 60000

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timeout = setTimeout(() => {
      setVisible(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
    }, SHOW_DELAY)

    return () => clearTimeout(timeout)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSuccess(true)
      trackEvent('cta_click', { label: 'newsletter_signup', location: 'popup' })
    } catch {
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!visible) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setVisible(false)}
        aria-hidden="true"
      />
      <div role="dialog" aria-modal="true" aria-label="Newsletter" className="relative w-full max-w-md rounded-2xl border border-indigo-800 bg-indigo-950 shadow-2xl shadow-indigo-500/10 p-8 animate-scale-in">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 p-1 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-800/50 transition-colors"
          aria-label={t('newsletterClose')}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600/10 border border-indigo-500/20 mb-5">
          <BookOpen className="w-7 h-7 text-indigo-400" />
        </div>

        {success ? (
          <div className="text-center" aria-live="polite">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-white">{t('newsletterGuideSent')}</h2>
            <p className="mt-2 text-sm text-indigo-300">
              {t('newsletterCheckMail')}
            </p>
            <a
              href="/guide"
              className="mt-4 inline-block text-sm text-indigo-400 hover:text-white transition-colors underline"
            >
              {t('newsletterStartGuide')}
            </a>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-white">{t('newsletterTitle')}</h2>
            <p className="mt-2 text-sm text-indigo-300 leading-relaxed">
              {t('newsletterDesc')}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                type="email"
                required
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                aria-label={t('newsletterEmailAria')}
                className="w-full rounded-lg border border-indigo-800 bg-indigo-900/50 px-4 py-3 text-sm text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading || !email}
                aria-label="S'inscrire à la newsletter"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    t('newsletterGetGuide')
                  )}
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-indigo-500">
              {t('newsletterNoSpam')}
            </p>
          </>
        )}
      </div>
    </div>
  )
}
