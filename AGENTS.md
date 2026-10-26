# AGENTS.md — ai-empire

## Stack
- Next.js 14.2.15 (App Router), TypeScript, Tailwind CSS
- Prisma 5.22 + PostgreSQL (Vercel Postgres in prod)
- Stripe LIVE, Groq/GLM/Gemini/OpenAI AI, Resend email
- 10 locales: fr, en, es, de, it, pt, ja, zh, ko, ar

## Commands
```bash
npm run dev          # Next.js dev server
npm run build        # prisma generate && next build
npm run lint         # next lint
npm run test         # jest
npx vercel --yes --prod  # deploy to production
```

## Build quirk
`npm run build` chains: `prisma generate && next build`.
Migrations are applied manually or via a one-off endpoint; `prisma db push` is not part of the build to avoid connection limits. Locally you need a running PostgreSQL or set `DATABASE_URL` to a remote DB.

## Edge runtime (CRITICAL)
`src/middleware.ts` runs on **Edge**, NOT Node.js. You CANNOT use:
- `import crypto from 'crypto'` — use `crypto.subtle.*` (Web Crypto API)
- `Buffer`, `btoa`/`atob` — use `btoa`/`atob` directly (available on Edge)
- `prisma.$queryRaw` or any DB calls — use in-memory `Map` for rate limiting
- `crypto.timingSafeEqual` — use constant-time comparison via Web Crypto

API routes (`src/app/api/*`) run on Node.js and CAN use Prisma, Node crypto, etc.

## i18n
- Client components: `import { useI18n } from '@/i18n'` → `const { t, locale } = useI18n()`
- Server components: `import { getLocaleFromCookies, getTranslations } from '@/i18n/server'` → `const t = (key: string) => dict[key] || key`
- Translation keys defined in `src/i18n/config.ts` (`TranslationKeys` interface, ~2900 keys)
- Translation values in `src/i18n/translations/{locale}.ts` (`Record<string, string>`)
- Dynamic keys (e.g. `t(variable)`) require casting: `const t = rawT as (key: string) => string`
- `t()` only accepts one argument (the key), no interpolation params

## Database
- `src/lib/db.ts`: Prisma singleton with `safeQuery()` wrapper — returns fallback on DB errors
- `src/lib/rate-limit.ts`: DB-backed atomic UPSERT for API routes; in-memory Map for Edge middleware
- Connection pooling: `connection_limit=5` appended to DATABASE_URL

## Auth & Security
- Admin auth: `SESSION_SECRET` env var, HMAC-based session in middleware
- API auth: `x-api-key` header validated against Prisma `apiUser` table
- CSRF: Origin/Referer validation on state-changing requests
- Rate limiting: 100 req/min per IP (Edge), per-user AI limits (DB)
- Stripe webhook: idempotent via `webhookEvent` table upsert

## Deployment
- Vercel production: `https://ai-empire-steel.vercel.app`
- GitHub: `samostheouf/ai-empire`, branch `main` is protected (1 approval required)
- Push to GitHub → Vercel auto-deploys
- Or manual: `npx vercel --yes --prod` from project root

## Architecture
- `src/app/` — 229+ page routes (marketing, admin, blog, legal, API)
- `src/app/api/` — 60+ API routes
- `src/components/` — 50+ React components
- `src/lib/` — Shared utilities (AI, auth, DB, email, SEO, rate-limiting)
- `src/i18n/` — Internationalization system (10 locales)
- `prisma/schema.prisma` — Database schema (Template, Order, ApiUser, RateLimit, etc.)
- `scripts/` — Social media automation, launch tools

## Key patterns
- `safeQuery()` wraps all Prisma calls — never let DB errors crash the app
- `callAI()` with 2x retry per provider, 4-provider fallback chain (Groq→GLM→Gemini→OpenAI)
- `AbortSignal.timeout(15000)` on all AI calls, `AbortSignal.timeout(10000)` on proxy fetches
- SSG for 100+ pages (removed `headers()` from root layout)
- Logo: `public/logo.jpg` (400x400) used across Header, Footer, Chatbot, favicon, OG images
