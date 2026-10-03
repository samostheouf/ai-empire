import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n/config'
import { BASE_URL } from '@/lib/config'
import { stripBrand } from '@/lib/branding'

export const dynamicParams = false

/** Genere les 10 variantes de chaque page traduite. */
export function generateStaticParams() {
  return locales.filter((l) => l !== 'fr').map((locale) => ({ locale }))
}

export const LOCALE_CODE: Record<Locale, string> = {
  fr: 'fr-FR', en: 'en-US', es: 'es-ES', de: 'de-DE', it: 'it-IT',
  pt: 'pt-BR', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN', ar: 'ar-SA',
}

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/**
 * Construit les hreflang d'une page traduite.
 * Le FR est toujours present : c'est la version de reference qui existe
 * reellement sur disque. Aucune variante n'est-emise vers une page qui
 * n'existe pas.
 */
export function buildAlternates(locale: Locale, frPath: string) {
  const languages: Record<string, string> = { 'fr-FR': `${BASE_URL}${frPath}` }
  for (const other of locales) {
    if (other === 'fr') continue
    const suffix = frPath === '/' ? '' : frPath
    languages[LOCALE_CODE[other]] = `${BASE_URL}/${other}${suffix}`
  }
  languages[LOCALE_CODE[locale]] = `${BASE_URL}/${locale}${frPath === '/' ? '' : frPath}`
  languages['x-default'] = `${BASE_URL}${frPath}`
  return { canonical: `${BASE_URL}/${locale}${frPath === '/' ? '' : frPath}`, languages }
}

export function localeMetadata(
  locale: Locale,
  frPath: string,
  title: string,
  description: string
): Metadata {
  const { canonical, languages } = buildAlternates(locale, frPath)
  // Les dictionnaires portent deja la marque dans le texte du titre ; le
  // layout racine ajoute « | NeuraAPI » derriere. stripBrand evite l'empilement.
  const cleanTitle = stripBrand(title)
  return {
    title: cleanTitle,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title: `${cleanTitle} | NeuraAPI`,
      description,
      url: canonical,
      siteName: 'NeuraAPI',
      locale: LOCALE_CODE[locale].replace('-', '_'),
      type: 'website',
      images: [{ url: `${BASE_URL}/api/og?title=${encodeURIComponent(title)}`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title: `${cleanTitle} | NeuraAPI`, description },
  }
}
