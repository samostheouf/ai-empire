import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const dict = translations as unknown as Record<string, string>
  const t = (key: string) => dict[key] || key
  return {
    title: t('cookiePolicyTitle'),
    description: t('cookiePolicyDescription'),
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://ai-empire-steel.vercel.app/cookie-policy' },
  }
}

export default async function CookiePolicyPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">{t('cookiePolicyTitle')}</h1>
          <p className="text-sm text-indigo-400 mb-8">{t('cookiePolicyLastUpdated')} {new Date('2026-06-24').toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="space-y-8 text-indigo-200">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('cookiePolicySection1Title')}</h2>
              <p>{t('cookiePolicySection1Content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('cookiePolicySection2Title')}</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">neuralocale</p>
                  <p className="text-sm text-indigo-300 mt-1">{t('cookiePolicyCookie1Desc')}</p>
                  <p className="text-xs text-indigo-400 mt-1">{t('cookiePolicyCookie1Type')}</p>
                </div>
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">admin_session</p>
                  <p className="text-sm text-indigo-300 mt-1">{t('cookiePolicyCookie2Desc')}</p>
                  <p className="text-xs text-indigo-400 mt-1">{t('cookiePolicyCookie2Type')}</p>
                </div>
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">neura_consent</p>
                  <p className="text-sm text-indigo-300 mt-1">{t('cookiePolicyCookie3Desc')}</p>
                  <p className="text-xs text-indigo-400 mt-1">{t('cookiePolicyCookie3Type')}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('cookiePolicySection3Title')}</h2>
              <p>{t('cookiePolicySection3Content')}</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Stripe</strong> — {t('cookiePolicySection3Item1')}</li>
                <li><strong>Vercel Analytics</strong> — {t('cookiePolicySection3Item2')}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('cookiePolicySection4Title')}</h2>
              <p>{t('cookiePolicySection4Content')}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('cookiePolicySection5Title')}</h2>
              <p>{t('cookiePolicySection5Content')} contact@neuraapi.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
