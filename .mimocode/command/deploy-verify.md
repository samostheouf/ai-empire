---
description: "Deploy to Vercel and verify all key pages return 200. Single command for deploy + health check."
---

# Deploy & Verify

Deploy to Vercel production and verify the site is healthy.

## Input

`$ARGUMENTS` format: none (uses defaults)

## Steps

### 1. Deploy

```bash
cd /home/momossss/.mimocode/ai-empire
vercel --yes --prod 2>&1 | grep -E "Failed to compile|Ready in|Type error" -A 3
```

### 2. Check build result

If "Failed to compile" appears → stop, fix errors, retry.
If "Ready in" appears → continue to verification.

### 3. Verify key pages

```bash
URL="https://ai-empire-steel.vercel.app"
for page in "" "/faq" "/about" "/pricing" "/templates" "/api/health" "/api/monitoring"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL$page")
  echo "$page -> $STATUS"
done
```

### 4. Verify i18n pages

```bash
for page in "/en/faq" "/es/faq" "/de/faq" "/fr/faq"; do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL$page")
  echo "$page -> $STATUS"
done
```

### 5. Report

```
Deploy: OK
Homepage: 200
FAQ: 200
About: 200
Pricing: 200
Templates: 200
Health: 200
Monitoring: 200
```

## Rules

- Always verify after deploy (never assume success)
- If any page returns 404/500, investigate before moving on
- Deploy directly via Vercel CLI (not git push for speed)
