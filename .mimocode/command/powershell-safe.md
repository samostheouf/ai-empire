---
description: "Create PowerShell scripts that work with French text. Avoids encoding issues with accented characters."
---

# PowerShell Safe Script

Create PowerShell scripts that handle French text without encoding errors.

## Input

`$ARGUMENTS` format: `<script-name> <description>`

## Rules

### 1. NO French Accented Characters

Replace all accented characters with ASCII equivalents:

| Character | Replacement |
|-----------|-------------|
| é, è, ê, ë | e |
| à, â | a |
| î, ï | i |
| ô | o |
| ù, û, ü | u |
| ç | c |
| É, È, Ê | E |
| À, Â | A |

### 2. NO Emojis

Replace emojis with text equivalents:

| Emoji | Replacement |
|-------|-------------|
| ✅ | [OK] |
| ❌ | [FAIL] |
| ⚠️ | [!] |
| 📋 | -> |
| 🌐 | -> |
| 📧 | -> |
| 🔗 | -> |
| ⏱ | -> |
| 📅 | -> |
| 💾 | -> |

### 3. Use Simple Separators

| Complex | Simple |
|---------|--------|
| ╔═══╗ | =========== |
| ║ | \| |
| ╚═══╝ | =========== |
| ───── | ------------ |

### 4. Template

```powershell
# ============================================================
# SCRIPT NAME - Description
# ============================================================

$ErrorActionPreference = "Continue"

Clear-Host

Write-Host ""
Write-Host "  ============" -ForegroundColor Cyan
Write-Host "    Script Name" -ForegroundColor Cyan
Write-Host "  ============" -ForegroundColor Cyan
Write-Host ""

# ... script content with ASCII only ...

Write-Host "  [OK] Done" -ForegroundColor Green
Write-Host ""

Read-Host "Press ENTER to exit"
```

### 5. Test Before Delivering

Always test the script runs without errors:

```powershell
powershell.exe -ExecutionPolicy Bypass -Command "& 'script.ps1'"
```

If it fails, fix encoding and retry.
