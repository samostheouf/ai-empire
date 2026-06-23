# ============================================
# AI Empire — Reddit Auto-Post Script (1-Click)
# ============================================
# Ce script ouvre Reddit, collecte tes credentials,
# et poste automatiquement sur r/webdev
# ============================================

param(
    [string]$RedditUser = "",
    [string]$RedditPass = "",
    [string]$ClientId = "",
    [string]$ClientSecret = ""
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  AI EMPIRE — Reddit Auto-Post" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# === ÉTAPE 1 : Ouvrir la page de création d'app Reddit ===
Write-Host "[1/5] Ouverture de Reddit Apps..." -ForegroundColor Yellow
Start-Process "https://www.reddit.com/prefs/apps"
Write-Host "  -> Cree une app 'script' sur la page ouverte" -ForegroundColor Gray
Write-Host "  -> Nom: ai-empire-bot" -ForegroundColor Gray
Write-Host "  -> Redirect URI: http://localhost:8080" -ForegroundColor Gray
Write-Host ""

# === ÉTAPE 2 : Collecter les credentials ===
if (-not $RedditUser) { $RedditUser = Read-Host "  Username Reddit" }
if (-not $RedditPass) { $RedditPass = Read-Host "  Mot de passe Reddit" -AsSecureString | ConvertFrom-SecureString -AsPlainText }
if (-not $ClientId) { $ClientId = Read-Host "  Client ID (sous le nom de l'app)" }
if (-not $ClientSecret) { $ClientSecret = Read-Host "  Client Secret" }

Write-Host ""
Write-Host "[2/5] Authentification sur Reddit..." -ForegroundColor Yellow

# === ÉTAPE 3 : Authentification OAuth2 ===
$authBody = "grant_type=password&username=$RedditUser&password=$RedditPass"
$authHeaders = @{
    "Authorization" = "Basic " + [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${ClientId}:${ClientSecret}"))
    "User-Agent" = "AiEmpireBot/1.0 (by /u/$RedditUser)"
}

try {
    $authResponse = Invoke-RestMethod -Uri "https://www.reddit.com/api/v1/access_token" -Method POST -Body $authBody -Headers $authHeaders
    $token = $authResponse.access_token
    Write-Host "  -> Authentification reussie !" -ForegroundColor Green
} catch {
    Write-Host "  -> ERREUR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "  -> Verifie tes credentials et reessaie" -ForegroundColor Red
    exit 1
}

# === ÉTAPE 4 : Prepared post content ===
Write-Host ""
Write-Host "[3/5] Preparation du post..." -ForegroundColor Yellow

$title = "I built a Next.js 14 SaaS template marketplace with AI APIs - looking for honest feedback"

$body = @"
Hey r/webdev,

I've been working on AI Empire - a collection of production-ready Next.js 14 templates for building SaaS products.

**What's included:**
- 10 templates (SaaS, e-commerce, blog, portfolio, landing page, dashboard)
- Groq AI API integration (free tier: 100 credits)
- Stripe billing (subscriptions + one-time payments)
- Auth + admin dashboard
- 10 languages out of the box

**Tech stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma, Stripe, Resend

**Why I built this:**
Most SaaS projects spend weeks on auth, billing, and boilerplate before writing product code. Each template handles the technical foundation so you can focus on your product.

**Free tier available** - no credit card required. You can try the AI API immediately.

I'd love honest feedback:
- What would make this more useful for you?
- What features are missing?
- What's the right price point for templates like these?

Link: https://ai-empire-steel.vercel.app

Happy to answer any questions about the tech stack or implementation.
"@

Write-Host "  -> Titre: $title" -ForegroundColor Gray
Write-Host "  -> Subreddit: r/webdev" -ForegroundColor Gray

# === ÉTAPE 5 : Poster sur Reddit ===
Write-Host ""
Write-Host "[4/5] Publication sur r/webdev..." -ForegroundColor Yellow

$postHeaders = @{
    "Authorization" = "Bearer $token"
    "User-Agent" = "AiEmpireBot/1.0 (by /u/$RedditUser)"
    "Content-Type" = "application/x-www-form-urlencoded"
}

$postBody = @{
    "sr" = "webdev"
    "kind" = "self"
    "title" = $title
    "text" = $body
}

try {
    $postResponse = Invoke-RestMethod -Uri "https://oauth.reddit.com/api/submit" -Method POST -Body $postBody -Headers $postHeaders
    $postId = $postResponse.jquery[-1].data.name
    Write-Host "  -> POST PUBLIE AVEC SUCCES !" -ForegroundColor Green
    Write-Host "  -> URL: https://www.reddit.com$r/webdev/comments/$postId" -ForegroundColor Cyan
} catch {
    Write-Host "  -> ERREUR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "  -> Reddit peut limiter les nouveaux comptes" -ForegroundColor Red
    exit 1
}

# === ÉTAPE 6 : Verifier le post ===
Write-Host ""
Write-Host "[5/5] Verification..." -ForegroundColor Yellow

Start-Sleep -Seconds 3

try {
    $verifyHeaders = @{
        "User-Agent" = "AiEmpireBot/1.0 (by /u/$RedditUser)"
    }
    $verifyResponse = Invoke-RestMethod -Uri "https://oauth.reddit.com/$postId" -Headers $verifyHeaders
    Write-Host "  -> Post verifie et en ligne !" -ForegroundColor Green
} catch {
    Write-Host "  -> Post soumis, verification en cours" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  SUCCES — Post publie sur r/webdev !" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Ouvre ton navigateur pour voir le post :" -ForegroundColor Cyan
Start-Process "https://www.reddit.com/r/webdev/new/"
Write-Host ""
