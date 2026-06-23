// ============================================
// AI-EMPIRE — Pacote SEO Potente
// Estratégia SEO completa para dominar SERP
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

// === PALAVRAS-CHAVE DE ALTO TRÁFEGO (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'api de ia francesa',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'alternativa openai frança',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'integrar ia em aplicação',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'api de ia para startup',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'api de ia barata',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'api de geração de texto',
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
    term: 'como usar ia em empresas',
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
    term: 'plataforma de ia francesa',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === ESQUEMAS DE ARTIGOS DO BLOG (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'Como integrar IA no seu aplicativo em 5 minutos',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Descubra como integrar IA no seu aplicativo em 5 minutos com uma API de IA francesa gratuita. Tutorial completo com código.',
    headings: [
      'Por que integrar IA agora?',
      'Escolher a API de IA certa',
      'Passo 1: Crie sua conta',
      'Passo 2: Obtenha sua chave de API',
      'Passo 3: Faça sua primeira chamada de API',
      'Passo 4: Integre no seu aplicativo',
      'Otimizações e melhores práticas',
      'Conclusão',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'As 7 melhores APIs de IA gratuitas para startups em 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Comparação das melhores APIs de IA gratuitas para startups em 2025. Groq, Gemini e a alternativa francesa que faz a diferença.',
    headings: [
      'Por que startups precisam de APIs de IA gratuitas',
      '1. OpenAI — O padrão',
      '2. Groq — Velocidade definitiva',
      '3. Google Gemini — Pura potência',
      '4. AI-Empire — A alternativa francesa',
      '5. Cohere — NLP',
      '6. Mistral — O campeão francês',
      '7. Anthropic — Segurança',
      'Comparação final',
      'Nossa recomendação',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Comparação completa para 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Comparação detalhada entre AI-Empire e OpenAI: preço, desempenho, integração, suporte. Descubra a alternativa francesa.',
    headings: [
      'Apresentação das duas plataformas',
      'Comparação de preços',
      'Comparação de desempenho',
      'Facilidade de integração',
      'Suporte e documentação',
      'Conformidade GDPR',
      'Quem deveria escolher AI-Empire?',
      'Quem deveria escolher OpenAI?',
      'Conclusão',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Guia completo: Criar um SaaS com IA em 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Guia passo a passo para criar um SaaS com IA em 2025. Da ideia ao lançamento, com as APIs e ferramentas certas.',
    headings: [
      'O estado da IA para SaaS em 2025',
      'Passo 1: Valide sua ideia',
      'Passo 2: Escolha sua stack técnica',
      'Passo 3: Integre a IA',
      'Passo 4: Monetize seu SaaS',
      'Passo 5: Lance e escale',
      'Erros a evitar',
      'Recursos úteis',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'IA na França: Panorama e oportunidades para PMEs',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'Estado da IA na França em 2025: adoção, orçamentos, desafios. Como as PMEs podem aproveitar a IA com soluções francesas.',
    headings: [
      'A adoção da IA na França em 2025',
      'Os desafios das PMEs francesas',
      'O mercado de APIs de IA na França',
      'Por que escolher uma solução francesa?',
      'Casos de uso concretos',
      'Como começar?',
      'Perspectivas 2026',
      'Conclusão',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === MARCAÇÃO SCHEMA ===
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
      description: 'A plataforma de IA francesa para startups. API de IA unificada com Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Portuguese'],
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
        description: 'Plano gratuito disponível',
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
      description: 'Plano Pro da plataforma de IA francesa para startups.',
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
          name: 'Início',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Documentação',
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
          name: 'O que é AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire é uma plataforma de IA francesa que oferece uma API unificada com Groq e Gemini para startups e PMEs francesas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto custa AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire oferece um plano gratuito e planos pagos a partir de €49/mês.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como integro AI-Empire no meu aplicativo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A integração leva 5 minutos. Consulte nossa documentação para um guia passo a passo.',
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

// === ESTRATÉGIA DE LINKS INTERNOS ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'Página principal — hub central' },
    { url: '/docs', anchor: 'Documentação', description: 'Documentação — centro de recursos' },
    { url: '/pricing', anchor: 'Preços', description: 'Preços — conversão' },
    { url: '/templates', anchor: 'Templates', description: 'Templates — renda passiva' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO e marketing de conteúdo' },
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
    'Cada artigo do blog deve conter 3-5 links internos',
    'As páginas hub (/docs, /pricing) devem linker para os artigos do blog',
    'Usar texto de âncora descritivo (não "clique aqui")',
    'Criar silos temáticos para cada tópico principal',
    'Os templates podem linker para a documentação e o blog',
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
