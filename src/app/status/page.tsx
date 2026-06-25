import Breadcrumb from '@/components/Breadcrumb'
import StatusContent from '@/components/client/StatusContent'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export default async function StatusPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb items={[{ name: t('footerStatus'), href: '/status' }]} />
          <StatusContent />
        </div>
      </section>
    </div>
  )
}
