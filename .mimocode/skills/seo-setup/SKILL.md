---
name: seo-setup
description: "Complete SEO setup: metadata, JSON-LD, sitemap, robots.txt, OG images, hreflang, canonical URLs, breadcrumbs. Use on every page."
---

# SEO Setup

Complete SEO setup for every page in the project.

## Per-Page SEO Checklist

### 1. Metadata (`generateMetadata`)
- [ ] Unique title (50-60 chars) with target keyword
- [ ] Unique description (150-160 chars) with target keyword
- [ ] OpenGraph image (1200x630)
- [ ] Keywords array (5-10 relevant terms)
- [ ] Canonical URL (self-referencing, no trailing slash)
- [ ] Robots: index/follow (unless admin/dashboard/checkout-success)

### 2. Structured Data (JSON-LD)
Use generators from `src/lib/seo.ts`:
- [ ] `generateSoftwareApplicationSchema()` — homepage
- [ ] `generateProductSchema(template)` — each template page
- [ ] `generateArticleSchema(post)` — each blog post
- [ ] `generateFAQSchema(faqs)` — pages with FAQ
- [ ] `generateOrganizationSchema()` — layout
- [ ] `generateBreadcrumbSchema(items)` — all sub-pages

### 3. Hreflang
For every public page, include all 10 locales:
```typescript
alternates: {
  canonical: `${baseUrl}/page`,
  languages: {
    'fr-FR': '/page',
    'en-US': '/en/page',
    'es-ES': '/es/page',
    'de-DE': '/de/page',
    'it-IT': '/it/page',
    'pt-BR': '/pt/page',
    'ja-JP': '/ja/page',
    'ko-KR': '/ko/page',
    'zh-CN': '/zh/page',
    'ar-SA': '/ar/page',
    'x-default': '/page',
  },
}
```

### 4. Sitemap (`src/app/sitemap.ts`)
- Fetch templates from DB
- Include all blog posts
- Include all 10 language variants
- Proper priority: homepage=1.0, templates=0.9, blog=0.85, legal=0.3

### 5. Robots.txt (`src/app/robots.ts`)
- Allow: /, /templates, /pricing, /blog, /docs, /guide
- Disallow: /dashboard, /admin, /api, /checkout/success
- Sitemap reference

### 6. Breadcrumbs
- Add `<Breadcrumb />` component to all sub-pages
- Auto-generates from URL path
- Includes JSON-LD BreadcrumbList

## Target Keywords (French)
- Primary: 'template next.js', 'API ia', 'SaaS template'
- Secondary: 'IA gratuite', 'développeur web', 'Next.js 14'
- Long-tail: 'créer SaaS en 48h', 'intégrer IA dans application'

## Rules
- All metadata in French
- Every page must have unique title + description
- OG images must be 1200x630
- Canonical URLs must be self-referencing
- Deploy after: `vercel --yes --prod`
