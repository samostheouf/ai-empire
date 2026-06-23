// ============================================
// AI-EMPIRE — SEO Power Pack
// Stratégie SEO complète pour domination SERP
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

// === MOTS-CLÉS HIGH-TRAFFIC (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'api ai française',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'alternative openai france',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'integrer ia dans application',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'api ia pour startup',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'ai api pas cher',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'api generate texte',
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
    term: 'comment utiliser l\'ia en entreprise',
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
    term: 'plateforme ai française',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === BLOG POST OUTLINES (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'Comment intégrer l\'IA dans votre application en 5 minutes',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Découvrez comment intégrer l\'IA dans votre application en 5 minutes grâce à une API AI française gratuite. Tutoriel complet avec code.',
    headings: [
      'Pourquoi intégrer l\'IA maintenant?',
      'Choisir la bonne API AI',
      'Étape 1: Créer votre compte',
      'Étape 2: Obtenir votre API key',
      'Étape 3: Faire votre premier appel API',
      'Étape 4: Intégrer dans votre application',
      'Optimisations et bonnes pratiques',
      'Conclusion',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'Les 7 meilleures APIs IA gratuites pour startups en 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Comparatif des meilleures APIs IA gratuites pour startups en 2025. Groq, Gemini, et l\'alternative française qui fait la différence.',
    headings: [
      'Pourquoi les startups ont besoin d\'APIs IA gratuites',
      '1. OpenAI — Le standard',
      '2. Groq — La vitesse ultime',
      '3. Google Gemini — La puissance',
      '4. AI-Empire — L\'alternative française',
      '5. Cohere — Le NLP',
      '6. Mistral — Le champion français',
      '7. Anthropic — La sécurité',
      'Comparatif final',
      'Notre recommandation',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Comparatif complet pour 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Comparatif détaillé entre AI-Empire et OpenAI: prix, performances, intégration, support. Découvrez l\'alternative française.',
    headings: [
      'Présentation des deux plateformes',
      'Comparatif des prix',
      'Comparatif des performances',
      'Facilité d\'intégration',
      'Support et documentation',
      'Conformité GDPR',
      'Qui devrait choisir AI-Empire?',
      'Qui devrait choisir OpenAI?',
      'Conclusion',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Guide complet: Créer un SaaS avec l\'IA en 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Guide étape par étape pour créer un SaaS avec l\'IA en 2025. De l\'idée au lancement, avec les bonnes APIs et outils.',
    headings: [
      'L\'état de l\'IA pour les SaaS en 2025',
      'Étape 1: Valider votre idée',
      'Étape 2: Choisir votre stack technique',
      'Étape 3: Intégrer l\'IA',
      'Étape 4: Monétiser votre SaaS',
      'Étape 5: Lancer et scaler',
      'Erreurs à éviter',
      'Ressources utiles',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'L\'IA en France: État des lieux et opportunités pour les PME',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'État de l\'IA en France en 2025: adoption, budgets, défis. Comment les PME peuvent tirer parti de l\'IA avec des solutions françaises.',
    headings: [
      'L\'adoption de l\'IA en France en 2025',
      'Les défis des PME françaises',
      'Le marché des APIs IA en France',
      'Pourquoi une solution française?',
      'Cas d\'usage concrets',
      'Comment démarrer?',
      'Perspectives 2026',
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
      description: 'La plateforme AI française pour startups. API IA unifiée avec Groq + Gemini.',
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
        description: 'Plan gratuit disponible',
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
      description: 'Plan Pro de la plateforme AI française pour startups.',
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
          name: 'Accueil',
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
          name: 'Qu\'est-ce qu\'AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire est une plateforme AI française qui offre une API unifiée avec Groq et Gemini pour les startups et PME françaises.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire offre un plan gratuit et des plans payants à partir de €49/mois.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment intégrer AI-Empire dans mon application?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'intégration prend 5 minutes. Consultez notre documentation pour un guide étape par étape.',
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
    { url: '/', anchor: 'AI-Empire', description: 'Page d\'accueil — hub principal' },
    { url: '/docs', anchor: 'Documentation', description: 'Documentation — centre de ressources' },
    { url: '/pricing', anchor: 'Tarifs', description: 'Pricing — conversion' },
    { url: '/templates', anchor: 'Templates', description: 'Templates — revenu passif' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO et content marketing' },
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
    'Chaque page blog doit contenir 3-5 liens internes',
    'Les pages hub (/docs, /pricing) must linker vers les blog posts',
    'Utiliser des ancres descriptives (pas "cliquez ici")',
    'Créer des silos thématiques pour chaque topic principal',
    'Les templates peuvent linker vers les docs et le blog',
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
