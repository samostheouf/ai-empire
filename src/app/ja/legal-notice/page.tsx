import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '法的表記 — NeuraAPI',
  description: 'NeuraAPI ウェブサイトの法的情報。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ja/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">法的表記</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI ウェブサイトに関する法的情報</p>
          <p className="mt-1 text-sm text-indigo-400">最終更新日：{new Date().toLocaleDateString('ja-JP')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">運営者</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">会社名：</span>NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">法人形態：</span>株式会社（SAS）</p>
              <p><span className="font-semibold text-white">本社所在地：</span>12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET：</span>未記入</p>
              <p><span className="font-semibold text-white">SIREN：</span>未記入</p>
              <p><span className="font-semibold text-white">NAF/APE コード：</span>6201Z — コンピュータープログラミング</p>
              <p><span className="font-semibold text-white">欧州增值税番号：</span>未記入</p>
              <p><span className="font-semibold text-white">資本金：</span>未記入</p>
              <p><span className="font-semibold text-white">出版責任者：</span>未記入</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">ホスティングプロバイダー</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">名称：</span>Vercel Inc.</p>
              <p><span className="font-semibold text-white">住所：</span>340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
              <p><span className="font-semibold text-white">ウェブサイト：</span><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                本ウェブサイトは Vercel のクラウドインフラストラクチャでホスティングされており、GDPR のセキュリティおよび可用性基準に準拠しています。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">お問い合わせ</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">メール：</span><a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">電話：</span>未記入</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">住所：</span>12 Rue de la Paix, 75002 Paris, France</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">職業保険</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">保険会社：</span>AXA France</p>
              <p><span className="font-semibold text-white">証券番号：</span>未記入</p>
              <p><span className="font-semibold text-white">補償範囲：</span>職業賠償責任保険およびサイバーリスク保険</p>
              <p className="text-sm text-indigo-300 mt-4">
                法令に基づき、NeuraAPI SAS は事業活動の過程で第三者に損害を与えた場合に備える職業賠償責任保険に加入しています。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">知的財産</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                本ウェブサイトのすべてのコンテンツ（テキスト、画像、グラフィック、ロゴ、アイコン、サウンド、ソフトウェア）は、NeuraAPI SAS またはそのパートナーの独占的な財産であり、フランスおよび国際的な知的財産法によって保護されています。
              </p>
              <p>
                NeuraAPI SAS の事前の書面同意なしに、ウェブサイトまたはそのコンテンツの複製、表示、変更、公開、送信または改変は、いかなる方法でも禁止されています。
              </p>
              <p>
                本ウェブサイトに表示される商標およびロゴは、NeuraAPI SAS またはそのパートナーの登録商標です。事前の同意なしに、これらの商標またはロゴの全部または一部の複製または表示は禁止されています。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">個人データ</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                個人データの処理は、一般データ保護規則（GDPR — EU 2016/679）および個人情報保護法に基づいて規制されています。
              </p>
              <p>
                詳細については、<a href="/ja/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">プライバシーポリシー</a>をご覧ください。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                GDPR に基づき、本ウェブサイトの閲覧時にデバイスに Cookie が設定される場合があります。
              </p>
              <p>
                当社が使用する Cookie の詳細と管理方法については、<a href="/ja/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie ポリシー</a>をご覧ください。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">紛争解決</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                非専門家のお客様に対して、無料の紛争解決制度を提供しています。
              </p>
              <p>
                紛争が発生した場合は、消費者 mediator に連絡できます：
              </p>
              <div className="ml-4 space-y-2">
                <p>• ウェブサイト：<a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• 住所：BP 84229, 69342 Lyon Cedex 07</p>
                <p>• メール：<a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                欧州オンライン紛争解決プラットフォームもご利用いただけます：<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">準拠法</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                本法的情報はフランス法に準拠します。紛争が発生した場合、強制規定により別途定めがない限り、パリ司法裁判所が専属管轄となります。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
