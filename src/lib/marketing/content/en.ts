export interface BlogPostTemplate {
  title: string
  slug: string
  excerpt: string
  content: string
  tags: string[]
  category: string
  readingTime: number
}

export function generateBlogPostTemplate(data: {
  title: string
  topic: string
  targetAudience: string
}): BlogPostTemplate {
  return {
    title: data.title,
    slug: data.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-'),
    excerpt: `Discover how ${data.topic} can transform your development business.`,
    content: `
# ${data.title}

## Introduction

In this article, we'll explore how ${data.topic} can help you improve your productivity and create higher-performing applications.

## Why ${data.topic}?

${data.topic} has become essential for ${data.targetAudience} developers. Here are the main reasons:

### 1. Performance

Modern solutions deliver exceptional performance thanks to their optimized architecture.

### 2. Productivity

With the right tools and templates, you can reduce your development time by 60%.

### 3. Scalability

Your solution can grow with your business without compromising quality.

## How to get started?

### Step 1: Choose the right template

A good template saves you time while providing a solid foundation.

### Step 2: Customize to your needs

Adapt the code to your specific use case.

### Step 3: Deploy to production

With Next.js and Vercel, deployment is a breeze.

## Conclusion

${data.topic} is a major asset for modern developers. Start integrating these solutions into your projects today.

---

*Need help getting started? Check out our [premium templates](/templates) or contact our team.*
    `,
    tags: [data.topic, 'Next.js', 'Tailwind CSS', 'Web Development', 'SaaS'],
    category: 'Tutorial',
    readingTime: 5,
  }
}

export interface CaseStudyTemplate {
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: Array<{
    label: string
    value: string
  }>
}

export function generateCaseStudyTemplate(data: {
  clientName: string
  industry: string
  challenge: string
}): CaseStudyTemplate {
  return {
    title: `How ${data.clientName} transformed their business with NeuraAPI`,
    client: data.clientName,
    industry: data.industry,
    challenge: data.challenge,
    solution: `${data.clientName} integrated NeuraAPI's APIs and templates to automate their processes and improve productivity.`,
    results: [
      '60% reduction in development time',
      'Improved code quality',
      '3x faster time to production',
      'ROI achieved in 2 months',
    ],
    metrics: [
      { label: 'Development time', value: '-60%' },
      { label: 'Satisfaction rate', value: '95%' },
      { label: 'ROI', value: '300%' },
      { label: 'Time to production', value: '-75%' },
    ],
  }
}

export interface TutorialTemplate {
  title: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  prerequisites: string[]
  objectives: string[]
  steps: Array<{
    title: string
    content: string
    codeExample?: string
  }>
}

export function generateTutorialTemplate(data: {
  title: string
  topic: string
}): TutorialTemplate {
  return {
    title: data.title,
    level: 'intermediate',
    duration: '30 min',
    prerequisites: [
      'Basic knowledge of Next.js',
      'Understanding of React',
      'Node.js installed',
    ],
    objectives: [
      `Understand the basic concepts of ${data.topic}`,
      `Set up ${data.topic} in a Next.js project`,
      `Create a first implementation`,
    ],
    steps: [
      {
        title: 'Installation',
        content: 'Start by installing the necessary dependencies.',
        codeExample: 'npm install @neuraapi/sdk',
      },
      {
        title: 'Configuration',
        content: 'Configure your API key in the environment variables.',
        codeExample: 'NEXT_PUBLIC_NEURAAPI_KEY=your_key_here',
      },
      {
        title: 'Usage',
        content: 'Use the SDK in your React component.',
        codeExample: `import { NeuraAPI } from '@neuraapi/sdk'

const api = new NeuraAPI(process.env.NEXT_PUBLIC_NEURAAPI_KEY)

export default function MyComponent() {
  const generateContent = async () => {
    const result = await api.generate({
      prompt: 'Your prompt here',
    })
    return result
  }
}`,
      },
      {
        title: 'Deployment',
        content: 'Deploy your application on Vercel.',
        codeExample: 'vercel deploy',
      },
    ],
  }
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export function generateFAQContent(category: string): FAQItem[] {
  const faqs: Record<string, FAQItem[]> = {
    general: [
      {
        question: 'What is NeuraAPI?',
        answer: 'NeuraAPI is a platform that provides AI APIs and premium templates for developers. We help you launch your SaaS projects quickly.',
        category: 'general',
      },
      {
        question: 'How do I get an API key?',
        answer: 'Create a free account on our platform, then access your dashboard to retrieve your API key. You receive 100 free credits to get started.',
        category: 'general',
      },
      {
        question: 'What are the pricing options?',
        answer: 'We offer a free plan with 100 credits, a Starter plan at 29€/month, and a Pro plan at 99€/month. Visit our pricing page for more details.',
        category: 'pricing',
      },
    ],
    technical: [
      {
        question: 'How do I integrate NeuraAPI into my project?',
        answer: 'Use our npm SDK: npm install @neuraapi/sdk. Then, import and configure the SDK with your API key.',
        category: 'technical',
      },
      {
        question: 'Which frameworks are supported?',
        answer: 'NeuraAPI is compatible with Next.js, React, Vue.js, Angular, and any modern JavaScript/TypeScript framework.',
        category: 'technical',
      },
      {
        question: 'Are there rate limits?',
        answer: 'The free plan is limited to 10 requests/hour. Paid plans offer higher limits based on your needs.',
        category: 'technical',
      },
    ],
    billing: [
      {
        question: 'How does billing work?',
        answer: 'Billing is monthly. You can cancel at any time. Unused credits are not carried over.',
        category: 'billing',
      },
      {
        question: 'Do you accept credit card payments?',
        answer: 'Yes, we accept Visa, Mastercard, and American Express through our partner Stripe.',
        category: 'billing',
      },
      {
        question: 'How do I get a refund?',
        answer: 'Contact support@neuraapi.com within 30 days of your purchase for any refund requests.',
        category: 'billing',
      },
    ],
  }

  return faqs[category] || faqs.general
}
