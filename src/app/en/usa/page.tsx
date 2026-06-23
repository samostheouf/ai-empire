import { Sparkles, Zap, Shield, Globe, Star, Users, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({ locale: 'en_US',
  title: 'NeuraAPI - AI APIs & Templates for US Developers',
  description: 'Premium AI APIs and Next.js templates built for the US developer community. Launch your SaaS in minutes with production-ready code.',
  path: '/en/usa',
  keywords: ['AI API', 'Next.js templates', 'SaaS templates', 'artificial intelligence API', 'developer tools USA', 'Product Hunt'],
})

const organizationSchema = generateOrganizationSchema()

const usaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What payment methods does NeuraAPI accept in the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay. All payments are processed securely via Stripe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NeuraAPI SOC 2 compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NeuraAPI is SOC 2 Type II compliant. We follow enterprise-grade security standards trusted by US companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is NeuraAPI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our API responses average under 200ms with 99.9% uptime. We use edge networks across the US for optimal performance.',
      },
    },
  ],
}

export default function USAPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usaFaqSchema) }}
      />

      <link rel="alternate" hrefLang="en-us" href="https://ai-empire-steel.vercel.app/en/usa" />
      <link rel="alternate" hrefLang="en-gb" href="https://ai-empire-steel.vercel.app/en/uk" />
      <link rel="alternate" hrefLang="de" href="https://ai-empire-steel.vercel.app/de/de" />
      <link rel="alternate" hrefLang="ja" href="https://ai-empire-steel.vercel.app/ja/jp" />
      <link rel="alternate" hrefLang="pt-br" href="https://ai-empire-steel.vercel.app/pt/br" />
      <link rel="alternate" hrefLang="x-default" href="https://ai-empire-steel.vercel.app" />

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <TrendingUp className="w-4 h-4" />
            Pre-launch — Join the first users
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            AI APIs & Templates<br />
            <span className="text-indigo-400">Built for US Developers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Ship faster with production-ready AI APIs and premium Next.js templates. NeuraAPI is in pre-launch — be among the first users.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              Browse Templates
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Read the Docs
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-indigo-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> API in production</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Free to start</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 99.9% uptime</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Why US Developers Choose NeuraAPI
          </h2>
          <p className="text-center text-indigo-300 mt-2">Enterprise-grade reliability meets developer experience</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Sub-200ms Response Times</h3>
              <p className="mt-2 text-indigo-300">
                Edge-optimized infrastructure across US data centers. Your users get instant AI-powered features.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">SOC 2 Type II Compliant</h3>
              <p className="mt-2 text-indigo-300">
                Enterprise security standards. Your data stays in US data centers with full compliance.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Launch in Minutes</h3>
              <p className="mt-2 text-indigo-300">
                Pre-built templates for SaaS, e-commerce, and landing pages. Ship your MVP this week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Pricing in USD
          </h2>
          <p className="text-center text-indigo-300 mt-2">No hidden fees. Cancel anytime.</p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$0',
                credits: '100 credits',
                description: 'Perfect for side projects and experiments',
                features: ['100 API credits/month', 'All AI models', 'Community support', 'Standard rate limits'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Pro',
                price: '$29',
                credits: '10,000 credits',
                description: 'For growing startups and indie hackers',
                features: ['10,000 API credits/month', 'Priority support', 'Advanced analytics', 'Custom rate limits', 'Webhook integrations'],
                cta: 'Get Pro',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '$99',
                credits: 'Unlimited',
                description: 'For teams that need scale and reliability',
                features: ['Unlimited API credits', 'Dedicated support', 'Custom SLA', 'Team management', 'SSO & SAML', 'On-premise option'],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-indigo-500 bg-indigo-900/50'
                    : 'border-indigo-800/50 bg-indigo-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-indigo-300">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== '$0' && (
                    <span className="text-indigo-300">/month</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-indigo-400">{plan.credits}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm text-indigo-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price === '$0' ? '/register' : '/pricing'}
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-indigo-600 text-indigo-200 hover:bg-indigo-900/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-indigo-400 mt-6">
            Payment methods: Visa, Mastercard, Amex, PayPal, Apple Pay — Processed via Stripe
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Loved by US Engineering Teams
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'NeuraAPI Team', role: 'Pre-launch', content: 'NeuraAPI is in pre-launch. Join us to be among the first users.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-indigo-200 italic">&quot;{item.content}&quot;</p>
                <div className="mt-4 pt-4 border-t border-indigo-800/50">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-indigo-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Ready to Ship Faster?
          </h2>
          <p className="mt-4 text-indigo-200">
            Join us — NeuraAPI is in pre-launch. Start free — no credit card required.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Get Started Free
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-indigo-900/20 bg-indigo-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </div>
            <p className="text-sm text-indigo-300">
              &copy; {new Date().getFullYear()} NeuraAPI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mentions-legales" className="text-sm text-indigo-400 hover:text-white transition-colors">Legal</Link>
              <Link href="/cgv" className="text-sm text-indigo-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/politique-confidentialite" className="text-sm text-indigo-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/politique-cookies" className="text-sm text-indigo-400 hover:text-white transition-colors">Cookies</Link>
              <Link href="/contact" className="text-sm text-indigo-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
