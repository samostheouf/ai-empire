import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '隐私政策（GDPR）— NeuraAPI',
  description: 'NeuraAPI 隐私政策，符合《通用数据保护条例》（GDPR — EU 2016/679）。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/zh/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">隐私政策</h1>
          <p className="mt-2 text-indigo-300">符合《通用数据保护条例》（GDPR — EU 2016/679）</p>
          <p className="mt-1 text-sm text-indigo-400">最后更新：{new Date().toLocaleDateString('zh-CN')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. 数据控制者</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">控制者：</span>NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">注册地址：</span>12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET：</span>待填写</p>
              <p><span className="font-semibold text-white">数据保护官（DPO）：</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Paris, France</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. 收集的数据</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>在提供服务的过程中，我们收集以下类别的数据：</p>

              <h3 className="font-semibold text-white">身份识别数据</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>姓名</li>
                <li>电子邮件地址</li>
                <li>密码（加密存储）</li>
                <li>用户名</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">账单数据</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>账单地址</li>
                <li>支付信息（由 Stripe 处理，我们无法访问卡号）</li>
                <li>交易历史记录</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">使用数据</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>API 密钥（加密存储）</li>
                <li>API 调用历史（提示词、响应、时间戳）</li>
                <li>使用统计（调用次数、已消费积分）</li>
                <li>性能和诊断数据</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">连接数据</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP 地址</li>
                <li>浏览器类型和操作系统</li>
                <li>登录日期和时间</li>
                <li>访问的页面和执行的操作</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. 处理目的</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>您的数据用于以下目的：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">账户管理：</span>用户账户的创建、管理和认证</li>
                <li><span className="font-semibold text-white">服务提供：</span>API 访问、模板交付、积分管理</li>
                <li><span className="font-semibold text-white">账单：</span>发票开具、支付跟踪、催款</li>
                <li><span className="font-semibold text-white">客户支持：</span>响应请求和解决问题</li>
                <li><span className="font-semibold text-white">服务改进：</span>使用统计、性能优化</li>
                <li><span className="font-semibold text-white">安全：</span>防欺诈、检测滥用、攻击防护</li>
                <li><span className="font-semibold text-white">通信：</span>发送与服务相关的重要通知</li>
                <li><span className="font-semibold text-white">法律义务：</span>保存会计和税务数据</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. 处理的法律依据</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>每项数据处理均基于以下法律依据：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">合同履行（GDPR 第 6.1.b 条）：</span>服务提供、账户管理、账单</li>
                <li><span className="font-semibold text-white">合法利益（GDPR 第 6.1.f 条）：</span>服务安全、改进、防欺诈</li>
                <li><span className="font-semibold text-white">法律义务（GDPR 第 6.1.c 条）：</span>保存会计和税务数据</li>
                <li><span className="font-semibold text-white">同意（GDPR 第 6.1.a 条）：</span>非必要 Cookie、营销通信</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. 保存期限</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>您的数据保存期限如下：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">账户数据：</span>在整个合同关系期间，之后 3 年（自最后一次登录起）</li>
                <li><span className="font-semibold text-white">账单数据：</span>10 年（法定会计义务）</li>
                <li><span className="font-semibold text-white">API 调用历史：</span>12 个月（自最后一次调用起）</li>
                <li><span className="font-semibold text-white">连接数据：</span>12 个月</li>
                <li><span className="font-semibold text-white">Cookie：</span>最长 13 个月</li>
                <li><span className="font-semibold text-white">潜在客户数据：</span>3 年（自最后一次联系起）</li>
              </ul>
              <p className="mt-4">
                期满后，数据将被不可逆转地删除或匿名化。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. 数据接收方</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>您的数据可能与以下类别的接收方共享：</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">技术提供商：</span>Vercel（托管）、Stripe（支付）、Vercel Analytics（统计）</li>
                <li><span className="font-semibold text-white">支付提供商：</span>Stripe Inc. — 安全支付处理</li>
                <li><span className="font-semibold text-white">主管机关：</span>法律义务或司法要求时</li>
              </ul>
              <p className="mt-4">
                这些提供商受合同义务约束，确保您的数据保护符合 GDPR。我们永远不会向第三方出售您的数据。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. 欧盟以外的传输</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                我们的部分提供商位于欧盟以外（特别是美国）。这些传输由以下方式规范：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>标准合同条款（SCC），符合欧盟委员会的执行决定</li>
                <li>隐私盾（适用于经认证的提供商）</li>
                <li>GDPR 第 46 条及后续条款规定的额外适当保障</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. 您的权利</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                根据 GDPR，您对个人数据享有以下权利：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">访问权（第 15 条）：</span>获取数据副本</li>
                <li><span className="font-semibold text-white">更正权（第 16 条）：</span>更正不准确的数据</li>
                <li><span className="font-semibold text-white">删除权（第 17 条）：</span>请求删除数据</li>
                <li><span className="font-semibold text-white">限制处理权（第 18 条）：</span>限制数据处理</li>
                <li><span className="font-semibold text-white">数据可携带权（第 20 条）：</span>以结构化格式接收数据</li>
                <li><span className="font-semibold text-white">反对权（第 21 条）：</span>反对数据处理</li>
                <li><span className="font-semibold text-white">撤回同意：</span>随时撤回，不影响先前处理的合法性</li>
              </ul>
              <p className="mt-4">
                要行使您的权利，请联系我们：<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                您还有权向 CNIL 提出投诉：<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                我们的网站根据现行法规使用 Cookie。更多信息请参阅我们的<a href="/zh/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie 政策</a>。
              </p>
              <p>
                您可以在首次访问时通过同意横幅管理 Cookie 偏好设置。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. 数据安全</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                我们采取以下技术和组织措施来保护您的数据：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>所有通信使用 TLS/SSL 加密</li>
                <li>敏感数据静态加密</li>
                <li>支持多因素认证（MFA）</li>
                <li>加密并安全管理的 API 密钥</li>
                <li>数据访问受限（最小权限原则）</li>
                <li>访问日志记录和监控</li>
                <li>定期安全审计</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. 联系方式</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>如对个人数据保护有任何疑问：</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>电子邮件：</span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>地址：NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, France</span>
                </div>
              </div>
              <p className="mt-4">
                我们承诺在一个月内回复您的请求。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
