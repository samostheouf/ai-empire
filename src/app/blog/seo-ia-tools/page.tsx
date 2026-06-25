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
    title: t('blogSeoIaToolsTitle'),
    description: t('blogSeoIaToolsDescription'),
    path: '/blog/seo-ia-tools',
    type: 'article',
    keywords: [t('blogSeoIaToolsKw1'), t('blogSeoIaToolsKw2'), t('blogSeoIaToolsKw3'), t('blogSeoIaToolsKw4'), t('blogSeoIaToolsKw5'), t('blogSeoIaToolsKw6'), t('blogSeoIaToolsKw7')],
    publishedTime: '2024-06-01',
    modifiedTime: '2024-06-01',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function SeoIaToolsPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogSeoIaToolsTitle'),
    description: t('blogSeoIaToolsSchemaDesc'),
    slug: 'seo-ia-tools',
    datePublished: '2024-06-01',
    dateModified: '2024-06-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogSeoIaToolsBreadcrumb'), path: '/blog/seo-ia-tools' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogSeoIaToolsBreadcrumb'), href: '/blog/seo-ia-tools' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              SEO
            </span>
            <span className="text-sm text-indigo-400">{t('blogSeoIaToolsDate')}</span>
            <span className="text-sm text-indigo-400">{t('blogSeoIaToolsReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('blogSeoIaToolsH1')}
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/seo-ia-tools`} title={t('blogSeoIaToolsShareTitle')} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              {t('blogSeoIaToolsIntro')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Revolution')}</h2>
            <p>
              {t('blogSeoIaToolsPRevolution1')}
            </p>
            <p>
              {t('blogSeoIaToolsPRevolution2')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Keywords')}</h2>
            <p>
              {t('blogSeoIaToolsPKeywords1')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongTechniques')}</strong> {t('blogSeoIaToolsPTechniques')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongTools')}</strong> {t('blogSeoIaToolsPTools')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Content')}</h2>
            <p>
              {t('blogSeoIaToolsPContent1')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongStrategy')}</strong> {t('blogSeoIaToolsPStrategy')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongRealtime')}</strong> {t('blogSeoIaToolsPRealtime')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongScale')}</strong> {t('blogSeoIaToolsPScale')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Technical')}</h2>
            <p>
              {t('blogSeoIaToolsPTechnical1')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongAudit')}</strong> {t('blogSeoIaToolsPAudit')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongSchema')}</strong> {t('blogSeoIaToolsPSchema')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongPerformance')}</strong> {t('blogSeoIaToolsPPerformance')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Competition')}</h2>
            <p>
              {t('blogSeoIaToolsPCompetition1')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongContentAnalysis')}</strong> {t('blogSeoIaToolsPContentAnalysis')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongBacklinks')}</strong> {t('blogSeoIaToolsPBacklinks')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongTechStrategy')}</strong> {t('blogSeoIaToolsPTechStrategy')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Measure')}</h2>
            <p>
              {t('blogSeoIaToolsPMeasure1')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongPrediction')}</strong> {t('blogSeoIaToolsPPrediction')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongAnomaly')}</strong> {t('blogSeoIaToolsPAnomaly')}
            </p>
            <p>
              <strong className="text-white">{t('blogSeoIaToolsStrongReports')}</strong> {t('blogSeoIaToolsPReports')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogSeoIaToolsH2Conclusion')}</h2>
            <p>
              {t('blogSeoIaToolsPConclusion1')}
            </p>
            <p>
              {t('blogSeoIaToolsPConclusion2')}
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {t('blogSeoIaToolsCtaTitle')}
            </h3>
            <p className="mt-3 text-indigo-200">
              {t('blogSeoIaToolsCtaDesc')}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                {t('blogCtaStartFree')}
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                {t('blogViewPricing')}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
