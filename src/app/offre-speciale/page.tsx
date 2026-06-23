'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Sparkles, Shield, Check, ChevronDown, ChevronUp,
  ArrowRight, BadgeCheck, Zap, Gift, CreditCard, Clock,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import { useI18n } from '@/i18n'

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-indigo-800/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-indigo-900/30 transition-colors"
      >
        <span className="font-medium text-white pr-4">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-indigo-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-indigo-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 text-indigo-300 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function OffreSpeciale() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: t('specialeBreadcrumb'), href: '/offre-speciale' }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/20 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-500/30 mb-8">
            <Gift className="w-4 h-4" />
            {t('specialePromoBadge')}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {t('specialeHeroTitle')}
            <span className="block text-indigo-400 mt-2">{t('specialeHeroHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('specialeHeroDesc')}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {t('specialeHeroCta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-indigo-400">
              <span>{t('specialePromoLabel')}</span>
              <code className="rounded bg-indigo-900/50 px-3 py-1 font-mono font-bold text-indigo-300 border border-indigo-700/50">
                LANCEMENT30
              </code>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            {t('specialeWhatYouGet')}
          </h2>
          <p className="text-center text-indigo-300 mt-2">
            {t('specialeWhatYouGetDesc')}
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: t('specialeEpIaTitle'), desc: t('specialeEpIaDesc'), highlight: true },
              { icon: Gift, title: t('specialeFreeCreditsTitle'), desc: t('specialeFreeCreditsDesc'), highlight: true },
              { icon: Shield, title: t('specialeSdkTitle'), desc: t('specialeSdkDesc'), highlight: false },
              { icon: BadgeCheck, title: t('specialeTemplatesTitle'), desc: t('specialeTemplatesDesc'), highlight: false },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl border p-8 transition-all ${item.highlight ? 'border-indigo-500 bg-indigo-900/50' : 'border-indigo-800/50 bg-indigo-900/30'}`}>
                <item.icon className="h-10 w-10 text-indigo-400" />
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-indigo-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            {t('specialePricingTitle')}
          </h2>
          <p className="text-center text-indigo-300 mt-2">
            {t('specialePricingDesc')}
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '0',
                credits: '100',
                features: [t('specialeStarterF1'), t('specialeStarterF2'), t('specialeStarterF3'), t('specialeStarterF4')],
                popular: false,
              },
              {
                name: 'Pro',
                price: '19',
                originalPrice: '29',
                credits: '10,000',
                features: [t('specialeProF1'), t('specialeProF2'), t('specialeProF3'), t('specialeProF4'), t('specialeProF5')],
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '69',
                originalPrice: '99',
                credits: 'Illimité',
                features: [t('specialeEnterpriseF1'), t('specialeEnterpriseF2'), t('specialeEnterpriseF3'), t('specialeEnterpriseF4'), t('specialeEnterpriseF5'), t('specialeEnterpriseF6')],
                popular: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl border p-8 ${plan.popular ? 'border-indigo-500 bg-indigo-900/50' : 'border-indigo-800/50 bg-indigo-900/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    {t('specialePopulaire')}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4">
                  {plan.originalPrice ? (
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-white">€{plan.price}</span>
                      <span className="text-lg text-indigo-400 line-through">€{plan.originalPrice}</span>
                      <span className="text-sm text-indigo-300">{t('specialePerMonth')}</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-bold text-white">{t('specialeFree')}</span>
                  )}
                </div>
                {plan.originalPrice && (
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-green-600/20 px-3 py-1 text-xs text-green-300 border border-green-500/30">
                    <CreditCard className="w-3 h-3" />
                    {t('specialePromoDiscount')}
                  </div>
                )}
                <p className="mt-2 text-sm text-indigo-400">{plan.credits} {t('specialeCredits')}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm text-indigo-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'border border-indigo-600 text-indigo-200 hover:bg-indigo-900/50'}`}
                >
                  {plan.price === '0' ? t('specialeCreateAccount') : t('specialeSignUpCode')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white">
            {t('specialeFaqTitle')}
          </h2>
          <p className="text-center text-indigo-300 mt-2">
            {t('specialeFaqDesc')}
          </p>
          <div className="mt-12 space-y-4">
            {[
              { q: t('specialeFaq1Q'), a: t('specialeFaq1A') },
              { q: t('specialeFaq2Q'), a: t('specialeFaq2A') },
              { q: t('specialeFaq3Q'), a: t('specialeFaq3A') },
              { q: t('specialeFaq4Q'), a: t('specialeFaq4A') },
            ].map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-indigo-400">
            <span className="flex items-center gap-2"><Shield className="w-5 h-5" /> {t('specialeRgpd')}</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> {t('specialePayments')}</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5" /> {t('specialeCancelFree')}</span>
            <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {t('specialeSupport')}</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            {t('specialeCtaTitle')}
          </h2>
          <p className="mt-4 text-indigo-200">
            {t('specialeCtaDesc')}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {t('specialeHeroCta')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              {t('specialeViewPricing')}
            </Link>
          </div>
          <p className="mt-6 text-sm text-indigo-400">
            {t('specialeCtaPromo')}
          </p>
        </div>
      </section>
    </div>
  )
}
