---
name: evolve-perfection
description: "Audit → Fix → Re-audit loop. Spawn parallel subagents to fix all weaknesses until max score. Use when user asks to reach 10/10, 20/20, or perfection."
---

# Evolve to Perfection

The iterative loop for reaching maximum quality. Audit, fix, re-audit until no more improvements possible.

## Step 1: Full Audit

Spawn a single audit subagent that reads ALL source files and rates 10 categories out of 20:

1. Design
2. Performance
3. Security
4. SEO
5. Conversion
6. Code Quality
7. Marketing
8. i18n
9. Analytics
10. Autonomy

For each category: score /20, top 3 strengths, top 3 weaknesses with file:line, recommended fixes.

## Step 2: Parallel Fix

For each category scoring below 18/20, spawn a dedicated fix subagent in parallel:

- **Performance agent**: Server components, Image, caching, bundle optimization
- **Security agent**: Auth, CSRF, rate limiting, input validation
- **Code Quality agent**: ESLint, types, error handling, no console.log
- **SEO agent**: Metadata, structured data, hreflang, sitemap
- **Conversion agent**: CTAs, social proof, checkout flow, trust badges
- **Design agent**: Animations, consistency, mobile, accessibility
- **i18n agent**: Translation coverage, dynamic lang, RTL support
- **Marketing agent**: Content completeness, no placeholders, all languages
- **Analytics agent**: Tracking depth, dashboard, real-time, A/B testing
- **Autonomy agent**: Cron jobs, monitoring, logging, backups

## Step 3: Deploy + Verify

```bash
# TypeScript check
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/node node_modules/typescript/bin/tsc --noEmit 2>&1 | head -5

# Deploy
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/vercel --yes --prod 2>&1 | tail -3

# Verify
# Check all pages return HTTP 200
# Check health endpoint returns all services
# Check security headers
```

## Step 4: Re-audit

Re-run Step 1 to measure improvement. Compare old vs new scores.

## Step 5: Iterate

If any category is below 18/20, go back to Step 2 and fix the remaining weaknesses. Repeat until all categories score 18+.

## Rules

- Don't ask the user — execute autonomously
- Spawn as many parallel agents as needed
- Fix everything, not just report
- TypeScript must compile clean before deploy
- Deploy after every batch of fixes
- Save scores to .mimocode/scores.json after each iteration
