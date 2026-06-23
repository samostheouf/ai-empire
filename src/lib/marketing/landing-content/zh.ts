import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: '用 Next.js 14 和 AI 更快地交付 SaaS 产品',
    subheadline: '集成 Groq AI API、Stripe 计费和认证的生产就绪模板——专注于你的产品，而非样板代码。',
    ctaText: '免费开始'
  },
  features: [
    {
      title: 'Next.js 14 App Router 模板',
      description: '采用最新的 Next.js 模式构建。开箱即用的 TypeScript、Tailwind CSS 和服务器组件。'
    },
    {
      title: 'Groq AI API 集成',
      description: 'Groq 驱动的快速推理。包含流式聊天、结构化输出和文档分析端点。'
    },
    {
      title: 'Stripe 计费就绪',
      description: '订阅管理、基于使用量的定价、客户门户和 Webhook 处理——全部预配置。'
    },
    {
      title: '认证与角色管理',
      description: '内置基于角色访问控制的认证系统。基本流程无需第三方认证库。'
    },
    {
      title: '管理仪表板',
      description: '通过预构建的管理界面管理用户、查看分析和配置设置。'
    },
    {
      title: '提供免费层级',
      description: '从 100 个 API 积分开始。无需信用卡。需要更多时再升级。'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: '选择模板',
      description: '从 6 个生产就绪模板中选择：SaaS 启动器、市场、仪表板、博客、作品集或着陆页。'
    },
    {
      step: 2,
      title: '自定义你的产品',
      description: '添加业务逻辑、配置 Groq API 密钥并设置 Stripe。样板代码已经处理完毕。'
    },
    {
      step: 3,
      title: '部署并发布',
      description: '推送到 Vercel 或你偏好的平台。你的 SaaS 已准备好面向用户。'
    }
  ],
  faq: [
    {
      question: '免费层级是什么？',
      answer: '免费层级包含 100 个由 Groq AI 驱动的 API 积分。无需信用卡。你可以免费使用所有模板和基本功能。'
    },
    {
      question: '我需要自己的 API 密钥吗？',
      answer: '是的，你需要一个 Groq API 密钥（groq.com 提供免费层级）和一个 Stripe 账户用于计费。AI Empire 处理集成——你只需插入你的密钥。'
    },
    {
      question: '我可以将这些模板用于商业项目吗？',
      answer: '可以。你可以将 AI Empire 模板用于个人和商业项目。你在其基础上构建的代码归你所有。'
    },
    {
      question: '使用了哪些技术？',
      answer: 'Next.js 14（App Router）、TypeScript、Tailwind CSS、Groq AI API 用于推理、Stripe 用于支付，以及内置的基于角色访问控制的认证系统。'
    },
    {
      question: '有文档吗？',
      answer: '有。每个模板包含设置说明、API 参考和代码注释。我们还提供常见自定义模式的指南。'
    },
    {
      question: '与其他 SaaS 模板有何不同？',
      answer: 'AI Empire 专注于可运行的代码而非营销说辞。每个模板都是生产就绪的，包含 AI API 集成，并附带诚实的文档。没有虚假评价或夸大的统计数据。'
    }
  ]
}
