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
    title: t('blogAiAgentsLaunchTitle'),
    description: t('blogAiAgentsLaunchDescription'),
    path: '/blog/ai-agents-launch',
    type: 'article',
    keywords: ['ai agents', 'autonomous workforce', 'ai automation', 'neuraapi agents', 'business automation', 'ai agents launch', 'autonomous ai', 'ai workforce'],
    publishedTime: '2026-06-27',
    modifiedTime: '2026-06-27',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function AiAgentsLaunchPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogAiAgentsLaunchTitle'),
    description: t('blogAiAgentsLaunchSchemaDesc'),
    slug: 'ai-agents-launch',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogAiAgentsLaunchBreadcrumb'), path: '/blog/ai-agents-launch' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogAiAgentsLaunchBreadcrumb'), href: '/blog/ai-agents-launch' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> {t('blogAiAgentsLaunchTag')}
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> {t('blogAiAgentsLaunchDate')}</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> {t('blogAiAgentsLaunchReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            {t('blogAiAgentsLaunchH1')}
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ai-agents-launch`} title={t('blogAiAgentsLaunchShareTitle')} />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            {t('blogAiAgentsLaunchIntro')}
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">{t('blogAiAgentsLaunchKeyBenefitsTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>{t('blogAiAgentsLaunchBenefit1')}</li>
              <li>{t('blogAiAgentsLaunchBenefit2')}</li>
              <li>{t('blogAiAgentsLaunchBenefit3')}</li>
              <li>{t('blogAiAgentsLaunchBenefit4')}</li>
              <li>{t('blogAiAgentsLaunchBenefit5')}</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2What')}</h2>
          <p>
            {t('blogAiAgentsLaunchPWhatA')}
          </p>
          <p>
            {t('blogAiAgentsLaunchPWhatB')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2How')}</h2>
          <p>
            {t('blogAiAgentsLaunchPHowA')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

// Deploy a customer support agent
const agent = await ai.agents.create({
  name: 'Customer Support Agent',
  type: 'customer-support',
  tools: ['email', 'slack', 'crm'],
  knowledge: './docs/faq.md',
  rules: {
    escalationThreshold: 0.7,
    maxResponseTime: '30s',
    tone: 'professional',
  },
})

// Agent starts working immediately
await agent.deploy()`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2Features')}</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiAgentsLaunchFeature1Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiAgentsLaunchFeature1Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiAgentsLaunchFeature2Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiAgentsLaunchFeature2Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiAgentsLaunchFeature3Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiAgentsLaunchFeature3Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogAiAgentsLaunchFeature4Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogAiAgentsLaunchFeature4Desc')}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2Pricing')}</h2>
          <p>
            {t('blogAiAgentsLaunchPPricingA')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5 text-center">
              <h3 className="text-white font-semibold">{t('blogAiAgentsLaunchPlan1Name')}</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">{t('blogAiAgentsLaunchPlan1Price')}</p>
              <p className="text-sm text-indigo-300 mt-1">{t('blogAiAgentsLaunchPlan1Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-600 bg-indigo-900/40 p-5 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">{t('blogAiAgentsLaunchPopular')}</span>
              <h3 className="text-white font-semibold">{t('blogAiAgentsLaunchPlan2Name')}</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">{t('blogAiAgentsLaunchPlan2Price')}</p>
              <p className="text-sm text-indigo-300 mt-1">{t('blogAiAgentsLaunchPlan2Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5 text-center">
              <h3 className="text-white font-semibold">{t('blogAiAgentsLaunchPlan3Name')}</h3>
              <p className="text-2xl font-bold text-indigo-400 mt-2">{t('blogAiAgentsLaunchPlan3Price')}</p>
              <p className="text-sm text-indigo-300 mt-1">{t('blogAiAgentsLaunchPlan3Desc')}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2Results')}</h2>
          <p>
            {t('blogAiAgentsLaunchPResultsA')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">{t('blogAiAgentsLaunchResult1Strong')}</strong> {t('blogAiAgentsLaunchResult1')}</li>
            <li><strong className="text-white">{t('blogAiAgentsLaunchResult2Strong')}</strong> {t('blogAiAgentsLaunchResult2')}</li>
            <li><strong className="text-white">{t('blogAiAgentsLaunchResult3Strong')}</strong> {t('blogAiAgentsLaunchResult3')}</li>
            <li><strong className="text-white">{t('blogAiAgentsLaunchResult4Strong')}</strong> {t('blogAiAgentsLaunchResult4')}</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogAiAgentsLaunchH2Conclusion')}</h2>
          <p>
            {t('blogAiAgentsLaunchPConclusion1')}
          </p>
          <p>
            {t('blogAiAgentsLaunchPConclusion2')}
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            {t('blogAiAgentsLaunchCtaTitle')}
          </h3>
          <p className="mt-3 text-indigo-200">
            {t('blogAiAgentsLaunchCtaDesc')}
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              href="/agents"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              {t('blogAiAgentsLaunchCtaPrimary')}
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              {t('blogAiAgentsLaunchCtaSecondary')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedAiApiIntegration')}
              </Link>
            </li>
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedNextjsSaasStarter')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
