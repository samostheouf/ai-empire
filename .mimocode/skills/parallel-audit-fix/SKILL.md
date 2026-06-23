---
name: parallel-audit-fix
description: "Orchestrate audit → fix → deploy → re-audit loop with subagents. Use for comprehensive site improvements."
---

# Parallel Audit & Fix

The pattern for comprehensive audit-and-fix cycles. Spawns specialized subagents in parallel, collects findings, fixes issues, deploys, and re-audits.

## Step 1: Spawn Audit Subagents (parallel)

Launch 2-3 audit subagents simultaneously, each covering a different domain:

**Security audit:**
```
Prompt: "Audit ALL API routes for: auth bypass, data leaks, input validation, rate limiting, CSP headers, CSRF protection. For each issue: file path, line number, severity, fix. Read the actual source files."
```

**Quality audit:**
```
Prompt: "Audit for: TypeScript errors, console.log in API routes, ': any' types, missing error handling, unused imports, ARIA labels missing, broken links, inconsistent code style. Read actual files."
```

**UX/SEO audit (when needed):**
```
Prompt: "Audit for: missing pages, broken navigation, missing meta tags, missing OpenGraph, missing structured data, mobile responsiveness, missing loading states, missing error boundaries."
```

## Step 2: Collect & Prioritize

After all subagents return:
1. List all findings sorted by severity: Critical → High → Medium → Low
2. Group by domain (security/quality/UX)
3. Identify which fixes can be done in parallel (independent files)
4. Identify which fixes must be sequential (dependent changes)

## Step 3: Fix (parallel where possible)

Spawn fix subagents for independent fix groups. Each subagent:
- Gets the specific list of issues to fix
- Makes minimal, targeted changes
- Does NOT refactor working code
- Preserves French language in all user-facing strings
- Verifies TypeScript compiles after their changes

## Step 4: Deploy (deploy-verify skill)

Use the `deploy-verify` skill for the 3-step cycle.

## Step 5: Re-audit

Re-run the audit subagents to verify fixes. Compare scores before/after.

## Decision Framework

| Situation | Action |
|---|---|
| < 5 issues, all critical | Fix directly (no subagent needed) |
| 5-15 issues across 2+ domains | Spawn 2 parallel subagents |
| 15+ issues or full site audit | Spawn 3+ parallel subagents |
| Security issue found | Fix IMMEDIATELY, don't wait for other audits |
| Score regression detected | Stop, investigate, fix before continuing |

## Key Rules

- Never fix without auditing first
- Never deploy without TypeScript check
- Never claim completion without re-audit
- Prioritize security over quality over UX
- Minimal changes — don't refactor what works
