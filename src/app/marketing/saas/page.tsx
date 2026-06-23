'use client'

import Link from 'next/link'
import { Sparkles, Zap, Shield, Globe, Star, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function SaaSLandingPage() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <TrendingUp className="w-4 h-4" />
            {t('saasHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('saasHeroTitle')} <span className="text-indigo-400">{t('saasHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('saasHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              {t('saasHeroCta1')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('saasHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('saasBenefitsTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('saasBenefit1Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('saasBenefit1Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('saasBenefit2Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('saasBenefit2Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('saasBenefit3Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('saasBenefit3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('saasFeaturesTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{t('saasFeatureGroup1Title')}</h3>
              <ul className="space-y-3">
                {[t('saasF1'), t('saasF2'), t('saasF3'), t('saasF4')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-200">
                    <Check className="w-5 h-5 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{t('saasFeatureGroup2Title')}</h3>
              <ul className="space-y-3">
                {[t('saasF5'), t('saasF6'), t('saasF7'), t('saasF8')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-200">
                    <Check className="w-5 h-5 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('saasTestimonialsTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-indigo-200 italic">&quot;{t('saasTest1Quote')}&quot;</p>
              <div className="mt-4 pt-4 border-t border-indigo-800/50">
                <p className="font-semibold text-white">{t('saasTest1Name')}</p>
                <p className="text-sm text-indigo-400">{t('saasTest1Role')}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-indigo-200 italic">&quot;{t('saasTest2Quote')}&quot;</p>
              <div className="mt-4 pt-4 border-t border-indigo-800/50">
                <p className="font-semibold text-white">{t('saasTest2Name')}</p>
                <p className="text-sm text-indigo-400">{t('saasTest2Role')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('saasCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">{t('saasCtaDesc')}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('saasCta1')}
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('saasCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
