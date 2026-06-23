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
// PRODUCT LAUNCH CAMPAIGN
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Product Launch — AI Empire',
  type: 'product-launch',
  duration: '14 days',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'Generate 500 sign-ups and €3,000 in revenue in the first month',
  content: {
    headline: '🚀 New: The AI revolution for SaaS has arrived!',
    subheadline: 'Launch your SaaS in 24h with Next.js 14 templates + powerful AI APIs',
    body: `Dreaming of launching your SaaS but development takes weeks?

AI Empire changes the game:
✅ Professional Next.js 14 templates — modern designs, responsive, dark mode
✅ Built-in AI APIs — GPT-4, Groq, Gemini ready to use
✅ Stripe + Auth included — payments and authentication in 5 minutes
✅ Full admin dashboard — manage users, analytics, invoices

🔥 Launch offer: -30% on all templates for 72 hours!

Join the early adopters who have already launched their SaaS with AI Empire.
Don't miss this opportunity — the offer expires on [DATE].`,
    cta: '🚀 Get started now — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🚀 It\'s official: AI Empire is live! -30% for you',
    emailBody: `Hi [First Name],

The day has arrived. AI Empire is finally live!

Here's what we offer:
🎨 6 professional Next.js 14 templates (€49-199)
🤖 Built-in AI APIs (GPT-4, Groq, Gemini)
💳 Stripe + Auth configured
📊 Full admin dashboard

🎁 Exclusive offer: -30% on all templates for 72 hours only.

Use code LAUNCH30 at checkout.

[CTA: Explore the templates →]

See you soon,
The AI Empire team 🇫🇷`,
    socialPost: `🚀 AI Empire is finally LIVE!

The platform that combines:
✅ Pro Next.js 14 templates
✅ Built-in AI APIs
✅ Stripe + Auth included
✅ Admin dashboard

🎁 -30% for 72h with code LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: 'Teaser on social media', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: 'Teaser email to newsletter subscribers', channel: 'Email' },
    { day: 'D-1', action: 'Countdown on Instagram Stories', channel: 'Instagram' },
    { day: 'D0', action: 'Official launch — post + email + ads', channel: 'All channels' },
    { day: 'D+1', action: 'Early adopter testimonials', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: '-30% offer reminder', channel: 'Email, Twitter' },
    { day: 'D+5', action: 'Tutorial "How to build your first SaaS"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: 'End of -30% offer', channel: 'Email, Social' },
    { day: 'D+10', action: 'Customer case study', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: 'Recap + testimonials', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Target audience (varies by campaign)',
    targetConversion: '1-2% conversion rate',
    targetRevenue: 'Proportional to ad spend'
  }
}

// ============================================================
// SEASONAL PROMOTION CAMPAIGN
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Seasonal Promotion — Spring/Summer',
  type: 'seasonal',
  duration: '21 days',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Increase sales by 40% during the summer period',
  content: {
    headline: '☀️ AI Empire Summer Sale — Up to -40%!',
    subheadline: 'Summer is for launching your SaaS, not lounging on the beach',
    body: `Summer is approaching, and it's the perfect time to boost your project!

🌞 Spring/Summer special offers:
- NeuraStore (e-commerce template): €39 → €29 (-25%)
- NeuraBlog (blog template): €29 → €19 (-35%)
- Complete bundle (6 templates): €599 → €359 (-40%)

⚡ Why summer?
→ Less competition in the market
→ More time to build before the fall season
→ Startups that launch in summer arrive in September with a product

⏱️ Offer valid from [START_DATE] to [END_DATE]

Use code ETE2024 for -40% on the bundle.`,
    cta: '☀️ Grab the deals — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Summer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ Summer Sale: -40% on all AI Empire templates!',
    emailBody: `Hi [First Name],

Summer is coming and we've got an offer you can't refuse! 🌞

☀️ Special offers:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- 6-template bundle: €599 → €359

⏰ Offer valid until [END_DATE]

Use code ETE2024 at checkout.

[CTA: View the offers →]

Have a great summer!
The AI Empire team 🇫🇷`,
    socialPost: `☀️ AI EMPIRE SUMMER SALE ☀️

-40% on the complete bundle:
✅ 6 Next.js 14 templates
✅ Built-in AI APIs
✅ Priority support

Code: ETE2024
⏰ Valid until [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Summer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: 'Teaser "Something is coming this summer..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: 'Official sale announcement', channel: 'All channels' },
    { day: 'D+3', action: 'Customer testimonial + before/after', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: 'Midpoint reminder + limited stock', channel: 'Email' },
    { day: 'D+10', action: 'Tutorial "Launch your SaaS this summer"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: 'Last days — urgency', channel: 'All channels' },
    { day: 'D+18', action: 'Last chance', channel: 'Email, Twitter' },
    { day: 'D+21', action: 'Sale ends — recap', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 people',
    targetConversion: '300 sales (1%)',
    targetRevenue: '€10,700 (300 × €35 avg.)'
  }
}

// ============================================================
// REFERRAL PROGRAM
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Referral Program — Earn Credits',
  type: 'referral',
  duration: 'Permanent',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (credit rewards)',
  objective: 'Viral growth: 1 referral = 2 new users',
  content: {
    headline: '🎁 Refer a friend, earn 500 free AI credits!',
    subheadline: 'Word of mouth is our best growth channel',
    body: `Love AI Empire? Share it and earn rewards!

🎯 How it works:
1. Share your unique referral link
2. Your friend signs up with your link
3. You BOTH get 500 free AI credits!

💰 Reward tiers:
- 1 referral = 500 credits
- 3 referrals = 1,500 credits + "Ambassador" badge
- 5 referrals = 2,500 credits + 1 month Pro access
- 10 referrals = 5,000 credits + 3 months Pro access + site mention

🔗 Your unique link: [REFERRAL_LINK]

Share it on Twitter, LinkedIn, or send it directly to your contacts!`,
    cta: '🎁 Share my referral link',
    hashtags: [
      '#AIEmpire', '#Referral', '#Free', '#AI', '#SaaS',
      '#Ambassador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 Want 500 free AI credits? Refer a friend!',
    emailBody: `Hi [First Name],

We have a surprise for you! 🎁

Refer a friend to AI Empire and you BOTH get 500 free AI credits.

Your unique link: [REFERRAL_LINK]

🎯 Tiers:
- 1 referral → 500 credits
- 3 referrals → 1,500 credits + badge
- 5 referrals → 2,500 credits + Pro 1 month
- 10 referrals → 5,000 credits + Pro 3 months

Share your link now!

[CTA: Share my link →]

Thanks for being part of the adventure! 💜
The AI Empire team`,
    socialPost: `🎁 REFER A FRIEND, EARN 500 CREDITS! 🎁

Love AI Empire? Share it!

✅ Your friend signs up → 500 free credits
✅ YOU earn → 500 free credits

🔗 Referral link: [REFERRAL_LINK]

5 referrals = FREE Pro access for 1 month 🚀

#AIEmpire #Referral #AI #SaaS #Free`
  },
  schedule: [
    { day: 'Permanent', action: 'Welcome email with referral link', channel: 'Email' },
    { day: 'D+7', action: 'Referral program reminder', channel: 'Email' },
    { day: 'D+30', action: 'Email "You haven\'t referred anyone yet..."', channel: 'Email' },
    { day: 'Permanent', action: 'Referral link visible in dashboard', channel: 'Dashboard' },
    { day: 'Weekly', action: 'Top referrers leaderboard on Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1,000 shares/month',
    targetConversion: '200 new sign-ups/month',
    targetRevenue: '+40% organic growth'
  }
}

// ============================================================
// BLACK FRIDAY / CYBER MONDAY CAMPAIGN
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday / Cyber Monday — AI Empire',
  type: 'black-friday',
  duration: '5 days (Wednesday-Saturday + Cyber Monday)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'Maximize campaign reach and conversions',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — -50% ON EVERYTHING!',
    subheadline: 'The biggest sale of the year. Don\'t miss it.',
    body: `It's time to take action. For the first time ever:

🖤 BLACK FRIDAY — -50% ON EVERYTHING

📦 Exclusive deals:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- Premium Bundle (6 templates): €599 → €299.50
- Pro Plan (1 year): €1,188 → €594

⚡ This is NOT a joke. This IS the sale of the year.

⏱️ Limited time: From [WEDNESDAY] to [MONDAY] only.

🔒 Limited stock: The first 50 buyers get a free bonus template.

Code: BLACKFRIDAY50`,
    cta: '🖤 Get -50% now',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% on everything at AI Empire — 5 days only!',
    emailBody: `Hi [First Name],

It's official. Black Friday is here at AI Empire. 🖤

-50% ON EVERYTHING:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 Premium Bundle: €599 → €299.50
📦 Pro Plan 1 year: €1,188 → €594

⏰ Valid from [WEDNESDAY] to [MONDAY] only.

Code: BLACKFRIDAY50

The first 50 buyers get a free bonus template! 🎁

[CTA: Grab my -50% →]

Don't miss this.
The AI Empire team 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

-50% ON EVERYTHING FOR 5 DAYS!

📦 Templates from €14.50 to €299.50
📦 Pro Plan -50%
📦 First 50 = FREE bonus template

Code: BLACKFRIDAY50
⏰ From [WEDNESDAY] to [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'Wednesday D-1', action: 'Teaser "Tomorrow, something dark arrives..."', channel: 'Twitter, Instagram' },
    { day: 'Thursday D0 (BF)', action: 'Official Black Friday launch', channel: 'All channels + Email blast' },
    { day: 'Thursday D0', action: 'Google Ads - urgent campaign', channel: 'Google Ads' },
    { day: 'Friday D+1', action: 'Reminder + buyer testimonials', channel: 'Email, Twitter' },
    { day: 'Saturday D+2', action: 'Social proof: "Already X sales!"', channel: 'Instagram, LinkedIn' },
    { day: 'Sunday D+3', action: 'Last day for regular BF', channel: 'Email blast' },
    { day: 'Monday CM', action: 'Cyber Monday — Special extension', channel: 'All channels' },
    { day: 'Monday CM', action: '24-hour flash deal', channel: 'Email, Twitter' },
    { day: 'Tuesday D+5', action: 'Black Friday ends — Thank you', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Target audience (varies by campaign)',
    targetConversion: '0.5-1% conversion rate',
    targetRevenue: 'Proportional to ad spend'
  }
}

// ============================================================
// NEW YEAR CAMPAIGN
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'New Year — SaaS Resolutions 2025',
  type: 'new-year',
  duration: '14 days (December 26 - January 9)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Convert end-of-year prospects and start strong in January',
  content: {
    headline: '🎆 2025: Launch your SaaS this year!',
    subheadline: 'New year, new SaaS. Start strong with AI Empire.',
    body: `2025 is YOUR year. 🎆

You put your idea on paper last year. Now, take action.

🚀 New Year Offer:
- -25% on all templates with code NEWYEAR2025
- 500 free AI credits to get started
- Priority access to new 2025 features

🎯 2025 Resolutions:
✅ "I'm launching my SaaS" → Done in 24h with AI Empire
✅ "I'm earning online" → E-commerce templates + Stripe included
✅ "I'm learning AI" → Built-in AI APIs + tutorials
✅ "I'm going digital" → Full admin dashboard

⏱️ Offer from December 26 to January 9 only.

Make 2025 your year of success.`,
    cta: '🎆 Start 2025 with AI Empire',
    hashtags: [
      '#AIEmpire', '#NewYear', '#2025', '#Resolutions', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#AI'
    ],
    emailSubject: '🎆 New year, new SaaS: -25% + 500 free credits!',
    emailBody: `Hi [First Name],

Happy New Year! 🎆

2025 is the year you launch your SaaS. And we're here to help.

🎁 New Year Offer:
- -25% on all templates
- 500 free AI credits
- Priority access to 2025 features

Code: NEWYEAR2025

⏰ Offer from December 26 to January 9.

Make this year the good year.

[CTA: Explore the offers →]

Happy New Year and best of luck!
The AI Empire team 🇫🇷`,
    socialPost: `🎆 2025: YOUR SAAS YEAR! 🎆

New year, fresh start.

🎁 Special offer:
✅ -25% on templates
✅ 500 free AI credits
✅ Priority 2025 access

Code: NEWYEAR2025
⏰ From 12/26 to 01/09

👉 ai-empire-steel.vercel.app

#AIEmpire #NewYear #2025 #SaaS #Resolutions`
  },
  schedule: [
    { day: 'December 26', action: 'Email "Happy New Year — here\'s your gift"', channel: 'Email' },
    { day: 'December 27', action: 'Post "2025 Resolutions: launch your SaaS"', channel: 'LinkedIn, Twitter' },
    { day: 'December 30', action: 'Offer reminder + testimonials', channel: 'Email, Twitter' },
    { day: 'January 1', action: 'Message "Happy New Year — we\'re here for you"', channel: 'Email, Social' },
    { day: 'January 2', action: 'Tutorial "5 steps to launch your SaaS in January"', channel: 'Blog, YouTube' },
    { day: 'January 5', action: 'Social proof + urgency', channel: 'Twitter, Instagram' },
    { day: 'January 7', action: 'Last chance', channel: 'Email' },
    { day: 'January 9', action: 'Offer ends — recap + 2025 preview', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 people',
    targetConversion: '400 sign-ups (1%)',
    targetRevenue: '€5,000 (200 × €25 avg.)'
  }
}

// ============================================================
// UTILITY FUNCTIONS
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
  return `€${total.toLocaleString('en-US')}`
}
