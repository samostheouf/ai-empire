// ============================================
// AI-EMPIRE — メールブラストテンプレート
// コンバージョン最適化メールキャンペーン
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === キャンペーン1: 製品ローンチ ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'ローンチ告知',
  subject: '🚀 AI-Empireついに登場 — スタートアップ向けフランスAIプラットフォーム',
  preheader: '無料のAI APIを5分で取得、フランス語サポート付き。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empireついに登場！</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">スタートアップ向けフランスAIプラットフォーム</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          こんにちは {{first_name}}さん、
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          お知らせがあります：<strong>AI-Empireが正式にローンチしました！</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          以下の機能にアクセスできます：
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ 統合AI API（Groq + Gemini）</p>
          <p style="margin: 5px 0; color: #333;">✅ 3つのエンドポイント：生成、SEO、コード</p>
          <p style="margin: 5px 0; color: #333;">✅ 開始用の無料クレジット</p>
          <p style="margin: 5px 0; color: #333;">✅ 直感的なフランス語ダッシュボード</p>
          <p style="margin: 5px 0; color: #333;">✅ フランス語サポート</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>あなたのAPIキー：</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            最初のテストを開始 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          次のステップ：2分で最初のAPI呼び出しを行いましょう。
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — スタートアップ向けフランスAIプラットフォーム 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">ウェブサイト</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">ドキュメント</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">配信停止</a>
        </p>
      </div>

    </div>
  `,
  cta: '最初のテストを開始 →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === キャンペーン2: 限定オファー -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: '限定オファー -50%',
  subject: '⚡ NeuraPortfolio -50% — オファーは48時間で終了',
  preheader: 'プレミアムNext.jsテンプレートが半額。50+コンポーネント、ダークモード、レスポンシブ。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">オファーは48時間で終了！</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          こんにちは {{first_name}}さん、
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>限定オファー</strong>をご用意しました：<strong>NeuraPortfolioが-50%</strong>、AIポートフォリオを作成するためのプレミアムNext.jsテンプレート。
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ 50販売限り — 48時間で終了</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          含まれるもの：
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50以上のReactコンポーネント</li>
          <li>✅ ダークモード + レスポンシブ</li>
          <li>✅ スムーズなアニメーション</li>
          <li>✅ ネイティブAI連携</li>
          <li>✅ フランス語サポート</li>
          <li>✅ 無料の永続アップデート</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            オファーを獲得 →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          48時間後、価格は€49に戻ります。この機会を逃さないで！
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — スタートアップ向けフランスAIプラットフォーム 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">ウェブサイト</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">配信停止</a>
        </p>
      </div>

    </div>
  `,
  cta: 'オファーを獲得 →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === キャンペーン3: 成功事例 ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: '顧客の声',
  subject: '💬 これらのフランス系スタートアップがAIで成功した方法',
  preheader: 'AIが誰にでも手の届くものであることを証明する3つの顧客事例。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 顧客の声</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">彼らの成功があなたのものになる</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          こんにちは {{first_name}}さん、
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          フランス系スタートアップがAI-Empireで達成していることをご紹介します。
        </p>

        <!-- 証言 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "AI-Empireに切り替えて、AIコストを60%削減しました。統合には5分しかかかりませんでしたし、フランス語サポートは本当に素晴らしいです。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— パリのスタートアップCTO Marc</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">結果：コスト-60%、速度+40%</p>
        </div>

        <!-- 証言 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "SaaSに2時間でAIを統合しました。顧客は新機能を大喜びしています。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— リヨンのSaaS創業者 Sophie</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">結果：コンバージョン+25%</p>
        </div>

        <!-- 証言 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "フランス語のダッシュボードは直感的です。チームは1日でAIを導入しました。"
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— ボルドーのスケールアップPM Lucas</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">結果：生産性+40%</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            成功事例に参加する →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — スタートアップ向けフランスAIプラットフォーム 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">ウェブサイト</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">配信停止</a>
        </p>
      </div>

    </div>
  `,
  cta: '成功事例に参加する →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === キャンペーン4: 月間ニュースレター ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: '月間ニュースレター',
  subject: '📰 AI-Empireニュースレター — 2025年1月',
  preheader: 'フランスAIプラットフォームからの最新ニュース、ヒント、オファー。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 AI-Empireニュースレター</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">2025年1月</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          こんにちは {{first_name}}さん、
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          AI-Empireの最新情報をお届けします：
        </p>

        <!-- 新機能 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 新機能：SEOエンドポイント</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          1クリックでSEO最適化されたコンテンツを生成。ブログやSaaSに統合できます。
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          SEOエンドポイントを詳しく見る →
        </a>

        <!-- 新機能 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 ヒント：API呼び出しを最適化</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          インテリジェントキャッシュを使って呼び出しを最大30%節約。方法はこちら：
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          チュートリアルを見る →
        </a>

        <!-- オファー -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 購読者限定オファー：NeuraBlog -30%</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">コード NEWSLETTER30 を使用</p>
        </div>

        <!-- 統計 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 今月の数字</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">ユーザー</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">API呼び出し</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">満足度</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            ダッシュボードにアクセス →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — スタートアップ向けフランスAIプラットフォーム 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">ウェブサイト</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">配信停止</a>
        </p>
      </div>

    </div>
  `,
  cta: 'ダッシュボードにアクセス →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === キャンペーン5: 紹介プログラム ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: '紹介プログラム',
  subject: '💰 紹介した友人1人につき€50獲得！',
  preheader: '紹介プログラム：友人を招待してお金を稼ごう。',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 紹介プログラム</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">紹介した友人1人につき€50獲得</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          こんにちは {{first_name}}さん、
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          AI-Empireを気に入りましたか？<strong>友達にシェアしてお金を稼ぎましょう！</strong>
        </p>

        <!-- 仕組み -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">どうやって動くの？</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> ユニークな紹介リンクを共有
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> 友人があなたのリンクで登録
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> 有料プランを購入
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> アカウントに<strong>€50</strong>が入金されます！
          </p>
        </div>

        <!-- ユニークリンク -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">あなたのユニークリンク：</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- 特典 -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">紹介者の特典</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 成功した紹介1件につき€50</li>
          <li>📊 リアルタイムトラッキングダッシュボード</li>
          <li>💳 Stripe経由で支払い（銀行振込）</li>
          <li>🎁 次回更新時に-20%割引</li>
          <li>⭐ 5件の紹介で「ゴールド紹介者」ステータス</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            リンクを共有する →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          紹介数に上限なし。多くシェアするほど多く稼げます！
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — スタートアップ向けフランスAIプラットフォーム 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">ウェブサイト</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">配信停止</a>
        </p>
      </div>

    </div>
  `,
  cta: 'リンクを共有する →',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
