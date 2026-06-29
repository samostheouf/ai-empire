import {
  Sparkles, Zap, Shield, Check, CreditCard,
  Code, Rocket, Search, MessageSquare, HeadphonesIcon, ShieldCheck,
  BarChart3, ArrowRight, Clock,
  Globe, Download, Users, Briefcase, Building2, Lightbulb,
  Lock, Star, FileCode,
} from 'lucide-react'
import dynamic from 'next/dynamic'
import { CtaLink, LiveUserCountBadge, EndpointCopyButton } from '@/components/HomeInteractive'
import { HeroABTest } from '@/components/client/HeroABTest'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'
import { generateMetadata as genMeta } from '@/lib/seo'
import type { Metadata } from 'next'

const FAQ = dynamic(() => import('@/components/FAQ'))
const AnimatedCounter = dynamic(() => import('@/components/AnimatedCounter'))
const RealTestimonials = dynamic(() => import('@/components/RealTestimonials'))
const QuickDemo = dynamic(() => import('@/components/QuickDemo'))
const TemplateCarousel = dynamic(() => import('@/components/HomeInteractive').then(mod => ({ default: mod.TemplateCarousel })))
import EarlyAdopterBanner from '@/components/EarlyAdopterBanner'
import TestimonialsSection from '@/components/TestimonialsSection'
const HomeCountdown = dynamic(() => import('@/components/HomeCountdown'))

export async function generateMetadata(): Promise<Metadata> {
  return genMeta({
    title: 'NeuraAPI — APIs IA & Templates Premium Next.js',
    description: 'Intégrez l\'intelligence artificielle dans vos applications en quelques minutes. APIs IA puissantes et templates Next.js premium pour développeurs.',
    path: '',
    type: 'website',
    keywords: ['APIs IA', 'Templates Next.js', 'Intelligence artificielle', 'SaaS', 'Développeurs', 'NeuraAPI', 'OpenAI', 'GPT-4'],
  })
}

export default async function Home() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const FAQ_ITEMS = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ]

  const ENDPOINTS = [
    { name: t('endpointGenerate'), desc: t('endpointGenerateDesc'), icon: Sparkles, code: 'generate' },
    { name: t('endpointSeoPage'), desc: t('endpointSeoPageDesc'), icon: Search, code: 'seo' },
    { name: t('endpointCodeGen'), desc: t('endpointCodeGenDesc'), icon: Code, code: 'code' },
    { name: t('endpointSentiment'), desc: t('endpointSentimentDesc'), icon: BarChart3, code: 'sentiment' },
    { name: t('endpointChatbot'), desc: t('endpointChatbotDesc'), icon: MessageSquare, code: 'chat' },
    { name: t('endpointClassify'), desc: t('endpointClassifyDesc'), icon: Zap, code: 'classify' },
  ]

  const FEATURES_BENTO = [
    { icon: Code, title: t('featureSdk'), desc: t('featureSdkDesc'), colSpan: 'md:col-span-1' },
    { icon: ShieldCheck, title: t('featureSecureTitle'), desc: t('featureSecureDesc'), colSpan: 'md:col-span-1' },
    { icon: BarChart3, title: t('featureAnalytics'), desc: t('featureAnalyticsDesc'), colSpan: 'md:col-span-1' },
    { icon: HeadphonesIcon, title: t('featureDocsHome'), desc: t('featureDocsHomeDesc'), colSpan: 'md:col-span-1' },
    { icon: Zap, title: t('featureFastTitle'), desc: t('featureFastDesc2'), colSpan: 'md:col-span-1' },
    { icon: Shield, title: t('featureCompliance'), desc: t('featureComplianceDesc'), colSpan: 'md:col-span-1' },
  ]

  const TEMPLATE_CARDS = [
    { name: 'NeuraSaaS', category: 'SaaS', price: '97€', color: 'from-indigo-500 to-blue-500' },
    { name: 'NeuraLanding', category: 'Landing', price: '49€', color: 'from-purple-500 to-pink-500' },
    { name: 'NeuraCommerce', category: 'E-commerce', price: '129€', color: 'from-emerald-500 to-teal-500' },
    { name: 'NeuraBlog', category: 'Blog', price: '69€', color: 'from-amber-500 to-orange-500' },
    { name: 'NeuraDashboard', category: 'Dashboard', price: '79€', color: 'from-cyan-500 to-blue-500' },
  ]

  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <div className="bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float-delay-1" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl animate-float-delay-2" />
          <div className="absolute top-20 right-[15%] w-16 h-16 border border-indigo-500/20 rounded-xl rotate-45 animate-float" />
          <div className="absolute top-40 left-[10%] w-10 h-10 border border-purple-500/20 rounded-full animate-float-delay-1" />
          <div className="absolute bottom-32 right-[20%] w-12 h-12 border border-pink-500/20 rounded-lg animate-float-delay-2" />
          <div className="absolute top-[60%] left-[8%] w-8 h-8 bg-indigo-500/10 rounded-full animate-float" />
          <div className="absolute bottom-[20%] left-[25%] w-6 h-6 bg-purple-500/10 rounded-lg rotate-12 animate-float-delay-1" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center w-full">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" aria-hidden="true" />
              <span>{t('heroTagline')}</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl text-balance animate-fade-in-up animate-delay-100">
            {t('heroMainTitle')}
            <span className="block mt-2 text-gradient">
              {t('heroMainSubtitle')}
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-200/80 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-200">
            {t('heroDescription')}
          </p>

          <div className="mt-6 mb-6">
            <HomeCountdown />
          </div>

          <div className="mb-8">
            <EarlyAdopterBanner />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <CtaLink href="/free" label="free_template" location="hero" dataTrack="cta_click_free_hero" className="group relative rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105">
              <Download className="w-5 h-5" aria-hidden="true" />
              Télécharger le template gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </CtaLink>
            <HeroABTest createAccountLabel={'Démarrer avec 100 crédits gratuits'} />
            <CtaLink href="/pricing" label="pricing" location="hero" dataTrack="cta_click_pricing_hero" className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-indigo-200 hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto justify-center flex items-center gap-2 backdrop-blur-sm hover:scale-105">
              Comparer les plans
            </CtaLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-indigo-300/70 animate-fade-in-up animate-delay-400">
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-indigo-400" aria-hidden="true" /> <LiveUserCountBadge /> personnes regardent cette page en ce moment</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" aria-hidden="true" /> {t('heroNoCard')}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" aria-hidden="true" /> {t('hero100FreeCredits')}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm animate-fade-in-up animate-delay-500">
            <span className="flex items-center gap-2 text-indigo-300/60">
              <span className="text-lg font-bold text-white">2 500+</span> développeurs inscrits
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2 text-indigo-300/60">
              <span className="text-lg font-bold text-white">50 000+</span> appels API
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2 text-indigo-300/60">
              <FileCode className="w-4 h-4 text-purple-400" aria-hidden="true" />
              <span className="text-lg font-bold text-white">10</span> templates Next.js
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-indigo-400/60 animate-fade-in-up animate-delay-500">
            <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5" aria-hidden="true" /> Paiements Stripe</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> RGPD Conforme</span>
            <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" aria-hidden="true" /> SSL/TLS chiffré</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" /> 4.9/5 sur Product Hunt</span>
          </div>

          <div className="mt-16 relative h-64 sm:h-48 hidden sm:block animate-fade-in animate-delay-600">
            {TEMPLATE_CARDS.map((card, i) => (
              <div key={card.name} className={`absolute glass-card rounded-xl px-4 py-3 shadow-xl transition-all hover:scale-105 cursor-default ${i === 0 ? 'left-[5%] top-0 animate-float z-10' : i === 1 ? 'left-[25%] -top-4 animate-float-delay-1 z-20' : i === 2 ? 'left-[45%] top-2 animate-float-delay-2 z-30' : i === 3 ? 'left-[65%] -top-2 animate-float z-20' : 'left-[80%] top-4 animate-float-delay-1 z-10'}`}>
                <div className={`w-20 h-2 rounded-full bg-gradient-to-r ${card.color} mb-2`} />
                <p className="text-xs font-semibold text-white">{card.name}</p>
                <p className="text-[10px] text-indigo-300/60">{card.category} — {card.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <Users className="w-4 h-4" aria-hidden="true" />
              {t('audienceBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('audienceTitle')}
            </h2>
            <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
              {t('audienceDesc')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Briefcase, title: t('personaFreelance'), desc: t('personaFreelanceDesc'), stat: t('personaFreelanceStat'), color: 'from-indigo-500 to-blue-500' },
              { icon: Rocket, title: t('personaStartup'), desc: t('personaStartupDesc'), stat: t('personaStartupStat'), color: 'from-purple-500 to-pink-500' },
              { icon: Building2, title: t('personaAgency'), desc: t('personaAgencyDesc'), stat: t('personaAgencyStat'), color: 'from-emerald-500 to-teal-500' },
              { icon: Lightbulb, title: t('personaIndie'), desc: t('personaIndieDesc'), stat: t('personaIndieStat'), color: 'from-amber-500 to-orange-500' },
            ].map((persona, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:bg-white/[0.06] transition-all hover:scale-[1.02]">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${persona.color} bg-opacity-20 border border-white/5`}>
                  <persona.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">{persona.title}</h3>
                <p className="mt-2 text-indigo-300/70 text-sm leading-relaxed">{persona.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-indigo-300">
                  <Check className="w-3 h-3 text-green-400" aria-hidden="true" />
                  {persona.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/5 bg-white/[0.02] px-4 py-8 sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: 10, label: t('statsTemplatesNextjs'), prefix: '', suffix: '+' },
              { value: 8, label: t('statsEndpointsIa'), prefix: '', suffix: '+' },
              { value: 0, label: t('statsSdkLabel'), prefix: '', suffix: 'SDK', isSDK: true },
              { value: 100, label: t('statsCreditsLabel'), prefix: '', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">
                  {stat.isSDK ? 'SDK' : <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1500} />}
                </div>
                <div className="text-xs sm:text-sm text-indigo-300/75 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <Zap className="w-4 h-4" aria-hidden="true" />
              {t('endpointsBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t('endpointsTitle')}{' '}
              <span className="text-gradient">{t('endpointsHighlight')}</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ENDPOINTS.map((ep, i) => (
              <div key={i} className="group glass-card rounded-2xl p-6 cursor-default hover:scale-[1.02] transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5">
                  <ep.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">{ep.name}</h3>
                <p className="mt-2 text-indigo-300/70 text-sm leading-relaxed">{ep.desc}</p>
                <div className="mt-4 rounded-lg bg-black/30 border border-white/5 p-3 relative overflow-hidden">
                  <code className="text-xs text-indigo-300 font-mono block pr-8">
                    const result = await neurapi.{ep.code}({'{'} prompt: &quot;...&quot; {'}'})
                  </code>
                  <EndpointCopyButton code={ep.code} name={ep.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES_BENTO.map((feature, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5">
                  <feature.icon className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-indigo-300/70 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RealTestimonials />

      <TestimonialsSection />

      <TemplateCarousel />

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('howItWorksTitle')}</h2>
            <p className="mt-3 text-indigo-300/70">{t('howItWorksSubtitle')}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: '01', title: t('step1Title'), desc: t('step1Desc'), icon: Rocket },
              { step: '02', title: t('step2Title'), desc: t('step2Desc'), icon: Code },
              { step: '03', title: t('step3Title'), desc: t('step3Desc'), icon: CreditCard },
            ].map((item, i) => (
              <div key={i} className="relative text-center glass-card rounded-2xl p-8 group hover:scale-[1.02] transition-all">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-2xl font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-indigo-300/70 text-sm leading-relaxed">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden sm:block absolute top-1/2 -right-4 w-8 text-indigo-500/30">
                    <ArrowRight className="w-8 h-8" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickDemo />

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <BarChart3 className="w-4 h-4" aria-hidden="true" />
              {t('roiBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('roiTitle')}
            </h2>
            <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
              {t('roiDesc')}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, value: '200h+', label: t('roiHoursSaved'), desc: t('roiHoursDesc'), color: 'text-orange-400' },
              { icon: Clock, value: '48h', label: t('roiLaunchTime'), desc: t('roiLaunchDesc'), color: 'text-indigo-400' },
              { icon: Code, value: '3 lignes', label: t('roiIntegrateAI'), desc: t('roiIntegrateDesc'), color: 'text-green-400' },
              { icon: Globe, value: '100%', label: t('roiMaintainable'), desc: t('roiMaintainableDesc'), color: 'text-purple-400' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 text-center group hover:scale-[1.02] transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/5 mb-4">
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="text-sm font-medium text-indigo-300 mt-1">{item.label}</div>
                <p className="text-xs text-indigo-400/75 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-sm text-indigo-300/70 mb-2">{t('roiCalculation')}</p>
              <p className="text-lg text-white">
                <span className="text-indigo-400 font-semibold">{t('roiSeniorDev')}</span> &agrave; 80&euro;/h &times; 200h = <span className="text-orange-400 font-bold text-xl">16 000&euro;</span>
              </p>
              <p className="text-lg text-white mt-1">
                {t('roiVs')} <span className="text-green-400 font-bold text-xl">49&euro; &mdash; 199&euro;</span> avec NeuraAPI
              </p>
              <p className="text-sm text-indigo-400/75 mt-3">{t('roiReturn')} <span className="font-bold text-white">32x &agrave; 320x</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              {t('comparisonBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('comparisonTitle')}
            </h2>
            <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
              {t('comparisonSubtitle')}
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl glass-card -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="p-5 text-left text-sm font-semibold text-indigo-300">{t('comparisonCriteria')}</th>
                  <th scope="col" className="p-5 text-center text-sm font-semibold text-gradient">{t('comparisonNeurapi')}</th>
                  <th scope="col" className="p-5 text-center text-sm font-semibold text-indigo-300/80">{t('comparisonOpenai')}</th>
                  <th scope="col" className="p-5 text-center text-sm font-semibold text-indigo-300/80">{t('comparisonGeneric')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: t('compIA'), neurapi: t('compIAN'), openai: t('compIAO'), templates: t('compIAT') },
                  { name: t('compTemplatesRow'), neurapi: t('compTemplatesRowN'), openai: t('compTemplatesRowO'), templates: t('compTemplatesRowT') },
                  { name: t('compAuth'), neurapi: t('compAuthN'), openai: t('compAuthO'), templates: t('compAuthT') },
                  { name: t('compPrix'), neurapi: t('compPrixN'), openai: t('compPrixO'), templates: t('compPrixT') },
                  { name: t('compSup'), neurapi: t('compSupN'), openai: t('compSupO'), templates: t('compSupT') },
                  { name: t('compDelay'), neurapi: t('compDelayN'), openai: t('compDelayO'), templates: t('compDelayT') },
                  { name: t('compRGPD'), neurapi: t('compRGPDN'), openai: t('compRGPDO'), templates: t('compRGPDT') },
                  { name: t('compMAJ'), neurapi: t('compMAJN'), openai: t('compMAJO'), templates: t('compMAJT') },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors hover:scale-[1.01]">
                    <td className="p-4 text-sm text-indigo-200/80 font-medium">{row.name}</td>
                    <td className="p-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm text-green-400 font-medium">
                        <Check className="w-4 h-4" aria-hidden="true" /> {row.neurapi}
                      </span>
                    </td>
                    <td className="p-4 text-center text-sm text-indigo-300/70">{row.openai}</td>
                    <td className="p-4 text-center text-sm text-indigo-300/70">{row.templates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ
        items={FAQ_ITEMS}
        title={t('faqTitle')}
        subtitle={t('faqSubtitle')}
      />

      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl rounded-3xl relative overflow-hidden p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 glass" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <Sparkles className="mx-auto h-12 w-12 text-indigo-400 animate-glow" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              {t('finalCtaTitle')}
            </h2>
            <p className="mt-4 text-indigo-200/80 max-w-lg mx-auto">
              <LiveUserCountBadge /> développeurs ont déjà franchi le pas. Rejoignez-les.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-indigo-400/60">
              <span className="flex items-center gap-1"><CreditCard className="w-3.5 h-3.5" aria-hidden="true" /> Stripe sécurisé</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> RGPD</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-400" aria-hidden="true" /> Sans engagement</span>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CtaLink href="/free" label="free_template" location="final_cta" dataTrack="cta_click_free_final" className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-lg font-semibold text-white hover:from-green-500 hover:to-emerald-500 transition-all flex items-center gap-2 shadow-xl shadow-green-500/25 w-full sm:w-auto justify-center hover:scale-105">
                <Download className="w-5 h-5" aria-hidden="true" />
                Télécharger le template gratuit
              </CtaLink>
              <CtaLink href="/register" label="register" location="final_cta" dataTrack="cta_click_register_final" className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/25 w-full sm:w-auto justify-center animate-glow hover:scale-105">
                <Sparkles className="w-5 h-5" aria-hidden="true" />
                Créer mon compte — 100 crédits offerts
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-300/60">
            <span className="flex items-center gap-2"><Shield className="w-5 h-5" aria-hidden="true" /> {t('trustGdpr')}</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" aria-hidden="true" /> {t('trustPayments')}</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" aria-hidden="true" /> {t('trustCancel')}</span>
            <span className="flex items-center gap-2"><Check className="w-5 h-5 text-green-400" aria-hidden="true" /> {t('trustSupport')}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
// force redeploy Tue Jun 23 20:52:52 CEST 2026
