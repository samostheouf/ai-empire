# Reddit Post — r/webdev (value-first)

**Subreddit:** r/webdev
**Post type:** Text post (link in body, not title)
**Best time to post:** 9-11am EST, Tue-Thu

---

## Title

I wrote a step-by-step guide: integrate an AI API into a Next.js SaaS in 30 minutes (with copy-paste code)

## Body

Hey r/webdev — I spent the last few weeks wiring AI into a Next.js SaaS and wrote up the exact playbook so you don't have to rediscover it. Sharing in case it saves someone a weekend.

**What you'll build (in ~30 min):**

1. A free account + API key (napi_... prefix, 100 free credits)
2. A typed server-side service (`lib/ai.ts`) wrapping generate / SEO / code endpoints
3. A Next.js App Router route handler (`app/api/generate/route.ts`) with auth + validation
4. A React client component that calls it
5. A simple in-memory rate limiter so you don't get abused

**The 3 rules that actually matter:**

- Never ship the API key to the browser — always proxy through a server route.
- Validate + sanitize the prompt (length, zod schema) before it hits the model.
- Cache identical prompts (Redis, 24h TTL) — this alone cuts cost ~40%.

Minimal snippet — the server service:

```ts
// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({ prompt, maxTokens: 1000 })
  return result.content
}
```

And the route:

```ts
// app/api/generate/route.ts
export async function POST(req: Request) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { prompt } = await req.json()
  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt required' }, { status: 400 })
  }

  const content = await generateContent(prompt)
  return NextResponse.json({ content })
}
```

Full walkthrough (6 steps, every code block copy-paste ready, best-practices checklist) is here:
https://ai-empire-steel.vercel.app/blog/en/ai-api-pour-saas

I used NeuraAPI for this (unified key for Groq + OpenAI), but the same pattern works with the OpenAI SDK directly, Groq, Gemini, etc. — swap the client, keep the architecture.

Happy to answer questions about streaming, rate limiting, or cost control. What's your current AI integration pain point?
