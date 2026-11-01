# NeuraAPI — B2B Cold Email Sequence

**Campaign:** Value-first outreach to technical buyers
**Product:** NeuraAPI — premium Next.js templates (SaaS, e-commerce, blog, dashboard)
**Offer:** Launch code `LANCEMENT30` = -30% on all templates (e.g. NeuraSaaS 97€ → 67.90€)
**Templates:** https://ai-empire-steel.vercel.app/templates
**Free starter:** https://ai-empire-steel.vercel.app/free
**Cadence:** Day 0 (initial) → Day 3 (follow-up 1) → Day 7 (follow-up 2) → Day 12 (break-up)
**Sender:** Sam — NeuraAPI — samilaboulette21@gmail.com
**Volume:** 15–25 emails/day max, 1:1 plain text, no attachments on first touch

## Personalization tokens
- `{{first_name}}` — recipient first name (required, never "there")
- `{{company}}` — their product/agency name
- `{{pain_hook}}` — one concrete observation (repo, site, launch tweet, job post)
- `{{segment}}` — `freelance` | `agency` | `founder`

## Rules
1. Value before ask — every email gives something free (template link, snippet, guide) before any pitch.
2. One CTA per email. Never two.
3. Plain text only. No HTML, no images, no tracking pixels on first touch.
4. Reply to the same thread for follow-ups (don't start a new subject).
5. Stop immediately on "not interested" / unsubscribe; log in `~/porte-a-frapper/PORTES.md`.

---

## Email 1 — Initial cold email (Day 0, value-first)

### Variant A — Freelance developer

**Subject A:** `{{first_name}}, the auth + Stripe boilerplate you keep rewriting`
**Subject B:** `saved you 3 days of Next.js boilerplate (free starter inside)`

**Body:**

Hi {{first_name}},

I noticed {{pain_hook}} — and it reminded me of the part I used to dread: wiring auth, Stripe, and i18n from scratch every time a client asked for a SaaS.

So I packaged it. NeuraAPI ships production-ready Next.js 14 (App Router) templates — auth, Stripe checkout + webhooks, dashboard, i18n (10 locales), SEO, AI routes (Groq/Llama 3.3) — already wired and typed in TypeScript + Tailwind.

You keep the code. You ship your feature, not the plumbing.

Free starter (no card, just email): https://ai-empire-steel.vercel.app/free
Full catalog: https://ai-empire-steel.vercel.app/templates  (launch code `LANCEMENT30` = -30%)

Worth a 5-min look, or should I send the free starter repo link directly?

— Sam
NeuraAPI

**CTA:** Reply with "starter" and I'll send the free repo link (or grab it at the link above).

---

### Variant B — Small agency

**Subject A:** `{{company}}: cut your Next.js build time by ~2 weeks`
**Subject B:** `white-label Next.js starters for {{company}} (free one inside)`

**Body:**

Hi {{first_name}},

Agencies I talk to lose 1–2 weeks per project rebuilding the same auth + billing + dashboard scaffolding. That's margin you never bill.

NeuraAPI is a set of white-label Next.js 14 templates your team can drop in: SaaS (97€), e-commerce (129€), blog (59€) — auth, Stripe, i18n, SEO, AI routes included, fully typed (TS + Tailwind), deploy to Vercel in minutes.

You bill the client for the feature; we eat the boilerplate.

Catalog + live demos: https://ai-empire-steel.vercel.app/templates
Launch code `LANCEMENT30` = -30% (stackable on agency orders).

Want me to send a 2-min Loom of one template's codebase so your devs can judge quality?

— Sam
NeuraAPI

**CTA:** Reply "loom" and I'll record a walkthrough of the codebase for your team.

---

### Variant C — SaaS founder

**Subject A:** `ship your MVP this weekend, not next quarter`
**Subject B:** `{{first_name}}, the SaaS boilerplate you don't need to write`

**Body:**

Hi {{first_name}},

Every founder I meet spends the first 3 weeks on auth, Stripe, and a dashboard — before writing a single line of their actual product.

NeuraAPI skips that: a production Next.js 14 SaaS starter with auth, Stripe checkout + webhooks + customer portal, dashboard, i18n (10 locales), SEO, and AI routes (Groq/Llama 3.3) — typed, tested, deployable to Vercel today.

You write your feature. We wrote the rest.

See it: https://ai-empire-steel.vercel.app/templates
Free starter (no card): https://ai-empire-steel.vercel.app/free
Launch code `LANCEMENT30` = -30%.

Open to a 10-min chat, or should I just send the free starter?

— Sam
NeuraAPI

**CTA:** Book 10 min → reply with 2 time slots, or grab the free starter link above.

---

## Sending notes
- Send plain text. Subject line only (no preview-text tricks).
- Personalize `{{pain_hook}}` with one real observation; generic = spam.
- If no reply in 3 days → Email 2. If no reply in 7 days → Email 3. If no reply in 12 days → Email 4.
- Log every send + reply in `~/porte-a-frapper/PORTES.md`.
- Track opens only after first reply (no pixel on touch 1).
