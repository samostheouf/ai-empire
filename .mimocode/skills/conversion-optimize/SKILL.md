---
name: conversion-optimize
description: "Optimize conversion funnel: homepage, templates, buy flow, checkout success, exit-intent, social proof, sticky CTA. Use before marketing push."
---

# Conversion Optimization

Systematic conversion funnel optimization for maximum sales.

## Checklist

### 1. Homepage (`src/app/page.tsx`)
- [ ] Hero has clear value proposition + CTA
- [ ] Social proof with REAL numbers from DB
- [ ] Feature grid with glass morphism
- [ ] Template showcase with previews
- [ ] Pricing preview with comparison
- [ ] FAQ accordion
- [ ] Final CTA with urgency (real data, not fake)

### 2. Templates page (`src/app/templates/page.tsx`)
- [ ] All 10 templates displayed
- [ ] Category filter pills
- [ ] Search functionality
- [ ] "Most Popular" badge (highest downloads)
- [ ] Real view counts: "X personnes consultent ce template"
- [ ] Template cards with hover zoom + price badge

### 3. Buy Button (`src/components/BuyButton.tsx`)
- [ ] Loading spinner on click
- [ ] Success animation
- [ ] Trust badges below: Stripe, Secure, 30-day refund
- [ ] Social proof: "X développeurs ont acheté ce template"

### 4. Checkout Success (`src/app/checkout/success/page.tsx`)
- [ ] Confetti animation (CSS only)
- [ ] Prominent download button
- [ ] Share buttons (Twitter, LinkedIn)
- [ ] Referral link with 50 credits for both
- [ ] Upsell: "You might also like" other templates

### 5. Exit-Intent (`src/components/ExitIntentPopup.tsx`)
- [ ] Trigger: mouse leave OR 30s idle
- [ ] Honest offer, no fake urgency
- [ ] One-time per session (sessionStorage)
- [ ] Analytics tracking

### 6. Social Proof (`src/components/RealSocialProof.tsx`)
- [ ] Real data from DB
- [ ] Toast notifications every 45s
- [ ] Dismissable
- [ ] Only shows if real users > 0

### 7. Sticky CTA (`src/components/StickyCTA.tsx`)
- [ ] Appears after scrolling past pricing
- [ ] "100 free credits — no card required"
- [ ] Dismissable (localStorage)

### 8. Newsletter Popup (`src/components/NewsletterPopup.tsx`)
- [ ] 60s delay
- [ ] Honest value: "free Next.js SaaS guide"
- [ ] Email → /api/newsletter
- [ ] One-time per session

## Rules

- All text in French
- Zero fake content — all stats from real DB
- Mobile-first responsive
- TypeScript clean
- Don't break existing functionality
