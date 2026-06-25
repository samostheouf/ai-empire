---
description: "Fill all 10 i18n translation dictionaries with missing keys. Dispatches parallel agents for speed."
---

# i18n Dictionary Fill

Fill all 10 locale dictionaries with missing translation keys.

## Input

`$ARGUMENTS` format: `<language>` (optional, defaults to all 10)

Languages: fr, en, es, de, it, pt, ja, zh, ko, ar

## Steps

### 1. Count missing keys per language

```bash
cd /home/momossss/.mimocode/ai-empire
grep -c "^  [a-zA-Z].*:" src/i18n/config.ts
for f in src/i18n/translations/*.ts; do
  [ "$(basename $f)" = "index.ts" ] && continue
  echo "$(basename $f): $(grep -c "^  [a-zA-Z].*:" $f)"
done
```

### 2. Dispatch agents (2-3 per batch)

For each language, dispatch a subagent:

```
Prompt: "Fill the {LANG} translation dictionary at /home/momossss/.mimocode/ai-empire/src/i18n/translations/{LANG}.ts with all missing keys.

1. Read src/i18n/config.ts to get ALL keys
2. Read the target translation file to see existing keys
3. Find all missing keys (in config but not in file)
4. For each missing key, add a {LANGUAGE} translation value
5. Format: keyName: '{translation value}',

Rules:
- Proper {LANGUAGE} (accents, punctuation)
- Keep technical terms as-is
- Preserve single quotes by escaping: \'
- Do NOT remove existing keys, only ADD
- Keep file as Record<string, string>
- Verify 0 missing keys at the end"
```

### 3. Verify all dictionaries match config

```bash
CONFIG_COUNT=$(grep -c "^  [a-zA-Z].*:" src/i18n/config.ts)
for f in src/i18n/translations/*.ts; do
  [ "$(basename $f)" = "index.ts" ] && continue
  COUNT=$(grep -c "^  [a-zA-Z].*:" $f)
  DIFF=$((CONFIG_COUNT - COUNT))
  if [ "$DIFF" -ne 0 ]; then
    echo "$(basename $f): MISSING $DIFF keys"
  fi
done
```

### 4. Fix structural issues

Check all files end correctly:

```bash
for f in src/i18n/translations/*.ts; do
  [ "$(basename $f)" = "index.ts" ] && continue
  if ! tail -1 "$f" | grep -q "export default"; then
    echo "$(basename $f): MISSING export default"
  fi
done
```

### 5. Fix double-escaped quotes

```bash
for f in src/i18n/translations/*.ts; do
  [ "$(basename $f)" = "index.ts" ] && continue
  python3 -c "
import re
with open('$f', 'r') as fh:
    content = fh.read()
fixed = content.replace('\\\\\\\\\\\\\\\\' , '\\\\\\\\'')
with open('$f', 'w') as fh:
    fh.write(fixed)
" 2>/dev/null
done
```

### 6. Commit and deploy

```bash
git add src/i18n/translations/*.ts
git commit -m "i18n: fill all translation dictionaries"
vercel --yes --prod 2>&1 | grep -E "Failed to compile|Ready in"
```

## Rules

- Always verify dictionary count matches config count
- Fix structural issues before deploying
- Deploy directly via Vercel CLI (local build times out)
