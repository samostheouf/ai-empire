import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: '服务条款 — NeuraAPI',
  description: 'NeuraAPI 服务条款 — 人工智能服务和数字模板。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/zh/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">服务条款</h1>
          <p className="mt-2 text-indigo-300">最后更新：{new Date().toLocaleDateString('zh-CN')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">第一条 — 目的</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                本服务条款（TOS）规范 NeuraAPI SAS 公司（以下简称"卖方"）与任何希望购买网站 <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a> 上提供的服务和产品的自然人或法人（以下简称"客户"）之间的合同关系。
              </p>
              <p>
                在网站上订购服务或产品即表示无条件接受本服务条款。卖方保留随时修改本服务条款的权利。适用的服务条款为客户下单时生效的版本。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第二条 — 产品和服务</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>卖方提供以下产品和服务的销售：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">人工智能 API 订阅</span> — 通过个人 API 密钥访问 AI 端点（文本生成、SEO、代码）。</li>
                <li><span className="font-semibold text-white">数字模板</span> — 可下载并按照所购许可证使用的 Web 模板（Next.js、Tailwind CSS）。</li>
                <li><span className="font-semibold text-white">积分包</span> — API 调用的消费单元，在指定时间内有效。</li>
              </ul>
              <p>
                产品和服务的基本特征在网站上展示。图片和描述仅供参考，不构成卖方的承诺。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第三条 — 价格和支付方式</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 价格</h3>
              <p>
                产品和服务的价格以欧元（€）标示，含所有税费（含现行税率的增值税）。卖方保留随时调整价格的权利。适用价格为客户确认订单时的价格。
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 支付方式</h3>
              <p>支付仅支持以下在线方式：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>信用卡（Visa、Mastercard、American Express）</li>
                <li>银行转账（适用于企业订阅）</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 开票</h3>
              <p>
                每次付款后均会电子开具发票，客户可在客户区域查看。客户应妥善保管发票。
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 未付款</h3>
              <p>
                如发生未付款，卖方保留暂停服务访问的权利，前提是催款通知在 15 天内未得到回应。可能会按法定利率三倍收取滞纳金。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第四条 — 提供和交付</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 订阅服务</h3>
              <p>
                支付确认后即可立即使用 API。API 密钥自动生成，可在客户区域访问。
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 数字模板</h3>
              <p>
                购买后可立即下载模板。下载链接通过电子邮件发送，也可在客户区域访问。
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 积分包</h3>
              <p>
                支付后积分立即计入客户账户，自购买之日起 12 个月内有效。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第五条 — 撤回权</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                根据相关法律规定，客户在订阅或购买之日起 <span className="font-semibold text-white">14 天</span>内享有撤回权，无需说明理由。
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 撤回条件</h3>
              <p>客户须向卖方发送书面声明（电子邮件或信函），明确表达撤回意愿。</p>
              <p>电子邮件：<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 撤回权例外</h3>
              <p>在以下情况下不得行使撤回权：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>经客户明确同意，服务在 14 天期限届满前已开始执行</li>
                <li>数字内容（模板）已被客户下载或激活</li>
                <li>服务在撤回期限届满前已完全履行</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 退款</h3>
              <p>
                有效撤回的情况下，退款将在最多 14 天内通过与原始交易相同的支付方式完成。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第六条 — 保证</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 合格保证</h3>
              <p>
                根据相关法律规定，卖方有义务交付符合合同的产品。客户可在交付后 2 年内要求产品合格。
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 隐蔽瑕疵保证</h3>
              <p>
                根据相关法律规定，卖方须对隐蔽瑕疵承担责任。客户可在发现瑕疵后 2 年内采取行动。
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 服务可用性</h3>
              <p>
                卖方承诺确保服务可用性，月度正常运行时间为 99.9%（SLA）。计划维护将提前 48 小时通知。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第七条 — 责任限制</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>卖方不对因以下原因造成的损害承担责任：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>客户对服务的不当使用</li>
                <li>因维护或更新导致的临时服务中断</li>
                <li>因技术基础设施故障导致的数据丢失</li>
                <li>间接损害、收入损失、数据丢失或任何其他损害</li>
                <li>将 AI 生成的结果用于非法目的或违反公共秩序</li>
              </ul>
              <p className="mt-4">
                卖方的总责任限于客户在导致损害的事件发生前 12 个月内支付的金额。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第八条 — 模板使用许可</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                购买模板即授予客户非独占性、不可转让的有限使用许可，允许：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>在个人或商业项目中使用模板</li>
                <li>修改模板以适应自身需求</li>
                <li>不限数量地使用模板</li>
              </ul>
              <p className="mt-3">客户不得：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>转售或重新分发模板</li>
                <li>将模板转许可给第三方</li>
                <li>删除或修改版权声明</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第九条 — 个人数据</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                客户个人数据的处理由我们的<a href="/zh/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">隐私政策</a>规定，符合 GDPR。
              </p>
              <p>
                客户有权访问、更正、删除、携带和反对其个人数据，请联系：<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">第十条 — 适用法律和争议</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                本服务条款受<span className="font-semibold text-white">法国法律</span>管辖。如发生争议，双方应努力寻求友好解决方案。如无法解决，争议将提交巴黎司法法院审理。
              </p>
              <p>
                如发生未解决的争议，客户可免费使用消费者调解服务：
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">消费者调解 — mediation-conso.fr</a></p>
                <p>• 欧盟在线争议解决平台：<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">第十一条 — 其他条款</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 完整性</h3>
              <p>
                本服务条款构成卖方与客户之间的完整协议。如某条款被宣告无效，其余条款仍然有效。
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 修改</h3>
              <p>
                卖方保留随时修改本服务条款的权利。适用的服务条款为客户下单时生效的版本。
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 不可抗力</h3>
              <p>
                如发生不可抗力事件，卖方不承担履行义务的责任。
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 联系方式</h3>
              <p>
                如对本服务条款有任何疑问，请联系我们：<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
