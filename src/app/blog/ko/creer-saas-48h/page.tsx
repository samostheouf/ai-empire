import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "48시간으로 SaaS 만들기: 단계별 가이드",
  description: "Next.js 14, Stripe, Prisma, Vercel로 48시간 내에 SaaS를 출시하는 완전한 가이드. 설정, 인증, 대시보드, 결제, 배포.",
  path: '/blog/ko/creer-saas-48h',
  type: 'article',
  keywords: ['SaaS 템플릿', 'Next.js', 'Stripe', '웹 개발자', 'Next.js 템플릿', 'SaaS 출시하기'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '48시간으로 SaaS 만들기: 단계별 가이드',
  description: 'Next.js 14, Stripe, Prisma, Vercel로 48시간 내에 SaaS를 출시하는 완전한 가이드.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-02-10',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ko/creer-saas-48h',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogCreerSaaS() {
  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: '블로그', href: '/blog/ko' }, { name: '48시간 SaaS', href: '/blog/ko/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> 가이드
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 2026년 2월 10일</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10분 읽기</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            48시간으로 SaaS 만들기: 단계별 가이드
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ko/creer-saas-48h`} title="48시간으로 SaaS 만들기: 단계별 가이드" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            SaaS를 출시하기 위해 이제 몇 달간의 개발이 필요하지 않습니다. 올바른 도구 — Next.js 14, Stripe,
            Prisma, Vercel — 를 사용하면 48시간 내에 기능적인 제품을 가질 수 있습니다. 이 가이드는 첫 번째 커밋부터 프로덕션 배포까지 각 단계를 상세히 설명합니다.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1일차 — 기초 (0-12시간)</h2>

          <h3 className="text-xl font-semibold text-white mt-8">1단계: 프로젝트 초기화</h3>
          <p>
            TypeScript, Tailwind CSS, App Router로 Next.js 14 프로젝트를 생성합니다:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 my-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd my-saas

# 필수 의존성 설치
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">2단계: 데이터베이스 설정</h3>
          <p>
            Prisma는 직관적인 ORM 레이어를 제공합니다. PostgreSQL로 초기화합니다:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  plan      String   @default("starter")
  apiKey    String   @unique @default(cuid())
  createdAt DateTime @default(now())
  projects  Project[]
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">3단계: 인증 구현</h3>
          <p>
            NextAuth.js는 Next.js의 표준 선택입니다. 자격 증명으로 설정합니다:
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/auth.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './db'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        })
        if (!user) return null
        const valid = await bcrypt.compare(
          credentials?.password as string, user.password
        )
        if (!valid) return null
        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">2일차 — 결제 및 배포</h2>

          <h3 className="text-xl font-semibold text-white mt-8">4단계: Stripe 통합</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { plan } = await req.json()
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [{ price: PLANS[plan].priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_URL}/pricing?canceled=true\`,
    metadata: { userId: session.user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">5단계: Vercel 배포</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 환경 변수 설정
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# 프로덕션 배포
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">48시간 요약</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: '0-4시간', desc: '프로젝트 설정, 의존성, Prisma 데이터베이스' },
              { step: '2', time: '4-12시간', desc: 'NextAuth 인증, 회원가입, 로그인' },
              { step: '3', time: '12-24시간', desc: '대시보드, 레이아웃, 네비게이션, 설정' },
              { step: '4', time: '24-36시간', desc: 'Stripe 체크아웃, 웹훅, 구독 관리' },
              { step: '5', time: '36-44시간', desc: '랜딩 페이지, SEO, 트랜잭션 이메일' },
              { step: '6', time: '44-48시간', desc: '테스트, Vercel 배포, 모니터링' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold flex items-center justify-center text-white">
                  {item.step}
                </span>
                <span className="text-sm">
                  <strong className="text-white">{item.time}</strong> — {item.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">지름길이 필요하신가요?</h3>
            <p className="text-indigo-200/70 mb-4">
              <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> 템플릿은
              이 가이드의 모든 것을 사전 구성하여 포함합니다: 인증, 대시보드, Stripe, 랜딩 페이지, 관리자 패널. 40시간의 개발을 절약하세요.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              가격보기 →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">관련 기사</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Next.js에 AI API 통합하는 방법
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
