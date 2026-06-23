export interface LandingContent {
  hero: {
    headline: string
    subheadline: string
    ctaText: string
  }
  features: Array<{
    title: string
    description: string
  }>
  howItWorks: Array<{
    step: number
    title: string
    description: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export const landingContent: LandingContent = {
  hero: {
    headline: 'Ship SaaS Products Faster with Next.js 14 and AI',
    subheadline: 'Production-ready templates with Groq AI API, Stripe billing, and auth — built so you can focus on your product, not boilerplate.',
    ctaText: 'Start for free'
  },
  features: [
    {
      title: 'Next.js 14 App Router Templates',
      description: 'Built with the latest Next.js patterns. TypeScript, Tailwind CSS, and server components out of the box.'
    },
    {
      title: 'Groq AI API Integration',
      description: 'Fast inference powered by Groq. Includes streaming chat, structured completions, and document analysis endpoints.'
    },
    {
      title: 'Stripe Billing Ready',
      description: 'Subscription management, usage-based pricing, customer portal, and webhook handling — all pre-configured.'
    },
    {
      title: 'Authentication & Roles',
      description: 'Built-in auth with role-based access control. No third-party auth libraries needed for basic flows.'
    },
    {
      title: 'Admin Dashboard',
      description: 'Manage users, view analytics, and configure settings through a pre-built admin interface.'
    },
    {
      title: 'Free Tier Available',
      description: 'Start with 100 API credits. No credit card required. Upgrade when you need more.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Pick a Template',
      description: 'Choose from 6 production-ready templates: SaaS starter, marketplace, dashboard, blog, portfolio, or landing page.'
    },
    {
      step: 2,
      title: 'Customize Your Product',
      description: 'Add your business logic, configure your Groq API key, and set up Stripe. The boilerplate is already handled.'
    },
    {
      step: 3,
      title: 'Deploy and Ship',
      description: 'Push to Vercel or your preferred platform. Your SaaS is ready for users.'
    }
  ],
  faq: [
    {
      question: 'What is the free tier?',
      answer: 'The free tier includes 100 API credits powered by Groq AI. No credit card required. You can use all templates and basic features without paying.'
    },
    {
      question: 'Do I need my own API keys?',
      answer: 'Yes, you need a Groq API key (free tier available at groq.com) and a Stripe account for billing. AI Empire handles the integration — you just plug in your keys.'
    },
    {
      question: 'Can I use these templates for commercial projects?',
      answer: 'Yes. You can use AI Empire templates for personal and commercial projects. You own the code you build on top of them.'
    },
    {
      question: 'What technologies are used?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, Groq AI API for inference, Stripe for payments, and a pre-built auth system with role-based access.'
    },
    {
      question: 'Is there documentation?',
      answer: 'Yes. Each template includes setup instructions, API reference, and code comments. We also provide guides for common customization patterns.'
    },
    {
      question: 'How is this different from other SaaS templates?',
      answer: 'AI Empire focuses on working code over marketing claims. Every template is production-ready, includes AI API integration, and comes with honest documentation. No fake testimonials or inflated stats.'
    }
  ]
}
