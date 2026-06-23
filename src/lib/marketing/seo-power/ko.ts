// ============================================
// AI-EMPIRE — SEO 파워 팩
// SERP 지배를 위한 완전한 SEO 전략
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

// === 고트래픽 키워드 (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: '프랑스 AI API',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'OpenAI 대안 프랑스',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: '앱에 AI 통합하기',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: '스타트업용 AI API',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: '저렴한 AI API',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '텍스트 생성 API',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '프리미엄 next.js 템플릿',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '기업에서 AI 활용하는 방법',
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
    term: '프랑스 AI 플랫폼',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === 블로그 포스트 개요 (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: '5분 만에 앱에 AI 통합하는 방법',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: '무료 프랑스 AI API로 5분 만에 앱에 AI를 통합하는 방법을 알아보세요. 코드가 포함된 완전한 튜토리얼.',
    headings: [
      '지금 AI를 통합해야 하는 이유',
      '올바른 AI API 선택하기',
      '1단계: 계정 만들기',
      '2단계: API 키 받기',
      '3단계: 첫 API 호출하기',
      '4단계: 앱에 통합하기',
      '최적화 및 모범 사례',
      '결론',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: '2025년 스타트업을 위한 최고의 무료 AI API 7선',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: '2025년 스타트업을 위한 최고의 무료 AI API 비교. Groq, Gemini, 그리고 차이를 만드는 프랑스 대안.',
    headings: [
      '스타트업이 무료 AI API를 필요로 하는 이유',
      '1. OpenAI — 표준',
      '2. Groq — 궁극의 속도',
      '3. Google Gemini — 압도적 성능',
      '4. AI-Empire — 프랑스 대안',
      '5. Cohere — NLP',
      '6. Mistral — 프랑스 챔피언',
      '7. Anthropic — 보안',
      '최종 비교',
      '추천',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI: 2025년 완전 비교',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'AI-Empire와 OpenAI의 상세 비교: 가격, 성능, 통합, 지원. 프랑스 대안을 알아보세요.',
    headings: [
      '두 플랫폼 소개',
      '가격 비교',
      '성능 비교',
      '통합 용이성',
      '지원 및 문서',
      'GDPR 준수',
      'AI-Empire를 선택해야 하는 사람',
      'OpenAI를 선택해야 하는 사람',
      '결론',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: '완전 가이드: 2025년 AI로 SaaS 만들기',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: '2025년 AI로 SaaS를 만드는 단계별 가이드. 아이디어에서 출시까지, 올바른 API와 도구로.',
    headings: [
      '2025년 SaaS를 위한 AI 현황',
      '1단계: 아이디어 검증하기',
      '2단계: 기술 스택 선택하기',
      '3단계: AI 통합하기',
      '4단계: SaaS 수익화하기',
      '5단계: 출시하고 확장하기',
      '피해야 할 실수',
      '유용한 리소스',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: '프랑스의 AI: 중소기업을 위한 현황과 기회',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: '2025년 프랑스 AI 현황: 도입, 예산, 과제. 프랑스 솔루션으로 중소기업이 AI를 활용하는 방법.',
    headings: [
      '2025년 프랑스의 AI 도입',
      '프랑스 중소기업이 직면한 과제',
      '프랑스 AI API 시장',
      '왜 프랑스 솔루션인가',
      '구체적인 사용 사례',
      '시작하는 방법',
      '2026년 전망',
      '결론',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === 스키마 마크업 ===
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
      description: '스타트업을 위한 프랑스 AI 플랫폼. Groq + Gemini 통합 AI API.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Korean'],
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
        description: '무료 플랜 이용 가능',
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
      description: '스타트업을 위한 프랑스 AI 플랫폼의 Pro 플랜.',
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
          name: '홈',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '문서',
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
          name: 'AI-Empire란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire는 스타트업과 프랑스 중소기업을 위해 Groq와 Gemini를 통합한 API를 제공하는 프랑스 AI 플랫폼입니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'AI-Empire 비용은 얼마인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire는 무료 플랜과 월 €49부터 시작하는 유료 플랜을 제공합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '앱에 AI-Empire를 어떻게 통합하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '통합은 5분이면 완료됩니다. 단계별 가이드는 문서를 참조하세요.',
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

// === 내부 링크 전략 ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: '홈페이지 — 메인 허브' },
    { url: '/docs', anchor: '문서', description: '문서 — 리소스 센터' },
    { url: '/pricing', anchor: '가격', description: '가격 — 전환' },
    { url: '/templates', anchor: '템플릿', description: '템플릿 — 수동적 수입' },
    { url: '/blog', anchor: '블로그', description: '블로그 — SEO 및 콘텐츠 마케팅' },
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
    '각 블로그 포스트에는 3-5개의 내부 링크를 포함해야 합니다',
    '허브 페이지(/docs, /pricing)는 블로그 포스트에 링크해야 합니다',
    '설명적인 앵커 텍스트를 사용하세요 ("여기를 클릭하세요"는 금지)',
    '각 주요 주제에 대한 테마별 실로를 구축하세요',
    '템플릿은 문서와 블로그에 링크할 수 있습니다',
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
