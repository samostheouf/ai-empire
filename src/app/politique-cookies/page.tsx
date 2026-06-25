import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const dict = translations as unknown as Record<string, string>
  const t = (key: string) => dict[key] || key
  return {
    title: t('politiqueCookiesTitle'),
    description: t('politiqueCookiesDescription'),
    robots: 'index, follow',
    alternates: { canonical: 'https://ai-empire-steel.vercel.app/politique-cookies' },
  }
}

export default async function PolitiqueCookies() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">{t('politiqueCookiesTitle')}</h1>
          <p className="mt-2 text-indigo-300">{t('politiqueCookiesSubtitle')}</p>
          <p className="mt-1 text-sm text-indigo-400">{t('politiqueCookiesLastUpdated')} {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('politiqueCookiesSection1Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('politiqueCookiesSection1Content1')}
              </p>
              <p>
                {t('politiqueCookiesSection1Content2')}
              </p>
            </div>
          </section>

          {/* Types de cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('politiqueCookiesSection2Title')}</h2>
            </div>

            <div className="space-y-8">
              {/* Essential cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t('politiqueCookiesEssentialTitle')}</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">{t('politiqueCookiesEssentialBadge')}</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  {t('politiqueCookiesEssentialDesc')}
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">{t('politiqueCookiesTablePurpose')}</th>
                        <th className="pb-2 font-medium">{t('politiqueCookiesTableDuration')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">{t('politiqueCookiesRow1Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesRow1Duration')}</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">{t('politiqueCookiesRow2Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesRow2Duration')}</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">{t('politiqueCookiesRow3Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesRow3Duration')}</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">{t('politiqueCookiesRow4Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesRow4Duration')}</td>
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
                  <h3 className="text-lg font-bold text-white">{t('politiqueCookiesAnalyticsTitle')}</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">{t('politiqueCookiesAnalyticsBadge')}</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  {t('politiqueCookiesAnalyticsDesc')}
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">{t('politiqueCookiesTablePurpose')}</th>
                        <th className="pb-2 font-medium">{t('politiqueCookiesTableDuration')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">{t('politiqueCookiesAnalyticsRow1Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesRow1Duration')}</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">{t('politiqueCookiesAnalyticsRow2Purpose')}</td>
                        <td className="py-2">{t('politiqueCookiesAnalyticsRow2Duration')}</td>
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
                  <h3 className="text-lg font-bold text-white">{t('politiqueCookiesMarketingTitle')}</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">{t('politiqueCookiesMarketingBadge')}</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  {t('politiqueCookiesMarketingDesc')}
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    {t('politiqueCookiesMarketingNote')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('politiqueCookiesSection3Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">{t('politiqueCookiesSection3Method1Title')}</h3>
              <p>
                {t('politiqueCookiesSection3Method1Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('politiqueCookiesSection3Method2Title')}</h3>
              <p>{t('politiqueCookiesSection3Method2Content')}</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('politiqueCookiesSection3ConsequencesTitle')}</h3>
              <p>
                {t('politiqueCookiesSection3ConsequencesContent')}
              </p>
            </div>
          </section>

          {/* Cookies tiers */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('politiqueCookiesSection4Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('politiqueCookiesSection4Content')}
              </p>
              <h3 className="font-semibold text-white mt-4">{t('politiqueCookiesSection4StripeTitle')}</h3>
              <p>
                {t('politiqueCookiesSection4StripeContent')} <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">{t('politiqueCookiesSection4VercelTitle')}</h3>
              <p>
                {t('politiqueCookiesSection4VercelContent')} <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('politiqueCookiesSection5Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('politiqueCookiesSection5Intro')}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO : <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                {t('politiqueCookiesSection5Cnil')} <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
