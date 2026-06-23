import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: '利用規約 — NeuraAPI',
  description: 'NeuraAPI の利用規約 — 人工知能サービスおよびデジタルテンプレート。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/ja/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">利用規約</h1>
          <p className="mt-2 text-indigo-300">最終更新日：{new Date().toLocaleDateString('ja-JP')}</p>
        </div>
        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">第1条 — 目的</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>本利用規約（以下「規約」）は、NeuraAPI SAS（以下「販売者」）と、当社ウェブサイト <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a> で提供されるサービスおよび製品を購入しようとする個人または法人（以下「お客様」）との間の契約関係を規定します。</p>
              <p>ウェブサイトでのサービスまたは製品の注文は、本規約を無制限に受諾することを意味します。販売者は本規約をいつでも変更する権利を留保します。適用される規約は、お客様が注文した時点の有効なものです。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第2条 — 製品およびサービス</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>販売者は以下の製品およびサービスを販売しています：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">人工知能 API サブスクリプション</span> — 個人用 API キーによる AI エンドポイント（テキスト生成、SEO、コード）へのアクセス。</li>
                <li><span className="font-semibold text-white">デジタルテンプレート</span> — 購入したライセンスに準じてダウンロード・使用できる Web テンプレート（Next.js、Tailwind CSS）。</li>
                <li><span className="font-semibold text-white">クレジットパック</span> — API コール用の消費単位。一定期間有効。</li>
              </ul>
              <p>製品およびサービスの基本的な特徴はウェブサイトに掲載されています。画像および説明は参考情報であり、販売者を拘束するものではありません。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第3条 — 価格および支払い条件</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 価格</h3>
              <p>製品およびサービスの価格はすべて税込み（現行税率の VAT 込み）でユーロ（€）で表示されています。販売者は価格をいつでも変更する権利を留保します。適用される価格は、お客様が注文を確認した時点のものです。</p>
              <h3 className="font-semibold text-white mt-4">3.2 支払い方法</h3>
              <p>支払いは以下の方法のみでオンラインで行います：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>クレジットカード（Visa、Mastercard、American Express）</li>
                <li>銀行振込（Enterprise サブスクリプションの場合）</li>
                <li>Apple Pay / Google Pay</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">3.3 請求書</h3>
              <p>各支払い後に電子的に請求書が発行され、お客様エリアからアクセスできます。お客様は請求書を保管することに同意します。</p>
              <h3 className="font-semibold text-white mt-4">3.4 支払い遅延</h3>
              <p>支払いがなされない場合、販売者は15日間効果のない催告の後にサービスへのアクセスを停止する権利を留保します。法定金利の3倍の遅延損害金が適用される場合があります。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第4条 — 提供および配信</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 サブスクリプションサービス</h3>
              <p>支払い確認後すぐに API へのアクセスが提供されます。API キーは自動的に生成され、お客様エリアからアクセスできます。</p>
              <h3 className="font-semibold text-white mt-4">4.2 デジタルテンプレート</h3>
              <p>テンプレートは購入後すぐにダウンロードできます。ダウンロードリンクがメールで送信され、お客様エリアからもアクセスできます。</p>
              <h3 className="font-semibold text-white mt-4">4.3 クレジットパック</h3>
              <p>クレジットは支払い後すぐにお客様のアカウントに記載され、購入日から12ヶ月間有効です。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第5条 — クーリングオフ</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>法令に基づき、お客様は申込日または購入日から <span className="font-semibold text-white">14日間</span>以内に理由を問わずクーリングオフの権利を行使できます。</p>
              <h3 className="font-semibold text-white mt-4">5.1 クーリングオフの条件</h3>
              <p>クーリングオフを行使するには、お客様は販売者にクーリングオフの意思を明確に示す書面の通知（メールまたは手紙）を送付する必要があります。</p>
              <p>メール：<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              <h3 className="font-semibold text-white mt-4">5.2 クーリングオフの例外</h3>
              <p>以下の場合にはクーリングオフの権利を行使できません：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>お客様の明示的な同意を得て、14日期間の満了前にサービスの履行が開始された場合</li>
                <li>デジタルコンテンツ（テンプレート）がダウンロードまたは有効化された場合</li>
                <li>クーリングオフ期間の満了前にサービスが完全に履行された場合</li>
              </ul>
              <h3 className="font-semibold text-white mt-4">5.3 返金</h3>
              <p>有効なクーリングオフの場合、返金は最大14日以内に、元の取引に使用されたのと同じ支払い方法で行われます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第6条 — 保証</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 適合性保証</h3>
              <p>法令に基づき、販売者は契約に適合した商品を納品する義務を負います。お客様は納品後2年以内に適合性を請求できます。</p>
              <h3 className="font-semibold text-white mt-4">6.2 隠れた欠陥の保証</h3>
              <p>法令に基づき、販売者は隠れた欠陥の保証を負います。お客様は欠陥の発見後2年以内に行動を起こすことができます。</p>
              <h3 className="font-semibold text-white mt-4">6.3 サービスの可用性</h3>
              <p>販売者は月間稼働率99.9%（SLA）のサービス可用性を確保することを約束します。計画メンテナンスは48時間前に通知されます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第7条 — 責任の制限</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>販売者は以下に起因する損害について責任を負いません：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>お客様によるサービスの非準拠使用</li>
                <li>メンテナンスまたは更新のための一時的なサービス中断</li>
                <li>技術インフラの障害によるデータ損失</li>
                <li>間接損害、収益の損失、データ損失その他一切の損害</li>
                <li>違法目的または公序良俗に反する目的での AI 生成結果の使用</li>
              </ul>
              <p className="mt-4">販売者の総責任額は、損害の発生原因となった事象の前12ヶ月間にお客様が支払った金額に限定されます。</p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第8条 — テンプレート使用ライセンス</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>テンプレートの購入により、お客様には非独占的、譲渡不可、限定的な使用ライセンスが付与されます：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>個人または商業プロジェクトでテンプレートを使用</li>
                <li>必要に応じてテンプレートを変更</li>
                <li>無制限のプロジェクトでテンプレートを使用</li>
              </ul>
              <p className="mt-3">お客様は以下を行ってはなりません：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>テンプレートの転売または再配布</li>
                <li>テンプレートのサブライセンス</li>
                <li>著作権表示の削除または変更</li>
              </ul>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第9条 — 個人データ</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>お客様の個人データの処理は、<a href="/ja/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">プライバシーポリシー</a>に従い、GDPR に準拠しています。</p>
              <p>お客様は個人データへのアクセス、訂正、削除、ポータビリティ、異議の権利を有します。連絡先：<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></p>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第10条 — 準拠法および紛争</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>本規約は<span className="font-semibold text-white">フランス法</span>に準拠します。紛争が発生した場合、双方は友好解決を目指します。それが不可能な場合、紛争はパリの裁判所に提出されます。</p>
              <p>未解決の紛争については、消費者 mediator に無料で連絡できます：</p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">消費者 mediator — mediation-conso.fr</a></p>
                <p>• 欧州オンライン紛争解決プラットフォーム：<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">第11条 — その他規定</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 全体性</h3>
              <p>本規約は販売者とお客様の間の完全な合意を構成します。いずれかの条項が無効と宣言された場合、他の条項は引き続き有効です。</p>
              <h3 className="font-semibold text-white mt-4">11.2 変更</h3>
              <p>販売者は本規約をいつでも変更する権利を留保します。適用される規約は注文時点のものです。</p>
              <h3 className="font-semibold text-white mt-4">11.3 不可抗力</h3>
              <p>不可抗力の場合、販売者は義務の履行について責任を負いません。</p>
              <h3 className="font-semibold text-white mt-4">11.4 お問い合わせ</h3>
              <p>本規約に関するご質問は、<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a> までご連絡ください。</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
