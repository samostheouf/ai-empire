'use client'

import { useState } from 'react'
import { Mail, Check, Loader2 } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t: rawT } = useI18n()
  const t = rawT as (key: string) => string

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Newsletter subscription failed:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-800/50 bg-green-900/20 p-8 text-center">
        <Check className="mx-auto h-8 w-8 text-green-400" />
        <h3 className="mt-3 text-lg font-semibold text-white">{t('footerNewsletterSuccess')}</h3>
        <p className="mt-2 text-indigo-300">{t('newsletterDesc')}</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
          <Mail className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{t('footerNewsletter')}</h3>
          <p className="text-sm text-indigo-300">{t('newsletterDesc')}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-3 mt-4">
          <label htmlFor="newsletter-form-email" className="sr-only">{t('newsletterEmailAria')}</label>
          <input
            id="newsletter-form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('footerNewsletterPlaceholder')}
            required
            maxLength={254}
            aria-label={t('newsletterEmailAria')}
            className="flex-1 rounded-lg border border-indigo-700 bg-indigo-950 px-4 py-3 text-white placeholder:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        <button
          type="submit"
          disabled={status === 'loading'}
          aria-label={t('newsletterSubscribe')}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              {t('newsletterSubscribe')}
              <Mail className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      <p className="mt-3 text-xs text-indigo-400">{t('newsletterNoSpam')}</p>
    </div>
  )
}
