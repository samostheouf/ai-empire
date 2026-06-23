import { cookies, headers } from 'next/headers'
import { Locale, defaultLocale, locales } from './config'
import translations from './translations'

const COOKIE_NAME = 'neuralocale'

const ACCEPT_LANGUAGE_MAP: Record<string, Locale> = {
  'fr': 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr', 'fr-BE': 'fr', 'fr-CH': 'fr',
  'en': 'en', 'en-US': 'en', 'en-GB': 'en', 'en-AU': 'en',
  'es': 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es',
  'de': 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de',
  'it': 'it', 'it-IT': 'it',
  'pt': 'pt', 'pt-BR': 'pt', 'pt-PT': 'pt',
  'ja': 'ja', 'zh': 'zh', 'ko': 'ko', 'ar': 'ar',
}

function parseAcceptLanguage(header: string): Locale | null {
  const langs = header.split(',').map((part) => {
    const [tag, q] = part.trim().split(';q=')
    return { tag: tag.trim(), q: q ? parseFloat(q) : 1 }
  })
  langs.sort((a, b) => b.q - a.q)
  for (const { tag } of langs) {
    const exact = ACCEPT_LANGUAGE_MAP[tag]
    if (exact) return exact
    const base = tag.split('-')[0]
    const mapped = ACCEPT_LANGUAGE_MAP[base]
    if (mapped) return mapped
  }
  return null
}

export function getLocaleFromCookies(): Locale {
  const cookieStore = cookies()
  const stored = cookieStore.get(COOKIE_NAME)?.value
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale
  }
  const acceptLanguage = headers().get('accept-language')
  if (acceptLanguage) {
    const detected = parseAcceptLanguage(acceptLanguage)
    if (detected) return detected
  }
  return defaultLocale
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale]
}
