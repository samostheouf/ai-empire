export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// 製品ローンチキャンペーン
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: '製品ローンチ — AI Empire',
  type: 'product-launch',
  duration: '14日間',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: '初月に500件の登録と€3,000の収益を生成',
  content: {
    headline: '🚀 新着：SaaSのためのAI革命が到来！',
    subheadline: 'Next.js 14テンプレート＋強力なAI APIで24時間でSaaSをローンチ',
    body: `SaaSをローンチしたいけど、開発に何週間もかかる？

AI Empireがゲームを変える：
✅ プロフェッショナルなNext.js 14テンプレート — モダンなデザイン、レスポンシブ、ダークモード
✅ 組み込みAI API — GPT-4、Groq、Geminiがすぐに使える
✅ Stripe + Auth付き — 決済と認証を5分で
✅ 完全な管理ダッシュボード — ユーザー、分析、請求書を管理

🔥 ランチオファー：全テンプレート72時間限定-30%！

AI EmpireですでにSaaSをローンチした初期ユーザーに参加しよう。
このチャンスを逃すな — オファーは[DATE]に終了。`,
    cta: '🚀 今すぐ始める — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🚀 正式発表：AI Empireがローンチ！-30%でお得に',
    emailBody: `こんにちは [First Name],

その日が来ました。AI Empireがついにローンチ！

私たちが提供するもの：
🎨 6つのプロフェッショナルNext.js 14テンプレート（€49-199）
🤖 組み込みAI API（GPT-4、Groq、Gemini）
💳 Stripe + Auth設定済み
📊 完全な管理ダッシュボード

🎁 限定オファー：全テンプレート72時間限定-30%！

お支払い時にコードLAUNCH30をご利用ください。

[CTA: テンプレートを見る →]

また会いましょう、
AI Empireチーム 🇫🇷`,
    socialPost: `🚀 AI EmpireついにLIVE！

このプラットフォームが提供するもの：
✅ プロNext.js 14テンプレート
✅ 組み込みAI API
✅ Stripe + Auth付き
✅ 管理ダッシュボード

🎁 コードLAUNCH30で72時間限定-30%

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: 'SNS上的ティーザー', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: 'ニュースレター読者へのティーザーメール', channel: 'Email' },
    { day: 'D-1', action: 'Instagram Storiesでのカウントダウン', channel: 'Instagram' },
    { day: 'D0', action: '正式ローンチ — ポスト＋メール＋広告', channel: '全チャンネル' },
    { day: 'D+1', action: '初期ユーザーの証言', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: '-30%オファーのリマインド', channel: 'Email, Twitter' },
    { day: 'D+5', action: 'チュートリアル「初めてのSaaSの作り方」', channel: 'YouTube, Blog' },
    { day: 'D+7', action: '-30%オファー終了', channel: 'Email, Social' },
    { day: 'D+10', action: '顧客ケーススタディ', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: '振り返り＋証言', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'ターゲットオーディエンス（キャンペーンにより異なる）',
    targetConversion: 'コンバージョン率 1-2%',
    targetRevenue: '広告予算に比例'
  }
}

// ============================================================
// 季節別プロモーションキャンペーン
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: '季節別プロモーション — 春/夏',
  type: 'seasonal',
  duration: '21日間',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: '夏期間中の売上を40%増加',
  content: {
    headline: '☀️ AI Empire サマーセール — 最大-40%！',
    subheadline: '夏はSaaSをローンチするための時期。ビーチで遊ぶためじゃない。',
    body: `夏が近づいており、プロジェクトを加速する最高のタイミング！

🌞 春夏の特別オファー：
- NeuraStore（eコマーステンプレート）：€39 → €29（-25%）
- NeuraBlog（ブログテンプレート）：€29 → €19（-35%）
- コンプリートバンドル（6テンプレート）：€599 → €359（-40%）

⚡ なぜ夏なのか？
→ 市場での競争が少ない
→ 秋シーズン前に作る時間が余裕
→ 夏にローンチしたスタートアップは9月に製品を持って到着

⏱️ [START_DATE]から[END_DATE]まで有効

バンドルで-40%のコードETE2024をご利用ください。`,
    cta: '☀️ セールを狙う — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Summer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ サマーセール：全AI Empireテンプレート-40%！',
    emailBody: `こんにちは [First Name],

夏が来ます。そしてこれは断れないオファーです！🌞

☀️ 特別オファー：
- NeuraStore：€39 → €29
- NeuraBlog：€29 → €19
- 6テンプレートバンドル：€599 → €359

⏰ [END_DATE]まで有効

お支払い時にコードETE2024をご利用ください。

[CTA: オファーを見る →]

良い夏を！
AI Empireチーム 🇫🇷`,
    socialPost: `☀️ AI EMPIRE サマーセール ☀️

コンプリートバンドル-40%：
✅ 6つのNext.js 14テンプレート
✅ 組み込みAI API
✅ 優先サポート

コード：ETE2024
⏰ [DATE]まで有効

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Summer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: 'ティーザー「今夏、何かが来る…」', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: 'セール正式発表', channel: '全チャンネル' },
    { day: 'D+3', action: '顧客証言＋Before/After', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: '中間リマインド＋数量限定', channel: 'Email' },
    { day: 'D+10', action: 'チュートリアル「今夏SaaSをローンチしよう」', channel: 'YouTube, Blog' },
    { day: 'D+14', action: '最終日 — 緊急性', channel: '全チャンネル' },
    { day: 'D+18', action: '最後のチャンス', channel: 'Email, Twitter' },
    { day: 'D+21', action: 'セール終了 — まとめ', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000人',
    targetConversion: '300件の売上（1%）',
    targetRevenue: '€10,700（300×€35平均）'
  }
}

// ============================================================
// リフェラルプログラム
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'リフェラルプログラム — クレジット獲得',
  type: 'referral',
  duration: '永続的',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500（クレジット報酬）',
  objective: 'バイラル成長：1件の紹介 = 2人の新規ユーザー',
  content: {
    headline: '🎁 友達を紹介して、500の無料AIクレジットを獲得！',
    subheadline: '口コミは最高の成長チャネル',
    body: `AI Empireが好き？シェアして報酬を獲得しよう！

🎯 仕組み：
1. 独自の紹介リンクを共有
2. 友達があなたのリンクで登録
3. お互いに500の無料AIクレジットを獲得！

💰 報酬ティア：
- 1件の紹介 = 500クレジット
- 3件の紹介 = 1,500クレジット + 「アンバサダー」バッジ
- 5件の紹介 = 2,500クレジット + Pro 1ヶ月アクセス
- 10件の紹介 = 5,000クレジット + Pro 3ヶ月アクセス + サイト掲載

🔗 独自リンク：[REFERRAL_LINK]

Twitter、LinkedInでシェアするか、連絡先に直接送信！`,
    cta: '🎁 紹介リンクをシェア',
    hashtags: [
      '#AIEmpire', '#Referral', '#Free', '#AI', '#SaaS',
      '#Ambassador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 無料AIクレジット500個を��りたい？友達を紹介しよう！',
    emailBody: `こんにちは [First Name],

サプライズがあります！🎁

AI Empireで友達を紹介すると、お互いに500の無料AIクレジットを獲得できます。

独自リンク：[REFERRAL_LINK]

🎯 ティア：
- 1件の紹介 → 500クレジット
- 3件の紹介 → 1,500クレジット + バッジ
- 5件の紹介 → 2,500クレジット + Pro 1ヶ月
- 10件の紹介 → 5,000クレジット + Pro 3ヶ月

今すぐリンクをシェア！

[CTA: リンクをシェア →]

アドベンチャーに参加してくれてありがとう！💜
AI Empireチーム`,
    socialPost: `🎁 友達を紹介して、500クレジットを獲得！ 🎁

AI Empireが好き？シェアしよう！

✅ 友達が登録 → 500の無料クレジット
✅ あなたが獲得 → 500の無料クレジット

🔗 紹介リンク：[REFERRAL_LINK]

5件の紹介 = 1ヶ月無料Proアクセス 🚀

#AIEmpire #Referral #AI #SaaS #Free`
  },
  schedule: [
    { day: '永続的', action: '紹介リンク付きウェルカムメール', channel: 'Email' },
    { day: 'D+7', action: 'リフェラルプログラムリマインド', channel: 'Email' },
    { day: 'D+30', action: 'メール「まだ誰も紹介していません…」', channel: 'Email' },
    { day: '永続的', action: 'ダッシュボードに紹介リンクを表示', channel: 'Dashboard' },
    { day: '毎週', action: 'Twitterのトップ紹介者ランキング', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '月間1,000シェア',
    targetConversion: '月間200件の新規登録',
    targetRevenue: 'オーガニック成長+40%'
  }
}

// ============================================================
// ブラックフライデー/サイバーマンデーキャンペーン
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'ブラックフライデー / サイバーマンデー — AI Empire',
  type: 'black-friday',
  duration: '5日間（水曜〜土曜 + サイバーマンデー）',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'キャンペーンのリーチとコンバージョンを最大化',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — 全品-50%！',
    subheadline: '年間最大のセール。見逃すな。',
    body: `行動する時が来た。史上初：

🖤 BLACK FRIDAY — 全品-50%

📦 限定オファー：
- NeuraStore：€39 → €19.50
- NeuraBlog：€29 → €14.50
- NeuraPortfolio：€59 → €29.50
- プレミアムバンドル（6テンプレート）：€599 → €299.50
- Proプラン（1年）：€1,188 → €594

⚡ 笑い話じゃない。これが年のセールだ。

⏱️ [WEDNESDAY]から[MONDAY]の限定。

🔒 数量限定：先着50名は無料ボーナステンプレートプレゼント。

コード：BLACKFRIDAY50`,
    cta: '🖤 -50%を今すぐ获得',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY：全AI Empire商品-50% — 5日間限定！',
    emailBody: `こんにちは [First Name],

正式発表。AI Empireにブラックフライデーが到来。🖤

全品-50%：
📦 NeuraStore：€39 → €19.50
📦 NeuraBlog：€29 → €14.50
📦 プレミアムバンドル：€599 → €299.50
📦 Proプラン1年：€1,188 → €594

⏰ [WEDNESDAY]から[MONDAY]の限定。

コード：BLACKFRIDAY50

先着50名は無料ボーナステンプレートプレゼント！🎁

[CTA: -50%をGET →]

見逃すな。
AI Empireチーム 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

5日間全品-50%！

📦 テンプレート€14.50〜€299.50
📦 Proプラン-50%
📦 先着50名 = 無料ボーナステンプレート

コード：BLACKFRIDAY50
⏰ [WEDNESDAY]から[MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: '水曜日 D-1', action: 'ティーザー「明日、何か暗いものが来る…」', channel: 'Twitter, Instagram' },
    { day: '木曜日 D0（BF）', action: 'ブラックフライデー正式スタート', channel: '全チャンネル + メール一斉送信' },
    { day: '木曜日 D0', action: 'Google Ads — 緊急キャンペーン', channel: 'Google Ads' },
    { day: '金曜日 D+1', action: 'リマインド＋購入者証言', channel: 'Email, Twitter' },
    { day: '土曜日 D+2', action: 'ソーシャルプルーフ「すでにX件販売！」', channel: 'Instagram, LinkedIn' },
    { day: '日曜日 D+3', action: '通常BF最終日', channel: 'メール一斉送信' },
    { day: '月曜日 CM', action: 'サイバーマンデー — 特別延長', channel: '全チャンネル' },
    { day: '月曜日 CM', action: '24時間フラッシュセール', channel: 'Email, Twitter' },
    { day: '火曜日 D+5', action: 'ブラックフライデー終了 — ありがとう', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'ターゲットオーディエンス（キャンペーンにより異なる）',
    targetConversion: 'コンバージョン率 0.5-1%',
    targetRevenue: '広告予算に比例'
  }
}

// ============================================================
// 新年キャンペーン
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: '新年 — SaaS目標2025',
  type: 'new-year',
  duration: '14日間（12月26日〜1月9日）',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: '年間の見込み客をコンバートし、1月に強力スタート',
  content: {
    headline: '🎆 2025：今年SaaSをローンチしよう！',
    subheadline: '新年、新しいSaaS。AI Empireで力強く始めよう。',
    body: `2025はあなたの年。🎆

昨年、アイデアを紙に書いた。今、行動を起こそう。

🚀 新年オファー：
- コードNEWYEAR2025で全テンプレート-25%
- 500の無料AIクレジット
- 2025年の新機能への優先アクセス

🎯 2025年の目標：
✅ 「SaaSをローンチする」 → AI Empireで24時間で達成
✅ 「オンラインで稼ぐ」 → eコマーステンプレート＋Stripe付き
✅ 「AIを学ぶ」 → 組み込みAI API＋チュートリアル
✅ 「デジタル化する」 → 完全な管理ダッシュボード

⏱️ 12月26日から1月9日の限定オファー。

2025年をあなたの成功の年にしよう。`,
    cta: '🎆 2025年をAI Empireで始める',
    hashtags: [
      '#AIEmpire', '#NewYear', '#2025', '#Resolutions', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🎆 新年、新しいSaaS：-25% + 500の無料クレジット！',
    emailBody: `こんにちは [First Name],

明けましておめでとうございます！🎆

2025年はあなたのSaaSをローンチする年。そして私たちはここにいます。

🎁 新年オファー：
- 全テンプレート-25%
- 500の無料AIクレジット
- 2025年機能への優先アクセス

コード：NEWYEAR2025

⏰ 12月26日から1月9日の限定オファー。

今年を良い年にしよう。

[CTA: オファーを見る →]

良い年を、そして幸運を！
AI Empireチーム 🇫🇷`,
    socialPost: `🎆 2025：あなたのSAASの年！ 🎆

新年、新たなスタート。

🎁 特別オファー：
✅ テンプレート-25%
✅ 500の無料AIクレジット
✅ 2025年優先アクセス

コード：NEWYEAR2025
⏰ 12/26〜01/09

👉 ai-empire-steel.vercel.app

#AIEmpire #NewYear #2025 #SaaS #Resolutions`
  },
  schedule: [
    { day: '12月26日', action: 'メール「新年おめでとう — あなたのプレゼント」', channel: 'Email' },
    { day: '12月27日', action: '投稿「2025年の目標：SaaSをローンチしよう」', channel: 'LinkedIn, Twitter' },
    { day: '12月30日', action: 'オファーリマインド＋証言', channel: 'Email, Twitter' },
    { day: '1月1日', action: 'メッセージ「新年おめでとう — 私たちがいます」', channel: 'Email, Social' },
    { day: '1月2日', action: 'チュートリアル「1月にSaaSをローンチする5つのステップ」', channel: 'Blog, YouTube' },
    { day: '1月5日', action: 'ソーシャルプルーフ＋緊急性', channel: 'Twitter, Instagram' },
    { day: '1月7日', action: '最後のチャンス', channel: 'Email' },
    { day: '1月9日', action: 'オファー終了 — まとめ＋2025年プレビュー', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000人',
    targetConversion: '400件の登録（1%）',
    targetRevenue: '€5,000（200×€25平均）'
  }
}

// ============================================================
// ユーティリティ関数
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[First Name]', recipientName),
    body: template.content.emailBody.replace(/\[First Name\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('ja-JP')}`
}
