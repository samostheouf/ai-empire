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
// 产品发布活动
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: '产品发布 — AI Empire',
  type: 'product-launch',
  duration: '14天',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: '首月获取500个注册并创造€3,000收入',
  content: {
    headline: '🚀 全新发布：面向SaaS的AI革命已经到来！',
    subheadline: '使用Next.js 14模板+强大AI API，24小时启动你的SaaS',
    body: `梦想启动自己的SaaS，但开发需要数周时间？

AI Empire改变游戏规则：
✅ 专业Next.js 14模板 — 现代设计、响应式、暗黑模式
✅ 内置AI API — GPT-4、Groq、Gemini开箱即用
✅ 包含Stripe + Auth — 5分钟完成支付和身份验证
✅ 完整管理后台 — 管理用户、分析、发票

🔥 发布优惠：所有模板72小时限时-30%！

加入已通过AI Empire启动SaaS的早期用户行列。
不要错过这次机会 — 优惠将于[DATE]截止。`,
    cta: '🚀 立即开始 — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🚀 正式发布：AI Empire上线了！-30%优惠给你',
    emailBody: `你好 [First Name],

这一天终于来了。AI Empire正式上线！

我们提供：
🎨 6个专业Next.js 14模板（€49-199）
🤖 内置AI API（GPT-4、Groq、Gemini）
💳 已配置Stripe + Auth
📊 完整管理后台

🎁 独家优惠：所有模板仅72小时限时-30%。

结账时使用代码LAUNCH30。

[CTA: 探索模板 →]

期待再会，
AI Empire团队 🇫🇷`,
    socialPost: `🚀 AI Empire终于上线了！

这个平台集合了：
✅ 专业Next.js 14模板
✅ 内置AI API
✅ 包含Stripe + Auth
✅ 管理后台

🎁 使用代码LAUNCH30享受72小时-30%

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: '社交媒体预热', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: '向订阅者发送预告邮件', channel: 'Email' },
    { day: 'D-1', action: 'Instagram Stories倒计时', channel: 'Instagram' },
    { day: 'D0', action: '正式发布 — 帖子+邮件+广告', channel: '所有渠道' },
    { day: 'D+1', action: '早期用户评价', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: '-30%优惠提醒', channel: 'Email, Twitter' },
    { day: 'D+5', action: '教程"如何创建你的第一个SaaS"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: '-30%优惠结束', channel: 'Email, Social' },
    { day: 'D+10', action: '客户案例研究', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: '总结+用户评价', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: '目标受众（因活动而异）',
    targetConversion: '转化率 1-2%',
    targetRevenue: '与广告支出成比例'
  }
}

// ============================================================
// 季节性促销活动
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: '季节性促销 — 春夏',
  type: 'seasonal',
  duration: '21天',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: '夏季期间销售额提升40%',
  content: {
    headline: '☀️ AI Empire夏季大促 — 最高-40%！',
    subheadline: '夏天是用来启动SaaS的，不是用来躺沙滩的',
    body: `夏天即将到来，这是提升项目的最佳时机！

🌞 春夏特惠：
- NeuraStore（电商模板）：€39 → €29（-25%）
- NeuraBlog（博客模板）：€29 → €19（-35%）
- 完整套装（6个模板）：€599 → €359（-40%）

⚡ 为什么选夏天？
→ 市场竞争更少
→ 秋季前有更多时间构建产品
→ 夏季发布的创业公司能在9月带着产品到来

⏱️ 优惠有效期 [START_DATE] 至 [END_DATE]

使用代码ETE2024享受套装-40%折扣。`,
    cta: '☀️ 抢购优惠 — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Summer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ 夏季大促：AI Empire所有模板-40%！',
    emailBody: `你好 [First Name],

夏天来了，我们有一个你无法拒绝的优惠！🌞

☀️ 特惠活动：
- NeuraStore：€39 → €29
- NeuraBlog：€29 → €19
- 6模板套装：€599 → €359

⏰ 优惠截止至 [END_DATE]

结账时使用代码ETE2024。

[CTA: 查看优惠 →]

祝你有个美好的夏天！
AI Empire团队 🇫🇷`,
    socialPost: `☀️ AI EMPIRE夏季大促 ☀️

完整套装-40%：
✅ 6个Next.js 14模板
✅ 内置AI API
✅ 优先支持

代码：ETE2024
⏰ 有效期至 [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Summer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: '预告"夏天有什么要来..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: '官方促销公告', channel: '所有渠道' },
    { day: 'D+3', action: '客户评价+前后对比', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: '中途提醒+限量库存', channel: 'Email' },
    { day: 'D+10', action: '教程"这个夏天启动你的SaaS"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: '最后几天 — 制造紧迫感', channel: '所有渠道' },
    { day: 'D+18', action: '最后机会', channel: 'Email, Twitter' },
    { day: 'D+21', action: '促销结束 — 总结', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000人',
    targetConversion: '300笔销售（1%）',
    targetRevenue: '€10,700（300×€35均价）'
  }
}

// ============================================================
// 推荐计划
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: '推荐计划 — 赚取积分',
  type: 'referral',
  duration: '永久',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500（积分奖励）',
  objective: '病毒式增长：1个推荐 = 2个新用户',
  content: {
    headline: '🎁 推荐好友，赚取500免费AI积分！',
    subheadline: '口碑传播是我们最好的增长渠道',
    body: `喜欢AI Empire？分享它并赚取奖励！

🎯 工作原理：
1. 分享你的专属推荐链接
2. 你的好友通过你的链接注册
3. 你们双方各获得500免费AI积分！

💰 奖励层级：
- 1个推荐 = 500积分
- 3个推荐 = 1,500积分 + "大使"徽章
- 5个推荐 = 2,500积分 + Pro 1个月访问
- 10个推荐 = 5,000积分 + Pro 3个月访问 + 网站展示

🔗 你的专属链接：[REFERRAL_LINK]

在Twitter、LinkedIn上分享，或直接发送给你的联系人！`,
    cta: '🎁 分享我的推荐链接',
    hashtags: [
      '#AIEmpire', '#Referral', '#Free', '#AI', '#SaaS',
      '#Ambassador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 想要500免费AI积分？推荐好友！',
    emailBody: `你好 [First Name],

我们有一个惊喜送给你！🎁

在AI Empire推荐好友，你们双方各获得500免费AI积分。

你的专属链接：[REFERRAL_LINK]

🎯 层级：
- 1个推荐 → 500积分
- 3个推荐 → 1,500积分 + 徽章
- 5个推荐 → 2,500积分 + Pro 1个月
- 10个推荐 → 5,000积分 + Pro 3个月

立即分享你的链接！

[CTA: 分享我的链接 →]

感谢你成为这场冒险的一部分！💜
AI Empire团队`,
    socialPost: `🎁 推荐好友，赚取500积分！ 🎁

喜欢AI Empire？分享它！

✅ 你的好友注册 → 500免费积分
✅ 你赚取 → 500免费积分

🔗 推荐链接：[REFERRAL_LINK]

5个推荐 = 免费Pro访问1个月 🚀

#AIEmpire #Referral #AI #SaaS #Free`
  },
  schedule: [
    { day: '永久', action: '欢迎邮件包含推荐链接', channel: 'Email' },
    { day: 'D+7', action: '推荐计划提醒', channel: 'Email' },
    { day: 'D+30', action: '邮件"你还没有推荐任何人..."', channel: 'Email' },
    { day: '永久', action: '推荐链接在后台可见', channel: 'Dashboard' },
    { day: '每周', action: 'Twitter顶级推荐者排行榜', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '每月1,000次分享',
    targetConversion: '每月200个新注册',
    targetRevenue: '自然增长+40%'
  }
}

// ============================================================
// 黑色星期五/网络星期一活动
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: '黑色星期五/网络星期一 — AI Empire',
  type: 'black-friday',
  duration: '5天（周三至周六 + 网络星期一）',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: '最大化活动覆盖面和转化率',
  content: {
    headline: '🖤 黑色星期五 AI EMPIRE — 全场-50%！',
    subheadline: '年度最大促销。不要错过。',
    body: `是时候行动了。有史以来第一次：

🖤 黑色星期五 — 全场-50%

📦 独家优惠：
- NeuraStore：€39 → €19.50
- NeuraBlog：€29 → €14.50
- NeuraPortfolio：€59 → €29.50
- 高级套装（6个模板）：€599 → €299.50
- Pro计划（1年）：€1,188 → €594

⚡ 这不是玩笑。这是年度大促。

⏱️ 限时：仅限[WEDNESDAY]至[MONDAY]。

🔒 限量库存：前50名购买者获赠免费模板。

代码：BLACKFRIDAY50`,
    cta: '🖤 立享-50%',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 黑色星期五：全场AI Empire -50% — 仅5天！',
    emailBody: `你好 [First Name],

正式通知。AI Empire的黑色星期五来了。🖤

全场-50%：
📦 NeuraStore：€39 → €19.50
📦 NeuraBlog：€29 → €14.50
📦 高级套装：€599 → €299.50
📦 Pro计划1年：€1,188 → €594

⏰ 仅限[WEDNESDAY]至[MONDAY]。

代码：BLACKFRIDAY50

前50名购买者获赠免费模板！🎁

[CTA: 领取-50% →]

不要错过。
AI Empire团队 🖤`,
    socialPost: `🖤 黑色星期五 AI EMPIRE 🖤

5天全场-50%！

📦 模板€14.50至€299.50
📦 Pro计划-50%
📦 前50名 = 免费模板

代码：BLACKFRIDAY50
⏰ [WEDNESDAY]至[MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: '周三 D-1', action: '预告"明天，黑色降临..."', channel: 'Twitter, Instagram' },
    { day: '周四 D0（BF）', action: '黑色星期五正式启动', channel: '所有渠道 + 邮件群发' },
    { day: '周四 D0', action: 'Google Ads — 紧急活动', channel: 'Google Ads' },
    { day: '周五 D+1', action: '提醒+购买者评价', channel: 'Email, Twitter' },
    { day: '周六 D+2', action: '社会证明："已售出X件！"', channel: 'Instagram, LinkedIn' },
    { day: '周日 D+3', action: '常规BF最后一天', channel: '邮件群发' },
    { day: '周一 CM', action: '网络星期一 — 特别延长', channel: '所有渠道' },
    { day: '周一 CM', action: '24小时闪购', channel: 'Email, Twitter' },
    { day: '周二 D+5', action: '黑色星期五结束 — 感谢', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '目标受众（因活动而异）',
    targetConversion: '转化率 0.5-1%',
    targetRevenue: '与广告支出成比例'
  }
}

// ============================================================
// 新年活动
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: '新年 — SaaS目标2025',
  type: 'new-year',
  duration: '14天（12月26日至1月9日）',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: '转化年底潜在客户并在1月强势启动',
  content: {
    headline: '🎆 2025年：今年启动你的SaaS！',
    subheadline: '新年，新SaaS。用AI Empire强势起步。',
    body: `2025年是属于你的年份。🎆

你去年已经把想法写在纸上。现在，行动起来。

🚀 新年优惠：
- 使用代码NEWYEAR2025享受所有模板-25%
- 500免费AI积分助你起步
- 优先体验2025年新功能

🎯 2025年目标：
✅ "我要启动SaaS" → AI Empire帮你24小时实现
✅ "我要在线赚钱" → 电商模板+Stripe集成
✅ "我要学习AI" → 内置AI API+教程
✅ "我要数字化转型" → 完整管理后台

⏱️ 优惠仅限12月26日至1月9日。

让2025年成为你的成功之年。`,
    cta: '🎆 用AI Empire开启2025',
    hashtags: [
      '#AIEmpire', '#NewYear', '#2025', '#Resolutions', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🎆 新年，新SaaS：-25% + 500免费积分！',
    emailBody: `你好 [First Name],

新年快乐！🎆

2025年是你启动SaaS的年份。我们在这里帮助你。

🎁 新年优惠：
- 所有模板-25%
- 500免费AI积分
- 优先体验2025年功能

代码：NEWYEAR2025

⏰ 优惠从12月26日至1月9日。

让这一年成为美好的一年。

[CTA: 查看优惠 →]

新年快乐，祝你好运！
AI Empire团队 🇫🇷`,
    socialPost: `🎆 2025：你的SAAS之年！ 🎆

新年，新开始。

🎁 特别优惠：
✅ 模板-25%
✅ 500免费AI积分
✅ 2025年优先体验

代码：NEWYEAR2025
⏰ 12/26至01/09

👉 ai-empire-steel.vercel.app

#AIEmpire #NewYear #2025 #SaaS #Resolutions`
  },
  schedule: [
    { day: '12月26日', action: '邮件"新年快乐 — 送你一份礼物"', channel: 'Email' },
    { day: '12月27日', action: '帖子"2025目标：启动你的SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '12月30日', action: '优惠提醒+用户评价', channel: 'Email, Twitter' },
    { day: '1月1日', action: '消息"新年快乐 — 我们在这里"', channel: 'Email, Social' },
    { day: '1月2日', action: '教程"1月启动SaaS的5个步骤"', channel: 'Blog, YouTube' },
    { day: '1月5日', action: '社会证明+紧迫感', channel: 'Twitter, Instagram' },
    { day: '1月7日', action: '最后机会', channel: 'Email' },
    { day: '1月9日', action: '优惠结束 — 总结+2025预览', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000人',
    targetConversion: '400个注册（1%）',
    targetRevenue: '€5,000（200×€25均价）'
  }
}

// ============================================================
// 工具函数
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
  return `€${total.toLocaleString('zh-CN')}`
}
