import { Metadata } from 'next'
import { SUBSCRIPTION_PLANS } from '@/lib/plans'
import { stripBrand } from '@/lib/branding'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export const TARGET_KEYWORDS = [
  'template next.js',
  'API ia',
  'SaaS template',
  'IA gratuite',
  'développeur web',
  'intelligence artificielle',
  'templates premium',
  'Next.js',
  'TypeScript',
  'SaaS',
  'OpenAI',
  'Groq',
  'SDK TypeScript',
]

export const LOCALE_MAP: Record<string, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
  it: 'it-IT',
  pt: 'pt-BR',
  ja: 'ja-JP',
  ko: 'ko-KR',
  zh: 'zh-CN',
  ar: 'ar-SA',
}

export const LOCALE_PATHS: Record<string, string> = {
  fr: '/',
  en: '/en',
  es: '/es',
  de: '/de',
  it: '/it',
  pt: '/pt',
  ja: '/ja',
  ko: '/ko',
  zh: '/zh',
  ar: '/ar',
}

function normalizePath(p: string): string {
  return p.startsWith('/') && !p.startsWith('//') ? p.replace(/^\/+/, '/') : p
}

/**
 * Pages reellement traduites qui existent sur le disque, hors racine.
 * Ex: 'en' -> { 'launch', 'usa', 'uk', 'legal-notice', ... }
 *
 * On ne peut PAS deduire l'existence d'une route traduite du simple fait
 * qu'une locale existe : /en/pricing, /es/agents, /de/templates... sont
 * tous en 404. Emettre un hreflang vers une 404 est lu comme du spam par
 * Google et penalise le domaine entier — meme sanction qu'un sitemap
 * qui promet des URL mortes.
 */
const EXISTING_LOCALIZED_PAGES: Record<string, Set<string>> | null = (() => {
  if (typeof process === 'undefined' || !process.cwd) return null
  const NON_LOCALE_DIRS = ['en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar']
  const result: Record<string, Set<string>> = {}
  try {
    const fs = require('fs') as typeof import('fs')
    const path = require('path') as typeof import('path')
    const appDir = path.join(process.cwd(), 'src', 'app')
    for (const locale of NON_LOCALE_DIRS) {
      const localeDir = path.join(appDir, locale)
      const pages = new Set<string>()
      try {
        for (const entry of fs.readdirSync(localeDir, { withFileTypes: true })) {
          if (!entry.isDirectory()) continue
          if (fs.existsSync(path.join(localeDir, entry.name, 'page.tsx'))) {
            pages.add(entry.name)
          }
        }
      } catch {
        // repertoire absent : locale sans page traduite
      }
      result[locale] = pages
    }
    return result
  } catch {
    return null
  }
})()

function localizedPageExists(locale: string, page: string): boolean {
  if (!EXISTING_LOCALIZED_PAGES) return false
  const pages = EXISTING_LOCALIZED_PAGES[locale]
  if (!pages) return false
  if (page === '' || page === '/') return pages.has('') || pages.size > 0
  return pages.has(page.replace(/^\//, ''))
}

function buildHreflangAlternates(currentPath: string): Record<string, string> {
  currentPath = normalizePath(currentPath)
  const languages: Record<string, string> = {}
  for (const [locale, localeStr] of Object.entries(LOCALE_MAP)) {
    // La version FR existe toujours : c'est la page canonique.
    if (locale === 'fr') {
      languages[localeStr] = `${baseUrl}${currentPath}`
      continue
    }
    // N'emettre une variante que si la page traduite existe reellement.
    if (!localizedPageExists(locale, currentPath)) continue
    const basePath = LOCALE_PATHS[locale]
    const joined = `${basePath}${currentPath}`.replace(/\/{2,}/g, '/')
    languages[localeStr] = `${baseUrl}${joined}`
  }
  // x-default pointe toujours sur la version FR, qui existe.
  languages['x-default'] = `${baseUrl}${currentPath}`
  return languages
}

export interface SEOConfig {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  keywords?: string[]
  locale?: string
  publishedTime?: string
  modifiedTime?: string
}

export function generateMetadata(config: SEOConfig): Metadata {
  const url = `${baseUrl}${normalizePath(config.path)}`
  const image = config.image || `${baseUrl}/api/og?title=${encodeURIComponent(config.title)}`
  const locale = config.locale || 'fr_FR'

  return {
    // Pas de `${title} | NeuraAPI` ici : le layout racine declare deja
    // `title.template = '%s | NeuraAPI'`. Concatener les deux produisait
    // « Tarifs — API IA | NeuraAPI | NeuraAPI » sur TOUTES les pages, donc
    // aussi sur les 81 nouvelles pages /<locale>/<slug>. Un titre duplique
    // est un signal de faible qualite pour le SEO et gaspille les premiers
    // caracteres dans le SERP.
    //
    // Certains dictionnaires portent la marque DANS le texte du titre
    // (« Blog NeuraAPI », « FAQ — Questions sur NeuraAPI »). Le layout racine
    // ajoute ensuite « | NeuraAPI » → « Blog NeuraAPI | NeuraAPI ».
    // On retire toute mention finale de la marque, qu'elle soit precedee d'un
    // separateur ou non. Nettoyage unique : vaut pour les 10 langues, presentes
    // et futures.
    title: stripBrand(config.title),
    description: config.description,
    keywords: config.keywords || TARGET_KEYWORDS,
    authors: [{ name: 'NeuraAPI' }],
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: 'NeuraAPI',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale,
      type: config.type || 'website',
      ...(config.publishedTime ? { publishedTime: config.publishedTime } : {}),
      ...(config.modifiedTime ? { modifiedTime: config.modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [image],
    },
    alternates: {
      canonical: url,
      languages: buildHreflangAlternates(config.path),
    },
  }
}

export function generateSoftwareApplicationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NeuraAPI',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: "APIs d'intelligence artificielle et templates premium Next.js pour développeurs.",
    url: baseUrl,
    // Prix lus depuis src/lib/plans.ts — la meme source que le checkout Stripe
    // et que l'affichage. Un JSON-LD fige a 19/69 EUR alors que Stripe debite
    // 49/149 EUR est une declaration de prix fausse dans les donnees structurees
    // (art. L. 121-2 C. conso.), et c'est ce que Google lit pour les rich snippets.
    offers: [
      {
        '@type': 'Offer',
        price: String(SUBSCRIPTION_PLANS.pro.price / 100),
        priceCurrency: 'EUR',
        name: 'Pro',
        description: 'Plan Pro avec 10 000 crédits/mois',
      },
      {
        '@type': 'Offer',
        price: String(SUBSCRIPTION_PLANS.business.price / 100),
        priceCurrency: 'EUR',
        name: 'Business',
        description: 'Plan Business avec crédits illimités',
      },
    ],
    featureList: [
      'Génération de texte IA',
      'Optimisation SEO',
      'Génération de code',
      'Templates premium Next.js',
      'Analytics avancés',
      'SDK TypeScript',
    ],
  }
}

export interface ProductSchemaData {
  name: string
  description: string
  image: string
  price: number
  currency?: string
  category?: string
  rating?: number
  reviewCount?: number
}

export function generateProductSchema(data: ProductSchemaData): object {
  // ETHIQUE: aggregateRating UNIQUEMENT si donnees reelles verifiees (rating + reviewCount fournis et >0).
  // Sans vrais avis, aucun rating n'est emis -> 0 fabrication, conforme Google Structured Data.
  const hasRealRating = typeof data.rating === 'number' && typeof data.reviewCount === 'number' && data.reviewCount > 0
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image,
    brand: { '@type': 'Brand', name: 'NeuraAPI' },
    category: data.category || 'Digital Product',
    offers: {
      '@type': 'Offer',
      price: data.price,
      priceCurrency: data.currency || 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'NeuraAPI' },
    },
    ...(hasRealRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: data.rating,
            reviewCount: data.reviewCount,
          },
        }
      : {}),
  }
}

export interface ArticleSchemaData {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
  author?: string
}

export function generateArticleSchema(data: ArticleSchemaData): object {
  const url = `${baseUrl}/blog/${data.slug}`
  const image = data.image || `${baseUrl}/api/og?title=${encodeURIComponent(data.title)}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    image,
    url,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      '@type': 'Organization',
      name: data.author || 'NeuraAPI',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeuraAPI',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NeuraAPI',
    url: baseUrl,
    logo: `${baseUrl}/favicon.svg`,
    description: "APIs d'intelligence artificielle et templates premium pour développeurs.",
    sameAs: [
      'https://twitter.com/neuraapi',
      'https://linkedin.com/company/neuraapi',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'samilaboulette21@gmail.com',
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Spanish', 'German', 'Italian', 'Portuguese', 'Japanese', 'Korean', 'Chinese', 'Arabic'],
    },
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl,
      },
      ...items
        .filter((item) => !(item.name === 'Home' && (item.url === '/' || item.url === '')))
        .map((item, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
        })),
    ],
  }
}

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NeuraAPI',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/templates?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
