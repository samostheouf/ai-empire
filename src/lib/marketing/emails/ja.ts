import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'オンボーディングシーケンス — 5日間',
  type: 'onboarding',
  duration: '5日間',
  trigger: '新規ユーザー登録',
  goal: 'ユーザーのアクティブ化：初回API呼び出し＋初回テンプレート購入',
  emails: [
    {
      day: 0,
      subject: '🚀 AI Empireへようこそ — AI APIの準備ができています！',
      preview: '100クレジットが無料で付いています。今すぐ始めましょう。',
      body: `[名前]様

AI Empireへようこそ！🎉

以下の機能がご利用いただけます：
✅ AIクレジット100個（無料）
✅ GPT-4、Groq、Gemini対応API
✅ Next.js 14プロフェッショナルテンプレート
✅ 日本語サポート対応

APIキー：[API_KEY]
ダッシュボード：https://ai-empire-steel.vercel.app/dashboard

🎯 次のステップ：2分で初回API呼び出しを完了しましょう。

1. ダッシュボードにアクセス
2. APIキーをコピー
3. 以下のコマンドを実行：
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "こんにちは、お元気ですか？"}'

これで完了です！AI APIがご利用いただけます。

AI Empire カスタマーサポート`,
      cta: '🚀 初回テストを実行する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '💡 AI Empireを最大限に活用する3つのコツ',
      preview: 'さらにお役に立つためのアドバイスです。',
      body: `[名前]様

昨日はアカウントを作成されましたね。本日は、さらにお役に立つ3つのコツをご紹介します：

🎯 コツ1：テンプレートを探索する
テンプレートはすぐに使い始められるよう設計されています。NeuraBlog（€19）またはNeuraStore（€29）から始めることをお勧めします。

💡 コツ2：AI APIを活用する
コンテンツ生成、テキスト分析、チャットボットの構築などが可能です。クレジット100個以内であれば無料でご利用いただけます。

⚡ コツ3：プロジェクトに統合する
チュートリアルでは、5分でNext.jsプロジェクトにAI Empireを統合する方法を解説しています。

📚 チュートリアル：https://ai-empire-steel.vercel.app/docs

ぜひご覧ください！
AI Empire カスタマーサポート`,
      cta: '📚 チュートリアルを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: '📦 プロジェクトに最適なテンプレート',
      preview: 'ニーズに合ったテンプレートをご覧ください。',
      body: `[名前]様

SaaSアプリを作りたい方におすすめのテンプレートをご紹介します：

🛒 ECサイト → NeuraStore（€29）
Next.js 14対応のECテンプレート。カート機能、Stripe決済、管理ダッシュボードを完備。

📝 ブログ → NeuraBlog（€19）
SEO最適化済みのプレミアムブログテンプレート。コメント機能、ニュースレター機能を搭載。

💼 ポートフォリオ → NeuraPortfolio（€29）
アニメーション、フォーム、ダークモード対応のプロフェッショナルポートフォリオ。

📦 全テンプレートバンドル → 6テンプレート（€299）
全テンプレート＋優先サポート＋無料アップデート付き。

初回購入時にWELCOME10を入力すると10%OFFになります。

AI Empire カスタマーサポート`,
      cta: '🛒 テンプレートを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: '🏆 SaaSを24時間で立ち上げる方法',
      preview: 'AI Empireを活用した実践的な方法をご紹介します。',
      body: `[名前]様

フルスタック開発者として、以下のような課題を感じていませんか？

SaaSのアイデアがあるのに、すべてを自分で開発する時間がない...

AI Empireを使えば、24時間でプロジェクトを立ち上げることができます。

NeuraStore（€29）を購入し、5分でStripeを接続し、Vercelにデプロイ。翌日には初のお客様を迎えられます。

初期投資€29からビジネスを始めることができます。

templateを見て、あなたに最適なものを見つけましょう。

AI Empire カスタマーサポート`,
      cta: '🚀 SaaSを始める',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '🎁 初回テンプレート購入20%OFF',
      preview: '特別オファーをご用意しました。',
      body: `[名前]様

AI Empireへのご登録ありがとうございます。感謝の気持ちを込めて、特別オファーをご用意しました：
初回テンプレート購入20%OFF

クーポンコード：WELCOME20

📦 対象テンプレート：
- NeuraBlog：€19 → €15.20
- NeuraStore：€29 → €23.20
- NeuraPortfolio：€29 → €23.20
- 全テンプレートバンドル：€299 → €239.20

ぜひこの機会にぜひお試しください。

AI Empire カスタマーサポート`,
      cta: '🎁 20%OFFを利用する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'ナーチュアシーケンス — 7日間',
  type: 'nurture',
  duration: '7日間',
  trigger: '登録済みだが未購入のユーザー',
  goal: '無料ユーザーを有料ユーザーに変換',
  emails: [
    {
      day: 0,
      subject: '📊 AI Empireで作成できるプロジェクト例',
      preview: '具体的なプロジェクト例をご紹介します。',
      body: `[名前]様

AI Empireのアカウントをお持ちですが、まだすべての機能をご覧になっていないかもしれません。

以下に5つのプロジェクト例をご紹介します：

1️⃣ SEO最適化ブログ → NeuraBlog
2️⃣ Stripe決済付きECサイト → NeuraStore
3️⃣ プロフェッショナルポートフォリオ → NeuraPortfolio
4️⃣ AIチャットボット → APIを統合
5️⃣ 完全なSaaS → プレミアムバンドル

各プロジェクトは24時間以内に完成させることができます。

AI Empire カスタマーサポート`,
      cta: '🚀 プロジェクトを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: '💡 インディーハッカーが最もよく犯すミス',
      preview: '時間を無駄にしないためのアドバイスです。',
      body: `[名前]様

インディーハッカーが最もよく犯すミス：すべてを自分で開発すること。

認証機能に数週間かかります → AI Empireが代わりに実装
決済機能に数週間かかります → Stripeがすでに統合済み
ダッシュボードに数週間かかります → すでに完成
デザインに数週間かかります → テンプレートはプロ品質

その間に、競合は製品をリリースしています。

AI Empireを使えば、6ヶ月分の開発時間を節約できます。

AI Empire カスタマーサポート`,
      cta: '📊 テンプレートを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: '🏆 5,000人以上の開発者がSaaSを立ち上げました',
      preview: '成長するコミュニティに参加しませんか。',
      body: `[名前]様

5,000人以上の開発者がAI Empireを信頼しています。

以下が作成されたプロジェクトの一部です：
→ 200以上のECサイト
→ 150以上のプロブログ
→ 100以上のポートフォリオ
→ 50以上のAIチャットボット

あなたはどんなプロジェクトを作りたいですか？

AI Empire カスタマーサポート`,
      cta: '🤝 コミュニティに参加する',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: '💰 AI EmpireのROI（投資対効果）',
      preview: '具体的な数字でご紹介します。',
      body: `[名前]様

AI Empireの実際のROI（投資対効果）をご覧ください：

💰 平均コスト：€50（1テンプレート＋AIクレジット）
📈 平均ROI：1,000%（1人のお客様で投資回収可能）
⏱️ 節約時間：6ヶ月分の開発時間
💵 実質節約額：€49,950

月額€50のお客様が1人いれば、投資を回収できます。

残りは純粋な利益です。

AI Empire カスタマーサポート`,
      cta: '💰 ROIを計算する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: '🎨 NeuraStore — ECテンプレートのご紹介',
      preview: '最も人気のあるテンプレートです。',
      body: `[名前]様

NeuraStoreは、最も人気のあるECテンプレートです。

含まれる機能：
✅ カート機能
✅ Stripe決済
✅ 商品管理
✅ 管理ダッシュボード
✅ レスポンシブデザイン
✅ ダークモード

価格：€29（開発者に依頼する場合€500以上のコスト節約）

AI Empire カスタマーサポート`,
      cta: '🛒 NeuraStoreを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: '⚡ 5分でAI Empireを統合する方法',
      preview: '簡単なチュートリアルです。',
      body: `[名前]様

AI Empireをプロジェクトに統合する方法をご紹介します：

1️⃣ テンプレートをインストール
npx create-next-app@latest my-saas --template ai-empire

2️⃣ API設定
.env.localにAPIキーをコピー

3️⃣ Vercelにデプロイ
git push でサイトが公開されます

これで完了です！5分でSaaSが完成します。

AI Empire カスタマーサポート`,
      cta: '📖 チュートリアルを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: '🎁 特別オファー：早期ユーザー限定30%OFF',
      preview: '見逃せないオファーです。',
      body: `[名前]様

AI Empireへのご登録から[NOMBRE]日が経ちました。

感谢の気持ちを込めて、特別オファーをご用意しました：
全テンプレート30%OFF

クーポンコード：EARLY30

📦 対象テンプレート：
- NeuraBlog：€19 → €13.30
- NeuraStore：€29 → €20.30
- NeuraPortfolio：€29 → €20.30
- 全テンプレートバンドル：€299 → €209.30

ぜひこの機会にぜひお試しください。

AI Empire カスタマーサポート`,
      cta: '🎁 30%OFFを利用する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'ウィンバックシーケンス — 再アクティベーション',
  type: 'winback',
  duration: '21日間',
  trigger: '30日以上非アクティブのユーザー',
  goal: '非アクティブユーザーの再アクティベーションとリテンション',
  emails: [
    {
      day: 0,
      subject: '💜 [名前]様、お久しぶりです！',
      preview: 'お知らせしたいことがございます。',
      body: `[名前]様

しばらくAI Empireをご利用いただいていないようです。

何かお手伝いできることがあれば、お気軽にお知らせください。

→ チュートリアルが必要ですか？
→ 技術的な問題がありますか？
→ 欲しい機能はありますか？

お気軽にご連絡ください。すべてのお問い合わせにお答えいたします。

AI Empire カスタマーサポート`,
      cta: '🚀 ダッシュボードに戻る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: '🚀 AI Empireの最新情報をお届けします',
      preview: '新しい機能のご紹介です。',
      body: `[名前]様

前回のご利用以降、以下のようなアップデートを行いました：

🆕 新テンプレート（NeuraBlog、NeuraStore）
🤖 AI APIの改善（GPT-4、Groq、Gemini）
📊 ダッシュボードの刷新
🎨 デザインの改善

すべての新機能をご覧ください。

AI Empire カスタマーサポート`,
      cta: '🆕 新機能を見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '🎁 50クレジットをプレゼントします',
      preview: 'お久しぶりのプレゼントです。',
      body: `[名前]様

お久しぶりです。お待ちしておりました。AIクレジット50個をプレゼントします。

💰 付与クレジット：50個
⏰ 有効期限：30日間

以下に活用できます：
→ コンテンツ生成
→ テキスト分析
→ チャットボット作成
→ APIのテスト

AI Empire カスタマーサポート`,
      cta: '💰 クレジットを受け取る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: '⚠️ クレジットの有効期限が残り16日です',
      preview: '有効期限をお忘れなく。',
      body: `[名前]様

無料クレジット50個の有効期限が残り16日です。

⏰ 有効期限：[DATE]

以下のことに活用できます：
→ 初回プロジェクトの作成
→ APIのテスト
→ AI Empireの探索

AI Empire カスタマーサポート`,
      cta: '⚡ クレジットを使う',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: '👋 最後の機会 — クレジットが期限切れになります',
      preview: '今が最後のチャンスです。',
      body: `[名前]様

無料クレジット50個の有効期限が残り7日です。

⏰ 有効期限：[DATE]

期限が過ぎるとクレジットは失われます。

今が最後のチャンスです。

AI Empire カスタマーサポート`,
      cta: '⚡ 最後のチャンス',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'アップセルシーケンス — プランへの移行',
  type: 'upsell',
  duration: '14日間',
  trigger: 'API呼び出し100回以上または30日以上アクティブのユーザー',
  goal: '無料ユーザーをProプランユーザーに変換',
  emails: [
    {
      day: 0,
      subject: '📊 [名前]様、利用上限に近づいています',
      preview: '利用量が増加中 — 上位プランへの移行をご案内します。',
      body: `[名前]様

お知らせです：AI Empireを活用していますね！📈

現在の利用状況：
→ API呼び出し：[NOMBRE]/100
→ 残りクレジット：[NOMBRE]
→ アクティブ日数：[NOMBRE]

無料プランの上限に近づいています。

Proプランの特典：
✅ 無制限のAPI呼び出し
✅ 優先アクセス
✅ 専任サポート
✅ プレミアムテンプレート

AI Empire カスタマーサポート`,
      cta: '🚀 プロプランに移行する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: '💎 Proプランの特典',
      preview: 'プレミアム機能のご紹介です。',
      body: `[名前]様

無料プランで見逃している特典をご紹介します：

💎 Proプラン（€99/月）：
→ 無制限のAPI呼び出し
→ 新機能への優先アクセス
→ 専任サポート（2時間以内に回答）
→ プレミアムテンプレート（€199相当）
→ 高度な分析ダッシュボード
→ カスタムWebhook API

💰 Proプランのお客様の平均ROI：500%

AI Empire カスタマーサポート`,
      cta: '💎 Proプランを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '🎁 Proプラン初月20%OFF',
      preview: '特別オファーです。',
      body: `[名前]様

ご登録ありがとうございます。特別オファーをご用意しました：
Proプラン初月20%OFF

💰 通常€99/月 → €79/月

クーポンコード：PRO20

Proプランの特典：
✅ 無制限のAPI呼び出し
✅ 専任サポート
✅ プレミアムテンプレート
✅ 高度な分析機能

AI Empire カスタマーサポート`,
      cta: '🎁 オファーを利用する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: '🏆 Proプランで収益を5倍にする方法',
      preview: 'Proプランの活用事例です。',
      body: `[名前]様

Proプランの活用事例をご紹介します：

Proプラン導入前：
→ 外部APIへの支出が高額
→ 開発時間が長期間必要
→ コスト管理が複雑

Proプラン導入後：
→ AIコストを80%削減
→ 生産性を300%向上
→ 収益を5倍に増加

Proプランは2週間で投資回収が可能です。

AI Empire カスタマーサポート`,
      cta: '🚀 プロプランに移行する',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '⏰ 最後の機会 — 20%OFFオファー',
      preview: 'このオファーをお見逃しなく。',
      body: `[名前]様

Proプラン20%OFFオファーがまもなく終了します。

💰 €79/月（通常€99/月）

⏰ 有効期限：[DATE]

Proプランの特典：
✅ 無制限のAPI呼び出し
✅ 専任サポート
✅ プレミアムテンプレート
✅ 高度な分析機能

このオファーを利用する最後のチャンスです。

AI Empire カスタマーサポート`,
      cta: '⚡ 最後のチャンス',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: '👋 [名前]様へ — ご検討の際はお気軽にご連絡ください',
      preview: 'プレッシャーはございません。いつでもお待ちしています。',
      body: `[名前]様

Proプランが今のタイミングでは合わないかもしれません。

ご安心ください。いつでもお待ちしています。

その間に、以下のことが可能です：
→ 無料プランを利用する（月100クレジット）
→ テンプレートを見る（€19から）
→ ご質問があればお気軽にご連絡

いつでもお手伝いいたします。

AI Empire カスタマーサポート`,
      cta: '💬 お問い合わせ',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
