'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Clock, Download, ArrowRight, Sparkles, Check, TrendingUp, Zap, Shield, Gift, Users, CreditCard, ShieldCheck, Timer } from 'lucide-react'
import { useI18n } from '@/i18n'

const LAUNCH_END = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
const MAX_SPOTS = 50

interface TemplateData {
  id: string
  name: string
  slug: string
  price: number
  downloads: number
  category: string
}

function useCountdown(endDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const end = new Date(endDate).getTime()
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, end - now)
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [endDate])

  return timeLeft
}

export default function OffreLancementPage() {
  const { t } = useI18n()
  const [templates, setTemplates] = useState<TemplateData[]>([])
  const [totalSold, setTotalSold] = useState(0)
  const [todaySold, setTodaySold] = useState(0)
  const [loading, setLoading] = useState(true)
  const countdown = useCountdown(LAUNCH_END)
  const spotsLeft = Math.max(0, MAX_SPOTS - totalSold)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/templates')
        if (res.ok) {
          const data = await res.json()
          const list: TemplateData[] = Array.isArray(data) ? data : data.templates ?? []
          setTemplates(list)
          setTotalSold(list.reduce((sum, tpl) => sum + (tpl.downloads || 0), 0))
          const statsRes = await fetch('/api/stats')
          if (statsRes.ok) {
            const stats = await statsRes.json()
            setTodaySold(stats.orderCount || 0)
          }
        }
      } catch {
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const formatDiscountedPrice = (price: number) => Math.round(price * 0.7)
  const formatOriginalPrice = (price: number) => price

  return (
    <div className="min-h-screen bg-[#0f0a2e]">
      <div className="bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 text-center text-sm font-semibold text-white">
        <span className="animate-pulse">🔥</span> {t('launchOfferBanner').replace('{spots}', String(spotsLeft))}
      </div>

      <section className="relative px-4 pt-16 pb-12 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-float-delay-1" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 text-sm text-orange-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>{t('launchOfferBadge')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {t('launchOfferHeroTitle')}{' '}
            <span className="text-gradient">{t('launchOfferHeroHighlight')}</span>
          </h1>

          <p className="mt-6 text-lg text-indigo-200/80 max-w-2xl mx-auto">
            {t('launchOfferDesc')}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              { value: countdown.days, label: t('launchOfferJours') },
              { value: countdown.hours, label: t('launchOfferHeures') },
              { value: countdown.minutes, label: t('launchOfferMinutes') },
              { value: countdown.seconds, label: t('launchOfferSecondes') },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-3">
                <div className="text-center">
                  <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 min-w-[70px]">
                    <span className="text-2xl font-bold text-white tabular-nums">{String(unit.value).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs text-indigo-300/60 mt-1 block">{unit.label}</span>
                </div>
                {i < 3 && <span className="text-xl text-indigo-400/40 font-bold mb-5">:</span>}
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-orange-400 font-medium">
            <Clock className="w-4 h-4 inline mr-1" />
            {t('launchOfferValable')}
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-2xl font-bold text-white">{templates.length}</div>
              <div className="text-xs text-indigo-300/60">{t('launchOfferStatsTemplates')}</div>
            </div>
            <div className="text-center rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-2xl font-bold text-orange-400">{todaySold}</div>
              <div className="text-xs text-indigo-300/60">{t('launchOfferStatsSoldToday')}</div>
            </div>
            <div className="text-center rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-2xl font-bold text-white">{totalSold}</div>
              <div className="text-xs text-indigo-300/60">{t('launchOfferStatsDownloads')}</div>
            </div>
            <div className="text-center rounded-xl bg-white/5 border border-white/10 p-4">
              <div className="text-2xl font-bold text-green-400">-30%</div>
              <div className="text-xs text-indigo-300/60">{t('launchOfferStatsDiscount')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-300/70">
            <span className="flex items-center gap-2"><CreditCard className="w-5 h-5 text-indigo-400" /> {t('launchOfferTrustStripe')}</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-400" /> {t('launchOfferTrustRGPD')}</span>
            <span className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-400" /> {t('launchOfferTrustRefund')}</span>
            <span className="flex items-center gap-2"><Timer className="w-5 h-5 text-indigo-400" /> {t('launchOfferTrustInstant')}</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {t('launchOfferAllTemplates')}
            </h2>
            <p className="mt-3 text-indigo-300/70">
              {t('launchOfferSoldCount').replace('{count}', String(totalSold))}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-2 border-indigo-400/30 border-t-indigo-400 rounded-full mx-auto" />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {templates.filter(tpl => tpl.price > 0).map((tpl) => (
                <Link
                  key={tpl.slug}
                  href={`/templates/${tpl.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-white/20 transition-all relative overflow-hidden"
                >
                  <div className="absolute top-3 right-3 rounded-full bg-orange-500/20 border border-orange-500/30 px-2.5 py-0.5 text-xs font-bold text-orange-400">
                    -30%
                  </div>
                  <span className="text-xs font-medium text-indigo-400">{tpl.category}</span>
                  <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-indigo-300 transition-colors">{tpl.name}</h3>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-green-400">{formatDiscountedPrice(tpl.price / 100).toFixed(0)}€</span>
                    <span className="text-sm text-indigo-400/50 line-through">{(formatOriginalPrice(tpl.price) / 100).toFixed(0)}€</span>
                  </div>

                  {tpl.downloads > 0 && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-indigo-300/60">
                      <Download className="w-3 h-3" />
                      {tpl.downloads} {t('launchOfferDownloads')}{tpl.downloads > 1 ? 's' : ''}
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-1 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    {t('launchOfferViewTemplate')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-indigo-300">
              <Gift className="w-4 h-4 text-yellow-400" />
              {t('launchOfferPromoCode')} <strong className="text-white">LANCEMENT30</strong> {t('launchOfferApplique')}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-10">{t('launchOfferWhyNow')}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: TrendingUp, title: t('launchOfferWhyPrice'), desc: t('launchOfferWhyPriceDesc') },
              { icon: Shield, title: t('launchOfferWhyQuality'), desc: t('launchOfferWhyQualityDesc') },
              { icon: Clock, title: t('launchOfferWhyTime'), desc: t('launchOfferWhyTimeDesc') },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 mb-4">
                  <item.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-indigo-300/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 border border-white/10 p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <Sparkles className="mx-auto h-10 w-10 text-orange-400" />
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                {t('launchOfferFinalCta')}
              </h2>
              <p className="mt-3 text-indigo-200/80 max-w-lg mx-auto">
                {templates.length} {t('launchOfferFinalDesc')}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates"
                  className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  {t('launchOfferViewAll')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/free"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-indigo-200 hover:bg-white/10 transition-all"
                >
                  {t('launchOfferFreeAvailable')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
