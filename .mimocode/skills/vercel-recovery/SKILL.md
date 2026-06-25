---
name: vercel-recovery
description: "Diagnose and fix Vercel deploy failures. Use when deploy shows ERROR or pages return 404 after deploy."
---

# Vercel Deploy Recovery

When a Vercel deploy fails or pages return 404 after a deploy, follow this diagnostic flowchart.

## Step 1: Check Deploy Status

```bash
cd /home/momossss/.mimocode/ai-empire && TOKEN=$(cat ~/.local/share/com.vercel.cli/auth.json | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))" 2>/dev/null) && curl -s -H "Authorization: Bearer $TOKEN" "https://api.vercel.com/v6/deployments?projectId=prj_yYmxkfzyQJ0YXqv0KjBGm7omtWb2&limit=3" 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); [print(f\"{x['uid'][:15]} state={x.get('state','?')} ready={x.get('readyState','?')}\") for x in d.get('deployments',[])]" 2>/dev/null
```

## Step 2: Diagnose by Error Type

### ERROR state → Check build logs
```bash
cd /home/momossss/.mimocode/ai-empire && TOKEN=$(cat ~/.local/share/com.vercel.cli/auth.json | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))" 2>/dev/null) && DEPLOY_ID="<from step 1>" && curl -s -H "Authorization: Bearer $TOKEN" "https://api.vercel.com/v6/deployments/$DEPLOY_ID" 2>/dev/null | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('readyState','?'))" 2>/dev/null
```

### BLOCKED state → Cancel pending deploys
```bash
# Cancel all pending deploys
TOKEN=$(cat ~/.local/share/com.vercel.cli/auth.json | python3 -c "import sys,json; print(json.load(sys.stdin).get('token',''))" 2>/dev/null)
for DID in $(curl -s -H "Authorization: Bearer $TOKEN" "https://api.vercel.com/v6/deployments?projectId=prj_yYmxkfzyQJ0YXqv0KjBGm7omtWb2&limit=20" 2>/dev/null | python3 -c "import sys,json; [print(x['uid']) for x in json.load(sys.stdin).get('deployments',[])]" 2>/dev/null); do
  curl -s -X PATCH "https://api.vercel.com/v6/deployments/$DID" -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d '{"cancel":true}' > /dev/null 2>&1
  echo "Cancelled: $DID"
done
sleep 60
```

### Pages return 404 → Check if pages exist in deployment
```bash
# Check specific page
curl -sI "https://ai-empire-steel.vercel.app/<page>" 2>/dev/null | head -3

# Check all pages
for p in / /faq /about /terms /pricing /templates /blog /docs; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://ai-empire-steel.vercel.app$p" 2>/dev/null)
  echo "$p → $code"
done
```

## Step 3: Common Fixes

### Session/Prisma throws during build
Fix: Make session.ts tolerate missing SESSION_SECRET:
```typescript
const SESSION_SECRET = process.env.SESSION_SECRET || 'build-time-fallback'
```

### TypeScript errors in sitemap
Fix: Ensure sitemap uses `buildAlternates()` for all pages, no inline alternates objects.

### /docs 404
Fix: Rename to `/api-docs` + add redirect in next.config.js.

### Build times out
Fix: Check `.vercelignore` exists, use `npx vercel --prod --yes` not `vercel build`.

### Deploy ERROR
Fix: Check build logs via Vercel dashboard. Common: Prisma schema mismatch, TypeScript error, missing env var.

## Step 4: Redeploy

```bash
cd /home/momossss/.mimocode/ai-empire && rm -rf .vercel .next && npx vercel --prod --yes 2>&1 | tail -5
```

## Step 5: Verify

```bash
for p in / /pricing /templates /docs /blog /faq /about /terms /privacy /changelog /status /launch /beta /cookie-policy /dpa; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://ai-empire-steel.vercel.app$p" 2>/dev/null)
  [ "$code" = "200" ] && echo "✅ $p" || ([ "$code" = "307" ] && echo "🔄 $p" || echo "❌ $p ($code)")
done
```
