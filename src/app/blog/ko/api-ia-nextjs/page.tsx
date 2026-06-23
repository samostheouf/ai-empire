import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Next.js에 AI API 통합하는 방법 (완전 가이드 2026)",
  description: "실용 튜토리얼: GPT, Groq, NeuraAPI AI API를 Next.js 14 프로젝트에 통합하는 방법. 코드 예시, TypeScript SDK, 모범 사례.",
  path: '/blog/ko/api-ia-nextjs',
  type: 'article',
  keywords: ['AI API', 'Next.js', 'TypeScript SDK', 'AI 통합', 'Next.js 템플릿', '웹 개발자'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Next.js에 AI API 통합하는 방법 (완전 가이드 2026)',
  description: '실용 튜토리얼: TypeScript SDK로 Next.js 14 프로젝트에 AI API를 통합하는 방법.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ko/api-ia-nextjs',
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
        <Breadcrumb items={[{ name: '블로그', href: '/blog/ko' }, { name: 'AI API Next.js', href: '/blog/ko/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> 튜토리얼
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 2026년 1월 15일</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8분 읽기</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Next.js 프로젝트에 AI API 통합하는 방법
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ko/api-ia-nextjs`} title="Next.js에 AI API 통합하는 방법" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            인공지능은 더 이상 대기업 전용이 아닙니다. 오늘날,
            모든 개발자가 AI 기능 — 텍스트 생성, 코드 분석,
            SEO 최적화 — 을 Next.js 애플리케이션에 몇 분 안에 통합할 수 있습니다. 이 가이드에서는,
            Next.js 14 App Router 프로젝트에 AI API를 연결하는 방법을 초기 설정부터 프로덕션 배포까지 살펴봅니다.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">왜 AI 애플리케이션에 Next.js인가?</h2>
          <p>
            Next.js 14는 AI 애플리케이션에 구체적인 이점을 제공합니다:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: API 호출은 서버 측에서 수행되며, API 키는 클라이언트에 노출되지 않습니다</li>
            <li><strong className="text-white">Route Handlers</strong>: 별도의 Express 서버 없이 네이티브 API 엔드포인트 생성</li>
            <li><strong className="text-white">Streaming</strong>: <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code>으로 AI 응답을 실시간으로 표시</li>
            <li><strong className="text-white">Edge Runtime</strong>: 최소 지연 시간으로 엣지에서 AI 호출 실행</li>
            <li><strong className="text-white">Middleware</strong>: 라우트를 보호하고 각 요청 전에 인증 관리</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">1단계: SDK 선택 및 설치</h2>
          <p>
            첫 번째 단계는 AI API 제공자를 선택하고 SDK를 설치하는 것입니다. 2026년의 주요 옵션은 다음과 같습니다:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: 8개 이상의 엔드포인트를 갖춘 통합 API, 네이티브 TypeScript SDK, 무료 플랜 제공</li>
            <li><strong className="text-white">OpenAI</strong>: 역사적 리더, GPT-4o 및 GPT-4.1 모델</li>
            <li><strong className="text-white">Groq</strong>: 오픈 소스 모델(Llama, Mixtral)에서 초고속 추론</li>
            <li><strong className="text-white">Anthropic</strong>: Claude, 긴 텍스트 분석에 특화</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# NeuraAPI SDK 설치
npm install @neuraapi/sdk

# 환경 변수 (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">2단계: 서버 측 클라이언트 설정</h2>
          <p>
            클라이언트를 초기화하려면 <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code> 파일을 생성하세요:
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

          <h2 className="text-2xl font-bold text-white mt-12">3단계: API 엔드포인트 생성</h2>
          <p>
            Next.js Route Handlers를 사용하여 클라이언트 요청을 수신하는 엔드포인트를 생성합니다:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'ko' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: '프롬프트는 최소 10자 이상이어야 합니다' },
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
      { error: '생성 중 오류 발생' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">다른 AI 엔드포인트 사용</h2>
          <p>
            NeuraAPI는 8개 이상의 AI 엔드포인트를 제공합니다. 가장 유용한 것들의 사용 방법은 다음과 같습니다:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// SEO 최적화
const seoResult = await neurapi.seo({
  url: 'https://mysite.com/page',
  keywords: ['next.js', 'saas', 'template'],
})

// 코드 생성
const codeResult = await neurapi.code({
  prompt: '테이블을 표시하는 React 컴포넌트 생성',
  language: 'typescript',
})

// 감성 분석
const sentimentResult = await neurapi.sentiment({
  text: '이 제품은 놀라우며, 추천합니다!',
})

// 컨텍스트 챗봇
const chatResult = await neurapi.chat({
  message: 'Vercel에 앱을 배포하려면 어떻게 하나요?',
  context: '당신은 Next.js 기술 어시스턴트입니다',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">프로덕션 모범 사례</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">항상 입력을 검증</strong>: 서버 측에서 Zod를 사용하여 프롬프트 검증</li>
            <li><strong className="text-white">오류 처리</strong>: 지수 백오프와 함께 재시도 구현</li>
            <li><strong className="text-white">응답 캐싱</strong>: 동일한 프롬프트에 Redis 또는 Next.js 캐시 사용</li>
            <li><strong className="text-white">속도 제한</strong>: 미들웨어로 사용자당 요청 수 제한</li>
            <li><strong className="text-white">모니터링</strong>: 내장 분석으로 사용량 추적</li>
            <li><strong className="text-white">비용</strong>: 예산을 지키기 위해 토큰 소비 모니터링</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">출발점이 필요하신가요?</h3>
            <p className="text-indigo-200/70 mb-4">
              우리의 템플릿 <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link>는
              이미 인증, 대시보드, 결제를 통합하고 있습니다. AI 로직만 추가하면 됩니다.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              가격보기 →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">결론</h2>
          <p>
            Next.js에 AI API를 통합하는 것은 간단하고 구조화된 프로세스가 되었습니다. 적절한 SDK,
            몇 개의 구성 파일, Route Handlers를 통해 몇 시간 만에 사용자에게 AI 기능을
            제공할 수 있습니다. <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">NeuraAPI 프리미엄 템플릿</Link>은
            프로덕션 준비 기반을 제공하여 더 나아갑니다.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">관련 기사</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Next.js와 Stripe로 48시간 SaaS 만들기
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                프리미엄 Next.js 템플릿: 올바른 선택 방법
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
