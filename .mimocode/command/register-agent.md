---
description: "Register a new agent in the ai-empire execute route: add import + AGENTS map entry"
agent: general
---

# Register Agent

Register a new agent in the agent execution system at `/home/momossss/.mimocode/ai-empire/src/app/api/agents/execute/route.ts`.

## Input

`$ARGUMENTS` format: `<agent-id> <import-path> <export-name>`

Example: `architect-security ./lib/agents/architect-security architectSecurityAgent`

## Steps

### 1. Read current route file

Read `src/app/api/agents/execute/route.ts` to find current imports and AGENTS map.

### 2. Add import

Add the import statement at the top of the file, following existing import pattern:
```typescript
import { <exportName> } from '<importPath>'
```

### 3. Add to AGENTS map

Add entry to the `AGENTS` object:
```typescript
'<agent-id>': <exportName>,
```

### 4. Verify the agent file exists

Read the agent file to confirm it exports:
- A `name` property
- A `description` property  
- An `execute(input)` function

### 5. Verify with TypeScript

```bash
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/node node_modules/typescript/bin/tsc --noEmit 2>&1 | head -10
```

### 6. Deploy and test

```bash
# Deploy
cd /home/momossss/.mimocode/ai-empire && /home/momossss/.local/bin/vercel --yes --prod 2>&1 | tail -3

# Test the agent appears in the list
API_KEY="napi_89a457b0803e4ab"
curl -s -X POST https://ai-empire-steel.vercel.app/api/agents/execute \
  -H "Content-Type: application/json" \
  -H "x-api-key: $API_KEY" \
  -d '{"agentId":"<agent-id>","input":{"type":"full-audit"}}' | node -e "process.stdin.on('data',d=>{const j=JSON.parse(d);console.log(j.success?'✅ Agent registered':'❌ Error:',j.error||'OK')})"
```

## Important

- Agent IDs must be kebab-case (e.g., `architect-security`, `content-creator`)
- The agent file must have an `execute` function that accepts `input` and returns `{ tokensUsed, ...result }`
- TypeScript must compile cleanly before deploy
