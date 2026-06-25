import Link from 'next/link'
import { Users, Zap, Palette, Briefcase, ArrowRight, Check, Star, Globe } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export const metadata = {
  title: 'NeuraAPI pour les agences — Intégrez l\'IA dans vos projets clients',
  description: 'White-label IA, templates SaaS, support multi-client. Les agences choisissent NeuraAPI pour livrer des solutions IA performantes.',
  openGraph: {
    title: 'NeuraAPI pour les agences',
    description: 'White-label IA, templates SaaS, support multi-client pour agences.',
    type: 'website',
  },
}

export default async function AgenciesLandingPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <Briefcase className="w-4 h-4" />
            {t('agenciesHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('agenciesHeroTitle')} <span className="text-indigo-400">{t('agenciesHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('agenciesHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              {t('agenciesHeroCta1')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="mailto:partners@neuraapi.com" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('agenciesHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('agenciesBenefitsTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Palette className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('agenciesBenefit1Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('agenciesBenefit1Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('agenciesBenefit2Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('agenciesBenefit2Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Users className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('agenciesBenefit3Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('agenciesBenefit3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">{t('agenciesHowTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { step: '1', title: t('agenciesHowStep1'), desc: t('agenciesHowStep1Desc') },
              { step: '2', title: t('agenciesHowStep2'), desc: t('agenciesHowStep2Desc') },
              { step: '3', title: t('agenciesHowStep3'), desc: t('agenciesHowStep3Desc') },
              { step: '4', title: t('agenciesHowStep4'), desc: t('agenciesHowStep4Desc') },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-indigo-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('agenciesFeaturesTitle')}</h2>
          <p className="text-center mt-4 text-indigo-300">{t('agenciesTestimonialsSubtitle')}</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('agenciesTestimonial1Quote')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('agenciesTestimonial2Quote')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('agenciesPricingTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('agenciesPricingPro')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('agenciesPricingProPrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('agenciesPricingProF1'), t('agenciesPricingProF2'), t('agenciesPricingProF3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('agenciesPricingProCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-600 bg-indigo-900/40 p-8 ring-2 ring-indigo-600/50">
              <h3 className="text-lg font-semibold text-white">{t('agenciesPricingEnterprise')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('agenciesPricingEnterprisePrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('agenciesPricingEnterpriseF1'), t('agenciesPricingEnterpriseF2'), t('agenciesPricingEnterpriseF3'), t('agenciesPricingEnterpriseF4'), t('agenciesPricingEnterpriseF5')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:partners@neuraapi.com" className="mt-8 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                {t('agenciesPricingEnterpriseCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('agenciesPricingPartner')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('agenciesPricingPartnerPrice')}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('agenciesPricingPartnerF1'), t('agenciesPricingPartnerF2'), t('agenciesPricingPartnerF3'), t('agenciesPricingPartnerF4'), t('agenciesPricingPartnerF5')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:partners@neuraapi.com" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('agenciesPricingPartnerCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Globe className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('agenciesCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">
            {t('agenciesCtaDesc')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="mailto:partners@neuraapi.com" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('agenciesCta1')}
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('agenciesCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
