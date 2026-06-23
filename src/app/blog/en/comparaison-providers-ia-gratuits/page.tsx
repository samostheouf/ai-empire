import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comparison of Free AI Providers: Groq vs Gemini vs OpenAI",
  description: "Honest and detailed comparison of free AI providers for developers. Performance, pricing, limits and use cases.",
  path: '/blog/en/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'free AI', 'comparison', 'AI providers', 'web developer', 'AI API'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Comparison of Free AI Providers: Groq vs Gemini vs OpenAI',
  description: 'Honest comparison of free AI providers for developers.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/en/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comparison of Free AI Providers: Groq vs Gemini vs OpenAI',
    description: 'Honest comparison of free AI providers for developers.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/en' },
      { name: 'AI Providers Comparison', path: '/blog/en/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/en' }, { name: 'AI Providers Comparison', href: '/blog/en/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Comparison
            </span>
            <span className="text-sm text-indigo-400">June 20, 2024</span>
            <span className="text-sm text-indigo-400">15 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comparison of Free AI Providers: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/en/comparaison-providers-ia-gratuits`} title="Comparison of Free AI Providers" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Choosing the right AI provider is a critical decision for developers. Free offers allow testing without financial risk, but each provider has its strengths and weaknesses. Here is an honest comparison based on real tests.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Methodology</h3>
              <p className="text-sm text-indigo-300">
                This comparison is based on tests conducted in December 2024. Pricing and free tier limits may change. We tested each provider with the same prompts to compare results.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Overview</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Criterion</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Free tier</td>
                    <td className="py-3 text-center">Yes</td>
                    <td className="py-3 text-center">Yes</td>
                    <td className="py-3 text-center">Limited</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Available models</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Speed</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Very fast</td>
                    <td className="py-3 text-center">Fast</td>
                    <td className="py-3 text-center">Average</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Quality (average prompt)</td>
                    <td className="py-3 text-center">Good</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Very good</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Excellent</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Context (tokens)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">Yes</td>
                    <td className="py-3 text-center">Yes</td>
                    <td className="py-3 text-center">Yes</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Vision</td>
                    <td className="py-3 text-center text-red-400">No</td>
                    <td className="py-3 text-center text-green-400">Yes</td>
                    <td className="py-3 text-center text-green-400">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Supported languages</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — Speed as an advantage</h2>
            <p>
              Groq stands out with its exceptional speed. Responses are near-instantaneous, making it the ideal provider for applications requiring fast feedback: chatbots, autocomplete, real-time suggestions.
            </p>
            <p>
              <strong className="text-white">Strengths:</strong> Impressive speed (up to 500 tokens/second), OpenAI-compatible API, high-performing Llama 3.3 70B model, generous free tier.
            </p>
            <p>
              <strong className="text-white">Weaknesses:</strong> No vision, limited to Meta/Mistral models, less performant than GPT-4 on complex tasks.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Example with Groq (OpenAI-compatible API)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Hello' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Google's giant</h2>
            <p>
              Google Gemini offers a free tier with a context of 1 million tokens, which is unmatched. The ability to process very long documents makes it an interesting choice for data analysis and document research.
            </p>
            <p>
              <strong className="text-white">Strengths:</strong> Million-token context, built-in vision, solid performance, official SDKs for multiple languages, native integration with the Google ecosystem.
            </p>
            <p>
              <strong className="text-white">Weaknesses:</strong> Sometimes unstable API, sometimes incomplete documentation, higher latency than Groq, less reliable function calling.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Example with Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Explain machine learning')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — The benchmark</h2>
            <p>
              OpenAI remains the benchmark for response quality. GPT-4o is the most capable model available, but the free tier is very limited. GPT-4o mini offers a good quality/price balance.
            </p>
            <p>
              <strong className="text-white">Strengths:</strong> Best response quality, mature ecosystem, excellent documentation, large community, reliable function calling, vision and audio.
            </p>
            <p>
              <strong className="text-white">Weaknesses:</strong> Almost non-existent free tier, expensive GPT-4o, variable latency, dependency on a single provider.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Example with OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Hello' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Our recommendation</h2>
            <p>
              There is no universally better provider. The choice depends on your use case:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">For speed and cost</h3>
                <p className="text-sm text-indigo-300">Groq is unbeatable. Response speed and free tier make it the ideal choice for prototypes and real-time applications.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">For long documents</h3>
                <p className="text-sm text-indigo-300">Gemini with its 1M token context is the only viable choice for analyzing very long documents or data stacks.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">For maximum quality</h3>
                <p className="text-sm text-indigo-300">GPT-4o remains the best model. If quality is paramount and budget allows, it's the safe choice.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">To simplify everything</h3>
                <p className="text-sm text-indigo-300">NeuraAPI unifies Groq and OpenAI behind a single API. Switch providers without modifying your code.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              Each provider has its place. Groq dominates speed, Gemini excels with long documents, OpenAI leads in quality. The most pragmatic approach is to start with the provider best suited to your use case, then evaluate whether a change is necessary as you grow.
            </p>
            <p>
              With NeuraAPI, you don't have to choose. A single API key, access to multiple providers, unified billing. Test different providers and find the one that fits your needs.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Try NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Access Groq and OpenAI via a single API. 100 free credits.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Get started for free
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}