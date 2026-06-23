import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "48時間でSaaSを作成する：ステップバイステップガイド",
  description: "Next.js 14、Stripe、Prisma、Vercelで48時間でSaaSを立ち上げるための完全ガイド。セットアップ、認証、ダッシュボード、請求、デプロイ。",
  path: '/blog/ja/creer-saas-48h',
  type: 'article',
  keywords: ['SaaSテンプレート', 'Next.js', 'Stripe', 'Web開発者', 'Next.jsテンプレート', 'SaaSを立ち上げる'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '48時間でSaaSを作成する：ステップバイステップガイド',
  description: 'Next.js 14、Stripe、Prisma、Vercelで48時間でSaaSを立ち上げるための完全ガイド。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-02-10',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ja/creer-saas-48h',
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
        <Breadcrumb items={[{ name: 'ブログ', href: '/blog/ja' }, { name: '48時間でSaaS', href: '/blog/ja/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> ガイド
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 2026年2月10日</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10分で読める</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            48時間でSaaSを作成する：ステップバイステップガイド
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ja/creer-saas-48h`} title="48時間でSaaSを作成する：ステップバイステップガイド" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            SaaSを立ち上げるために、もうヶ月もの開発は必要ありません。適切なツール — Next.js 14、Stripe、
            Prisma、Vercel — を使えば、48時間で機能的な製品を作ることができます。このガイドでは、最初のコミットから本番環境へのデプロイまで、各ステップを詳細に説明します。
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1日目 — 基盤（0-12時間）</h2>

          <h3 className="text-xl font-semibold text-white mt-8">ステップ1：プロジェクトの初期化</h3>
          <p>
            TypeScript、Tailwind CSS、App Routerを使用してNext.js 14プロジェクトを作成します：
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 my-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd my-saas

# 必要な依存関係のインストール
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">ステップ2：データベースの設定</h3>
          <p>
            Prismaは直感的なORMレイヤーを提供します。PostgreSQLで初期化します：
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

          <h3 className="text-xl font-semibold text-white mt-8">ステップ3：認証の実装</h3>
          <p>
            NextAuth.jsはNext.jsの標準的な選択です。クレデンシャルで設定します：
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
        email: { label: 'メールアドレス', type: 'email' },
        password: { label: 'パスワード', type: 'password' },
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

          <h2 className="text-2xl font-bold text-white mt-12">2日目 — 請求とデプロイ</h2>

          <h3 className="text-xl font-semibold text-white mt-8">ステップ4：Stripeの統合</h3>

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

          <h3 className="text-xl font-semibold text-white mt-8">ステップ5：Vercelへのデプロイ</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel

# 環境変数の設定
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# 本番環境にデプロイ
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">48時間のまとめ</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: '0-4時間', desc: 'プロジェクトセットアップ、依存関係、Prismaデータベース' },
              { step: '2', time: '4-12時間', desc: 'NextAuth認証、登録、ログイン' },
              { step: '3', time: '12-24時間', desc: 'ダッシュボード、レイアウト、ナビゲーション、設定' },
              { step: '4', time: '24-36時間', desc: 'Stripeチェックアウト、Webhook、サブスクリプション管理' },
              { step: '5', time: '36-44時間', desc: 'ランディングページ、SEO、トランザクションメール' },
              { step: '6', time: '44-48時間', desc: 'テスト、Vercelデプロイ、監視' },
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
            <h3 className="text-lg font-semibold text-white mb-2">ショートカットが必要ですか？</h3>
            <p className="text-indigo-200/70 mb-4">
              <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link>テンプレートには、
              このガイドのすべてが事前設定されています：認証、ダッシュボード、Stripe、ランディングページ、管理パネル。40時間の開発を節約できます。
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              料金を見る →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">関連記事</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Next.jsにAI APIを統合する方法
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                プレミアムNext.jsテンプレート：適切なものを選ぶ方法
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
