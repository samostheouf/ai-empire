import Link from 'next/link'
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
    title: t('blogAiApiPourSaasTitle'),
    description: t('blogAiApiPourSaasDescription'),
    path: '/blog/ai-api-pour-saas',
    type: 'article',
    keywords: [t('blogAiApiPourSaasKw1'), t('blogAiApiPourSaasKw2'), t('blogAiApiPourSaasKw3'), t('blogAiApiPourSaasKw4'), t('blogAiApiPourSaasKw5'), t('blogAiApiPourSaasKw6'), t('blogAiApiPourSaasKw7'), t('blogAiApiPourSaasKw8')],
    publishedTime: '2024-06-15',
    modifiedTime: '2024-12-01',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function AiApiPourSaasPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogAiApiPourSaasTitle'),
    description: t('blogAiApiPourSaasSchemaDesc'),
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogAiApiPourSaasBreadcrumb'), path: '/blog/ai-api-pour-saas' },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogAiApiPourSaasBreadcrumbShort'), href: '/blog/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              {t('blogAiApiPourSaasTag')}
            </span>
            <span className="text-sm text-indigo-400">{t('blogAiApiPourSaasDate')}</span>
            <span className="text-sm text-indigo-400">{t('blogAiApiPourSaasReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('blogAiApiPourSaasH1')}
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ai-api-pour-saas`} title={t('blogAiApiPourSaasShareTitle')} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              {t('blogAiApiPourSaasIntro')}
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">{t('blogAiApiPourSaasPrereqTitle')}</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>{t('blogAiApiPourSaasPrereq1')}</li>
                <li>{t('blogAiApiPourSaasPrereq2')}</li>
                <li>{t('blogAiApiPourSaasPrereq3')}</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step1')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep1a')} <a href="/register" className="text-indigo-400 underline">/register</a> {t('blogAiApiPourSaasPStep1b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. {t('blogAiApiPourSaasPStep1c')}
            </p>
            <p>
              {t('blogAiApiPourSaasPStep1d')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step2')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep2')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step3')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep3a')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> {t('blogAiApiPourSaasPStep3b')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })
  return result.content
}

export async function generateSEO(topic: string, keywords: string[]) {
  const result = await ai.seo({
    topic,
    keywords,
    maxTokens: 2000,
  })
  return {
    title: result.title,
    metaDescription: result.metaDescription,
    content: result.content,
  }
}

export async function generateCode(description: string, language = 'typescript') {
  const result = await ai.code({
    description,
    language,
  })
  return result.code
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step4')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep4')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt requis' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur de génération' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step5')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep5')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    setResult(data.content || data.error)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Décrivez ce que vous voulez générer..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Génération...' : 'Générer'}
      </button>
      {result && (
        <div className="rounded-lg bg-gray-50 p-4">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Step6')}</h2>
            <p>
              {t('blogAiApiPourSaasPStep6')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(key: string, limit = 10, windowMs = 60000) {
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

// Utilisation dans la route API :
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2BestPractices')}</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">{t('blogAiApiPourSaasBp1Title')}</h3>
                <p className="text-sm text-indigo-300">{t('blogAiApiPourSaasBp1Desc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">{t('blogAiApiPourSaasBp2Title')}</h3>
                <p className="text-sm text-indigo-300">{t('blogAiApiPourSaasBp2Desc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">{t('blogAiApiPourSaasBp3Title')}</h3>
                <p className="text-sm text-indigo-300">{t('blogAiApiPourSaasBp3Desc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">{t('blogAiApiPourSaasBp4Title')}</h3>
                <p className="text-sm text-indigo-300">{t('blogAiApiPourSaasBp4Desc')}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiApiPourSaasH2Conclusion')}</h2>
            <p>
              {t('blogAiApiPourSaasPConclusion1')}
            </p>
            <p>
              {t('blogAiApiPourSaasPConclusion2')}
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {t('blogAiApiPourSaasCtaTitle')}
            </h3>
            <p className="mt-3 text-indigo-200">
              {t('blogAiApiPourSaasCtaDesc')}
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
        </div>
      </article>
    </div>
  )
}
