---
name: i18n-sync
description: "Validate all 10 i18n locale files have identical key sets. Auto-fill missing keys with EN fallback. Use after adding translation keys."
---

# i18n Sync

## When to use
After adding keys to en.ts/fr.ts, verify es/de/it/pt/ja/zh/ko/ar have the same keys.

## Steps

### 1. Detect missing keys
```bash
python3 << 'PYEOF'
import re

def get_keys(filepath):
    with open(filepath) as f:
        return set(re.findall(r'^\s+(\w+):', f.read(), re.MULTILINE))

en_keys = get_keys('src/i18n/translations/en.ts')
fr_keys = get_keys('src/i18n/translations/fr.ts')
base_keys = en_keys | fr_keys

for lang in ['es', 'de', 'it', 'pt', 'ja', 'zh', 'ko', 'ar']:
    lang_keys = get_keys(f'src/i18n/translations/{lang}.ts')
    missing = base_keys - lang_keys
    if missing:
        print(f'{lang}: MISSING {len(missing)} keys: {sorted(missing)[:5]}...')
PYEOF
```

### 2. Auto-fill missing keys
```bash
python3 << 'PYEOF'
import re

def get_keys(filepath):
    with open(filepath) as f:
        return set(re.findall(r'^\s+(\w+):', f.read(), re.MULTILINE))

with open('src/i18n/translations/en.ts') as f:
    en_content = f.read()

en_keys = get_keys('src/i18n/translations/en.ts')
fr_keys = get_keys('src/i18n/translations/fr.ts')
base_keys = en_keys | fr_keys

for lang in ['es', 'de', 'it', 'pt', 'ja', 'zh', 'ko', 'ar']:
    path = f'src/i18n/translations/{lang}.ts'
    with open(path) as f:
        content = f.read()
    
    lang_keys = get_keys(path)
    missing = base_keys - lang_keys
    
    if not missing:
        print(f'{lang}: OK')
        continue
    
    # Insert missing keys before closing }
    lines = content.rstrip().rstrip('}').rstrip()
    additions = []
    for key in sorted(missing):
        match = re.search(rf"^\s+{key}:\s*'([^']*)'", en_content, re.MULTILINE)
        val = match.group(1).replace("'", "\\'") if match else key
        additions.append(f"  {key}: '{val}'")
    
    content_new = lines + ',\n' + ',\n'.join(additions) + ',\n}\n'
    
    # Ensure export default exists
    if 'export default' not in content_new:
        content_new += f'\nexport default {lang}\n'
    
    with open(path, 'w') as f:
        f.write(content_new)
    print(f'{lang}: added {len(additions)} keys')
PYEOF
```

### 3. Verify brace balance
```bash
for f in src/i18n/translations/{en,fr,es,de,it,pt,ja,zh,ko,ar}.ts; do
  lang=$(basename $f .ts)
  opens=$(grep -o "{" "$f" | wc -l)
  closes=$(grep -o "}" "$f" | wc -l)
  [ "$opens" = "$closes" ] && echo "$lang: OK" || echo "$lang: MISMATCH { $opens } $closes"
done
```

### 4. Verify key counts match
```bash
for f in src/i18n/translations/{en,fr,es,de,it,pt,ja,zh,ko,ar}.ts; do
  lang=$(basename $f .ts)
  count=$(grep -cE "^\s+\w+:" "$f")
  echo "$lang: $count"
done
```

## Expected output
All 10 locales should have identical key counts (±1 for regex artifacts).
