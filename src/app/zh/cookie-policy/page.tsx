import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie 政策 — NeuraAPI',
  description: 'NeuraAPI Cookie 政策 — 关于使用的 Cookie 及偏好管理的信息。',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/zh/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Cookie 政策</h1>
          <p className="mt-2 text-indigo-300">NeuraAPI 使用的 Cookie 信息</p>
          <p className="mt-1 text-sm text-indigo-400">最后更新：{new Date().toLocaleDateString('zh-CN')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">什么是 Cookie？</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Cookie 是在您访问网站时放置在您的设备（电脑、平板电脑、智能手机）上的小型文本文件。它允许网站识别您的设备并存储有关您的偏好或过去操作的某些信息。
              </p>
              <p>
                Cookie 受《通用数据保护条例》（GDPR）和 CNIL 建议的约束。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">使用的 Cookie 类型</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">必要 Cookie</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">始终启用</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  这些 Cookie 对网站运行至关重要。它们无法被禁用，因为它们是网站正常运行所必需的。
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">用途</th>
                        <th className="pb-2 font-medium">有效期</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">用户会话</td>
                        <td className="py-2">会话</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">CSRF 防护</td>
                        <td className="py-2">会话</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Cookie 偏好</td>
                        <td className="py-2">13 个月</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">认证</td>
                        <td className="py-2">30 天</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">分析 Cookie</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">需同意</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  这些 Cookie 帮助我们衡量网站流量、了解访问者的使用方式以及识别最受欢迎的页面。
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">用途</th>
                        <th className="pb-2 font-medium">有效期</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">访问统计</td>
                        <td className="py-2">会话</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">性能分析</td>
                        <td className="py-2">1 年</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Megaphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">营销 Cookie</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">需同意</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  这些 Cookie 用于根据您的兴趣提供个性化广告和内容。
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    目前，NeuraAPI 不使用第三方营销 Cookie。此部分为将来需要时使用而保留。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">如何管理您的 Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">通过同意横幅</h3>
              <p>
                首次访问时，同意横幅允许您选择要启用或禁用的 Cookie。您可以随时通过点击页面底部的"Cookie"按钮更改偏好设置。
              </p>

              <h3 className="font-semibold text-white mt-4">通过浏览器设置</h3>
              <p>您也可以直接通过浏览器设置管理 Cookie：</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/zh-CN/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/zh-cn/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/zh-cn/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">禁用的后果</h3>
              <p>
                禁用必要 Cookie 可能导致网站无法正常运行。分析和营销 Cookie 可以自由启用或禁用，不会影响网站的使用。
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">第三方 Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                我们的网站可能包含第三方组件。这些第三方在您访问我们的网站时可能会在您的设备上放置 Cookie。我们无法控制这些第三方 Cookie。
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe（支付）</h3>
              <p>
                Stripe 使用 Cookie 来保护交易和防止欺诈。更多信息：<a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel（托管）</h3>
              <p>
                Vercel 可能放置 Cookie 以确保基础设施正常运行并收集匿名统计数据。更多信息：<a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">联系方式</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                如对我们的 Cookie 政策有任何疑问，请联系我们：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>电子邮件：<a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO：<a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                您也可以向 CNIL 提出投诉：<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
