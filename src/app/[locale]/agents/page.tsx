import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { loadTranslations } from '@/i18n/translations'
import { localeMetadata } from '../_lib'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.filter((l) => l !== 'fr').map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = (await loadTranslations(locale as Locale)) as unknown as Record<string, string>
  const title = dict['agentsMetaTitle'] || 'agents'
  const description = dict['agentsMetaDesc'] || ''
  return localeMetadata(locale as Locale, '/agents', title, description)
}

export const revalidate = 3600

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string }> }) {
  // La locale vient de l'URL via le header x-neuralocale pose par le
  // middleware ; on la transmet au provider client pour que le switcher et
  // tous les libelles t() restent dans la bonne langue.
  const { locale } = await params
  const { I18nProvider } = await import('@/i18n')
  const FRPage = (await import('@/app/agents/page')).default
  return (
    <I18nProvider initialLocale={locale as Locale}>
      <FRPage />
    </I18nProvider>
  )
}
