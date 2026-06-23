// ============================================
// AI-EMPIRE — Pacchetto SEO Potente
// Strategia SEO completa per dominare SERP
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

// === PAROLE CHIAVE AD ALTO TRAFFICO (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'api ia francese',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'alternativa openai francia',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'integrare ia nell\'applicazione',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'api ia per startup',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'api ia economica',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'api generazione testo',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'template next.js premium',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'come usare l\'ia in azienda',
    volume: 500,
    difficulty: 15,
    intent: 'informational',
    priority: 'medium',
  },
  {
    term: 'api groq gemini',
    volume: 400,
    difficulty: 10,
    intent: 'informational',
    priority: 'low',
  },
  {
    term: 'piattaforma ia francese',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === SCHEMI ARTICOLI BLOG (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'Come integrare l\'IA nella tua app in 5 minuti',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Scopri come integrare l\'IA nella tua app in 5 minuti con un\'API IA francese gratuita. Tutorial completo con codice.',
    headings: [
      'Perché integrare l\'IA ora?',
      'Scegliere la giusta API IA',
      'Passo 1: Crea il tuo account',
      'Passo 2: Ottieni la tua chiave API',
      'Passo 3: Effettua la prima chiamata API',
      'Passo 4: Integra nella tua app',
      'Ottimizzazioni e best practice',
      'Conclusione',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'Le 7 migliori API IA gratuite per startup nel 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Confronto delle migliori API IA gratuite per startup nel 2025. Groq, Gemini e l\'alternativa francese che fa la differenza.',
    headings: [
      'Perché le startup necessitano di API IA gratuite',
      '1. OpenAI — Lo standard',
      '2. Groq — Velocità definitiva',
      '3. Google Gemini — Potenza pura',
      '4. AI-Empire — L\'alternativa francese',
      '5. Cohere — Il NLP',
      '6. Mistral — Il campione francese',
      '7. Anthropic — La sicurezza',
      'Confronto finale',
      'La nostra raccomandazione',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Confronto completo per il 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Confronto dettagliato tra AI-Empire e OpenAI: prezzi, prestazioni, integrazione, supporto. Scopri l\'alternativa francese.',
    headings: [
      'Presentazione delle due piattaforme',
      'Confronto dei prezzi',
      'Confronto delle prestazioni',
      'Facilità di integrazione',
      'Supporto e documentazione',
      'Conformità GDPR',
      'Chi dovrebbe scegliere AI-Empire?',
      'Chi dovrebbe scegliere OpenAI?',
      'Conclusione',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Guida completa: Creare un SaaS con l\'IA nel 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Guida passo dopo passo per creare un SaaS con l\'IA nel 2025. Dall\'idea al lancio, con le API e gli strumenti giusti.',
    headings: [
      'Lo stato dell\'IA per i SaaS nel 2025',
      'Passo 1: Valida la tua idea',
      'Passo 2: Scegli il tuo stack tecnico',
      'Passo 3: Integra l\'IA',
      'Passo 4: Monetizza il tuo SaaS',
      'Passo 5: Lancia e scala',
      'Errori da evitare',
      'Risorse utili',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'L\'IA in Francia: Stato attuale e opportunità per le PMI',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'Stato dell\'IA in Francia nel 2025: adozione, budget, sfide. Come le PMI possono sfruttare l\'IA con soluzioni francesi.',
    headings: [
      'L\'adozione dell\'IA in Francia nel 2025',
      'Le sfide delle PMI francesi',
      'Il mercato delle API IA in Francia',
      'Perché scegliere una soluzione francese?',
      'Casi d\'uso concreti',
      'Come iniziare?',
      'Prospettive 2026',
      'Conclusione',
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
      description: 'La piattaforma IA francese per le startup. API IA unificata con Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Italian'],
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
        description: 'Piano gratuito disponibile',
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
      description: 'Piano Pro della piattaforma IA francese per le startup.',
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
          name: 'Documentazione',
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
          name: 'Cos\'è AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire è una piattaforma IA francese che offre un\'API unificata con Groq e Gemini per startup e PMI francesi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto costa AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire offre un piano gratuito e piani a pagamento a partire da €49/mese.',
          },
        },
        {
          '@type': 'Question',
          name: 'Come integro AI-Empire nella mia app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'integrazione richiede 5 minuti. Consulta la nostra documentazione per una guida passo dopo passo.',
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

// === STRATEGIA DI LINK INTERNI ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'Pagina principale — hub centrale' },
    { url: '/docs', anchor: 'Documentazione', description: 'Documentazione — centro risorse' },
    { url: '/pricing', anchor: 'Prezzi', description: 'Prezzi — conversione' },
    { url: '/templates', anchor: 'Template', description: 'Template — reddito passivo' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO e content marketing' },
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
    'Ogni articolo del blog deve contenere 3-5 link interni',
    'Le pagine hub (/docs, /pricing) devono collegarsi agli articoli del blog',
    'Usare testo di ancoraggio descrittivo (non "clicca qui")',
    'Creare silos tematici per ogni argomento principale',
    'I template possono collegarsi alla documentazione e al blog',
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
