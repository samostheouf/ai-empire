// ============================================
// AI-EMPIRE — Paquete SEO Potente
// Estrategia SEO completa para dominar SERP
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

// === PALABRAS CLAVE DE ALTO TRÁFICO (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'api de ia francesa',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'alternativa a openai francia',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'integrar ia en aplicación',
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
    term: 'api de generación de texto',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'plantilla next.js premium',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'cómo usar la ia en empresas',
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

// === ESQUEMAS DE ARTÍCULOS DEL BLOG (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'Cómo integrar la IA en tu aplicación en 5 minutos',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Descubre cómo integrar la IA en tu aplicación en 5 minutos con una API de IA francesa gratuita. Tutorial completo con código.',
    headings: [
      '¿Por qué integrar la IA ahora?',
      'Elegir la API de IA correcta',
      'Paso 1: Crea tu cuenta',
      'Paso 2: Obtén tu clave API',
      'Paso 3: Realiza tu primera llamada API',
      'Paso 4: Integra en tu aplicación',
      'Optimizaciones y mejores prácticas',
      'Conclusión',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'Las 7 mejores APIs de IA gratuitas para startups en 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Comparativa de las mejores APIs de IA gratuitas para startups en 2025. Groq, Gemini y la alternativa francesa que marca la diferencia.',
    headings: [
      'Por qué las startups necesitan APIs de IA gratuitas',
      '1. OpenAI — El estándar',
      '2. Groq — Velocidad definitiva',
      '3. Google Gemini — Pura potencia',
      '4. AI-Empire — La alternativa francesa',
      '5. Cohere — NLP',
      '6. Mistral — El campeón francés',
      '7. Anthropic — Seguridad',
      'Comparativa final',
      'Nuestra recomendación',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Comparativa completa para 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Comparativa detallada entre AI-Empire y OpenAI: precios, rendimiento, integración, soporte. Descubre la alternativa francesa.',
    headings: [
      'Presentación de ambas plataformas',
      'Comparativa de precios',
      'Comparativa de rendimiento',
      'Facilidad de integración',
      'Soporte y documentación',
      'Cumplimiento GDPR',
      '¿Quién debería elegir AI-Empire?',
      '¿Quién debería elegir OpenAI?',
      'Conclusión',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Guía completa: Crear un SaaS con IA en 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Guía paso a paso para crear un SaaS con IA en 2025. De la idea al lanzamiento, con las APIs y herramientas adecuadas.',
    headings: [
      'El estado de la IA para SaaS en 2025',
      'Paso 1: Valida tu idea',
      'Paso 2: Elige tu stack técnico',
      'Paso 3: Integra la IA',
      'Paso 4: Monetiza tu SaaS',
      'Paso 5: Lanza y escala',
      'Errores a evitar',
      'Recursos útiles',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'La IA en Francia: Panorama y oportunidades para pymes',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'Estado de la IA en Francia en 2025: adopción, presupuestos, desafíos. Cómo las pymes pueden aprovechar la IA con soluciones francesas.',
    headings: [
      'La adopción de la IA en Francia en 2025',
      'Los desafíos de las pymes francesas',
      'El mercado de APIs de IA en Francia',
      '¿Por qué elegir una solución francesa?',
      'Casos de uso concretos',
      '¿Cómo empezar?',
      'Perspectivas 2026',
      'Conclusión',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === MARCADO SCHEMA ===
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
      description: 'La plataforma de IA francesa para startups. API de IA unificada con Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Spanish'],
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
        description: 'Plan gratuito disponible',
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
      description: 'Plan Pro de la plataforma de IA francesa para startups.',
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
          name: 'Inicio',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Documentación',
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
          name: '¿Qué es AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire es una plataforma de IA francesa que ofrece una API unificada con Groq y Gemini para startups y pymes francesas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire ofrece un plan gratuito y planes de pago desde €49/mes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo integro AI-Empire en mi aplicación?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La integración tarda 5 minutos. Consulta nuestra documentación para una guía paso a paso.',
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

// === ESTRATEGIA DE ENLACES INTERNOS ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'Página principal — hub central' },
    { url: '/docs', anchor: 'Documentación', description: 'Documentación — centro de recursos' },
    { url: '/pricing', anchor: 'Precios', description: 'Precios — conversión' },
    { url: '/templates', anchor: 'Plantillas', description: 'Plantillas — ingresos pasivos' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO y marketing de contenidos' },
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
    'Cada artículo del blog debe contener 3-5 enlaces internos',
    'Las páginas principales (/docs, /pricing) deben enlazar a los artículos del blog',
    'Usar texto de anclaje descriptivo (no "haz clic aquí")',
    'Crear silos temáticos para cada tema principal',
    'Las plantillas pueden enlazar a la documentación y al blog',
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
