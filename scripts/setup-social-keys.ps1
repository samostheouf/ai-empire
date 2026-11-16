# ============================================
# NeuraAPI — Setup Social Media API Keys
# ============================================
# Credentials are written only to config.local.json (gitignored).
# Never commit this file or paste credentials into source control.
# ============================================

function Read-SecretText([string]$Prompt) {
    $secure = Read-Host $Prompt -AsSecureString
    $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try { return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr) }
}

Write-Host "NeuraAPI — configuration locale des clés sociales" -ForegroundColor Cyan
Write-Host "Les valeurs saisies ne seront pas affichées à l'écran." -ForegroundColor Yellow

Write-Host "ETAPE 1/3 : TWITTER/X" -ForegroundColor Yellow
Start-Process "https://developer.twitter.com/en/portal/dashboard"
$twitterApiKey = Read-SecretText "API Key"
$twitterApiSecret = Read-SecretText "API Secret"
$twitterAccessToken = Read-SecretText "Access Token"
$twitterAccessSecret = Read-SecretText "Access Token Secret"

Write-Host "ETAPE 2/3 : REDDIT" -ForegroundColor Yellow
Start-Process "https://www.reddit.com/prefs/apps"
$redditClientId = Read-SecretText "Client ID"
$redditClientSecret = Read-SecretText "Client Secret"
$redditUsername = Read-Host "Username Reddit"
$redditPassword = Read-SecretText "Password Reddit"

Write-Host "ETAPE 3/3 : LINKEDIN" -ForegroundColor Yellow
Start-Process "https://www.linkedin.com/developers/apps"
$linkedinAccessToken = Read-SecretText "Access Token"
$linkedinPersonId = Read-Host "Person ID (urn:li:person:xxxxx)"

$configPath = Join-Path $PSScriptRoot "social-media\config.local.json"
$config = @{
    twitter = @{ apiKey = $twitterApiKey; apiSecret = $twitterApiSecret; accessToken = $twitterAccessToken; accessTokenSecret = $twitterAccessSecret }
    reddit = @{ clientId = $redditClientId; clientSecret = $redditClientSecret; username = $redditUsername; password = $redditPassword; userAgent = "NeuraAPI-Launch/1.0" }
    linkedin = @{ accessToken = $linkedinAccessToken; personUrn = $linkedinPersonId }
} | ConvertTo-Json -Depth 3

$json = $config | ConvertTo-Json -Depth 3
[System.IO.File]::WriteAllText($configPath, $json, [System.Text.UTF8Encoding]::new($false))
Write-Host "Configuration enregistrée localement dans scripts/social-media/config.local.json" -ForegroundColor Green
Write-Host "Ce fichier est exclu de Git. Ne le partagez pas et ne le commitez jamais." -ForegroundColor Yellow
Write-Host "Test : node scripts/social-media/test-connection.js"
