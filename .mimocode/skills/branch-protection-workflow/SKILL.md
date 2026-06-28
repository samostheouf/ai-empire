---
name: branch-protection-workflow
description: "Disable branch protection → push → re-enable. For pushing directly to protected main without PR."
---

# Branch Protection Workflow

## When to use
After enabling branch protection that blocks direct pushes, and you need to push urgent fixes.

## Steps

### 1. Disable protection
```bash
GITHUB_TOKEN="ghp_..."
curl -s -X DELETE "https://api.github.com/repos/{owner}/{repo}/branches/{branch}/protection" \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json"
```

### 2. Push
```bash
git push origin main
```

### 3. Re-enable protection
```bash
curl -s -X PUT "https://api.github.com/repos/{owner}/{repo}/branches/{branch}/protection" \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Content-Type: application/json" \
  -d '{"required_status_checks":null,"restrictions":null,"required_pull_request_reviews":{"required_approving_review_count":1,"dismiss_stale_reviews":true},"enforce_admins":true,"allow_force_pushes":false,"allow_deletions":false}'
```

## Variables
- `{owner}/{repo}`: GitHub repo path (e.g., samostheouf/ai-empire)
- `{branch}`: Branch name (e.g., main)
- `GITHUB_TOKEN`: Personal access token with repo scope

## Verification
After re-enabling, confirm with:
```bash
curl -s "https://api.github.com/repos/{owner}/{repo}/branches/{branch}/protection" \
  -H "Authorization: token $GITHUB_TOKEN" | grep -o '"url"'
```
