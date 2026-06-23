export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

export const emailTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-email-01',
    name: 'Tech YouTuber FR',
    type: 'email',
    target: 'YouTube (10K-100K subscribers)',
    subject: '🤝 Video sponsorship — AI-Empire (French AI API)',
    body: `Hi {{first_name}},

I'm a fan of your content on YouTube. Your AI tutorials inspired me to build AI-Empire.

I'd like to propose a sponsorship for a video on your channel.

**Concept:** "I tried a free AI API — here's what I built"

**Format:**
- 8-12 min video
- Live demo of AI-Empire
- Build a mini-project in real time
- Mention of your affiliate link

**Compensation:**
- €200-500 based on your audience
- 20% commission on every sale via your link
- Free templates (€49 value)

**Target audience:** French developers, 18-35, interested in AI

Interested? We can adapt the format to your style.

Reply to this email or DM me on Twitter @[handle].

Best regards,
[Your name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Reply to email',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Content partnership — AI-Empire x your personal brand',
    body: `Hi {{first_name}},

I'm proposing a content partnership to strengthen your personal brand on LinkedIn.

**Proposal:**
1. **LinkedIn article:** "How I integrated AI into my SaaS for €0"
2. **NeuraBlog template:** Free for your community (€49 value)
3. **Revenue share:** 25% on every sale via your link
4. **Visibility:** We'll feature you in our growing newsletter

**Why it's interesting:**
- Write 1 post, earn passive income + visibility
- Provide value to your community
- Position yourself as an AI expert

Write 1 post, earn passive income + visibility.

Interested? Want to do a 10-minute call?

Best regards,
[Your name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Book a 10-min call',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Twitter collab — AI-Empire x your tech account',
    body: `Hi {{first_name}},

I see you share quality tech content on Twitter. I'd love for us to collaborate.

**Proposal:**
1. **Giveaway:** 5 premium templates for your community
2. **Co-written thread:** "The state of AI for developers in 2025"
3. **Commission:** 30% on sales via your link
4. **Feedback:** You influence our product roadmap

**Format:** 1 thread + 3 tweets over 2 weeks.
**Budget:** €100-300 + free templates.

Interested?

Best regards,
[Your name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Reply to email',
  },
  {
    id: 'inf-email-04',
    name: 'Web Agency',
    type: 'email',
    target: 'Web agencies (5-20 employees)',
    subject: '🏢 Agency partnership — Your clients want AI, we can provide it',
    body: `Hello {{first_name}},

I see that {{agency_name}} works with e-commerce/SaaS clients who increasingly need AI features.

**Problem:** Integrating AI is expensive and time-consuming.

**Solution:** AI-Empire gives you access to a turnkey AI API.
- 5-minute integration
- Pay-as-you-go pricing (no minimum subscription)
- Technical support in French

**For your agency:**
- Multi-client dashboard
- 15% commission on every client
- Premium templates included (€49-199 value)
- Free training for your team

Want to discuss? 15 minutes this week?

Best regards,
[Your name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Book a call',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (complementary tool)',
    subject: '🔗 AI-Empire x {{company}} partnership — Complement your AI offering',
    body: `Hello {{first_name}},

I'm [Your name], founder of AI-Empire, the French AI API platform for startups.

I'm reaching out because {{company}} and AI-Empire share the same target audience: French startups that want to integrate AI without a huge budget.

**Partnership proposal:**

1. **Native integration:** Integrate AI-Empire into your platform (widget/API)
2. **Commissions:** 20% recurring on every referred client
3. **Co-marketing:** Joint blog post + webinar
4. **Exclusivity:** Special offer for your users (-25%)

**Why it works:**
- Your clients need AI, we provide the API
- You gain a recurring revenue stream
- We gain distribution

Ready to discuss? 15 minutes this week?

Best regards,
[Your name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Book a call',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `Hi {{first_name}}! 👋

I love your content on AI. I built AI-Empire, a French AI API for startups.

Quick proposal:
- Free templates for your community
- 30% commission on sales
- Co-written thread

Interested? Let's chat in DMs?`,
    cta: 'Reply to DM',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Hi {{first_name}},

I see you share quality tech content. I'd love for us to collaborate.

AI-Empire is a French AI platform for startups. We're looking for partners to co-create content.

Proposal:
- Co-written LinkedIn article
- Free template for your community
- 25% revenue share

10-minute call this week?`,
    cta: 'Book a call',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `Hey {{first_name}}! 👋

I see you're active in French dev servers. I'd like to propose a partnership.

AI-Empire = free AI API for French startups.

Offer for you:
- Free premium templates
- 30% commission on sales
- Beta access to new features

Interested?`,
    cta: 'Reply to DM',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `Hi {{first_name}}! 🔥

I love your tech content on Instagram. I have a proposal for you.

AI-Empire is a French AI API. We're looking for creators for:
- Demo reels (free templates included)
- 25% commission on sales
- Co-branding on templates

Sound good? Let's chat in DMs!`,
    cta: 'Reply to DM',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `Hi {{first_name}}! 👋

I love your YouTube channel. Your AI tutorials are great.

Collab proposal:
- Video sponsorship (€200-500)
- 20% commission on sales
- Free templates for your community

Interested? Let's call this week?`,
    cta: 'Book a call',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '30% commission on every recurring sale',
    '90-day cookie duration',
    'Real-time tracking dashboard',
    'Monthly payments via Stripe',
    'Free premium templates (€199 value)',
    'Dedicated affiliate support',
    'Beta access to new features',
    'Marketing materials provided',
  ],
  requirements: [
    'Audience of 1K+ on a channel (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Tech / startup / AI content',
    'Engagement rate > 2%',
    'No offensive or political content',
    'Comply with brand guidelines',
  ],
};

export const getAllTemplates = (): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates];
};

export const getTemplatesByType = (type: 'email' | 'dm'): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) => t.type === type);
};

export const getTemplatesByTarget = (target: string): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) =>
    t.target.toLowerCase().includes(target.toLowerCase()),
  );
};

export const generateOutreachSequence = (influencerType: string): InfluencerTemplate[] => {
  const templates: InfluencerTemplate[] = [];

  switch (influencerType) {
    case 'youtube':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-01')!,
        dmTemplates.find((t) => t.id === 'inf-dm-05')!,
      );
      break;
    case 'linkedin':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-02')!,
        dmTemplates.find((t) => t.id === 'inf-dm-02')!,
      );
      break;
    case 'twitter':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-03')!,
        dmTemplates.find((t) => t.id === 'inf-dm-01')!,
      );
      break;
    case 'agence':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-04')!);
      break;
    case 'saas':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-05')!);
      break;
    default:
      templates.push(...emailTemplates.slice(0, 2), ...dmTemplates.slice(0, 2));
  }

  return templates.filter(Boolean);
};
