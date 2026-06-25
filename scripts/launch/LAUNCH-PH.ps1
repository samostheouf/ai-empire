# ============================================================
# NeuraAPI — Script de Lancement Product Hunt
# Ce script guide étape par étape tout le processus de lancement
# ============================================================

$ErrorActionPreference = "Continue"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$ContentDir = Join-Path (Split-Path -Parent $ProjectRoot) "docs\product-hunt\content"
$Url = "https://ai-empire-steel.vercel.app"
$PhUrl = "https://www.producthunt.com/posts/new"

# --- Fonctions utilitaires ---
function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║     NeuraAPI — Lancement Product Hunt           ║" -ForegroundColor Cyan
    Write-Host "  ╚══════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Step {
    param([int]$Step, [int]$Total, [string]$Title)
    Write-Host ""
    Write-Host "  ┌─ ÉTAPE $Step/$Total ─────────────────────────────────┐" -ForegroundColor Yellow
    Write-Host "  │  $Title" -ForegroundColor Yellow
    Write-Host "  └──────────────────────────────────────────────────────┘" -ForegroundColor Yellow
    Write-Host ""
}

function Wait-ForUser {
    param([string]$Message = "Appuie sur ENTRÉE pour continuer...")
    Write-Host ""
    Write-Host "  → $Message" -ForegroundColor Gray
    Read-Host
}

function Show-Content {
    param([string]$Label, [string]$Content)
    Write-Host "  📋 $Label" -ForegroundColor Green
    Write-Host "  ─────────────────────────────────" -ForegroundColor DarkGray
    $Content -split "`n" | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
    Write-Host ""
    Write-Host "  → Copie ce contenu (Ctrl+C, puis Ctrl+V dans le formulaire)" -ForegroundColor DarkYellow
}

function Copy-ToClipboard {
    param([string]$Text)
    Set-Clipboard -Value $Text -ErrorAction SilentlyContinue
    if ($?) {
        Write-Host "  ✅ Copié dans le presse-papiers !" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Copie manuelle requise" -ForegroundColor Yellow
    }
}

function Open-Url {
    param([string]$Url)
    Start-Process $Url
    Write-Host "  🌐 Navigateur ouvert: $Url" -ForegroundColor Cyan
}

# ============================================================
# DÉMARRAGE
# ============================================================

Show-Header
Write-Host "  Ce script va te guider à travers le lancement"
Write-Host "  de NeuraAPI sur Product Hunt."
Write-Host ""
Write-Host "  ⏱  Durée estimée: 15-20 minutes" -ForegroundColor DarkGray
Write-Host "  📅  Meilleur jour: Mardi ou Mercredi" -ForegroundColor DarkGray
Write-Host "  🕐  Heure de lancement: 00:01 AM Pacific Time (PST)" -ForegroundColor DarkGray
Write-Host ""
Wait-ForUser "Prêt ? Appuie sur ENTRÉE pour commencer"

# ============================================================
# ÉTAPE 1 : Vérifications préalables
# ============================================================

Show-Step 1 7 "Vérifications préalables"

Write-Host "  Vérifie que tu as:" -ForegroundColor White
Write-Host "  ✅ Un compte Product Hunt (producthunt.com)" -ForegroundColor Gray
Write-Host "  ✅ Un profil maker rempli (photo + bio)" -ForegroundColor Gray
Write-Host "  ✅ Le logo de NeuraAPI prêt" -ForegroundColor Gray
Write-Host ""

$hasAccount = Read-Host "  As-tu un compte Product Hunt ? (O/N)"
if ($hasAccount -ne "O" -and $hasAccount -ne "o") {
    Write-Host ""
    Write-Host "  → Crée d'abord un compte sur https://www.producthunt.com" -ForegroundColor Red
    Write-Host "  → Remplis ton profil (photo, bio, liens sociaux)" -ForegroundColor Red
    Write-Host "  → Reviens ensuite lancer ce script" -ForegroundColor Red
    Write-Host ""
    Wait-ForUser
    exit
}

# Vérifier le logo
$logoPath = Join-Path (Split-Path -Parent $ProjectRoot) "public\logo.jpg"
if (Test-Path $logoPath) {
    Write-Host "  ✅ Logo trouvé: $logoPath" -ForegroundColor Green
} else {
    Write-Host "  ⚠️  Logo non trouvé à $logoPath" -ForegroundColor Yellow
    Write-Host "  → Prépare un logo carré (400x400px minimum)" -ForegroundColor Yellow
}

Wait-ForUser

# ============================================================
# ÉTAPE 2 : Créer le produit sur Product Hunt
# ============================================================

Show-Step 2 7 "Créer le produit sur Product Hunt"

Open-Url $PhUrl
Start-Sleep -Seconds 2

# Préparer le contenu
$name = "NeuraAPI"
$tagline = "AI APIs + Premium Next.js Templates in 10 languages"
$description = @"
NeuraAPI is a developer platform that makes AI accessible to everyone.

What it does:
- AI API endpoints (text generation, code, SEO optimization)
- Premium Next.js templates (SaaS, e-commerce, portfolio)
- Multi-language support (10 languages including Japanese, Arabic, Korean)
- Real-time chatbot powered by Groq/OpenAI

Built with:
Next.js 14, TypeScript, Python/FastAPI, PostgreSQL, Stripe, Groq AI

Why it's different:
Most AI tools are English-only and require complex setup. NeuraAPI works in 10 languages out of the box, with instant API key generation and a generous free tier.

Pricing:
- Starter: FREE (100 credits/month)
- Pro: EUR19/month (10,000 credits) - Launch offer -30%
- Enterprise: EUR99/month (unlimited)

Try it now: $Url
"@

Show-Content "NOM DU PRODUIT" $name
Copy-ToClipboard $name
Wait-ForUser "Copie le nom dans le formulaire PH, puis ENTRÉE"

Show-Content "TAGLINE (max 60 caractères)" $tagline
Copy-ToClipboard $tagline
Wait-ForUser "Copie la tagline, puis ENTRÉE"

Show-Content "DESCRIPTION" $description
Copy-ToClipboard $description
Wait-ForUser "Copie la description, puis ENTRÉE"

Write-Host "  🔗 URL du site: $Url" -ForegroundColor Cyan
Copy-ToClipboard $Url
Wait-ForUser "Copie l'URL, puis ENTRÉE"

Write-Host ""
Write-Host "  📌 Topics à sélectionner:" -ForegroundColor Green
Write-Host "     - Developer Tools" -ForegroundColor White
Write-Host "     - Artificial Intelligence" -ForegroundColor White
Write-Host "     - SaaS" -ForegroundColor White
Write-Host "     - Productivity" -ForegroundColor White
Write-Host ""

Write-Host "  🖼  Upload le logo: $logoPath" -ForegroundColor Cyan
Write-Host ""

Write-Host "  📅  Choisis la date de lancement (Mardi ou Mercredi recommandé)" -ForegroundColor Yellow
Write-Host "  🕐  Heure: 00:01 AM Pacific Time (PST)" -ForegroundColor Yellow
Write-Host ""

Wait-ForUser "Remplis tout le formulaire, puis ENTRÉE"

# ============================================================
# ÉTAPE 3 : Poster le commentaire du maker
# ============================================================

Show-Step 3 7 "Poster le commentaire du maker"

$makerComment = @"
Hey Product Hunt!

I built NeuraAPI because I was frustrated with how hard it is to add AI to apps.

Most AI tools are:
- English-only
- Complex to set up
- Expensive for small projects

NeuraAPI fixes this:
- Works in 10 languages out of the box
- 3 API endpoints ready in 5 minutes
- Free tier with 100 credits/month
- Premium Next.js templates included

I built this in 3 weeks using Next.js 14, Python/FastAPI, and Groq AI.

What do you think? I'd love your feedback!

Try it free: $Url/launch
"@

Show-Content "COMMENTAIRE MAKER" $makerComment
Copy-ToClipboard $makerComment

Write-Host "  → Va sur ta page Product Hunt" -ForegroundColor Yellow
Write-Host "  → Clique sur 'Write a comment'" -ForegroundColor Yellow
Write-Host "  → Colle le commentaire" -ForegroundColor Yellow
Write-Host ""

Wait-ForUser "Commentaire posté ? ENTRÉE"

# ============================================================
# ÉTAPE 4 : Poster sur Twitter/X
# ============================================================

Show-Step 4 7 "Partager sur Twitter/X"

$tweet1 = @"
I just launched NeuraAPI on @ProductHunt!

AI APIs + Next.js Templates in 10 languages.

3 AI endpoints, premium templates, free tier.

Support us: https://www.producthunt.com/posts/neuraapi

#ProductHunt #AI #NextJS
"@

Show-Content "TWEET 1 (annonce)" $tweet1
Copy-ToClipboard $tweet1

Open-Url "https://twitter.com/compose/tweet"
Start-Sleep -Seconds 2

Write-Host "  → Colle le tweet et publie" -ForegroundColor Yellow
Wait-ForUser "Tweet posté ? ENTRÉE"

# ============================================================
# ÉTAPE 5 : Poster sur LinkedIn
# ============================================================

Show-Step 5 7 "Partager sur LinkedIn"

$linkedin = @"
I just launched NeuraAPI on Product Hunt!

After 3 weeks of building, here's what NeuraAPI offers:

- AI API endpoints (text, code, SEO)
- Premium Next.js templates
- Works in 10 languages out of the box
- Free tier available

Built with: Next.js 14, TypeScript, Python/FastAPI, Groq AI

If you're a developer looking to add AI to your projects, check it out:
$Url/launch

#ProductHunt #AI #NextJS #SaaS #TypeScript
"@

Show-Content "POST LINKEDIN" $linkedin
Copy-ToClipboard $linkedin

Open-Url "https://www.linkedin.com/feed/"
Start-Sleep -Seconds 2

Write-Host "  → Clique 'Start a post', colle et publie" -ForegroundColor Yellow
Wait-ForUser "Post LinkedIn publié ? ENTRÉE"

# ============================================================
# ÉTAPE 6 : Poster sur Reddit
# ============================================================

Show-Step 6 7 "Partager sur Reddit"

$reddit = @"
I built NeuraAPI - AI APIs + Next.js Templates in 10 languages

Hey r/webdev!

I just launched NeuraAPI on Product Hunt. It's a developer platform with:

- 3 AI API endpoints (text, code, SEO)
- Premium Next.js templates
- Works in 10 languages
- Free tier (100 credits/month)

Stack: Next.js 14, TypeScript, Python/FastAPI, PostgreSQL, Stripe, Groq AI

Built in 3 weeks. Would love your feedback!

https://ai-empire-steel.vercel.app/launch
"@

Show-Content "POST REDDIT (r/webdev)" $reddit
Copy-ToClipboard $reddit

Open-Url "https://www.reddit.com/r/webdev/submit"
Start-Sleep -Seconds 2

Write-Host "  → Colle le post Reddit" -ForegroundColor Yellow
Write-Host "  → Flair: 'Showoff Saturday' ou 'Launch'" -ForegroundColor Yellow
Wait-ForUser "Post Reddit publié ? ENTRÉE"

# ============================================================
# ÉTAPE 7 : Répondre aux commentaires
# ============================================================

Show-Step 7 7 "Répondre aux commentaires (CRITIQUE !)"

Write-Host "  ⚠️  C'est l'étape la plus importante !" -ForegroundColor Red
Write-Host ""
Write-Host "  Règles:" -ForegroundColor White
Write-Host "  1. Réponds à CHAQUE commentaire dans les 2 premières heures" -ForegroundColor Gray
Write-Host "  2. Sois reconnaissant et personnel" -ForegroundColor Gray
Write-Host "  3. Pose des questions pour engager la conversation" -ForegroundColor Gray
Write-Host "  4. Ne sois JAMAIS défensif face aux critiques" -ForegroundColor Gray
Write-Host ""

$phLink = Read-Host "  Colle le lien de ta page Product Hunt ici"
if ($phLink) {
    Open-Url $phLink
}

Write-Host ""
Write-Host "  📊 Pendant les 2 premières heures:" -ForegroundColor Yellow
Write-Host "  - Vérifie les commentaires toutes les 15 min" -ForegroundColor Gray
Write-Host "  - Réponds avec du cœur" -ForegroundColor Gray
Write-Host "  - Remercie chaque upvote" -ForegroundColor Gray
Write-Host ""

Write-Host "  🎯 Objectif: Top 5 Products of the Day" -ForegroundColor Green
Write-Host ""

Wait-ForUser "Lancement terminé ! Appuie sur ENTRÉE"

# ============================================================
# RÉCAPITULATIF
# ============================================================

Show-Header
Write-Host "  🎉 LANCEMENT TERMINÉ !" -ForegroundColor Green
Write-Host ""
Write-Host "  Récapitulatif:" -ForegroundColor White
Write-Host "  ✅ Produit créé sur Product Hunt" -ForegroundColor Gray
Write-Host "  ✅ Commentaire maker posté" -ForegroundColor Gray
Write-Host "  ✅ Tweet posté" -ForegroundColor Gray
Write-Host "  ✅ LinkedIn posté" -ForegroundColor Gray
Write-Host "  ✅ Reddit posté" -ForegroundColor Gray
Write-Host ""
Write-Host "  📋 À faire maintenant:" -ForegroundColor Yellow
Write-Host "  1. Surveille les commentaires PH pendant 2h" -ForegroundColor Gray
Write-Host "  2. Réponds à CHAQUE commentaire" -ForegroundColor Gray
Write-Host "  3. Partage le lien sur Discord/Slack/communautés" -ForegroundColor Gray
Write-Host "  4. Envoie des emails à tes contacts" -ForegroundColor Gray
Write-Host ""
Write-Host "  🔗 Liens utiles:" -ForegroundColor Cyan
Write-Host "  → Site: $Url" -ForegroundColor Gray
Write-Host "  → PH: https://www.producthunt.com/posts/neuraapi" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "Appuie sur ENTRÉE pour quitter"
