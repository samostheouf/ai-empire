/**
 * UTM builder central — TRAFIC SANS X
 * Génère et propage les UTM Papers pour chaque canal acquisition.
 * Utilisé par: analytics, CtaLink, Gumroad, Reddit, PH, newsletters
 */

export const UTM_SOURCES = {
  gumroad: 'gumroad',
  reddit: 'reddit',
  indiehackers: 'indiehackers',
  producthunt: 'producthunt',
  hackernews: 'hackernews',
  devto: 'devto',
  hashnode: 'hashnode',
  linkedin: 'linkedin',
  newsletter: 'newsletter',
  cross_sell: 'cross_sell',
  organic: 'organic',
} as const

export const UTM_MEDIUMS = {
  marketplace: 'marketplace',
  social: 'social',
  community: 'community',
  launch: 'launch',
  email: 'email',
  referral: 'referral',
  cpc: 'cpc',
} as const

export type UtmSource = typeof UTM_SOURCES[keyof typeof UTM_SOURCES]
export type UtmMedium = typeof UTM_MEDIUMS[keyof typeof UTM_MEDIUMS]

export interface UtmParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content?: string
  utm_term?: string
}

// 9 subs Reddit cibles (validés éthiques - value-first, disclose "I built this")
export const REDDIT_SUBS = [
  { sub: 'SaaS', url: 'https://reddit.com/r/SaaS', angle: 'failover API, coûts LLM' },
  { sub: 'indiehackers', url: 'https://reddit.com/r/indiehackers', angle: 'build in public, 0→1 traction' },
  { sub: 'SideProject', url: 'https://reddit.com/r/SideProject', angle: 'feedback landing + pricing' },
  { sub: 'Entrepreneur', url: 'https://reddit.com/r/Entrepreneur', angle: 'PMF sans levée, one-shot revenue' },
  { sub: 'webdev', url: 'https://reddit.com/r/webdev', angle: 'templates Next.js 14, DX' },
  { sub: 'nextjs', url: 'https://reddit.com/r/nextjs', angle: 'App Router, edge, server actions' },
  { sub: 'SaaSMarketing', url: 'https://reddit.com/r/SaaSMarketing', angle: 'cold → warm via blog SEO' },
  { sub: 'freelance', url: 'https://reddit.com/r/freelance', angle: 'productiser son expertise en template' },
  { sub: 'ArtificialInteligence', url: 'https://reddit.com/r/ArtificialInteligence', angle: 'open AI API unification, Groq vs GPT-4' },
] as const

// PH + HN templates (à poster manuellement — pas d'auto-spam)
export const LAUNCH_URLS = {
  producthunt: 'https://www.producthunt.com/posts/new',
  hackernews: 'https://news.ycombinator.com/submit',
  indiehackers: 'https://www.indiehackers.com/products/new',
} as const

/**
 * Construit une URL avec UTM string
 * @example withUtm('https://ai-empire-steel.vercel.app/templates', {utm_source:'reddit', utm_medium:'community', utm_campaign:'launch', utm_content:'saas_post'})
 */
export function withUtm(baseUrl: string, params: UtmParams): string {
  const url = new URL(baseUrl)
  url.searchParams.set('utm_source', params.utm_source)
  url.searchParams.set('utm_medium', params.utm_medium)
  url.searchParams.set('utm_campaign', params.utm_campaign)
  if (params.utm_content) url.searchParams.set('utm_content', params.utm_content)
  if (params.utm_term) url.searchParams.set('utm_term', params.utm_term)
  return url.toString()
}

/**
 * Génère tous les liens UTM canaux pour campagnes cross-plateforme
 */
export function buildAllUtmLinks(baseUrl: string, campaign: string): Record<string, string> {
  return {
    gumroad_discover: withUtm(baseUrl, { utm_source: UTM_SOURCES.gumroad, utm_medium: UTM_MEDIUMS.marketplace, utm_campaign: campaign, utm_content: 'discover' }),
    gumroad_product: withUtm(baseUrl, { utm_source: UTM_SOURCES.gumroad, utm_medium: UTM_MEDIUMS.marketplace, utm_campaign: campaign, utm_content: 'product_page' }),
    reddit_saas: withUtm(baseUrl, { utm_source: UTM_SOURCES.reddit, utm_medium: UTM_MEDIUMS.community, utm_campaign: campaign, utm_content: 'r_saas' }),
    reddit_webdev: withUtm(baseUrl, { utm_source: UTM_SOURCES.reddit, utm_medium: UTM_MEDIUMS.community, utm_campaign: campaign, utm_content: 'r_webdev' }),
    indiehackers: withUtm(baseUrl, { utm_source: UTM_SOURCES.indiehackers, utm_medium: UTM_MEDIUMS.community, utm_campaign: campaign, utm_content: 'post' }),
    producthunt: withUtm(baseUrl, { utm_source: UTM_SOURCES.producthunt, utm_medium: UTM_MEDIUMS.launch, utm_campaign: campaign, utm_content: 'launch' }),
    hackernews: withUtm(baseUrl, { utm_source: UTM_SOURCES.hackernews, utm_medium: UTM_MEDIUMS.launch, utm_campaign: campaign, utm_content: 'show_hn' }),
    devto: withUtm(baseUrl, { utm_source: UTM_SOURCES.devto, utm_medium: UTM_MEDIUMS.social, utm_campaign: campaign, utm_content: 'article' }),
    newsletter: withUtm(baseUrl, { utm_source: UTM_SOURCES.newsletter, utm_medium: UTM_MEDIUMS.email, utm_campaign: campaign, utm_content: 'lead_magnet' }),
    cross_sell: withUtm(baseUrl, { utm_source: UTM_SOURCES.cross_sell, utm_medium: UTM_MEDIUMS.referral, utm_campaign: campaign, utm_content: 'ecosystem_banner' }),
  }
}

export const DEFAULT_CAMPAIGN = 'sans_x_20260831'
export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
