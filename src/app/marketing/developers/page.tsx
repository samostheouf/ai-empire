'use client'

import Link from 'next/link'
import { Code, Terminal, BookOpen, GitBranch } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function DevelopersLandingPage() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <Terminal className="w-4 h-4" />
            {t('devsHeroTag')}
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            {t('devsHeroTitle')} <span className="text-indigo-400">{t('devsHeroTitleHighlight')}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            {t('devsHeroDesc')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/docs" className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2">
              <Code className="w-4 h-4" />
              {t('devsHeroCta1')}
            </Link>
            <Link href="/templates" className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('devsHeroCta2')}
            </Link>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('devsIntegrationTitle')}</h2>
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-950 p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-indigo-400">app.ts</span>
            </div>
            <pre className="text-indigo-200 overflow-x-auto">
{`import { NeuraAPI } from '@neuraapi/sdk'

const api = new NeuraAPI(process.env.NEURAAPI_KEY)

const content = await api.generate({
  prompt: 'Write an article about SaaS',
  model: 'gpt-4',
  maxTokens: 1000,
})`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">{t('devsFeaturesTitle')}</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <Code className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('devsFeature1Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('devsFeature1Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <BookOpen className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('devsFeature2Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('devsFeature2Desc')}</p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
              <GitBranch className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{t('devsFeature3Title')}</h3>
              <p className="mt-2 text-indigo-300">{t('devsFeature3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white mb-12">{t('devsEndpointsTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { method: 'POST', path: '/generate', desc: 'Content generation' },
              { method: 'POST', path: '/analyze', desc: 'Text & sentiment analysis' },
              { method: 'POST', path: '/chat', desc: 'AI conversation' },
              { method: 'POST', path: '/classify', desc: 'Auto classification' },
              { method: 'GET', path: '/models', desc: 'Available models' },
              { method: 'GET', path: '/usage', desc: 'Usage history' },
            ].map((endpoint, i) => (
              <div key={i} className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4 flex items-center gap-4">
                <span className={`px-2 py-1 rounded text-xs font-mono ${endpoint.method === 'POST' ? 'bg-green-900/50 text-green-300' : 'bg-blue-900/50 text-blue-300'}`}>
                  {endpoint.method}
                </span>
                <div>
                  <code className="text-indigo-200 font-mono">{endpoint.path}</code>
                  <p className="text-sm text-indigo-400">{endpoint.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Terminal className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">{t('devsCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">{t('devsCtaDesc')}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/docs" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('devsCta1')}
            </Link>
            <Link href="https://github.com/neuraapi" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('devsCta2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
