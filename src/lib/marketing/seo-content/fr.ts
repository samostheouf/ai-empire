export interface PageSEOContent {
  pageTitle: string
  metaDescription: string
  keywords: string[]
  slug: string
  canonicalUrl: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
  schemaMarkup: object
}

export interface PageSEO {
  path: string
  seo: PageSEOContent
}

export const seoContents: PageSEOContent[] = [
  {
    pageTitle: 'AI Empire - Créez votre SaaS en 24 heures avec l\'IA',
    metaDescription: 'Templates Next.js 14 + APIs IA puissantes pour créer et lancer votre SaaS rapidement. Intégration Stripe, authentification, dashboard admin - tout est prêt.',
    keywords: ['AI Empire', 'SaaS', 'Next.js 14', 'Templates', 'APIs IA', 'Intelligence artificielle', 'Développement web', 'Lancement rapide'],
    slug: '',
    canonicalUrl: 'https://ai-empire-steel.vercel.app',
    ogTitle: 'AI Empire - Créez votre SaaS en 24 heures avec l\'IA',
    ogDescription: 'Templates Next.js 14 + APIs IA puissantes pour créer et lancer votre SaaS rapidement.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-home.png',
    twitterTitle: 'AI Empire - Créez votre SaaS en 24 heures avec l\'IA',
    twitterDescription: 'Templates Next.js 14 + APIs IA puissantes pour créer et lancer votre SaaS rapidement.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-home.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI Empire',
      url: 'https://ai-empire-steel.vercel.app',
      description: 'Templates Next.js 14 + APIs IA puissantes pour créer et lancer votre SaaS rapidement.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ai-empire-steel.vercel.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  },
  {
    pageTitle: 'Templates Next.js 14 Professionnels | AI Empire',
    metaDescription: 'Découvrez notre collection de templates Next.js 14 professionnels. Designs modernes, responsive, et prêts à l\'emploi pour créer votre SaaS.',
    keywords: ['Templates Next.js 14', 'Templates SaaS', 'Templates professionnels', 'Next.js', 'React', 'Tailwind CSS', 'UI/UX'],
    slug: 'templates',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/templates',
    ogTitle: 'Templates Next.js 14 Professionnels | AI Empire',
    ogDescription: 'Découvrez notre collection de templates Next.js 14 professionnels. Designs modernes et prêts à l\'emploi.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-templates.png',
    twitterTitle: 'Templates Next.js 14 Professionnels | AI Empire',
    twitterDescription: 'Découvrez notre collection de templates Next.js 14 professionnels. Designs modernes et prêts à l\'emploi.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-templates.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Templates Next.js 14 Professionnels',
      description: 'Collection de templates Next.js 14 professionnels pour créer des SaaS rapidement.',
      url: 'https://ai-empire-steel.vercel.app/templates',
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: '10+',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'SaaS Dashboard Template',
              description: 'Template de dashboard SaaS avec authentification et analytics.',
              url: 'https://ai-empire-steel.vercel.app/templates/saas-dashboard'
            }
          }
        ]
      }
    }
  },
  {
    pageTitle: 'APIs d\'Intelligence Artificielle | AI Empire',
    metaDescription: 'Intégrez des APIs IA puissantes dans vos projets. Génération de contenu, analyse de texte, chatbots intelligents avec GPT-4.',
    keywords: ['APIs IA', 'Intelligence artificielle', 'GPT-4', 'APIs OpenAI', 'Génération de contenu', 'Chatbots', 'AI APIs'],
    slug: 'apis',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/apis',
    ogTitle: 'APIs d\'Intelligence Artificielle | AI Empire',
    ogDescription: 'Intégrez des APIs IA puissantes dans vos projets. GPT-4, génération de contenu, chatbots.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-apis.png',
    twitterTitle: 'APIs d\'Intelligence Artificielle | AI Empire',
    twitterDescription: 'Intégrez des APIs IA puissantes dans vos projets. GPT-4, génération de contenu, chatbots.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-apis.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebAPI',
      name: 'AI Empire APIs',
      description: 'APIs d\'intelligence artificielle pour développeurs.',
      url: 'https://ai-empire-steel.vercel.app/apis',
      provider: {
        '@type': 'Organization',
        name: 'AI Empire'
      },
      documentation: 'https://ai-empire-steel.vercel.app/docs',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Plan gratuit disponible'
      }
    }
  },
  {
    pageTitle: 'Tarifs et Plans | AI Empire',
    metaDescription: 'Découvrez nos tarifs : plan gratuit, Starter à 29€/mois, Pro à 99€/mois. Templates + APIs IA inclus.',
    keywords: ['Tarifs AI Empire', 'Prix templates', 'Plan SaaS', 'Abonnement IA', 'Prix développeurs', 'Offre spéciale'],
    slug: 'pricing',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/pricing',
    ogTitle: 'Tarifs et Plans | AI Empire',
    ogDescription: 'Plan gratuit, Starter à 29€/mois, Pro à 99€/mois. Templates + APIs IA inclus.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-pricing.png',
    twitterTitle: 'Tarifs et Plans | AI Empire',
    twitterDescription: 'Plan gratuit, Starter à 29€/mois, Pro à 99€/mois. Templates + APIs IA inclus.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-pricing.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Tarifs et Plans',
      description: 'Découvrez nos tarifs pour templates et APIs IA.',
      url: 'https://ai-empire-steel.vercel.app/pricing',
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Gratuit',
          price: '0',
          priceCurrency: 'EUR',
          description: '100 crédits gratuits, templates de base'
        },
        {
          '@type': 'Offer',
          name: 'Plan Starter',
          price: '29',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '29',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          },
          description: '1000 crédits/mois, tous les templates'
        },
        {
          '@type': 'Offer',
          name: 'Plan Pro',
          price: '99',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          },
          description: 'Crédits illimités, support prioritaire'
        }
      ]
    }
  },
  {
    pageTitle: 'Documentation Techniques | AI Empire',
    metaDescription: 'Documentation complète pour intégrer AI Empire dans vos projets. Guides, tutoriels et exemples de code.',
    keywords: ['Documentation AI Empire', 'Guide développeur', 'Tutoriels', 'Exemples de code', 'SDK', 'API documentation'],
    slug: 'docs',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/docs',
    ogTitle: 'Documentation Techniques | AI Empire',
    ogDescription: 'Documentation complète pour intégrer AI Empire dans vos projets.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-docs.png',
    twitterTitle: 'Documentation Techniques | AI Empire',
    twitterDescription: 'Documentation complète pour intégrer AI Empire dans vos projets.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-docs.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      name: 'Documentation AI Empire',
      description: 'Guide technique pour intégrer AI Empire.',
      url: 'https://ai-empire-steel.vercel.app/docs',
      author: {
        '@type': 'Organization',
        name: 'AI Empire'
      },
      publisher: {
        '@type': 'Organization',
        name: 'AI Empire'
      }
    }
  },
  {
    pageTitle: 'Blog | AI Empire',
    metaDescription: 'Actualités, tutoriels et études de cas sur le développement web et l\'intelligence artificielle.',
    keywords: ['Blog AI Empire', 'Actualités IA', 'Tutoriels Next.js', 'Études de cas SaaS', 'Conseils développeurs'],
    slug: 'blog',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/blog',
    ogTitle: 'Blog | AI Empire',
    ogDescription: 'Actualités, tutoriels et études de cas sur le développement web et l\'IA.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-blog.png',
    twitterTitle: 'Blog | AI Empire',
    twitterDescription: 'Actualités, tutoriels et études de cas sur le développement web et l\'IA.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-blog.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog AI Empire',
      description: 'Actualités et tutoriels sur le développement web et l\'IA.',
      url: 'https://ai-empire-steel.vercel.app/blog',
      publisher: {
        '@type': 'Organization',
        name: 'AI Empire'
      }
    }
  }
]

export function getSEOByPath(path: string): PageSEOContent | undefined {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return seoContents.find(seo => seo.slug === cleanPath)
}

export function getAllPageSEOContents(): PageSEOContent[] {
  return seoContents
}

export function generatePageSEO(path: string): PageSEO | undefined {
  const seo = getSEOByPath(path)
  if (!seo) return undefined

  return {
    path,
    seo
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateProductSchema(product: {
  name: string
  description: string
  price: number
  currency: string
  url: string
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: product.url,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'AI Empire'
      }
    },
    brand: {
      '@type': 'Brand',
      name: 'AI Empire'
    }
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  author: string
  image: string
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author
    },
    image: article.image,
    publisher: {
      '@type': 'Organization',
      name: 'AI Empire',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ai-empire-steel.vercel.app/logo.png'
      }
    }
  }
}

export function generateHowToSchema(howTo: {
  name: string
  description: string
  url: string
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    url: howTo.url,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image
    }))
  }
}

export function generateLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AI Empire',
    description: 'Templates Next.js 14 + APIs IA pour créer des SaaS rapidement.',
    url: 'https://ai-empire-steel.vercel.app',
    telephone: '+33-1-00-00-00-00',
    email: 'contact@ai-empire.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'À compléter',
      addressLocality: 'Paris',
      postalCode: '75001',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  }
}

export function generateSoftwareApplicationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Empire',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    description: 'Templates Next.js 14 + APIs IA pour créer des SaaS rapidement.',
    url: 'https://ai-empire-steel.vercel.app',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'EUR',
      offerCount: '3'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '5000'
    }
  }
}
