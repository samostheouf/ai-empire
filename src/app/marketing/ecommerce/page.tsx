'use client'

import Link from 'next/link'
import { ShoppingCart, TrendingUp, Shield, Globe, CreditCard } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function EcommerceLandingPage() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <ShoppingCart className="w-4 h-4" />
            {t('ecommerceHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('ecommerceHeroTitle')} <span className="text-indigo-400">{t('ecommerceHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('ecommerceHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              {t('ecommerceHeroCta1')}
            </Link>
            <Link href="/docs" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('ecommerceHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: t('ecommerceStatConv'), label: t('ecommerceStatConvLabel') },
              { value: t('ecommerceStatSupport'), label: t('ecommerceStatSupportLabel') },
              { value: t('ecommerceStatBasket'), label: t('ecommerceStatBasketLabel') },
              { value: t('ecommerceStatUptime'), label: t('ecommerceStatUptimeLabel') },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-indigo-400">{stat.value}</div>
                <div className="mt-2 text-indigo-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('ecommerceFeaturesTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <TrendingUp className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('ecommerceFeature1Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('ecommerceFeature1Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('ecommerceFeature2Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('ecommerceFeature2Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('ecommerceFeature3Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('ecommerceFeature3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('ecommerceUseCasesTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{t('ecommerceUseCase1Title')}</h3>
              <ul className="space-y-3">
                {[t('ecommerceUseCase1F1'), t('ecommerceUseCase1F2'), t('ecommerceUseCase1F3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-200">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">{t('ecommerceUseCase2Title')}</h3>
              <ul className="space-y-3">
                {[t('ecommerceUseCase2F1'), t('ecommerceUseCase2F2'), t('ecommerceUseCase2F3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-indigo-200">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <CreditCard className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('ecommerceCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">{t('ecommerceCtaDesc')}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('ecommerceCta1')}
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('ecommerceCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
