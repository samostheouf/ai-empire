import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export default async function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">{t('privacyTitle')}</h1>

          <div className="prose prose-invert prose-indigo space-y-8 text-indigo-200">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection1Title')}</h2>
              <p>
                {t('privacySection1Content')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection2Title')}</h2>
              <p>{t('privacySection2Intro')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t('privacySection2Item1Title')}</strong> : {t('privacySection2Item1Desc')}</li>
                <li><strong>{t('privacySection2Item2Title')}</strong> : {t('privacySection2Item2Desc')}</li>
                <li><strong>{t('privacySection2Item3Title')}</strong> : {t('privacySection2Item3Desc')}</li>
                <li><strong>{t('privacySection2Item4Title')}</strong> : {t('privacySection2Item4Desc')}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection3Title')}</h2>
              <p>{t('privacySection3Intro')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacySection3Item1')}</li>
                <li>{t('privacySection3Item2')}</li>
                <li>{t('privacySection3Item3')}</li>
                <li>{t('privacySection3Item4')}</li>
                <li>{t('privacySection3Item5')}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection4Title')}</h2>
              <p>
                {t('privacySection4Content')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection5Title')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t('privacySection5Item1')}</li>
                <li>{t('privacySection5Item2')}</li>
                <li>{t('privacySection5Item3')}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection6Title')}</h2>
              <p>{t('privacySection6Intro')}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>{t('privacySection6Item1Title')}</strong> : {t('privacySection6Item1Desc')}</li>
                <li><strong>{t('privacySection6Item2Title')}</strong> : {t('privacySection6Item2Desc')}</li>
                <li><strong>{t('privacySection6Item3Title')}</strong> : {t('privacySection6Item3Desc')}</li>
                <li><strong>{t('privacySection6Item4Title')}</strong> : {t('privacySection6Item4Desc')}</li>
                <li><strong>{t('privacySection6Item5Title')}</strong> : {t('privacySection6Item5Desc')}</li>
              </ul>
              <p className="mt-2">
                {t('privacySection6Content')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection7Title')}</h2>
              <p>
                {t('privacySection7Content')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection8Title')}</h2>
              <p>
                {t('privacySection8Content')}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">{t('privacySection9Title')}</h2>
              <p>
                {t('privacySection9Content')}
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-indigo-400">
            {t('privacyLastUpdated')} {new Date('2026-06-23').toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </div>
  )
}
