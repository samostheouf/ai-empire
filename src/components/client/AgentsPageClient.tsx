'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Check, ChevronDown, Zap, Shield, Send } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'

interface AgentsPageClientProps {
  translations: Record<string, string>
}

const AGENTS = [
  {
    icon: '🎧',
    nameKey: 'agentsCardSupportName',
    price: '49',
    descKey: 'agentsCardSupportDesc',
    color: 'from-blue-500 to-cyan-500',
    capabilities: [
      'agentsCardSupportCap1',
      'agentsCardSupportCap2',
      'agentsCardSupportCap3',
      'agentsCardSupportCap4',
    ],
  },
  {
    icon: '🎯',
    nameKey: 'agentsCardLeadName',
    price: '79',
    descKey: 'agentsCardLeadDesc',
    color: 'from-indigo-500 to-purple-500',
    capabilities: [
      'agentsCardLeadCap1',
      'agentsCardLeadCap2',
      'agentsCardLeadCap3',
      'agentsCardLeadCap4',
    ],
  },
  {
    icon: '✍️',
    nameKey: 'agentsCardContentName',
    price: '59',
    descKey: 'agentsCardContentDesc',
    color: 'from-purple-500 to-pink-500',
    capabilities: [
      'agentsCardContentCap1',
      'agentsCardContentCap2',
      'agentsCardContentCap3',
      'agentsCardContentCap4',
    ],
  },
  {
    icon: '💼',
    nameKey: 'agentsCardSalesName',
    price: '69',
    descKey: 'agentsCardSalesDesc',
    color: 'from-emerald-500 to-teal-500',
    capabilities: [
      'agentsCardSalesCap1',
      'agentsCardSalesCap2',
      'agentsCardSalesCap3',
      'agentsCardSalesCap4',
    ],
  },
  {
    icon: '🎙️',
    nameKey: 'agentsCardVoiceName',
    price: '89',
    descKey: 'agentsCardVoiceDesc',
    color: 'from-orange-500 to-red-500',
    capabilities: [
      'agentsCardVoiceCap1',
      'agentsCardVoiceCap2',
      'agentsCardVoiceCap3',
      'agentsCardVoiceCap4',
    ],
  },
  {
    icon: '⚙️',
    nameKey: 'agentsCardAutomationName',
    price: '99',
    descKey: 'agentsCardAutomationDesc',
    color: 'from-amber-500 to-yellow-500',
    capabilities: [
      'agentsCardAutomationCap1',
      'agentsCardAutomationCap2',
      'agentsCardAutomationCap3',
      'agentsCardAutomationCap4',
    ],
  },
]

const FAQ_ITEMS = [
  { qKey: 'agentsFaq1Q', aKey: 'agentsFaq1A' },
  { qKey: 'agentsFaq2Q', aKey: 'agentsFaq2A' },
  { qKey: 'agentsFaq3Q', aKey: 'agentsFaq3A' },
  { qKey: 'agentsFaq4Q', aKey: 'agentsFaq4A' },
  { qKey: 'agentsFaq5Q', aKey: 'agentsFaq5A' },
]

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '0',
    priceSuffix: 'agentsPricingFree',
    agents: '1',
    features: [
      'agentsPricingStarterF1',
      'agentsPricingStarterF2',
      'agentsPricingStarterF3',
    ],
    cta: 'agentsPricingStarterCta',
    popular: false,
  },
  {
    name: 'Pro',
    price: '49',
    priceSuffix: 'agentsPricingPerMonth',
    agents: '3',
    features: [
      'agentsPricingProF1',
      'agentsPricingProF2',
      'agentsPricingProF3',
      'agentsPricingProF4',
    ],
    cta: 'agentsPricingProCta',
    popular: true,
  },
  {
    name: 'Business',
    price: '149',
    priceSuffix: 'agentsPricingPerMonth',
    agents: 'agentsPricingAll',
    features: [
      'agentsPricingBusinessF1',
      'agentsPricingBusinessF2',
      'agentsPricingBusinessF3',
      'agentsPricingBusinessF4',
    ],
    cta: 'agentsPricingBusinessCta',
    popular: false,
  },
]

export default function AgentsPageClient({ translations }: AgentsPageClientProps) {
  const t = (key: string) => translations[key] || key
  const [demoInput, setDemoInput] = useState('')
  const [demoOutput, setDemoOutput] = useState('')
  const [demoLoading, setDemoLoading] = useState(false)

  const handleDemo = async () => {
    if (!demoInput.trim()) return
    setDemoLoading(true)
    setDemoOutput('')
    try {
      const res = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: demoInput }),
      })
      const data = await res.json()
      setDemoOutput(data.result || data.error || 'No result returned.')
    } catch {
      setDemoOutput(t('agentsDemoError'))
    } finally {
      setDemoLoading(false)
    }
  }

  return (
    <div className="bg-[#0f0a2e] min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float-delay-1" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: t('agentsBreadcrumb'), href: '/agents' }]} />
          <div className="mt-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" aria-hidden="true" />
              <span>{t('agentsHeroTag')}</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance animate-fade-in-up animate-delay-100">
            {t('agentsHeroTitle')}
            <span className="block mt-2 text-gradient">
              {t('agentsHeroSubtitle')}
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200/80 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-200">
            {t('agentsHeroDesc')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link
              href="/register"
              className="group relative rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              {t('agentsHeroCta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-indigo-200 hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto justify-center flex items-center gap-2 backdrop-blur-sm hover:scale-105"
            >
              {t('agentsHeroCtaPricing')}
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-indigo-300/70 animate-fade-in-up animate-delay-400">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" aria-hidden="true" /> {t('agentsHeroNoCard')}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" aria-hidden="true" /> {t('agentsHeroFreeTrial')}</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-400" aria-hidden="true" /> {t('agentsHeroCancel')}</span>
          </div>
        </div>
      </section>

      {/* Agent Cards Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <Zap className="w-4 h-4" aria-hidden="true" />
              {t('agentsGridBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t('agentsGridTitle')}{' '}
              <span className="text-gradient">{t('agentsGridHighlight')}</span>
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((agent, i) => (
              <div
                key={i}
                className="group glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${agent.color} bg-opacity-20 border border-white/5 text-2xl`}>
                    {agent.icon}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{agent.price}€</span>
                    <span className="text-xs text-indigo-400">{t('agentsPerMonth')}</span>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {t(agent.nameKey)}
                </h3>
                <p className="mt-2 text-indigo-300/70 text-sm leading-relaxed">
                  {t(agent.descKey)}
                </p>
                <ul className="mt-4 space-y-2">
                  {agent.capabilities.map((cap, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-indigo-300/70">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {t(cap)}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r ${agent.color} text-white hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-105`}
                >
                  {t('agentsCardCta')}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <Zap className="w-4 h-4" aria-hidden="true" />
              {t('agentsDemoBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('agentsDemoTitle')}
            </h2>
            <p className="mt-3 text-indigo-300/70 max-w-xl mx-auto">
              {t('agentsDemoDesc')}
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <label className="block text-sm font-medium text-indigo-200 mb-3">
              {t('agentsDemoLabel')}
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDemo()}
                placeholder={t('agentsDemoPlaceholder')}
                className="flex-1 px-4 py-3 border border-white/10 bg-white/5 text-white rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none placeholder-indigo-400/40 transition-all"
              />
              <button
                onClick={handleDemo}
                disabled={demoLoading}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 disabled:opacity-50 hover:scale-105"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                {demoLoading ? t('agentsDemoSending') : t('agentsDemoSend')}
              </button>
            </div>
            {demoOutput && (
              <div className="mt-4 rounded-xl bg-black/30 border border-white/5 p-4">
                <p className="text-xs text-indigo-400 mb-2">{t('agentsDemoResponse')}</p>
                <p className="text-sm text-indigo-200/80 whitespace-pre-wrap">{demoOutput}</p>
              </div>
            )}
            <p className="mt-3 text-xs text-indigo-400/60">
              {t('agentsDemoNote')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
              <Shield className="w-4 h-4" aria-hidden="true" />
              {t('agentsPricingBadge')}
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t('agentsPricingTitle')}
            </h2>
            <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
              {t('agentsPricingDesc')}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {PRICING_PLANS.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all hover:scale-[1.02] ${
                  plan.popular
                    ? 'bg-gradient-to-b from-indigo-600/20 to-purple-600/20 border border-indigo-500/50 scale-105 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500/20'
                    : 'glass-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 text-xs font-bold text-white shadow-lg shadow-indigo-500/25">
                    {t('agentsPricingPopular')}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4">
                  {plan.price === '0' ? (
                    <span className="text-4xl font-bold text-white">{t('agentsPricingFree')}</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}€</span>
                      <span className="text-sm text-indigo-400">/mois</span>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-indigo-400">{plan.agents} {plan.agents === '1' ? t('agentsPricingAgent') : t('agentsPricingAgents')}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-sm text-indigo-200/80">{t(feat)}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:scale-105'
                      : 'border border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  {t(plan.cta)}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('agentsFaqTitle')}</h2>
            <p className="mt-3 text-indigo-300/70">{t('agentsFaqDesc')}</p>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <details key={i} className="group glass-card rounded-xl overflow-hidden transition-all hover:scale-[1.01]">
                <summary className="flex items-center justify-between p-5 text-left cursor-pointer list-none">
                  <span className="font-medium text-white pr-4">{t(item.qKey)}</span>
                  <ChevronDown className="h-5 w-5 text-indigo-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                </summary>
                <div className="px-5 pb-5 text-indigo-300/70 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {t(item.aKey)}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-4xl rounded-3xl relative overflow-hidden p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute inset-0 glass" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <Sparkles className="mx-auto h-12 w-12 text-indigo-400 animate-glow" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              {t('agentsCtaTitle')}
            </h2>
            <p className="mt-4 text-indigo-200/80 max-w-lg mx-auto">
              {t('agentsCtaDesc')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2 shadow-xl shadow-indigo-500/25 w-full sm:w-auto justify-center hover:scale-105"
              >
                <Sparkles className="w-5 h-5" aria-hidden="true" />
                {t('agentsCtaButton')}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-indigo-300/60">
              {t('agentsCtaNoCard')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
