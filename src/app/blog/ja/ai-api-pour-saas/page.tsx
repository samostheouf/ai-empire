import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "30分でSaaSにAIを統合する方法",
  description: "実践チュートリアル：Next.js SaaSにAI APIを30分で統合。各ステップでコピー可能なコード、ベストプラクティス、デプロイ。",
  path: '/blog/ja/ai-api-pour-saas',
  type: 'article',
  keywords: ['AI API', 'SaaS テンプレート', '人工知能', 'API統合', 'Next.js', 'チュートリアル', 'next.js テンプレート', 'Web開発者'],
  publishedTime: '2024-06-15',
  modifiedTime: '2024-12-01',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function AiApiPourSaasPage() {
  const articleSchema = generateArticleSchema({
    title: '30分でSaaSにAIを統合する方法',
    description: '実践チュートリアル：Next.js SaaSにAI APIを30分で統合。',
    slug: 'ai-api-pour-saas',
    datePublished: '2024-06-15',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'ブログ', path: '/blog' },
      { name: '30分でAIを統合', path: '/blog/ja/ai-api-pour-saas' },
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
        <Breadcrumb items={[{ name: 'ブログ', href: '/blog' }, { name: 'AI 30分', href: '/blog/ja/ai-api-pour-saas' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              チュートリアル
            </span>
            <span className="text-sm text-indigo-400">2024年6月15日</span>
            <span className="text-sm text-indigo-400">12分で読める</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            30分でSaaSにAIを統合する方法
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ja/ai-api-pour-saas`} title="30分でSaaSにAIを統合する方法" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              SaaSに人工知能を追加することは、もはや大企業専用ではありません。適切なAPIを使えば、テキスト生成、自動SEO、コード生成を数分で統合できます。このチュートリアルでは、コピー可能なコードで正確に方法を説明します。
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">前提条件</h3>
              <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
                <li>Next.js 14+プロジェクト（App Router）</li>
                <li>NeuraAPIキー（/register で無料取得）</li>
                <li>Node.js 18+がインストール済み</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">ステップ1 — アカウントを作成してAPIキーを取得</h2>
            <p>
              <a href="/register" className="text-indigo-400 underline">/register</a>にアクセスして無料アカウントを作成します。<code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">napi_</code>で始まるAPIキーがすぐに届きます。月100クレジットが無料で提供されます。
            </p>
            <p>
              このキーは安全な場所に保管してください。すべてのAPI呼び出しで使用されます。
            </p>

            <h2 className="text-2xl font-bold text-white mt-12">ステップ2 — SDKをインストール</h2>
            <p>
              TypeScript SDKにより統合が超簡単になります。単一の依存関係、ゼロ設定。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`npm install @neuraapi/sdk`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">ステップ3 — サーバーサイドAIサービスを作成</h2>
            <p>
              API呼び出しをカプセル化する<code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">lib/ai.ts</code>ファイルを作成します。これは統合の中心ポイントです。
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

            <h2 className="text-2xl font-bold text-white mt-12">ステップ4 — Next.js APIルートを作成</h2>
            <p>
              SaaSにAPIルートを公開します。このルートはフロントエンドからコンテンツ生成のために呼び出されます。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{`// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: '認証されていません' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'プロンプトが必要です' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: '生成エラー' }, { status: 500 })
  }
}`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">ステップ5 — フロントエンドから呼び出し</h2>
            <p>
              クライアント側では、シンプルなfetchでAPIルートを呼び出します。以下は完全なReactコンポーネントです。
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
        placeholder="生成したいものを記述してください..."
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

            <h2 className="text-2xl font-bold text-white mt-12">ステップ6 — レート制限を追加</h2>
            <p>
              APIを乱用から守ります。以下はユーザーごとの呼び出しを制限するシンプルなミドルウェアです。
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

// APIルートでの使用：
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'リクエストが多すぎます' }, { status: 429 })
// }`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">ベストプラクティス</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">APIキーをクライアント側で公開しない</h3>
                <p className="text-sm text-indigo-300">AI API呼び出しには常にサーバープロキシ（Next.js APIルート）を使用してください。APIキーはブラウザに送信されるJavaScriptコードに表示されるべきではありません。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">ユーザー入力を検証</h3>
                <p className="text-sm text-indigo-300">ユーザーから送信されたプロンプトは常にサニタイズして検証してください。長さを制限し、危険な文字をフィルタリングし、検証にはzodまたはjoiを使用してください。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">レスポンスをキャッシュ</h3>
                <p className="text-sm text-indigo-300">類似のプロンプトについては、AIレスポンスをキャッシュしてください。24時間のTTLを持つRedisキャッシュは、品質に影響を与えずにコストを大幅に削減します。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-2">コストを監視</h3>
                <p className="text-sm text-indigo-300">ユーザーごと、機能ごとのクレジット消費を追跡してください。AI APIは最適化しないと高コストになる可能性があります。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">まとめ</h2>
            <p>
              6つの簡単なステップで、SaaSにAIを統合しました。コンテンツ生成、自動SEO、コード生成がユーザーに利用可能になりました。すべて30分以内に完了します。
            </p>
            <p>
              NeuraAPIはこの統合をシンプルにします：単一のAPIキー、TypeScript SDK、ドキュメント付きエンドポイント。あなたはプロダクトに集中し、私たちはAIインフラを管理します。
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              AIの統合を始めよう
            </h3>
            <p className="mt-3 text-indigo-200">
              無料のAPIキーを取得して、数分で構築を開始しましょう。
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                無料で始める
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                ドキュメントを読む
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
