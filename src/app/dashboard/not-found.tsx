'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n'
import { Search, ArrowLeft, LayoutDashboard } from 'lucide-react'

export default function DashboardNotFound() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fade-in-up">
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full bg-indigo-100 animate-ping opacity-50" />
          <div className="relative w-20 h-20 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center">
            <LayoutDashboard className="h-10 w-10 text-indigo-400" />
          </div>
        </div>
        <p className="text-7xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-4">404</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{t('notFoundContactTitle')}</h1>
        <p className="text-gray-500 mb-8">
          {t('notFoundContactDesc')}
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <LayoutDashboard className="w-4 h-4" />
            {t('navDashboard')}
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all duration-200 active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
