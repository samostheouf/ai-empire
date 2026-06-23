import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Onboarding Sequence — 5 days',
  type: 'onboarding',
  duration: '5 days',
  trigger: 'New user signed up',
  goal: 'Activate user: first API call + first template purchase',
  emails: [
    {
      day: 0,
      subject: 'Welcome to AI Empire — Your AI API is ready',
      preview: 'You have 100 free credits. Start now.',
      body: `Hi [First Name],

Welcome to AI Empire!

You now have access to:
- 100 free AI credits
- GPT-4, Groq, and Gemini APIs
- Professional Next.js 14 templates
- Technical support

Your API key: [API_KEY]
Dashboard: https://ai-empire-steel.vercel.app/dashboard

Next step: Make your first API call in 2 minutes.

1. Go to your dashboard
2. Copy your API key
3. Run this curl:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hello, how are you?"}'

That's it! You now have access to AI.

See you soon,
The AI Empire team`,
      cta: 'Launch my first test',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 tips to get the most out of AI Empire',
      preview: 'Advice to go further.',
      body: `Hi [First Name],

Yesterday, you created your account. Today, here are 3 tips to go further:

Tip 1: Explore the templates
Our templates are designed to be immediately usable. Start with NeuraBlog ($19) or NeuraStore ($29).

Tip 2: Use the AI APIs
Generate content, analyze text, create a chatbot. The APIs are free until you use your 100 credits.

Tip 3: Integrate into your project
Our tutorials show you how to integrate AI Empire into a Next.js project in 5 minutes.

Tutorials: https://ai-empire-steel.vercel.app/docs

Happy exploring!
The AI Empire team`,
      cta: 'View tutorials',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'The perfect template for your project',
      preview: 'Discover our templates suited to your needs.',
      body: `Hi [First Name],

Want to build a SaaS? Here's the template you need:

E-commerce: NeuraStore ($29)
Next.js 14 e-commerce template with cart, Stripe payments, admin dashboard.

Blog: NeuraBlog ($19)
Premium blog with SEO optimization, commenting system, built-in newsletter.

Portfolio: NeuraPortfolio ($29)
Professional portfolio with animations, forms, dark mode.

Complete bundle: 6 templates ($299)
All our templates + priority support + free updates.

Use code WELCOME10 for 10% off your first purchase.

The AI Empire team`,
      cta: 'Discover templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'How to launch a SaaS quickly with AI Empire',
      preview: 'Build your project with our ready-to-use templates.',
      body: `Hi [First Name],

Launching a SaaS no longer requires months of development.

With AI Empire, here's what you can achieve:
- A complete e-commerce site in 24 hours with NeuraStore ($29)
- Stripe already integrated and ready to accept payments
- Deploy on Vercel in a few clicks
- Admin dashboard included in the template

NeuraStore includes:
- Functional shopping cart
- Product and inventory management
- Secure payments via Stripe
- Complete admin interface
- Responsive design and dark mode

Start by choosing the template that fits your project.

The AI Empire team`,
      cta: 'See templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '20% off your first template',
      preview: 'A welcome offer for you.',
      body: `Hi [First Name],

Thanks for your loyalty! Here's a welcome discount:
20% off your first template.

Code: WELCOME20

Options:
- NeuraBlog: $19 -> $15.20
- NeuraStore: $29 -> $23.20
- NeuraPortfolio: $29 -> $23.20
- Complete bundle: $299 -> $239.20

Now is the time to take action.

The AI Empire team`,
      cta: 'Get 20% off',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Nurture Sequence — 7 days',
  type: 'nurture',
  duration: '7 days',
  trigger: 'User signed up but hasn\'t purchased yet',
  goal: 'Convert free user to paying customer',
  emails: [
    {
      day: 0,
      subject: 'Here\'s what you can build with AI Empire',
      preview: 'Concrete examples to inspire you.',
      body: `Hi [First Name],

You have an AI Empire account but you haven't explored everything you can create yet.

Here are 5 concrete projects:

1. SEO-optimized blog: NeuraBlog
2. E-commerce with Stripe: NeuraStore
3. Professional portfolio: NeuraPortfolio
4. AI chatbot: Integrate our APIs
5. Complete SaaS: Premium bundle

Each project can be completed in 24 hours.

The AI Empire team`,
      cta: 'Explore projects',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'The #1 mistake indie hackers make',
      preview: 'How to avoid wasting time.',
      body: `Hi [First Name],

The #1 mistake indie hackers make: building everything from scratch.

You spend weeks coding:
- Authentication (AI Empire does it for you)
- Payments (Stripe is already integrated)
- Dashboard (It's already built)
- Design (The templates are professional)

Meanwhile, your competitors are launching their product.

AI Empire saves you 6 months of development.

The AI Empire team`,
      cta: 'See templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Thousands of developers already use AI Empire',
      preview: 'Join a growing community.',
      body: `Hi [First Name],

Thousands of developers already trust AI Empire.

Here's what they've built:
- Dozens of e-commerce SaaS
- Professional blogs
- Creative portfolios
- AI chatbots

And you? What are you going to build?

The AI Empire team`,
      cta: 'Join the community',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'AI Empire ROI in numbers',
      preview: 'Numbers that speak for themselves.',
      body: `Hi [First Name],

Here's the real ROI of AI Empire:

- Average cost: $50 (1 template + AI credits)
- Time saved: 6 months of development
- One client at $50/month is enough to recoup your investment

The rest? Pure profit.

The AI Empire team`,
      cta: 'View pricing',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Discover NeuraStore — The e-commerce template',
      preview: 'Our most popular template.',
      body: `Hi [First Name],

NeuraStore is our most popular e-commerce template.

What it includes:
- Shopping cart
- Stripe payments
- Product management
- Admin dashboard
- Responsive design
- Dark mode

Price: $29 (instead of $500+ for a developer)

The AI Empire team`,
      cta: 'Discover NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'How to integrate AI Empire in 5 minutes',
      preview: 'A quick tutorial to get started.',
      body: `Hi [First Name],

Want to integrate AI Empire into your project? Here's how:

1. Install the template
npx create-next-app@latest my-saas --template ai-empire

2. Configure your APIs
Copy your API key into .env.local

3. Deploy on Vercel
git push and your site is live

That's it! In 5 minutes, you have your SaaS.

The AI Empire team`,
      cta: 'View tutorial',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Early adopters offer: 30% off templates',
      preview: 'An offer for early users.',
      body: `Hi [First Name],

You've been with us for [NUMBER] days.

To thank you, here's an offer:
30% off all templates.

Code: EARLY30

Options:
- NeuraBlog: $19 -> $13.30
- NeuraStore: $29 -> $20.30
- NeuraPortfolio: $29 -> $20.30
- Complete bundle: $299 -> $209.30

The AI Empire team`,
      cta: 'Get 30% off',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Win-Back Sequence — Reactivation',
  type: 'winback',
  duration: '21 days',
  trigger: 'User inactive for 30 days',
  goal: 'Reactivate inactive user and retain them',
  emails: [
    {
      day: 0,
      subject: '[First Name], we miss you',
      preview: 'We have news for you.',
      body: `Hi [First Name],

We noticed you haven't used AI Empire in a while.

Can we help?

- Need a tutorial?
- Technical issue?
- Missing feature?

We're here for you. Reply to this email — we read everything.

The AI Empire team`,
      cta: 'Return to dashboard',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Here\'s what you missed at AI Empire',
      preview: 'New features you\'ll love.',
      body: `Hi [First Name],

Since your last visit, we've added:

- New templates (NeuraBlog, NeuraStore)
- Improved AI APIs (GPT-4, Groq, Gemini)
- Redesigned dashboard
- Optimized design

You haven't missed anything — now is the time to come back.

The AI Empire team`,
      cta: 'Discover new features',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 free credits to come back',
      preview: 'A gift to let you know we\'re thinking of you.',
      body: `Hi [First Name],

To let you know we're thinking of you, here are 50 free AI credits.

Your balance: +50 credits
Valid for 30 days

Use them to:
- Generate content
- Analyze text
- Create a chatbot
- Test our APIs

The AI Empire team`,
      cta: 'Claim my credits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'Your credits expire in 16 days',
      preview: 'Don\'t forget to use them.',
      body: `Hi [First Name],

You have 50 free credits that expire in 16 days.

Expires on [DATE]

Use them to:
- Create your first project
- Test our APIs
- Explore AI Empire

The AI Empire team`,
      cta: 'Use my credits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'Your credits are expiring soon',
      preview: 'Don\'t forget to use them.',
      body: `Hi [First Name],

Your 50 free credits expire in 7 days.

Expires on [DATE]

After that, you'll lose your credits.

This is your last chance to use them.

The AI Empire team`,
      cta: 'Use my credits',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Upsell Sequence — Pro Plan Upgrade',
  type: 'upsell',
  duration: '14 days',
  trigger: 'User with more than 100 API calls or 30 days of activity',
  goal: 'Convert free user to Pro customer',
  emails: [
    {
      day: 0,
      subject: '[First Name], you\'re about to hit the limit',
      preview: 'Your usage is increasing — here\'s how to level up.',
      body: `Hi [First Name],

Good news: you're actively using AI Empire!

Here's your current usage:
- API calls: [NUMBER]/100
- Credits remaining: [NUMBER]
- Days of activity: [NUMBER]

You're about to hit the free plan limit.

The Pro plan gives you:
- Unlimited API calls
- Priority access
- Dedicated support
- Premium templates

The AI Empire team`,
      cta: 'Upgrade to Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'The Pro plan: what you\'re missing',
      preview: 'Exclusive features.',
      body: `Hi [First Name],

Here's what you're missing with the free plan:

Pro Plan ($99/month):
- Unlimited API calls
- Priority access to new features
- Dedicated support (response within 2h)
- Premium templates ($199 value)
- Advanced analytics dashboard
- Custom webhook API

The AI Empire team`,
      cta: 'Discover Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '20% off your first Pro month',
      preview: 'An offer for you.',
      body: `Hi [First Name],

To thank you for your loyalty, here's an offer:
20% off your first Pro month.

Instead of $99/month -> $79/month

Code: PRO20

Upgrade to Pro:
- Unlimited API calls
- Dedicated support
- Premium templates
- Advanced analytics

The AI Empire team`,
      cta: 'Activate my offer',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'How Pro users optimize their costs',
      preview: 'A look at Pro plan benefits.',
      body: `Hi [First Name],

Here's how our Pro users optimize their costs:

With the Pro plan ($99/month):
- Reduced AI costs thanks to optimized APIs
- Productivity gains with premium templates
- Dedicated support to resolve issues quickly
- Advanced analytics to track your performance

The Pro plan is designed for serious projects that need more power.

The AI Empire team`,
      cta: 'Upgrade to Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '20% off the Pro plan — Last opportunity',
      preview: 'Don\'t miss this offer.',
      body: `Hi [First Name],

Your 20% off offer on the Pro plan is still available.

$79/month instead of $99/month

Upgrade to Pro:
- Unlimited API calls
- Dedicated support
- Premium templates
- Advanced analytics

This is a good opportunity to try the Pro plan at a reduced rate.

The AI Empire team`,
      cta: 'Get 20% off',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Thank you [First Name] — We\'re here if you change your mind',
      preview: 'No pressure. We\'re here for you.',
      body: `Hi [First Name],

We understand that the Pro plan may not be for you right now.

No worries. We're here if you change your mind.

In the meantime, you can still:
- Use the free plan (100 credits/month)
- Explore templates (starting at $19)
- Contact us if you have questions

We're here for you.

The AI Empire team`,
      cta: 'Contact us',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
