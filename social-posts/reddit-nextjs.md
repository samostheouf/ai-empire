# Reddit Post — r/nextjs (technical angle)

**Subreddit:** r/nextjs
**Post type:** Text post

---

## Title

Streaming AI responses in the Next.js App Router: route handler + SSE client (full code)

## Body

Quick technical write-up on the pattern that finally made AI chat feel instant in my Next.js 14/15 app. The bottleneck was never the model — it was buffering the whole response before sending it.

**The server side (App Router route handler):**

```ts
// app/api/chat/route.ts
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()
  const history = messages.slice(-10)

  const stream = await provider.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      ...history,
    ],
    stream: true,
  })

  return new Response(stream.toReadableStream(), {
    headers: { 'Content-Type': 'text/event-stream' },
  })
}
```

**The client (consume token-by-token):**

```ts
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ messages }),
})

const reader = res.body!.getReader()
const decoder = new TextDecoder()

while (true) {
  const { done, value } = await reader.read()
  if (done) break
  const chunk = decoder.decode(value)
  setMessages(prev => appendToLast(prev, chunk))
}
```

**Gotchas I hit:**

- `res.body` can be null in some edge setups — guard it.
- Don't forget to `slice(-10)` the history or your token bill explodes.
- Set `export const runtime = 'edge'` only if your provider SDK is edge-compatible; otherwise keep Node runtime.
- Disable the send button + show a typing indicator while streaming, or users spam-click.

For the full version (Groq setup, prod best practices, rate limiting, Vercel deploy) I wrote it up here:
https://ai-empire-steel.vercel.app/blog/chatbot-ia-nextjs-groq

And the provider comparison I ran before choosing Groq:
https://ai-empire-steel.vercel.app/blog/en/comparaison-providers-ia-gratuits

Anyone tried the Vercel AI SDK's `useChat` hook instead of manual streaming? Curious how it compares on bundle size.
