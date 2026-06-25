# ============================================================
# NeuraAPI — Inscription Auto-Entrepreneur URSSAF
# Script guidé étape par étape (sécurisé, pas de contrôle PC)
# ============================================================

$ErrorActionPreference = "Continue"
$Url = "https://autoentrepreneur.urssaf.fr"

# --- Données personnelles (à remplir) ---
$Nom = ""
$Prenom = ""
$Email = ""
$Telephone = ""
$Adresse = "61 rue Raymond Poincaré"
$CodePostal = "57700"
$Ville = "Hayange"
$SIRET = "931 277 359 00012"

# --- Fonctions utilitaires ---
function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║     Inscription Auto-Entrepreneur URSSAF       ║" -ForegroundColor Cyan
    Write-Host "  ║     NeuraAPI — Samy Multiservice                ║" -ForegroundColor Cyan
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

function Copy-ToClipboard {
    param([string]$Text)
    Set-Clipboard -Value $Text -ErrorAction SilentlyContinue
    if ($?) {
        Write-Host "  ✅ Copié dans le presse-papiers !" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Copie manuelle requise" -ForegroundColor Yellow
    }
}

function Show-Field {
    param([string]$Label, [string]$Value)
    Write-Host "  📋 $Label" -ForegroundColor Green
    Write-Host "  → $Value" -ForegroundColor White
    Copy-ToClipboard $Value
}

function Open-Url {
    param([string]$Url)
    Start-Process $Url
    Write-Host "  🌐 Navigateur ouvert: $Url" -ForegroundColor Cyan
}

# ============================================================
# ÉTAPE 0 : Collecte des informations
# ============================================================

Show-Header
Write-Host "  Ce script va te guider pour créer ton compte"
Write-Host "  auto-entrepreneur sur le site URSSAF."
Write-Host ""
Write-Host "  ⏱  Durée estimée: 10-15 minutes" -ForegroundColor DarkGray
Write-Host "  📅  À faire AVANT la première vente" -ForegroundColor Red
Write-Host ""
Wait-ForUser "Prêt ? Appuie sur ENTRÉE"

# Collecte des infos
Show-Step 0 8 "Collecte des informations personnelles"

Write-Host "  Renseigne tes informations (ENTER pour garder la valeur par défaut):" -ForegroundColor White
Write-Host ""

$userNom = Read-Host "  Nom de famille [$Nom]"
if ($userNom) { $Nom = $userNom }

$userPrenom = Read-Host "  Prénom [$Prenom]"
if ($userPrenom) { $Prenom = $userPrenom }

$userEmail = Read-Host "  Email [$Email]"
if ($userEmail) { $Email = $userEmail }

$userTel = Read-Host "  Téléphone [$Telephone]"
if ($userTel) { $Telephone = $userTel }

Write-Host ""
Write-Host "  Informations pré-remplies:" -ForegroundColor Green
Write-Host "  → Adresse: $Adresse" -ForegroundColor Gray
Write-Host "  → Code postal: $CodePostal" -ForegroundColor Gray
Write-Host "  → Ville: $Ville" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "Infos correctes ? ENTRÉE"

# ============================================================
# ÉTAPE 1 : Ouvrir le site URSSAF
# ============================================================

Show-Step 1 8 "Ouvrir le site URSSAF"

Open-Url $Url
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "  Sur le site URSSAF:" -ForegroundColor White
Write-Host "  1. Clique sur 'Créer mon compte'" -ForegroundColor Gray
Write-Host "  2. Choisis 'Micro-entrepreneur'" -ForegroundColor Gray
Write-Host "  3. Remplis le formulaire avec les infos ci-dessous" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "Compte créé ? ENTRÉE"

# ============================================================
# ÉTAPE 2 : Informations personnelles
# ============================================================

Show-Step 2 8 "Remplir les informations personnelles"

Write-Host "  Sur le formulaire URSSAF, remplis:" -ForegroundColor White
Write-Host ""

Show-Field "Nom" $Nom
Wait-ForUser "Nom rempli ? ENTRÉE"

Show-Field "Prénom" $Prenom
Wait-ForUser "Prénom rempli ? ENTRÉE"

Show-Field "Email" $Email
Wait-ForUser "Email rempli ? ENTRÉE"

Show-Field "Téléphone" $Telephone
Wait-ForUser "Téléphone rempli ? ENTRÉE"

# ============================================================
# ÉTAPE 3 : Adresse
# ============================================================

Show-Step 3 8 "Remplir l'adresse"

Write-Host "  Sur le formulaire, remplis l'adresse:" -ForegroundColor White
Write-Host ""

Show-Field "Adresse" $Adresse
Wait-ForUser "Adresse remplie ? ENTRÉE"

Show-Field "Code postal" $CodePostal
Wait-ForUser "Code postal rempli ? ENTRÉE"

Show-Field "Ville" $Ville
Wait-ForUser "Ville remplie ? ENTRÉE"

# ============================================================
# ÉTAPE 4 : Activité
# ============================================================

Show-Step 4 8 "Déclarer l'activité"

Write-Host "  Sur le formulaire, choisis:" -ForegroundColor White
Write-Host ""

Write-Host "  📋 Type d'activité:" -ForegroundColor Green
Write-Host "  → Activité libérale non réglementée" -ForegroundColor White
Copy-ToClipboard "Activité libérale non réglementée"
Wait-ForUser "Type d'activité sélectionné ? ENTRÉE"

Write-Host ""
Write-Host "  📋 Description de l'activité:" -ForegroundColor Green
$activiteDesc = "Vente de templates web et développement d'API d'intelligence artificielle"
Write-Host "  → $activiteDesc" -ForegroundColor White
Copy-ToClipboard $activiteDesc
Wait-ForUser "Description remplie ? ENTRÉE"

Write-Host ""
Write-Host "  📋 Code APE/NAF:" -ForegroundColor Green
Write-Host "  → 6201Z (Programmation informatique)" -ForegroundColor White
Write-Host "  → OU 6209Z (Autres activités informatiques)" -ForegroundColor White
Copy-ToClipboard "6201Z"
Wait-ForUser "Code APE sélectionné ? ENTRÉE"

# ============================================================
# ÉTAPE 5 : Option fiscale
# ============================================================

Show-Step 5 8 "Option fiscale (VFL)"

Write-Host "  Si éligible (revenu fiscal ≤ 29 579 €), coche:" -ForegroundColor White
Write-Host ""
Write-Host "  📋 Option Versement Forfaitaire Libératoire (VFL):" -ForegroundColor Green
Write-Host "  → OUI (recommandé)" -ForegroundColor White
Write-Host "  → Taux: 2,2 % du CA" -ForegroundColor Gray
Write-Host ""
Write-Host "  ⚠️  Si tu ne sais pas, laisse décoché pour l'instant" -ForegroundColor Yellow
Wait-ForUser "Option VFL choisie ? ENTRÉE"

# ============================================================
# ÉTAPE 6 : ACRE
# ============================================================

Show-Step 6 8 "Demande d'ACRE"

Write-Host "  L'ACRE réduit tes cotisations de 50% la 1ère année." -ForegroundColor White
Write-Host ""
Write-Host "  📋 Demande d'ACRE:" -ForegroundColor Green
Write-Host "  → Coche 'OUI' pour demander l'ACRE" -ForegroundColor White
Write-Host "  → Condition: pas été micro-entrepreneur les 3 dernières années" -ForegroundColor Gray
Write-Host ""
Write-Host "  ⚠️  À DEMANDER IMPÉRATIVEMENT à la création" -ForegroundColor Red
Wait-ForUser "ACRE demandée ? ENTRÉE"

# ============================================================
# ÉTAPE 7 : Validation
# ============================================================

Show-Step 7 8 "Validation et envoi"

Write-Host "  Vérifie toutes les informations:" -ForegroundColor White
Write-Host ""
Write-Host "  → Nom: $Nom $Prenom" -ForegroundColor Gray
Write-Host "  → Email: $Email" -ForegroundColor Gray
Write-Host "  → Adresse: $Adresse, $CodePostal $Ville" -ForegroundColor Gray
Write-Host "  → Activité: Vente de templates web et API IA" -ForegroundColor Gray
Write-Host "  → Code APE: 6201Z" -ForegroundColor Gray
Write-Host ""
Write-Host "  Si tout est correct:" -ForegroundColor Green
Write-Host "  1. Coche les cases de consentement" -ForegroundColor Gray
Write-Host "  2. Clique sur 'Valider' ou 'Envoyer'" -ForegroundColor Gray
Write-Host ""
Wait-ForUser "Formulaire validé ? ENTRÉE"

# ============================================================
# ÉTAPE 8 : Confirmation
# ============================================================

Show-Step 8 8 "Confirmation"

Write-Host "  📧 Tu devrais recevoir un email de confirmation" -ForegroundColor Green
Write-Host ""
Write-Host "  ⏱  Délais:" -ForegroundColor White
Write-Host "  → Confirmation immédiate par email" -ForegroundColor Gray
Write-Host "  → SIRET attribué sous 1 à 3 semaines" -ForegroundColor Gray
Write-Host ""
Write-Host "  📋 Prochaines étapes:" -ForegroundColor Yellow
Write-Host "  1. Garde ton numéro de dossier" -ForegroundColor Gray
Write-Host "  2. Connecte-toi sur autoentrepreneur.urssaf.fr" -ForegroundColor Gray
Write-Host "  3. Déclare ton CA chaque mois (même si 0 €)" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "Inscription terminée ? ENTRÉE"

# ============================================================
# RÉCAPITULATIF
# ============================================================

Show-Header
Write-Host "  🎉 INSCRIPTION TERMINÉE !" -ForegroundColor Green
Write-Host ""
Write-Host "  Récapitulatif:" -ForegroundColor White
Write-Host "  ✅ Compte URSSAF créé" -ForegroundColor Gray
Write-Host "  ✅ Activité déclarée en BNC" -ForegroundColor Gray
Write-Host "  ✅ ACRE demandée" -ForegroundColor Gray
Write-Host "  ✅ VFL optionné (si éligible)" -ForegroundColor Gray
Write-Host ""
Write-Host "  📋 Rappels:" -ForegroundColor Yellow
Write-Host "  → Déclare ton CA chaque mois sur autoentrepreneur.urssaf.fr" -ForegroundColor Gray
Write-Host "  → Même si CA = 0, déclare 'néant'" -ForegroundColor Gray
Write-Host "  → Ouvre un compte bancaire dédié" -ForegroundColor Gray
Write-Host ""
Write-Host "  🔗 Liens utiles:" -ForegroundColor Cyan
Write-Host "  → URSSAF: https://autoentrepreneur.urssaf.fr" -ForegroundColor Gray
Write-Host "  → Infogreffe: https://infogreffe.fr" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "Appuie sur ENTRÉE pour quitter"
