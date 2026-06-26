import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import GuideContent from '@/components/client/GuideContent'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('guideTitle'),
    description: t('guideDesc'),
    path: '/guide',
    keywords: ['guide neuraapi', 'tutoriel api ia', 'getting started neuraapi', 'documentation api ia'],
  })
}

export default async function GuidePage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: t('navGuide'), href: '/guide' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">{t('guideTitle')}</h1>
          </div>
          <p className="text-lg text-indigo-200 max-w-2xl">
            {t('guideDesc')}
          </p>
        </div>

        <GuideContent />
      </div>
    </div>
  )
}
