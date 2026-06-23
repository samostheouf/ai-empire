// ============================================
// AI-EMPIRE — SEO Power Pack
// Complete SEO strategy for SERP domination
// ============================================

export interface Keyword {
  term: string;
  volume: number;
  difficulty: number;
  intent: 'informational' | 'transactional' | 'navigational';
  priority: 'high' | 'medium' | 'low';
}

export interface BlogOutline {
  title: string;
  slug: string;
  targetKeywords: string[];
  metaDescription: string;
  headings: string[];
  wordCount: number;
  internalLinks: string[];
}

export interface SchemaMarkup {
  type: string;
  page: string;
  data: Record<string, unknown>;
}

// === HIGH-TRAFFIC KEYWORDS (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'french ai api',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'openai alternative france',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'integrate ai into application',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'ai api for startup',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'cheap ai api',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'text generation api',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'premium next.js template',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'how to use ai in business',
    volume: 500,
    difficulty: 15,
    intent: 'informational',
    priority: 'medium',
  },
  {
    term: 'groq gemini api',
    volume: 400,
    difficulty: 10,
    intent: 'informational',
    priority: 'low',
  },
  {
    term: 'french ai platform',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === BLOG POST OUTLINES (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'How to integrate AI into your app in 5 minutes',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Discover how to integrate AI into your app in 5 minutes with a free French AI API. Complete tutorial with code.',
    headings: [
      'Why integrate AI now?',
      'Choose the right AI API',
      'Step 1: Create your account',
      'Step 2: Get your API key',
      'Step 3: Make your first API call',
      'Step 4: Integrate into your app',
      'Optimizations and best practices',
      'Conclusion',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'The 7 best free AI APIs for startups in 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Comparison of the best free AI APIs for startups in 2025. Groq, Gemini, and the French alternative that makes the difference.',
    headings: [
      'Why startups need free AI APIs',
      '1. OpenAI — The standard',
      '2. Groq — Ultimate speed',
      '3. Google Gemini — Raw power',
      '4. AI-Empire — The French alternative',
      '5. Cohere — NLP',
      '6. Mistral — The French champion',
      '7. Anthropic — Security',
      'Final comparison',
      'Our recommendation',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Complete comparison for 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Detailed comparison between AI-Empire and OpenAI: price, performance, integration, support. Discover the French alternative.',
    headings: [
      'Overview of both platforms',
      'Price comparison',
      'Performance comparison',
      'Ease of integration',
      'Support and documentation',
      'GDPR compliance',
      'Who should choose AI-Empire?',
      'Who should choose OpenAI?',
      'Conclusion',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Complete guide: Build a SaaS with AI in 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Step-by-step guide to building a SaaS with AI in 2025. From idea to launch, with the right APIs and tools.',
    headings: [
      'The state of AI for SaaS in 2025',
      'Step 1: Validate your idea',
      'Step 2: Choose your tech stack',
      'Step 3: Integrate AI',
      'Step 4: Monetize your SaaS',
      'Step 5: Launch and scale',
      'Mistakes to avoid',
      'Useful resources',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'AI in France: State of play and opportunities for SMEs',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'State of AI in France in 2025: adoption, budgets, challenges. How SMEs can leverage AI with French solutions.',
    headings: [
      'AI adoption in France in 2025',
      'Challenges facing French SMEs',
      'The AI API market in France',
      'Why choose a French solution?',
      'Concrete use cases',
      'How to get started?',
      '2026 outlook',
      'Conclusion',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === SCHEMA MARKUP ===
export const schemaMarkups: SchemaMarkup[] = [
  {
    type: 'Organization',
    page: '/',
    data: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI-Empire',
      url: 'https://ai-empire-steel.vercel.app',
      logo: 'https://ai-empire-steel.vercel.app/logo.png',
      description: 'The French AI platform for startups. Unified AI API with Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English'],
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FR',
      },
    },
  },
  {
    type: 'WebSite',
    page: '/',
    data: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AI-Empire',
      url: 'https://ai-empire-steel.vercel.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://ai-empire-steel.vercel.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  },
  {
    type: 'SoftwareApplication',
    page: '/',
    data: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AI-Empire',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: 'Free plan available',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '150',
      },
    },
  },
  {
    type: 'Product',
    page: '/pricing',
    data: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'AI-Empire Pro',
      description: 'Pro plan from the French AI platform for startups.',
      brand: {
        '@type': 'Brand',
        name: 'AI-Empire',
      },
      offers: {
        '@type': 'Offer',
        price: '49',
        priceCurrency: 'EUR',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
      },
    },
  },
  {
    type: 'BreadcrumbList',
    page: '/docs/*',
    data: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Documentation',
          item: 'https://ai-empire-steel.vercel.app/docs',
        },
      ],
    },
  },
  {
    type: 'FAQPage',
    page: '/faq',
    data: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire is a French AI platform that offers a unified API with Groq and Gemini for startups and French SMEs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does AI-Empire cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire offers a free plan and paid plans starting from €49/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I integrate AI-Empire into my app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Integration takes 5 minutes. Check our documentation for a step-by-step guide.',
          },
        },
      ],
    },
  },
  {
    type: 'BlogPosting',
    page: '/blog/*',
    data: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      publisher: {
        '@type': 'Organization',
        name: 'AI-Empire',
        logo: {
          '@type': 'ImageObject',
          url: 'https://ai-empire-steel.vercel.app/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://ai-empire-steel.vercel.app/blog/{slug}',
      },
    },
  },
];

// === INTERNAL LINKING STRATEGY ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'Home page — main hub' },
    { url: '/docs', anchor: 'Documentation', description: 'Documentation — resource center' },
    { url: '/pricing', anchor: 'Pricing', description: 'Pricing — conversion' },
    { url: '/templates', anchor: 'Templates', description: 'Templates — passive income' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO and content marketing' },
  ],
  clusterStrategy: [
    {
      pillar: '/blog/integrer-ia-application',
      clusters: [
        '/blog/meilleures-apis-ia-gratuites',
        '/blog/ai-empire-vs-openai',
        '/blog/guide-creer-saas-ia',
      ],
    },
    {
      pillar: '/blog/ia-france-etat-lieux',
      clusters: [
        '/blog/integrer-ia-application',
        '/blog/ai-empire-vs-openai',
      ],
    },
  ],
  rules: [
    'Each blog post must contain 3-5 internal links',
    'Hub pages (/docs, /pricing) must link to blog posts',
    'Use descriptive anchor text (not "click here")',
    'Create thematic silos for each main topic',
    'Templates can link to docs and blog',
  ],
};

export const getKeywordByPriority = (priority: Keyword['priority']): Keyword[] => {
  return seoKeywords.filter((k) => k.priority === priority);
};

export const getBlogOutlineBySlug = (slug: string): BlogOutline | undefined => {
  return blogOutlines.find((b) => b.slug === slug);
};

export const getSchemaByPage = (page: string): SchemaMarkup[] => {
  return schemaMarkups.filter((s) => s.page === page || s.page.startsWith(page.replace('*', '')));
};
