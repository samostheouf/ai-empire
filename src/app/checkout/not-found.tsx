'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n'

export default function CheckoutNotFound() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-indigo-600">404</p>
        <h1 className="mt-6 text-3xl font-bold text-white">{t('notFoundContactTitle')}</h1>
        <p className="mt-4 text-indigo-300">
          {t('notFoundContactDesc')}
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          {t('notFoundHome')}
        </Link>
      </div>
    </div>
  )
}
