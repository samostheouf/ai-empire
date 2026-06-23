import { type EmailSequence } from './email-sequences'
import { getAllSequences as getFrSequences } from './email-sequences'
import { getLocalizedSequences as getLocalized } from './emails'

export type SupportedLocale = 'fr' | 'en' | 'es' | 'de' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar'

const LOCALE_MAP: Record<SupportedLocale, { resend: string; label: string }> = {
  fr: { resend: 'fr', label: 'Français' },
  en: { resend: 'en', label: 'English' },
  es: { resend: 'es', label: 'Español' },
  de: { resend: 'de', label: 'Deutsch' },
  it: { resend: 'it', label: 'Italiano' },
  pt: { resend: 'pt-BR', label: 'Português' },
  ja: { resend: 'ja', label: '日本語' },
  ko: { resend: 'ko', label: '한국어' },
  zh: { resend: 'zh', label: '中文' },
  ar: { resend: 'ar', label: 'العربية' },
}

const VALID_LOCALES = Object.keys(LOCALE_MAP) as SupportedLocale[]

export function detectLocale(lang?: string | null): SupportedLocale {
  if (!lang) return 'fr'
  const normalized = lang.toLowerCase().split('-')[0].trim() as SupportedLocale
  return VALID_LOCALES.includes(normalized) ? normalized : 'fr'
}

export function getResendLocale(locale: SupportedLocale): string {
  return LOCALE_MAP[locale].resend
}

export function getLocaleLabel(locale: SupportedLocale): string {
  return LOCALE_MAP[locale].label
}

export function getLocalizedEmailSequences(lang?: string | null): EmailSequence[] {
  const locale = detectLocale(lang)
  if (locale === 'fr') return getFrSequences()
  return getLocalized(locale)
}

export function getAvailableLocales(): Array<{ code: SupportedLocale; label: string }> {
  return VALID_LOCALES.map(code => ({
    code,
    label: LOCALE_MAP[code].label,
  }))
}
