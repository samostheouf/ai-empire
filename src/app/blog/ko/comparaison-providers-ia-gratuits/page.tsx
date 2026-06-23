import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "무료 AI 프로바이더 비교: Groq vs Gemini vs OpenAI",
  description: "개발자를 위한 무료 AI 프로바이더의 정직하고 상세한 비교. 성능, 가격, 제한 사항 및 사용 사례.",
  path: '/blog/ko/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', '무료 AI', '비교', 'AI 프로바이더', '웹 개발자', 'AI API'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '무료 AI 프로바이더 비교: Groq vs Gemini vs OpenAI',
  description: '개발자를 위한 무료 AI 프로바이더의 정직한 비교.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ko/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: '무료 AI 프로바이더 비교: Groq vs Gemini vs OpenAI',
    description: '개발자를 위한 무료 AI 프로바이더의 정직한 비교.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ko' },
      { name: 'AI 프로바이더 비교', path: '/blog/ko/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ko' }, { name: 'AI 프로바이더 비교', href: '/blog/ko/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              비교
            </span>
            <span className="text-sm text-indigo-400">2024년 6월 20일</span>
            <span className="text-sm text-indigo-400">15분 읽기</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            무료 AI 프로바이더 비교: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ko/comparaison-providers-ia-gratuits`} title="무료 AI 프로바이더 비교" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              적절한 AI 프로바이더를 선택하는 것은 개발자에게 중요한 결정입니다. 무료 제안으로 재정적 위험 없이 테스트할 수 있지만, 각 프로바이더에는 장단점이 있습니다. 실제 테스트를 기반으로 한 정직한 비교를 소개합니다.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">방법론</h3>
              <p className="text-sm text-indigo-300">
                이 비교는 2024년 12월에 수행된 테스트를 기반으로 합니다. 가격과 무료 티어 제한은 변경될 수 있습니다. 각 프로바이더를 동일한 프롬프트로 테스트하여 결과를 비교했습니다.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">개요</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">기준</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">무료 티어</td>
                    <td className="py-3 text-center">예</td>
                    <td className="py-3 text-center">예</td>
                    <td className="py-3 text-center">제한적</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">사용 가능한 모델</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">속도</td>
                    <td className="py-3 text-center text-green-400 font-semibold">매우 빠름</td>
                    <td className="py-3 text-center">빠름</td>
                    <td className="py-3 text-center">보통</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">품질 (평균 프롬프트)</td>
                    <td className="py-3 text-center">좋음</td>
                    <td className="py-3 text-center text-green-400 font-semibold">매우 좋음</td>
                    <td className="py-3 text-center text-green-400 font-semibold">우수</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">컨텍스트 (토큰)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">예</td>
                    <td className="py-3 text-center">예</td>
                    <td className="py-3 text-center">예</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">비전</td>
                    <td className="py-3 text-center text-red-400">아니오</td>
                    <td className="py-3 text-center text-green-400">예</td>
                    <td className="py-3 text-center text-green-400">예</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">지원 언어</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — 속도가 장점</h2>
            <p>
              Groq는 뛰어난 속도로 두드러집니다. 응답이 거의 즉시 이루어져, 빠른 피드백이 필요한 애플리케이션에 이상적입니다: 챗봇, 자동 완성, 실시간 제안.
            </p>
            <p>
              <strong className="text-white">강점:</strong> 인상적인 속도(최대 500 토큰/초), OpenAI 호환 API, 고성능 Llama 3.3 70B 모델, 관대한 무료 티어.
            </p>
            <p>
              <strong className="text-white">약점:</strong> 비전 없음, Meta/Mistral 모델로 제한, 복잡한 작업에서 GPT-4보다 낮은 성능.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Groq 예제 (OpenAI 호환 API)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: '안녕하세요' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Google의 거인</h2>
            <p>
              Google Gemini는 100만 토큰의 컨텍스트를 가진 무료 티어를 제공하며, 이는 비교할 수 없는 수준입니다. 매우 긴 문서를 처리할 수 있는 능력은 데이터 분석과 문서 연구에 흥미로운 선택지가 되었습니다.
            </p>
            <p>
              <strong className="text-white">강점:</strong> 100만 토큰 컨텍스트, 내장 비전, 견고한 성능, 여러 언어의 공식 SDK, Google 생태계와의 네이티브 통합.
            </p>
            <p>
              <strong className="text-white">약점:</strong> 때때로 불안정한 API, 때때로 불완전한 문서, Groq보다 높은 레이턴시, 신뢰성이 낮은 function calling.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Google Gemini 예제
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('머신러닝을 설명해주세요')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — 기준점</h2>
            <p>
              OpenAI는 여전히 응답 품질의 기준점입니다. GPT-4o는 사용 가능한 가장 성능이 높은 모델이지만, 무료 티어는 매우 제한적입니다. GPT-4o mini는 좋은 품질/가격 균형을 제공합니다.
            </p>
            <p>
              <strong className="text-white">강점:</strong> 최고의 응답 품질, 성숙한 생태계, 우수한 문서, 대규모 커뮤니티, 신뢰할 수 있는 function calling, 비전 및 오디오.
            </p>
            <p>
              <strong className="text-white">약점:</strong> 거의 존재하지 않는 무료 티어, 비싼 GPT-4o, 변동하는 레이턴시, 단일 프로바이더 의존.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// OpenAI 예제
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: '안녕하세요' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">추천</h2>
            <p>
              보편적으로 더 나은 프로바이더는 없습니다. 선택은 사용 사례에 따라 다릅니다:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">속도와 비용</h3>
                <p className="text-sm text-indigo-300">Groq는 필적할 자가 없습니다. 응답 속도와 무료 티어는 프로토타입과 실시간 애플리케이션에 이상적인 선택입니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">긴 문서용</h3>
                <p className="text-sm text-indigo-300">100만 토큰 컨텍스트를 가진 Gemini는 매우 긴 문서나 데이터 더미를 분석하는 데 유일한 실용적인 선택입니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">최고 품질</h3>
                <p className="text-sm text-indigo-300">GPT-4o는 여전히 최고의 모델입니다. 품질이 가장 중요하고 예산이 허용한다면 안전한 선택입니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">간소화</h3>
                <p className="text-sm text-indigo-300">NeuraAPI는 Groq와 OpenAI를 하나의 API 뒤에 통합합니다. 코드를 변경하지 않고 프로바이더를 전환할 수 있습니다.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">결론</h2>
            <p>
              각 프로바이더에게는 자리가 있습니다. Groq는 속도를 지배하고, Gemini는 긴 문서에서 뛰어나며, OpenAI는 품질에서 리드합니다. 가장 실용적인 접근 방식은 사용 사례에 가장 적합한 프로바이더로 시작하고, 성장함에 따라 변경이 필요한지 평가하는 것입니다.
            </p>
            <p>
              NeuraAPI를 사용하면 선택할 필요가 없습니다. 하나의 API 키, 여러 프로바이더에 대한 액세스, 통합된 결제. 다양한 프로바이더를 테스트하고 필요에 맞는 것을 찾으세요.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              NeuraAPI를 사용해보세요
            </h3>
            <p className="mt-3 text-indigo-200">
              하나의 API를 통해 Groq와 OpenAI에 액세스. 100 크레딧 무료.
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