'use client'

import { useI18n } from '@/i18n'
import { RefreshCw, Home, AlertOctagon } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fade-in-up">
        <div className="relative mx-auto w-24 h-24 mb-6">
          <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
            <AlertOctagon className="h-12 w-12 text-red-400" />
          </div>
        </div>
        <p className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">500</p>
        <h1 className="text-3xl font-bold text-white mb-3">{t('errorTitle')}</h1>
        <p className="text-indigo-300/80 mb-8">
          {error?.digest
            ? `Error ID: ${error.digest}`
            : t('errorUnexpected')}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            aria-label={t('errorRetry')}
          >
            <RefreshCw className="h-4 w-4" />
            {t('errorRetry')}
          </button>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/10 transition-all"
          >
            <Home className="h-4 w-4" />
            {t('notFoundBack')}
          </Link>
        </div>
      </div>
    </div>
  )
}
