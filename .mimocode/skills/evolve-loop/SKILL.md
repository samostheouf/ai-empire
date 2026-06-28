---
name: evolve-loop
description: "Self-improvement loop: audit → fix → distill → save memory → repeat. Run at start of every session for continuous evolution."
---

# Evolve Loop — Continuous Self-Improvement

## When to use
At the START of every session. This is the meta-skill that makes all other skills better over time.

## Phase 1: Audit (detect gaps)
```bash
# Quick health check
curl -s https://ai-empire-steel.vercel.app/api/health | python3 -c "import sys,json; print(json.load(sys.stdin)['status'])"

# Page count
for p in / /faq /pricing /templates /blog /contact /status; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "https://ai-empire-steel.vercel.app$p")
  [ "$code" = "200" ] && echo "✅ $p" || echo "❌ $p ($code)"
done

# i18n key sync
python3 -c "
import re
def get_keys(fp):
    with open(fp) as f: return set(re.findall(r'^\s+(\w+):', f.read(), re.MULTILINE))
en = get_keys('src/i18n/translations/en.ts')
for lang in ['es','de','it','pt','ja','zh','ko','ar']:
    lk = get_keys(f'src/i18n/translations/{lang}.ts')
    m = en - lk
    if m: print(f'{lang}: missing {len(m)} keys')
"
```

## Phase 2: Fix (address issues found)
- Fix any failing pages
- Fix any missing i18n keys (use i18n-sync skill)
- Fix any broken components

## Phase 3: Distill (package repeated patterns)
- If same command runs 3+ times → create a command
- If same workflow runs 3+ times → create a skill
- If same bug appears 2+ times → create a guard/test

## Phase 4: Save (persist learnings)
- Update MEMORY.md with new lessons
- Update notes.md with session state
- Add to evolution log section

## Phase 5: Verify (confirm improvements)
- Re-run Phase 1 checks
- Compare before/after
- Confirm no regressions

## Evolution Log Format
Add to MEMORY.md under "## Evolution Log":
```
### YYYY-MM-DD
- Improvement: what changed
- Pattern: what was discovered
- Asset: skill/command created (if any)
```
