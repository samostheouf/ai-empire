---
description: "Add new i18n translation keys to TranslationKeys type and all 10 language files. Parameterize: key group name + key definitions."
---

# i18n Key Addition

Add new translation keys to the NeuraAPI i18n system.

## Input

`$ARGUMENTS` format: `<key_group> <keys_json_file>` or inline definition.

## Steps

### 1. Define keys

Each key needs:
- **Key name** (camelCase, e.g., `marketingTitle`)
- **French value** (reference language)
- **English value**
- Other 8 languages (es, de, it, pt, ja, zh, ko, ar)

### 2. Add to TranslationKeys type

Edit `ai-empire/src/i18n/config.ts`:
```typescript
export type TranslationKeys = {
  // ... existing keys ...
  
  // <key_group>
  keyName: string
}
```

### 3. Add French values (reference)

Edit `ai-empire/src/i18n/translations/fr.ts`:
```typescript
// <key_group>
keyName: 'Valeur française',
```

### 4. Add translations to remaining 9 languages

Dispatch 3 subagents (3 languages each):

**Agent 1:** en.ts, es.ts, de.ts
**Agent 2:** it.ts, pt.ts, ja.ts
**Agent 3:** zh.ts, ko.ts, ar.ts

Each agent must:
1. Read the target file to find the insertion point
2. Add keys BEFORE the closing `}`
3. Maintain consistent indentation
4. Translate to native-speaker quality

### 5. Verify

```bash
# Count keys per language
for f in ai-empire/src/i18n/translations/*.ts; do
  [ "$(basename $f)" = "index.ts" ] && continue
  echo "$(basename $f): $(grep -c 'keyName' $f)"
done

# TypeScript check
cd ai-empire && npx tsc --noEmit --skipLibCheck 2>&1 | head -5
```

## Rules

- Always add keys to ALL 10 language files
- French is the reference language — write it first
- Arabic needs RTL-compatible text
- Keep TypeScript interfaces in English
- Never leave a language file with missing keys
