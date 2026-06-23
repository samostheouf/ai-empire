import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "How to Integrate AI into Your SaaS in 30 Minutes",
  description: "Practical tutorial: integrate an AI API into your Next.js SaaS in 30 minutes. Copyable code at every step, best practices, deployment.",
  path: '/blog/en/ai-api-pour-saas',
  type: 'article',
  keywords: ['AI API', 'SaaS template', 'artificial intelligence', 'API integration', 'Next.js', 'tutorial', 'next.js template', 'web developer'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'How to Integrate AI into Your SaaS in 30 Minutes',
    description: 'Practical tutorial: integrate an AI API into your Next.js SaaS in 30 minutes.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Integrate AI in 30 min', path: '/blog/en/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'AI in 30 min', href: '/blog/en/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Tutorial
            </span>
            <span className="text-sm text-indigo-400">June 15, 2024</span>
            <span className="text-sm text-indigo-400">12 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            How to Integrate AI into Your SaaS in 30 Minutes
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/en/ai-api-pour-saas`} title="How to Integrate AI into Your SaaS in 30 Minutes" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Adding artificial intelligence to your SaaS is no longer reserved for big companies. With the right APIs, you can integrate text generation, automated SEO, and code generation in just a few minutes. This tutorial shows you exactly how to do it, with copyable code.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>A Next.js 14+ project (App Router)</li>
                <li>A NeuraAPI key (free on /register)</li>
                <li>Node.js 18+ installed</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Step 1 — Create your account and get an API key</h2>
            <p>
              Go to <a href="/register" className="text-indigo-400 underline">/register</a> and create a free account. You immediately receive an API key starting with <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>. 100 monthly credits are offered.
            </p>
            <p>
              Keep this key safe. It will be used in all your API calls.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">Step 2 — Install the SDK</h2>
            <p>
              The TypeScript SDK makes integration ultra-simple. A single dependency, zero configuration.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Step 3 — Create a server-side AI service</h2>
            <p>
              Create a file <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> that wraps the API calls. This is the central point of your integration.
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

            <h2 className="text-2xl font-bold text-white mt-12">Step 4 — Create a Next.js API route</h2>
            <p>
              Expose an API route in your SaaS. This route will be called by your frontend to generate content.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt required' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Generation error' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Step 5 — Call from the frontend</h2>
            <p>
              On the client side, call your API route with a simple fetch. Here is a complete React component.
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
        placeholder="Describe what you want to generate..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Generating...' : 'Generate'}
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

            <h2 className="text-2xl font-bold text-white mt-12">Step 6 — Add rate limiting</h2>
            <p>
              Protect your API from abuse. Here is a simple middleware that limits calls per user.
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

// Usage in the API route:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Best Practices</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Never expose the API key on the client side</h3>
                <p className="text-sm text-indigo-300">Always use a server proxy (Next.js API route) for AI API calls. The API key must never appear in the JavaScript code sent to the browser.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Validate user inputs</h3>
                <p className="text-sm text-indigo-300">Always sanitize and validate the prompt sent by the user. Limit the length, filter dangerous characters, and use zod or joi for validation.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Cache responses</h3>
                <p className="text-sm text-indigo-300">For similar prompts, cache AI responses. A Redis cache with a 24h TTL significantly reduces costs without impacting quality.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">Monitor costs</h3>
                <p className="text-sm text-indigo-300">Track credit consumption per user and per feature. AI APIs can be expensive if not optimized.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
            <p>
              In 6 simple steps, you have integrated AI into your SaaS. Content generation, automated SEO, and code generation are now accessible to your users. All in under 30 minutes.
            </p>
            <p>
              NeuraAPI simplifies this integration: a single API key, a TypeScript SDK, documented endpoints. You focus on your product, we handle the AI infrastructure.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Ready to Integrate AI?
            </h3>
            <p className="mt-3 text-indigo-200">
              Get your free API key and start building in minutes.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Get Started Free
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Read the Docs
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
