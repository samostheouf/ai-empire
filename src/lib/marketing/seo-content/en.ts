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
    pageTitle: 'AI Empire - Build your SaaS in 24 hours with AI',
    metaDescription: 'Next.js 14 templates + powerful AI APIs to build and launch your SaaS fast. Stripe integration, authentication, admin dashboard - everything is ready.',
    keywords: ['AI Empire', 'SaaS', 'Next.js 14', 'Templates', 'AI APIs', 'Artificial Intelligence', 'Web Development', 'Fast Launch'],
    slug: '',
    canonicalUrl: 'https://ai-empire-steel.vercel.app',
    ogTitle: 'AI Empire - Build your SaaS in 24 hours with AI',
    ogDescription: 'Next.js 14 templates + powerful AI APIs to build and launch your SaaS fast.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-home.png',
    twitterTitle: 'AI Empire - Build your SaaS in 24 hours with AI',
    twitterDescription: 'Next.js 14 templates + powerful AI APIs to build and launch your SaaS fast.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-home.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI Empire',
      url: 'https://ai-empire-steel.vercel.app',
      description: 'Next.js 14 templates + powerful AI APIs to build and launch your SaaS fast.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ai-empire-steel.vercel.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  },
  {
    pageTitle: 'Professional Next.js 14 Templates | AI Empire',
    metaDescription: 'Discover our collection of professional Next.js 14 templates. Modern, responsive designs ready to use to build your SaaS.',
    keywords: ['Next.js 14 Templates', 'SaaS Templates', 'Professional Templates', 'Next.js', 'React', 'Tailwind CSS', 'UI/UX'],
    slug: 'templates',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/templates',
    ogTitle: 'Professional Next.js 14 Templates | AI Empire',
    ogDescription: 'Discover our collection of professional Next.js 14 templates. Modern designs ready to use.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-templates.png',
    twitterTitle: 'Professional Next.js 14 Templates | AI Empire',
    twitterDescription: 'Discover our collection of professional Next.js 14 templates. Modern designs ready to use.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-templates.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Professional Next.js 14 Templates',
      description: 'Collection of professional Next.js 14 templates to build SaaS quickly.',
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
              description: 'SaaS dashboard template with authentication and analytics.',
              url: 'https://ai-empire-steel.vercel.app/templates/saas-dashboard'
            }
          }
        ]
      }
    }
  },
  {
    pageTitle: 'Artificial Intelligence APIs | AI Empire',
    metaDescription: 'Integrate powerful AI APIs into your projects. Content generation, text analysis, intelligent chatbots with GPT-4.',
    keywords: ['AI APIs', 'Artificial Intelligence', 'GPT-4', 'OpenAI APIs', 'Content Generation', 'Chatbots', 'AI APIs'],
    slug: 'apis',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/apis',
    ogTitle: 'Artificial Intelligence APIs | AI Empire',
    ogDescription: 'Integrate powerful AI APIs into your projects. GPT-4, content generation, chatbots.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-apis.png',
    twitterTitle: 'Artificial Intelligence APIs | AI Empire',
    twitterDescription: 'Integrate powerful AI APIs into your projects. GPT-4, content generation, chatbots.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-apis.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebAPI',
      name: 'AI Empire APIs',
      description: 'Artificial intelligence APIs for developers.',
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
        description: 'Free plan available'
      }
    }
  },
  {
    pageTitle: 'Pricing and Plans | AI Empire',
    metaDescription: 'Discover our pricing: free plan, Starter at 29€/month, Pro at 99€/month. Templates + AI APIs included.',
    keywords: ['AI Empire Pricing', 'Template Prices', 'SaaS Plan', 'AI Subscription', 'Developer Pricing', 'Special Offer'],
    slug: 'pricing',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/pricing',
    ogTitle: 'Pricing and Plans | AI Empire',
    ogDescription: 'Free plan, Starter at 29€/month, Pro at 99€/month. Templates + AI APIs included.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-pricing.png',
    twitterTitle: 'Pricing and Plans | AI Empire',
    twitterDescription: 'Free plan, Starter at 29€/month, Pro at 99€/month. Templates + AI APIs included.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-pricing.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Pricing and Plans',
      description: 'Discover our pricing for templates and AI APIs.',
      url: 'https://ai-empire-steel.vercel.app/pricing',
      offers: [
        {
          '@type': 'Offer',
          name: 'Free Plan',
          price: '0',
          priceCurrency: 'EUR',
          description: '100 free credits, basic templates'
        },
        {
          '@type': 'Offer',
          name: 'Starter Plan',
          price: '29',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '29',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          },
          description: '1000 credits/month, all templates'
        },
        {
          '@type': 'Offer',
          name: 'Pro Plan',
          price: '99',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          },
          description: 'Unlimited credits, priority support'
        }
      ]
    }
  },
  {
    pageTitle: 'Technical Documentation | AI Empire',
    metaDescription: 'Complete documentation to integrate AI Empire into your projects. Guides, tutorials, and code examples.',
    keywords: ['AI Empire Documentation', 'Developer Guide', 'Tutorials', 'Code Examples', 'SDK', 'API documentation'],
    slug: 'docs',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/docs',
    ogTitle: 'Technical Documentation | AI Empire',
    ogDescription: 'Complete documentation to integrate AI Empire into your projects.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-docs.png',
    twitterTitle: 'Technical Documentation | AI Empire',
    twitterDescription: 'Complete documentation to integrate AI Empire into your projects.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-docs.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      name: 'AI Empire Documentation',
      description: 'Technical guide to integrate AI Empire.',
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
    metaDescription: 'News, tutorials, and case studies on web development and artificial intelligence.',
    keywords: ['AI Empire Blog', 'AI News', 'Next.js Tutorials', 'SaaS Case Studies', 'Developer Tips'],
    slug: 'blog',
    canonicalUrl: 'https://ai-empire-steel.vercel.app/blog',
    ogTitle: 'Blog | AI Empire',
    ogDescription: 'News, tutorials, and case studies on web development and AI.',
    ogImage: 'https://ai-empire-steel.vercel.app/og-blog.png',
    twitterTitle: 'Blog | AI Empire',
    twitterDescription: 'News, tutorials, and case studies on web development and AI.',
    twitterImage: 'https://ai-empire-steel.vercel.app/twitter-blog.png',
    schemaMarkup: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'AI Empire Blog',
      description: 'News and tutorials on web development and AI.',
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
    description: 'Next.js 14 templates + AI APIs to build SaaS quickly.',
    url: 'https://ai-empire-steel.vercel.app',
    telephone: '+33-1-00-00-00-00',
    email: 'contact@ai-empire.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'To be completed',
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
    description: 'Next.js 14 templates + AI APIs to build SaaS quickly.',
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
