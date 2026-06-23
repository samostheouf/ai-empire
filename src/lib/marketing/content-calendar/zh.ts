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
// 月度日历
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: '月度日历 — AI Empire',
  period: '2025年3月',
  type: 'monthly',
  posts: [
    // 第1周
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 中国创业公司现在就应该使用AI的3个理由：\n\n1. 降低60%的成本\n2. 自动化重复性任务\n3. 从竞争中脱颖而出\n\n#AIEmpire #StartupChina',
      hashtags: ['#AIEmpire', '#StartupChina', '#AI'],
      cta: '了解更多'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'AI不再是巨头企业的专属。\n\n创业公司无需大预算即可使用AI：\n\n→ AI Empire模板（€19起）\n→ 免费AI API（GPT-4、Groq）\n→ 5分钟集成\n\n5,000+开发者已经在使用。\n\n你呢？\n\n#AIEmpire #AI #StartupChina',
      hashtags: ['#AIEmpire', '#AI', '#StartupChina']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 60秒教程：\n\n如何用AI Empire在5分钟内创建AI博客：\n\n1. 选择NeuraBlog（€19）\n2. 用npx安装\n3. 配置API\n4. 部署到Vercel\n\n就这么简单！ ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 轮播图："5个模板助你在2025年启动SaaS"\n\n第1张：NeuraBlog — 高端博客\n第2张：NeuraStore — 电商平台\n第3张：NeuraPortfolio — 作品集\n第4张：完整套餐 — 6个模板\n第5张：CTA — 立即开始\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 调查：你每月为AI API支付多少？\n\nA) €0-50/月\nB) €50-200/月\nC) €200+/月\nD) 还没有AI API\n\n（每个选项我们都有解决方案 😏）\n\n#AIEmpire #AI',
      hashtags: ['#AIEmpire', '#AI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 每日问答：\n\n你在AI方面最大的挑战是什么？\n\nA) 了解如何使用\nB) 找到可靠的API\nC) 降低成本\nD) 集成到我的产品中\n\n在评论中分享！ 👇\n\n#AIEmpire #AI #社区',
      hashtags: ['#AIEmpire', '#AI', '#社区']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 线程："用AI降低SaaS成本的5个技巧"\n\n1/ 使用免费API（Groq、Gemini）\n2/ 集成AI Empire（模板+API）\n3/ 用AI聊天机器人自动化支持\n4/ 用GPT-4生成内容\n5/ 用AI分析数据\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 案例研究：InnoveTech如何降低70%的AI成本\n\n使用AI Empire之前：\n→ 每月€3,000用于第三方API\n→ 3个月开发时间\n→ 有限的支持\n\n使用AI Empire之后：\n→ 每月€900（-70%）\n→ 24小时开发时间\n→ 24/7全天候支持\n\n结果：1年节省€25,000。\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: '我："我不会用AI"\n\n也是我：*用AI Empire在1小时内添加47个AI功能*\n\n😂\n\n#AIEmpire #DevLife #AI',
      hashtags: ['#AIEmpire', '#DevLife', '#AI']
    },
    // 第2周
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 新品：NeuraStore v2上线！\n\n✅ 全新设计\n✅ 性能翻倍\n✅ 新的电商功能\n\n价格：€29（72小时-40%）\n\n优惠码：NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 介绍：NeuraStore v2\n\nNext.js 14最完整的电商模板：\n\n→ 智能购物车\n→ 安全的Stripe支付\n→ 专业管理后台\n→ 响应式设计 + 暗色模式\n\n价格：€29（上线优惠-40%）\n\n5,000+开发者信赖我们。\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 线程："如何用€0基础设施预算在24小时内启动电商"\n\n1/ AI Empire提供了NeuraStore（€29）\n2/ 5分钟内连接Stripe\n3/ 3分钟内部署到Vercel\n4/ 24小时内拥有了我的电商\n5/ 总成本：€29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // 第3周
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 月度总结：\n\n✅ 500+新用户\n✅ 100+模板售出\n✅ 98%客户满意度\n\n感谢社区的支持！ 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "我辞职创建了AI Empire。这是原因。"\n\n中国市场需要一个本地化的AI API替代方案。\n\nAI Empire就是那个替代方案：\n→ 中国优先\n→ 中文支持\n→ EUR计费\n→ 原生GDPR合规\n\n5,000+开发者信赖我们。\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // 第4周
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 大事即将发生...\n\n📅 [日期]\n🎁 [线索]\n\n敬请期待。\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 享受上线优惠的最后一天！\n\n全部模板-30%\n优惠码：LAUNCH30\n⏰ 午夜到期\n\n不要错过！\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #最后机会',
      hashtags: ['#AIEmpire', '#最后机会']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// 周度排期
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: '周度排期 — AI Empire',
  period: '典型一周',
  type: 'weekly',
  posts: [
    // 周一
    {
      date: '周一',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 周一动力：提升生产力的AI技巧\n\n[今日技巧]\n\n#AIEmpire #周一动力',
      hashtags: ['#AIEmpire', '#周一动力']
    },
    {
      date: '周一',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [领导力话题]\n\n[专业内容]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // 周二
    {
      date: '周二',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 快速教程：[话题]\n\n1. 步骤一\n2. 步骤二\n3. 步骤三\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: '周二',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 30秒短视频："如何用AI Empire [操作]"\n\n[演示]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // 周三
    {
      date: '周三',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [价值内容]\n\n[技巧或建议]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: '周三',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 案例研究：[客户]\n\n之前：[情况]\n之后：[结果]\n\n[经验教训]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '周三',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 2分钟视频："如何用AI Empire [话题]"\n\n[视频教程]\n\n#AIEmpire #视频',
      hashtags: ['#AIEmpire', '#视频']
    },
    // 周四
    {
      date: '周四',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 线程："[话题]"\n\n1/ [要点1]\n2/ [要点2]\n3/ [要点3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: '周四',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [数据或统计]\n\n[分析]\n\n[影响]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // 周五
    {
      date: '周五',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [客户评价]\n\n"AI Empire如何 [好处]"\n\n[社会证明]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: '周五',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 周度回顾：\n\n✅ [成就1]\n✅ [成就2]\n✅ [成就3]\n\n下周预告：[预览]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // 周六
    {
      date: '周六',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 故事："独立开发者的一天"\n\n[幕后花絮]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // 周日
    {
      date: '周日',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 周日问答：\n\n你这周要创建什么？\n\n在评论中分享！ 👇\n\n#AIEmpire #社区',
      hashtags: ['#AIEmpire', '#社区']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// 节假日日历
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: '情人节',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 情人节即将到来...\n\n为开发者准备的特别惊喜...\n\n#AIEmpire #情人节',
        hashtags: ['#AIEmpire', '#情人节']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 AI Empire情人节优惠：\n\n使用优惠码AMOUR20，全部模板-20%\n\n因为最好的礼物是能正常运行的SaaS ❤️\n\n⏰ 仅限24小时\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #情人节',
        hashtags: ['#AIEmpire', '#情人节']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "爱情是找到一个和你分享对代码热情的人"\n\n— 一个孤独的开发者\n\n祝所有开发者情人节快乐！\n\n#AIEmpire #情人节 #DevLife',
        hashtags: ['#AIEmpire', '#情人节', '#DevLife']
      }
    ]
  },
  {
    name: '劳动节',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 五一劳动节即将到来...\n\n准备好少工作了吗？ 🤔\n\n#AIEmpire #劳动节',
        hashtags: ['#AIEmpire', '#劳动节']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 劳动节快乐！\n\n今天，我们庆祝构建未来的开发者们。\n\n感谢5,000+用户的大力支持！ 🙏\n\n#AIEmpire #劳动节 #DevLife',
        hashtags: ['#AIEmpire', '#劳动节', '#DevLife']
      }
    ]
  },
  {
    name: '音乐节',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 音乐节即将到来...\n\n用代码做音乐怎么样？ 🎶\n\n#AIEmpire #音乐节',
        hashtags: ['#AIEmpire', '#音乐节']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 音乐节快乐！\n\n今日播放列表：\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — 我们的想象力\n3. "代码编译的声音" — 所有开发者\n\n🎶\n\n#AIEmpire #音乐节',
        hashtags: ['#AIEmpire', '#音乐节']
      }
    ]
  },
  {
    name: '国庆节',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 国庆节即将到来...\n\n我们有特别的东西来庆祝中国科技！ 🇨🇳\n\n#AIEmpire #国庆节',
        hashtags: ['#AIEmpire', '#国庆节']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 国庆节快乐！\n\n今天，我们庆祝中国科技：\n→ 5,000+开发者\n→ 200+个SaaS上线\n→ 100%中国制造\n\n中国科技万岁！ 🇨🇳🚀\n\n#AIEmpire #国庆节 #ChinaTech',
        hashtags: ['#AIEmpire', '#国庆节', '#ChinaTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 国庆节：中国科技的时刻！\n\nAI Empire自豪地代表中国创新：\n→ 5,000+开发者\n→ 200+个SaaS上线\n→ 中文支持\n→ EUR计费\n→ 原生GDPR合规\n\n中国科技万岁！ 🇨🇳\n\n#AIEmpire #国庆节 #ChinaTech',
        hashtags: ['#AIEmpire', '#国庆节', '#ChinaTech']
      }
    ]
  },
  {
    name: '开学季',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 开学季即将到来...\n\n学点新东西怎么样？\n\n我们正在为你准备特别的东西... 👀\n\n#AIEmpire #开学季',
        hashtags: ['#AIEmpire', '#开学季']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 2025开学季：学习创建你的SaaS！\n\n开学特惠：\n全部模板-25%\n优惠码：RENTREE25\n\n⏰ 9月2日至15日\n\n套餐包含：\n→ 6个Next.js 14模板\n→ 完整教程\n→ 优先支持\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #开学季',
        hashtags: ['#AIEmpire', '#开学季']
      }
    ]
  },
  {
    name: '黑五',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 黑色星期五即将到来...\n\n做好准备。这是一年中最大的优惠。\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 距离AI Empire黑色星期五还有1周！\n\n全场-50%！\n\n标记日期：\n📅 11月28日\n\n注册获取通知：\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — 开始！ 🖤\n\n5天全场-50%！\n\n📦 模板从€9.50到€149.50\n📦 Pro计划-50%\n📦 前50名 = 免费奖励模板\n\n优惠码：BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: '圣诞节',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 圣诞节即将到来...\n\n我们有一份礼物送给你...\n\n🎁\n\n#AIEmpire #圣诞节',
        hashtags: ['#AIEmpire', '#圣诞节']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 距离圣诞节还有5天！\n\n我们的降临节日历：\n→ 每天1个免费模板\n→ 独家优惠码\n→ 惊喜内容\n\n加入我们！\n\n#AIEmpire #圣诞节 #降临节日历',
        hashtags: ['#AIEmpire', '#圣诞节', '#降临节日历']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 圣诞快乐！ 🎄\n\n感谢5,000+用户的支持！\n\n礼物：全部模板-30%\n优惠码：NOEL2025\n\n节日快乐！ 🎅\n\n#AIEmpire #圣诞节',
        hashtags: ['#AIEmpire', '#圣诞节']
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
        content: '🎆 2025年即将到来...\n\n准备好启动你的SaaS了吗？\n\n我们正在为你准备特别的东西...\n\n#AIEmpire #新年',
        hashtags: ['#AIEmpire', '#新年']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 2025新年快乐！ 🎆\n\n2025年是你的一年。启动SaaS的一年。\n\n新年优惠：\n-25% + 500免费积分\n优惠码：NOUVELAN2025\n\n让这一年成为你的一年！\n\n#AIEmpire #新年 #2025',
        hashtags: ['#AIEmpire', '#新年', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 新年，新的SaaS。\n\n2025年是采取行动的一年。\n\nAI Empire在这里支持你：\n→ 即用型模板\n→ 免费AI API\n→ 24/7全天候支持\n\n加入5,000+已经启动SaaS的开发者。\n\n新年快乐！ 🎆\n\n#AIEmpire #新年 #2025',
        hashtags: ['#AIEmpire', '#新年', '#2025']
      }
    ]
  }
]

// ============================================================
// 实用函数
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
