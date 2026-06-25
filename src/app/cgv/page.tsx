import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export const dynamic = 'force-static'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const dict = translations as unknown as Record<string, string>
  const t = (key: string) => dict[key] || key
  return {
    title: t('cgvTitle'),
    description: t('cgvDescription'),
    robots: 'index, follow',
    alternates: { canonical: 'https://ai-empire-steel.vercel.app/cgv' },
  }
}

export default async function CGV() {
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
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">{t('cgvTitle')}</h1>
          <p className="mt-2 text-indigo-300">{t('cgvLastUpdated')} {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Article 1 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">{t('cgvArticle1Title')}</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle1Content1')}
                <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                {t('cgvArticle1Content2')}
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle2Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle2Intro')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">{t('cgvArticle2Item1Title')}</span> — {t('cgvArticle2Item1Desc')}</li>
                <li><span className="font-semibold text-white">{t('cgvArticle2Item2Title')}</span> — {t('cgvArticle2Item2Desc')}</li>
                <li><span className="font-semibold text-white">{t('cgvArticle2Item3Title')}</span> — {t('cgvArticle2Item3Desc')}</li>
              </ul>
              <p>
                {t('cgvArticle2Content')}
              </p>
            </div>
          </section>

          {/* Article 3 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle3Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">{t('cgvArticle3Section1Title')}</h3>
              <p>
                {t('cgvArticle3Section1Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle3Section2Title')}</h3>
              <p>{t('cgvArticle3Section2Content')}</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('cgvArticle3Section2Item1')}</li>
                <li>{t('cgvArticle3Section2Item2')}</li>
                <li>{t('cgvArticle3Section2Item3')}</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle3Section3Title')}</h3>
              <p>
                {t('cgvArticle3Section3Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle3Section4Title')}</h3>
              <p>
                {t('cgvArticle3Section4Content')}
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle4Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">{t('cgvArticle4Section1Title')}</h3>
              <p>
                {t('cgvArticle4Section1Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle4Section2Title')}</h3>
              <p>
                {t('cgvArticle4Section2Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle4Section3Title')}</h3>
              <p>
                {t('cgvArticle4Section3Content')}
              </p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle5Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle5Content1')}
                <span className="font-semibold text-white">14 {t('cgvDays')}</span>{' '}
                {t('cgvArticle5Content2')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle5Section1Title')}</h3>
              <p>{t('cgvArticle5Section1Content')}</p>
              <p>Email : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle5Section2Title')}</h3>
              <p>{t('cgvArticle5Section2Content')}</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('cgvArticle5Section2Item1')}</li>
                <li>{t('cgvArticle5Section2Item2')}</li>
                <li>{t('cgvArticle5Section2Item3')}</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle5Section3Title')}</h3>
              <p>
                {t('cgvArticle5Section3Content')}
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle6Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">{t('cgvArticle6Section1Title')}</h3>
              <p>
                {t('cgvArticle6Section1Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle6Section2Title')}</h3>
              <p>
                {t('cgvArticle6Section2Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle6Section3Title')}</h3>
              <p>
                {t('cgvArticle6Section3Content')}
              </p>
            </div>
          </section>

          {/* Article 7 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle7Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle7Intro')}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('cgvArticle7Item1')}</li>
                <li>{t('cgvArticle7Item2')}</li>
                <li>{t('cgvArticle7Item3')}</li>
                <li>{t('cgvArticle7Item4')}</li>
                <li>{t('cgvArticle7Item5')}</li>
              </ul>
              <p className="mt-4">
                {t('cgvArticle7Content')}
              </p>
            </div>
          </section>

          {/* Article 8 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle8Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle8Content1')}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('cgvArticle8Item1')}</li>
                <li>{t('cgvArticle8Item2')}</li>
                <li>{t('cgvArticle8Item3')}</li>
              </ul>
              <p className="mt-3">{t('cgvArticle8Content2')}</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('cgvArticle8Item4')}</li>
                <li>{t('cgvArticle8Item5')}</li>
                <li>{t('cgvArticle8Item6')}</li>
              </ul>
            </div>
          </section>

          {/* Article 9 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle9Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle9Content1')}
                <a href="/politique-confidentialite" className="text-indigo-400 hover:text-white transition-colors underline">{t('cgvArticle9Link')}</a>,
              </p>
              <p>
                {t('cgvArticle9Content2')} <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          {/* Article 10 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">{t('cgvArticle10Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('cgvArticle10Content1')}
              </p>
              <p>
                {t('cgvArticle10Content2')}
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">{t('cgvArticle10Mediation')}</a></p>
                <p>• {t('cgvArticle10Platform')} <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          {/* Article 11 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">{t('cgvArticle11Title')}</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">{t('cgvArticle11Section1Title')}</h3>
              <p>
                {t('cgvArticle11Section1Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle11Section2Title')}</h3>
              <p>
                {t('cgvArticle11Section2Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle11Section3Title')}</h3>
              <p>
                {t('cgvArticle11Section3Content')}
              </p>

              <h3 className="font-semibold text-white mt-4">{t('cgvArticle11Section4Title')}</h3>
              <p>
                {t('cgvArticle11Section4Content')} <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
