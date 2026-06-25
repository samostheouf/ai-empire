import Link from 'next/link'
import { Rocket, Zap, TrendingUp, ArrowRight, Check, Star, Clock, Cpu, BarChart3 } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export const metadata = {
  title: 'NeuraAPI pour les startups — Lancez votre SaaS en 48h',
  description: 'Templates SaaS Next.js, IA intégrée, déploiement Vercel. Passez du concept au produit fonctionnel en un week-end avec NeuraAPI.',
  openGraph: {
    title: 'NeuraAPI pour les startups',
    description: 'Lancez votre SaaS en 48h avec des templates Next.js et l\'IA NeuraAPI.',
    type: 'website',
  },
}

export default async function StartupsLandingPage() {
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
            <Rocket className="w-4 h-4" />
            {t('startupsHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('startupsHeroTitle')} <span className="text-indigo-400">{t('startupsHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('startupsHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              {t('startupsHeroCta1')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/blog/nextjs-saas-starter" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('startupsHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('startupsFeaturesTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Clock className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('startupsFeature1Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('startupsFeature1Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Cpu className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('startupsFeature2Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('startupsFeature2Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <BarChart3 className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('startupsFeature3Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('startupsFeature3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">{t('startupsHowTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: '1', title: t('startupsHowStep1'), desc: t('startupsHowStep1Desc') },
              { step: '2', title: t('startupsHowStep2'), desc: t('startupsHowStep2Desc') },
              { step: '3', title: t('startupsHowStep3'), desc: t('startupsHowStep3Desc') },
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
          <h2 className="text-center text-3xl font-bold text-white">{t('startupsTestimonialsTitle')}</h2>
          <p className="text-center mt-4 text-indigo-300">{t('startupsTestimonialsSubtitle')}</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('startupsTestimonial1Quote')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('startupsTestimonial2Quote')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('startupsPricingTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('startupsPricingFree')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('startupsPricingFreePrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('startupsPricingFreeF1'), t('startupsPricingFreeF2'), t('startupsPricingFreeF3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('startupsPricingFreeCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-600 bg-indigo-900/40 p-8 ring-2 ring-indigo-600/50">
              <h3 className="text-lg font-semibold text-white">{t('startupsPricingPro')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('startupsPricingProPrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('startupsPricingProF1'), t('startupsPricingProF2'), t('startupsPricingProF3'), t('startupsPricingProF4')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                {t('startupsPricingProCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('startupsPricingEnterprise')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('startupsPricingEnterprisePrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('startupsPricingEnterpriseF1'), t('startupsPricingEnterpriseF2'), t('startupsPricingEnterpriseF3'), t('startupsPricingEnterpriseF4')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:contact@neuraapi.com" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('startupsPricingEnterpriseCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <TrendingUp className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('startupsCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">
            {t('startupsCtaDesc')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('startupsCta1')}
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('startupsCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
