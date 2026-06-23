import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'ja',
  campaigns: [
    // === Campaign 1: Launch Announcement ===
    {
      id: 'email-launch',
      name: 'ローンチ告知',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empireがスタート — AI搭載SaaSツールキット', previewText: 'テンプレート、AI API、Stripe、認証 — すべて一つのプラットフォームで。' },
        { id: 'launch-b', subject: 'ついにローンチ：Next.js 14テンプレート + AI API', previewText: 'SaaSを24時間でリリースするために必要なすべてが揃いました。' },
        { id: 'launch-c', subject: 'SaaSのリリースを加速 — AI Empireが登場', previewText: 'AI統合済みのプロフェッショナルテンプレート、デプロイ準備完了。' },
      ],
      previewText: 'テンプレート、AI API、Stripe、認証 — すべて一つのプラットフォームで。',
      cta: 'AI Empireを詳しく見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empireがスタートしました</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">AI搭載SaaSプロダクトを構築するための完全なツールキット</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">{{first_name}}さん、こんにちは。</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      <strong>AI Empire</strong>のローンチをお知らせできることを嬉しく思います — 開発者の皆様がAI搭載のSaaSプロダクトをより速くリリースできるように設計されたプラットフォームです。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">含まれるもの：</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ プロフェッショナルなNext.js 14テンプレート（€19〜）</p>
      <p style="margin:4px 0;color:#333;">✅ 統合AI API — Groq + Geminiを単一エンドポイントで</p>
      <p style="margin:4px 0;color:#333;">✅ Stripe決済統合済み</p>
      <p style="margin:4px 0;color:#333;">✅ 認証機能搭載</p>
      <p style="margin:4px 0;color:#333;">✅ 管理ダッシュボード付き</p>
      <p style="margin:4px 0;color:#333;">✅ 無料ティア — サインアップで100クレジット</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      ECサイト、ブログ、ポートフォリオなど、AI Empireが必要な基盤を提供いたします。
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        AI Empireを詳しく見る
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">利用可能なテンプレート</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Stripe、カート、管理ダッシュボード付きの完全なECテンプレート</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">MDX、ダークモード、RSSフィード対応のSEO最適化ブログ</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">アニメーション、ダークモード、お問い合わせフォーム付きのプロフェッショナルポートフォリオ</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">フルバンドル — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">全6テンプレート + 優先サポート + 無料アップデート</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      ご質問はありますか？このメールにご返信ください。すべての返信を確認いたします。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empireチーム
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI搭載SaaSプロダクトをより速く構築<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">ウェブサイト</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">ドキュメント</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">配信停止</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 2: Product Update ===
    {
      id: 'email-update',
      name: 'プロダクト更新',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: '新機能 — 今月のAI Empireアップデート', previewText: '新機能、改善点、今後の予定をお届けします。' },
        { id: 'update-b', subject: 'AI Empireチェンジログ — 新テンプレートとAPI機能', previewText: '多岐にわたる開発を行いました。リリース内容をご覧ください。' },
        { id: 'update-c', subject: '今月のAI Empireアップデート', previewText: '新統合、パフォーマンス改善、今後の機能について。' },
      ],
      previewText: '新機能、改善点、今後の予定をお届けします。',
      cta: 'チェンジログを見る',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empireの新機能</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">月次プロダクトアップデート — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">{{first_name}}さん、こんにちは。</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      今月リリースした内容をご覧ください：
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">新機能：AIコード生成エンドポイント</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          コード生成タスクに最適化された新しいAPIエンドポイント。Groq Llama 3とGemini Proをサポート。無料ティアを含む全プランで利用可能です。
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">改善：NeuraStoreのチェックアウトフロー</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Apple PayとGoogle Payのサポートを含むチェックアウト体験を再設計。テストでコンバージョン率が15%向上しました。
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">更新：APIドキュメント</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          インタラクティブな例、コピペ可能なコードスニペット、新しいクイックスタートガイドを含む、完全に書き直されたドキュメント。
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">来月の予定</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          NeuraBlog向けAI SEOオプティマイザー。自動メタディスクリプション、Open Graph画像、構造化データの生成。
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        チェンジログをすべて見る
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empireと一緒に構築していただきありがとうございます。
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empireチーム
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI搭載SaaSプロダクトをより速く構築<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">ウェブサイト</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">ドキュメント</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">配信停止</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 3: Monthly Newsletter ===
    {
      id: 'email-newsletter',
      name: '月次ニュースレター',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire月刊 — ティップス、チュートリアル、アップデート', previewText: 'AIとSaaSに関する月例インサイトをお届けします。' },
        { id: 'newsletter-b', subject: '今月のAIとSaaS — AI Empireニュースレター', previewText: 'コミュニティのハイライト、新機能、業界のインサイト。' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — 今月学んだこと', previewText: 'AI搭載プロダクトを構築するための実践的なアドバイス。' },
      ],
      previewText: 'AIとSaaSに関する月例インサイトをお届けします。',
      cta: '続きを読む',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire月刊</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">第{{issue_number}}号 — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">{{first_name}}さん、こんにちは。</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      今月のニュースレターへようこそ。AI Empireコミュニティと、AI/SaaS業界全体で起こっていることをお届けします。
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">チュートリアル</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Next.jsアプリにAIチャットを追加する方法</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">AI EmpireのチャットエンドポイントをNext.jsアプリケーションに統合するステップバイステップガイド。コードサンプルとデプロイのヒントを含みます。</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">SaaS向けStripe統合のベストプラクティス</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">NeuraStoreの支払いフロー構築から学んだ教訓。サブスクリプション管理、Webhook、カスタマーポータルのセットアップ。</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Next.js 14をVercelにデプロイする完全ガイド</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">ゼロから本番環境まで。環境変数、ドメイン、プレビューデプロイ、パフォーマンス最適化。</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">コミュニティハイライト</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>注目のビルド：</strong>あるユーザーがNeuraStoreをベーステンプレートとして使い、AI EmpireのAPIでテキスト抽出機能を実装したドキュメント処理SaaSをリリースしました。ゼロから有料ユーザー獲得までわずか3週間。
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>今月のティップス：</strong>リアルタイム応答にはGroq（低レイテンシ）、複雑な推論タスクにはGeminiを使用してください。AI Empireでは1つのパラメータを変更するだけでモデルを切り替えることができます。
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">業界インサイト</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      AI API市場は急速に進化し続けています。統合エンドポイントへの明確なトレンドが見られます — 開発者は5つの統合ではなく、1つの統合を求めています。AI Empireはこの現実のために構築され、定期的に新しいモデルを追加しています。
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        ブログをすべて読む
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      来月お会いしましょう。<br>AI Empireチーム
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI搭載SaaSプロダクトをより速く構築<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">ウェブサイト</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">ブログ</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">配信停止</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 4: Re-engagement ===
    {
      id: 'email-reengagement',
      name: 'リエンゲージメント',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'お待ちしています — AI Empireアカウントがご用意されています', previewText: '戻ってきて50ボーナスクレジットを受け取りましょう。' },
        { id: 'reeng-b', subject: 'まだお考えですか？無料クレジットが期限切れになります', previewText: '100の無料クレジットがお待ちです。戻ってきて構築しましょう。' },
        { id: 'reeng-c', subject: '前回のご利用以降、AI Empireは大きく進化しました', previewText: '新機能、新テンプレート、そしてあなたへのボーナスクレジット。' },
      ],
      previewText: '戻ってきて50ボーナスクレジットを受け取りましょう。',
      cta: 'アカウントを再有効化',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">お待ちしています</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">AI Empireアカウントはまだここにあります — お客様に用意したものがあります</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">{{first_name}}さん、こんにちは。</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empireへの前回のアクセスからある程度の時間が経ちました。アカウントはまだ有効であり、再開を支援するために<strong>50ボーナスクレジット</strong>を追加したことをお知らせします。
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50クレジット</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">無料。条件なし。</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">前回のご利用以降、以下を追加しました：</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>新しいAIコード生成エンドポイント</li>
      <li>NeuraStoreのチェックアウトフロー改善</li>
      <li>APIドキュメントの完全書き直し</li>
      <li>JavaScript・Python SDKの改善</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        アカウントを再有効化
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      メールの受信を希望されない場合は、<a href="{{unsubscribe_url}}" style="color:#999;">配信を停止</a>できます。
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI搭載SaaSプロダクトをより速く構築<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">ウェブサイト</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">ドキュメント</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">配信停止</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 5: Upgrade Offer ===
    {
      id: 'email-upgrade',
      name: 'アップグレードオファー',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'さらに利用する — AI Empireプランを今すぐアップグレード', previewText: '更多のクレジット、テンプレート、優先サポート。' },
        { id: 'upgrade-b', subject: 'AI Empireの利用が増加中 — アップグレードの時です', previewText: 'APIクレジットとプレミアムテンプレートをもっと手に入れましょう。' },
        { id: 'upgrade-c', subject: '特別オファー：AI Empireテンプレート20%割引', previewText: 'アクティブユーザー向け期間限定オファー。今すぐアップグレード。' },
      ],
      previewText: '更多のクレジット、テンプレート、優先サポート。',
      cta: '今すぐアップグレード — 20%OFF',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="ja">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">SaaSを一段階引き上げよう</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">アクティブユーザー向けテンプレート20%割引</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">{{first_name}}さん、こんにちは。</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      AI Empireを活用していらっしゃいます — そのお礼に、全テンプレートおよびフルバンドルに対する<strong>限定20%割引</strong>をご用意しました。
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">チェックアウト時にコードをご使用ください：</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">テンプレートで得るもの</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → コードで€23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Stripe、カート、管理ダッシュボード、AIレコメンデーション付きECテンプレート</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → コードで€15.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">MDX、ダークモード、RSS、SEO最適化対応ブログテンプレート</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → コードで€23.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">アニメーション、ダークモード、お問い合わせフォーム付きポートフォリオテンプレート</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">フルバンドル — €299 → コードで€239.20</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">全6テンプレート + 優先サポート + 無料アップデート。最高のバリュー。</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        今すぐアップグレード — 20%OFF
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      このオファーは72時間で終了します。コードは1回限り有効です。
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — AI搭載SaaSプロダクトをより速く構築<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">ウェブサイト</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">ドキュメント</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">配信停止</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
