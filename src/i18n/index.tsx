'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { Locale, defaultLocale, TranslationKeys } from './config'
import { loadTranslations } from './translations'

const COOKIE_NAME = 'neuralocale'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof TranslationKeys) => string
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
  const [dict, setDict] = useState<Record<string, unknown> | null>(null)

  useEffect(() => {
    loadTranslations(locale).then((t) => setDict(t as unknown as Record<string, unknown>))
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    document.cookie = `${COOKIE_NAME}=${newLocale};path=/;max-age=31536000`
  }, [])

  const t = useCallback(
    (key: keyof TranslationKeys): string => {
      if (!dict) return String(key)
      const val = dict[key] ?? key
      return Array.isArray(val) ? val.join(', ') : String(val)
    },
    [dict]
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
