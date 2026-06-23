import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'en',
  productDescriptionShort:
    'AI Empire is a developer platform that combines professional Next.js 14 templates with a unified AI API (Groq and Gemini), Stripe billing, and authentication — enabling developers to build and deploy AI-powered SaaS products faster.',
  productDescriptionLong:
    'AI Empire provides a complete toolkit for building AI-powered SaaS products. The platform offers production-ready Next.js 14 templates — including NeuraStore (e-commerce), NeuraBlog (content publishing), and NeuraPortfolio (developer portfolio) — each with modern responsive design, dark mode, and SEO optimization built in.\n\nAll templates integrate with AI Empire\'s unified API, which provides access to Groq and Gemini models through a single endpoint. The platform also includes Stripe billing integration, authentication, and an admin dashboard, reducing the typical SaaS development timeline from months to days.\n\nAI Empire serves developers, indie hackers, startup founders, and small-to-medium businesses who want to launch AI-powered products without building infrastructure from scratch. The platform operates on a freemium model: the AI API offers a free tier with 100 credits, and templates are available for individual purchase (€19–€29) or as a complete bundle (€299).',
  keyFeatures: [
    'Unified AI API — Access Groq and Gemini models through a single endpoint',
    'Professional Next.js 14 templates — NeuraStore, NeuraBlog, NeuraPortfolio, and more',
    'Stripe billing integration — Payments configured out of the box',
    'Authentication included — User management without third-party setup',
    'Admin dashboard — Manage users, analytics, and content',
    'Free tier — 100 API credits on signup, no credit card required',
    'Responsive design — Mobile-first templates with dark mode',
    'SEO optimization — Meta tags, structured data, and performance optimization',
    'Vercel-ready — One-click deployment for all templates',
    'JavaScript and Python SDKs — Developer-friendly integration',
  ],
  pricingTable: [
    {
      name: 'Free Tier',
      price: '€0',
      description: 'Get started with AI APIs at no cost',
      features: [
        '100 AI API credits',
        'Groq and Gemini access',
        'REST API + SDKs',
        'Community support',
        'No credit card required',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Professional blog template for Next.js 14',
      features: [
        'MDX support',
        'Dark mode',
        'RSS feed',
        'SEO optimization',
        'Newsletter integration',
        'One-time purchase',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Complete e-commerce template for Next.js 14',
      features: [
        'Stripe payments',
        'Cart management',
        'Admin dashboard',
        'AI product recommendations',
        'Responsive design',
        'One-time purchase',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Developer portfolio template for Next.js 14',
      features: [
        'Framer Motion animations',
        'Dark mode',
        'Contact form',
        'Responsive design',
        'SEO optimization',
        'One-time purchase',
      ],
    },
    {
      name: 'Full Bundle',
      price: '€299',
      description: 'All templates plus priority support',
      features: [
        'All 6 templates',
        'Priority support',
        'Free updates',
        'Early access to new templates',
        'Commercial license',
        'Save €400+ vs individual',
      ],
    },
  ],
  founderQuote: {
    text: 'We built AI Empire because we believe every developer should be able to build AI-powered products without spending months on infrastructure. Our templates and API let you focus on what matters — your product and your users.',
    attribution: 'AI Empire Team',
    title: 'Founders of AI Empire',
  },
  logoUsage: {
    primaryUsage: 'Use the AI Empire logo on a white or dark background with sufficient contrast.',
    clearSpace: 'Maintain a minimum clear space equal to the height of the "A" in the logo on all sides.',
    minimumSize: 'The logo should not be reproduced smaller than 120px wide (digital) or 30mm (print).',
    donts: [
      'Do not stretch, rotate, or distort the logo',
      'Do not change the logo colors',
      'Do not place the logo on busy backgrounds without a container',
      'Do not add effects such as shadows, glows, or gradients to the logo',
      'Do not rearrange or modify the logo elements',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire is a developer platform that provides professional Next.js 14 templates with integrated AI APIs (Groq and Gemini), Stripe billing, and authentication. Founded to help developers build AI-powered SaaS products faster, AI Empire serves developers, indie hackers, and startup founders worldwide. The platform offers a free API tier and templates starting at €19. For more information, visit ai-empire-steel.vercel.app.',
};
