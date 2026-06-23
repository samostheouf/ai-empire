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
    content: `基于 Next.js 14 + Groq AI API 构建\n\nAI Empire 提供：\n• 生产就绪的 SaaS 模板\n• Groq 驱动的推理（快速）\n• 开箱即用的 Stripe 集成\n• 免费层：100 API 积分\n\n今天就开始构建。`,
    hashtags: ['#NextJS14', '#AI', '#SaaS', '#GroqAI', '#WebDev'],
    cta: '免费试用',
    emojis: ['⚡', '🚀', '💡']
  },
  {
    id: 2,
    content: `你的 SaaS 技术栈，已就绪：\n\n✅ Next.js 14 App Router\n✅ Groq AI API 集成\n✅ Stripe 订阅\n✅ 认证 + 管理后台\n\n选择模板，自定义，部署。`,
    hashtags: ['#NextJS', '#SaaS', '#Stripe', '#FullStack', '#DevTools'],
    cta: '浏览模板',
    emojis: ['✅', '🔧', '🎯']
  },
  {
    id: 3,
    content: `将 AI 集成到你的应用不应花费数周时间。\n\nAI Empire 的 Groq API：\n• /api/chat — 流式响应\n• /api/completions — 结构化输出\n• /api/analyze — 文档处理\n\n全部包含在 Next.js 14 模板中。`,
    hashtags: ['#AI', '#NextJS', '#GroqAPI', '#API', '#WebDev'],
    cta: '查看文档',
    emojis: ['🤖', '⚡', '📋']
  },
  {
    id: 4,
    content: `每个 AI Empire 模板都包含 Stripe 集成。\n\n• 订阅计费\n• Webhook 处理\n• 客户门户\n• 按用量计费支持\n\n支付无需第三方认证库。`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#Billing'],
    cta: '免费开始',
    emojis: ['💳', '💰', '🔒']
  },
  {
    id: 5,
    content: `发布 Next.js 14 SaaS 模板市场。\n\n包含内容：\n• 6 个生产模板\n• Groq AI API（免费层：100 积分）\n• Stripe 计费\n• 认证 + 基于角色的访问\n• 管理后台\n\n欢迎反馈。`,
    hashtags: ['#BuildInPublic', '#NextJS14', '#SaaS', '#Marketplace', '#DevTools'],
    cta: '探索',
    emojis: ['🔨', '🛠️', '🚀']
  },
  {
    id: 6,
    content: `FAQ："免费层如何运作？"\n\n• 100 API 积分起步\n• Groq 推理引擎\n• 无需信用卡\n• 准备好后升级\n\n为独立开发者和小团队构建。`,
    hashtags: ['#FreeTier', '#IndieHacker', '#SaaS', '#AI', '#GroqAI'],
    cta: '免费开始',
    emojis: ['❓', '🆓', '💡']
  },
  {
    id: 7,
    content: `Next.js 14 模板 + Groq AI + Stripe = 数天内生产 SaaS。\n\nAI Empire 处理样板代码，你专注于产品。\n\n模板：saas-starter, marketplace, dashboard, blog, portfolio, landing。`,
    hashtags: ['#NextJS14', '#Templates', '#AI', '#SaaS', '#GroqAI'],
    cta: '探索模板',
    emojis: ['📦', '⚡', '🎯']
  },
  {
    id: 8,
    content: `B2B SaaS 创始人：最难的部分是从 0 到 1。\n\nAI Empire 提供：\n• 预构建的认证 + 计费\n• Groq AI API 即用\n• 管理后台\n• Stripe 集成\n\n专注于用户，而不是样板代码。`,
    hashtags: ['#B2B', '#SaaS', '#Founders', '#NextJS', '#AI'],
    cta: '了解更多',
    emojis: ['🏗️', '🔑', '🚀']
  },
  {
    id: 9,
    content: `Groq AI API 基准测试：\n\n• Llama 3.1 8B：~500 tokens/sec\n• Mixtral 8x7B：~300 tokens/sec\n• Gemma 7B：~600 tokens/sec\n\n通过 AI Empire 模板提供。\n\n快速推理，无需 GPU。`,
    hashtags: ['#GroqAI', '#AI', '#LLM', '#Performance', '#NextJS'],
    cta: '试用',
    emojis: ['⚡', '📊', '🚀']
  },
  {
    id: 10,
    content: `AI Empire v1.0 已上线。\n\n我们构建了：\n• 6 个 Next.js 14 SaaS 模板\n• Groq AI API 集成\n• Stripe 计费（订阅 + 用量）\n• 认证 + RBAC\n• 管理后台\n\n免费层可用。欢迎反馈。`,
    hashtags: ['#Launch', '#NextJS14', '#SaaS', '#AI', '#Stripe'],
    cta: '开始使用',
    emojis: ['🎉', '🚀', '💻']
  }
]

export const linkedinPosts: Post[] = [
  {
    id: 1,
    content: `正在构建 AI Empire — 一个集成 AI API 的 Next.js 14 SaaS 模板市场。\n\n思路：大多数 SaaS 项目在写一行产品代码之前，要花数周时间在认证、计费和样板代码上。\n\nAI Empire 包含：\n• Next.js 14 App Router 模板\n• Groq AI API 集成\n• Stripe 计费（订阅 + 用量）\n• 认证 + 基于角色的访问\n• 管理后台\n\n免费层包含 100 API 积分 — 无需信用卡。\n\n希望获得其他开发者的诚实反馈。`,
    hashtags: ['#SaaS', '#NextJS', '#AI', '#BuildInPublic', '#IndieHacker'],
    cta: '了解更多',
    emojis: ['💡', '🛠️', '🚀']
  },
  {
    id: 2,
    content: `坦诚地说，2024 年构建 SaaS：\n\n技术栈已经足够成熟，困难的部分不是代码 — 而是产品决策。\n\n所以我构建了 AI Empire：一系列 Next.js 14 模板，处理技术基础（认证、计费、AI API、后台），让你专注于核心。\n\n功能：\n✅ Groq 推理引擎\n✅ Stripe 订阅\n✅ 生产就绪的模板\n✅ 免费层 100 积分\n\n没有激进的营销。只是一个对开发者有用的工具。`,
    hashtags: ['#SaaS', '#WebDevelopment', '#AI', '#NextJS', '#Product'],
    cta: '了解更多',
    emojis: ['🎯', '📊', '💡']
  },
  {
    id: 3,
    content: `评估 AI API 选项的开发者快速比较：\n\n• OpenAI：$0.002/1K tokens (gpt-3.5-turbo)\n• Anthropic：$0.003/1K tokens (Claude 3 Haiku)\n• Groq：免费层可用，快速推理\n\nAI Empire 模板默认使用 Groq。\n\n100 免费积分测试。无锁定。\n\n你当前的 AI API 配置是什么？`,
    hashtags: ['#AI', '#LLM', '#GroqAI', '#OpenAI', '#DevTools'],
    cta: '试用免费层',
    emojis: ['📊', '🔍', '⚡']
  },
  {
    id: 4,
    content: `构建 AI Empire 学到的一点：\n\n开发者不想要另一个框架 — 他们想要能读、能改、能部署的功能代码。\n\n每个 AI Empire 模板：\n• 使用标准 Next.js 14 模式\n• 清晰的文件结构\n• 包含 Stripe + 认证 + AI API\n• 附带管理后台\n\n最好的代码是你能理解的代码。\n\n正在寻求社区反馈。`,
    hashtags: ['#WebDev', '#NextJS', '#CodeQuality', '#SaaS', '#AI'],
    cta: '查看模板',
    emojis: ['📖', '💡', '🔍']
  },
  {
    id: 5,
    content: `致独立开发者和独狼创始人：\n\n瓶颈不是编码能力 — 而是时间。\n\nAI Empire 提供：\n• 预构建的 Next.js 14 SaaS 模板\n• Groq AI API 集成（免费层）\n• Stripe 计费配置\n• 认证 + 管理后台\n\n选择模板，自定义产品层，部署。\n\n专注于用户，而不是基础设施。`,
    hashtags: ['#IndieHacker', '#SoloFounder', '#SaaS', '#NextJS', '#AI'],
    cta: '开始构建',
    emojis: ['⏱️', '🎯', '🚀']
  }
]

export const facebookPosts: Post[] = [
  {
    id: 1,
    content: `AI Empire 已上线 — 集成 AI API 的 Next.js 14 SaaS 模板市场。\n\n包含内容：\n• 6 个生产就绪的模板\n• Groq AI API 集成\n• Stripe 计费（订阅 + 用量）\n• 认证 + 管理后台\n• 免费层：100 API 积分\n\n无论你构建 AI 工具、市场还是后台 — 都有适合你的模板。`,
    hashtags: ['#NextJS', '#AI', '#SaaS', '#WebDev', '#Stripe'],
    cta: '探索模板',
    emojis: ['🚀', '💡', '✅']
  },
  {
    id: 2,
    content: `5 分钟内为你的 Next.js 应用添加 AI：\n\n1. 克隆 AI Empire 模板\n2. 添加你的 Groq API 密钥\n3. 使用内置 /api/chat 端点\n4. 自定义 UI\n5. 部署到 Vercel\n\n免费层提供 100 积分用于测试。`,
    hashtags: ['#NextJS', '#Tutorial', '#AI', '#GroqAI', '#WebDev'],
    cta: '跟随指南',
    emojis: ['📝', '⚡', '🎯']
  },
  {
    id: 3,
    content: `构建了有用的东西：AI Empire。\n\n这是 Next.js 14 SaaS 模板的集合：\n• Groq AI API（快速推理）\n• Stripe 订阅\n• 认证 + 角色\n• 管理后台\n\n目标受众：独立开发者、小团队、任何构建 SaaS 产品的人。\n\n欢迎反馈 — 什么会让它对你更有用？`,
    hashtags: ['#BuildInPublic', '#SaaS', '#NextJS', '#AI', '#IndieHacker'],
    cta: '提供反馈',
    emojis: ['🔨', '💬', '🛠️']
  },
  {
    id: 4,
    content: `Stripe 集成，正确实现。\n\n每个 AI Empire 模板包含：\n✅ 订阅计费（月/年）\n✅ 按用量计费\n✅ 客户门户\n✅ Webhook 处理\n✅ 默认启用测试模式\n\n无需从零配置支付。`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#WebDev'],
    cta: '查看实际效果',
    emojis: ['💳', '✅', '🔒']
  },
  {
    id: 5,
    content: `AI Empire 免费层：\n• 100 API 积分\n• Groq 推理引擎\n• 无需信用卡\n• 包含所有模板\n• 社区支持\n\n升级到 Pro 获得更多积分和优先支持。\n\n在 ai-empire-steel.vercel.app 试用`,
    hashtags: ['#FreeTier', '#AI', '#SaaS', '#NextJS', '#GroqAI'],
    cta: '免费开始',
    emojis: ['🆓', '🚀', '💡']
  }
]

export const redditPosts: Post[] = [
  {
    id: 1,
    content: `构建了集成 Groq AI API 的 Next.js 14 SaaS 模板市场\n\n你好 r/webdev — 我一直在开发 AI Empire，一个用于构建 SaaS 产品的生产就绪 Next.js 14 模板集合。\n\n包含内容：\n• 6 个模板（saas-starter, marketplace, dashboard, blog, portfolio, landing）\n• Groq AI API 集成（免费层：100 积分）\n• Stripe 计费（订阅 + 用量）\n• 认证 + 基于角色的访问\n• 管理后台\n\n所有模板使用 App Router、TypeScript 和 Tailwind CSS。\n\n正在寻求诚实反馈 — 什么会让它更有用？`,
    hashtags: ['#webdev', '#nextjs', '#saas'],
    cta: '探索',
    emojis: ['🚀', '💡']
  },
  {
    id: 2,
    content: `Groq AI API 惊人地快 — 添加到我的 Next.js 14 SaaS 模板中\n\n我一直在测试 Groq 推理，它确实令人印象深刻：\n• Llama 3.1 8B：~500 tokens/sec\n• Mixtral 8x7B：~300 tokens/sec\n\n我构建了 AI Empire 来简化在 Next.js 应用中集成 Groq。模板包含：\n• /api/chat（流式）\n• /api/completions（结构化输出）\n• /api/analyze（文档处理）\n\n免费层：100 积分。无需信用卡。\n\n还有人用 Groq 吗？你的体验如何？`,
    hashtags: ['#nextjs', '#ai', '#groqai'],
    cta: '试用',
    emojis: ['⚡', '🤖']
  },
  {
    id: 3,
    content: `r/nextjs — 预配置 Stripe 计费的 Next.js 14 SaaS 模板\n\n我经常看到关于 Next.js 中 Stripe 集成困难的帖子。我构建了 AI Empire 来解决这个问题。\n\n每个模板包含：\n• 订阅计费（月/年）\n• 按用量计费支持\n• 客户门户\n• Webhook 处理\n• 测试模式启用\n\n外加 Groq AI API 集成和认证。\n\n全部使用 TypeScript、App Router、Tailwind。欢迎反馈。`,
    hashtags: ['#nextjs', '#stripe', '#saas'],
    cta: '看看',
    emojis: ['💳', '🔧']
  },
  {
    id: 4,
    content: `r/SaaS — 寻求关于我的模板市场的诚实反馈\n\n我构建了 AI Empire：一个集成 AI API 的 Next.js 14 SaaS 模板集合。\n\n运作良好的方面：\n• 6 个具有一致代码质量的模板\n• Groq AI 集成（免费层）\n• 包含 Stripe 计费\n• 认证 + 管理后台\n\n不确定的方面：\n• 定价模型（目前免费层 + Pro）\n• 模板选择（目前 6 个）\n• 文档完整性\n\n欢迎诚实反馈。你会为 SaaS 模板市场付多少钱？`,
    hashtags: ['#saas', '#feedback', '#nextjs'],
    cta: '分享你的看法',
    emojis: ['💬', '🔍']
  },
  {
    id: 5,
    content: `构建了集成 Groq AI + Stripe 的 Next.js 14 SaaS 模板 — 分享以获取反馈\n\nAI Empire 是一个用于 SaaS 产品的模板市场。每个模板包含：\n\n• Next.js 14 App Router\n• TypeScript + Tailwind\n• Groq AI API（免费层：100 积分）\n• Stripe 计费\n• 认证 + 角色\n• 管理后台\n\n目标：想快速发布而不重新发明轮子的独立开发者和小团队。\n\n你希望 SaaS 模板包含什么功能？`,
    hashtags: ['#nextjs', '#saas', '#indiehackers'],
    cta: '探索',
    emojis: ['📦', '🚀']
  }
]
