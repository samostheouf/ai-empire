---
description: "Translate content into all project languages (fr/en/es/de/it/ja/ko/pt/zh/ar). Parameterize: file path, content type, target languages."
agent: general
---

# Multilingual Translation

Translate content into all 10 project languages: fr, en, es, de, it, ja, ko, pt, zh, ar.

## Input

`$ARGUMENTS` format: `<source_file> <type> <target_dir>`

Example: `src/lib/marketing/emails/fr.ts email-sequences src/lib/marketing/emails/`

Types: `email-sequences`, `ads`, `social-posts`, `landing-content`, `blog-content`

## Steps

### 1. Read source file

Read the source file to understand structure and content.

### 2. Create translation for each language

For each language (en, es, de, it, ja, ko, pt, zh, ar):

- Create file in target directory: `<type>/<lang>.ts`
- Translate ALL content to natural, native-speaker quality
- Keep template names in English (NeuraStore, NeuraBlog, etc.)
- Keep EUR prices (convert to local currency where appropriate: USD for EN, JPY for JA, etc.)
- Remove ALL fake testimonials, fake stats, fake urgency
- Match exact TypeScript interface from source file

### 3. Create barrel export

Create `index.ts` in target directory with:
- All language imports
- `getLocalized<type>(lang)` function
- Supported language type

### 4. Verify

- TypeScript compilation: `tsc --noEmit`
- Verify all 10 language files exist
- Verify barrel export works

## Rules

- All text in target language (natural, not machine-translated feel)
- Zero fake content — honest product descriptions only
- Template names stay in English
- Prices in EUR (or local currency equivalent)
- Each file must export same TypeScript interfaces as source
- Deploy after: `vercel --yes --prod`
