import { Sparkles, Zap, Shield, Globe, Star, Users, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({ locale: 'ja_JP',
  title: 'NeuraAPI - AI APIとテンプレート - 日本の開発者向け',
  description: '日本の開発者コミュニティ向けのプレミアムAI APIとNext.jsテンプレート。高速、安全、信頼性の高いAI基盤。',
  path: '/ja/jp',
  keywords: ['AI API 日本', 'Next.js テンプレート', 'SaaS テンプレート', '人工知能 API', '開発者ツール', '日本語対応'],
})

const organizationSchema = generateOrganizationSchema()

const jaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'NeuraAPIは日本でどのような支払い方法を受け付けていますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visa、Mastercard、American Express、PayPal、Apple Pay、Google Payに対応しています。すべての決済はStripeを通じて安全に処理されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'APPI（個人情報保護法）に準拠していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、NeuraAPIは日本の個人情報保護法（APPI）に完全に準拠しています。アジア太平洋地域のデータセンターでデータを処理します。',
      },
    },
    {
      '@type': 'Question',
      name: '日本語のサポートはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、日本語のドキュメントとカスタマーサポートを提供しています。ビジネス時間帯に日本語でサポートいたします。',
      },
    },
  ],
}

export default function JapanPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jaFaqSchema) }}
      />

      <link rel="alternate" hrefLang="en-us" href="https://ai-empire-steel.vercel.app/en/usa" />
      <link rel="alternate" hrefLang="en-gb" href="https://ai-empire-steel.vercel.app/en/uk" />
      <link rel="alternate" hrefLang="de" href="https://ai-empire-steel.vercel.app/de/de" />
      <link rel="alternate" hrefLang="ja" href="https://ai-empire-steel.vercel.app/ja/jp" />
      <link rel="alternate" hrefLang="pt-br" href="https://ai-empire-steel.vercel.app/pt/br" />
      <link rel="alternate" hrefLang="x-default" href="https://ai-empire-steel.vercel.app" />

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <TrendingUp className="w-4 h-4" />
            プレローンチ — 最初のユーザーの仲間になりましょう
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            AI APIと<br />
            <span className="text-indigo-400">テンプレート</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            高速なAI APIとプレミアムNext.jsテンプレートで開発を加速。APPI準拠、アジア太平洋リージョンのインフラで日本向けに最適化。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              テンプレートを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              ドキュメント
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-indigo-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> API本番稼働中</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 無料で開始</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 99.9% アップタイム</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            日本の開発者がNeuraAPIを選ぶ理由
          </h2>
          <p className="text-center text-indigo-300 mt-2">エンタープライズ品質と開発者の使いやすさを両立</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">アジア太平洋リージョン</h3>
              <p className="mt-2 text-indigo-300">
                日本国内のユーザーに最適化された低レイテンシインフラ。東京リージョン対応。
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">APPI準拠</h3>
              <p className="mt-2 text-indigo-300">
                日本の個人情報保護法（APPI）に完全準拠。セキュリティとプライバシーを最優先。
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">日本語サポート</h3>
              <p className="mt-2 text-indigo-300">
                日本語のドキュメントとカスタマーサポート。ビジネス時間帯に日本語でお問い合わせ可能。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            JPYでの料金プラン
          </h2>
          <p className="text-center text-indigo-300 mt-2">隠れたコストはありません。いつでもキャンセル可能。</p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '¥0',
                credits: '100クレジット',
                description: '個人開発や実験に最適',
                features: ['月100APIクレジット', '全AIモデル', 'コミュニティサポート', '標準レート制限'],
                cta: '無料で始める',
                popular: false,
              },
              {
                name: 'Pro',
                price: '¥4,500',
                credits: '10,000クレジット',
                description: '成長中のスタートアップやインディーズ向け',
                features: ['月10,000APIクレジット', '優先サポート', '高度な分析', 'カスタムレート制限', 'Webhook連携'],
                cta: 'Proを取得',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '¥15,000',
                credits: '無制限',
                description: 'スケーラビリティと信頼性が必要なチーム向け',
                features: ['無制限APIクレジット', '専任サポート', 'カスタムSLA', 'チーム管理', 'SSO & SAML', 'オンプレミスオプション'],
                cta: '営業に連絡',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-indigo-500 bg-indigo-900/50'
                    : 'border-indigo-800/50 bg-indigo-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    一番人気
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-indigo-300">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== '¥0' && (
                    <span className="text-indigo-300">/月</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-indigo-400">{plan.credits}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm text-indigo-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price === '¥0' ? '/register' : '/pricing'}
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-indigo-600 text-indigo-200 hover:bg-indigo-900/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-indigo-400 mt-6">
            支払い方法：Visa、Mastercard、Amex、PayPal、Apple Pay、Google Pay — StripeでJPY処理
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            日本のテックチームに信頼されています
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'NeuraAPI Team', role: 'プレローンチ', content: 'NeuraAPIはプレローンチ段階です。最初のユーザーの仲間になりましょう。' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-indigo-200 italic">&quot;{item.content}&quot;</p>
                <div className="mt-4 pt-4 border-t border-indigo-800/50">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-indigo-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            より速く開発しませんか？
          </h2>
          <p className="mt-4 text-indigo-200">
            NeuraAPIに参加しましょう — プレローンチ段階です。無料で始めましょう — クレジットカード不要。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              無料で始める
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              ドキュメントを見る
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-indigo-900/20 bg-indigo-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </div>
            <p className="text-sm text-indigo-300">
              &copy; {new Date().getFullYear()} NeuraAPI. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mentions-legales" className="text-sm text-indigo-400 hover:text-white transition-colors">法的情報</Link>
              <Link href="/cgv" className="text-sm text-indigo-400 hover:text-white transition-colors">利用規約</Link>
              <Link href="/politique-confidentialite" className="text-sm text-indigo-400 hover:text-white transition-colors">プライバシー</Link>
              <Link href="/politique-cookies" className="text-sm text-indigo-400 hover:text-white transition-colors">クッキー</Link>
              <Link href="/contact" className="text-sm text-indigo-400 hover:text-white transition-colors">お問い合わせ</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
