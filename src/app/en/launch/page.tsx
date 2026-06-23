'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Globe, Star, Code, ExternalLink, Download, Check, Trophy, Rocket, BarChart3 } from 'lucide-react'
import { useState, useEffect } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

export default function ProductHuntPage() {
  const [stats, setStats] = useState<{ userCount: number; templateCount: number; totalDownloads: number } | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.userCount === 'number') setStats(data)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="bg-indigo-950 min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: 'Launch', href: '/en/launch' }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-sm text-orange-300 border border-orange-500/30 mb-8">
            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
            Product Hunt Launch
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            NeuraAPI is <span className="text-orange-400">Live</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            AI APIs + Premium Next.js Templates for developers. Artificial intelligence, SEO, code generation — all in 10 languages.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/en/register"
              className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-400 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Try for free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/en/pricing"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              View pricing
            </Link>
          </div>

          {stats && (
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.userCount.toLocaleString('en-US')}</div>
                <div className="text-xs text-indigo-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.templateCount}</div>
                <div className="text-xs text-indigo-400">Templates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{stats.totalDownloads.toLocaleString('en-US')}</div>
                <div className="text-xs text-indigo-400">Downloads</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Hunt Embed */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8 text-center">
            <Trophy className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Vote for us on Product Hunt</h2>
            <p className="text-indigo-300 mb-6">Help us become the top product of the day</p>
            <a
              href="https://www.producthunt.com/products/neuraapi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-400 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              View on Product Hunt
            </a>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white mb-16">What NeuraAPI offers you</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Zap className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI API</h3>
              <p className="text-indigo-300">Text generation, code, SEO. Connected to Groq, Gemini, OpenAI. Ready to use.</p>
              <code className="mt-4 block rounded-lg bg-indigo-950 p-3 text-xs text-indigo-400 font-mono">
                POST /api/ai/generate<br/>
                {'{ "prompt": "...", "maxTokens": 1000 }'}
              </code>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Code className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Next.js Templates</h3>
              <p className="text-indigo-300">SaaS, e-commerce, landing pages, portfolios. Production-ready with integrated Stripe.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['SaaS', 'E-commerce', 'Blog', 'Dashboard'].map(tag => (
                  <span key={tag} className="rounded-full bg-indigo-800/50 px-3 py-1 text-xs text-indigo-300">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Globe className="h-10 w-10 text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">10 Languages</h3>
              <p className="text-indigo-300">Site and docs translated to FR, EN, ES, DE, IT, PT, JA, ZH, KO, AR.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['🇫🇷', '🇬🇧', '🇪🇸', '🇩🇪', '🇮🇹', '🇵🇹', '🇯🇵', '🇨🇳', '🇰🇷', '🇸🇦'].map(flag => (
                  <span key={flag} className="text-xl">{flag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4">Why NeuraAPI?</h2>
          <p className="text-center text-indigo-300 mb-12">Comparison with existing alternatives</p>
          <div className="border border-indigo-800/50 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-900/50">
                  <th className="text-left px-6 py-4 font-medium text-indigo-200">Feature</th>
                  <th className="text-center px-6 py-4 font-medium text-orange-400">NeuraAPI</th>
                  <th className="text-center px-6 py-4 font-medium text-indigo-400">Others</th>
                </tr>
              </thead>
              <tbody className="text-indigo-200">
                {[
                  ['AI API + Templates', true, 'Separate'],
                  ['TypeScript SDK', true, 'No'],
                  ['10 languages', true, '1-2'],
                  ['Free to start', true, 'No'],
                  ['Integrated Stripe', true, 'Varies'],
                  ['Free updates', true, 'Paid'],
                  ['Full documentation', true, 'Varies'],
                ].map(([feat, ours, other], i) => (
                  <tr key={i} className="border-t border-indigo-800/50">
                    <td className="px-6 py-3">{feat as string}</td>
                    <td className="px-6 py-3 text-center">{ours ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-red-400">✗</span>}</td>
                    <td className="px-6 py-3 text-center text-indigo-400">{other as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-4">Launch Pricing</h2>
          <p className="text-center text-indigo-300 mb-12">Launch pricing available now.</p>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white">Starter</h3>
              <p className="mt-2 text-indigo-300 text-sm">For testing and experimenting.</p>
              <div className="mt-6"><span className="text-4xl font-bold text-white">$0</span></div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 100 credits/month</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> All AI endpoints</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Documentation</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Community support</li>
              </ul>
              <Link href="/en/register" className="mt-8 block w-full rounded-lg py-3 text-center border border-indigo-600 text-indigo-200 font-semibold hover:bg-indigo-900/50 transition-colors">
                Get started
              </Link>
            </div>
            <div className="relative rounded-2xl border border-orange-500 bg-indigo-900/50 p-8">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold text-white">
                🔥 Launch offer -30%
              </div>
              <h3 className="text-xl font-semibold text-white">Pro</h3>
              <p className="mt-2 text-indigo-300 text-sm">For serious projects.</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-sm text-indigo-300 ml-1">/month</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> 10,000 credits/month</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> All AI endpoints</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Premium templates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Priority support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Advanced analytics</li>
              </ul>
              <Link href="/en/register" className="mt-8 block w-full rounded-lg py-3 text-center bg-orange-500 text-white font-semibold hover:bg-orange-400 transition-colors">
                Get the offer
              </Link>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <h3 className="text-xl font-semibold text-white">Enterprise</h3>
              <p className="mt-2 text-indigo-300 text-sm">For teams and critical needs.</p>
              <div className="mt-6"><span className="text-4xl font-bold text-white">$99</span><span className="text-sm text-indigo-300 ml-1">/month</span></div>
              <ul className="mt-6 space-y-3 text-sm text-indigo-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Unlimited credits</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Guaranteed SLA</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Dedicated 24/7 support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Custom templates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 shrink-0" /> Tailored integration</li>
              </ul>
              <Link href="/en/contact" className="mt-8 block w-full rounded-lg py-3 text-center border border-indigo-600 text-indigo-200 font-semibold hover:bg-indigo-900/50 transition-colors">
                Contact the team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Stripe', 'Groq AI', 'OpenAI', 'Resend', 'Vercel', 'PostgreSQL'].map(tech => (
              <span key={tech} className="rounded-full border border-indigo-800/50 bg-indigo-900/30 px-4 py-2 text-sm text-indigo-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-indigo-800/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Press Kit</h2>
          <p className="text-indigo-300 mb-8">Resources for journalists and bloggers</p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Download className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Logo & Branding</h3>
              <p className="text-sm text-indigo-300">SVG logo, color guidelines, fonts</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <BarChart3 className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Key Figures</h3>
              <p className="text-sm text-indigo-300">User stats, templates, revenue (coming soon)</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Rocket className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Description</h3>
              <p className="text-sm text-indigo-300">1-line pitch, paragraph, long form</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-orange-500/10 border border-orange-500/30 p-12 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-orange-400 mb-4" />
          <h2 className="text-3xl font-bold text-white">Pro Plan at $19/month</h2>
          <p className="mt-4 text-indigo-200">Zero commitment, cancel anytime.</p>
          <div className="mt-8">
            <Link
              href="/en/register"
              className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-400 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Join now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'NeuraAPI Launch',
          description: 'AI APIs and premium Next.js templates for developers. Launch offer: 30% off Pro plan.',
          url: 'https://ai-empire-steel.vercel.app/en/launch',
          publisher: { '@type': 'Organization', name: 'NeuraAPI' },
          inLanguage: 'en-US',
        }) }}
      />
    </div>
  )
}
