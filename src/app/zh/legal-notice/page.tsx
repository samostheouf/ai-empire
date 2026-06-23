import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: '法律声明 — NeuraAPI',
  description: 'NeuraAPI 网站法律声明，依据相关法律法规。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/zh/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">法律声明</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI 网站相关信息</p>
          <p className="mt-1 text-sm text-indigo-400">最后更新：{new Date().toLocaleDateString('zh-CN')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">网站运营者</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">公司名称：</span>NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">法律形式：</span>简化股份公司（SAS）</p>
              <p><span className="font-semibold text-white">注册地址：</span>12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET：</span>待填写</p>
              <p><span className="font-semibold text-white">SIREN：</span>待填写</p>
              <p><span className="font-semibold text-white">NAF/APE 代码：</span>6201Z — 计算机编程</p>
              <p><span className="font-semibold text-white">欧盟增值税号：</span>待填写</p>
              <p><span className="font-semibold text-white">注册资本：</span>待填写</p>
              <p><span className="font-semibold text-white">发布负责人：</span>待填写</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">托管服务提供商</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">名称：</span>Vercel Inc.</p>
              <p><span className="font-semibold text-white">地址：</span>340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
              <p><span className="font-semibold text-white">网站：</span><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                本网站托管于 Vercel 的云基础设施，符合 GDPR 安全和可用性标准。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">联系方式</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">电子邮件：</span><a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">电话：</span>待填写</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">地址：</span>12 Rue de la Paix, 75002 Paris, France</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">专业保险</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">保险公司：</span>AXA France</p>
              <p><span className="font-semibold text-white">保单号：</span>待填写</p>
              <p><span className="font-semibold text-white">承保范围：</span>职业责任险和网络安全险</p>
              <p className="text-sm text-indigo-300 mt-4">
                根据法律规定，NeuraAPI SAS 持有职业责任保险，覆盖其业务活动中对第三方造成的损害。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">知识产权</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                本网站的所有内容（文字、图片、图形、商标、图标、声音、软件）均为 NeuraAPI SAS 或其合作伙伴的独有财产，受法国和国际知识产权法律保护。
              </p>
              <p>
                未经 NeuraAPI SAS 事先书面授权，禁止以任何方式复制、展示、修改、发布、传播或篡改本网站或其内容。
              </p>
              <p>
                本网站上出现的商标和标识均为 NeuraAPI SAS 或其合作伙伴的注册商标。未经事先授权，禁止全部或部分复制或展示这些商标或标识。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">个人数据</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                个人数据的处理受《通用数据保护条例》（GDPR — EU 2016/679）和相关数据保护法律的约束。
              </p>
              <p>
                如需更多信息，请参阅我们的<a href="/zh/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">隐私政策</a>。
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
                根据 GDPR 的规定，您在浏览本网站时可能会在您的设备上放置 Cookie。
              </p>
              <p>
                如需了解更多关于我们使用的 Cookie 及如何管理它们的信息，请参阅我们的<a href="/zh/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie 政策</a>。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">争议解决</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                根据相关法律规定，我们为非专业客户提供免费的争议解决机制。
              </p>
              <p>
                如发生争议，您可以联系消费者调解员：
              </p>
              <div className="ml-4 space-y-2">
                <p>• 网站：<a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• 地址：BP 84229, 69342 Lyon Cedex 07</p>
                <p>• 电子邮件：<a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                您也可以使用欧盟在线争议解决平台：<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">适用法律</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                本法律声明受法国法律管辖。如发生争议，巴黎司法法院为唯一管辖法院，除非有强制性法律另有规定。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
