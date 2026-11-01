---
title: "How to Integrate AI into Your SaaS in 30 Minutes"
published: true
description: "Practical tutorial: integrate an AI API into your Next.js SaaS in 30 minutes. Copyable code at every step, best practices, deployment."
tags: nextjs, ai, typescript, saas
canonical_url: https://ai-empire-steel.vercel.app/blog/en/ai-api-pour-saas
---

# How to Integrate AI into Your SaaS in 30 Minutes

Adding artificial intelligence to your SaaS is no longer reserved for big companies. With the right APIs, you can integrate text generation, automated SEO, and code generation in just a few minutes. This tutorial shows you exactly how to do it, with copyable code.

> Originally published on the [NeuraAPI Blog](https://ai-empire-steel.vercel.app/blog/en/ai-api-pour-saas). Canonical URL points to the original.

## Prerequisites

- A Next.js 14+ project (App Router)
- A NeuraAPI key (free on https://ai-empire-steel.vercel.app/register)
- Node.js 18+ installed

## Step 1 — Create your account and get an API key

Go to https://ai-empire-steel.vercel.app/register and create a free account. You immediately receive an API key starting with `napi_`. 100 monthly credits are offered.

Keep this key safe. It will be used in all your API calls.

## Step 2 — Install the SDK

The TypeScript SDK makes integration ultra-simple. A single dependency, zero configuration.

```bash
npm install @neuraapi/sdk
```

## Step 3 — Create a server-side AI service

Create a file `lib/ai.ts` that wraps the API calls. This is the central point of your integration.

```ts
// lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string) {
  const result = await ai.generate({ prompt, maxTokens: 1000 })
  return result.content
}

export async function generateSEO(topic: string, keywords: string[]) {
  const result = await ai.seo({ topic, keywords, maxTokens: 2000 })
  return {
    title: result.title,
    metaDescription: result.metaDescription,
    content: result.content,
  }
}

export async function generateCode(description: string, language = 'typescript') {
  const result = await ai.code({ description, language })
  return result.code
}
```

## Step 4 — Create a Next.js API route

Expose an API route in your SaaS. This route will be called by your frontend to generate content.

```ts
// app/api/generate/route.ts
import { NextResponse } from 'next/server'
import { generateContent } from '@/lib/ai'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== 'string') {
    return NextResponse.json({ error: 'Prompt required' }, { status: 400 })
  }

  try {
    const content = await generateContent(prompt)
    return NextResponse.json({ content })
  } catch (error) {
    return NextResponse.json({ error: 'Generation error' }, { status: 500 })
  }
}
```

## Step 5 — Call from the frontend

On the client side, call your API route with a simple fetch. Here is a complete React component.

```tsx
// components/AIGenerator.tsx
'use client'
import { useState } from 'react'

export function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult('')

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })

    const data = await res.json()
    setResult(data.content || data.error)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to generate..."
        className="w-full rounded-lg border p-3"
        rows={3}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-indigo-600 px-6 py-2 text-white"
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {result && (
        <div className="rounded-lg bg-gray-50 p-4">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}
```

## Step 6 — Add rate limiting

Protect your API from abuse. Here is a simple middleware that limits calls per user.

```ts
// lib/rate-limit.ts
const requests = new Map<string, number[]>()

export function rateLimit(key: string, limit = 10, windowMs = 60000) {
  const now = Date.now()
  const timestamps = requests.get(key) || []
  const recent = timestamps.filter(t => now - t < windowMs)

  if (recent.length >= limit) {
    return false
  }

  recent.push(now)
  requests.set(key, recent)
  return true
}

// Usage in the API route:
// if (!rateLimit(session.user.id)) {
//   return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
// }
```

## Best Practices

- **Never expose the API key on the client side.** Always use a server proxy (Next.js API route) for AI API calls. The API key must never appear in the JavaScript code sent to the browser.
- **Validate user inputs.** Always sanitize and validate the prompt sent by the user. Limit the length, filter dangerous characters, and use zod or joi for validation.
- **Cache responses.** For similar prompts, cache AI responses. A Redis cache with a 24h TTL significantly reduces costs without impacting quality.
- **Monitor costs.** Track credit consumption per user and per feature. AI APIs can be expensive if not optimized.

## Conclusion

In 6 simple steps, you have integrated AI into your SaaS. Content generation, automated SEO, and code generation are now accessible to your users. All in under 30 minutes.

NeuraAPI simplifies this integration: a single API key, a TypeScript SDK, documented endpoints. You focus on your product, we handle the AI infrastructure.

- Get started free: https://ai-empire-steel.vercel.app/register
- Docs: https://ai-empire-steel.vercel.app/docs
- Templates: https://ai-empire-steel.vercel.app/templates
