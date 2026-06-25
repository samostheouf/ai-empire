import type { Metadata } from 'next'
import { FileText, Database, Server, Shield, Globe, Clock, Mail } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const dict = translations as unknown as Record<string, string>
  const t = (key: string) => dict[key] || key
  return {
    title: t('dpaTitle'),
    description: t('dpaDescription'),
    robots: 'index, follow',
    alternates: { canonical: 'https://ai-empire-steel.vercel.app/dpa' },
  }
}

export default async function DPA() {
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
          <h1 className="mt-4 text-4xl font-bold text-white">{t('dpaTitle')}</h1>
          <p className="mt-2 text-indigo-300">{t('dpaSubtitle')}</p>
          <p className="mt-1 text-sm text-indigo-400">{t('dpaLastUpdated')} {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Objet */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection1Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('dpaSection1Content1')}
              </p>
              <p>
                {t('dpaSection1Content2')}
              </p>
            </div>
          </section>

          {/* Description du traitement */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection2Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>{t('dpaSection2Intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">{t('dpaSection2Item1Title')}</span> {t('dpaSection2Item1Desc')}</li>
                <li><span className="font-semibold text-white">{t('dpaSection2Item2Title')}</span> {t('dpaSection2Item2Desc')}</li>
                <li><span className="font-semibold text-white">{t('dpaSection2Item3Title')}</span> {t('dpaSection2Item3Desc')}</li>
                <li><span className="font-semibold text-white">{t('dpaSection2Item4Title')}</span> {t('dpaSection2Item4Desc')}</li>
              </ul>
            </div>
          </section>

          {/* Catégories de données */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection3Title')}</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>{t('dpaSection3Intro')}</p>

              <h3 className="font-semibold text-white">{t('dpaSection3Category1Title')}</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('dpaSection3Category1Item1')}</li>
                <li>{t('dpaSection3Category1Item2')}</li>
                <li>{t('dpaSection3Category1Item3')}</li>
                <li>{t('dpaSection3Category1Item4')}</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('dpaSection3Category2Title')}</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('dpaSection3Category2Item1')}</li>
                <li>{t('dpaSection3Category2Item2')}</li>
                <li>{t('dpaSection3Category2Item3')}</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('dpaSection3Category3Title')}</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('dpaSection3Category3Item1')}</li>
                <li>{t('dpaSection3Category3Item2')}</li>
                <li>{t('dpaSection3Category3Item3')}</li>
                <li>{t('dpaSection3Category3Item4')}</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">{t('dpaSection3Category4Title')}</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('dpaSection3Category4Item1')}</li>
                <li>{t('dpaSection3Category4Item2')}</li>
                <li>{t('dpaSection3Category4Item3')}</li>
              </ul>
            </div>
          </section>

          {/* Sous-traitants */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection4Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>{t('dpaSection4Intro')}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="py-3 px-4 font-semibold text-white">{t('dpaSection4TableHeader1')}</th>
                      <th className="py-3 px-4 font-semibold text-white">{t('dpaSection4TableHeader2')}</th>
                      <th className="py-3 px-4 font-semibold text-white">{t('dpaSection4TableHeader3')}</th>
                      <th className="py-3 px-4 font-semibold text-white">{t('dpaSection4TableHeader4')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-800/30">
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Vercel Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row1Service')}</td>
                      <td className="py-3 px-4 text-indigo-200">USA ({t('dpaSection4Row1Regulation')})</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row1Duration')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Stripe Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row2Service')}</td>
                      <td className="py-3 px-4 text-indigo-200">USA ({t('dpaSection4Row2Regulation')})</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row2Duration')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">OpenAI</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row3Service')}</td>
                      <td className="py-3 px-4 text-indigo-200">USA ({t('dpaSection4Row3Regulation')})</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row3Duration')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Groq Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row4Service')}</td>
                      <td className="py-3 px-4 text-indigo-200">USA ({t('dpaSection4Row4Regulation')})</td>
                      <td className="py-3 px-4 text-indigo-200">{t('dpaSection4Row4Duration')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Mesures de sécurité */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection5Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('dpaSection5Intro')}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{t('dpaSection5Item1')}</li>
                <li>{t('dpaSection5Item2')}</li>
                <li>{t('dpaSection5Item3')}</li>
                <li>{t('dpaSection5Item4')}</li>
                <li>{t('dpaSection5Item5')}</li>
                <li>{t('dpaSection5Item6')}</li>
              </ul>
            </div>
          </section>

          {/* Transferts hors UE */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection6Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('dpaSection6Content1')}
              </p>
              <p>
                {t('dpaSection6Content2')}
              </p>
            </div>
          </section>

          {/* Durée */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection7Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                {t('dpaSection7Content')}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">{t('dpaSection8Title')}</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>{t('dpaSection8Intro')}</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>{t('dpaSection8DpoLabel')}</span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
