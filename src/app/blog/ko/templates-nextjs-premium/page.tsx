import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "스타트업을 빠르게 시작하는 5개의 Next.js 템플릿",
  description: "스타트업을 시작하기 위한 5개의 프로페셔널 Next.js 템플릿을 발견하세요. 코드 프리뷰, 기술 스택, Vercel 배포.",
  path: '/blog/ko/templates-nextjs-premium',
  type: 'article',
  keywords: ['Next.js 템플릿', '스타트업', 'Next.js', '웹 개발자', 'Tailwind CSS', '프리미엄 템플릿', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '스타트업을 빠르게 시작하는 5개의 Next.js 템플릿',
  description: '스타트업을 시작하기 위한 5개의 프로페셔널 Next.js 템플릿.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-10',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ko/templates-nextjs-premium',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'SaaS용 완전 키트. 인증, 대시보드, Stripe 결제, 관리 패널.',
    price: '97€',
    stack: ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'NextAuth'],
    files: 124,
    components: 32,
    code: `// app/dashboard/page.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { DashboardLayout } from '@/components/DashboardLayout'
import { StatsGrid } from '@/components/StatsGrid'
import { RecentActivity } from '@/components/RecentActivity'

export default async function DashboardPage() {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <DashboardLayout user={session.user}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <StatsGrid userId={session.user.id} />
      <RecentActivity userId={session.user.id} />
    </DashboardLayout>
  )
}`,
    useCase: 'SaaS, 비즈니스 애플리케이션, B2B 플랫폼',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: '높은 전환율의 랜딩 페이지 5개 세트. 히어로, 가격, FAQ, 고객 후기.',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['월 100 크레딧', '3 엔드포인트'] },
  { name: 'Pro', price: 19, features: ['10,000 크레딧', '모든 엔드포인트', '템플릿'] },
  { name: 'Enterprise', price: 69, features: ['제한 없음', '전담 지원', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/월</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}`,
    useCase: '랜딩 페이지, 판매 페이지, Coming Soon',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'AI 생성, 자동화된 SEO, 뉴스레터를 통합한 스마트 블로그.',
    price: '69€',
    stack: ['Next.js 14', 'Tailwind', 'MDX', 'OpenAI', 'Prisma'],
    files: 68,
    components: 18,
    code: `// app/api/generate-article/route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: '인증되지 않음' }, { status: 401 })

  const { topic, keywords } = await req.json()

  const response = await fetch('https://ai-empire-steel.vercel.app/api/ai/seo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.NEURA_API_KEY!,
    },
    body: JSON.stringify({ topic, keywords, maxTokens: 2000 }),
  })

  const { title, metaDescription, content } = await response.json()

  const article = await prisma.article.create({
    data: { title, metaDescription, content, authorId: session.user.id },
  })

  return NextResponse.json(article)
}`,
    useCase: '블로그, 콘텐츠 사이트, 문서',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'AI 기반 온라인 스토어. 상품 추천, Stripe 결제.',
    price: '129€',
    stack: ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'OpenAI'],
    files: 112,
    components: 28,
    code: `// lib/recommendations.ts
import { prisma } from './prisma'
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function getRecommendations(productId: string) {
  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { category: true, tags: true },
  })

  const similar = await prisma.product.findMany({
    where: {
      categoryId: product!.categoryId,
      id: { not: productId },
    },
    take: 4,
    orderBy: { sales: 'desc' },
  })

  const aiRecs = await ai.generate({
    prompt: \`"\${product!.name}"의 \${product!.category.name} 카테고리에서 보완 상품 3개를 추천해주세요\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'E-commerce, 온라인 스토어, 마켓플레이스',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: '실시간 차트가 있는 관리 대시보드, 멀티 테넌트 관리.',
    price: '79€',
    stack: ['Next.js 14', 'Tailwind', 'Recharts', 'Prisma', 'shadcn/ui'],
    files: 86,
    components: 24,
    code: `// components/AnalyticsChart.tsx
'use client'
import { useQuery } from '@tanstack/react-query'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function AnalyticsChart({ period = '7d' }) {
  const { data } = useQuery({
    queryKey: ['analytics', period],
    queryFn: () => fetch(\`/api/analytics?period=\${period}\`).then(r => r.json()),
  })

  return (
    <div className="rounded-xl border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">수익</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data?.revenue || []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}`,
    useCase: '관리 패널, 대시보드, 백오피스',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: '스타트업을 빠르게 시작하는 5개의 Next.js 템플릿',
    description: '스타트업을 시작하기 위한 5개의 프로페셔널 Next.js 템플릿.',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ko' },
      { name: '5개의 Next.js 템플릿', path: '/blog/ko/templates-nextjs-premium' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ko' }, { name: '5개의 Next.js 템플릿', href: '/blog/ko/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              템플릿
            </span>
            <span className="text-sm text-indigo-400">2024년 6월 10일</span>
            <span className="text-sm text-indigo-400">10분 읽기</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            스타트업을 빠르게 시작하는 5개의 Next.js 템플릿
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ko/templates-nextjs-premium`} title="스타트업을 빠르게 시작하는 5개의 Next.js 템플릿" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              스타트업을 시작하려면 빠른 검증이 필요합니다. 처음부터 개발하면 수 주가 걸립니다. 프로페셔널 Next.js 템플릿은 프로덕션 코드를 제공하면서 소중한 시간을 절약해줍니다. 코드 프리뷰와 기술 스택이 포함된 5개의 구체적인 템플릿을 소개합니다.
            </p>

            {TEMPLATES.map((template, i) => (
              <div key={template.slug} className="my-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{template.name}</h2>
                  <span className="text-indigo-400 font-mono text-sm">{template.price}</span>
                </div>
                <p>{template.description}</p>

                <div className="flex flex-wrap gap-2 my-4">
                  {template.stack.map(tech => (
                    <span key={tech} className="rounded-full bg-indigo-900/50 px-3 py-1 text-xs text-indigo-300 border border-indigo-800/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-indigo-400 my-4">
                  <span>{template.files} 파일</span>
                  <span>{template.components} 컴포넌트</span>
                  <span>사용 사례: {template.useCase}</span>
                </div>

                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">코드 프리뷰</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  전체 템플릿 보기 →
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">올바른 템플릿 선택 방법</h2>
            <p>
              템플릿 선택은 프로젝트에 따라 다릅니다. 빠른 가이드입니다:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">SaaS를 시작하시나요?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaS가 명백한 선택입니다. 인증, 결제, 대시보드 등 필요한 모든 것을 포함합니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">랜딩 페이지가 필요하신가요?</h3>
                <p className="text-sm text-indigo-300 mt-1">5개의 변형을 가진 NeuraLanding이 커버합니다. 높은 전환율, 부드러운 애니메이션.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">블로그를 원하시나요?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlog는 AI 생성과 자동화된 SEO를 통합합니다. 콘텐츠 마케팅에 완벽합니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">상품을 판매하시나요?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerce는 AI 추천과 Stripe로 그렇게 설계되었습니다.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">백오피스가 필요하신가요?</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboard는 실시간 차트와 멀티 테넌트 관리를 제공합니다.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">결론</h2>
            <p>
              좋은 템플릿은 수 주의 개발을 절약해줍니다. 여기에 소개된 5개의 템플릿은 스타트업의 가장 일반적인 사용 사례를 다룹니다: SaaS, 랜딩 페이지, 블로그, E-commerce 및 관리 대시보드.
            </p>
            <p>
              각 템플릿은 Next.js 14, Tailwind CSS 및 검증된 라이브러리로 구축되었습니다. 코드는 깔끔하고 문서화가 잘 되어 있으며 프로덕션에 사용할 준비가 되어 있습니다.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              모든 템플릿 탐색
            </h3>
            <p className="mt-3 text-indigo-200">
              10개의 프로페셔널 Next.js 템플릿. 코드 프리뷰, 기술 스택, Vercel 배포.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                템플릿 둘러보기
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                가격 보기
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}