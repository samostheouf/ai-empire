import Link from 'next/link'
import { Zap, Rocket, ArrowRight, Check, Star, DollarSign, Cpu, Globe } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export const metadata = {
  title: 'NeuraAPI pour les freelances — Livrez 3x plus vite',
  description: 'Intégrez l\'IA dans vos prestations avec NeuraAPI. Templates, API IA documentée, tarification transparente. Pour les freelances qui veulent se différencier.',
  openGraph: {
    title: 'NeuraAPI pour les freelances',
    description: 'Livrez des projets 3x plus vite grâce à l\'IA. Templates et API pour freelances.',
    type: 'website',
  },
}

export default async function FreelancersLandingPage() {
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
            {t('freelancersHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('freelancersHeroTitle')} <span className="text-indigo-400">{t('freelancersHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('freelancersHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/templates" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              {t('freelancersHeroCta1')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/docs" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('freelancersHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('freelancersBenefitsTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('freelancersBenefit1Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('freelancersBenefit1Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Cpu className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('freelancersBenefit2Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('freelancersBenefit2Desc')}
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <DollarSign className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('freelancersBenefit3Title')}</h3>
              <p className="mt-2 text-indigo-300">
                {t('freelancersBenefit3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('freelancersUseCasesTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              t('freelancersUseCase1'),
              t('freelancersUseCase2'),
              t('freelancersUseCase3'),
              t('freelancersUseCase4'),
              t('freelancersUseCase5'),
              t('freelancersUseCase6'),
            ].map((useCase, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-indigo-200">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('freelancersTestimonialsTitle')}</h2>
          <p className="text-center mt-4 text-indigo-300">{t('freelancersTestimonialsSubtitle')}</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('freelancersTestimonial1Quote')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/30 bg-indigo-900/20 p-8 opacity-60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-indigo-600" />
                ))}
              </div>
              <p className="text-indigo-400 italic">{t('freelancersTestimonial2Quote')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('freelancersPricingTitle')}</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('freelancersPricingFree')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('freelancersPricingFreePrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('freelancersPricingFreeF1'), t('freelancersPricingFreeF2'), t('freelancersPricingFreeF3')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('freelancersPricingFreeCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-600 bg-indigo-900/40 p-8 ring-2 ring-indigo-600/50">
              <h3 className="text-lg font-semibold text-white">{t('freelancersPricingPro')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('freelancersPricingProPrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('freelancersPricingProF1'), t('freelancersPricingProF2'), t('freelancersPricingProF3'), t('freelancersPricingProF4')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-200">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="mt-8 block rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500 transition-all">
                {t('freelancersPricingProCta')}
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-lg font-semibold text-white">{t('freelancersPricingEnterprise')}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{t('freelancersPricingEnterprisePrice')}</span>
                <span className="text-indigo-300">/mois</span>
              </div>
              <ul className="mt-6 space-y-3">
                {[t('freelancersPricingEnterpriseF1'), t('freelancersPricingEnterpriseF2'), t('freelancersPricingEnterpriseF3'), t('freelancersPricingEnterpriseF4'), t('freelancersPricingEnterpriseF5')].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-indigo-300">
                    <Check className="w-4 h-4 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="mailto:contact@neuraapi.com" className="mt-8 block rounded-lg border border-indigo-500 px-4 py-2 text-center text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
                {t('freelancersPricingEnterpriseCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Globe className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('freelancersCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">
            {t('freelancersCtaDesc')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('freelancersCta1')}
            </Link>
            <Link href="/pricing" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('freelancersCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
