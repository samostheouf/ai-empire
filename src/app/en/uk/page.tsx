import { Sparkles, Zap, Shield, Globe, Star, Users, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({ locale: 'en_GB',
  title: 'NeuraAPI - AI APIs & Templates for UK Developers',
  description: 'Premium AI APIs and Next.js templates built for the UK developer community. Trusted by London tech startups and engineering teams.',
  path: '/en/uk',
  keywords: ['AI API UK', 'Next.js templates London', 'SaaS templates UK', 'developer tools London', 'British tech startups'],
})

const organizationSchema = generateOrganizationSchema()

const ukFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What payment methods does NeuraAPI accept in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay. All payments are processed securely in GBP via Stripe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NeuraAPI GDPR compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, NeuraAPI is fully GDPR compliant. We process data in UK/EU data centres and provide Data Processing Agreements (DPAs) upon request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I pay in GBP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. All pricing is displayed in British Pounds (GBP). We support direct debit and all major payment methods in the UK.',
      },
    },
  ],
}

export default function UKPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukFaqSchema) }}
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
            Trusted by London&apos;s top tech teams
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            AI APIs & Templates<br />
            <span className="text-indigo-400">for the UK Tech Scene</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Ship faster with production-ready AI APIs and premium Next.js templates. GDPR-compliant infrastructure hosted in UK data centres.
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
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 10+ templates</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 8+ API endpoints</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> TypeScript SDK</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Why UK Developers Choose NeuraAPI
          </h2>
          <p className="text-center text-indigo-300 mt-2">Built for the UK market with full GDPR compliance</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">UK Data Centres</h3>
              <p className="mt-2 text-indigo-300">
                Data stays within UK borders. Low-latency infrastructure optimised for British users.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">GDPR Compliant</h3>
              <p className="mt-2 text-indigo-300">
                Full compliance with UK GDPR and Data Protection Act 2018. DPA available on request.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">London Tech Ready</h3>
              <p className="mt-2 text-indigo-300">
                Designed for London&apos;s fast-moving startup ecosystem. Ship your MVP this sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Pricing in GBP
          </h2>
          <p className="text-center text-indigo-300 mt-2">No hidden fees. Cancel anytime.</p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '£0',
                credits: '100 credits',
                description: 'Perfect for side projects and experiments',
                features: ['100 API credits/month', 'All AI models', 'Community support', 'Standard rate limits'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Pro',
                price: '£25',
                credits: '10,000 credits',
                description: 'For growing startups and indie hackers',
                features: ['10,000 API credits/month', 'Priority support', 'Advanced analytics', 'Custom rate limits', 'Webhook integrations'],
                cta: 'Get Pro',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '£89',
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
                  {plan.price !== '£0' && (
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
                  href={plan.price === '£0' ? '/register' : '/pricing'}
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
            Payment methods: Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay — Processed in GBP via Stripe
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Trusted by UK Tech Teams
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'James W.', role: 'Engineering Lead at FinTech Startup', content: 'GDPR compliance was a must for us. NeuraAPI delivered — compliant, fast, and the templates are brilliant for rapid prototyping.' },
              { name: 'Emma T.', role: 'CTO at London SaaS Co', content: 'We migrated from a US provider to NeuraAPI for the UK data residency. Performance actually improved and our DPO is happy.' },
              { name: 'Oliver R.', role: 'Indie Developer, Bristol', content: 'Launched my side project with a NeuraAPI template in a weekend. The British English localisation and GBP pricing made it seamless.' },
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
            Ready to Build Smarter?
          </h2>
          <p className="mt-4 text-indigo-200">
            Join 300+ UK developers building with NeuraAPI. Start free — no credit card required.
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
