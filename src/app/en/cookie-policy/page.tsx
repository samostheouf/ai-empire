import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy — NeuraAPI',
  description: 'Cookie policy of NeuraAPI — Information about cookies used and management of your preferences.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/en/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="mt-2 text-indigo-300">Information about cookies used on NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">What is a cookie?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                A cookie is a small text file placed on your device (computer, tablet, smartphone) when you visit a website. It allows the website to recognize your device and store certain information about your preferences or past actions.
              </p>
              <p>
                Cookies are governed by the Information Technology and Liberties Law, the General Data Protection Regulation (GDPR), and the recommendations of the CNIL.
              </p>
            </div>
          </section>

          {/* Types of Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Types of Cookies Used</h2>
            </div>

            <div className="space-y-8">
              {/* Essential cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Essential Cookies</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Always Active</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  These cookies are essential for the website to function. They cannot be deactivated as they are necessary for the proper functioning of the website.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Purpose</th>
                        <th className="pb-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">User session</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">CSRF protection</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Cookie preferences</td>
                        <td className="py-2">13 months</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Authentication</td>
                        <td className="py-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Analytics Cookies</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">With Consent</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  These cookies allow us to measure the audience of our website, understand how visitors use it, and identify the most visited pages.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Purpose</th>
                        <th className="pb-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Visitor statistics</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Performance analysis</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Megaphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Marketing Cookies</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">With Consent</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  These cookies are used to provide you with personalized advertisements and content based on your interests.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    Currently, NeuraAPI does not use third-party marketing cookies. This section is provided for future use if necessary.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">How to Manage Your Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Via the consent banner</h3>
              <p>
                During your first visit, a consent banner allows you to choose which cookies you wish to enable or disable. You can change your preferences at any time by clicking the &quot;Cookies&quot; button at the bottom of the page.
              </p>

              <h3 className="font-semibold text-white mt-4">Via your browser settings</h3>
              <p>You can also manage cookies directly from your browser settings:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Consequences of Deactivation</h3>
              <p>
                Deactivating essential cookies may prevent the website from functioning properly. Analytics and marketing cookies can be freely enabled or disabled without impact on website usage.
              </p>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Third-Party Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Our website may include components from third parties. These third parties may place cookies on your device when you visit our website. We have no control over these third-party cookies.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (Payments)</h3>
              <p>
                Stripe uses cookies to secure transactions and prevent fraud. For more information: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (Hosting)</h3>
              <p>
                Vercel may place cookies to ensure the proper functioning of the infrastructure and collect anonymized statistics. For more information: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                For any questions relating to our cookie policy, you can contact us:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                You may also file a complaint with the CNIL: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
