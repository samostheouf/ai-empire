'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Locale, defaultLocale } from './config'
import translations from './translations'

const COOKIE_NAME = 'neuralocale'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof typeof translations['fr']) => string
  isRTL: boolean
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode
  initialLocale: Locale
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.cookie = `${COOKIE_NAME}=${newLocale};path=/;max-age=31536000`
  }, [])

  const t = useCallback(
    (key: keyof typeof translations['fr']): string => {
      const dict = translations[locale] || translations[defaultLocale]
      const val = dict[key] ?? translations[defaultLocale][key] ?? key
      return Array.isArray(val) ? val.join(', ') : val
    },
    [locale]
  )

  const isRTL = locale === 'ar'

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
