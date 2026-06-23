'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Download, Loader2, Share2, Gift, Sparkles, ExternalLink, Check } from 'lucide-react'
import { trackCheckoutComplete } from '@/lib/analytics'
import UpsellSection from '@/components/UpsellSection'
import { useI18n } from '@/i18n'

interface TemplateData {
  id: string
  name: string
  slug: string
  fileUrl: string
  price: number
}

function SuccessContent() {
  const { t } = useI18n()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const templateId = searchParams.get('template_id')
  const [template, setTemplate] = useState<TemplateData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [referralLink, setReferralLink] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (sessionId) {
      trackCheckoutComplete(sessionId, 0)
    }
  }, [sessionId])

  useEffect(() => {
    async function fetchTemplate() {
      try {
        const res = await fetch('/api/templates')
        if (!res.ok) throw new Error(t('checkoutErrorLoading'))
        const data = await res.json()
        const templates: TemplateData[] = Array.isArray(data) ? data : data.templates ?? []

        if (templateId) {
          const found = templates.find((tpl) => tpl.id === templateId)
          if (found) {
            setTemplate(found)
            setLoading(false)
            return
          }
        }

        if (templates.length > 0) {
          setTemplate(templates[0])
        }
      } catch {
        setError(t('checkoutErrorDetails'))
      } finally {
        setLoading(false)
      }
    }

    fetchTemplate()
  }, [templateId])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const id = crypto.randomUUID?.().slice(0, 8) || Date.now().toString(36)
      setReferralLink(`${window.location.origin}/register?ref=${id}`)
    }
  }, [])

  const handleCopyReferral = async () => {
    await navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-950 px-4 py-12">
      <div className="max-w-lg w-full space-y-8">


        {[
          { color: '#6366f1', left: '10%', delay: '0s', even: false },
          { color: '#a855f7', left: '25%', delay: '0.3s', even: true },
          { color: '#ec4899', left: '40%', delay: '0.1s', even: false },
          { color: '#22c55e', left: '55%', delay: '0.5s', even: true },
          { color: '#f59e0b', left: '70%', delay: '0.2s', even: false },
          { color: '#3b82f6', left: '85%', delay: '0.4s', even: true },
          { color: '#ef4444', left: '15%', delay: '0.6s', even: false },
          { color: '#8b5cf6', left: '60%', delay: '0.15s', even: true },
          { color: '#06b6d4', left: '80%', delay: '0.35s', even: false },
          { color: '#f97316', left: '35%', delay: '0.45s', even: true },
        ].map((c, i) => (
          <div
            key={i}
            className={`fixed top-[-10px] w-2.5 h-2.5 rounded-sm z-[100] ${c.even ? 'animate-confetti-fall-sway' : 'animate-confetti-fall'}`}
            style={{
              backgroundColor: c.color,
              left: c.left,
              animationDelay: c.delay,
            }}
          />
        ))}

        <div className="text-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 animate-success-pulse-glow">
            <CheckCircle className="h-10 w-10 text-green-400" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">{t('checkoutThankYou')}</h1>
          <p className="mt-3 text-indigo-200">
            {t('checkoutOrderConfirmed')}
          </p>
        </div>

        {loading && (
          <div className="flex justify-center animate-fade-in-up" role="status">
            <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
            <span className="sr-only">{t('checkoutLoadingDetails')}</span>
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-red-400 animate-fade-in-up" role="alert">{error}</p>
        )}

        {!loading && template && (
          <div className="space-y-6">
            <div className="animate-fade-in-up rounded-2xl border border-indigo-800 bg-indigo-900/50 p-6 opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
              <p className="text-sm font-medium text-indigo-300 mb-3">{t('checkoutOrderSummary')}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-white">{template.name}</p>
                  <p className="text-sm text-indigo-400">{t('checkoutNextJsTemplate')}</p>
                </div>
                <p className="text-xl font-bold text-gradient">{template.price ? `${(template.price / 100).toFixed(0)}€` : ''}</p>
              </div>
            </div>

            <div className="animate-fade-in-up rounded-2xl border border-green-500/30 bg-green-500/10 p-6 space-y-4 opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-green-400" />
                <p className="text-sm font-medium text-green-400">{t('checkoutTemplateReady')}</p>
              </div>
              <p className="text-xl font-bold text-white">{template.name}</p>
              {template.fileUrl && template.fileUrl !== `${typeof window !== 'undefined' ? window.location.origin : ''}/api/free-template/download` ? (
                <a
                  href={template.fileUrl}
                  download
                  className="flex items-center justify-center gap-3 w-full rounded-xl bg-green-600 px-6 py-4 text-base font-semibold text-white hover:bg-green-500 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30 animate-success-pulse-glow hover:scale-[1.02]"
                  aria-label={t('checkoutDownloadAria').replace('{name}', template.name)}
                >
                  <Download className="h-5 w-5" aria-hidden="true" />
                  {t('checkoutDownloadTemplate')}
                </a>
              ) : (
                <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center">
                  <p className="text-sm text-green-400 font-medium">
                    {t('checkoutEmailSent')}
                  </p>
                </div>
              )}
              <p className="text-xs text-indigo-400/60 text-center">
                {t('checkoutConfirmSent')}
              </p>
            </div>

            <div className="animate-fade-in-up rounded-2xl border border-indigo-800 bg-indigo-900/50 p-6 opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]">
              <p className="text-sm font-medium text-indigo-300 mb-4 flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                {t('checkoutShareFriends')}
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(t('checkoutShareTwitter').replace('{name}', template.name))}%0A&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-800/50 px-4 py-3 text-sm font-medium text-indigo-200 hover:bg-indigo-700/50 hover:text-white transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : '')}&title=${encodeURIComponent(t('checkoutShareLinkedin').replace('{name}', template.name))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-800/50 px-4 py-3 text-sm font-medium text-indigo-200 hover:bg-indigo-700/50 hover:text-white transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(t('checkoutShareWhatsapp').replace('{name}', template.name).replace('{url}', typeof window !== 'undefined' ? window.location.origin : ''))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-indigo-800/50 px-4 py-3 text-sm font-medium text-indigo-200 hover:bg-indigo-700/50 hover:text-white transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="animate-fade-in-up rounded-2xl border border-indigo-800 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 p-6 opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
              <div className="flex items-center gap-3 mb-3">
                <Gift className="h-5 w-5 text-yellow-400" />
                <p className="text-sm font-semibold text-white">{t('checkoutReferTitle')}</p>
              </div>
              <p className="text-sm text-indigo-300 mb-4">
                {t('checkoutReferDesc')}
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="flex-1 rounded-lg bg-indigo-950/50 border border-indigo-700 px-3 py-2 text-sm text-indigo-200 font-mono"
                />
                <button
                  onClick={handleCopyReferral}
                  className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-all hover:scale-105"
                >
                  {copied ? t('checkoutCopied') : t('checkoutCopy')}
                </button>
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-indigo-400/70">
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> {t('checkoutCreditsPerRef')}</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> {t('checkoutIllimited')}</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" /> {t('checkoutInstantCredits')}</span>
              </div>
            </div>

            <div className="animate-fade-in-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              <UpsellSection
                variant="compact"
                promoCode="BIENVENUE20"
                templates={[
                  { name: 'NeuraSaaS', slug: 'neurasaa-kit-complet', price: 9700 },
                  { name: 'NeuraStore', slug: 'neuracommerce-ecommerce-ia', price: 12900 },
                  { name: 'NeuraBlog', slug: 'neurablog-moteur-blog-ia', price: 6900 },
                ]}
              />
            </div>
          </div>
        )}

        <div className="text-center animate-fade-in-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-800 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all hover:scale-105"
          >
            <ExternalLink className="w-4 h-4" />
            {t('checkoutBackHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutSuccess() {
  const { t } = useI18n()
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-indigo-950">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-400" />
          <span className="sr-only">{t('checkoutLoading')}</span>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
