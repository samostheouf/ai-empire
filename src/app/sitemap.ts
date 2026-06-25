import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const LOCALES = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar'] as const

const LOCALE_CODE_MAP: Record<string, string> = {
  fr: 'fr-FR', en: 'en-US', es: 'es-ES', de: 'de-DE', it: 'it-IT',
  pt: 'pt-BR', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN', ar: 'ar-SA',
}

const LOCALE_PREFIX: Record<string, string> = {
  fr: '', en: '/en', es: '/es', de: '/de', it: '/it',
  pt: '/pt', ja: '/ja', ko: '/ko', zh: '/zh', ar: '/ar',
}

interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'never'
  priority: number
  alternates?: { languages: Record<string, string> }
}

function buildAlternates(path: string): { languages: Record<string, string> } {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) {
    const prefix = LOCALE_PREFIX[locale]
    languages[LOCALE_CODE_MAP[locale]] = `${baseUrl}${prefix}${path}`
  }
  languages['x-default'] = `${baseUrl}${path}`
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const mainPages: SitemapEntry[] = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0, alternates: buildAlternates('') },
    { url: `${baseUrl}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.95, alternates: buildAlternates('/templates') },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/pricing') },
    { url: `${baseUrl}/docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/docs') },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: buildAlternates('/guide') },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/blog') },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/contact') },
    { url: `${baseUrl}/status`, lastModified: now, changeFrequency: 'hourly', priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: buildAlternates('/faq') },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/about') },
    { url: `${baseUrl}/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7, alternates: buildAlternates('/changelog') },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/terms') },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/privacy') },
    { url: `${baseUrl}/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: buildAlternates('/launch') },
    { url: `${baseUrl}/beta`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/beta') },
    { url: `${baseUrl}/offre-speciale`, lastModified: now, changeFrequency: 'daily', priority: 0.95, alternates: buildAlternates('/offre-speciale') },
    { url: `${baseUrl}/register`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/register') },
    { url: `${baseUrl}/dashboard`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/dashboard') },
    { url: `${baseUrl}/tools/social-launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/free`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/free') },
    { url: `${baseUrl}/cgv`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/politique-confidentialite`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/politique-cookies`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/dpa`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/offre-lancement`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/offre-lancement') },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/compare') },

    // Regional pages
    { url: `${baseUrl}/en/usa`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/en/usa') },
    { url: `${baseUrl}/en/uk`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/en/uk') },
    { url: `${baseUrl}/de/de`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/de/de') },
    { url: `${baseUrl}/ja/jp`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/ja/jp') },
    { url: `${baseUrl}/pt/br`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/pt/br') },

    // Regional sub-pages
    { url: `${baseUrl}/en/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/en/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/en/legal-notice`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/en/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/en/terms-of-service`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/de/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/de/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/ja/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/ja/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/pt/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/pt/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]

  return mainPages
}
