import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'Next.js 14とAIでSaaS製品をより速くリリース',
    subheadline: 'Groq AI API、Stripe決済、認証を備えた本番環境対応テンプレート — ボイラープレートではなく、プロダクトに集中できるように設計されています。',
    ctaText: '無料で始める'
  },
  features: [
    {
      title: 'Next.js 14 App Routerテンプレート',
      description: '最新のNext.jsパターンで構築。TypeScript、Tailwind CSS、サーバーコンポーネントをすぐに使える状態で提供。'
    },
    {
      title: 'Groq AI API統合',
      description: 'Groqによる高速推論。ストリーミングチャット、構造化された出力、ドキュメント分析エンドポイントを含む。'
    },
    {
      title: 'Stripe決済対応済み',
      description: 'サブスクリプション管理、使用量ベースの価格設定、カスタマーポータル、Webhook処理 — すべて事前設定済み。'
    },
    {
      title: '認証とロール管理',
      description: 'ロールベースのアクセス制御を備えた内蔵認証。基本的なフローにサードパーティ認証ライブラリは不要。'
    },
    {
      title: '管理ダッシュボード',
      description: 'ユーザー管理、分析閲覧、設定の構成を事前構築された管理インターフェースで実行。'
    },
    {
      title: '無料ティアあり',
      description: '100APIクレジットから始められます。クレジットカード不要。必要に応じてアップグレード。'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'テンプレートを選択',
      description: '6つの本番環境対応テンプレートから選択：SaaSスターター、マーケットプレイス、ダッシュボード、ブログ、ポートフォリオ、ランディングページ。'
    },
    {
      step: 2,
      title: 'プロダクトをカスタマイズ',
      description: 'ビジネスロジックを追加し、Groq APIキーを設定し、Stripeをセットアップ。ボイラープレートは既に処理済み。'
    },
    {
      step: 3,
      title: 'デプロイしてリリース',
      description: 'Vercelまたはお好みのプラットフォームにプッシュ。SaaSはユーザーの利用準備が整います。'
    }
  ],
  faq: [
    {
      question: '無料ティアとは何ですか？',
      answer: '無料ティアにはGroq AIによる100APIクレジットが含まれます。クレジットカード不要。支払いなしですべてのテンプレートと基本機能を使用できます。'
    },
    {
      question: '独自のAPIキーは必要ですか？',
      answer: 'はい、Groq APIキー（groq.comで無料ティア利用可能）と決済用のStripeアカウントが必要です。AI Empireが統合を処理します — キーを差し込むだけです。'
    },
    {
      question: 'これらのテンプレートを商用プロジェクトに使用できますか？',
      answer: 'はい。AI Empireテンプレートを個人および商用プロジェクトに使用できます。その上に構築したコードはあなたの所有物です。'
    },
    {
      question: 'どの技術が使用されていますか？',
      answer: 'Next.js 14（App Router）、TypeScript、Tailwind CSS、推論用Groq AI API、決済用Stripe、ロールベースのアクセス制御を備えた事前構築認証システム。'
    },
    {
      question: 'ドキュメントはありますか？',
      answer: 'はい。各テンプレートにはセットアップ手順、APIリファレンス、コードコメントが含まれています。一般的なカスタマイズパターンのガイドも提供しています。'
    },
    {
      question: '他のSaaSテンプレートと何が違いますか？',
      answer: 'AI Empireはマーケティングの主張ではなく、動作するコードに焦点を当てています。各テンプレートは本番環境対応で、AI API統合を備え、正直なドキュメントが付属。偽の証言や誇張された統計はありません。'
    }
  ]
}
