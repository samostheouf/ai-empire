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
    title: t('blogApiIaNextjsTitle'),
    description: t('blogApiIaNextjsDescription'),
    path: '/blog/api-ia-nextjs',
    type: 'article',
    keywords: [t('blogApiIaNextjsKw1'), t('blogApiIaNextjsKw2'), t('blogApiIaNextjsKw3'), t('blogApiIaNextjsKw4'), t('blogApiIaNextjsKw5'), t('blogApiIaNextjsKw6')],
    publishedTime: '2026-01-15',
    modifiedTime: '2026-06-20',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function BlogApiIaNextjs() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogApiIaNextjsTitle'),
    description: t('blogApiIaNextjsSchemaDesc'),
    slug: 'api-ia-nextjs',
    datePublished: '2026-01-15',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogApiIaNextjsBreadcrumb'), path: '/blog/api-ia-nextjs' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogApiIaNextjsBreadcrumb'), href: '/blog/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> {t('blogApiIaNextjsTag')}
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> {t('blogApiIaNextjsDate')}</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> {t('blogApiIaNextjsReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            {t('blogApiIaNextjsH1')}
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/api-ia-nextjs`} title={t('blogApiIaNextjsShareTitle')} />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            {t('blogApiIaNextjsIntro')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2WhyNextjs')}</h2>
          <p>
            {t('blogApiIaNextjsPWhyNextjs')}
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong> : {t('blogApiIaNextjsLiServerComponents')}</li>
            <li><strong className="text-white">Route Handlers</strong> : {t('blogApiIaNextjsLiRouteHandlers')}</li>
            <li><strong className="text-white">Streaming</strong> : {t('blogApiIaNextjsLiStreaming')} <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong> : {t('blogApiIaNextjsLiEdgeRuntime')}</li>
            <li><strong className="text-white">Middleware</strong> : {t('blogApiIaNextjsLiMiddleware')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2Step1')}</h2>
          <p>
            {t('blogApiIaNextjsPStep1')}
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong> : {t('blogApiIaNextjsLiNeuraapi')}</li>
            <li><strong className="text-white">OpenAI</strong> : {t('blogApiIaNextjsLiOpenai')}</li>
            <li><strong className="text-white">Groq</strong> : {t('blogApiIaNextjsLiGroq')}</li>
            <li><strong className="text-white">Anthropic</strong> : {t('blogApiIaNextjsLiAnthropic')}</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installation du SDK NeuraAPI
npm install @neuraapi/sdk

# Variables d'environnement (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2Step2')}</h2>
          <p>
            {t('blogApiIaNextjsPStep2')} <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> {t('blogApiIaNextjsPStep2b')}
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/neura.ts
import { NeuraAPI } from '@neuraapi/sdk'

const neurapi = new NeuraAPI({
  apiKey: process.env.NEURAPI_KEY!,
})

export default neurapi`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2Step3')}</h2>
          <p>
            {t('blogApiIaNextjsPStep3')}
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'fr' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'Le prompt doit contenir au moins 10 caractères' },
      { status: 400 }
    )
  }

  try {
    const result = await neurapi.generate({
      prompt,
      language,
      maxTokens: 2048,
    })

    return NextResponse.json({
      content: result.text,
      tokensUsed: result.usage.totalTokens,
      model: result.model,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la génération' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2OtherEndpoints')}</h2>
          <p>
            {t('blogApiIaNextjsPOtherEndpoints')}
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Optimisation SEO
const seoResult = await neurapi.seo({
  url: 'https://monsite.com/page',
  keywords: ['next.js', 'saaS', 'template'],
})

// Génération de code
const codeResult = await neurapi.code({
  prompt: 'Créer un composant React pour afficher un tableau',
  language: 'typescript',
})

// Analyse de sentiment
const sentimentResult = await neurapi.sentiment({
  text: 'Ce produit est incroyable, je le recommande !',
})

// Chatbot contextuel
const chatResult = await neurapi.chat({
  message: 'Comment déployer mon app sur Vercel ?',
  context: 'Vous êtes un assistant technique Next.js',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2BestPractices')}</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">{t('blogApiIaNextjsLiValidateStrong')}</strong> {t('blogApiIaNextjsLiValidate')}</li>
            <li><strong className="text-white">{t('blogApiIaNextjsLiErrorsStrong')}</strong> {t('blogApiIaNextjsLiErrors')}</li>
            <li><strong className="text-white">{t('blogApiIaNextjsLiCacheStrong')}</strong> {t('blogApiIaNextjsLiCache')}</li>
            <li><strong className="text-white">{t('blogApiIaNextjsLiRateStrong')}</strong> {t('blogApiIaNextjsLiRate')}</li>
            <li><strong className="text-white">{t('blogApiIaNextjsLiMonitoringStrong')}</strong> {t('blogApiIaNextjsLiMonitoring')}</li>
            <li><strong className="text-white">{t('blogApiIaNextjsLiCostsStrong')}</strong> {t('blogApiIaNextjsLiCosts')}</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">{t('blogApiIaNextjsCtaTitle')}</h3>
            <p className="text-indigo-200/70 mb-4">
              {t('blogApiIaNextjsCtaDesc')} <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> {t('blogApiIaNextjsCtaDesc2')}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {t('blogViewPricing')}
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogApiIaNextjsH2Conclusion')}</h2>
          <p>
            {t('blogApiIaNextjsPConclusion')} <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">{t('blogApiIaNextjsPConclusionTemplates')}</Link> {t('blogApiIaNextjsPConclusion2')}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedCreerSaas48h')}
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedTemplatesNextjs')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
