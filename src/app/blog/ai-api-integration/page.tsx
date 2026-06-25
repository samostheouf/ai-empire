import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('blogAiApiIntegrationTitle'),
    description: t('blogAiApiIntegrationDescription'),
    path: '/blog/ai-api-integration',
    type: 'article',
    keywords: [t('blogAiApiIntegrationKw1'), t('blogAiApiIntegrationKw2'), t('blogAiApiIntegrationKw3'), t('blogAiApiIntegrationKw4'), t('blogAiApiIntegrationKw5'), t('blogAiApiIntegrationKw6'), t('blogAiApiIntegrationKw7'), t('blogAiApiIntegrationKw8')],
    publishedTime: '2026-06-20',
    modifiedTime: '2026-06-20',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function AiApiIntegrationPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogAiApiIntegrationTitle'),
    description: t('blogAiApiIntegrationSchemaDesc'),
    slug: 'ai-api-integration',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogAiApiIntegrationBreadcrumb'), path: '/blog/ai-api-integration' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogAiApiIntegrationBreadcrumb'), href: '/blog/ai-api-integration' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> {t('blogAiApiIntegrationTag')}
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> {t('blogAiApiIntegrationDate')}</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> {t('blogAiApiIntegrationReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            {t('blogAiApiIntegrationH1')}
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ai-api-integration`} title={t('blogAiApiIntegrationShareTitle')} />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            {t('blogAiApiIntegrationIntro')}
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">{t('blogAiApiIntegrationLearnTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>{t('blogAiApiIntegrationLearn1')}</li>
              <li>{t('blogAiApiIntegrationLearn2')}</li>
              <li>{t('blogAiApiIntegrationLearn3')}</li>
              <li>{t('blogAiApiIntegrationLearn4')}</li>
              <li>{t('blogAiApiIntegrationLearn5')}</li>
              <li>{t('blogAiApiIntegrationLearn6')}</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step1')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep1a')} <a href="/register" className="text-indigo-400 underline">NeuraAPI</a> {t('blogAiApiIntegrationPStep1b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. {t('blogAiApiIntegrationPStep1c')}
          </p>
          <p>
            {t('blogAiApiIntegrationPStep1d')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step2')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep2a')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npm install @neuraapi/sdk`}</code>
            </pre>
          </div>
          <p>
            {t('blogAiApiIntegrationPStep2b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step3')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep3a')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })
  return result.content
}

export async function analyzeSentiment(text: string) {
  const result = await ai.analyze({
    text,
    task: 'sentiment',
  })
  return {
    sentiment: result.sentiment,
    confidence: result.confidence,
  }
}

export async function classifyText(text: string, categories: string[]) {
  const result = await ai.classify({
    text,
    categories,
  })
  return {
    category: result.category,
    scores: result.scores,
  }
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogAiApiIntegrationPStep3b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step4')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep4a')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/ai/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { generateContent } from '@/lib/ai'
import { z } from 'zod'

const schema = z.object({
  prompt: z.string().min(1).max(5000),
})

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Paramètres invalides' },
      { status: 400 }
    )
  }

  try {
    const content = await generateContent(parsed.data.prompt)
    return NextResponse.json({ content })
  } catch (error) {
    if (error instanceof Error && error.message.includes('credits')) {
      return NextResponse.json(
        { error: 'Crédits épuisés' },
        { status: 402 }
      )
    }
    return NextResponse.json(
      { error: 'Erreur de génération' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>
          <p>
            {t('blogAiApiIntegrationPStep4b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code>: {t('blogAiApiIntegrationPStep4c')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step5')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep5a')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">fetch</code>. {t('blogAiApiIntegrationPStep5b')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')
    setError('')

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue')
        return
      }

      setResult(data.content)
    } catch {
      setError('Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez ce que vous voulez générer..."
        className="w-full rounded-lg border border-indigo-800 bg-indigo-950 p-3 text-white"
        rows={4}
      />
      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white disabled:opacity-50"
      >
        {loading ? 'Génération en cours...' : 'Générer'}
      </button>
      {error && (
        <div className="rounded-lg bg-red-900/30 border border-red-800/50 p-3 text-red-300 text-sm">
          {error}
        </div>
      )}
      {result && (
        <div className="rounded-lg bg-indigo-900/30 border border-indigo-800/50 p-4">
          <p className="text-indigo-200 whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  )
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Step6')}</h2>
          <p>
            {t('blogAiApiIntegrationPStep6a')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(
  key: string,
  limit = 10,
  windowMs = 60000
) {
  const now = Date.now()
  const timestamps = requests.get(key) || []
  const recent = timestamps.filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    return false
  }

  recent.push(now)
  requests.set(key, recent)
  return true
}

// Dans votre route API :
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json(
//     { error: 'Trop de requêtes. Réessayez dans 1 minute.' },
//     { status: 429 }
//   )
// }`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2BestPractices')}</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiApiIntegrationBp1Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiApiIntegrationBp1Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiApiIntegrationBp2Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiApiIntegrationBp2Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiApiIntegrationBp3Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiApiIntegrationBp3Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiApiIntegrationBp4Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiApiIntegrationBp4Desc')}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Comparison')}</h2>
          <p>
            {t('blogAiApiIntegrationPComparison')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">{t('blogAiApiIntegrationLiComp1Strong')}</strong> {t('blogAiApiIntegrationLiComp1')}</li>
            <li><strong className="text-white">{t('blogAiApiIntegrationLiComp2Strong')}</strong> {t('blogAiApiIntegrationLiComp2')}</li>
            <li><strong className="text-white">{t('blogAiApiIntegrationLiComp3Strong')}</strong> {t('blogAiApiIntegrationLiComp3')}</li>
            <li><strong className="text-white">{t('blogAiApiIntegrationLiComp4Strong')}</strong> {t('blogAiApiIntegrationLiComp4')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiIntegrationH2Conclusion')}</h2>
          <p>
            {t('blogAiApiIntegrationPConclusion1')}
          </p>
          <p>
            {t('blogAiApiIntegrationPConclusion2')}
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            {t('blogAiApiIntegrationCtaTitle')}
          </h3>
          <p className="mt-3 text-indigo-200">
            {t('blogAiApiIntegrationCtaDesc')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              {t('blogCtaStartFree')}
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              {t('blogCtaReadDocs')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedNextjsSaasStarter')}
              </Link>
            </li>
            <li>
              <Link href="/blog/stripe-billing-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedStripeBilling')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
