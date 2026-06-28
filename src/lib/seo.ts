import { Metadata } from 'next'

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

function buildHreflangAlternates(currentPath: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const [locale, localeStr] of Object.entries(LOCALE_MAP)) {
    const basePath = LOCALE_PATHS[locale]
    languages[localeStr] = `${baseUrl}${basePath}${currentPath}`
  }
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
  const url = `${baseUrl}${config.path}`
  const image = config.image || `${baseUrl}/api/og?title=${encodeURIComponent(config.title)}`
  const locale = config.locale || 'fr_FR'

  return {
    title: `${config.title} | NeuraAPI`,
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
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        name: 'Starter',
        description: 'Plan gratuit avec 100 crédits/mois',
      },
      {
        '@type': 'Offer',
        price: '19',
        priceCurrency: 'EUR',
        name: 'Pro',
        description: 'Plan Pro avec 10 000 crédits/mois',
      },
      {
        '@type': 'Offer',
        price: '69',
        priceCurrency: 'EUR',
        name: 'Enterprise',
        description: 'Plan Enterprise avec crédits illimités',
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
    ...(data.rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: data.rating,
            reviewCount: data.reviewCount || 100,
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
      email: 'support@neuraapi.com',
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
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
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
