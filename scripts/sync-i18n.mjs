#!/usr/bin/env node
// Sync check/apply for i18n translations: ensures every locale contains all keys from fr.ts.
// Usage:
//   node scripts/sync-i18n.mjs          -> list missing keys per locale, exit 1 if any
//   node scripts/sync-i18n.mjs --write  -> append missing keys (English fallback) to each locale
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'i18n', 'translations');
const refLocale = 'fr';
const locales = ['en', 'es', 'de', 'it', 'pt', 'ja', 'zh', 'ko', 'ar'];

function parseKeys(file) {
  const src = readFileSync(join(dir, `${file}.ts`), 'utf8');
  const map = new Map();
  const re = /^\s*([A-Za-z0-9_]+):\s*(['"`])((?:\\.|(?!\2).)*)\2/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    try {
      map.set(m[1], JSON.parse(`"${m[3].replace(/\\"/g, '"').replace(/"/g, '\\"')}"`));
    } catch {
      map.set(m[1], m[3]);
    }
  }
  return map;
}

const fr = parseKeys(refLocale);
let changed = false;
for (const loc of locales) {
  const cur = parseKeys(loc);
  const missing = [...fr.keys()].filter((k) => !cur.has(k));
  if (!missing.length) continue;
  console.log(`${loc}: ${missing.length} missing keys`);
  if (process.argv.includes('--write')) {
    // naive insertion: before final closing brace of the object
    const path = join(dir, `${loc}.ts`);
    let src = readFileSync(path, 'utf8');
    const lines = missing.map((k) => `  ${k}: '${String(fr.get(k)).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',`);
    // Insert before the final closing brace of the object ("};" or "}" on its own line)
    const mClose = src.match(/\n\}\s*;?\s*(?=\n(?:export|\/\/|$)[^]*?$)/);
    let idx;
    if (mClose) {
      idx = src.lastIndexOf(mClose[0]);
    } else {
      const braceIdx = src.lastIndexOf('}');
      idx = src.lastIndexOf('\n', braceIdx);
    }
    src = src.slice(0, idx) + '\n' + lines.join('\n') + src.slice(idx);
    writeFileSync(path, src);
    changed = true;
    console.log(`${loc}: wrote ${missing.length} keys`);
  } else if (missing.length <= 80) {
    console.log('  ' + missing.join(', '));
  }
}
const anyMissing = locales.some((loc) => {
  const cur = parseKeys(loc);
  return [...fr.keys()].some((k) => !cur.has(k));
});
if (anyMissing) {
  console.log('Divergence detected. Run: node scripts/sync-i18n.mjs --write');
  process.exit(1);
}
console.log('All locales already in sync.');
