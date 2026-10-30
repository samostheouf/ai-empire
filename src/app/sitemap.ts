import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

// Blog slugs discovered dynamically from the filesystem so new articles are
// picked up automatically at build time.
const NON_LOCALE_DIRS = ['en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar']
function getBlogSlugs(): string[] {
  try {
    const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')
    return fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .filter((d) => !NON_LOCALE_DIRS.includes(d.name))
      .filter((d) => fs.existsSync(path.join(blogDir, d.name, 'page.tsx')))
      .map((d) => d.name)
      .sort()
  } catch {
    return []
  }
}

const LOCALES = ['fr', 'en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar'] as const

const LOCALE_CODE_MAP: Record<string, string> = {
  fr: 'fr-FR', en: 'en-US', es: 'es-ES', de: 'de-DE', it: 'it-IT',
  pt: 'pt-BR', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN', ar: 'ar-SA',
}

const LOCALE_PREFIX: Record<string, string> = {
  fr: '', en: '/en', es: '/es', de: '/de', it: '/it',
  pt: '/pt', ja: '/ja', ko: '/ko', zh: '/zh', ar: '/ar',
}

// Discover which localized routes actually exist on disk so we never emit
// hreflang alternates pointing at 404s. Key: `${locale}${path}`.
const existingLocalizedRoutes = new Set<string>(
  NON_LOCALE_DIRS.flatMap((locale) => {
    try {
      const localeDir = path.join(process.cwd(), 'src', 'app', locale)
      return fs
        .readdirSync(localeDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .filter((d) => fs.existsSync(path.join(localeDir, d.name, 'page.tsx')))
        .map((d) => `${locale}/${d.name}`)
    } catch {
      return []
    }
  })
)

/**
 * /luxury est l'UNIQUE page 10-langues du site : le rendu se fait par query
 * `?hl=` (routes /[locale]/luxury inexistantes), pas par prefixe d'URL.
 *
 * L'entry DOIT donc lister les 10 hreflang que la page emet via
 * generateMetadata, sinon Google recoit deux clusters contradictoires (6
 * langues dans le sitemap, 11 dans le <head>) et n'en retient aucun. Mesure :
 * avant correction le sitemap annoncait fr/en/de/it/ja seulement, soit les
 * 6 versions es/pt/zh/ko/ar invisibles a l'indexation.
 *
 * pt est declare pt-PT ici pour coller a locMap de page.tsx (le reste du
 * sitemap utilise pt-BR pour les routes prefixees : deux systemes distincts,
 * on ne les melange pas).
 */
const LUXURY_LANGUAGES: Record<string, string> = {
  'fr-FR': `${baseUrl}/luxury`,
  'en-US': `${baseUrl}/luxury?hl=en`,
  'es-ES': `${baseUrl}/luxury?hl=es`,
  'de-DE': `${baseUrl}/luxury?hl=de`,
  'it-IT': `${baseUrl}/luxury?hl=it`,
  'pt-PT': `${baseUrl}/luxury?hl=pt`,
  'ja-JP': `${baseUrl}/luxury?hl=ja`,
  'zh-CN': `${baseUrl}/luxury?hl=zh`,
  'ko-KR': `${baseUrl}/luxury?hl=ko`,
  'ar-SA': `${baseUrl}/luxury?hl=ar`,
  'x-default': `${baseUrl}/luxury`,
}

interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'never'
  priority: number
  alternates?: { languages: Record<string, string> }
}

function buildAlternates(path: string): { languages: Record<string, string> } | undefined {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) {
    if (locale === 'fr') continue
    const prefix = LOCALE_PREFIX[locale]
    if (!existingLocalizedRoutes.has(`${locale}${path}`)) continue
    languages[LOCALE_CODE_MAP[locale]] = `${baseUrl}${prefix}${path}`
  }
  // No real translation of this page exists anywhere -> FR only, no alternates.
  if (Object.keys(languages).length === 0) return undefined
  return { languages }
}

/**
 * Pages traduites reellement rendues sous /<locale>/<slug>.
 * Chaque entree correspond a un fichier src/app/[locale]/<slug>/page.tsx
 * qui existe : generateStaticParams produit 9 URL par entree (une par langue
 * hors FR). La version FR est la racine du site, pas une URL /fr/...
 */
const LOCALIZED_ROUTES: string[] = [
  'pricing',
  'templates',
  'agents',
  'blog',
  'api-docs',
  'guide',
  'contact',
  'faq',
  'about',
]

const NON_DEFAULT_LOCALES = ['en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar'] as const

function localizedEntries() {
  const now = new Date()
  const out: SitemapEntry[] = []
  for (const slug of LOCALIZED_ROUTES) {
    for (const locale of NON_DEFAULT_LOCALES) {
      const frUrl = slug === '' ? baseUrl : `${baseUrl}/${slug}`
      const url = `${baseUrl}/${locale}/${slug}`
      const languages: Record<string, string> = { 'fr-FR': frUrl }
      languages[LOCALE_CODE_MAP[locale]] = url
      languages['x-default'] = frUrl
      out.push({
        url,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: slug === 'pricing' || slug === 'templates' ? 0.8 : 0.6,
        alternates: { languages },
      })
    }
  }
  return out
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const mainPages: SitemapEntry[] = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0, alternates: buildAlternates('') },
    { url: `${baseUrl}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.95, alternates: buildAlternates('/templates') },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/pricing') },
    { url: `${baseUrl}/api-docs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/api-docs') },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: buildAlternates('/guide') },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/blog') },
    ...getBlogSlugs().map(
      (slug): SitemapEntry => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: buildAlternates(`/blog/${slug}`),
      })
    ),
    { url: `${baseUrl}/marketing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/marketing') },
    { url: `${baseUrl}/marketing/saas`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/saas') },
    { url: `${baseUrl}/marketing/developers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/developers') },
    { url: `${baseUrl}/marketing/agencies`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/agencies') },
    { url: `${baseUrl}/marketing/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/ecommerce') },
    { url: `${baseUrl}/marketing/freelancers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/freelancers') },
    { url: `${baseUrl}/marketing/startups`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/marketing/startups') },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/contact') },
    { url: `${baseUrl}/status`, lastModified: now, changeFrequency: 'hourly', priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: buildAlternates('/faq') },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/about') },
    { url: `${baseUrl}/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7, alternates: buildAlternates('/changelog') },
    { url: `${baseUrl}/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: buildAlternates('/launch') },
    { url: `${baseUrl}/agents`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/agents') },
    { url: `${baseUrl}/beta`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/beta') },
    { url: `${baseUrl}/offre-speciale`, lastModified: now, changeFrequency: 'daily', priority: 0.95, alternates: buildAlternates('/offre-speciale') },
    { url: `${baseUrl}/register`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools/social-launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/free`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/free') },
    { url: `${baseUrl}/offre-lancement`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/offre-lancement') },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/compare') },
    { url: `${baseUrl}/luxury`, lastModified: now, changeFrequency: 'daily', priority: 0.95, alternates: { languages: LUXURY_LANGUAGES } },

    // Regional pages
    { url: `${baseUrl}/en/usa`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/en/usa') },
    { url: `${baseUrl}/en/uk`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/en/uk') },
    { url: `${baseUrl}/de/de`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/de/de') },
    { url: `${baseUrl}/ja/jp`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/ja/jp') },
    { url: `${baseUrl}/pt/br`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: buildAlternates('/pt/br') },

    // Regional sub-pages
    { url: `${baseUrl}/en/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/en/launch') },
    { url: `${baseUrl}/de/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/de/launch') },
    { url: `${baseUrl}/ja/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/ja/launch') },
    { url: `${baseUrl}/pt/launch`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/pt/launch') },
  ]

  return [...mainPages, ...localizedEntries()]
}
