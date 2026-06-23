import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'プライバシーポリシー（GDPR）— NeuraAPI',
  description: 'NeuraAPI のプライバシーポリシー。一般データ保護規則（GDPR — EU 2016/679）に準拠。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ja/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">プライバシーポリシー</h1>
          <p className="mt-2 text-indigo-300">一般データ保護規則（GDPR — EU 2016/679）に準拠</p>
          <p className="mt-1 text-sm text-indigo-400">最終更新日：{new Date().toLocaleDateString('ja-JP')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">1. データ管理者</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">管理者：</span>NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">本社所在地：</span>12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET：</span>未記入</p>
              <p><span className="font-semibold text-white">データ保護官（DPO）：</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2 mt-1"><MapPin className="h-4 w-4 text-indigo-400" /><p>12 Rue de la Paix, 75002 Paris, France</p></div>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Database className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">2. 収集するデータ</h2></div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>当社のサービスにおいて、以下のカテゴリのデータを収集します：</p>
              <h3 className="font-semibold text-white">本人確認データ</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>氏名</li><li>メールアドレス</li><li>パスワード（暗号化）</li><li>ユーザー名</li></ul>
              <h3 className="font-semibold text-white mt-4">請求データ</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>請求先住所</li><li>支払い情報（Stripe が処理。カード番号へのアクセスはなし）</li><li>取引履歴</li></ul>
              <h3 className="font-semibold text-white mt-4">利用データ</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>API キー（暗号化）</li><li>API コール履歴（プロンプト、応答、タイムスタンプ）</li><li>利用統計（コール数、消費クレジット）</li><li>パフォーマンスおよび診断データ</li></ul>
              <h3 className="font-semibold text-white mt-4">接続データ</h3>
              <ul className="list-disc list-inside space-y-1 ml-4"><li>IP アドレス</li><li>ブラウザの種類と OS</li><li>ログイン日時</li><li>访问したページと実行した操作</li></ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Target className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">3. 処理の目的</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>お客様のデータは以下の目的で処理されます：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">アカウント管理：</span>ユーザーアカウントの作成、管理、認証</li>
                <li><span className="font-semibold text-white">サービス提供：</span>API アクセス、テンプレート配信、クレジット管理</li>
                <li><span className="font-semibold text-white">請求：</span>請求書発行、支払い追跡、督促</li>
                <li><span className="font-semibold text-white">カスタマーサポート：</span>リクエストへの対応と問題解決</li>
                <li><span className="font-semibold text-white">サービス改善：</span>利用統計、パフォーマンス最適化</li>
                <li><span className="font-semibold text-white">セキュリティ：</span>不正防止、悪用検出、攻撃防止</li>
                <li><span className="font-semibold text-white">通信：</span>サービスに関する重要な通知の送信</li>
                <li><span className="font-semibold text-white">法的義務：</span>会計および税務データの保存</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">4. 処理の法的根拠</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>各データ処理は以下の法的根拠に基づきます：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">契約履行（GDPR 第6.1.b条）：</span>サービス提供、アカウント管理、請求</li>
                <li><span className="font-semibold text-white">正当な利益（GDPR 第6.1.f条）：</span>サービスセキュリティ、改善、不正防止</li>
                <li><span className="font-semibold text-white">法的義務（GDPR 第6.1.c条）：</span>会計および税務データの保存</li>
                <li><span className="font-semibold text-white">同意（GDPR 第6.1.a条）：</span>非必須 Cookie、マーケティング通信</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Clock className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">5. 保存期間</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>お客様のデータは以下の期間保存されます：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">アカウントデータ：</span>契約関係の全期間、最終ログインから3年間</li>
                <li><span className="font-semibold text-white">請求データ：</span>10年間（法定会計義務）</li>
                <li><span className="font-semibold text-white">API コール履歴：</span>最終コールから12ヶ月間</li>
                <li><span className="font-semibold text-white">接続データ：</span>12ヶ月間</li>
                <li><span className="font-semibold text-white">Cookie：</span>最大13ヶ月間</li>
                <li><span className="font-semibold text-white">営業データ：</span>最終接触から3年間</li>
              </ul>
              <p className="mt-4">期間満了後、データは不可逆的に削除または匿名化されます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">6. データの受領者</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>お客様のデータは以下のカテゴリの受領者と共有される場合があります：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">技術プロバイダー：</span>Vercel（ホスティング）、Stripe（決済）、Vercel Analytics（統計）</li>
                <li><span className="font-semibold text-white">決済プロバイダー：</span>Stripe Inc. — 安全な決済処理</li>
                <li><span className="font-semibold text-white">管轄当局：</span>法的義務または司法上の要請がある場合</li>
              </ul>
              <p className="mt-4">これらのプロバイダーは GDPR に準拠したデータ保護を保証する契約義務に従います。お客様のデータを第三者に販売することはありません。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Eye className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">7. EU 域外への転送</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>一部のプロバイダーは EU 域外（特に米国）に所在しています。これらの転送は以下によって規制されます：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>欧州委員会の実施決定に準拠した標準契約条項（SCC）</li>
                <li>プライバシーシールド（認証プロバイダー向け）</li>
                <li>GDPR 第46条以降に準拠した適切な追加的保証</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Scale className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">8. お客様の権利</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>GDPR に基づき、お客様の個人データについて以下の権利を有します：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">アクセス権（第15条）：</span>データのコピーを取得</li>
                <li><span className="font-semibold text-white">訂正権（第16条）：</span>不正確なデータの訂正</li>
                <li><span className="font-semibold text-white">削除権（第17条）：</span>データの削除を要求</li>
                <li><span className="font-semibold text-white">処理制限権（第18条）：</span>データ処理の制限</li>
                <li><span className="font-semibold text-white">データポータビリティ権（第20条）：</span>構造化された形式でデータを受信</li>
                <li><span className="font-semibold text-white">異議権（第21条）：</span>データ処理に異議を唱える</li>
                <li><span className="font-semibold text-white">同意の撤回：</span>いつでも可能。以前の処理の合法性に影響なし</li>
              </ul>
              <p className="mt-4">権利を行使するには、<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a> までご連絡ください。</p>
              <p>CNIL に苦情を申し立てる権利もございます：<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Cookie className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">9. Cookie</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>当社のウェブサイトは現行法規に準拠して Cookie を使用しています。詳細は<a href="/ja/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie ポリシー</a>をご覧ください。</p>
              <p>初回アクセス時に表示される同意バナーで Cookie の設定を管理できます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Shield className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">10. データセキュリティ</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>お客様のデータを保護するために以下の技術的・組織的措置を講じています：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>全通信の TLS/SSL 暗号化</li>
                <li>保存時の機密データ暗号化</li>
                <li>多要素認証（MFA）対応</li>
                <li>暗号化され安全に管理される API キー</li>
                <li>最小権限の原則によるデータアクセス制限</li>
                <li>アクセスログ記録と監視</li>
                <li>定期的なセキュリティ監査</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6"><Mail className="h-6 w-6 text-indigo-400" /><h2 className="text-2xl font-bold text-white">11. お問い合わせ</h2></div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>個人データの保護に関するご質問：</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-400" /><span>メール：</span><a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-400" /><span>住所：NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, France</span></div>
              </div>
              <p className="mt-4">1ヶ月以内にお問い合わせにお答えすることを約束します。</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
