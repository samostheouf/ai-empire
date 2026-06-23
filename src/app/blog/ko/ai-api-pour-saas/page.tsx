import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "SaaS에 30분 만에 AI를 통합하는 방법",
  description: "실용 튜토리얼: Next.js SaaS에 AI API를 30분 만에 통합. 모든 단계에서 복사 가능한 코드, 모범 사례, 배포.",
  path: '/blog/ko/ai-api-pour-saas',
  type: 'article',
  keywords: ['AI API', 'SaaS 템플릿', '인공지능', 'API 통합', 'Next.js', '튜토리얼', 'next.js 템플릿', '웹 개발자'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: 'SaaS에 30분 만에 AI를 통합하는 방법',
    description: '실용 튜토리얼: Next.js SaaS에 AI API를 30분 만에 통합.',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: '블로그', path: '/blog' },
      { name: '30분 만에 AI 통합', path: '/blog/ko/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: '블로그', href: '/blog' }, { name: 'AI 30분', href: '/blog/ko/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              튜토리얼
            </span>
            <span className="text-sm text-indigo-400">2024년 6월 15일</span>
            <span className="text-sm text-indigo-400">12분 소요</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            SaaS에 30분 만에 AI를 통합하는 방법
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ko/ai-api-pour-saas`} title="SaaS에 30분 만에 AI를 통합하는 방법" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              SaaS에 인공지능을 추가하는 것은 더 이상 대기업 전용이 아닙니다. 올바른 API를 사용하면 텍스트 생성, 자동화된 SEO, 코드 생성을 몇 분 만에 통합할 수 있습니다. 이 튜토리얼은 복사 가능한 코드로 정확한 방법을 보여줍니다.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">전제 조건</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Next.js 14+ 프로젝트 (App Router)</li>
                <li>NeuraAPI 키 (/register에서 무료)</li>
                <li>Node.js 18+ 설치됨</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">1단계 — 계정을 만들고 API 키 받기</h2>
            <p>
              <a href="/register" className="text-indigo-400 underline">/register</a>에서 무료 계정을 만드세요. <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>로 시작하는 API 키를 즉시 받을 수 있습니다. 월 100크레딧이 무료로 제공됩니다.
            </p>
            <p>
              이 키를 안전한 곳에 보관하세요. 모든 API 호출에 사용됩니다.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">2단계 — SDK 설치</h2>
            <p>
              TypeScript SDK는 통합을 매우 간단하게 만듭니다. 단일 의존성, 제로 구성.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">3단계 — 서버사이드 AI 서비스 만들기</h2>
            <p>
              API 호출을 캡슐화하는 <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code> 파일을 만드세요. 이것이 통합의 중심점입니다.
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

            <h2 className="text-2xl font-bold text-white mt-12">4단계 — Next.js API 라우트 만들기</h2>
            <p>
              SaaS에 API 라우트를 노출하세요. 이 라우트는 프론트엔드에서 콘텐츠 생성을 위해 호출됩니다.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '인증되지 않음' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: '프롬프트 필요' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: '생성 오류' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">5단계 — 프론트엔드에서 호출</h2>
            <p>
              클라이언트 측에서는 간단한 fetch로 API 라우트를 호출합니다. 다음은 완전한 React 컴포넌트입니다.
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
        placeholder="생성하고 싶은 것을 설명하세요..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? '생성 중...' : '생성'}
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

            <h2 className="text-2xl font-bold text-white mt-12">6단계 — Rate limiting 추가</h2>
            <p>
              API를 남용으로부터 보호하세요. 다음은 사용자별 호출을 제한하는 간단한 미들웨어입니다.
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

// API 라우트에서 사용:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: '요청이 너무 많습니다' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">모범 사례</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">API 키를 클라이언트 측에서 절대 노출하지 마세요</h3>
                <p className="text-sm text-indigo-300">AI API 호출에는 항상 서버 프록시(Next.js API 라우트)를 사용하세요. API 키는 브라우저에 전송되는 JavaScript 코드에 절대 나타나서는 안 됩니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">사용자 입력을 검증하세요</h3>
                <p className="text-sm text-indigo-300">사용자가 보낸 프롬프트를 항상 정리하고 검증하세요. 길이를 제한하고, 위험한 문자를 필터링하고, 검증에는 zod 또는 joi를 사용하세요.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">응답을 캐싱하세요</h3>
                <p className="text-sm text-indigo-300">유사한 프롬프트의 경우 AI 응답을 캐싱하세요. 24시간 TTL의 Redis 캐시는 품질에 영향을 주지 않고 비용을 크게 줄입니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">비용을 모니터링하세요</h3>
                <p className="text-sm text-indigo-300">사용자별, 기능별 크레딧 소비를 추적하세요. AI API는 최적화하지 않으면 비용이 많이 듭니다.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">결론</h2>
            <p>
              6가지 간단한 단계로 SaaS에 AI를 통합했습니다. 콘텐츠 생성, 자동화된 SEO, 코드 생성이 이제 사용자에게 접근 가능합니다. 30분 만에 완료됩니다.
            </p>
            <p>
              NeuraAPI는 이 통합을 간소화합니다: 단일 API 키, TypeScript SDK, 문서화된 엔드포인트. 여러분은 제품에 집중하고, 우리는 AI 인프라를 관리합니다.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              AI 통합을 시작할 준비가 되셨나요?
            </h3>
            <p className="mt-3 text-indigo-200">
              무료 API 키를 받고 몇 분 만에 구축을 시작하세요.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                무료로 시작하기
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                문서 읽기
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
