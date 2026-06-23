import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: '入门引导系列 — 5天',
  type: 'onboarding',
  duration: '5天',
  trigger: '新用户注册',
  goal: '用户激活：首次API调用 + 首次模板购买',
  emails: [
    {
      day: 0,
      subject: '🚀 欢迎加入AI Empire — 您的AI API已准备就绪！',
      preview: '100个免费AI积分已到账，立即开始使用。',
      body: `[姓名]您好

欢迎加入AI Empire！🎉

您现在可以使用以下功能：
✅ 100个免费AI积分
✅ GPT-4、Groq、Gemini API接口
✅ Next.js 14专业级模板
✅ 中文客户支持

您的API密钥：[API_KEY]
控制面板：https://ai-empire-steel.vercel.app/dashboard

🎯 下一步：2分钟内完成首次API调用。

1. 登录控制面板
2. 复制您的API密钥
3. 执行以下命令：
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "你好，最近怎么样？"}'

完成！您现在可以使用AI API了。

AI Empire 客户支持团队`,
      cta: '🚀 开始首次测试',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '💡 充分利用AI Empire的3个技巧',
      preview: '帮助您获得更好体验的建议。',
      body: `[姓名]您好

昨天您创建了账户。今天为您介绍3个技巧，助您获得更好的体验：

🎯 技巧1：探索模板
我们的模板设计为开箱即用。推荐从NeuraBlog（€19）或NeuraStore（€29）开始。

💡 技巧2：使用AI API
您可以生成内容、分析文本、创建聊天机器人。100个积分以内完全免费。

⚡ 技巧3：集成到项目中
我们的教程将指导您在5分钟内将AI Empire集成到Next.js项目中。

📚 教程：https://ai-empire-steel.vercel.app/docs

祝您使用愉快！
AI Empire 客户支持团队`,
      cta: '📚 查看教程',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: '📦 为您的项目选择最佳模板',
      preview: '找到适合您需求的模板。',
      body: `[姓名]您好

想构建SaaS应用？以下是为您推荐的模板：

🛒 电商 → NeuraStore（€29）
基于Next.js 14的电商模板，包含购物车、Stripe支付、管理后台。

📝 博客 → NeuraBlog（€19）
SEO优化的专业博客模板，支持评论系统、邮件订阅功能。

💼 作品集 → NeuraPortfolio（€29）
支持动画、表单、暗色模式的专业作品集模板。

📦 全套模板包 → 6个模板（€299）
全部模板 + 优先客服支持 + 免费更新。

首次购买使用优惠码WELCOME10可享9折优惠。

AI Empire 客户支持团队`,
      cta: '🛒 浏览模板',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: '🏆 如何在24小时内启动您的SaaS项目',
      preview: '实用的快速启动指南。',
      body: `[姓名]您好

作为全栈开发者，您是否遇到过这样的困境：

有SaaS的想法，却没有时间从零开始开发...

使用AI Empire，您可以在24小时内启动项目。

购买NeuraStore（€29），5分钟内连接Stripe，部署到Vercel。第二天就能迎来第一批客户。

初始投资仅需€29，即可开启您的业务。

浏览模板，找到最适合您的方案。

AI Empire 客户支持团队`,
      cta: '🚀 开始构建SaaS',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '🎁 首次购买模板享8折优惠',
      preview: '为您准备的专属优惠。',
      body: `[姓名]您好

感谢您注册AI Empire。我们为您准备了一份专属优惠：
首次购买模板享8折优惠

优惠码：WELCOME20

📦 适用模板：
- NeuraBlog：€19 → €15.20
- NeuraStore：€29 → €23.20
- NeuraPortfolio：€29 → €23.20
- 全套模板包：€299 → €239.20

欢迎选购。

AI Empire 客户支持团队`,
      cta: '🎁 使用8折优惠',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: '培育系列 — 7天',
  type: 'nurture',
  duration: '7天',
  trigger: '已注册但未购买的用户',
  goal: '将免费用户转化为付费用户',
  emails: [
    {
      day: 0,
      subject: '📊 使用AI Empire可以构建的项目',
      preview: '具体的项目示例供您参考。',
      body: `[姓名]您好

您已拥有AI Empire账户，但可能还未充分探索所有功能。

以下是5个具体的项目示例：

1️⃣ SEO优化博客 → NeuraBlog
2️⃣ 带Stripe支付的电商 → NeuraStore
3️⃣ 专业作品集 → NeuraPortfolio
4️⃣ AI聊天机器人 → 集成API
5️⃣ 完整SaaS → 高级模板包

每个项目都可在24小时内完成。

AI Empire 客户支持团队`,
      cta: '🚀 查看项目',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: '💡 独立开发者最常犯的错误',
      preview: '避免浪费时间的建议。',
      body: `[姓名]您好

独立开发者最常犯的错误：所有功能都自己开发。

花几周时间开发认证功能 → AI Empire已为您实现
花几周时间开发支付功能 → Stripe已集成
花几周时间开发管理后台 → 已现成可用
花几周时间开发界面设计 → 模板为专业水准

而此时，您的竞争对手已经推出了产品。

使用AI Empire，您可以节省6个月的开发时间。

AI Empire 客户支持团队`,
      cta: '📊 查看模板',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: '🏆 5,000+开发者已通过AI Empire启动SaaS',
      preview: '加入不断成长的开发者社区。',
      body: `[姓名]您好

超过5,000名开发者信任AI Empire。

以下是他们构建的项目：
→ 200+电商SaaS
→ 150+专业博客
→ 100+创意作品集
→ 50+AI聊天机器人

您打算构建什么项目？

AI Empire 客户支持团队`,
      cta: '🤝 加入社区',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: '💰 AI Empire的投资回报率',
      preview: '用数据说话。',
      body: `[姓名]您好

以下是AI Empire的实际投资回报率：

💰 平均投入：€50（1个模板 + AI积分）
📈 平均回报率：1,000%（1位客户即可回本）
⏱️ 节省时间：6个月的开发时间
💵 实际节省：€49,950

每月€50的客户只需1位即可收回投资。

剩余部分就是纯利润。

AI Empire 客户支持团队`,
      cta: '💰 计算投资回报',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: '🎨 NeuraStore — 电商模板介绍',
      preview: '最受欢迎的模板。',
      body: `[姓名]您好

NeuraStore是我们最受欢迎的电商模板。

包含功能：
✅ 购物车
✅ Stripe支付
✅ 商品管理
✅ 管理后台
✅ 响应式设计
✅ 暗色模式

价格：€29（相比外包开发可节省€500以上）

AI Empire 客户支持团队`,
      cta: '🛒 了解NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: '⚡ 5分钟集成AI Empire',
      preview: '快速入门教程。',
      body: `[姓名]您好

如何将AI Empire集成到您的项目：

1️⃣ 安装模板
npx create-next-app@latest my-saas --template ai-empire

2️⃣ 配置API
将API密钥复制到.env.local

3️⃣ 部署到Vercel
执行git push，网站即刻上线

完成！5分钟内即可拥有您的SaaS。

AI Empire 客户支持团队`,
      cta: '📖 查看教程',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: '🎁 专属优惠：早期用户享7折',
      preview: '不容错过的机会。',
      body: `[姓名]您好

您加入AI Empire已[NOMBRE]天。

为表感谢，我们为您准备了专属优惠：
全部模板享7折优惠

优惠码：EARLY30

📦 适用模板：
- NeuraBlog：€19 → €13.30
- NeuraStore：€29 → €20.30
- NeuraPortfolio：€29 → €20.30
- 全套模板包：€299 → €209.30

欢迎选购。

AI Empire 客户支持团队`,
      cta: '🎁 使用7折优惠',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: '挽回系列 — 重新激活',
  type: 'winback',
  duration: '21天',
  trigger: '30天未活跃的用户',
  goal: '重新激活不活跃用户并提高留存率',
  emails: [
    {
      day: 0,
      subject: '💜 [姓名]，好久不见！',
      preview: '我们有一些新消息想与您分享。',
      body: `[姓名]您好

我们注意到您已有一段时间未使用AI Empire。

是否需要我们提供帮助？

→ 需要教程指导吗？
→ 遇到了技术问题？
→ 有功能建议？

我们随时为您服务。请回复此邮件，我们会认真阅读每一封。

AI Empire 客户支持团队`,
      cta: '🚀 返回控制面板',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: '🚀 AI Empire近期更新内容',
      preview: '新的功能上线了。',
      body: `[姓名]您好

自您上次使用以来，我们进行了以下更新：

🆕 新增模板（NeuraBlog、NeuraStore）
🤖 API升级优化（GPT-4、Groq、Gemini）
📊 控制面板重新设计
🎨 界面体验优化

您没有错过什么，现在正是回归的最佳时机。

AI Empire 客户支持团队`,
      cta: '🆕 查看新功能',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '🎁 赠送50个AI积分',
      preview: '一份小礼物，表达我们的心意。',
      body: `[姓名]您好

为感谢您的支持，我们赠送您50个AI积分。

💰 赠送积分：50个
⏰ 有效期：30天

可用于：
→ 生成内容
→ 分析文本
→ 创建聊天机器人
→ 测试API

AI Empire 客户支持团队`,
      cta: '💰 领取积分',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: '⚠️ 您的积分将在16天后到期',
      preview: '请在到期前使用。',
      body: `[姓名]您好

您的50个免费积分将在16天后到期。

⏰ 到期日期：[DATE]

请在到期前用于：
→ 创建第一个项目
→ 测试API
→ 探索AI Empire

AI Empire 客户支持团队`,
      cta: '⚡ 使用积分',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: '👋 最后提醒 — 积分即将到期',
      preview: '请抓紧时间使用。',
      body: `[姓名]您好

您的50个免费积分将在7天后到期。

⏰ 到期日期：[DATE]

到期后积分将失效。

这是使用积分的最后机会。

AI Empire 客户支持团队`,
      cta: '⚡ 最后机会',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: '升级系列 — 升级Pro计划',
  type: 'upsell',
  duration: '14天',
  trigger: 'API调用超过100次或活跃30天以上的用户',
  goal: '将免费用户转化为Pro计划用户',
  emails: [
    {
      day: 0,
      subject: '📊 [姓名]，您的使用量即将达到上限',
      preview: '使用量持续增长 — 为您推荐升级方案。',
      body: `[姓名]您好

好消息：您正在积极使用AI Empire！📈

当前使用情况：
→ API调用：[NOMBRE]/100
→ 剩余积分：[NOMBRE]
→ 活跃天数：[NOMBRE]

您即将达到免费计划的上限。

Pro计划权益：
✅ 无限API调用
✅ 优先访问权
✅ 专属客服支持
✅ 高级模板

AI Empire 客户支持团队`,
      cta: '🚀 升级到Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: '💎 Pro计划的专属权益',
      preview: '高级功能介绍。',
      body: `[姓名]您好

以下是免费计划无法享受的Pro计划权益：

💎 Pro计划（€99/月）：
→ 无限API调用
→ 新功能优先体验
→ 专属客服（2小时内响应）
→ 高级模板（价值€199）
→ 高级分析仪表板
→ 自定义Webhook API

💰 Pro计划客户的平均投资回报率：500%

AI Empire 客户支持团队`,
      cta: '💎 了解Pro计划',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '🎁 Pro计划首月享8折优惠',
      preview: '专属优惠。',
      body: `[姓名]您好

为感谢您的支持，我们准备了专属优惠：
Pro计划首月享8折优惠

💰 月费€99 → €79

优惠码：PRO20

Pro计划权益：
✅ 无限API调用
✅ 专属客服支持
✅ 高级模板
✅ 高级分析功能

AI Empire 客户支持团队`,
      cta: '🎁 使用优惠',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: '🏆 Pro计划如何帮助您提升5倍收益',
      preview: 'Pro计划的实际效果。',
      body: `[姓名]您好

以下是Pro计划的实际效果：

升级前：
→ 项目开发进度缓慢
→ AI服务成本较高
→ 功能受限

升级后：
→ AI成本降低80%
→ 生产力提升300%
→ 收益增长5倍

Pro计划可在2周内收回投资。

AI Empire 客户支持团队`,
      cta: '🚀 升级到Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '⏰ 最后机会 — 8折优惠即将到期',
      preview: '请勿错过此优惠。',
      body: `[姓名]您好

Pro计划8折优惠即将到期。

💰 月费€79（原价€99）

⏰ 到期日期：[DATE]

Pro计划权益：
✅ 无限API调用
✅ 专属客服支持
✅ 高级模板
✅ 高级分析功能

这是享受此优惠的最后机会。

AI Empire 客户支持团队`,
      cta: '⚡ 最后机会',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: '👋 [姓名]，随时欢迎咨询',
      preview: '没有压力，我们随时为您服务。',
      body: `[姓名]您好

我们理解Pro计划可能暂时不适合您。

不用担心。我们随时为您服务。

在此期间，您仍然可以：
→ 使用免费计划（每月100积分）
→ 浏览模板（€19起）
→ 有问题随时联系我们

我们随时为您提供帮助。

AI Empire 客户支持团队`,
      cta: '💬 联系我们',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
