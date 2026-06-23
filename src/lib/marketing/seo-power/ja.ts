// ============================================
// AI-EMPIRE — SEO パワーパック
// SERP 攻略のための完全なSEO戦略
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

// === 高トラフィックキーワード（10） ===
export const seoKeywords: Keyword[] = [
  {
    term: 'フランス製 AI API',
    volume: 2400,
    difficulty: 25,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'OpenAI代替 フランス',
    volume: 1800,
    difficulty: 30,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: 'アプリにAIを統合する',
    volume: 1600,
    difficulty: 35,
    intent: 'informational',
    priority: 'high',
  },
  {
    term: 'スタートアップ向け AI API',
    volume: 1200,
    difficulty: 20,
    intent: 'transactional',
    priority: 'high',
  },
  {
    term: '安い AI API',
    volume: 900,
    difficulty: 15,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'テキスト生成 API',
    volume: 700,
    difficulty: 20,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: 'プレミアム next.js テンプレート',
    volume: 600,
    difficulty: 25,
    intent: 'transactional',
    priority: 'medium',
  },
  {
    term: '企業でAIを活用する方法',
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
    term: 'フランス製 AI プラットフォーム',
    volume: 350,
    difficulty: 15,
    intent: 'navigational',
    priority: 'low',
  },
];

// === ブログ記事アウトライン（5） ===
export const blogOutlines: BlogOutline[] = [
  {
    title: '5分でアプリにAIを統合する方法',
    slug: 'integrer-ia-application-5-minutes',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'ai api pas cher'],
    metaDescription: '無料のフランス製AI APIを使って、5分でアプリにAIを統合する方法をご紹介。コード付きの完全チュートリアル。',
    headings: [
      '今なぜAIを統合すべきなのか',
      '適切なAI APIの選び方',
      'ステップ1：アカウントを作成する',
      'ステップ2：APIキーを取得する',
      'ステップ3：最初のAPI呼び出しを行う',
      'ステップ4：アプリに統合する',
      '最適化とベストプラクティス',
      'まとめ',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/templates'],
  },
  {
    title: '2025年スタートアップ向け 最高の無料AI API 7選',
    slug: 'meilleures-apis-ia-gratuites-startups-2025',
    targetKeywords: ['ai api pas cher', 'api ia pour startup', 'api ai française'],
    metaDescription: '2025年スタートアップ向け最高の無料AI APIを比較。Groq、Gemini、そして差をつけるフランス代替案。',
    headings: [
      'スタートアップが無料AI APIを必要とする理由',
      '1. OpenAI — 標準',
      '2. Groq — 究極の速度',
      '3. Google Gemini — 圧倒的なパワー',
      '4. AI-Empire — フランス代替案',
      '5. Cohere — NLP',
      '6. Mistral — フランスのチャンピオン',
      '7. Anthropic — セキュリティ',
      '最終比較',
      'おすすめ',
    ],
    wordCount: 3000,
    internalLinks: ['/docs', '/pricing', '/blog/api-openai-vs-groq'],
  },
  {
    title: 'AI-Empire vs OpenAI：2025年の完全比較',
    slug: 'ai-empire-vs-openai-comparatif-2025',
    targetKeywords: ['alternative openai france', 'api ai française', 'api groq gemini'],
    metaDescription: 'AI-EmpireとOpenAIの詳細比較：価格、パフォーマンス、統合、サポート。フランス代替案をご紹介。',
    headings: [
      '2つのプラットフォームの概要',
      '価格比較',
      'パフォーマンス比較',
      '統合の簡単さ',
      'サポートとドキュメント',
      'GDPR準拠',
      'AI-Empireがおすすめの人',
      'OpenAIがおすすめの人',
      'まとめ',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/meilleures-apis-ia-gratuites'],
  },
  {
    title: '完全ガイド：2025年にAIでSaaSを作る方法',
    slug: 'guide-creer-saas-ia-2025',
    targetKeywords: ['integrer ia dans application', 'api ia pour startup', 'comment utiliser l\'ia enentreprise'],
    metaDescription: '2025年にAIでSaaSを作るステップバイステップガイド。アイデアからローンチまで、適切なAPIとツールで。',
    headings: [
      '2025年のSaaSにおけるAIの現状',
      'ステップ1：アイデアを検証する',
      'ステップ2：技術スタックを選ぶ',
      'ステップ3：AIを統合する',
      'ステップ4：SaaSを収益化する',
      'ステップ5：ローンチしてスケールする',
      '避けるべき失敗',
      '便利なリソース',
    ],
    wordCount: 3500,
    internalLinks: ['/docs', '/pricing', '/templates', '/blog/integrer-ia-application'],
  },
  {
    title: 'フランスのAI： 中小企業向けの現状と機会',
    slug: 'ia-france-etat-lieux-opportunites-pme',
    targetKeywords: ['plateforme ai française', 'comment utiliser l\'ia en entreprise', 'api ai française'],
    metaDescription: '2025年フランスのAI状況：導入率、予算、課題。フランスのソリューションで中小企業がAIを活用する方法。',
    headings: [
      '2025年フランスでのAI導入',
      'フランスの中小企業が直面する課題',
      'フランスのAI API市場',
      'なぜフランス製ソリューションなのか',
      '具体的なユースケース',
      '始め方',
      '2026年の展望',
      'まとめ',
    ],
    wordCount: 2500,
    internalLinks: ['/docs', '/pricing', '/blog/ai-empire-vs-openai'],
  },
];

// === スキーママークアップ ===
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
      description: 'スタートアップ向けフランスAIプラットフォーム。Groq + Geminiによる統一AI API。',
      sameAs: [
        'https://twitter.com/aieempire',
        'https://linkedin.com/company/ai-empire',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Japanese'],
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
        description: '無料プランあり',
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
      description: 'スタートアップ向けフランスAIプラットフォームのProプラン。',
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
          name: 'ホーム',
          item: 'https://ai-empire-steel.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'ドキュメント',
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
          name: 'AI-Empireとは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empireは、スタートアップとフランスの中小企業向けにGroqとGeminiを統合したAPIを提供するフランスAIプラットフォームです。',
          },
        },
        {
          '@type': 'Question',
          name: 'AI-Empireの料金はいくらですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI-Empireは無料プランと月€49からの有料プランを提供しています。',
          },
        },
        {
          '@type': 'Question',
          name: 'AI-Empireをアプリに統合するにはどうすればいいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '統合は5分で完了します。ステップバイステップガイドはドキュメントをご参照ください。',
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

// === 内部リンク戦略 ===
export const internalLinkingStrategy = {
  hubPages: [
    { url: '/', anchor: 'AI-Empire', description: 'ホームページ — メインハブ' },
    { url: '/docs', anchor: 'ドキュメント', description: 'ドキュメント — リソースセンター' },
    { url: '/pricing', anchor: '料金', description: '料金 — コンバージョン' },
    { url: '/templates', anchor: 'テンプレート', description: 'テンプレート — 受動的収入' },
    { url: '/blog', anchor: 'ブログ', description: 'ブログ — SEOとコンテンツマーケティング' },
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
    '各ブログ記事には3〜5個の内部リンクを含める',
    'ハブページ（/docs、/pricing）はブログ記事にリンクする',
    '説明的なアンカーテキストを使用する（「こちらをクリック」はNG）',
    '各メイントピックのためのテーマ別シロを構築する',
    'テンプレートはドキュメントやブログにリンクできる',
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
