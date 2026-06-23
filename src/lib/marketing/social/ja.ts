export interface Post {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export const twitterPosts: Post[] = [
  {
    id: 1,
    content: `Next.js 14 + Groq AI APIで構築\n\nAI Empireが提供するもの：\n• 本番対応のSaaSテンプレート\n• Groq高速推論\n• Stripe決済組み込み\n• 無料枠：100クレジット\n\n今すぐ始めましょう。`,
    hashtags: ['#NextJS14', '#AI', '#SaaS', '#GroqAI', '#WebDev'],
    cta: '無料で試す',
    emojis: ['⚡', '🚀', '💡']
  },
  {
    id: 2,
    content: `SaaSスタック、完成済み：\n\n✅ Next.js 14 App Router\n✅ Groq AI API統合\n✅ Stripeサブスクリプション\n✅ 認証 + 管理ダッシュボード\n\nテンプレートを選んで、カスタマイズして、デプロイ。`,
    hashtags: ['#NextJS', '#SaaS', '#Stripe', '#FullStack', '#DevTools'],
    cta: 'テンプレートを見る',
    emojis: ['✅', '🔧', '🎯']
  },
  {
    id: 3,
    content: `アプリにAIを統合するのに何週間もかかるべきではない。\n\nAI EmpireのGroq API：\n• /api/chat — ストリーミング応答\n• /api/completions — 構造化出力\n• /api/analyze — ドキュメント処理\n\nNext.js 14テンプレートにすべて含まれています。`,
    hashtags: ['#AI', '#NextJS', '#GroqAPI', '#API', '#WebDev'],
    cta: 'ドキュメントを見る',
    emojis: ['🤖', '⚡', '📋']
  },
  {
    id: 4,
    content: `すべてのAI EmpireテンプレートにStripe統合を含む。\n\n• サブスクリプション請求\n• Webhookハンドリング\n• 顧客ポータル\n• 従量課金対応\n\n決済にサードパーティ認証ライブラリは不要。`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#Billing'],
    cta: '無料で始める',
    emojis: ['💳', '💰', '🔒']
  },
  {
    id: 5,
    content: `Next.js 14 SaaSテンプレートマーケットプレイスを開始。\n\n内容：\n• 6つの本番テンプレート\n• Groq AI API（無料枠：100クレジット）\n• Stripe請求\n• 認証 + ロールベースアクセス\n• 管理ダッシュボード\n\nフィードバック歓迎。`,
    hashtags: ['#BuildInPublic', '#NextJS14', '#SaaS', '#Marketplace', '#DevTools'],
    cta: '探してみる',
    emojis: ['🔨', '🛠️', '🚀']
  },
  {
    id: 6,
    content: `FAQ：「無料枠はどのように機能するの？」\n\n• 開始用100APIクレジット\n• Groq推論エンジン\n• クレジットカード不要\n• 準備ができたらアップグレード\n\nインディーハッカーや小規模チーム向けに構築。`,
    hashtags: ['#FreeTier', '#IndieHacker', '#SaaS', '#AI', '#GroqAI'],
    cta: '無料で始める',
    emojis: ['❓', '🆓', '💡']
  },
  {
    id: 7,
    content: `Next.js 14テンプレート + Groq AI + Stripe = 数日で本番SaaS。\n\nAI Empireがボイラープレートを処理し、あなたは製品に集中。\n\nテンプレート：saas-starter, marketplace, dashboard, blog, portfolio, landing。`,
    hashtags: ['#NextJS14', '#Templates', '#AI', '#SaaS', '#GroqAI'],
    cta: 'テンプレートを探索',
    emojis: ['📦', '⚡', '🎯']
  },
  {
    id: 8,
    content: `B2B SaaS創設者へ：最も難しいのは0から1への移行。\n\nAI Empireが提供するもの：\n• 事前構築された認証 + 請求\n• Groq AI API（すぐ使える）\n• 管理ダッシュボード\n• Stripe統合\n\nユーザーに集中。ボイラープレートに集中しないで。`,
    hashtags: ['#B2B', '#SaaS', '#Founders', '#NextJS', '#AI'],
    cta: '詳細を見る',
    emojis: ['🏗️', '🔑', '🚀']
  },
  {
    id: 9,
    content: `Groq AI APIベンチマーク：\n\n• Llama 3.1 8B：~500 tokens/sec\n• Mixtral 8x7B：~300 tokens/sec\n• Gemma 7B：~600 tokens/sec\n\nAI Empireテンプレートで利用可能。\n\n高速推論、GPU不要。`,
    hashtags: ['#GroqAI', '#AI', '#LLM', '#Performance', '#NextJS'],
    cta: '試してみる',
    emojis: ['⚡', '📊', '🚀']
  },
  {
    id: 10,
    content: `AI Empire v1.0が公開されました。\n\n構築したもの：\n• 6つのNext.js 14 SaaSテンプレート\n• Groq AI API統合\n• Stripe請求（サブスクリプション + 従量）\n• 認証 + RBAC\n• 管理ダッシュボード\n\n無料枠あり。フィードバック歓迎。`,
    hashtags: ['#Launch', '#NextJS14', '#SaaS', '#AI', '#Stripe'],
    cta: '始める',
    emojis: ['🎉', '🚀', '💻']
  }
]

export const linkedinPosts: Post[] = [
  {
    id: 1,
    content: `AI Empire — Next.js 14 SaaSテンプレートマーケットプレイスとAI API統合を開発中です。\n\n考え方：多くのSaaSプロジェクトは、プロダクトコードを1行書く前に認証、請求、ボイラープレートに数週間を費やします。\n\nAI Empireの内容：\n• Next.js 14 App Routerテンプレート\n• Groq AI API統合\n• Stripe請求（サブスクリプション + 従量）\n• 認証 + ロールベースアクセス\n• 管理ダッシュボード\n\n無料枠には100APIクレジットが含まれます — クレジットカード不要。\n\n他の開発者からの正直なフィードバックを歓迎します。`,
    hashtags: ['#SaaS', '#NextJS', '#AI', '#BuildInPublic', '#IndieHacker'],
    cta: '詳細を見る',
    emojis: ['💡', '🛠️', '🚀']
  },
  {
    id: 2,
    content: `2024年のSaaS構築について正直に：\n\n技術スタックは十分に成熟しており、難しい部分はコードではありません — 製品の意思決定です。\n\nだからAI Empireを作りました：技術的基盤（認証、請求、AI API、ダッシュボード）を処理するNext.js 14テンプレートのコレクション。製品に集中できます。\n\n機能：\n✅ Groq推論エンジン\n✅ Stripeサブスクリプション\n✅ 本番対応テンプレート\n✅ 無料枠100クレジット\n\nアグレッシブなマーケティングなし。開発者向けの便利なツール。`,
    hashtags: ['#SaaS', '#WebDevelopment', '#AI', '#NextJS', '#Product'],
    cta: '詳細を見る',
    emojis: ['🎯', '📊', '💡']
  },
  {
    id: 3,
    content: `AI APIオプションを評価する開発者向けの比較：\n\n• OpenAI：$0.002/1Kトークン（gpt-3.5-turbo）\n• Anthropic：$0.003/1Kトークン（Claude 3 Haiku）\n• Groq：無料枠あり、高速推論\n\nAI EmpireテンプレートはデフォルトでGroqと動作。\n\n100無料クレジットでテスト。ロックインなし。\n\n現在のAI API構成は？`,
    hashtags: ['#AI', '#LLM', '#GroqAI', '#OpenAI', '#DevTools'],
    cta: '無料枠を試す',
    emojis: ['📊', '🔍', '⚡']
  },
  {
    id: 4,
    content: `AI Empire構築で学んだこと：\n\n開発者が欲しいのは別のフレームワークではなく、読んで、変更して、デプロイできる動作するコードです。\n\nすべてのAI Empireテンプレート：\n• 標準的なNext.js 14パターンを使用\n• 明確なファイル構造\n• Stripe + 認証 + AI APIを含む\n• 管理ダッシュボード付き\n\n最高のコードは理解できるコード。\n\nコミュニティからのフィードバックを探しています。`,
    hashtags: ['#WebDev', '#NextJS', '#CodeQuality', '#SaaS', '#AI'],
    cta: 'テンプレートを見る',
    emojis: ['📖', '💡', '🔍']
  },
  {
    id: 5,
    content: `インディーハッカーやソロ創設者へ：\n\nボトルネックはコーディングスキルではありません — 時間です。\n\nAI Empireが提供するもの：\n• 事前構築されたNext.js 14 SaaSテンプレート\n• Groq AI API統合（無料枠）\n• Stripe請求設定\n• 認証 + 管理ダッシュボード\n\nテンプレートを選んで、プロダクトレイヤーをカスタマイズして、デプロイ。\n\nインフラに集中せず、ユーザーに集中。`,
    hashtags: ['#IndieHacker', '#SoloFounder', '#SaaS', '#NextJS', '#AI'],
    cta: '構築を始める',
    emojis: ['⏱️', '🎯', '🚀']
  }
]

export const facebookPosts: Post[] = [
  {
    id: 1,
    content: `AI Empireが公開 — AI API統合済みのNext.js 14 SaaSテンプレートマーケットプレイス。\n\n内容：\n• 6つの本番対応テンプレート\n• Groq AI API統合\n• Stripe請求（サブスクリプション + 従量）\n• 認証 + 管理ダッシュボード\n• 無料枠：100APIクレジット\n\nAIツール、マーケットプレイス、ダッシュボード — あなたのプロジェクトに合ったテンプレートがあります。`,
    hashtags: ['#NextJS', '#AI', '#SaaS', '#WebDev', '#Stripe'],
    cta: 'テンプレートを探索',
    emojis: ['🚀', '💡', '✅']
  },
  {
    id: 2,
    content: `5分でNext.jsアプリにAIを追加する方法：\n\n1. AI Empireテンプレートをクローン\n2. Groq APIキーを追加\n3. 組み込みの/api/chatエンドポイントを使用\n4. UIをカスタマイズ\n5. Vercelにデプロイ\n\n無料枠で100クレジットがもらえます。`,
    hashtags: ['#NextJS', '#Tutorial', '#AI', '#GroqAI', '#WebDev'],
    cta: 'ガイドに従う',
    emojis: ['📝', '⚡', '🎯']
  },
  {
    id: 3,
    content: `有用なものを作りました：AI Empire。\n\nNext.js 14 SaaSテンプレートのコレクション：\n• Groq AI API（高速推論）\n• Stripeサブスクリプション\n• 認証 + ロール\n• 管理ダッシュボード\n\nターゲット：インディーハッカー、小規模チーム、SaaS製品を構築するすべての人。\n\nフィードバック歓迎 — どうすればもっと有用になりますか？`,
    hashtags: ['#BuildInPublic', '#SaaS', '#NextJS', '#AI', '#IndieHacker'],
    cta: 'フィードバックを送る',
    emojis: ['🔨', '💬', '🛠️']
  },
  {
    id: 4,
    content: `Stripe統合、正しく実装。\n\nすべてのAI Empireテンプレートに含まれるもの：\n✅ サブスクリプション請求（月額/年額）\n✅ 従量課金\n✅ 顧客ポータル\n✅ Webhookハンドリング\n✅ テストモード有効\n\nゼロから決済を設定する必要はありません。`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#WebDev'],
    cta: '実際の動作を見る',
    emojis: ['💳', '✅', '🔒']
  },
  {
    id: 5,
    content: `AI Empire無料枠：\n• 100 APIクレジット\n• Groq推論エンジン\n• クレジットカード不要\n• すべてのテンプレート含む\n• コミュニティサポート\n\nProにアップグレードして、より多くのクレジットと優先サポート。\n\nai-empire-steel.vercel.appで試す`,
    hashtags: ['#FreeTier', '#AI', '#SaaS', '#NextJS', '#GroqAI'],
    cta: '無料で始める',
    emojis: ['🆓', '🚀', '💡']
  }
]

export const redditPosts: Post[] = [
  {
    id: 1,
    content: `Groq AI API統合済みNext.js 14 SaaSテンプレートマーケットプレイスを構築\n\nこんにちは r/webdev — AI Empireで開発しています。SaaS製品を構築するための本番対応Next.js 14テンプレートのコレクションです。\n\n内容：\n• 6テンプレート（saas-starter, marketplace, dashboard, blog, portfolio, landing）\n• Groq AI API統合（無料枠：100クレジット）\n• Stripe請求（サブスクリプション + 従量）\n• 認証 + ロールベースアクセス\n• 管理ダッシュボード\n\nすべてのテンプレートはApp Router、TypeScript、Tailwind CSSを使用。\n\n正直なフィードバックを探しています — どうすればもっと有用になりますか？`,
    hashtags: ['#webdev', '#nextjs', '#saas'],
    cta: '探してみる',
    emojis: ['🚀', '💡']
  },
  {
    id: 2,
    content: `Groq AI APIは驚くほど高速 — Next.js 14 SaaSテンプレートに追加\n\nGroqの推論をテスト中で、本当に印象的です：\n• Llama 3.1 8B：~500 tokens/sec\n• Mixtral 8x7B：~300 tokens/sec\n\nAI EmpireはNext.jsアプリにGroqを簡単に追加するために構築。テンプレートには以下が含まれます：\n• /api/chat（ストリーミング）\n• /api/completions（構造化出力）\n• /api/analyze（ドキュメント処理）\n\n無料枠：100クレジット。クレジットカード不要。\n\n他にGroqを使っていますか？経験を教えてください。`,
    hashtags: ['#nextjs', '#ai', '#groqai'],
    cta: '試してみる',
    emojis: ['⚡', '🤖']
  },
  {
    id: 3,
    content: `r/nextjs — Stripe請求事前設定済みNext.js 14 SaaSテンプレート\n\nNext.jsでのStripe統合の問題についての投稿をよく見ます。AI Empireはそれを解決するために構築しました。\n\nすべてのテンプレートに含まれるもの：\n• サブスクリプション請求（月額/年額）\n• 従量課金対応\n• 顧客ポータル\n• Webhookハンドリング\n• テストモード有効\n\n加えてGroq AI API統合と認証。\n\nすべてTypeScript、App Router、Tailwind。フィードバックを歓迎します。`,
    hashtags: ['#nextjs', '#stripe', '#saas'],
    cta: '見てみる',
    emojis: ['💳', '🔧']
  },
  {
    id: 4,
    content: `r/SaaS — テンプレートマーケットプレイスについて正直なフィードバックを探しています\n\nAI Empireを構築しました：AI APIを含むNext.js 14 SaaSテンプレートのコレクション。\n\nうまくいっていること：\n• 6つの一貫した品質のテンプレート\n• Groq AI統合（無料枠）\n• Stripe請求込み\n• 認証 + 管理ダッシュボード\n\n不確かなこと：\n• 料金モデル（現在無料枠 + Pro）\n• テンプレート選択（現在6つ）\n• ドキュメントの完全性\n\n正直なフィードバック歓迎。SaaSテンプレートマーケットプレイスにいくら支払いますか？`,
    hashtags: ['#saas', '#feedback', '#nextjs'],
    cta: '意見を共有',
    emojis: ['💬', '🔍']
  },
  {
    id: 5,
    content: `Groq AI + Stripe付きNext.js 14 SaaSテンプレートを構築 — フィードバック用に共有\n\nAI EmpireはSaaS製品向けテンプレートマーケットプレイスです。各テンプレートには以下が含まれます：\n\n• Next.js 14 App Router\n• TypeScript + Tailwind\n• Groq AI API（無料枠：100クレジット）\n• Stripe請求\n• 認証 + ロール\n• 管理ダッシュボード\n\nターゲット：素早くリリースしたいインディーハッカーや小規模チーム。\n\nSaaSテンプレートにどんな機能が欲しいですか？`,
    hashtags: ['#nextjs', '#saas', '#indiehackers'],
    cta: '探してみる',
    emojis: ['📦', '🚀']
  }
]
