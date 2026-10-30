import { Locale } from '../config'

const translationLoaders: Record<Locale, () => Promise<{ default: Record<string, string> }>> = {
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

export async function loadTranslations(locale: Locale): Promise<Record<string, string>> {
  const loader = translationLoaders[locale] || translationLoaders.fr
  const mod = await loader()
  if (locale === 'fr') return mod.default
  const frMod = await translationLoaders.fr()
  return { ...frMod.default, ...mod.default }
}

export default translationLoaders
