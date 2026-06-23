export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

export const emailTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-email-01',
    name: 'Tech YouTuber FR',
    type: 'email',
    target: 'YouTube (10K-100K subscribers)',
    subject: '🤝 動画スポンサー — AI-Empire（フランス製AI API）',
    body: `{{first_name}}さんへ

YouTubeでのコンテンツを拝見して、ファンになりました。あなたのAIチュートリアルに触発されて、AI-Empireを立ち上げました。

あなたのチャンネルでの動画スポンサーを提案させてください。

**コンセプト:** 「無料のAI APIを試してみた — 私が作ったものはこれ」

**フォーマット:**
- 8〜12分の動画
- AI-Empireのライブデモ
- リアルタイムでミニプロジェクトを作成
- アフィリエイトリンクの言及

**報酬:**
- 視聴者数に応じて€200〜500
- あなたのリンク経由の売上の20%コミッション
- 無料テンプレート（€49相当）

**ターゲット層:** フランスの開発者、18〜35歳、AIに興味がある方

ご興味はありますか？あなたのスタイルに合わせてフォーマットを調整できます。

このメールに返信するか、Twitter @[handle] でDMしてください。

よろしくお願いします，
[お名前]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'メールに返信する',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 コンテンツ提携 — AI-Empire × あなたのパーソナルブランド',
    body: `{{first_name}}さんへ

LinkedInでのパーソナルブランド強化のためのコンテンツ提携を提案します。

**提案内容:**
1. **LinkedIn記事:** 「如何にして€0でSaaSにAIを統合したか」
2. **NeuraBlogテンプレート:** あなたのコミュニティに無料提供（€49相当）
3. **収益分配:** あなたのリンク経由の売上の25%
4. ** Visibility:** ニュースレター（5,000人以上の登録者）で紹介

**魅力:**
- 記事1本で、受動収入 + 世間的な認知度を獲得
- コミュニティに価値を提供
- AI専門家としてポジショニング

記事1本で、受動収入 + 世間的な認知度を獲得。

ご興味はありますか？10分間の通話を行いませんか？

よろしくお願いします，
[お名前]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '10分の通話を予約する',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Twitterコラボ — AI-Empire × あなたのテックアカウント',
    body: `{{first_name}}さんへ

Twitterで高品質なテックコンテンツを共有されているのを拝見しました。コラボレーションさせていただけたらと思います。

**提案内容:**
1. **ギブアウェイ:** コミュニティに5つのプレミアムテンプレート
2. **共著スレッド:** 「2025年の開発者向けAIの現状」
3. **コミッション:** あなたのリンク経由の売上の30%
4. **フィードバック:** あなたが製品ロードマップに影響

**フォーマット:** 1スレッド + 3ツイート、2週間で
**予算:** €100〜300 + 無料テンプレート

ご興味はありますか？

よろしくお願いします，
[お名前]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'メールに返信する',
  },
  {
    id: 'inf-email-04',
    name: 'Webエージェンシー',
    type: 'email',
    target: 'Webエージェンシー（5〜20名）',
    subject: '🏢 エージェンシー提携 — お客様はAIを必要としています、私たちは提供できます',
    body: `{{first_name}}様

{{agency_name}}が、AI機能を求めるeコマース/SaaSのお客様と取引されていることを拝見しました。

**課題:** AIの統合は高コストで時間がかかります。

**解決策:** AI-EmpireがターンキーソリューションのAI APIへのアクセスを提供します。
- 5分で統合可能
- 従量課金制（最低限のサブスクリプションなし）
- 日本語のテクニカルサポート

**エージェンシー向け:**
- マルチクライアントダッシュボード
- すべてのクライアントへの15%コミッション
- プレミアムテンプレート付き（€49〜199相当）
- チーム向け無料トレーニング

お話ししませんか？今週15分間いかがですか？

よろしくお願いします，
[お名前]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '通話を予約する',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B（補完ツール）',
    subject: '🔗 AI-Empire × {{company}}提携 — あなたのAIオファーを補完',
    body: `{{first_name}}様

AI-Empireの創業者、[お名前]です。AI-Empireはスタートアップ向けのフランス製AI APIプラットフォームです。

{{company}}とAI-Empireが同じターゲット層を共有しているため、ご連絡しました。フランスのスタートアップで、大きな予算なしにAIを統合したい企業です。

**提携の提案:**

1. **ネイティブ統合:** AI-Empireをあなたのプラットフォームに統合（ウィジェット/API）
2. **コミッション:** おすすめしたクライアントからの20%の定期収入
3. **共同マーケティング:** ブログ記事の共同作成 + ウェビナー
4. **独占:** 限定オファー（-25%）

**うまくいく理由:**
- お客様はAIを必要としており、私たちはAPIを提供
- あなたは定期的な収入源を獲得
- 私たちは配信を拡大

お話ししませんか？今週15分間いかがですか？

よろしくお願いします，
[お名前]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '通話を予約する',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `{{first_name}}さん、こんにちは！👋

AIに関するあなたのコンテンツが大好きです。AI-Empireは、スタートアップ向けのフランス製AI APIです。

早速の提案：
- コミュニティへの無料テンプレート
- 売上の30%コミッション
- 共著スレッド

ご興味はありますか？DMで話ししませんか？`,
    cta: 'DMに返信する',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `{{first_name}}さん、こんにちは

高品質なテックコンテンツを共有されているのを拝見しました。コラボレーションさせていただけたらと思います。

AI-Empireはスタートアップ向けのフランス製AIプラットフォームです。コンテンツの共同制作パートナーを探しています。

提案内容：
- LinkedInの共著記事
- コミュニティへの無料テンプレート
- 25%の収益分配

今週10分間の通話はいかがですか？`,
    cta: '通話を予約する',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `{{first_name}}さん、こんにちは！👋

フランスの開発者サーバーで活発に活動されているのを拝見しました。提携を提案させてください。

AI-Empire = フランスのスタートアップ向け無料AI API

あなたへのオファー：
- プレミアムテンプレートの無料提供
- 売上の30%コミッション
- 新機能のベータアクセス

ご興味はありますか？`,
    cta: 'DMに返信する',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `{{first_name}}さん、こんにちは！🔥

Instagramでのテックコンテンツが大好きです。ご提案がございます。

AI-Empireはフランス製AI APIです。クリエイターを探しています：
- デモリール（無料テンプレート付き）
- 売上の25%コミッション
- テンプレートの共同ブランディング

いかがですか？DMで話ししませんか！`,
    cta: 'DMに返信する',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `{{first_name}}さん、こんにちは！👋

YouTubeチャンネルが大好きです。AIチュートリアルは素晴らしいですね。

コラボ提案：
- 動画スポンサー（€200〜500）
- 売上の20%コミッション
- コミュニティへの無料テンプレート

ご興味はありますか？今週電話しませんか？`,
    cta: '通話を予約する',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    'すべての定期売上への30%コミッション',
    '90日間のクッキー',
    'リアルタイム追跡ダッシュボード',
    'Stripe経由の月次支払い',
    '無料プレミアムテンプレート（€199相当）',
    '専任のアフィリエイトサポート',
    '新機能のベータアクセス',
    'マーケティング資料の提供',
  ],
  requirements: [
    '1,000人以上のフォロワー（YouTube、Twitter、LinkedIn、Instagram、ブログ）',
    'テック / スタートアップ / AIコンテンツ',
    'エンゲージメント率 > 2%',
    '不適切な政治的コンテンツなし',
    'ブランドガイドラインの遵守',
  ],
};

export const getAllTemplates = (): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates];
};

export const getTemplatesByType = (type: 'email' | 'dm'): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) => t.type === type);
};

export const getTemplatesByTarget = (target: string): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) =>
    t.target.toLowerCase().includes(target.toLowerCase()),
  );
};

export const generateOutreachSequence = (influencerType: string): InfluencerTemplate[] => {
  const templates: InfluencerTemplate[] = [];

  switch (influencerType) {
    case 'youtube':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-01')!,
        dmTemplates.find((t) => t.id === 'inf-dm-05')!,
      );
      break;
    case 'linkedin':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-02')!,
        dmTemplates.find((t) => t.id === 'inf-dm-02')!,
      );
      break;
    case 'twitter':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-03')!,
        dmTemplates.find((t) => t.id === 'inf-dm-01')!,
      );
      break;
    case 'agence':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-04')!);
      break;
    case 'saas':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-05')!);
      break;
    default:
      templates.push(...emailTemplates.slice(0, 2), ...dmTemplates.slice(0, 2));
  }

  return templates.filter(Boolean);
};
