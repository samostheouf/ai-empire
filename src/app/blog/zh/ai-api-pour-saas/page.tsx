import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "如何在 30 分钟内将 AI 集成到您的 SaaS",
  description: "实用教程：在 30 分钟内将 AI API 集成到您的 Next.js SaaS。每个步骤都提供可复制的代码、最佳实践、部署。",
  path: '/blog/zh/ai-api-pour-saas',
  type: 'article',
  keywords: ['AI API', 'SaaS 模板', '人工智能', 'API 集成', 'Next.js', '教程', 'next.js 模板', 'Web 开发者'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: '如何在 30 分钟内将 AI 集成到您的 SaaS',
    description: '实用教程：在 30 分钟内将 AI API 集成到您的 Next.js SaaS。',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: '博客', path: '/blog' },
      { name: '30 分钟集成 AI', path: '/blog/zh/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: '博客', href: '/blog' }, { name: 'AI 30 分钟', href: '/blog/zh/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              教程
            </span>
            <span className="text-sm text-indigo-400">2024 年 6 月 15 日</span>
            <span className="text-sm text-indigo-400">阅读 12 分钟</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            如何在 30 分钟内将 AI 集成到您的 SaaS
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/zh/ai-api-pour-saas`} title="如何在 30 分钟内将 AI 集成到您的 SaaS" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              将人工智能添加到您的 SaaS 不再仅限于大公司。使用正确的 API，您可以在几分钟内集成文本生成、自动化 SEO 和代码生成。本教程将准确展示如何操作，提供可复制的代码。
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">前提条件</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Next.js 14+ 项目（App Router）</li>
                <li>NeuraAPI 密钥（在 /register 免费获取）</li>
                <li>已安装 Node.js 18+</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">步骤 1 — 创建账户并获取 API 密钥</h2>
            <p>
              前往 <a href="/register" className="text-indigo-400 underline">/register</a> 创建免费账户。您将立即收到一个以 <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code> 开头的 API 密钥。每月提供 100 个免费积分。
            </p>
            <p>
              请妥善保管此密钥。它将在所有 API 调用中使用。
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">步骤 2 — 安装 SDK</h2>
            <p>
              TypeScript SDK 使集成变得极其简单。单一依赖，零配置。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">步骤 3 — 创建服务端 AI 服务</h2>
            <p>
              创建一个 <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> 文件来封装 API 调用。这是集成的核心点。
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

            <h2 className="text-2xl font-bold text-white mt-12">步骤 4 — 创建 Next.js API 路由</h2>
            <p>
              在您的 SaaS 中公开一个 API 路由。此路由将被前端调用以生成内容。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '未授权' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: '需要提示词' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: '生成错误' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">步骤 5 — 从前端调用</h2>
            <p>
              在客户端，使用简单的 fetch 调用您的 API 路由。以下是一个完整的 React 组件。
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
        placeholder="描述您想要生成的内容..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? '生成中...' : '生成'}
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

            <h2 className="text-2xl font-bold text-white mt-12">步骤 6 — 添加速率限制</h2>
            <p>
              保护您的 API 免受滥用。以下是一个简单的中间件，限制每个用户的调用次数。
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

// 在 API 路由中使用：
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: '请求过多' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">最佳实践</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">切勿在客户端暴露 API 密钥</h3>
                <p className="text-sm text-indigo-300">始终使用服务器代理（Next.js API 路由）进行 AI API 调用。API 密钥绝不能出现在发送到浏览器的 JavaScript 代码中。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">验证用户输入</h3>
                <p className="text-sm text-indigo-300">始终清理和验证用户发送的提示词。限制长度，过滤危险字符，使用 zod 或 joi 进行验证。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">缓存响应</h3>
                <p className="text-sm text-indigo-300">对于类似的提示词，缓存 AI 响应。具有 24 小时 TTL 的 Redis 缓存可在不影响质量的情况下大幅降低成本。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">监控成本</h3>
                <p className="text-sm text-indigo-300">跟踪每个用户和每个功能的积分消耗。如果未优化，AI API 可能会很昂贵。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">结论</h2>
            <p>
              通过 6 个简单步骤，您已将 AI 集成到 SaaS 中。内容生成、自动化 SEO 和代码生成现在对您的用户来说都是可访问的。全部在 30 分钟内完成。
            </p>
            <p>
              NeuraAPI 简化了此集成：单一 API 密钥、TypeScript SDK、文档化的端点。您专注于产品，我们管理 AI 基础设施。
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              准备好集成 AI 了吗？
            </h3>
            <p className="mt-3 text-indigo-200">
              获取您的免费 API 密钥，几分钟内开始构建。
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
