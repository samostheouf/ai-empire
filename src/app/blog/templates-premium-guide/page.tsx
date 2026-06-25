import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Check, X } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('blogTemplatesPremiumGuideTitle'),
    description: t('blogTemplatesPremiumGuideDescription'),
    path: '/blog/templates-premium-guide',
    type: 'article',
    keywords: [t('blogTemplatesPremiumGuideKw1'), t('blogTemplatesPremiumGuideKw2'), t('blogTemplatesPremiumGuideKw3'), t('blogTemplatesPremiumGuideKw4'), t('blogTemplatesPremiumGuideKw5'), t('blogTemplatesPremiumGuideKw6')],
    publishedTime: '2026-03-05',
    modifiedTime: '2026-06-20',
  })
}

const COMPARISON_FEATURES = [
  'blogTemplatesPremiumGuideFeatureNextjs',
  'blogTemplatesPremiumGuideFeatureTypescript',
  'blogTemplatesPremiumGuideFeatureTailwind',
  'blogTemplatesPremiumGuideFeatureStripe',
  'blogTemplatesPremiumGuideFeatureAuth',
  'blogTemplatesPremiumGuideFeatureDashboard',
  'blogTemplatesPremiumGuideFeatureDocs',
  'blogTemplatesPremiumGuideFeatureUpdates',
  'blogTemplatesPremiumGuideFeatureSupport',
  'blogTemplatesPremiumGuideFeatureSdk',
  'blogTemplatesPremiumGuideFeatureAi',
  'blogTemplatesPremiumGuideFeatureProduction',
]

const COMPARISON = [
  { featureKey: COMPARISON_FEATURES[0], neura: true, themeforest: true, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[1], neura: true, themeforest: false, codecanyon: true },
  { featureKey: COMPARISON_FEATURES[2], neura: true, themeforest: true, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[3], neura: true, themeforest: false, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[4], neura: true, themeforest: false, codecanyon: true },
  { featureKey: COMPARISON_FEATURES[5], neura: true, themeforest: false, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[6], neura: true, themeforest: true, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[7], neura: true, themeforest: false, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[8], neura: true, themeforest: false, codecanyon: true },
  { featureKey: COMPARISON_FEATURES[9], neura: true, themeforest: false, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[10], neura: true, themeforest: false, codecanyon: false },
  { featureKey: COMPARISON_FEATURES[11], neura: true, themeforest: true, codecanyon: false },
]

export default async function BlogTemplatesGuide() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogTemplatesPremiumGuideTitle'),
    description: t('blogTemplatesPremiumGuideSchemaDesc'),
    slug: 'templates-premium-guide',
    datePublished: '2026-03-05',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogTemplatesPremiumGuideBreadcrumb'), path: '/blog/templates-premium-guide' },
    ],
  })

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('blogTemplatesPremiumGuideBackHome')}
        </Link>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {t('blogTemplatesPremiumGuideDate')}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {t('blogTemplatesPremiumGuideReadTime')}</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-8">
          {t('blogTemplatesPremiumGuideH1')}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {t('blogTemplatesPremiumGuideIntro')}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{t('blogTemplatesPremiumGuideH2Criteria')}</h2>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. {t('blogTemplatesPremiumGuideH3Stack')}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('blogTemplatesPremiumGuidePStack')}
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li><strong>{t('blogTemplatesPremiumGuideLiNextjsStrong')}</strong> {t('blogTemplatesPremiumGuideLiNextjs')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiTypescriptStrong')}</strong> {t('blogTemplatesPremiumGuideLiTypescript')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiTailwindStrong')}</strong> {t('blogTemplatesPremiumGuideLiTailwind')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiOrmStrong')}</strong> {t('blogTemplatesPremiumGuideLiOrm')}</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. {t('blogTemplatesPremiumGuideH3Auth')}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('blogTemplatesPremiumGuidePAuth')}
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>{t('blogTemplatesPremiumGuideLiAuth1')}</li>
          <li>{t('blogTemplatesPremiumGuideLiAuth2')}</li>
          <li>{t('blogTemplatesPremiumGuideLiAuth3')}</li>
          <li>{t('blogTemplatesPremiumGuideLiAuth4')}</li>
          <li>{t('blogTemplatesPremiumGuideLiAuth5')}</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. {t('blogTemplatesPremiumGuideH3Billing')}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('blogTemplatesPremiumGuidePBilling')}
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>{t('blogTemplatesPremiumGuideLiBilling1')}</li>
          <li>{t('blogTemplatesPremiumGuideLiBilling2')}</li>
          <li>{t('blogTemplatesPremiumGuideLiBilling3')}</li>
          <li>{t('blogTemplatesPremiumGuideLiBilling4')}</li>
          <li>{t('blogTemplatesPremiumGuideLiBilling5')}</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. {t('blogTemplatesPremiumGuideH3Design')}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('blogTemplatesPremiumGuidePDesign')}
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>{t('blogTemplatesPremiumGuideLiDesign1')}</li>
          <li>{t('blogTemplatesPremiumGuideLiDesign2')}</li>
          <li>{t('blogTemplatesPremiumGuideLiDesign3')}</li>
          <li>{t('blogTemplatesPremiumGuideLiDesign4')}</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{t('blogTemplatesPremiumGuideH2Comparison')}</h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full min-w-[500px] border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">{t('blogTemplatesPremiumGuideTableFeature')}</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-indigo-700 border-b">NeuraAPI</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">ThemeForest</th>
                <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700 border-b">CodeCanyon</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm text-gray-700 border-b">{t(row.featureKey)}</td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.neura ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.themeforest ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                  <td className="py-3 px-4 text-center border-b">
                    {row.codecanyon ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{t('blogTemplatesPremiumGuideH2Templates')}</h2>

        <div className="space-y-6 mb-8">
          <Link href="/templates/neurasaa-kit-complet" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{t('blogTemplatesPremiumGuideNeurasaasName')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('blogTemplatesPremiumGuideNeurasaasDesc')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Stripe', 'Prisma', 'NextAuth', 'Tailwind'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">{t('blogTemplatesPremiumGuideNeurasaasPrice')}</p>
          </Link>

          <Link href="/templates/neuradashboard-admin-panel" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{t('blogTemplatesPremiumGuideNeuradashboardName')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('blogTemplatesPremiumGuideNeuradashboardDesc')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Recharts', 'Prisma', 'shadcn/ui'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">{t('blogTemplatesPremiumGuideNeuradashboardPrice')}</p>
          </Link>

          <Link href="/templates/neuracommerce-ecommerce-ia" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{t('blogTemplatesPremiumGuideNeuracommerceName')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('blogTemplatesPremiumGuideNeuracommerceDesc')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Stripe', 'Prisma', 'OpenAI'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">{t('blogTemplatesPremiumGuideNeuracommercePrice')}</p>
          </Link>

          <Link href="/templates/neuralanding-kit-landing" className="block p-6 border border-gray-200 rounded-xl hover:border-indigo-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-semibold text-gray-900">{t('blogTemplatesPremiumGuideNeuralandingName')}</h3>
            <p className="mt-2 text-sm text-gray-600">{t('blogTemplatesPremiumGuideNeuralandingDesc')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Next.js 14', 'Framer Motion', 'Tailwind'].map(t => (
                <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-indigo-600">{t('blogTemplatesPremiumGuideNeuralandingPrice')}</p>
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{t('blogTemplatesPremiumGuideH2Errors')}</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
          <li><strong>{t('blogTemplatesPremiumGuideLiError1Strong')}</strong> {t('blogTemplatesPremiumGuideLiError1')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiError2Strong')}</strong> {t('blogTemplatesPremiumGuideLiError2')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiError3Strong')}</strong> {t('blogTemplatesPremiumGuideLiError3')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiError4Strong')}</strong> {t('blogTemplatesPremiumGuideLiError4')}</li>
          <li><strong>{t('blogTemplatesPremiumGuideLiError5Strong')}</strong> {t('blogTemplatesPremiumGuideLiError5')}</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">{t('blogTemplatesPremiumGuideH2GettingStarted')}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {t('blogTemplatesPremiumGuidePGettingStarted')}
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-8">
          <li>{t('blogTemplatesPremiumGuideLiStart1')} <Link href="/templates" className="text-indigo-600 underline">{t('blogTemplatesPremiumGuideLiStart1Link')}</Link></li>
          <li>{t('blogTemplatesPremiumGuideLiStart2')}</li>
          <li>{t('blogTemplatesPremiumGuideLiStart3')}</li>
          <li>{t('blogTemplatesPremiumGuideLiStart4')}</li>
          <li>{t('blogTemplatesPremiumGuideLiStart5')}</li>
          <li>{t('blogTemplatesPremiumGuideLiStart6')}</li>
          <li>{t('blogTemplatesPremiumGuideLiStart7')} <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">vercel --prod</code></li>
        </ol>

        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">{t('blogTemplatesPremiumGuideCtaTitle')}</h3>
          <p className="text-indigo-700 mb-4">
            {t('blogTemplatesPremiumGuideCtaDesc')}
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            {t('blogTemplatesPremiumGuideCtaLink')}
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/api-ia-nextjs" className="text-indigo-600 hover:text-indigo-800">
                {t('blogRelatedApiIaNextjs')}
              </Link>
            </li>
            <li>
              <Link href="/blog/creer-saas-48h" className="text-indigo-600 hover:text-indigo-800">
                {t('blogRelatedCreerSaas48h')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
