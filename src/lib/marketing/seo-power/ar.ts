// ============================================
// AI-EMPIRE — حزمة SEO القوية
// استراتيجية SEO شاملة للسيطرة على SERP
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

// === كلمات المفتاح عالية الزيارات (10) ===
export const seoKeywords: Keyword[] = [
  {
    term: 'واجهة برمجة تطبيقات الذكاء الاصطناعي الفرنسية',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'بديل OpenAI في فرنسا',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'دمج الذكاء الاصطناعي في التطبيق',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'واجهة برمجة تطبيقات ذكاء اصطناعي للشركات الناشئة',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'واجهة برمجة تطبيقات ذكاء اصطناعي رخيصة',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'واجهة برمجة توليد النصوص',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'قالب next.js متميز',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'كيفية استخدام الذكاء الاصطناعي في الشركات',
    volume: 500,
    difficulty: 15,
    intent: 'informational',
    priority: 'medium',
  },
  {
    term: 'واجهة برمجة تطبيقات groq gemini',
    volume: 400,
    difficulty: 10,
    intent: 'informational',
    priority: 'low',
  },
  {
    term: 'منصة ذكاء اصطناعي فرنسية',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === مخططات مقالات المدونة (5) ===
export const blogOutlines: BlogOutline[] = [
  {
    title: 'كيفية دمج الذكاء الاصطناعي في تطبيقك في 5 دقائق',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: 'اكتشف كيفية دمج الذكاء الاصطناعي في تطبيقك في 5 دقائق باستخدام واجهة برمجة تطبيقات ذكاء اصطناعي فرنسية مجانية. درس شامل مع الكود.',
    headings: [
      'لماذا تدمج الذكاء الاصطناعي الآن',
      'اختر واجهة برمجة التطبيقات المناسبة',
      'الخطوة 1: أنشئ حسابك',
      'الخطوة 2: احصل على مفتاح API',
      'الخطوة 3: قم بأول استدعاء لواجهة API',
      'الخطوة 4: ادمج في تطبيقك',
      'التحسينات وأفضل الممارسات',
      'الخلاصة',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: 'أفضل 7 واجهات برمجة تطبيقات الذكاء الاصطناعي المجانية للشركات الناشئة في 2025',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: 'مقارنة أفضل واجهات برمجة تطبيقات الذكاء الاصطناعي المجانية للشركات الناشئة في 2025. Groq وGemini والبديل الفرنسي الذي يُحدث الفرق.',
    headings: [
      'لماذا تحتاج الشركات الناشئة إلى واجهات برمجة تطبيقات ذكاء اصطناعي مجانية',
      '1. OpenAI — المعيار',
      '2. Groq — السرعة القصوى',
      '3. Google Gemini — القوة الخام',
      '4. AI-Empire — البديل الفرنسي',
      '5. Cohere — معالجة اللغة الطبيعية',
      '6. Mistral — البطل الفرنسي',
      '7. Anthropic — الأمان',
      'المقارنة النهائية',
      'توصيتنا',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire مقابل OpenAI: مقارنة شاملة لعام 2025',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'مقارنة تفصيلية بين AI-Empire وOpenAI: السعر والأداء والدمج والدعم. اكتشف البديل الفرنسي.',
    headings: [
      'نظرة عامة على المنصتين',
      'مقارنة الأسعار',
      'مقارنة الأداء',
      'سهولة الدمج',
      'الدعم والتوثيق',
      'الامتثال للائحة العامة لحماية البيانات',
      'من يجب أن يختار AI-Empire',
      'من يجب أن يختار OpenAI',
      'الخلاصة',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: 'دليل شامل: إنشاء SaaS بالذكاء الاصطناعي في 2025',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia en entreprise'],
    metaDescription: 'دليل خطوة بخطوة لإنشاء SaaS بالذكاء الاصطناعي في 2025. من الفكرة إلى الإطلاق، مع واجهات البرمجة والأدوات المناسبة.',
    headings: [
      'وضع الذكاء الاصطناعي لـ SaaS في 2025',
      'الخطوة 1: تحقق من فكرتك',
      'الخطوة 2: اختر مجموعة تقنياتك',
      'الخطوة 3: ادمج الذكاء الاصطناعي',
      'الخطوة 4: اربح من SaaS الخاص بك',
      'الخطوة 5: أطلق ووسّع',
      'أخطاء يجب تجنبها',
      'موارد مفيدة',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'الذكاء الاصطناعي في فرنسا: الوضع الحالي والفرص للشركات الصغيرة والمتوسطة',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: 'وضع الذكاء الاصطناعي في فرنسا في 2025: التبني والميزانيات والتحديات. كيف يمكن للشركات الصغيرة والمتوسطة الاستفادة من الذكاء الاصطناعي بالحلول الفرنسية.',
    headings: [
      'تبني الذكاء الاصطناعي في فرنسا في 2025',
      'تحديات الشركات الصغيرة والمتوسطة الفرنسية',
      'سوق واجهات برمجة تطبيقات الذكاء الاصطناعي في فرنسا',
      'لماذا تختار حلاً فرنسياً',
      'حالات استخدام عملية',
      'كيف تبدأ',
      'آفاق 2026',
      'الخلاصة',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === علامة المخطط (Schema Markup) ===
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
      description: 'منصة الذكاء الاصطناعي الفرنسية للشركات الناشئة. واجهة برمجة تطبيقات ذكاء اصطناعي موحدة مع Groq + Gemini.',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Arabic'],
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
        description: 'الخطة المجانية متاحة',
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
      description: 'الخطة الاحترافية لمنصة الذكاء الاصطناعي الفرنسية للشركات الناشئة.',
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
          name: 'الصفحة الرئيسية',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'التوثيق',
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
          name: 'ما هو AI-Empire؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empire هي منصة ذكاء اصطناعي فرنسية توفر واجهة برمجة تطبيقات موحدة مع Groq وGemini للشركات الناشئة والشركات الصغيرة والمتوسطة الفرنسية.',
          },
        },
        {
          '@type': 'Question',
          name: 'كم تكلف AI-Empire؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'توفر AI-Empire خطة مجانية وخطط مدفوعة تبدأ من 49 يورو/شهر.',
          },
        },
        {
          '@type': 'Question',
          name: 'كيف أدمج AI-Empire في تطبيقي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'الدمج يستغرق 5 دقائق. راجع توثيقنا للحصول على دليل خطوة بخطوة.',
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

// === استراتيجية الروابط الداخلية ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'الصفحة الرئيسية — المركز الرئيسي' },
    { url: '/docs', anchor: 'التوثيق', description: 'التوثيق — مركز الموارد' },
    { url: '/pricing', anchor: 'الأسعار', description: 'الأسعار — التحويل' },
    { url: '/templates', anchor: 'القوالب', description: 'القوالب — الدخل السلبي' },
    { url: '/blog', anchor: 'المدونة', description: 'المدونة — SEO وتسويق المحتوى' },
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
    'يجب أن تحتوي كل مقالة في المدونة على 3-5 روابط داخلية',
    'صفحات المركز (/docs، /pricing) يجب أن تربط بمقالات المدونة',
    'استخدم نصوص توصيفية للرابط (وليس "انقر هنا")',
    'أنشئ مجموعات موضوعية لكل موضوع رئيسي',
    'القوالب يمكنها الربط بالتوثيق والمدونة',
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
