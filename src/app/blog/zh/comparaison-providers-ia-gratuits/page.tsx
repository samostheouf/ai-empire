import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "免费AI提供商比较：Groq vs Gemini vs OpenAI",
  description: "面向开发者的免费AI提供商诚实详细比较。性能、价格、限制和使用场景。",
  path: '/blog/zh/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', '免费AI', '比较', 'AI提供商', 'Web开发者', 'AI API'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '免费AI提供商比较：Groq vs Gemini vs OpenAI',
  description: '面向开发者的免费AI提供商诚实比较。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/zh/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: '免费AI提供商比较：Groq vs Gemini vs OpenAI',
    description: '面向开发者的免费AI提供商诚实比较。',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/zh' },
      { name: 'AI提供商比较', path: '/blog/zh/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/zh' }, { name: 'AI提供商比较', href: '/blog/zh/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              比较
            </span>
            <span className="text-sm text-indigo-400">2024年6月20日</span>
            <span className="text-sm text-indigo-400">15分钟阅读</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            免费AI提供商比较：Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/zh/comparaison-providers-ia-gratuits`} title="免费AI提供商比较" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              选择合适的AI提供商对开发者来说是一个关键决策。免费套餐允许无财务风险地进行测试，但每个提供商都有其优势和劣势。以下是基于实际测试的诚实比较。
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">方法论</h3>
              <p className="text-sm text-indigo-300">
                此比较基于2024年12月进行的测试。价格和免费层级限制可能会更改。我们使用相同的提示词测试了每个提供商以比较结果。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">概览</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">标准</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">免费层级</td>
                    <td className="py-3 text-center">有</td>
                    <td className="py-3 text-center">有</td>
                    <td className="py-3 text-center">有限</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">可用模型</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">速度</td>
                    <td className="py-3 text-center text-green-400 font-semibold">非常快</td>
                    <td className="py-3 text-center">快</td>
                    <td className="py-3 text-center">中等</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">质量（平均提示词）</td>
                    <td className="py-3 text-center">好</td>
                    <td className="py-3 text-center text-green-400 font-semibold">非常好</td>
                    <td className="py-3 text-center text-green-400 font-semibold">优秀</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">上下文（token）</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">有</td>
                    <td className="py-3 text-center">有</td>
                    <td className="py-3 text-center">有</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">视觉</td>
                    <td className="py-3 text-center text-red-400">无</td>
                    <td className="py-3 text-center text-green-400">有</td>
                    <td className="py-3 text-center text-green-400">有</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">支持的语言</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — 速度即优势</h2>
            <p>
              Groq以其卓越的速度脱颖而出。响应几乎是即时的，使其成为需要快速反馈的应用程序的理想提供商：聊天机器人、自动补全、实时建议。
            </p>
            <p>
              <strong className="text-white">优势：</strong> 惊人的速度（最高500 token/秒）、OpenAI兼容API、高性能Llama 3.3 70B模型、慷慨的免费层级。
            </p>
            <p>
              <strong className="text-white">劣势：</strong> 无视觉功能、仅限Meta/Mistral模型、在复杂任务上不如GPT-4。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Groq示例（OpenAI兼容API）
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: '你好' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Google的巨人</h2>
            <p>
              Google Gemini提供100万token上下文的免费层级，这是无与伦比的。处理超长文档的能力使其成为数据分析和文档研究的有趣选择。
            </p>
            <p>
              <strong className="text-white">优势：</strong> 百万token上下文、内置视觉、稳健的性能、多语言官方SDK、与Google生态系统的原生集成。
            </p>
            <p>
              <strong className="text-white">劣势：</strong> API有时不稳定、文档有时不完整、延迟高于Groq、function calling不够可靠。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Google Gemini示例
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('解释机器学习')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — 标杆</h2>
            <p>
              OpenAI仍然是响应质量的标杆。GPT-4o是可用的最强大模型，但免费层级非常有限。GPT-4o mini提供了良好的性价比平衡。
            </p>
            <p>
              <strong className="text-white">优势：</strong> 最佳响应质量、成熟生态系统、优秀文档、大型社区、可靠的function calling、视觉和音频。
            </p>
            <p>
              <strong className="text-white">劣势：</strong> 几乎不存在的免费层级、昂贵的GPT-4o、可变延迟、依赖单一提供商。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// OpenAI示例
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: '你好' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">我们的推荐</h2>
            <p>
              没有普遍更好的提供商。选择取决于您的使用场景：
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">速度和成本</h3>
                <p className="text-sm text-indigo-300">Groq无与伦比。响应速度和免费层级使其成为原型和实时应用的理想选择。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">长文档</h3>
                <p className="text-sm text-indigo-300">Gemini凭借100万token上下文是分析超长文档或数据堆的唯一可行选择。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">最高质量</h3>
                <p className="text-sm text-indigo-300">GPT-4o仍然是最好的模型。如果质量是首要且预算允许，它是安全的选择。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">简化一切</h3>
                <p className="text-sm text-indigo-300">NeuraAPI将Groq和OpenAI统一在一个API后面。无需修改代码即可切换提供商。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">结论</h2>
            <p>
              每个提供商都有其位置。Groq主导速度，Gemini在长文档方面表现出色，OpenAI在质量上领先。最务实的方法是从最适合您使用场景的提供商开始，然后随着增长评估是否需要更换。
            </p>
            <p>
              使用NeuraAPI，您无需选择。单一API密钥、访问多个提供商、统一计费。测试各个提供商，找到适合您需求的那一个。
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              试用NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              通过单一API访问Groq和OpenAI。100免费积分。
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                免费开始
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                阅读文档
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}