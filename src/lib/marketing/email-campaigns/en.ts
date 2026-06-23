import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'en',
  campaigns: [
    // === Campaign 1: Launch Announcement ===
    {
      id: 'email-launch',
      name: 'Launch Announcement',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire is live — Your AI-powered SaaS toolkit', previewText: 'Templates, AI APIs, Stripe, and auth — all in one platform.' },
        { id: 'launch-b', subject: 'We just launched: Next.js 14 templates + AI APIs', previewText: 'Everything you need to ship your SaaS in 24 hours.' },
        { id: 'launch-c', subject: 'Ship your SaaS faster — AI Empire is here', previewText: 'Professional templates with AI integration, ready to deploy.' },
      ],
      previewText: 'Templates, AI APIs, Stripe, and auth — all in one platform.',
      cta: 'Explore AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire is Here</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">The complete toolkit for building AI-powered SaaS products</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hi {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      We are excited to announce the launch of <strong>AI Empire</strong> — a platform designed to help developers ship AI-powered SaaS products faster.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Here is what is included:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Professional Next.js 14 templates (from €19)</p>
      <p style="margin:4px 0;color:#333;">✅ Unified AI API — Groq + Gemini in one endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Stripe billing integration configured</p>
      <p style="margin:4px 0;color:#333;">✅ Authentication out of the box</p>
      <p style="margin:4px 0;color:#333;">✅ Admin dashboard included</p>
      <p style="margin:4px 0;color:#333;">✅ Free API tier — 100 credits on signup</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Whether you are building an e-commerce store, a blog, or a portfolio, AI Empire provides the foundation you need.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Explore AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Available Templates</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Complete e-commerce template with Stripe, cart, and admin dashboard</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">SEO-optimized blog with MDX, dark mode, and RSS feed</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Professional portfolio with animations, dark mode, and contact form</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Full Bundle — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">All 6 templates + priority support + free updates</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      Questions? Reply to this email — we read every response.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      The AI Empire team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Build AI-powered SaaS products faster<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Website</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Docs</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 2: Product Update ===
    {
      id: 'email-update',
      name: 'Product Update',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'What\'s new — AI Empire updates for this month', previewText: 'New features, improvements, and what is coming next.' },
        { id: 'update-b', subject: 'AI Empire changelog — New templates and API features', previewText: 'We have been busy building. Here is what shipped.' },
        { id: 'update-c', subject: 'Your monthly AI Empire update is here', previewText: 'New integrations, performance improvements, and upcoming features.' },
      ],
      previewText: 'New features, improvements, and what is coming next.',
      cta: 'View Changelog',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">What is New at AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Monthly Product Update — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hi {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Here is what we shipped this month:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">New Feature: AI Code Generation Endpoint</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          A new API endpoint optimized for code generation tasks. Supports Groq Llama 3 and Gemini Pro. Available on all plans including the free tier.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Improved: NeuraStore Checkout Flow</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Redesigned the checkout experience with Apple Pay and Google Pay support. Conversion rate improved by 15% in testing.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Updated: API Documentation</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Completely rewritten docs with interactive examples, copy-paste code snippets, and a new quickstart guide.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Coming Next Month</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          AI-powered SEO optimizer for NeuraBlog. Automatic meta descriptions, Open Graph images, and structured data generation.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        View Full Changelog
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Thank you for building with AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      The AI Empire team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Build AI-powered SaaS products faster<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Website</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Docs</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 3: Monthly Newsletter ===
    {
      id: 'email-newsletter',
      name: 'Monthly Newsletter',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Monthly — Tips, tutorials, and updates', previewText: 'Your monthly dose of AI and SaaS insights.' },
        { id: 'newsletter-b', subject: 'This month in AI and SaaS — AI Empire Newsletter', previewText: 'Community highlights, new features, and industry insights.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — What we learned this month', previewText: 'Practical advice for building AI-powered products.' },
      ],
      previewText: 'Your monthly dose of AI and SaaS insights.',
      cta: 'Read More',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Monthly</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Issue #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hi {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Welcome to this month's newsletter. Here is what has been happening in the AI Empire community and the broader AI/SaaS space.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutorials</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">How to Add AI Chat to Your Next.js App</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Step-by-step guide to integrating AI Empire's chat endpoint into a Next.js application. Includes code samples and deployment tips.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Stripe Integration Best Practices for SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Lessons from building NeuraStore's payment flow. Subscription management, webhooks, and customer portal setup.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Deploying Next.js 14 to Vercel: Complete Guide</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">From zero to production. Environment variables, domains, preview deployments, and performance optimization.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Community Highlights</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Featured Build:</strong> One of our users launched a document processing SaaS using NeuraStore as the base template and AI Empire's API for text extraction. From zero to paying customers in 3 weeks.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Tip of the Month:</strong> Use Groq for real-time responses (low latency) and Gemini for complex reasoning tasks. AI Empire lets you switch between models with a single parameter change.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Industry Insights</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      The AI API market continues to evolve rapidly. We are seeing a clear trend toward unified endpoints — developers want one integration, not five. AI Empire was built for this reality, and we are adding new models regularly.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Read the Full Blog
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Until next month,<br>The AI Empire team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Build AI-powered SaaS products faster<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Website</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 4: Re-engagement ===
    {
      id: 'email-reengagement',
      name: 'Re-engagement',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'We miss you — Your AI Empire account is waiting', previewText: 'Come back and get 50 bonus credits.' },
        { id: 'reeng-b', subject: 'Still thinking about it? Your free credits are expiring', previewText: '100 free credits are waiting. Come back and build.' },
        { id: 'reeng-c', subject: 'A lot has changed at AI Empire since your last visit', previewText: 'New features, new templates, and bonus credits for you.' },
      ],
      previewText: 'Come back and get 50 bonus credits.',
      cta: 'Reactivate Account',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">We miss you</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Your AI Empire account is still here — and we saved something for you</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hi {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      It has been a while since you last visited AI Empire. We wanted to let you know that your account is still active and we have added <strong>50 bonus credits</strong> to help you get started again.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Credits</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Free. No strings attached.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Since your last visit, we have added:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>New AI Code Generation endpoint</li>
      <li>Improved NeuraStore checkout flow</li>
      <li>Completely rewritten API documentation</li>
      <li>JavaScript and Python SDK improvements</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Reactivate My Account
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      If you no longer wish to receive emails, you can <a href="{{unsubscribe_url}}" style="color:#999;">unsubscribe</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Build AI-powered SaaS products faster<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Website</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Docs</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 5: Upgrade Offer ===
    {
      id: 'email-upgrade',
      name: 'Upgrade Offer',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Unlock more — Upgrade your AI Empire plan today', previewText: 'More credits, more templates, priority support.' },
        { id: 'upgrade-b', subject: 'Your AI Empire usage is growing — Time to upgrade?', previewText: 'Get more API credits and premium templates.' },
        { id: 'upgrade-c', subject: 'Special offer: 20% off AI Empire templates', previewText: 'Limited time offer for active users. Upgrade now.' },
      ],
      previewText: 'More credits, more templates, priority support.',
      cta: 'Upgrade Now — 20% Off',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Level Up Your SaaS</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">20% off templates for active AI Empire users</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hi {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      You have been actively using AI Empire — and we want to reward that. Here is an exclusive <strong>20% discount</strong> on all templates and the full bundle.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Use code at checkout:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">What You Get with Templates</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → €23.20 with code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">E-commerce template with Stripe, cart, admin dashboard, AI recommendations</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → €15.20 with code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog template with MDX, dark mode, RSS, SEO optimization</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → €23.20 with code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfolio template with animations, dark mode, contact form</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Full Bundle — €299 → €239.20 with code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">All 6 templates + priority support + free updates. Best value.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Upgrade Now — 20% Off
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      This offer expires in 72 hours. Code valid for one-time use.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Build AI-powered SaaS products faster<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Website</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Docs</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
