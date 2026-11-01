# Hacker News — Show HN

**Title:** Show HN: NeuraAPI – unified AI API for Next.js/TS devs (Groq + OpenAI behind one key)

**URL:** https://ai-empire-steel.vercel.app

## Text (optional, for "Show HN: X" with text)

Show HN: NeuraAPI – a unified AI API that puts Groq, OpenAI (and more) behind a single key for Next.js/TypeScript developers.

I built this because every SaaS I shipped ended up with three different SDKs, three billing dashboards, and a provider-specific code path that broke whenever I wanted to switch models. NeuraAPI exposes one TypeScript SDK (`@neuraapi/sdk`) with `generate`, `seo`, and `code` endpoints; you swap providers by changing a param, not your code.

What's there today:
- Single API key (napi_...) with 100 free credits on signup
- TypeScript SDK + documented REST endpoints
- Templates (Next.js SaaS starters) with auth, Stripe billing, i18n, AI chat wired in
- Free starter template (no card)

Tech stack: Next.js 14 App Router, Prisma + Postgres, Stripe, Tailwind, Vercel. Infra is boring on purpose.

Honest status: early. The API works and is in production on my own sites, but I'm still tightening rate limits, evals, and the docs. Pricing starts at 49€ for templates (-30% with LANCEMENT30 right now).

I'd genuinely value feedback on: (1) is the unified-API abstraction actually useful or do devs prefer direct SDK control? (2) what endpoints would you want beyond generate/seo/code? (3) docs clarity.

Site: https://ai-empire-steel.vercel.app
Docs: https://ai-empire-steel.vercel.app/docs
Templates: https://ai-empire-steel.vercel.app/templates
