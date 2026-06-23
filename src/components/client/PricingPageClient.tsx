'use client'

import { useState } from 'react'
import { Check, X as XIcon, Shield, Clock, CreditCard, BadgeCheck, ArrowRight, Sparkles, ChevronDown, Code, Layers, HeadphonesIcon } from 'lucide-react'
import Link from 'next/link'
import { useI18n } from '@/i18n'
import Breadcrumb from '@/components/Breadcrumb'

const COMPARISON_FEATURES = [
  { nameKey: 'pricingCompMonthlyCredits' as const, starter: 'pricingCompStarterCredits' as const, pro: 'pricingCompProCredits' as const, enterprise: 'pricingCompEnterpriseCredits' as const },
  { nameKey: 'pricingCompTextGen' as const, starter: true, pro: true, enterprise: true },
  { nameKey: 'pricingCompSeo' as const, starter: true, pro: true, enterprise: true },
  { nameKey: 'pricingCompCodeGen' as const, starter: 'pricingCompLimited' as const, pro: true, enterprise: true },
  { nameKey: 'pricingCompSentiment' as const, starter: false, pro: true, enterprise: true },
  { nameKey: 'pricingCompChatbot' as const, starter: false, pro: true, enterprise: true },
  { nameKey: 'pricingCompTemplatesLabel' as const, starter: false, pro: 'pricingComp5Templates' as const, enterprise: 'pricingCompAllCustom' as const },
  { nameKey: 'pricingCompAnalytics' as const, starter: false, pro: true, enterprise: true },
  { nameKey: 'pricingCompSupportLabel' as const, starter: 'pricingCompEmail' as const, pro: 'pricingCompPriority' as const, enterprise: 'pricingCompDedicated247' as const },
  { nameKey: 'pricingCompSla' as const, starter: false, pro: false, enterprise: 'pricingComp999' as const },
  { nameKey: 'pricingCompCustomIntegration' as const, starter: false, pro: false, enterprise: true },
  { nameKey: 'pricingCompAccountManager' as const, starter: false, pro: false, enterprise: true },
]

const plans = [
  {
    name: 'Starter',
    price: '0',
    credits: '100',
    descriptionKey: 'pricingStarterDesc' as const,
    featuresKeys: ['pricingStarterF1', 'pricingStarterF2', 'pricingStarterF3', 'pricingStarterF4', 'pricingStarterF5', 'pricingStarterF6'] as const,
    ctaKey: 'pricingStarterCta' as const,
    popular: false,
  },
  {
    name: 'Pro',
    price: '19',
    credits: '10 000',
    descriptionKey: 'pricingProDesc' as const,
    featuresKeys: ['pricingProF1', 'pricingProF2', 'pricingProF3', 'pricingProF4', 'pricingProF5', 'pricingProF6', 'pricingProF7'] as const,
    ctaKey: 'pricingProCta' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '69',
    creditsKey: 'pricingIllimited' as const,
    descriptionKey: 'pricingEnterpriseDesc' as const,
    featuresKeys: ['pricingEnterpriseF1', 'pricingEnterpriseF2', 'pricingEnterpriseF3', 'pricingEnterpriseF4', 'pricingEnterpriseF5', 'pricingEnterpriseF6', 'pricingEnterpriseF7'] as const,
    ctaKey: 'pricingEnterpriseCta' as const,
    popular: false,
  },
]

export default function PricingPageClient() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="bg-[#0f0a2e]">
      {/* Hero */}
      <section id="pricing" className="relative overflow-hidden px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-purple-600/5 to-transparent animate-gradient bg-[length:200%_200%]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <Breadcrumb items={[{ name: t('pricingTitle'), href: '/pricing' }]} />
          <div className="text-center mt-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t('pricingTitle')}
            </h1>
            <p className="mt-4 text-lg text-indigo-200/70 max-w-2xl mx-auto">
              {t('pricingSubtitle')}. {t('pricingNoCommitment')}, {t('pricingSocialProof').split('.')[0]}.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-b from-indigo-600/20 to-purple-600/20 border border-indigo-500/50 scale-105 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-indigo-500/25">
                    {t('pricingLePlusPopulaire')}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-indigo-300/70">{t(plan.descriptionKey)}</p>
                <div className="mt-6">
                  {plan.price === '0' ? (
                    <span className="text-4xl font-bold text-white">{t('pricingFree')}</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}€</span>
                      <span className="text-sm text-indigo-400">{t('pricingPerMonth2')}</span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-indigo-400">{'creditsKey' in plan && plan.creditsKey ? t(plan.creditsKey) : plan.credits} {t('pricingCredits2')}</p>
                <ul className="mt-8 space-y-3">
                  {plan.featuresKeys.map((featureKey, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-sm text-indigo-200/80">{t(featureKey)}</span>
                    </li>
                  ))}
                </ul>
                {plan.price === '0' ? (
                  <Link
                    href="/register"
                    className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:scale-105'
                        : 'border border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    {t(plan.ctaKey)}
                  </Link>
                ) : selectedPlan === plan.name ? (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const res = await fetch('/api/auth/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password, plan: plan.name }),
                      })
                      const data = await res.json()
                      if (data.apiKey) {
                        window.location.href = `/dashboard?email=${encodeURIComponent(email)}`
                      }
                    }}
                    className="mt-8 space-y-3"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      aria-label={t('pricingEmailLabel')}
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none placeholder-indigo-400/40 transition-all"
                    />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t('pricingPasswordPlaceholder')}
                      aria-label={t('pricingPasswordPlaceholder')}
                      className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none placeholder-indigo-400/40 transition-all"
                    />
                    <button
                      type="submit"
                      aria-label={t(plan.ctaKey)}
                      className="w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105"
                    >
                      <Sparkles className="w-4 h-4" />
                      {t(plan.ctaKey)}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(null)}
                      className="w-full rounded-xl py-2 text-center text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      {t('pricingCancel')}
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    aria-label={t(plan.ctaKey)}
                    className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:scale-105'
                        : 'border border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    {t(plan.ctaKey)}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-300/60">
            <span className="flex items-center gap-2"><Shield className="w-5 h-5" /> {t('pricingTrustRGPD')}</span>
            <span className="flex items-center gap-2"><BadgeCheck className="w-5 h-5" /> {t('pricingTrustPaymentsStripe')}</span>
            <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {t('pricingTrust30Days')}</span>
            <span className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> {t('pricingTrustNoCommitment')}</span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-indigo-300/50">
              {t('pricingSocialProof')}
            </p>
          </div>
        </div>
      </section>

      {/* Why NeuraAPI */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('pricingWhyTitle')}</h2>
            <p className="mt-3 text-indigo-300/70">{t('pricingWhySubtitle')}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { titleKey: 'pricingWhySdk' as const, descKey: 'pricingWhySdkDesc' as const, icon: Code },
              { titleKey: 'pricingWhyTemplates' as const, descKey: 'pricingWhyTemplatesDesc' as const, icon: Layers },
              { titleKey: 'pricingWhySupport' as const, descKey: 'pricingWhySupportDesc' as const, icon: HeadphonesIcon },
              { titleKey: 'pricingWhyGdpr' as const, descKey: 'pricingWhyGdprDesc' as const, icon: Shield },
              { titleKey: 'pricingWhyPrice' as const, descKey: 'pricingWhyPriceDesc' as const, icon: CreditCard },
              { titleKey: 'pricingWhyUpdates' as const, descKey: 'pricingWhyUpdatesDesc' as const, icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5">
                  <item.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{t(item.titleKey)}</h3>
                <p className="mt-2 text-indigo-300/70 text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('pricingCompTitle')}</h2>
            <p className="mt-3 text-indigo-300/70">{t('pricingCompSubtitle')}</p>
          </div>
          <div className="mt-12 overflow-x-auto rounded-2xl glass-card">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-left text-sm font-semibold text-indigo-300">{t('pricingCompFeature')}</th>
                  <th className="p-5 text-center text-sm font-semibold text-indigo-300">Starter</th>
                  <th className="p-5 text-center text-sm font-semibold text-gradient">Pro</th>
                  <th className="p-5 text-center text-sm font-semibold text-indigo-300">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((feature, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 text-sm text-indigo-200/80">{t(feature.nameKey)}</td>
                    {(['starter', 'pro', 'enterprise'] as const).map((plan) => {
                      const val = feature[plan]
                      return (
                        <td key={plan} className="p-5 text-center">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                                <Check className="h-3 w-3 text-green-400" />
                              </div>
                            ) : (
                              <XIcon className="h-5 w-5 text-white/10 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-indigo-200/80">{t(val)}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl glass-card p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t('pricingGuaranteeTitle')}</h3>
                <p className="mt-3 text-indigo-200/70">
                  {t('pricingGuaranteeDesc')}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-indigo-300/70">
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-400" /> {t('pricingGuaranteeFull')}</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-400" /> {t('pricingGuaranteeNoQ')}</span>
                  <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-400" /> {t('pricingGuarantee48h')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('pricingFaqTitle')}</h2>
          <div className="mt-12 space-y-3">
            {([
              ['pricingFaq1Q' as const, 'pricingFaq1A' as const],
              ['pricingFaq2Q' as const, 'pricingFaq2A' as const],
              ['pricingFaq3Q' as const, 'pricingFaq3A' as const],
              ['pricingFaq4Q' as const, 'pricingFaq4A' as const],
              ['pricingFaq5Q' as const, 'pricingFaq5A' as const],
            ]).map(([qKey, aKey], i) => (
              <details key={i} className="group glass-card rounded-xl overflow-hidden transition-all hover:scale-[1.01]">
                <summary className="flex items-center justify-between p-5 text-left cursor-pointer list-none">
                  <span className="font-medium text-white pr-4">{t(qKey)}</span>
                  <ChevronDown className="h-5 w-5 text-indigo-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-5 pb-5 text-indigo-300/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {t(aKey)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl rounded-3xl relative overflow-hidden p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 glass" />
          <div className="relative">
            <Sparkles className="mx-auto h-12 w-12 text-indigo-400 animate-glow" />
            <h2 className="mt-6 text-3xl font-bold text-white">
              {t('pricingCtaTitle')}
            </h2>
            <p className="mt-4 text-indigo-200/70">
              {t('pricingCtaSubtitle')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/25 w-full sm:w-auto justify-center hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                {t('pricingCtaTry')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
