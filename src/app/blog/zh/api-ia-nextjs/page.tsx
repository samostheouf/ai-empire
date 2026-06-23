import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "如何在Next.js中集成AI API（完整指南2026）",
  description: "实用教程：将AI API（GPT、Groq、NeuraAPI）集成到您的Next.js 14项目中。代码示例、TypeScript SDK、最佳实践。",
  path: '/blog/zh/api-ia-nextjs',
  type: 'article',
  keywords: ['AI API', 'Next.js', 'TypeScript SDK', 'AI集成', 'Next.js模板', 'Web开发者'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '如何在Next.js中集成AI API（完整指南2026）',
  description: '实用教程：使用TypeScript SDK将AI API集成到Next.js 14项目中。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/zh/api-ia-nextjs',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogApiIaNextjs() {
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: '博客', href: '/blog/zh' }, { name: 'AI API Next.js', href: '/blog/zh/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> 教程
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 2026年1月15日</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8分钟阅读</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            如何在您的Next.js项目中集成AI API
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/zh/api-ia-nextjs`} title="如何在Next.js中集成AI API" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            人工智能不再仅限于大公司。如今，
            任何开发者都可以将AI功能——文本生成、代码分析、
            SEO优化——集成到他们的Next.js应用程序中，只需几分钟。在本指南中，我们将看到
            如何将AI API连接到Next.js 14 App Router项目，从初始设置到生产部署。
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">为什么选择Next.js用于AI应用？</h2>
          <p>
            Next.js 14为AI应用提供了具体的优势：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>：API调用在服务器端进行，API密钥永远不会暴露给客户端</li>
            <li><strong className="text-white">Route Handlers</strong>：无需单独的Express服务器即可创建原生API端点</li>
            <li><strong className="text-white">Streaming</strong>：使用<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code>实时显示AI响应</li>
            <li><strong className="text-white">Edge Runtime</strong>：在边缘执行AI调用以获得最小延迟</li>
            <li><strong className="text-white">Middleware</strong>：保护您的路由并在每个请求前管理身份验证</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">步骤1：选择并安装SDK</h2>
          <p>
            第一步是选择AI API提供商并安装其SDK。以下是2026年的主要选项：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>：具有8个以上端点的统一API，原生TypeScript SDK，提供免费计划</li>
            <li><strong className="text-white">OpenAI</strong>：历史领导者，GPT-4o和GPT-4.1模型</li>
            <li><strong className="text-white">Groq</strong>：在开源模型（Llama、Mixtral）上的超快推理</li>
            <li><strong className="text-white">Anthropic</strong>：Claude，专精于长文本分析</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# 安装NeuraAPI SDK
npm install @neuraapi/sdk

# 环境变量 (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">步骤2：配置服务器端客户端</h2>
          <p>
            创建<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code>文件来初始化客户端：
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

          <h2 className="text-2xl font-bold text-white mt-12">步骤3：创建API端点</h2>
          <p>
            使用Next.js Route Handlers创建接收客户端请求的端点：
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'zh' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: '提示词必须至少包含10个字符' },
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
      { error: '生成过程中发生错误' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">使用其他AI端点</h2>
          <p>
            NeuraAPI提供8个以上的AI端点。以下是如何使用一些最有用的端点：
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// SEO优化
const seoResult = await neurapi.seo({
  url: 'https://mysite.com/page',
  keywords: ['next.js', 'saas', 'template'],
})

// 代码生成
const codeResult = await neurapi.code({
  prompt: '创建一个React组件来显示表格',
  language: 'typescript',
})

// 情感分析
const sentimentResult = await neurapi.sentiment({
  text: '这个产品太棒了，我推荐它！',
})

// 上下文聊天机器人
const chatResult = await neurapi.chat({
  message: '如何在Vercel上部署我的应用？',
  context: '你是Next.js技术助手',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">生产环境最佳实践</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">始终验证输入</strong>：使用Zod在服务器端验证提示词</li>
            <li><strong className="text-white">处理错误</strong>：实现指数退避重试</li>
            <li><strong className="text-white">缓存响应</strong>：对相同提示词使用Redis或Next.js缓存</li>
            <li><strong className="text-white">速率限制</strong>：使用中间件限制每个用户的请求数量</li>
            <li><strong className="text-white">监控</strong>：使用内置分析跟踪使用情况</li>
            <li><strong className="text-white">成本</strong>：监控令牌消耗以遵守预算</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">需要一个起点？</h3>
            <p className="text-indigo-200/70 mb-4">
              我们的模板<Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link>已经集成了
              身份验证、仪表板和计费功能。您只需添加AI逻辑即可。
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              查看价格 →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">结论</h2>
          <p>
            将AI API集成到Next.js中已成为一个简单且结构化的过程。通过正确的SDK、
            几个配置文件和Route Handlers，您可以在几个小时内为用户提供AI功能。
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">NeuraAPI的高级模板</Link>更进一步，
            为您提供生产就绪的基础。
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">相关文章</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                使用Next.js和Stripe在48小时内创建SaaS
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                高级Next.js模板：如何选择正确的模板
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
