---
name: deploy-verify
description: "3-step cycle: TypeScript check → Vercel deploy → curl verify all pages/APIs. Use after every code change."
---

# Deploy & Verify

The mandatory 3-step cycle after ANY code change. Never skip steps.

## Step 1: TypeScript Check

```bash
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/node node_modules/typescript/bin/tsc --noEmit 2>&1 | head -20
```

- If errors: fix them before proceeding. Never deploy broken TypeScript.
- If clean output: proceed to Step 2.

## Step 2: Vercel Deploy

```bash
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/vercel --yes --prod 2>&1 | tail -3
```

- Must show "Ready" with alias.
- If deploy fails: check error, fix, retry from Step 1.

## Step 3: Curl Verify

Run verification script that checks ALL endpoints:

```bash
API_KEY="napi_89a457b0803e4ab"  # or use latest registered user

# Pages (expect HTTP 200)
for page in "/" "/templates" "/pricing" "/login" "/register" "/dashboard" "/docs" "/guide" "/contact" "/blog" "/status" "/offre-speciale" "/mentions-legales" "/cgv" "/politique-confidentialite" "/politique-cookies" "/marketing" "/checkout"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://ai-empire-steel.vercel.app$page")
  echo "  $page → HTTP $STATUS"
done

# AI API
curl -s -X POST https://ai-empire-steel.vercel.app/api/ai/generate \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -d '{"prompt":"Test","maxTokens":5}' | node -e "process.stdin.on('data',d=>{const j=JSON.parse(d);console.log('AI:',j.provider||j.error)})"

# Checkout
curl -s -X POST https://ai-empire-steel.vercel.app/api/checkout \
  -H "Content-Type: application/json" \
  -d '{"templateId":"cmqg1yw850000sgk7xarallpj","templateTitle":"NeuraSaaS","price":9700,"email":"verify@test.com"}' | node -e "process.stdin.on('data',d=>{const j=JSON.parse(d);console.log('Checkout:',j.url?'✅':'❌')})"

# Security headers
curl -sI https://ai-empire-steel.vercel.app/ | grep -ci "x-content-type\|x-frame\|x-xss\|referrer-policy\|permissions-policy\|strict-transport\|content-security"
```

## Rules

- NEVER claim success without running Step 3
- If any page returns non-200 (except /admin which is 401), investigate
- If AI returns error, check credits and API key
- If checkout fails, check Stripe config
- All 7 security headers must be present
