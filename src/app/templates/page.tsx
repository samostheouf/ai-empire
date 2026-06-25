import type { Metadata } from 'next'
import { Layers, Zap, Timer, BarChart3, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import BuildTimeSaved from '@/components/client/BuildTimeSaved'
import TemplateGrid from '@/components/client/TemplateGrid'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('templatesMetaTitle'),
    description: t('templatesMetaDescription'),
    path: '/templates',
    keywords: ['template next.js', 'templates premium', 'SaaS template', 'Next.js Tailwind', 'template e-commerce', 'template blog', 'template dashboard'],
  })
}

const BEFORE_AFTER_COMPARISONS = [
  {
    id: 1,
    label: 'Authentication Setup',
    before: `// Without AI Empire — 2-3 days of setup\nimport { createClient } from '@supabase/supabase-js'\nimport { useState, useEffect } from 'react'\n\nexport function useAuth() {\n  const [user, setUser] = useState(null)\n  const [loading, setLoading] = useState(true)\n  \n  useEffect(() => {\n    // ... 50+ lines of auth logic\n    // OAuth providers, session management,\n    // token refresh, middleware, etc.\n  }, [])\n  \n  return { user, loading }`,
    after: `// With AI Empire — Ready in 5 minutes\nimport { auth } from '@/lib/auth'\nimport { redirect } from 'next/navigation'\n\nexport default async function Dashboard() {\n  const session = await auth()\n  if (!session) redirect('/login')\n  return <DashboardView user={session.user} />`,
    timeSaved: '2-3 days',
  },
  {
    id: 2,
    label: 'Stripe Integration',
    before: `// Without AI Empire — Complex wiring\nimport Stripe from 'stripe'\nimport { PrismaClient } from '@prisma/client'\n\nconst stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)\n\n// Customer creation, subscription handling,\n// webhook verification, invoice generation,\n// portal session, usage metering...\n// 200+ lines of boilerplate`,
    after: `// With AI Empire — Pre-configured\nimport { createCheckoutSession } from '@/lib/stripe'\n\nexport async function startSubscription(planId: string) {\n  const session = await createCheckoutSession({\n    priceId: planId,\n    successUrl: '/dashboard?upgraded=true',\n    cancelUrl: '/pricing',\n  })\n  redirect(session.url!)`,
    timeSaved: '3-5 days',
  },
  {
    id: 3,
    label: 'AI API Integration',
    before: `// Without AI Empire — Provider management\nimport OpenAI from 'openai'\nimport { GoogleGenerativeAI } from '@google/generative-ai'\n\n// Handle multiple providers, rate limits,\n// error handling, streaming, retries...\nconst openai = new OpenAI()\nconst gemini = new GoogleGenerativeAI(key)\n// 150+ lines of provider-specific code`,
    after: `// With AI Empire — Unified API\nimport { ai } from '@/lib/ai'\n\nexport async function chat(messages: Message[]) {\n  return ai.chat({\n    model: 'groq-llama-3.1',\n    messages,\n    stream: true,\n  })`,
    timeSaved: '2-3 days',
  },
]

const TESTIMONIALS = [
  {
    quote: 'I shipped my SaaS MVP in 3 days instead of 3 weeks. The Stripe integration alone saved me a full sprint.',
    author: 'Marcus Chen',
    role: 'CTO, DataPulse Analytics',
    metric: '3 days vs 3 weeks',
  },
  {
    quote: 'We delivered 6 client projects this quarter using AI Empire templates. Our revenue is up 68%.',
    author: 'Sophie Laurent',
    role: 'Agency Director, Bright Studio',
    metric: '+68% revenue',
  },
  {
    quote: 'As a solo developer, going from 2 MVPs/month to 5 changed my freelance business completely.',
    author: 'Alex Rivera',
    role: 'Freelance Full-Stack Developer',
    metric: '2→5 MVPs/month',
  },
]

const API_METRICS = [
  { label: 'Groq Llama 3.1 8B', speed: '~500 tokens/sec', color: 'from-green-400 to-emerald-500' },
  { label: 'Groq Mixtral 8x7B', speed: '~300 tokens/sec', color: 'from-blue-400 to-indigo-500' },
  { label: 'Groq Gemma 7B', speed: '~600 tokens/sec', color: 'from-purple-400 to-pink-500' },
  { label: 'Gemini Pro', speed: '~200 tokens/sec', color: 'from-amber-400 to-orange-500' },
]

export default async function TemplatesPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return (
    <div className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'NeuraAPI Templates',
            description: 'Premium Next.js templates for SaaS, e-commerce, and portfolios',
            numberOfItems: 10,
            itemListElement: [
              { '@type': 'SoftwareApplication', name: 'NeuraSaaS', applicationCategory: 'DeveloperApplication', offers: { '@type': 'Offer', price: '97', priceCurrency: 'EUR' } },
              { '@type': 'SoftwareApplication', name: 'NeuraCommerce', applicationCategory: 'DeveloperApplication', offers: { '@type': 'Offer', price: '129', priceCurrency: 'EUR' } },
              { '@type': 'SoftwareApplication', name: 'NeuraBlog', applicationCategory: 'DeveloperApplication', offers: { '@type': 'Offer', price: '59', priceCurrency: 'EUR' } },
            ],
          }),
        }}
      />
      {/* Hero */}
      <div className="relative overflow-hidden px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: t('templatesBreadcrumb'), href: '/templates' }]} />
          <div className="mt-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              <Layers className="w-10 h-10 text-indigo-400 inline mr-3" />
              {t('templatesTitle')}{' '}
              <span className="text-gradient">{t('templatesTitleHighlight')}</span>
            </h1>
            <p className="mt-4 text-lg text-indigo-200/70 max-w-2xl mx-auto">
              {t('templatesSubtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        {/* Build Time Saved Counter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">{t('templatesImpactTitle')}</h2>
          <p className="text-indigo-300/60 text-center mb-8">{t('templatesImpactSubtitle')}</p>
          <BuildTimeSaved />
        </div>

        {/* Before/After Code Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">{t('templatesBeforeAfterTitle')}</h2>
          <p className="text-indigo-300/60 text-center mb-8">{t('templatesBeforeAfterSubtitle')}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BEFORE_AFTER_COMPARISONS.map((comparison) => (
              <div key={comparison.id} className="glass-card rounded-2xl overflow-hidden group">
                <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{comparison.label}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400">
                     <Zap className="h-3 w-3" />
                     {comparison.timeSaved} {t('templatesSaved')}
                  </span>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <span className="text-xs font-medium text-red-400/80 uppercase tracking-wider">{t('templatesWithoutLabel')}</span>
                    <pre className="mt-1.5 rounded-lg bg-red-500/5 border border-red-500/10 p-3 text-xs text-red-300/70 overflow-x-auto max-h-32 leading-relaxed">
                      <code>{comparison.before}</code>
                    </pre>
                  </div>
                  <div className="flex items-center justify-center my-2">
                    <ArrowRight className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-green-400/80 uppercase tracking-wider">{t('templatesWithLabel')}</span>
                    <pre className="mt-1.5 rounded-lg bg-green-500/5 border border-green-500/10 p-3 text-xs text-green-300/70 overflow-x-auto max-h-32 leading-relaxed">
                      <code>{comparison.after}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Response Time Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">{t('templatesApiPerformanceTitle')}</h2>
          <p className="text-indigo-300/60 text-center mb-8">{t('templatesApiPerformanceSubtitle')}</p>
          <div className="glass-card rounded-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {API_METRICS.map((metric) => (
                <div key={metric.label} className="relative rounded-xl bg-white/5 border border-white/10 p-4 group hover:border-white/20 transition-all">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="w-4 h-4 text-indigo-400" />
                      <span className="text-sm font-medium text-white">{metric.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-gradient">{metric.speed}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-indigo-300/50">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{t('templatesApiBenchmarkNote')}</span>
            </div>
          </div>
        </div>

        {/* Developer Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-2">{t('templatesTestimonialsTitle')}</h2>
          <p className="text-indigo-300/60 text-center mb-8">{t('templatesTestimonialsSubtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.author} className="glass-card rounded-2xl p-6 group hover:border-indigo-500/30 transition-all">
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-400">
                    {testimonial.metric}
                  </span>
                </div>
                <p className="text-sm text-indigo-200/80 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-sm font-medium text-white">{testimonial.author}</p>
                  <p className="text-xs text-indigo-400/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Template Grid (client component for search/filter/interactivity) */}
        <TemplateGrid />
      </div>
    </div>
  )
}
