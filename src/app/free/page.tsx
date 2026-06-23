'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Download, Mail, Check, Sparkles, Users, Eye } from 'lucide-react'
import UpsellSection from '@/components/UpsellSection'
import { useI18n } from '@/i18n'

const FREE_TEMPLATE = {
  name: 'NeuraStarter',
  description: 'Template Next.js 14 gratuit pour démarrer votre projet SaaS en quelques minutes.',
  previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
}

interface BestSeller {
  name: string
  slug: string
  price: number
  category: string
  downloads: number
}

export default function FreeTemplatePage() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [downloadCount, setDownloadCount] = useState(0)
  const [bestSellers, setBestSellers] = useState<BestSeller[]>([])

  useEffect(() => {
    fetch('/api/stats/route').then(r => r.json()).then(d => {
      if (d.totalDownloads) setDownloadCount(d.totalDownloads)
    }).catch(() => {})
    fetch('/api/templates').then(r => r.json()).then(d => {
      const list = Array.isArray(d) ? d : d.templates ?? []
      const sorted = list.filter((t: { price: number; downloads: number }) => t.price > 0).sort((a: { downloads: number }, b: { downloads: number }) => b.downloads - a.downloads).slice(0, 3)
      setBestSellers(sorted)
    }).catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/free-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        const data = await res.json()
        setDownloadUrl(data.downloadUrl || '')
        setDownloadReady(true)
        setDownloadCount(prev => prev + 1)
      } else {
        setError(t('freeError'))
      }
    } catch {
      setError(t('freeNetworkError'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f0a2e]">
      {/* Hero */}
      <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float-delay-1" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-1.5 text-sm text-green-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>{t('freeHeroTag')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Template Next.js{' '}
            <span className="text-gradient">{t('freeHeroTitleHighlight')}</span>
          </h1>

          <p className="mt-6 text-lg text-indigo-200/80 max-w-2xl mx-auto">
            {FREE_TEMPLATE.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-indigo-300/70">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> {t('freeNoWatermark')}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> {t('freeSourceCode')}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" /> {t('freeMITLicense')}</span>
            {downloadCount > 0 && (
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-green-400" /> {downloadCount} {t('freeDownloaders')}</span>
            )}
          </div>
        </div>
      </section>

      {/* Template Preview */}
      <section className="px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={FREE_TEMPLATE.previewImage}
                alt="Aperçu du template NeuraStarter"
                width={800}
                height={450}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a2e] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Eye className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/70">{t('freePreviewAlt')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture / Instant Download */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            {!downloadReady ? (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/5 mb-4">
                    <Download className="h-8 w-8 text-green-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{t('freeDownloadTitle')}</h2>
                  <p className="mt-2 text-sm text-indigo-300/70">
                    {t('freeDownloadDesc')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400/50" />
                    <input
                      type="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 py-3.5 text-white placeholder-indigo-300/40 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-400" role="alert">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        {t('freeDownloadBtn')}
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-indigo-400/50 text-center">
                  {t('freeDownloadDisclaimer')}
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border-2 border-green-500/30 mb-4">
                  <Check className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white">{t('freeReadyTitle')}</h2>
                <p className="mt-2 text-sm text-indigo-300/70">
                  {t('freeReadyDesc')}
                </p>

                <a
                  href={downloadUrl}
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
                >
                  <Download className="w-5 h-5" />
                  {t('freeReadyDownload')}
                </a>

                <p className="mt-3 text-xs text-indigo-400/50">
                  {t('freeReadyEmail')} <strong className="text-white">{email}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features included */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-10">{t('freeIncludesTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t('freeFeatures').split(', ').map((f: string) => (
              <div key={f} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Check className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm text-indigo-200">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You might also like — Best sellers */}
      {downloadReady && bestSellers.length > 0 && (
        <UpsellSection variant="full" templates={bestSellers} />
      )}

      {/* Final CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            {t('freeCtaTitle')}
          </h2>
          <p className="mt-3 text-indigo-300/70">
            {t('freeCtaDesc')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t('freeCtaRegister')}
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/10 transition-all"
            >
              {t('freeCtaPricing')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
