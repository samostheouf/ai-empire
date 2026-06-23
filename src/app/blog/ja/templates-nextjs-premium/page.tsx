import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "スタートアップを素早く立ち上げる5つのNext.jsテンプレート",
  description: "スタートアップを立ち上げるための5つのプロフェッショナルなNext.jsテンプレート。コードプレビュー、技術スタック、Vercelデプロイ。",
  path: '/blog/ja/templates-nextjs-premium',
  type: 'article',
  keywords: ['Next.jsテンプレート', 'スタートアップ', 'Next.js', 'Web開発者', 'Tailwind CSS', 'プレミアムテンプレート', 'SaaS template'],
  publishedTime: '2024-06-10',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'スタートアップを素早く立ち上げる5つのNext.jsテンプレート',
  description: 'スタートアップを立ち上げるための5つのプロフェッショナルなNext.jsテンプレート。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-10',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ja/templates-nextjs-premium',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const TEMPLATES = [
  {
    name: 'NeuraSaaS',
    slug: 'neurasaa-kit-complet',
    description: 'SaaS用の完全キット。認証、ダッシュボード、Stripe決済、管理パネル。',
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
    useCase: 'SaaS、ビジネスアプリケーション、B2Bプラットフォーム',
  },
  {
    name: 'NeuraLanding',
    slug: 'neuralanding-kit-landing',
    description: '高コンバージョンのランディングページ5個セット。ヒーロー、料金、FAQ、お客様の声。',
    price: '49€',
    stack: ['Next.js 14', 'Tailwind', 'Framer Motion'],
    files: 45,
    components: 15,
    code: `// components/PricingSection.tsx
'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: 0, features: ['月100クレジット', '3エンドポイント'] },
  { name: 'Pro', price: 19, features: ['10,000クレジット', '全エンドポイント', 'テンプレート'] },
  { name: 'Enterprise', price: 69, features: ['無制限', '専任サポート', 'SLA'] },
]

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <motion.div key={plan.name} whileHover={{ y: -8 }}
            className="rounded-2xl border p-8">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">{plan.price}€/月</p>
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
    useCase: 'ランディングページ、販売ページ、coming soon',
  },
  {
    name: 'NeuraBlog',
    slug: 'neurablog-moteur-blog-ia',
    description: 'AI生成、自動SEO、ニュースレターを統合したスマートブログ。',
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
  if (!session) return NextResponse.json({ error: '認証されていません' }, { status: 401 })

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
    useCase: 'ブログ、コンテンツサイト、ドキュメント',
  },
  {
    name: 'NeuraCommerce',
    slug: 'neuracommerce-ecommerce-ia',
    description: 'AI搭載のオンラインストア。商品レコメンデーション、Stripe決済。',
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
    prompt: \`"\${product!.name}"の\${product!.category.name}カテゴリーで補完的な商品を3つ提案してください\`,
    maxTokens: 200,
  })

  return { similar, aiSuggestions: aiRecs.content }
}`,
    useCase: 'Eコマース、オンラインストア、マーケットプレイス',
  },
  {
    name: 'NeuraDashboard',
    slug: 'neuradashboard-admin-panel',
    description: 'リアルタイムグラフを持つ管理ダッシュボード、マルチテナント管理。',
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
      <h3 className="text-lg font-semibold mb-4">収益</h3>
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
    useCase: '管理パネル、ダッシュボード、バックオフィス',
  },
]

export default function TemplatesNextjsPremiumPage() {
  const articleSchema = generateArticleSchema({
    title: 'スタートアップを素早く立ち上げる5つのNext.jsテンプレート',
    description: 'スタートアップを立ち上げるための5つのプロフェッショナルなNext.jsテンプレート。',
    slug: 'templates-nextjs-premium',
    datePublished: '2024-06-10',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ja' },
      { name: '5つのNext.jsテンプレート', path: '/blog/ja/templates-nextjs-premium' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ja' }, { name: '5つのNext.jsテンプレート', href: '/blog/ja/templates-nextjs-premium' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              テンプレート
            </span>
            <span className="text-sm text-indigo-400">2024年6月10日</span>
            <span className="text-sm text-indigo-400">10分で読める</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            スタートアップを素早く立ち上げる5つのNext.jsテンプレート
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ja/templates-nextjs-premium`} title="スタートアップを素早く立ち上げる5つのNext.jsテンプレート" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              スタートアップを立ち上げるには、素早く検証する必要があります。ゼロからの開発には数週間かかります。プロフェッショナルなNext.jsテンプレートは、本番環境対応のコードを提供しながら、貴重な時間を節約します。コードプレビューと技術スタック付きの具体的な5つのテンプレートを紹介します。
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
                  <span>{template.files}ファイル</span>
                  <span>{template.components}コンポーネント</span>
                  <span>ユースケース：{template.useCase}</span>
                </div>

                <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden my-4">
                  <div className="px-4 py-2 bg-indigo-900/50 border-b border-indigo-800/30">
                    <span className="text-xs text-indigo-400 font-mono">コードプレビュー</span>
                  </div>
                  <pre className="p-4 text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                    {template.code}
                  </pre>
                </div>

                <Link
                  href={`/templates/${template.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-white text-sm font-medium transition-colors"
                >
                  完全なテンプレートを見る →
                </Link>
              </div>
            ))}

            <h2 className="text-2xl font-bold text-white mt-12">適切なテンプレートの選び方</h2>
            <p>
              テンプレートの選択はプロジェクトによります。簡単なガイドを紹介します：
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">SaaSを立ち上げる？</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraSaaSが明白な選択です。認証、決済、ダッシュボードなど、必要なものすべてを含んでいます。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">ランディングページが必要？</h3>
                <p className="text-sm text-indigo-300 mt-1">5つのバリアントを持つNeuraLandingがカバーします。高コンバージョン、スムーズなアニメーション。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">ブログを欲しい？</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraBlogはAI生成と自動SEOを統合。コンテンツマーケティングに最適です。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">商品を売る？</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraCommerceはAIレコメンデーションとStripeでそのための設計です。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-4">
                <h3 className="text-white font-semibold text-sm">バックオフィスが必要？</h3>
                <p className="text-sm text-indigo-300 mt-1">NeuraDashboardはリアルタイムグラフとマルチテナント管理を提供します。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">結論</h2>
            <p>
              良いテンプレートは数週間の開発を節約します。ここで紹介した5つのテンプレートは、スタートアップの最も一般的なユースケースをカバーしています：SaaS、ランディングページ、ブログ、Eコマース、管理ダッシュボード。
            </p>
            <p>
              各テンプレートはNext.js 14、Tailwind CSS、実績のあるライブラリで構築されています。コードはクリーンで、ドキュメントが整い、本番環境に使用可能です。
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              すべてのテンプレートを探索
            </h3>
            <p className="mt-3 text-indigo-200">
              10のプロフェッショナルなNext.jsテンプレート。コードプレビュー、技術スタック、Vercelデプロイ。
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/templates"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                テンプレートを閲覧
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                料金を確認
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}