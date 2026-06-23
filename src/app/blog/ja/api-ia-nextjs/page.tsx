import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Next.jsにAI APIを統合する方法（完全ガイド2026）",
  description: "実践チュートリアル：GPT、Groq、NeuraAPIのAI APIをNext.js 14プロジェクトに統合する方法。コード例、TypeScript SDK、ベストプラクティス。",
  path: '/blog/ja/api-ia-nextjs',
  type: 'article',
  keywords: ['AI API', 'Next.js', 'TypeScript SDK', 'AI統合', 'Next.jsテンプレート', 'Web開発者'],
  publishedTime: '2026-01-15',
  modifiedTime: '2026-06-20',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Next.jsにAI APIを統合する方法（完全ガイド2026）',
  description: '実践チュートリアル：TypeScript SDKでNext.js 14プロジェクトにAI APIを統合する方法。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2026-01-15',
  dateModified: '2026-06-20',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ja/api-ia-nextjs',
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
        <Breadcrumb items={[{ name: 'ブログ', href: '/blog/ja' }, { name: 'AI API Next.js', href: '/blog/ja/api-ia-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> チュートリアル
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 2026年1月15日</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 8分で読める</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Next.jsプロジェクトにAI APIを統合する方法
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/ja/api-ia-nextjs`} title="Next.jsにAI APIを統合する方法" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            人工知能はもはや大企業専用ではありません。今日では、
            あらゆる開発者がAI機能 — テキスト生成、コード分析、
            SEO最適化 — をNext.jsアプリケーションに数分で統合できます。このガイドでは、
            Next.js 14 App RouterプロジェクトにAI APIを接続する方法を、初期設定から本番環境へのデプロイまで見ていきます。
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">なぜAIアプリケーションにNext.jsなのか？</h2>
          <p>
            Next.js 14はAIアプリケーションに具体的な利点を提供します：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Server Components</strong>: API呼び出しはサーバー側で行われ、APIキーはクライアントに公開されません</li>
            <li><strong className="text-white">Route Handlers</strong>: 別のExpressサーバーなしでネイティブAPIエンドポイントを作成</li>
            <li><strong className="text-white">Streaming</strong>: <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">ReadableStream</code>でAI応答をリアルタイムに表示</li>
            <li><strong className="text-white">Edge Runtime</strong>: 最小レイテンシーでエッジでAI呼び出しを実行</li>
            <li><strong className="text-white">Middleware</strong>: ルートを保護し、各リクエスト前に認証を管理</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">ステップ1：SDKの選択とインストール</h2>
          <p>
            最初のステップはAI APIプロバイダーを選択し、そのSDKをインストールすることです。2026年の主要な選択肢は以下の通りです：
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">NeuraAPI</strong>: 8+エンドポイントの統合API、ネイティブTypeScript SDK、無料プラン利用可能</li>
            <li><strong className="text-white">OpenAI</strong>: 歴史的リーダー、GPT-4oおよびGPT-4.1モデル</li>
            <li><strong className="text-white">Groq</strong>: オープンソースモデル（Llama、Mixtral）での超高速推論</li>
            <li><strong className="text-white">Anthropic</strong>: Claude、長文テキスト分析に特化</li>
          </ul>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# NeuraAPI SDKのインストール
npm install @neuraapi/sdk

# 環境変数 (.env.local)
NEURAPI_KEY=your_api_key_here`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">ステップ2：サーバー側クライアントの設定</h2>
          <p>
            クライアントを初期化するために<code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">src/lib/neura.ts</code>ファイルを作成します：
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

          <h2 className="text-2xl font-bold text-white mt-12">ステップ3：APIエンドポイントの作成</h2>
          <p>
            Next.js Route Handlersを使用して、クライアントからのリクエストを受け取るエンドポイントを作成します：
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import neurapi from '@/lib/neura'

export async function POST(req: NextRequest) {
  const { prompt, language = 'ja' } = await req.json()

  if (!prompt || prompt.length < 10) {
    return NextResponse.json(
      { error: 'プロンプトは10文字以上でなければなりません' },
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
      { error: '生成中にエラーが発生しました' },
      { status: 500 }
    )
  }
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">他のAIエンドポイントの使用</h2>
          <p>
            NeuraAPIは8以上のAIエンドポイントを提供しています。最も便利なもののいくつかの使用方法は以下の通りです：
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// SEO最適化
const seoResult = await neurapi.seo({
  url: 'https://mysite.com/page',
  keywords: ['next.js', 'saas', 'template'],
})

// コード生成
const codeResult = await neurapi.code({
  prompt: 'テーブルを表示するReactコンポーネントを作成',
  language: 'typescript',
})

// 感情分析
const sentimentResult = await neurapi.sentiment({
  text: 'この製品は素晴らしい、お勧めします！',
})

// コンテキストチャットボット
const chatResult = await neurapi.chat({
  message: 'Vercelにアプリをデプロイするにはどうすればいいですか？',
  context: 'あなたはNext.jsの技術アシスタントです',
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">本番環境でのベストプラクティス</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">常にインプットを検証</strong>: サーバー側でZodを使用してプロンプトを検証</li>
            <li><strong className="text-white">エラーを処理</strong>: 指数バックオフ付きのリトライを実装</li>
            <li><strong className="text-white">レスポンスをキャッシュ</strong>: 同じプロンプトにRedisまたはNext.jsキャッシュを使用</li>
            <li><strong className="text-white">レート制限</strong>: ミドルウェアでユーザーごとのリクエスト数を制限</li>
            <li><strong className="text-white">監視</strong>: 統合された分析機能で使用状況を追跡</li>
            <li><strong className="text-white">コスト</strong>: 予算を守るためにトークン消費を監視</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">出発点が必要ですか？</h3>
            <p className="text-indigo-200/70 mb-4">
              私たちのテンプレート<Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link>は、
              認証、ダッシュボード、請求をすでに統合しています。AIロジックを追加するだけです。
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              料金を見る →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">結論</h2>
          <p>
            Next.jsにAI APIを統合することは、シンプルで構造化されたプロセスになりました。適切なSDK、
            いくつかの設定ファイル、Route Handlersがあれば、数時間でユーザーにAI機能を
            提供できます。<Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">NeuraAPIのプレミアムテンプレート</Link>は、
            本番環境に対応した基盤を提供することで、さらに一歩進んでいます。
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">関連記事</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/creer-saas-48h" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Next.jsとStripeで48時間でSaaSを作成する
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
