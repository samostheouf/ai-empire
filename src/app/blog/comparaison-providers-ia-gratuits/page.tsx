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
    title: t('blogComparaisonProvidersTitle'),
    description: t('blogComparaisonProvidersDescription'),
    path: '/blog/comparaison-providers-ia-gratuits',
    type: 'article',
    keywords: [t('blogComparaisonProvidersKw1'), t('blogComparaisonProvidersKw2'), t('blogComparaisonProvidersKw3'), t('blogComparaisonProvidersKw4'), t('blogComparaisonProvidersKw5'), t('blogComparaisonProvidersKw6'), t('blogComparaisonProvidersKw7'), t('blogComparaisonProvidersKw8')],
    publishedTime: '2024-06-20',
    modifiedTime: '2024-12-01',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function ComparaisonProvidersIaPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogComparaisonProvidersTitle'),
    description: t('blogComparaisonProvidersSchemaDesc'),
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogComparaisonProvidersBreadcrumb'), path: '/blog/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogComparaisonProvidersBreadcrumb'), href: '/blog/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              {t('blogComparaisonProvidersTag')}
            </span>
            <span className="text-sm text-indigo-400">{t('blogComparaisonProvidersDate')}</span>
            <span className="text-sm text-indigo-400">{t('blogComparaisonProvidersReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('blogComparaisonProvidersH1')}
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/comparaison-providers-ia-gratuits`} title={t('blogComparaisonProvidersShareTitle')} />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              {t('blogComparaisonProvidersIntro')}
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">{t('blogComparaisonProvidersMethodTitle')}</h3>
              <p className="text-sm text-indigo-300">
                {t('blogComparaisonProvidersMethodDesc')}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Overview')}</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">{t('blogComparaisonProvidersTableCriteria')}</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowFreeTier')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowYes')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowYes')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowLimited')}</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowModels')}</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowSpeed')}</td>
                    <td className="py-3 text-center text-green-400 font-semibold">{t('blogComparaisonProvidersRowVeryFast')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowFast')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowAverage')}</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowQuality')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowGood')}</td>
                    <td className="py-3 text-center text-green-400 font-semibold">{t('blogComparaisonProvidersRowVeryGood')}</td>
                    <td className="py-3 text-center text-green-400 font-semibold">{t('blogComparaisonProvidersRowExcellent')}</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowContext')}</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowFunctionCalling')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowYes')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowYes')}</td>
                    <td className="py-3 text-center">{t('blogComparaisonProvidersRowYes')}</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowVision')}</td>
                    <td className="py-3 text-center text-red-400">{t('blogComparaisonProvidersRowNo')}</td>
                    <td className="py-3 text-center text-green-400">{t('blogComparaisonProvidersRowYes')}</td>
                    <td className="py-3 text-center text-green-400">{t('blogComparaisonProvidersRowYes')}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">{t('blogComparaisonProvidersRowLanguages')}</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Groq')}</h2>
            <p>
              {t('blogComparaisonProvidersPGroq1')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongPros')}</strong> {t('blogComparaisonProvidersPGroqPros')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongCons')}</strong> {t('blogComparaisonProvidersPGroqCons')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec Groq (API compatible OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Bonjour' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Gemini')}</h2>
            <p>
              {t('blogComparaisonProvidersPGemini1')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongPros')}</strong> {t('blogComparaisonProvidersPGeminiPros')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongCons')}</strong> {t('blogComparaisonProvidersPGeminiCons')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Explique le machine learning')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Openai')}</h2>
            <p>
              {t('blogComparaisonProvidersPOpenai1')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongPros')}</strong> {t('blogComparaisonProvidersPOpenaiPros')}
            </p>
            <p>
              <strong className="text-white">{t('blogComparaisonProvidersStrongCons')}</strong> {t('blogComparaisonProvidersPOpenaiCons')}
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemple avec OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Bonjour' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Recommendation')}</h2>
            <p>
              {t('blogComparaisonProvidersPRecommendation')}
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">{t('blogComparaisonProvidersRecSpeedTitle')}</h3>
                <p className="text-sm text-indigo-300">{t('blogComparaisonProvidersRecSpeedDesc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">{t('blogComparaisonProvidersRecLongDocsTitle')}</h3>
                <p className="text-sm text-indigo-300">{t('blogComparaisonProvidersRecLongDocsDesc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">{t('blogComparaisonProvidersRecQualityTitle')}</h3>
                <p className="text-sm text-indigo-300">{t('blogComparaisonProvidersRecQualityDesc')}</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">{t('blogComparaisonProvidersRecSimplifyTitle')}</h3>
                <p className="text-sm text-indigo-300">{t('blogComparaisonProvidersRecSimplifyDesc')}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">{t('blogComparaisonProvidersH2Conclusion')}</h2>
            <p>
              {t('blogComparaisonProvidersPConclusion1')}
            </p>
            <p>
              {t('blogComparaisonProvidersPConclusion2')}
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {t('blogComparaisonProvidersCtaTitle')}
            </h3>
            <p className="mt-3 text-indigo-200">
              {t('blogComparaisonProvidersCtaDesc')}
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
