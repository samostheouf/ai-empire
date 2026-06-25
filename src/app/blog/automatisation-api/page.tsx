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
    title: t('blogAutomatisationApiTitle'),
    description: t('blogAutomatisationApiDescription'),
    path: '/blog/automatisation-api',
    type: 'article',
    keywords: [t('blogAutomatisationApiKw1'), t('blogAutomatisationApiKw2'), t('blogAutomatisationApiKw3'), t('blogAutomatisationApiKw4'), t('blogAutomatisationApiKw5'), t('blogAutomatisationApiKw6')],
    publishedTime: '2024-06-05',
    modifiedTime: '2024-06-05',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function AutomatisationApiPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogAutomatisationApiTitle'),
    description: t('blogAutomatisationApiSchemaDesc'),
    slug: 'automatisation-api',
    datePublished: '2024-06-05',
    dateModified: '2024-06-05',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogAutomatisationApiBreadcrumb'), path: '/blog/automatisation-api' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogAutomatisationApiBreadcrumb'), href: '/blog/automatisation-api' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              {t('blogAutomatisationApiTag')}
            </span>
            <span className="text-sm text-indigo-400">{t('blogAutomatisationApiDate')}</span>
            <span className="text-sm text-indigo-400">{t('blogAutomatisationApiReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('blogAutomatisationApiH1')}
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/automatisation-api`} title={t('blogAutomatisationApiShareTitle')} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              {t('blogAutomatisationApiIntro')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Content')}</h2>
            <p>
              {t('blogAutomatisationApiPContent1')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongApplications')}</strong> {t('blogAutomatisationApiPContentApps')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongImplementation')}</strong> {t('blogAutomatisationApiPContentImpl')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongRoi')}</strong> {t('blogAutomatisationApiPContentRoi')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Support')}</h2>
            <p>
              {t('blogAutomatisationApiPSupport1')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongApplications')}</strong> {t('blogAutomatisationApiPSupportApps')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongImplementation')}</strong> {t('blogAutomatisationApiPSupportImpl')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongRoi')}</strong> {t('blogAutomatisationApiPSupportRoi')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Analysis')}</h2>
            <p>
              {t('blogAutomatisationApiPAnalysis1')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongApplications')}</strong> {t('blogAutomatisationApiPAnalysisApps')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongImplementation')}</strong> {t('blogAutomatisationApiPAnalysisImpl')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongRoi')}</strong> {t('blogAutomatisationApiPAnalysisRoi')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Workflows')}</h2>
            <p>
              {t('blogAutomatisationApiPWorkflows1')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongApplications')}</strong> {t('blogAutomatisationApiPWorkflowsApps')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongImplementation')}</strong> {t('blogAutomatisationApiPWorkflowsImpl')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongRoi')}</strong> {t('blogAutomatisationApiPWorkflowsRoi')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Personalization')}</h2>
            <p>
              {t('blogAutomatisationApiPPersonalization1')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongApplications')}</strong> {t('blogAutomatisationApiPPersonalizationApps')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongImplementation')}</strong> {t('blogAutomatisationApiPPersonalizationImpl')}
            </p>
            <p>
              <strong className="text-white">{t('blogAutomatisationApiStrongRoi')}</strong> {t('blogAutomatisationApiPPersonalizationRoi')}
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogAutomatisationApiH2Conclusion')}</h2>
            <p>
              {t('blogAutomatisationApiPConclusion1')}
            </p>
            <p>
              {t('blogAutomatisationApiPConclusion2')}
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {t('blogAutomatisationApiCtaTitle')}
            </h3>
            <p className="mt-3 text-indigo-200">
              {t('blogAutomatisationApiCtaDesc')}
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
