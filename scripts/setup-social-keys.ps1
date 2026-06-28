# ============================================
# NeuraAPI — Setup Social Media API Keys
# ============================================
# Ce script ouvre toutes les pages nécessaires
# et te guide étape par étape.
# ============================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  NeuraAPI — Setup Social Media API" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# --- TWITTER ---
Write-Host "ETAPE 1/3 : TWITTER API" -ForegroundColor Yellow
Write-Host "------------------------" -ForegroundColor Gray
Write-Host "1. Ouvre le lien ci-dessous" -ForegroundColor White
Write-Host "2. Connecte-toi avec ton compte Twitter" -ForegroundColor White
Write-Host "3. Clique 'Create Project' → nom: NeuraAPI" -ForegroundColor White
Write-Host "4. Active Read+Write permissions" -ForegroundColor White
Write-Host "5. Copie les 4 clés ci-dessous" -ForegroundColor White
Write-Host ""
Start-Process "https://developer.twitter.com/en/portal/dashboard"
Write-Host "Page ouverte dans le navigateur !" -ForegroundColor Green
Write-Host ""
$twitterApiKey = Read-Host "API Key"
$twitterApiSecret = Read-Host "API Secret"
$twitterAccessToken = Read-Host "Access Token"
$twitterAccessSecret = Read-Host "Access Token Secret"
Write-Host ""

# --- REDDIT ---
Write-Host "ETAPE 2/3 : REDDIT API" -ForegroundColor Yellow
Write-Host "------------------------" -ForegroundColor Gray
Write-Host "1. Ouvre le lien ci-dessous" -ForegroundColor White
Write-Host "2. Clique 'create another app...'" -ForegroundColor White
Write-Host "3. Type: script, Name: NeuraAPI-Launch" -ForegroundColor White
Write-Host "4. Redirect URI: http://localhost:8080" -ForegroundColor White
Write-Host "5. Copie client_id et client_secret" -ForegroundColor White
Write-Host ""
Start-Process "https://www.reddit.com/prefs/apps"
Write-Host "Page ouverte dans le navigateur !" -ForegroundColor Green
Write-Host ""
$redditClientId = Read-Host "Client ID"
$redditClientSecret = Read-Host "Client Secret"
$redditUsername = Read-Host "Username Reddit"
$redditPassword = Read-Host "Password Reddit"
Write-Host ""

# --- LINKEDIN ---
Write-Host "ETAPE 3/3 : LINKEDIN API" -ForegroundColor Yellow
Write-Host "------------------------" -ForegroundColor Gray
Write-Host "1. Ouvre le lien ci-dessous" -ForegroundColor White
Write-Host "2. Clique 'Create app' → nom: NeuraAPI" -ForegroundColor White
Write-Host "3. Active 'Share on LinkedIn'" -ForegroundColor White
Write-Host "4. Genere OAuth 2.0 access token" -ForegroundColor White
Write-Host "5. Copie les clés ci-dessous" -ForegroundColor White
Write-Host ""
Start-Process "https://www.linkedin.com/developers/apps"
Write-Host "Page ouverte dans le navigateur !" -ForegroundColor Green
Write-Host ""
$linkedinClientId = Read-Host "Client ID"
$linkedinClientSecret = Read-Host "Client Secret"
$linkedinAccessToken = Read-Host "Access Token"
$linkedinPersonId = Read-Host "Person ID (urn:li:person:xxxxx)"
Write-Host ""

# --- SAUVEGARDE ---
Write-Host "Sauvegarde des clés..." -ForegroundColor Cyan

$configPath = Join-Path $PSScriptRoot "social-media\config.json"
$config = @{
    twitter = @{
        apiKey = $twitterApiKey
        apiSecret = $twitterApiSecret
        accessToken = $twitterAccessToken
        accessTokenSecret = $twitterAccessSecret
    }
    reddit = @{
        clientId = $redditClientId
        clientSecret = $redditClientSecret
        username = $redditUsername
        password = $redditPassword
        userAgent = "NeuraAPI-Launch/1.0"
    }
    linkedin = @{
        clientId = $linkedinClientId
        clientSecret = $linkedinClientSecret
        accessToken = $linkedinAccessToken
        personUrn = $linkedinPersonId
    }
} | ConvertTo-Json -Depth 3

$config | Out-File -FilePath $configPath -Encoding UTF8

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  CLÉS SAUVEGARDÉES !" -ForegroundColor Green
Write-Host "  Fichier: $configPath" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Teste maintenant:" -ForegroundColor Cyan
Write-Host "  node scripts/social-media/launch.js status" -ForegroundColor White
Write-Host ""
