// ============================================
// AI-EMPIRE — SEO 力量包
// 完整的SEO策略，统治SERP
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

// === 高流量关键词（10） ===
export const seoKeywords: Keyword[] = [
  {
    term: '法国AI API',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'OpenAI替代方案 法国',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: '将AI集成到应用中',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: '初创公司AI API',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: '便宜的AI API',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '文本生成API',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '高级next.js模板',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '企业如何使用AI',
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
    term: '法国AI平台',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === 博客文章大纲（5） ===
export const blogOutlines: BlogOutline[] = [
  {
    title: '5分钟内将AI集成到您的应用中',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: '了解如何使用免费的法国AI API在5分钟内将AI集成到您的应用中。包含代码的完整教程。',
    headings: [
      '为什么要现在集成AI',
      '选择正确的AI API',
      '步骤1：创建您的账户',
      '步骤2：获取您的API密钥',
      '步骤3：进行第一次API调用',
      '步骤4：集成到您的应用中',
      '优化和最佳实践',
      '总结',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: '2025年初创公司最好的7个免费AI API',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: '2025年初创公司最好的免费AI API对比。Groq、Gemini以及做出差异的法国替代方案。',
    headings: [
      '为什么初创公司需要免费AI API',
      '1. OpenAI — 标准',
      '2. Groq — 极致速度',
      '3. Google Gemini — 强大性能',
      '4. AI-Empire — 法国替代方案',
      '5. Cohere — NLP',
      '6. Mistral — 法国冠军',
      '7. Anthropic — 安全性',
      '最终对比',
      '我们的推荐',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI：2025年完整对比',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'AI-Empire和OpenAI的详细对比：价格、性能、集成、支持。了解法国替代方案。',
    headings: [
      '两大平台介绍',
      '价格对比',
      '性能对比',
      '集成便捷性',
      '支持和文档',
      'GDPR合规',
      '谁应该选择AI-Empire',
      '谁应该选择OpenAI',
      '总结',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: '完整指南：2025年用AI创建SaaS',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: '2025年用AI创建SaaS的分步指南。从创意到发布，使用正确的API和工具。',
    headings: [
      '2025年SaaS的AI现状',
      '步骤1：验证您的创意',
      '步骤2：选择您的技术栈',
      '步骤3：集成AI',
      '步骤4：将SaaS变现',
      '步骤5：发布和扩展',
      '需要避免的错误',
      '有用的资源',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: '法国AI：中小企业现状与机遇',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: '2025年法国AI现状：采用率、预算、挑战。中小企业如何利用法国解决方案发挥AI优势。',
    headings: [
      '2025年法国的AI采用情况',
      '法国中小企业面临的挑战',
      '法国AI API市场',
      '为什么选择法国解决方案',
      '具体使用案例',
      '如何开始',
      '2026年展望',
      '总结',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === 架构标记 ===
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
      description: '面向初创公司的法国AI平台。Groq + Gemini统一AI API。',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Chinese'],
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
        description: '免费计划可用',
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
      description: '法国AI初创平台的专业计划。',
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
          name: '首页',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '文档',
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
          name: '什么是AI-Empire？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire是一个法国AI平台，为初创公司和法国中小企业提供Groq和Gemini统一API。',
          },
        },
        {
          '@type': 'Question',
          name: 'AI-Empire多少钱？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire提供免费计划和每月€49起的付费计划。',
          },
        },
        {
          '@type': 'Question',
          name: '如何将AI-Empire集成到我的应用中？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '集成只需5分钟。请参阅我们的文档获取分步指南。',
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

// === 内部链接策略 ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: '首页 — 主枢纽' },
    { url: '/docs', anchor: '文档', description: '文档 — 资源中心' },
    { url: '/pricing', anchor: '定价', description: '定价 — 转化' },
    { url: '/templates', anchor: '模板', description: '模板 — 被动收入' },
    { url: '/blog', anchor: '博客', description: '博客 — SEO和内容营销' },
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
    '每篇博客文章必须包含3-5个内部链接',
    '枢纽页面（/docs、/pricing）必须链接到博客文章',
    '使用描述性锚文本（不要用"点击这里"）',
    '为每个主要主题创建主题集群',
    '模板可以链接到文档和博客',
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
