import { Locale, TranslationKeys } from '../config'

const translationLoaders: Record<Locale, () => Promise<{ default: TranslationKeys }>> = {
  fr: () => import('./fr'),
  en: () => import('./en'),
  es: () => import('./es'),
  de: () => import('./de'),
  it: () => import('./it'),
  pt: () => import('./pt'),
  ja: () => import('./ja'),
  zh: () => import('./zh'),
  ko: () => import('./ko'),
  ar: () => import('./ar'),
}

export async function loadTranslations(locale: Locale): Promise<TranslationKeys> {
  const loader = translationLoaders[locale] || translationLoaders.fr
  const mod = await loader()
  return mod.default
}

export default translationLoaders
