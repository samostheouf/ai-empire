import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'zh',
  productDescriptionShort:
    'AI Empire 是一个开发者平台，将专业的 Next.js 14 模板与统一的 AI API（Groq 和 Gemini）、Stripe 支付和身份认证相结合，帮助开发者更快地构建和部署 AI 驱动的 SaaS 产品。',
  productDescriptionLong:
    'AI Empire 提供构建 AI 驱动 SaaS 产品的完整开发套件。平台提供生产就绪的 Next.js 14 模板——包括 NeuraStore（电商）、NeuraBlog（内容发布）和 NeuraPortfolio（开发者作品集）——每个模板都内置了现代化的响应式设计、暗色模式和 SEO 优化。\n\n所有模板都与 AI Empire 的统一 API 集成，通过一个端点即可访问 Groq 和 Gemini 模型。平台还包含 Stripe 支付集成、身份认证和管理后台，将典型的 SaaS 开发周期从数月缩短到数天。\n\nAI Empire 面向希望无需从零构建基础设施就能推出 AI 驱动产品的开发者、独立开发者、创业公司创始人和中小型企业。平台采用免费增值模式运营：AI API 提供包含 100 积分的免费层，模板可单独购买（€19–€29）或以完整套餐购买（€299）。',
  keyFeatures: [
    '统一 AI API——通过一个端点访问 Groq 和 Gemini 模型',
    '专业 Next.js 14 模板——NeuraStore、NeuraBlog、NeuraPortfolio 等',
    'Stripe 支付集成——开箱即用的支付配置',
    '内置身份认证——无需第三方设置即可管理用户',
    '管理后台——管理用户、数据分析和内容',
    '免费层——注册即送 100 API 积分，无需信用卡',
    '响应式设计——支持暗色模式的移动优先模板',
    'SEO 优化——Meta 标签、结构化数据和性能优化',
    'Vercel 就绪——所有模板一键部署',
    'JavaScript 和 Python SDK——开发者友好的集成',
  ],
  pricingTable: [
    {
      name: '免费层',
      price: '€0',
      description: '免费开始使用 AI API',
      features: [
        '100 AI API 积分',
        'Groq 和 Gemini 访问权限',
        'REST API + SDK',
        '社区支持',
        '无需信用卡',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Next.js 14 专业博客模板',
      features: [
        'MDX 支持',
        '暗色模式',
        'RSS 订阅',
        'SEO 优化',
        '邮件订阅集成',
        '一次性购买',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Next.js 14 完整电商模板',
      features: [
        'Stripe 支付',
        '购物车管理',
        '管理后台',
        'AI 商品推荐',
        '响应式设计',
        '一次性购买',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Next.js 14 开发者作品集模板',
      features: [
        'Framer Motion 动画',
        '暗色模式',
        '联系表单',
        '响应式设计',
        'SEO 优化',
        '一次性购买',
      ],
    },
    {
      name: '完整套餐',
      price: '€299',
      description: '所有模板加上优先支持',
      features: [
        '全部 6 个模板',
        '优先支持',
        '免费更新',
        '新模板抢先体验',
        '商业许可',
        '比单独购买节省 €400+',
      ],
    },
  ],
  founderQuote: {
    text: '我们创建 AI Empire 是因为我们相信每个开发者都应该能够在不花数月时间构建基础设施的情况下，构建 AI 驱动的产品。我们的模板和 API 让你能够专注于真正重要的东西——你的产品和你的用户。',
    attribution: 'AI Empire 团队',
    title: 'AI Empire 创始人',
  },
  logoUsage: {
    primaryUsage: '在白色或深色背景上使用 AI Empire 标志，确保足够的对比度。',
    clearSpace: '在所有方向上保持与标志中"A"字高度相等的最小留白区域。',
    minimumSize: '标志的数字版不应小于 120px 宽，印刷版不应小于 30mm。',
    donts: [
      '不要拉伸、旋转或扭曲标志',
      '不要更改标志颜色',
      '不要在复杂背景上无容器地放置标志',
      '不要为标志添加阴影、发光或渐变等效果',
      '不要重新排列或修改标志元素',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire 是一个开发者平台，提供集成了 AI API（Groq 和 Gemini）、Stripe 支付和身份认证的专业 Next.js 14 模板。AI Empire 旨在帮助开发者更快地构建 AI 驱动的 SaaS 产品，服务于全球开发者、独立开发者和创业公司创始人。平台提供免费 API 层和 €19 起的模板。了解更多信息，请访问 ai-empire-steel.vercel.app。',
};
