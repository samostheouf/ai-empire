import type { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/client/ContactForm'
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
    title: t('contactTitle'),
    description: t('contactSubtitle'),
    path: '/contact',
    keywords: ['contact neuraapi', 'support neuraapi', 'aide neuraapi', 'contacter neuraapi'],
  })
}

export default async function Contact() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Breadcrumb items={[{ name: t('footerContact'), href: '/contact' }]} />
        <div className="mb-12 text-center">
          <MessageCircle className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">{t('contactTitle')}</h1>
          <p className="mt-2 text-indigo-300">{t('contactSubtitle')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-6">{t('contactFormTitle')}</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">{t('contactAddress')}</h3>
              </div>
              <p className="text-indigo-200 text-sm">
                NeuraAPI<br />
                {t('contactFrance')}
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">{t('contactEmailLabel')}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-indigo-200">
                  {t('contactSupportGeneral')} : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
                </p>
                <p className="text-indigo-200">
                  {t('contactSupportTech')} : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-5 w-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">{t('contactPhone')}</h3>
              </div>
              <p className="text-indigo-200 text-sm">
                {t('contactPhoneDesc')}<br />
                <span className="text-indigo-300 text-xs">{t('contactPhoneHours')}</span>
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <h3 className="text-lg font-bold text-white mb-4">{t('contactSocial')}</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://twitter.com/neuraapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Twitter
                </a>
                <a
                  href="https://github.com/neuraapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/company/neuraapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-900/50 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
