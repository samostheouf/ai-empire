import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'クッキーポリシー — NeuraAPI',
  description: 'NeuraAPI のクッキーポリシー — 使用されるクッキーに関する情報と設定の管理。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ja/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">クッキーポリシー</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI で使用されるクッキーに関する情報</p>
          <p className="mt-1 text-sm text-indigo-400">最終更新日：{new Date().toLocaleDateString('ja-JP')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">クッキーとは？</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>クッキーは、ウェブサイトにアクセスした際にお客様のデバイス（パソコン、タブレット、スマートフォン）に保存される小さなテキストファイルです。ウェブサイトがデバイスを認識し、お客様の設定や過去の操作に関する情報を保存することができます。</p>
              <p>クッキーは一般データ保護規則（GDPR）および CNIL の推奨に従って規制されています。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">使用されるクッキーの種類</h2></div>
            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50"><Eye className="h-4 w-4 text-green-400" /></div>
                  <h3 className="text-lg font-bold text-white">必須クッキー</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">常に有効</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">これらのクッキーはウェブサイトの動作に不可欠です。ウェブサイトの正常な動作に必要なため、無効にすることはできません。</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">クッキー</th><th className="pb-2 font-medium">目的</th><th className="pb-2 font-medium">有効期間</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">session_id</td><td className="py-2">ユーザーセッション</td><td className="py-2">セッション</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">csrf_token</td><td className="py-2">CSRF 保護</td><td className="py-2">セッション</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">cookie_consent</td><td className="py-2">クッキー設定</td><td className="py-2">13ヶ月</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">auth_token</td><td className="py-2">認証</td><td className="py-2">30日</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50"><BarChart3 className="h-4 w-4 text-blue-400" /></div>
                  <h3 className="text-lg font-bold text-white">分析クッキー</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">同意が必要</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">これらのクッキーにより、ウェブサイトの訪問者数の測定、訪問者の利用方法の理解、最も訪問されたページの特定が可能になります。</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead><tr className="text-left text-indigo-300"><th className="pb-2 font-medium">クッキー</th><th className="pb-2 font-medium">目的</th><th className="pb-2 font-medium">有効期間</th></tr></thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_analytics</td><td className="py-2">訪問者統計</td><td className="py-2">セッション</td></tr>
                      <tr className="border-t border-indigo-800/50"><td className="py-2 font-mono text-xs">_vercel_insights</td><td className="py-2">パフォーマンス分析</td><td className="py-2">1年</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50"><Megaphone className="h-4 w-4 text-purple-400" /></div>
                  <h3 className="text-lg font-bold text-white">マーケティングクッキー</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">同意が必要</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">これらのクッキーは、お客様の興味に基づいてパーソナライズされた広告やコンテンツを提供するために使用されます。</p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">現在、NeuraAPI はサードパーティのマーケティングクッキーを使用していません。このセクションは必要に応じて将来の使用のために用意されています。</p>
                </div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Settings className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">クッキーの管理方法</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">同意バナー経由</h3>
              <p>初回アクセス時に同意バナーが表示され、有効化または無効化するクッキーを選択できます。ページ下部の「クッキー」ボタンをクリックして、いつでも設定を変更できます。</p>
              <h3 className="font-semibold text-white mt-4">ブラウザ設定経由</h3>
              <p>ブラウザの設定から直接クッキーを管理することもできます：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/ja/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/ja-jp/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/ja-jp/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>
              <h3 className="font-semibold text-white mt-4">無効化の影響</h3>
              <p>必須クッキーを無効にすると、ウェブサイトが正常に機能しなくなる場合があります。分析クッキーおよびマーケティングクッキーは、ウェブサイトの利用に影響を与えることなく、自由に有効化または無効化できます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">サードパーティクッキー</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>当社のウェブサイトにはサードパーティのコンポーネントが含まれている場合があります。これらのサードパーティは、お客様が当社のウェブサイトにアクセスした際にデバイスにクッキーを設定する場合があります。当社はこれらのサードパーティクッキーを制御できません。</p>
              <h3 className="font-semibold text-white mt-4">Stripe（決済）</h3>
              <p>Stripe は取引のセキュリティ保護と不正防止のためにクッキーを使用しています。詳細：<a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a></p>
              <h3 className="font-semibold text-white mt-4">Vercel（ホスティング）</h3>
              <p>Vercel はインフラストラクチャの正常な動作を確保し、匿名化された統計を収集するためにクッキーを設定する場合があります。詳細：<a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Info className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">お問い合わせ</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>当社のクッキーポリシーに関するご質問は、以下にご連絡ください：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>メール：<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO：<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">CNIL に苦情を申し立てることもできます：<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
