// ============================================
// AI-EMPIRE — SEO Power Pack
// Vollständige SEO-Strategie für SERP-Dominanz
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

// === HOCHVOLUME-SCHLÜSSELWÖRTER (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'französische ki api',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'openai alternative frankreich',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'ki in anwendung integrieren',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'ki api für startup',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'günstige ki api',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'textgenerierungs-api',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'premium next.js vorlage',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'wie ki im unternehmen einsetzen',
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
    term: 'französische ki-plattform',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === BLOG-ARTIKEL-Gliederungen (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'So integrieren Sie KI in Ihre App in 5 Minuten',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'Erfahren Sie, wie Sie KI in 5 Minuten mit einer kostenlosen französischen KI-API in Ihre App integrieren. Vollständiges Tutorial mit Code.',
    headings: [
      'Warum jetzt KI integrieren?',
      'Die richtige KI-API wählen',
      'Schritt 1: Konto erstellen',
      'Schritt 2: API-Schlüssel erhalten',
      'Schritt 3: Ersten API-Aufruf tätigen',
      'Schritt 4: In Ihre App integrieren',
      'Optimierungen und Best Practices',
      'Fazit',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'Die 7 besten kostenlosen KI-APIs für Startups 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'Vergleich der besten kostenlosen KI-APIs für Startups 2025. Groq, Gemini und die französische Alternative, die den Unterschied macht.',
    headings: [
      'Warum Startups kostenlose KI-APIs brauchen',
      '1. OpenAI — Der Standard',
      '2. Groq — Ultimative Geschwindigkeit',
      '3. Google Gemini — Reinste Leistung',
      '4. AI-Empire — Die französische Alternative',
      '5. Cohere — NLP',
      '6. Mistral — Der französische Champion',
      '7. Anthropic — Sicherheit',
      'Abschließender Vergleich',
      'Unsere Empfehlung',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: Vollständiger Vergleich 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'Detaillierter Vergleich zwischen AI-Empire und OpenAI: Preise, Leistung, Integration, Support. Entdecken Sie die französische Alternative.',
    headings: [
      'Vorstellung der beiden Plattformen',
      'Preisvergleich',
      'Leistungsvergleich',
      'Einfache Integration',
      'Support und Dokumentation',
      'DSGVO-Konformität',
      'Wer sollte AI-Empire wählen?',
      'Wer sollte OpenAI wählen?',
      'Fazit',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'Vollständiger Leitfaden: Ein SaaS mit KI erstellen 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'Schritt-für-Schritt-Anleitung zur Erstellung eines SaaS mit KI 2025. Von der Idee bis zum Launch, mit den richtigen APIs und Tools.',
    headings: [
      'Der Stand der KI für SaaS 2025',
      'Schritt 1: Idee validieren',
      'Schritt 2: Tech-Stack wählen',
      'Schritt 3: KI integrieren',
      'Schritt 4: SaaS monetarisieren',
      'Schritt 5: Starten und skalieren',
      'Zu vermeidende Fehler',
      'Nützliche Ressourcen',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'KI in Frankreich: Stand und Möglichkeiten für KMUs',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'Stand der KI in Frankreich 2025: Adoption, Budgets, Herausforderungen. Wie KMUs KI mit französischen Lösungen nutzen können.',
    headings: [
      'KI-Adoption in Frankreich 2025',
      'Herausforderungen für französische KMUs',
      'Der KI-API-Markt in Frankreich',
      'Warum eine französische Lösung?',
      'Konkrete Anwendungsfälle',
      'Wie fangen Sie an?',
      'Ausblick 2026',
      'Fazit',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === SCHEMA-MARKUP ===
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
      description: 'Die französische KI-Plattform für Startups. Einheitliche KI-API mit Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'German'],
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
        description: 'Kostenloser Plan verfügbar',
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
      description: 'Pro-Plan der französischen KI-Plattform für Startups.',
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
          name: 'Startseite',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Dokumentation',
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
          name: 'Was ist AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire ist eine französische KI-Plattform, die eine einheitliche API mit Groq und Gemini für Startups und französische KMUs bietet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet AI-Empire?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire bietet einen kostenlosen Plan und kostenpflichtige Pläne ab €49/Monat.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie integriere ich AI-Empire in meine App?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Integration dauert 5 Minuten. Schauen Sie in unserer Dokumentation nach einer Schritt-für-Schritt-Anleitung.',
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

// === INTERNVERLINKUNGS-STRATEGIE ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'Startseite — Haupt-Hub' },
    { url: '/docs', anchor: 'Dokumentation', description: 'Dokumentation — Ressourcencenter' },
    { url: '/pricing', anchor: 'Preise', description: 'Preise — Conversion' },
    { url: '/templates', anchor: 'Vorlagen', description: 'Vorlagen — passives Einkommen' },
    { url: '/blog', anchor: 'Blog', description: 'Blog — SEO und Content-Marketing' },
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
    'Jeder Blog-Artikel muss 3-5 interne Links enthalten',
    'Hub-Seiten (/docs, /pricing) müssen zu Blog-Artikeln verlinken',
    'Beschreibenden Anchor-Text verwenden (nicht "klicken Sie hier")',
    'Thematische Silos für jedes Hauptthema erstellen',
    'Vorlagen können zu Dokumentation und Blog verlinken',
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
