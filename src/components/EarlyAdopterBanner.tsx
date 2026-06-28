import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export default async function EarlyAdopterBanner() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-indigo-900/30 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {t('earlyBannerTitle')}
          </h3>
          <p className="text-sm text-indigo-300">
            {t('earlyBannerDesc')}
          </p>
        </div>
        <Link
          href="/register"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg"
        >
          {t('earlyBannerCta')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-xs text-indigo-300">
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" aria-hidden="true" /> {t('earlyBannerCreditFree')}</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" aria-hidden="true" /> {t('earlyBannerSdk')}</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" aria-hidden="true" /> {t('earlyBannerNoCard')}</span>
        <span className="flex items-center gap-1"><Check className="w-3 h-3 text-green-400" aria-hidden="true" /> {t('earlyBannerCancelFree')}</span>
      </div>
    </div>
  )
}
