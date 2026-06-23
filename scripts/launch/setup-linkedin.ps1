# ============================================
# AI EMPIRE — LinkedIn Setup Guide (1-Click)
# Ouvre les pages LinkedIn pas à pas
# ============================================

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  LINKEDIN — Création d'app" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Étape 1 : Créer l'app
Write-Host "ETAPE 1 : Creer l'app" -ForegroundColor Yellow
Start-Process "https://www.linkedin.com/developers/apps/new"
Write-Host "  Ouvre la page LinkedIn Apps" -ForegroundColor Gray
Write-Host "  1. Nom : ai-empire-bot" -ForegroundColor Gray
Write-Host "  2. Description : NeuraAPI marketing" -ForegroundColor Gray
Write-Host "  3. Clique 'Create app'" -ForegroundColor Gray
Write-Host ""
Read-Host "Appuie sur Entree quand l'app est creee"

# Étape 2 : Auth
Write-Host ""
Write-Host "ETAPE 2 : Autorisations" -ForegroundColor Yellow
Start-Process "https://www.linkedin.com/psettings/product-pages"
Write-Host "  Va dans 'Product' de ton app" -ForegroundColor Gray
Write-Host "  Ajoute 'Share on LinkedIn' comme produit" -ForegroundColor Gray
Write-Host ""
Read-Host "Appuie sur Entree quand c'est fait"

# Étape 3 : Clés
Write-Host ""
Write-Host "ETAPE 3 : Copier les cles" -ForegroundColor Yellow
Start-Process "https://www.linkedin.com/developers/apps"
Write-Host "  Dans ton app, copie :" -ForegroundColor Gray
Write-Host "  - Client ID (dans 'App credentials')" -ForegroundColor Gray
Write-Host "  - Client Secret (dans 'App credentials')" -ForegroundColor Gray
Write-Host ""

# Étape 4 : Token
Write-Host ""
Write-Host "ETAPE 4 : Generer le token d'acces" -ForegroundColor Yellow
Write-Host "  Va dans https://www.linkedin.com/developers/apps" -ForegroundColor Gray
Write-Host "  Clique 'OAuth 2.0 tools' → 'Generate access token'" -ForegroundColor Gray
Write-Host "  Coche 'Share on LinkedIn'" -ForegroundColor Gray
Write-Host "  Copie le token" -ForegroundColor Gray
Write-Host ""

# Étape 5 : Person ID
Write-Host ""
Write-Host "ETAPE 5 : Trouver le Person ID" -ForegroundColor Yellow
Start-Process "https://www.linkedin.com/in/me"
Write-Host "  Sur ta page LinkedIn, copie l'URL" -ForegroundColor Gray
Write-Host "  Le Person ID est le numero dans l'URL :" -ForegroundColor Gray
Write-Host "  https://www.linkedin.com/in/VOTRE-NUMERO-ICI" -ForegroundColor Gray
Write-Host ""

# Récapitulatif
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  CE QU'IL TE FAUT COPIER" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Client ID :      (dans App credentials)" -ForegroundColor White
Write-Host "  Client Secret :  (dans App credentials)" -ForegroundColor White
Write-Host "  Access Token :   (OAuth 2.0 tools)" -ForegroundColor White
Write-Host "  Person ID :      (dans ton URL LinkedIn)" -ForegroundColor White
Write-Host ""
Write-Host "  Colle ces 4 valeurs dans :" -ForegroundColor Yellow
Write-Host "  scripts\launch\credentials.json" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Puis lance :" -ForegroundColor Yellow
Write-Host "  python scripts\launch\social-poster.py linkedin" -ForegroundColor Yellow
Write-Host ""
Read-Host "Appuie sur Entree pour fermer"
