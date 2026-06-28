---
description: "Post-deploy verification: pages + health + monitoring + chatbot + i18n sync. Run after every deploy."
---

# Post-Deploy Check

## 1. Pages (22 routes)
```bash
for p in / /faq /about /terms /pricing /templates /blog /contact /status /launch /beta /web-vitals /cookie-policy /dpa /changelog /guide /en/usa /de/de /ja/jp /pt/br /marketing/saas; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://ai-empire-steel.vercel.app$p")
  [ "$code" = "200" ] && echo "✅ $p" || echo "❌ $p ($code)"
done
```

## 2. Health + Monitoring
```bash
curl -s https://ai-empire-steel.vercel.app/api/health | python3 -c "import sys,json; d=json.load(sys.stdin); print(f'{d[\"status\"]} — {d.get(\"latencyMs\",\"?\")}ms')"
curl -s https://ai-empire-steel.vercel.app/api/monitoring | python3 -c "import sys,json; print(json.load(sys.stdin)['status'])"
```

## 3. Chatbot EN + FR
```bash
echo "EN: $(curl -s -X POST https://ai-empire-steel.vercel.app/api/ai/chat -H 'Content-Type: application/json' -d '{"messages":[{"role":"user","content":"Hello"}],"locale":"en"}' | python3 -c 'import sys,json; print("✅" if "Hello" in json.load(sys.stdin).get("content","") else "❌")')"
echo "FR: $(curl -s -X POST https://ai-empire-steel.vercel.app/api/ai/chat -H 'Content-Type: application/json' -d '{"messages":[{"role":"user","content":"Bonjour"}],"locale":"fr"}' | python3 -c 'import sys,json; print("✅" if "Bonjour" in json.load(sys.stdin).get("content","") else "❌")')"
```

## 4. i18n Key Sync
```bash
python3 -c "
import re
def get_keys(fp):
    with open(fp) as f: return set(re.findall(r'^\s+(\w+):', f.read(), re.MULTILINE))
en = get_keys('src/i18n/translations/en.ts')
fr = get_keys('src/i18n/translations/fr.ts')
base = en | fr
for lang in ['es','de','it','pt','ja','zh','ko','ar']:
    lk = get_keys(f'src/i18n/translations/{lang}.ts')
    m = base - lk
    if m: print(f'❌ {lang}: missing {len(m)} keys')
    else: print(f'✅ {lang}: synced')
"
```
