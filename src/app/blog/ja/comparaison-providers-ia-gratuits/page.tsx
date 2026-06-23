import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "無料AIプロバイダー比較：Groq vs Gemini vs OpenAI",
  description: "開発者向けの無料AIプロバイダーの正直で詳細な比較。パフォーマンス、価格、制限、ユースケース。",
  path: '/blog/ja/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', '無料AI', '比較', 'AIプロバイダー', 'Web開発者', 'AI API'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '無料AIプロバイダー比較：Groq vs Gemini vs OpenAI',
  description: '開発者向けの無料AIプロバイダーの正直な比較。',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/ja/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: '無料AIプロバイダー比較：Groq vs Gemini vs OpenAI',
    description: '開発者向けの無料AIプロバイダーの正直な比較。',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/ja' },
      { name: 'AIプロバイダー比較', path: '/blog/ja/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/ja' }, { name: 'AIプロバイダー比較', href: '/blog/ja/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              比較
            </span>
            <span className="text-sm text-indigo-400">2024年6月20日</span>
            <span className="text-sm text-indigo-400">15分で読める</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            無料AIプロバイダー比較：Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/ja/comparaison-providers-ia-gratuits`} title="無料AIプロバイダー比較" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              適切なAIプロバイダーの選択は、開発者にとって重要な決定です。無料プランでは財務リスクなしにテストできますが、各プロバイダーには強みと弱みがあります。実際のテストに基づいた正直な比較を紹介します。
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">方法論</h3>
              <p className="text-sm text-indigo-300">
                この比較は2024年12月に実施したテストに基づいています。価格と無料ティアの制限は変更される場合があります。各プロバイダーを同じプロンプトでテストし、結果を比較しました。
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">概要</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">基準</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">無料ティア</td>
                    <td className="py-3 text-center">あり</td>
                    <td className="py-3 text-center">あり</td>
                    <td className="py-3 text-center">制限あり</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">利用可能なモデル</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">速度</td>
                    <td className="py-3 text-center text-green-400 font-semibold">非常に高速</td>
                    <td className="py-3 text-center">高速</td>
                    <td className="py-3 text-center">平均</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">品質（平均プロンプト）</td>
                    <td className="py-3 text-center">良好</td>
                    <td className="py-3 text-center text-green-400 font-semibold">非常に良好</td>
                    <td className="py-3 text-center text-green-400 font-semibold">優秀</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">コンテキスト（トークン）</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">あり</td>
                    <td className="py-3 text-center">あり</td>
                    <td className="py-3 text-center">あり</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">ビジョン</td>
                    <td className="py-3 text-center text-red-400">なし</td>
                    <td className="py-3 text-center text-green-400">あり</td>
                    <td className="py-3 text-center text-green-400">あり</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">対応言語</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — 速度が武器</h2>
            <p>
              Groqはその卓越した速度で際立っています。応答はほぼ瞬時で、高速なフィードバックが必要なアプリケーションに最適です：チャットボット、オートコンプリート、リアルタイムの提案。
            </p>
            <p>
              <strong className="text-white">強み：</strong> 驚異的な速度（最大500トークン/秒）、OpenAI互換API、高性能なLlama 3.3 70Bモデル、 generousな無料ティア。
            </p>
            <p>
              <strong className="text-white">弱み：</strong> ビジョンなし、Meta/Mistralのモデルに限定、複雑なタスクではGPT-4ほど高性能ではない。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Groqの例（OpenAI互換API）
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'こんにちは' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — Googleの巨人</h2>
            <p>
              Google Geminiは100万トークンのコンテキストを持つ無料ティアを提供しており、これは他に類を見ないものです。非常に長い文書を処理する能力は、データ分析や文書研究に興味深い選択肢にしています。
            </p>
            <p>
              <strong className="text-white">強み：</strong> 100万トークンのコンテキスト、組み込みビジョン、堅実なパフォーマンス、複数言語の公式SDK、Googleエコシステムとのネイティブ統合。
            </p>
            <p>
              <strong className="text-white">弱み：</strong> 時に不安定なAPI、時に不完全なドキュメント、Groqより高いレイテンシ、信頼性の低いfunction calling。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Google Geminiの例
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('機械学習を説明してください')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — 基準</h2>
            <p>
              OpenAIは依然として応答品質の基準です。GPT-4oは利用可能な最も高性能なモデルですが、無料ティアは非常に限られています。GPT-4o miniは優れた品質/価格バランスを提供します。
            </p>
            <p>
              <strong className="text-white">強み：</strong> 最高の応答品質、成熟したエコシステム、優秀なドキュメント、大規模なコミュニティ、信頼性の高いfunction calling、ビジョンとオーディオ。
            </p>
            <p>
              <strong className="text-white">弱み：</strong> ほぼ存在しない無料ティア、高コストなGPT-4o、変動するレイテンシ、単一プロバイダーへの依存。
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// OpenAIの例
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'こんにちは' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">おすすめ</h2>
            <p>
              万能に優れたプロバイダーはありません。選択はユースケースによって異なります：
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">速度とコスト重視</h3>
                <p className="text-sm text-indigo-300">Groqは敵なしです。応答速度と無料ティアは、プロトタイプやリアルタイムアプリケーションに最適な選択です。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">長いドキュメント向け</h3>
                <p className="text-sm text-indigo-300">100万トークンのコンテキストを持つGeminiは、非常に長いドキュメントやデータの解析に唯一実用的な選択肢です。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">最高品質重視</h3>
                <p className="text-sm text-indigo-300">GPT-4oは依然として最高のモデルです。品質が最重要で予算が許すなら、安全な選択です。</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">シンプルにまとめたい</h3>
                <p className="text-sm text-indigo-300">NeuraAPIはGroqとOpenAIを単一のAPIの背後に統合します。コードを変更せずにプロバイダーを切り替えられます。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">結論</h2>
            <p>
              各プロバイダーには適した場所があります。Groqは速度で優位、Geminiは長いドキュメントで優れ、OpenAIは品質でリードします。最も実用的なアプローチは、ユースケースに最も適したプロバイダーから始め、成長に応じて変更が必要かどうかを評価することです。
            </p>
            <p>
              NeuraAPIを使えば、選択する必要はありません。単一のAPIキー、複数のプロバイダーへのアクセス、統一された請求。さまざまなプロバイダーをテストして、ニーズに合ったものを見つけてください。
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              NeuraAPIを試す
            </h3>
            <p className="mt-3 text-indigo-200">
              単一のAPI経由でGroqとOpenAIにアクセス。100の無料クレジット。
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