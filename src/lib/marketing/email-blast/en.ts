// ============================================
// AI-EMPIRE — Email Blast Templates
// Conversion-optimized email campaigns
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === CAMPAIGN 1: PRODUCT LAUNCH ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Launch Announcement',
  subject: '🚀 AI-Empire is finally here — The French AI platform for startups',
  preheader: 'Get a free AI API, in 5 minutes, with French-language support.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire is finally here!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">The French AI platform for startups</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We have great news: <strong>AI-Empire has officially launched!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          You now have access to:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ Unified AI API (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 endpoints: Generation, SEO, Code</p>
          <p style="margin: 5px 0; color: #333;">✅ Free credits to get started</p>
          <p style="margin: 5px 0; color: #333;">✅ Intuitive French dashboard</p>
          <p style="margin: 5px 0; color: #333;">✅ French-language support</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>Your API key:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Start my first test →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Next step: Make your first API call in 2 minutes.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — The French AI platform for startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Documentation</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Start my first test →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === CAMPAIGN 2: LIMITED OFFER -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Limited Offer -50%',
  subject: '⚡ -50% on NeuraPortfolio — Offer expires in 48h',
  preheader: 'Premium Next.js template at half price. 50+ components, dark mode, responsive.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">Offer expires in 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We have an <strong>exclusive offer</strong> for you: <strong>-50% on NeuraPortfolio</strong>, the premium Next.js template for building your AI portfolio.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Limited to 50 sales — expires in 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Here's what you get:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ React components</li>
          <li>✅ Dark mode + responsive</li>
          <li>✅ Smooth animations</li>
          <li>✅ Native AI integration</li>
          <li>✅ French-language support</li>
          <li>✅ Free lifetime updates</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Get the deal →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          After 48h, the price goes back to €49. Don't miss this opportunity!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — The French AI platform for startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Get the deal →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === CAMPAIGN 3: SUCCESS STORIES ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Customer Testimonials',
  subject: '💬 How these French startups succeeded with AI',
  preheader: '3 customer stories that prove AI is accessible to everyone.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Customer Testimonials</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Their success can be yours</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          We want to show you what French startups are achieving with AI-Empire.
        </p>

        <!-- Testimonial 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "We cut our AI costs by 60% by switching to AI-Empire. Integration took 5 minutes and the French-language support is a real plus."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO of a startup in Paris</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Result: -60% costs, +40% speed</p>
        </div>

        <!-- Testimonial 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "I integrated AI into my SaaS in 2 hours. Customers love the new features."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, founder of a SaaS in Lyon</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Result: +25% conversions</p>
        </div>

        <!-- Testimonial 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "The French dashboard is intuitive. My team adopted AI in 1 day."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM of a scale-up in Bordeaux</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Result: +40% productivity</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Join the success stories →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — The French AI platform for startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Join the success stories →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === CAMPAIGN 4: MONTHLY NEWSLETTER ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Monthly Newsletter',
  subject: '📰 AI-Empire Newsletter — January 2025',
  preheader: 'The latest news, tips, and offers from the French AI platform.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 AI-Empire Newsletter</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">January 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Here are the latest updates from AI-Empire:
        </p>

        <!-- New Feature 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 New: SEO Endpoint</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Generate SEO-optimized content in 1 click. Integrate it into your blog or SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Discover the SEO endpoint →
        </a>

        <!-- New Feature 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Tip: Optimize your API calls</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Save up to 30% on your calls by using smart caching. Here's how:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          View the tutorial →
        </a>

        <!-- Offer -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Exclusive subscriber offer: -30% on NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Use code NEWSLETTER30</p>
        </div>

        <!-- Statistics -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 Our numbers this month</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Users</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">API Calls</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Satisfaction</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Access the dashboard →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — The French AI platform for startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Access the dashboard →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === CAMPAIGN 5: REFERRAL PROGRAM ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Referral Program',
  subject: '💰 Earn €50 for every friend you refer!',
  preheader: 'Referral program: invite your friends, earn money.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Referral Program</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Earn €50 per referred friend</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hi {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Love AI-Empire? <strong>Share it with your friends and earn money!</strong>
        </p>

        <!-- How it works -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">How does it work?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Share your unique referral link
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Your friend signs up with your link
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> They purchase a paid plan
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> You receive <strong>€50</strong> in your account!
          </p>
        </div>

        <!-- Unique link -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Your unique link:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Benefits -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Referrer Benefits</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 per successful referral</li>
          <li>📊 Real-time tracking dashboard</li>
          <li>💳 Payment via Stripe (bank transfer)</li>
          <li>🎁 -20% off your next renewal</li>
          <li>⭐ "Gold Referrer" status after 5 referrals</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Share my link →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          No referral limit. The more you share, the more you earn!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — The French AI platform for startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Unsubscribe</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Share my link →',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
