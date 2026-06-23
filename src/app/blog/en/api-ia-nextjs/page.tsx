import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "How to integrate an AI API into Next.js (complete guide 2026)",
  description: "Practical tutorial: integrate an AI API (GPT, Groq, NeuraAPI) into your Next.js 14 project. Code examples, TypeScript SDK, best practices.",
  path: '/blog/en/api-ia-nextjs',
  type: 'article',
  keywords: ['AI API', 'Next.js', 'TypeScript SDK', 'AI integration', 'Next.js template', 'web developer'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogApiIaNextjs() {
  const articleSchema = generateArticleSchema({
    title: 'How to integrate an AI API into Next.js (complete guide 2026)',
    description: 'Practical tutorial: integrate an AI API into your Next.js 14 project with TypeScript SDK.',
    slug: 'api-ia-nextjs',
    datePublished: '2026-01-15',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'API IA Next.js', path: '/blog/en/api-ia-nextjs' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/en' }, { name: 'API IA Next.js', href: '/blog/en/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutorial
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> January 15, 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8 min read</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            How to integrate an AI API into your Next.js project
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/en/api-ia-nextjs`} title="How to integrate an AI API into Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Artificial intelligence is no longer reserved for large companies. Today,
            any developer can integrate AI capabilities — text generation, code analysis,
            SEO optimization — into their Next.js application in just a few minutes. In this guide, we will see
            how to connect an AI API to a Next.js 14 App Router project, from initial setup to production deployment.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Why Next.js for an AI application?</h2>
          <p>
            Next.js 14 offers concrete advantages for AI applications:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: API calls are made server-side, API keys never exposed to the client</li>
            <li><strong className="text-white">Route Handlers</strong>: create native API endpoints without a separate Express server</li>
            <li><strong className="text-white">Streaming</strong>: display AI responses in real-time with <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code></li>
            <li><strong className="text-white">Edge Runtime</strong>: run AI calls at the edge for minimal latency</li>
            <li><strong className="text-white">Middleware</strong>: protect your routes and manage authentication before each request</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Step 1: Choose and install the SDK</h2>
          <p>
            The first step is to choose an AI API provider and install its SDK. Here are the main options in 2026:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: unified API with 8+ endpoints, native TypeScript SDK, free plan available</li>
            <li><strong className="text-white">OpenAI</strong>: the historical leader, GPT-4o and GPT-4.1 models</li>
            <li><strong className="text-white">Groq</strong>: ultra-fast inference on open source models (Llama, Mixtral)</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, specialized in long text analysis</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Install the NeuraAPI SDK
npm install @neuraapi/sdk

# Environment variables (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Step 2: Configure the server-side client</h2>
          <p>
            Create a file <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> to initialize the client:
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

          <h2 className="text-2xl font-bold text-white mt-12">Step 3: Create an API endpoint</h2>
          <p>
            Use Next.js Route Handlers to create an endpoint that will receive client requests:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'en' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'Prompt must contain at least 10 characters' },
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
      { error: 'Error during generation' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Using other AI endpoints</h2>
          <p>
            NeuraAPI offers 8+ AI endpoints. Here is how to use some of the most useful ones:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// SEO Optimization
const seoResult = await neurapi.seo({
  url: 'https://mysite.com/page',
  keywords: ['next.js', 'saas', 'template'],
})

// Code Generation
const codeResult = await neurapi.code({
  prompt: 'Create a React component to display a table',
  language: 'typescript',
})

// Sentiment Analysis
const sentimentResult = await neurapi.sentiment({
  text: 'This product is amazing, I recommend it!',
})

// Contextual Chatbot
const chatResult = await neurapi.chat({
  message: 'How to deploy my app on Vercel?',
  context: 'You are a Next.js technical assistant',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Production best practices</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Always validate inputs</strong>: use Zod to validate prompts server-side</li>
            <li><strong className="text-white">Handle errors</strong>: implement retries with exponential backoff</li>
            <li><strong className="text-white">Cache responses</strong>: use Redis or Next.js cache for identical prompts</li>
            <li><strong className="text-white">Rate limiting</strong>: limit the number of requests per user with middleware</li>
            <li><strong className="text-white">Monitoring</strong>: track usage with built-in analytics</li>
            <li><strong className="text-white">Costs</strong>: monitor token consumption to stay within your budget</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Need a starting point?</h3>
            <p className="text-indigo-200/70 mb-4">
              Our template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> already integrates
              authentication, dashboard and billing. You just need to add your AI logic.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              View pricing →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Integrating an AI API into Next.js has become a simple and structured process. With the right SDK,
            a few configuration files and Route Handlers, you can offer AI capabilities
            to your users in just a few hours. The <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">premium NeuraAPI templates</Link> go
            even further by providing you with a production-ready base.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Related articles</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Create a SaaS in 48h with Next.js and Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Premium Next.js templates: how to choose the right one
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
