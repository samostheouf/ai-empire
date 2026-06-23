import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'ja',
  productDescriptionShort:
    'AI Empireは、プロフェッショナルなNext.js 14テンプレートと統合AI API（GroqとGemini）、Stripe決済、認証を組み合わせた開発者向けプラットフォームです。開発者がAI搭載のSaaSプロダクトをより速く構築・デプロイできるようにします。',
  productDescriptionLong:
    'AI Empireは、AI搭載のSaaSプロダクトを構築するための完全なツールキットを提供します。本プラットフォームは、NeuraStore（ECサイト）、NeuraBlog（コンテンツ公開）、NeuraPortfolio（開発者ポートフォリオ）など、本番環境に即利用できるNext.js 14テンプレートを提供し、それぞれがモダンなレスポンシブデザイン、ダークモード、SEO最適化を標準装備しています。\n\nすべてのテンプレートは、単一のエンドポイントでGroqおよびGeminiモデルへのアクセスを提供するAI Empireの統合APIと統合されています。また、Stripe決済統合、認証機能、管理ダッシュボードを含み、SaaS開発の典型的な期間を数ヶ月から数日に短縮します。\n\nAI Empireは、ゼロからインフラを構築せずにAI搭載プロダクトをリリースしたい開発者、インドハッカー、スタートアップ創業者、中小企業を対象としています。プラットフォームはフリーミアムモデルで運営されており、AI APIは100クレジットの無料ティアを提供し、テンプレートは個別購入（€19〜€29）またはフルバンドル（€299）で利用可能です。',
  keyFeatures: [
    '統合AI API — 単一エンドポイントでGroqおよびGeminiモデルにアクセス',
    'プロフェッショナルなNext.js 14テンプレート — NeuraStore、NeuraBlog、NeuraPortfolioなど',
    'Stripe決済統合 — セットアップ済みの決済機能',
    '認証機能搭載 — サードパーティ設定なしでユーザー管理',
    '管理ダッシュボード — ユーザー、分析、コンテンツの管理',
    '無料ティア — サインアップで100APIクレジット、クレジットカード不要',
    'レスポンシブデザイン — ダークモード対応のモバイルファーストテンプレート',
    'SEO最適化 — メタタグ、構造化データ、パフォーマンス最適化',
    'Vercel対応 — すべてのテンプレートをワンクリックでデプロイ',
    'JavaScript・Python SDK — 開発者フレンドリーな統合',
  ],
  pricingTable: [
    {
      name: '無料ティア',
      price: '€0',
      description: 'コストなしでAI APIを使い始めましょう',
      features: [
        '100 AI APIクレジット',
        'GroqおよびGeminiへのアクセス',
        'REST API + SDK',
        'コミュニティサポート',
        'クレジットカード不要',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Next.js 14向けプロフェッショナルブログテンプレート',
      features: [
        'MDXサポート',
        'ダークモード',
        'RSSフィード',
        'SEO最適化',
        'ニュースレター統合',
        '一括購入',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Next.js 14向け完全なECサイトテンプレート',
      features: [
        'Stripe決済',
        'カート管理',
        '管理ダッシュボード',
        'AI商品レコメンデーション',
        'レスポンシブデザイン',
        '一括購入',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Next.js 14向け開発者ポートフォリオテンプレート',
      features: [
        'Framer Motionアニメーション',
        'ダークモード',
        'お問い合わせフォーム',
        'レスポンシブデザイン',
        'SEO最適化',
        '一括購入',
      ],
    },
    {
      name: 'フルバンドル',
      price: '€299',
      description: '全テンプレート＋優先サポート',
      features: [
        '全6テンプレート',
        '優先サポート',
        '無料アップデート',
        '新テンプレートへの早期アクセス',
        '商用ライセンス',
        '個別購入比€400以上お得',
      ],
    },
  ],
  founderQuote: {
    text: '私たちは、すべての開発者がインフラに数ヶ月を費やすことなく、AI搭載プロダクトを構築できるべきだと信じてAI Empireを立ち上げました。私たちのテンプレートとAPIにより、重要なことに集中できます — 皆様のプロダクトとユーザーに。',
    attribution: 'AI Empireチーム',
    title: 'AI Empire創業者',
  },
  logoUsage: {
    primaryUsage: 'AI Empireのロゴは、十分なコントラストのある白または暗い背景で使用してください。',
    clearSpace: 'ロゴの「A」の高さに相当する最小クリアスペースをすべての側面に維持してください。',
    minimumSize: 'ロゴはデジタルで120px幅、印刷で30mm未満には縮小しないでください。',
    donts: [
      'ロゴを引き伸ばしたり、回転させたり、歪めたりしないでください',
      'ロゴの色を変更しないでください',
      'コンテナなしで雑然とした背景にロゴを配置しないでください',
      '影、グロー、グラデーションなどのエフェクトをロゴに追加しないでください',
      'ロゴの要素を再配置や変更しないでください',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empireは、統合AI API（GroqとGemini）、Stripe決済、認証を備えたプロフェッショナルなNext.js 14テンプレートを提供する開発者向けプラットフォームです。開発者がAI搭載のSaaSプロダクトをより速く構築できるよう設立されたAI Empireは、世界中の開発者、インドハッカー、スタートアップ創業者にサービスを提供しています。本プラットフォームは無料APIティアと€19からのテンプレートを提供しています。詳細はai-empire-steel.vercel.appをご覧ください。',
};
