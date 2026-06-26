'use client'

import { useI18n } from '@/i18n'

export default function SkipLinks() {
  const { t: rawT } = useI18n()
  const t = rawT as (key: string) => string
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
      >
        {t('skipToMainContent') || 'Aller au contenu principal'}
      </a>
      <a
        href="#footer"
        className="sr-only focus:not-sr-only focus:fixed focus:bottom-2 focus:left-2 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900"
      >
        {t('skipToFooter') || 'Aller au pied de page'}
      </a>
    </>
  )
}
