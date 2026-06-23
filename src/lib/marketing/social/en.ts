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
    content: `Built with Next.js 14 + Groq AI API\n\nAI Empire gives you:\n• Production-ready SaaS templates\n• Groq-powered inference (fast)\n• Stripe billing out of the box\n• Free tier: 100 API credits\n\nStart shipping today.`,
    hashtags: ['#NextJS14', '#AI', '#SaaS', '#GroqAI', '#WebDev'],
    cta: 'Try it free',
    emojis: ['⚡', '🚀', '💡']
  },
  {
    id: 2,
    content: `Your SaaS stack, pre-built:\n\n✅ Next.js 14 App Router\n✅ Groq AI API integration\n✅ Stripe subscriptions\n✅ Auth + admin dashboard\n\nPick a template, customize, deploy.`,
    hashtags: ['#NextJS', '#SaaS', '#Stripe', '#FullStack', '#DevTools'],
    cta: 'Browse templates',
    emojis: ['✅', '🔧', '🎯']
  },
  {
    id: 3,
    content: `Integrating AI into your app shouldn't take weeks.\n\nWith AI Empire's Groq-powered API:\n• /api/chat — streaming responses\n• /api/completions — structured output\n• /api/analyze — document processing\n\nAll in the Next.js 14 templates.`,
    hashtags: ['#AI', '#NextJS', '#GroqAPI', '#API', '#WebDev'],
    cta: 'See the docs',
    emojis: ['🤖', '⚡', '📋']
  },
  {
    id: 4,
    content: `Stripe integration included in every AI Empire template.\n\n• Subscription billing\n• Webhook handling\n• Customer portal\n• Usage-based pricing support\n\nNo 3rd-party auth libs needed for payments.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#Billing'],
    cta: 'Start with free tier',
    emojis: ['💳', '💰', '🔒']
  },
  {
    id: 5,
    content: `Shipped a Next.js 14 SaaS template marketplace.\n\nWhat's included:\n• 6 production templates\n• Groq AI API (free tier: 100 credits)\n• Stripe billing\n• Auth + role-based access\n• Admin dashboard\n\nOpen to feedback.`,
    hashtags: ['#BuildInPublic', '#NextJS14', '#SaaS', '#Marketplace', '#DevTools'],
    cta: 'Check it out',
    emojis: ['🔨', '🛠️', '🚀']
  },
  {
    id: 6,
    content: `FAQ: "How does the free tier work?"\n\n• 100 API credits to start\n• Groq-powered inference\n• No credit card required\n• Upgrade when you're ready\n\nBuilt for indie hackers and small teams.`,
    hashtags: ['#FreeTier', '#IndieHacker', '#SaaS', '#AI', '#GroqAI'],
    cta: 'Start free',
    emojis: ['❓', '🆓', '💡']
  },
  {
    id: 7,
    content: `Next.js 14 templates + Groq AI + Stripe = production SaaS in days, not months.\n\nAI Empire handles the boilerplate so you focus on your product.\n\nTemplates: saas-starter, marketplace, dashboard, blog, portfolio, landing.`,
    hashtags: ['#NextJS14', '#Templates', '#AI', '#SaaS', '#GroqAI'],
    cta: 'Explore templates',
    emojis: ['📦', '⚡', '🎯']
  },
  {
    id: 8,
    content: `B2B SaaS founders: the hardest part is getting from 0 to 1.\n\nAI Empire gives you:\n• Pre-built auth + billing\n• Groq AI APIs ready to use\n• Admin dashboard\n• Stripe integration\n\nFocus on your users, not boilerplate.`,
    hashtags: ['#B2B', '#SaaS', '#Founders', '#NextJS', '#AI'],
    cta: 'Learn more',
    emojis: ['🏗️', '🔑', '🚀']
  },
  {
    id: 9,
    content: `Groq AI API benchmarks:\n\n• Llama 3.1 8B: ~500 tokens/sec\n• Mixtral 8x7B: ~300 tokens/sec\n• Gemma 7B: ~600 tokens/sec\n\nAll available through AI Empire templates.\n\nFast inference, no GPU required.`,
    hashtags: ['#GroqAI', '#AI', '#LLM', '#Performance', '#NextJS'],
    cta: 'Try it out',
    emojis: ['⚡', '📊', '🚀']
  },
  {
    id: 10,
    content: `AI Empire v1.0 is live.\n\nWhat we built:\n• 6 Next.js 14 SaaS templates\n• Groq AI API integration\n• Stripe billing (subscriptions + usage)\n• Auth + RBAC\n• Admin dashboard\n\nFree tier available. Feedback welcome.`,
    hashtags: ['#Launch', '#NextJS14', '#SaaS', '#AI', '#Stripe'],
    cta: 'Get started',
    emojis: ['🎉', '🚀', '💻']
  }
]

export const linkedinPosts: Post[] = [
  {
    id: 1,
    content: `I've been building AI Empire — a Next.js 14 SaaS template marketplace with integrated AI APIs.\n\nThe idea: most SaaS projects spend weeks on auth, billing, and boilerplate before writing a single line of product code.\n\nAI Empire ships with:\n• Next.js 14 App Router templates\n• Groq AI API integration\n• Stripe billing (subscriptions + usage-based)\n• Auth + role-based access\n• Admin dashboard\n\nThe free tier includes 100 API credits — no credit card required.\n\nI'd love honest feedback from fellow builders.`,
    hashtags: ['#SaaS', '#NextJS', '#AI', '#BuildInPublic', '#IndieHacker'],
    cta: 'Check it out',
    emojis: ['💡', '🛠️', '🚀']
  },
  {
    id: 2,
    content: `Honest take on building SaaS in 2024:\n\nThe technology stack is mature enough that the hard part isn't the code — it's the product decisions.\n\nThat's why I built AI Empire: a collection of Next.js 14 templates that handle the technical foundation (auth, billing, AI APIs, dashboards) so you can focus on what matters.\n\nFeatures:\n✅ Groq-powered AI inference\n✅ Stripe subscriptions\n✅ Production-ready templates\n✅ Free tier with 100 credits\n\nNo hype. Just a useful tool for developers.`,
    hashtags: ['#SaaS', '#WebDevelopment', '#AI', '#NextJS', '#Product'],
    cta: 'Learn more',
    emojis: ['🎯', '📊', '💡']
  },
  {
    id: 3,
    content: `Quick comparison for developers evaluating AI API options:\n\n• OpenAI: $0.002/1K tokens (gpt-3.5-turbo)\n• Anthropic: $0.003/1K tokens (Claude 3 Haiku)\n• Groq: free tier available, fast inference\n\nAI Empire templates work with Groq out of the box.\n\n100 free credits to test. No lock-in.\n\nWhat's your current AI API setup?`,
    hashtags: ['#AI', '#LLM', '#GroqAI', '#OpenAI', '#DevTools'],
    cta: 'Try the free tier',
    emojis: ['📊', '🔍', '⚡']
  },
  {
    id: 4,
    content: `One thing I've learned building AI Empire:\n\nDevelopers don't want another framework — they want working code they can read, modify, and ship.\n\nEvery AI Empire template:\n• Uses standard Next.js 14 patterns\n• Has clear file structure\n• Includes Stripe + auth + AI APIs\n• Comes with admin dashboard\n\nThe best code is code you understand.\n\nLooking for feedback from the community.`,
    hashtags: ['#WebDev', '#NextJS', '#CodeQuality', '#SaaS', '#AI'],
    cta: 'See the templates',
    emojis: ['📖', '💡', '🔍']
  },
  {
    id: 5,
    content: `For indie hackers and solo founders:\n\nThe bottleneck isn't coding skill — it's time.\n\nAI Empire provides:\n• Pre-built Next.js 14 SaaS templates\n• Groq AI API integration (free tier)\n• Stripe billing setup\n• Auth + admin dashboard\n\nPick a template, customize the product layer, deploy.\n\nFocus on your users, not infrastructure.`,
    hashtags: ['#IndieHacker', '#SoloFounder', '#SaaS', '#NextJS', '#AI'],
    cta: 'Start building',
    emojis: ['⏱️', '🎯', '🚀']
  }
]

export const facebookPosts: Post[] = [
  {
    id: 1,
    content: `AI Empire is live — a Next.js 14 SaaS template marketplace with AI APIs built in.\n\nWhat's included:\n• 6 production-ready templates\n• Groq AI API integration\n• Stripe billing (subscriptions + usage)\n• Auth + admin dashboard\n• Free tier: 100 API credits\n\nWhether you're building an AI tool, marketplace, or dashboard — there's a template for you.`,
    hashtags: ['#NextJS', '#AI', '#SaaS', '#WebDev', '#Stripe'],
    cta: 'Explore templates',
    emojis: ['🚀', '💡', '✅']
  },
  {
    id: 2,
    content: `How to add AI to your Next.js app in 5 minutes:\n\n1. Clone an AI Empire template\n2. Add your Groq API key\n3. Use the pre-built /api/chat endpoint\n4. Customize the UI\n5. Deploy to Vercel\n\nThe free tier gives you 100 credits to test everything.`,
    hashtags: ['#NextJS', '#Tutorial', '#AI', '#GroqAI', '#WebDev'],
    cta: 'Follow the guide',
    emojis: ['📝', '⚡', '🎯']
  },
  {
    id: 3,
    content: `Built something useful: AI Empire.\n\nIt's a collection of Next.js 14 SaaS templates with:\n• Groq AI API (fast inference)\n• Stripe subscriptions\n• Auth + roles\n• Admin dashboard\n\nTarget audience: indie hackers, small teams, anyone building SaaS products.\n\nFeedback welcome — what would make this more useful for you?`,
    hashtags: ['#BuildInPublic', '#SaaS', '#NextJS', '#AI', '#IndieHacker'],
    cta: 'Give feedback',
    emojis: ['🔨', '💬', '🛠️']
  },
  {
    id: 4,
    content: `Stripe integration done right.\n\nEvery AI Empire template includes:\n✅ Subscription billing (monthly/yearly)\n✅ Usage-based pricing\n✅ Customer portal\n✅ Webhook handling\n✅ Test mode out of the box\n\nNo need to wire up payments from scratch.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#WebDev'],
    cta: 'See it in action',
    emojis: ['💳', '✅', '🔒']
  },
  {
    id: 5,
    content: `AI Empire free tier:\n• 100 API credits\n• Groq-powered inference\n• No credit card required\n• All templates included\n• Community support\n\nUpgrade to Pro for more credits and priority support.\n\nTry it at ai-empire-steel.vercel.app`,
    hashtags: ['#FreeTier', '#AI', '#SaaS', '#NextJS', '#GroqAI'],
    cta: 'Start free',
    emojis: ['🆓', '🚀', '💡']
  }
]

export const redditPosts: Post[] = [
  {
    id: 1,
    content: `I built a Next.js 14 SaaS template marketplace with Groq AI API integration\n\nHi r/webdev — I've been working on AI Empire, a collection of production-ready Next.js 14 templates for building SaaS products.\n\nWhat's included:\n• 6 templates (saas-starter, marketplace, dashboard, blog, portfolio, landing)\n• Groq AI API integration (free tier: 100 credits)\n• Stripe billing (subscriptions + usage-based)\n• Auth + role-based access\n• Admin dashboard\n\nAll templates use the App Router, TypeScript, and Tailwind CSS.\n\nLooking for honest feedback — what would make this more useful?`,
    hashtags: ['#webdev', '#nextjs', '#saas'],
    cta: 'Check it out',
    emojis: ['🚀', '💡']
  },
  {
    id: 2,
    content: `Groq AI API is surprisingly fast — added it to my Next.js 14 SaaS templates\n\nI've been testing Groq for inference and it's genuinely impressive:\n• Llama 3.1 8B at ~500 tokens/sec\n• Mixtral 8x7B at ~300 tokens/sec\n\nI built AI Empire to make it easy to add Groq to Next.js apps. Templates include:\n• /api/chat (streaming)\n• /api/completions (structured output)\n• /api/analyze (document processing)\n\nFree tier: 100 credits. No credit card required.\n\nAnyone else using Groq? What's your experience?`,
    hashtags: ['#nextjs', '#ai', '#groqai'],
    cta: 'Try it out',
    emojis: ['⚡', '🤖']
  },
  {
    id: 3,
    content: `r/nextjs — Next.js 14 SaaS template with Stripe billing pre-configured\n\nI keep seeing posts about people struggling with Stripe integration in Next.js. Built AI Empire to solve this.\n\nEvery template includes:\n• Subscription billing (monthly/yearly)\n• Usage-based pricing support\n• Customer portal\n• Webhook handling\n• Test mode enabled\n\nPlus Groq AI API integration and auth.\n\nAll TypeScript, App Router, Tailwind. Would appreciate feedback.`,
    hashtags: ['#nextjs', '#stripe', '#saas'],
    cta: 'Take a look',
    emojis: ['💳', '🔧']
  },
  {
    id: 4,
    content: `r/SaaS — Honest feedback wanted on my template marketplace\n\nI built AI Empire: a collection of Next.js 14 SaaS templates with AI APIs.\n\nWhat's working:\n• 6 templates with consistent code quality\n• Groq AI integration (free tier)\n• Stripe billing included\n• Auth + admin dashboard\n\nWhat I'm unsure about:\n• Pricing model (currently free tier + Pro)\n• Template selection (6 right now)\n• Documentation completeness\n\nHonest feedback appreciated. What would you pay for in a SaaS template marketplace?`,
    hashtags: ['#saas', '#feedback', '#nextjs'],
    cta: 'Share your thoughts',
    emojis: ['💬', '🔍']
  },
  {
    id: 5,
    content: `Built a Next.js 14 SaaS template with Groq AI + Stripe — sharing for feedback\n\nAI Empire is a template marketplace for SaaS products. Each template includes:\n\n• Next.js 14 App Router\n• TypeScript + Tailwind\n• Groq AI API (free tier: 100 credits)\n• Stripe billing\n• Auth + roles\n• Admin dashboard\n\nI'm targeting indie hackers and small teams who want to ship fast without reinventing the wheel.\n\nWhat features would you want in a SaaS template?`,
    hashtags: ['#nextjs', '#saas', '#indiehackers'],
    cta: 'Check it out',
    emojis: ['📦', '🚀']
  }
]
