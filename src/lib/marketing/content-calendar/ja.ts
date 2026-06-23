export interface ContentCalendar {
  id: string
  name: string
  period: string
  type: 'monthly' | 'weekly' | 'holiday'
  posts: ContentPost[]
  metrics: ContentMetrics
}

export interface ContentPost {
  date: string
  time: string
  platform: string
  type: string
  content: string
  hashtags: string[]
  cta?: string
  url?: string
}

export interface ContentMetrics {
  totalPosts: number
  platforms: string[]
  avgPostsPerDay: number
}

export interface HolidayPlan {
  name: string
  date: string
  daysBefore: number
  content: ContentPost[]
}

// ============================================================
// 月間カレンダー
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: '月間カレンダー — AI Empire',
  period: '2025年3月',
  type: 'monthly',
  posts: [
    // 週1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 日本のスタートアップが今すぐAIを使うべき3つの理由：\n\n1. コストを60%削減\n2. 繰り返し作業を自動化\n3. 競合から差別化\n\n#AIEmpire #StartupJapan',
      hashtags: ['#AIEmpire', '#StartupJapan', '#AI'],
      cta: '詳しく見る'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'AIはもはや大手企業だけのものではありません。\n\n大きな予算なしにAIにアクセスする方法：\n\n→ AI Empireテンプレート（€19〜）\n→ 無料AI API（GPT-4、Groq）\n→ 5分でインテグレーション\n\n5,000人以上の開発者が既に実践済み。\n\nあなたはどうですか？\n\n#AIEmpire #AI #StartupJapan',
      hashtags: ['#AIEmpire', '#AI', '#StartupJapan']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 60秒チュートリアル：\n\nAI Empireで5分間にAIブログを作成する方法：\n\n1. NeuraBlogを選択（€19）\n2. npxでインストール\n3. APIを設定\n4. Vercelにデプロイ\n\nこれで完了！ ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 カルーセル：「2025年にSaaSを立ち上げる5つのテンプレート」\n\nスライド1：NeuraBlog — プレミアムブログ\nスライド2：NeuraStore — Eコマース\nスライド3：NeuraPortfolio — ポートフォリオ\nスライド4：バンドル — 6つのテンプレート\nスライド5：CTA — 今すぐ始める\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 アンケート：AI APIにいくら支払っていますか？\n\nA) 月€0-50\nB) 月€50-200\nC) 月€200+\nD) まだAI APIを持っていない\n\n（すべてのオプションに対応できます 😏）\n\n#AIEmpire #AI',
      hashtags: ['#AIEmpire', '#AI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 本日の質問：\n\nAIに関する最大の課題は何ですか？\n\nA) 使い方を理解する\nB) 信頼できるAPIを見つける\nC) コストを削減する\nD) 自分の製品に統合する\n\nコメントでシェアしてください！ 👇\n\n#AIEmpire #AI #Community',
      hashtags: ['#AIEmpire', '#AI', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 スレッド：「AIでSaaSコストを削減する5つのコツ」\n\n1/ 無料APIを使用（Groq、Gemini）\n2/ AI Empireを統合（テンプレート＋API）\n3/ AIチャットボットでサポートを自動化\n4/ GPT-4でコンテンツを生成\n5/ AIでデータを分析\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 事例：InnoveTechがAIコストを70%削減した方法\n\nAI Empire導入前：\n→ サードパーティAPIに月€3,000\n→ 3ヶ月の開発\n→ 限定的なサポート\n\nAI Empire導入後：\n→ 月€900（-70%）\n→ 24時間の開発\n→ 24時間365日サポート\n\n結果：1年で€25,000を節約。\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: '私：「AIは使わない」\n\n同じ私：*AI Empireで1時間に47のAI機能を追加*\n\n😂\n\n#AIEmpire #DevLife #AI',
      hashtags: ['#AIEmpire', '#DevLife', '#AI']
    },
    // 週2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 新機能：NeuraStore v2が公開されました！\n\n✅ デザイン刷新\n✅ パフォーマンス2倍\n✅ 新しいEコマース機能\n\n価格：€29（72時間-40%）\n\nコード：NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 ご紹介：NeuraStore v2\n\nNext.js 14向けの最も包括的なEコマーステンプレート：\n\n→ インテリジェントカート\n→ 安全なStripe決済\n→ プロフェッショナル管理ダッシュボード\n→ レスポンシブデザイン＋ダークモード\n\n価格：€29（ローンチ-40%）\n\n5,000人以上の開発者に信頼されています。\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 スレッド：「€0のインフラ予算で24時間でEコマースを構築した方法」\n\n1/ AI EmpireがNeuraStoreを提供（€29）\n2/ 5分でStripeを接続\n3/ 3分でVercelにデプロイ\n4/ 24時間でEコマースが完成\n5/ 合計コスト：€29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // 週3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 月間サマリー：\n\n✅ 500+人の新規ユーザー\n✅ 100+個のテンプレート販売\n✅ 98%の顧客満足度\n\nコミュニティの皆さん、ありがとう！ 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 「AI Empireを構築するために仕事を辞めました。その理由はこれです。」\n\n日本の市場には、アメリカのAI APIに代わるローカルな選択肢が必要です。\n\nAI Empireがその選択肢です：\n→ 日本ファースト\n→ 日本語サポート\n→ EUR請求\n→ GDPR準拠\n\n5,000人以上の開発者が信頼しています。\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // 週4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 大きなものが来ます...\n\n📅 [日付]\n🎁 [ヒント]\n\nお楽しみに。\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 ローンチオファーを活用する最終日！\n\n全テンプレート-30%\nコード：LAUNCH30\n⏰ 真夜中に終了\n\n見逃さないで！\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #LastChance',
      hashtags: ['#AIEmpire', '#LastChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// 週間スケジュール
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: '週間スケジュール — AI Empire',
  period: '典型的な週',
  type: 'weekly',
  posts: [
    // 月曜日
    {
      date: '月曜日',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 月曜日のモチベーション：生産性を向上させるAIのヒント\n\n[今日のヒント]\n\n#AIEmpire #月曜日のモチベーション',
      hashtags: ['#AIEmpire', '#月曜日のモチベーション']
    },
    {
      date: '月曜日',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [リーダーシップのトピック]\n\n[プロフェッショナルコンテンツ]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // 火曜日
    {
      date: '火曜日',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 クイックチュートリアル：[トピック]\n\n1. ステップ1\n2. ステップ2\n3. ステップ3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: '火曜日',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 30秒リール：「AI Empireで[アクション]する方法」\n\n[デモンストレーション]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // 水曜日
    {
      date: '水曜日',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [バリューコンテンツ]\n\n[ヒントまたはアドバイス]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: '水曜日',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 事例：[クライアント]\n\nBefore：[状況]\nAfter：[結果]\n\n[学び]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '水曜日',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 2分動画：「AI Empireで[トピック]する方法」\n\n[ビデオチュートリアル]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // 木曜日
    {
      date: '木曜日',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 スレッド：「[トピック]」\n\n1/ [ポイント1]\n2/ [ポイント2]\n3/ [ポイント3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: '木曜日',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [データまたは統計]\n\n[分析]\n\n[影響]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // 金曜日
    {
      date: '金曜日',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [顧客の声]\n\n「AI Empireが[メリット]してくれた」\n\n[ソーシャルプルーフ]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: '金曜日',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 週間リキャップ：\n\n✅ [成果1]\n✅ [成果2]\n✅ [成果3]\n\n来週：[プレビュー]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // 土曜日
    {
      date: '土曜日',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 ストーリー：「インディーハッカーの1日」\n\n[舞台裏]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // 日曜日
    {
      date: '日曜日',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 日曜日の質問：\n\n今週は何を作りますか？\n\nコメントでシェアしてください！ 👇\n\n#AIEmpire #Community',
      hashtags: ['#AIEmpire', '#Community']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// 祝日カレンダー
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'バレンタインデー',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 バレンタインデーが近づいています...\n\n開発者のための特別なもの来了...\n\n#AIEmpire #バレンタインデー',
        hashtags: ['#AIEmpire', '#バレンタインデー']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 AI Empireバレンタインデーオファー：\n\nコードAMOUR20で全テンプレート-20%\n\n最高の贈り物は、機能するSaaSです ❤️\n\n⏰ 24時間限定\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #バレンタインデー',
        hashtags: ['#AIEmpire', '#バレンタインデー']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 「愛とは、コードへの情熱を共有できる人を見つけること」\n\n— 孤独な開発者\n\n全開発者のバレンタインデーおめでとう！\n\n#AIEmpire #バレンタインデー #DevLife',
        hashtags: ['#AIEmpire', '#バレンタインデー', '#DevLife']
      }
    ]
  },
  {
    name: 'メーデー',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 5月1日が近づいています...\n\n.lessで働く準備はできましたか？ 🤔\n\n#AIEmpire #メーデー',
        hashtags: ['#AIEmpire', '#メーデー']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 メーデーおめでとう！\n\n本日は、未来を構築する開発者を祝います。\n\n5,000人以上のユーザーの皆さん、ありがとう！ 🙏\n\n#AIEmpire #メーデー #DevLife',
        hashtags: ['#AIEmpire', '#メーデー', '#DevLife']
      }
    ]
  },
  {
    name: '音楽祭',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 音楽祭が近づいています...\n\nコードで音楽を作ったら？ 🎶\n\n#AIEmpire #音楽祭',
        hashtags: ['#AIEmpire', '#音楽祭']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 音楽祭おめでとう！\n\n本日のプレイリスト：\n1. 「ボヘミアン・ラプソディ」— クイーン\n2. 「AI Empireテーマ」— 我々の想像力\n3. 「コードがコンパイルする音」— 全開発者\n\n🎶\n\n#AIEmpire #音楽祭',
        hashtags: ['#AIEmpire', '#音楽祭']
      }
    ]
  },
  {
    name: '国慶日',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 国慶日が近づいています...\n\n日本のテックを祝う特別なものがあります！ 🇯🇵\n\n#AIEmpire #国慶日',
        hashtags: ['#AIEmpire', '#国慶日']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 国慶日おめでとう！\n\n本日は日本のテックを祝います：\n→ 5,000人以上の開発者\n→ 200以上のSaaSローンチ\n→ 100%メイドインジャパン\n\n日本のテック万歳！ 🇯🇵🚀\n\n#AIEmpire #国慶日 #JapanTech',
        hashtags: ['#AIEmpire', '#国慶日', '#JapanTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 国慶日：日本のテックの時です！\n\nAI Empireは日本のイノベーションを代表することを誇りに思います：\n→ 5,000人以上の開発者\n→ 200以上のSaaSローンチ\n→ 日本語サポート\n→ EUR請求\n→ GDPR準拠\n\n日本のテック万歳！ 🇯🇵\n\n#AIEmpire #国慶日 #JapanTech',
        hashtags: ['#AIEmpire', '#国慶日', '#JapanTech']
      }
    ]
  },
  {
    name: '新学期',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 新学期が近づいています...\n\n何か新しいことを学んでみませんか？\n\n特別なものをお伝えします... 👀\n\n#AIEmpire #新学期',
        hashtags: ['#AIEmpire', '#新学期']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 新学期2025：SaaSの作り方を学びましょう！\n\n新学期特別オファー：\n全テンプレート-25%\nコード：RENTREE25\n\n⏰ 9月2日〜15日\n\nパッケージ内容：\n→ 6つのNext.js 14テンプレート\n→ 完全なチュートリアル\n→ 優先サポート\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #新学期',
        hashtags: ['#AIEmpire', '#新学期']
      }
    ]
  },
  {
    name: 'ブラックフライデー',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 ブラックフライデーが近づいています...\n\n準備してください。今年最大のお得情報です。\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ AI Empireブラックフライデーまであと1週間！\n\n全品-50%！\n\n日付をマーク：\n📅 11月28日\n\n通知を受け取るには登録：\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — 開始！ 🖤\n\n5日間、全品-50%！\n\n📦 テンプレート €9.50〜€149.50\n📦 Proプラン -50%\n📦 先着50名 = 特典テンプレート無料\n\nコード：BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'クリスマス',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 クリスマスが近づいています...\n\nあなたへのプレゼントがあります...\n\n🎁\n\n#AIEmpire #クリスマス',
        hashtags: ['#AIEmpire', '#クリスマス']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 クリスマスまであと5日！\n\nアドベントカレンダー：\n→ 毎日1つの無料テンプレート\n→ 限定プロモーションコード\n→ サプライズコンテンツ\n\n参加しましょう！\n\n#AIEmpire #クリスマス #アドベントカレンダー',
        hashtags: ['#AIEmpire', '#クリスマス', '#アドベントカレンダー']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 メリークリスマス！ 🎄\n\n5,000人以上のユーザーの皆さん、ありがとう！\n\nプレゼント：全テンプレート-30%\nコード：NOEL2025\n\n良いお年を！ 🎅\n\n#AIEmpire #クリスマス',
        hashtags: ['#AIEmpire', '#クリスマス']
      }
    ]
  },
  {
    name: '新年',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025年が近づいています...\n\nSaaSを立ち上げる準備はできましたか？\n\n特別なものをお伝えします...\n\n#AIEmpire #新年',
        hashtags: ['#AIEmpire', '#新年']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 明けましておめでとう2025年！ 🎆\n\n2025年はあなたの年です。SaaSを立ち上げる年。\n\n新年オファー：\n-25%＋500クレジット無料\nコード：NOUVELAN2025\n\n今年をあなたの年にしましょう！\n\n#AIEmpire #新年 #2025',
        hashtags: ['#AIEmpire', '#新年', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 新年、新しいSaaS。\n\n2025年は行動に移す年です。\n\nAI Empireがサポートします：\n→ すぐに使えるテンプレート\n→ 無料AI API\n→ 24時間365日サポート\n\nすでにSaaSを立ち上げた5,000人以上の開発者に参加しましょう。\n\n新年おめでとう！ 🎆\n\n#AIEmpire #新年 #2025',
        hashtags: ['#AIEmpire', '#新年', '#2025']
      }
    ]
  }
]

// ============================================================
// ユーティリティ関数
// ============================================================

export function getAllContentCalendars(): ContentCalendar[] {
  return [monthlyContentPlan, weeklyPostingSchedule]
}

export function getHolidayByName(name: string): HolidayPlan | undefined {
  return holidayContentPlan.find(h => h.name === name)
}

export function getHolidaysForMonth(month: number): HolidayPlan[] {
  return holidayContentPlan.filter(h => {
    const holidayMonth = parseInt(h.date.split('/')[1], 10)
    return holidayMonth === month
  })
}

export function generateCalendarId(): string {
  return `cal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getContentByPlatform(posts: ContentPost[], platform: string): ContentPost[] {
  return posts.filter(p => p.platform === platform)
}

export function getContentByDay(posts: ContentPost[], day: string): ContentPost[] {
  return posts.filter(p => p.date === day)
}

export function formatCalendarForExport(posts: ContentPost[]): string {
  return posts.map(p =>
    `${p.date} | ${p.time} | ${p.platform} | ${p.type} | ${p.content.substring(0, 50)}...`
  ).join('\n')
}
