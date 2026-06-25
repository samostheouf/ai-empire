# ============================================================
# NeuraAPI — Inscription Auto-Entrepreneur URSSAF
# Version 100% — Script complet avec sauvegarde et validation
# ============================================================

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$DataFile = Join-Path $ScriptDir "user-data.json"
$LogFile = Join-Path $ScriptDir "inscription.log"
$Url = "https://autoentrepreneur.urssaf.fr"

# ============================================================
# CONFIGURATION
# ============================================================

$Config = @{
    # Adresse prédéfinie
    Adresse = "61 rue Raymond Poincaré"
    CodePostal = "57700"
    Ville = "Hayange"
    Pays = "France"
    
    # Activité
    TypeActivite = "BNC"
    Categorie = "Activité libérale non réglementée"
    DescriptionActivite = "Vente de templates web et développement d'API d'intelligence artificielle"
    CodeAPE = "6201Z"
    LibelleAPE = "Programmation informatique"
    
    # Fiscalité
    TVA = "Franchise en base (article 293 B du CGI)"
    MentionFacture = "TVA non applicable - article 293 B du CGI"
    VFL = "2,2% du CA (BNC)"
    ACRE = "50% de réduction la 1ère année"
    Cotisations = "21,3% du CA"
    
    # URSSAF
    UrlURSSAF = "https://autoentrepreneur.urssaf.fr"
    UrlInfogreffe = "https://infogreffe.fr"
    UrlServicePublic = "https://www.service-public.fr"
}

# ============================================================
# FONCTIONS UTILITAIRES
# ============================================================

function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "[$timestamp] [$Level] $Message"
    Add-Content -Path $LogFile -Value $logEntry -ErrorAction SilentlyContinue
}

function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║       Inscription Auto-Entrepreneur URSSAF             ║" -ForegroundColor Cyan
    Write-Host "  ║       NeuraAPI — Samy Multiservice                      ║" -ForegroundColor Cyan
    Write-Host "  ║       Version 100% — Script complet                     ║" -ForegroundColor Cyan
    Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Step {
    param([int]$Step, [int]$Total, [string]$Title, [string]$Description = "")
    Write-Host ""
    Write-Host "  ┌─ ÉTAPE $Step/$Total ─────────────────────────────────────┐" -ForegroundColor Yellow
    Write-Host "  │  $Title" -ForegroundColor Yellow
    if ($Description) {
        Write-Host "  │  $Description" -ForegroundColor DarkGray
    }
    Write-Host "  └──────────────────────────────────────────────────────────┘" -ForegroundColor Yellow
    Write-Host ""
}

function Show-Progress {
    param([int]$Current, [int]$Total)
    $percent = [math]::Round(($Current / $Total) * 100)
    $filled = [math]::Floor($percent / 5)
    $empty = 20 - $filled
    $bar = "█" * $filled + "░" * $empty
    Write-Host "  Progression: [$bar] $percent%" -ForegroundColor Cyan
}

function Wait-ForUser {
    param([string]$Message = "Appuie sur ENTRÉE pour continuer...", [switch]$Required)
    Write-Host ""
    Write-Host "  → $Message" -ForegroundColor Gray
    if ($Required) {
        do {
            $key = Read-Host
        } while ($key -ne "")
    } else {
        Read-Host
    }
}

function Copy-ToClipboard {
    param([string]$Text, [string]$Label = "")
    try {
        Set-Clipboard -Value $Text -ErrorAction Stop
        if ($Label) {
            Write-Host "  ✅ $Label copié dans le presse-papiers !" -ForegroundColor Green
        } else {
            Write-Host "  ✅ Copié dans le presse-papiers !" -ForegroundColor Green
        }
        Write-Log "Clipboard: $Label = $Text"
    } catch {
        Write-Host "  ⚠️  Copie manuelle requise" -ForegroundColor Yellow
        Write-Log "Clipboard failed: $Label" "WARN"
    }
}

function Show-Field {
    param([string]$Label, [string]$Value, [switch]$Copy)
    Write-Host "  📋 $Label" -ForegroundColor Green
    Write-Host "  → $Value" -ForegroundColor White
    if ($Copy) {
        Copy-ToClipboard $Value $Label
    }
}

function Open-Url {
    param([string]$Url, [string]$Description = "")
    Start-Process $Url
    Write-Host "  🌐 Navigateur ouvert: $Description $Url" -ForegroundColor Cyan
    Write-Log "URL opened: $Url"
}

function Save-UserData {
    param([hashtable]$Data)
    $Data | ConvertTo-Json | Set-Content -Path $DataFile -Encoding UTF8
    Write-Log "User data saved to $DataFile"
}

function Load-UserData {
    if (Test-Path $DataFile) {
        $data = Get-Content -Path $DataFile -Raw | ConvertFrom-Json
        Write-Log "User data loaded from $DataFile"
        return $data
    }
    return $null
}

function Confirm-Action {
    param([string]$Message)
    do {
        Write-Host "  $Message (O/N)" -ForegroundColor Yellow
        $response = Read-Host
    } while ($response -notin @("O", "o", "N", "n"))
    return $response -in @("O", "o")
}

# ============================================================
# ÉTAPE 0 : CHARGEMENT DES DONNÉES
# ============================================================

Show-Header

$savedData = Load-UserData
if ($savedData) {
    Write-Host "  📂 Données sauvegardées trouvées !" -ForegroundColor Green
    Write-Host ""
    Write-Host "  → Nom: $($savedData.Nom) $($savedData.Prenom)" -ForegroundColor Gray
    Write-Host "  → Email: $($savedData.Email)" -ForegroundColor Gray
    Write-Host "  → Activité: $($savedData.Activite)" -ForegroundColor Gray
    Write-Host ""
    
    if (Confirm-Action "Utiliser les données sauvegardées ?") {
        $Nom = $savedData.Nom
        $Prenom = $savedData.Prenom
        $Email = $savedData.Email
        $Telephone = $savedData.Telephone
        $Activite = $savedData.Activite
        $DateNaissance = $savedData.DateNaissance
        $Nationalite = $savedData.Nationalite
        Write-Host ""
        Write-Host "  ✅ Données chargées" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "  📝 Nouvelle saisie..." -ForegroundColor Yellow
    }
} else {
    Write-Host "  📝 Première exécution — saisie des données requise" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "  Ce script va te guider pour créer ton compte" -ForegroundColor White
Write-Host "  auto-entrepreneur sur le site URSSAF." -ForegroundColor White
Write-Host ""
Write-Host "  ⏱  Durée estimée: 10-15 minutes" -ForegroundColor DarkGray
Write-Host "  📅  À faire AVANT la première vente" -ForegroundColor Red
Write-Host "  💾  Tes données seront sauvegardées pour réutilisation" -ForegroundColor DarkGray
Write-Host ""

Wait-ForUser "Prêt ? Appuie sur ENTRÉE"

# ============================================================
# ÉTAPE 1 : COLLECTE DES INFORMATIONS
# ============================================================

Show-Step 1 10 "Collecte des informations personnelles" "Tous les champs sont obligatoires"
Show-Progress 1 10

Write-Host "  Renseigne tes informations:" -ForegroundColor White
Write-Host ""

# Nom
if (-not $Nom) {
    do {
        $Nom = Read-Host "  Nom de famille"
    } while ([string]::IsNullOrWhiteSpace($Nom))
}

# Prénom
if (-not $Prenom) {
    do {
        $Prenom = Read-Host "  Prénom"
    } while ([string]::IsNullOrWhiteSpace($Prenom))
}

# Email
if (-not $Email) {
    do {
        $Email = Read-Host "  Email"
    } while ($Email -notmatch "^[^@]+@[^@]+\.[^@]+$")
}

# Téléphone
if (-not $Telephone) {
    do {
        $Telephone = Read-Host "  Téléphone (ex: 06 29 41 85 24)"
    } while ([string]::IsNullOrWhiteSpace($Telephone))
}

# Date de naissance
if (-not $DateNaissance) {
    do {
        $DateNaissance = Read-Host "  Date de naissance (JJ/MM/AAAA)"
    } while ($DateNaissance -notmatch "^\d{2}/\d{2}/\d{4}$")
}

# Nationalité
if (-not $Nationalite) {
    $Nationalite = Read-Host "  Nationalité [Française]"
    if ([string]::IsNullOrWhiteSpace($Nationalite)) { $Nationalite = "Française" }
}

# Activité
if (-not $Activite) {
    Write-Host ""
    Write-Host "  Type d'activité:" -ForegroundColor White
    Write-Host "  1. Vente de templates web" -ForegroundColor Gray
    Write-Host "  2. Développement d'API IA" -ForegroundColor Gray
    Write-Host "  3. Les deux (recommandé)" -ForegroundColor Green
    do {
        $choix = Read-Host "  Choix [3]"
    } while ($choix -notin @("1", "2", "3", ""))
    
    switch ($choix) {
        "1" { $Activite = "Vente de templates web" }
        "2" { $Activite = "Développement d'API d'intelligence artificielle" }
        default { $Activite = $Config.DescriptionActivite }
    }
}

# Sauvegarder les données
$userData = @{
    Nom = $Nom
    Prenom = $Prenom
    Email = $Email
    Telephone = $Telephone
    DateNaissance = $DateNaissance
    Nationalite = $Nationalite
    Activite = $Activite
    DateCreation = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
}
Save-UserData $userData

Write-Host ""
Write-Host "  ✅ Informations collectées" -ForegroundColor Green
Write-Log "Step 1 completed: Info collected for $Prenom $Nom"

Wait-ForUser "Infos correctes ? ENTRÉE"

# ============================================================
# ÉTAPE 2 : OUVRIR LE SITE URSSAF
# ============================================================

Show-Step 2 10 "Ouvrir le site URSSAF" "Création du compte"
Show-Progress 2 10

Open-Url $Config.UrlURSSAF "Site officiel URSSAF"
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "  Sur le site URSSAF:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Clique sur 'Se connecter'" -ForegroundColor Gray
Write-Host "  2. Clique sur 'Créer un compte'" -ForegroundColor Gray
Write-Host "  3. Remplis le formulaire de création" -ForegroundColor Gray
Write-Host ""
Write-Host "  📧 Utilise cet email: $Email" -ForegroundColor Cyan
Copy-ToClipboard $Email "Email"

Write-Host ""
Write-Host "  ⚠️  IMPORTANT: Vérifie ta boîte mail pour confirmer le compte" -ForegroundColor Red

Write-Log "Step 2: URSSAF website opened"

Wait-ForUser "Compte créé et confirmé par email ? ENTRÉE"

# ============================================================
# ÉTAPE 3 : INFORMATIONS PERSONNELLES
# ============================================================

Show-Step 3 10 "Remplir les informations personnelles" "Formulaire d'inscription"
Show-Progress 3 10

Write-Host "  Sur le formulaire URSSAF, remplis:" -ForegroundColor White
Write-Host ""

# Nom
Show-Field "Nom" $Nom -Copy
Wait-ForUser "Nom rempli ? ENTRÉE"

# Prénom
Show-Field "Prénom" $Prenom -Copy
Wait-ForUser "Prénom rempli ? ENTRÉE"

# Date de naissance
Show-Field "Date de naissance" $DateNaissance -Copy
Wait-ForUser "Date de naissance remplie ? ENTRÉE"

# Nationalité
Show-Field "Nationalité" $Nationalite -Copy
Wait-ForUser "Nationalité remplie ? ENTRÉE"

# Email
Show-Field "Email" $Email -Copy
Wait-ForUser "Email rempli ? ENTRÉE"

# Téléphone
Show-Field "Téléphone" $Telephone -Copy
Wait-ForUser "Téléphone rempli ? ENTRÉE"

Write-Log "Step 3: Personal info filled"

# ============================================================
# ÉTAPE 4 : ADRESSE
# ============================================================

Show-Step 4 10 "Remplir l'adresse" "Adresse du siège social"
Show-Progress 4 10

Write-Host "  Sur le formulaire, remplis l'adresse:" -ForegroundColor White
Write-Host ""

Show-Field "Adresse" $Config.Adresse -Copy
Wait-ForUser "Adresse remplie ? ENTRÉE"

Show-Field "Code postal" $Config.CodePostal -Copy
Wait-ForUser "Code postal rempli ? ENTRÉE"

Show-Field "Ville" $Config.Ville -Copy
Wait-ForUser "Ville remplie ? ENTRÉE"

Write-Log "Step 4: Address filled"

# ============================================================
# ÉTAPE 5 : ACTIVITÉ
# ============================================================

Show-Step 5 10 "Déclarer l'activité" "Type d'activité et code APE"
Show-Progress 5 10

Write-Host "  Sur le formulaire, choisis:" -ForegroundColor White
Write-Host ""

# Type d'activité
Write-Host "  📋 Type d'activité:" -ForegroundColor Green
Show-Field "Catégorie" $Config.Categorie
Copy-ToClipboard $Config.Categorie "Catégorie"
Wait-ForUser "Type d'activité sélectionné ? ENTRÉE"

# Description
Write-Host ""
Show-Field "Description" $Activite
Copy-ToClipboard $Activite "Description"
Wait-ForUser "Description remplie ? ENTRÉE"

# Code APE
Write-Host ""
Write-Host "  📋 Code APE/NAF:" -ForegroundColor Green
Write-Host "  → $($Config.CodeAPE) ($($Config.LibelleAPE))" -ForegroundColor White
Copy-ToClipboard $Config.CodeAPE "Code APE"
Wait-ForUser "Code APE sélectionné ? ENTRÉE"

# Date début activité
Write-Host ""
Write-Host "  📋 Date de début d'activité:" -ForegroundColor Green
$DateDebut = Get-Date -Format "dd/MM/yyyy"
Write-Host "  → $DateDebut (aujourd'hui)" -ForegroundColor White
Copy-ToClipboard $DateDebut "Date début"
Wait-ForUser "Date de début remplie ? ENTRÉE"

Write-Log "Step 5: Activity declared"

# ============================================================
# ÉTAPE 6 : OPTIONS FISCALES
# ============================================================

Show-Step 6 10 "Options fiscales" "VFL et ACRE"
Show-Progress 6 10

Write-Host "  Configure tes options fiscales:" -ForegroundColor White
Write-Host ""

# VFL
Write-Host "  📋 Versement Forfaitaire Libératoire (VFL):" -ForegroundColor Green
Write-Host "  → Taux: $($Config.VFL)" -ForegroundColor White
Write-Host "  → Condition: revenu fiscal N-2 ≤ 29 579 €" -ForegroundColor Gray
Write-Host ""

$vflChoice = Confirm-Action "Activer le VFL ? (recommandé si éligible)"
if ($vflChoice) {
    Write-Host "  ✅ VFL sélectionné" -ForegroundColor Green
    Copy-ToClipboard "Oui" "VFL"
} else {
    Write-Host "  ⏭  VFL reporté" -ForegroundColor Yellow
    Copy-ToClipboard "Non" "VFL"
}

Write-Host ""

# ACRE
Write-Host "  📋 ACRE (Aide à la Création):" -ForegroundColor Green
Write-Host "  → Réduction: $($Config.ACRE)" -ForegroundColor White
Write-Host "  → Condition: pas été micro-entrepreneur les 3 dernières années" -ForegroundColor Gray
Write-Host ""
Write-Host "  ⚠️  À DEMANDER IMPÉRATIVEMENT à la création" -ForegroundColor Red

acreChoice = Confirm-Action "Demander l'ACRE ?"
if ($acreChoice) {
    Write-Host "  ✅ ACRE demandée" -ForegroundColor Green
    Copy-ToClipboard "Oui" "ACRE"
} else {
    Write-Host "  ⚠️  AC RE non demandée — tu pourras le regretter !" -ForegroundColor Red
    Copy-ToClipboard "Non" "ACRE"
}

Write-Log "Step 6: Fiscal options set"

# ============================================================
# ÉTAPE 7 : BANQUE
# ============================================================

Show-Step 7 10 "Compte bancaire" "Obligatoire si CA > 10 000 €/an"
Show-Progress 7 10

Write-Host "  Tu dois fournir un RIB (Relevé d'Identité Bancaire)." -ForegroundColor White
Write-Host ""
Write-Host "  📋 Informations bancaires:" -ForegroundColor Green
Write-Host "  → Tu devras entrer le RIB de ton compte bancaire dédié" -ForegroundColor Gray
Write-Host ""
Write-Host "  ⚠️  Si tu n'as pas encore de compte bancaire dédié:" -ForegroundColor Yellow
Write-Host "  → Crée un compte pro (Qonto, Shine, BNP Pro, etc.)" -ForegroundColor Gray
Write-Host "  → OU utilise ton compte perso (autorisé si CA < 10 000 €/an)" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "RIB prêt ? ENTRÉE"

Write-Log "Step 7: Bank info ready"

# ============================================================
# ÉTAPE 8 : VÉRIFICATION
# ============================================================

Show-Step 8 10 "Vérification finale" "Toutes les informations"
Show-Progress 8 10

Write-Host "  Vérifie TOUTES les informations avant de valider:" -ForegroundColor White
Write-Host ""
Write-Host "  ╔══════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║  RÉSUMÉ DE L'INSCRIPTION                            ║" -ForegroundColor Cyan
Write-Host "  ╠══════════════════════════════════════════════════════╣" -ForegroundColor Cyan
Write-Host "  ║  Nom: $Nom $Prenom".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Email: $Email".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Tél: $Telephone".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Né le: $DateNaissance".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Nationalité: $Nationalite".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║".PadRight(60) "║" -ForegroundColor Cyan
Write-Host "  ║  Adresse: $Adresse".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  CP/Ville: $CodePostal $Ville".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║".PadRight(60) "║" -ForegroundColor Cyan
Write-Host "  ║  Activité: $Activite".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Code APE: $($Config.CodeAPE) ($($Config.LibelleAPE))".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Début: $DateDebut".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║".PadRight(60) "║" -ForegroundColor Cyan
Write-Host "  ║  TVA: $($Config.TVA)".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  Cotisations: $($Config.Cotisations)".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  VFL: $(if ($vflChoice) { 'Oui (2,2%)' } else { 'Non' })".PadRight(50) "║" -ForegroundColor White
Write-Host "  ║  ACRE: $(if ($acreChoice) { 'Oui (-50%)' } else { 'Non' })".PadRight(50) "║" -ForegroundColor White
Write-Host "  ╚══════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Log "Step 8: Verification completed"

Wait-ForUser "Tout est correct ? ENTRÉE"

# ============================================================
# ÉTAPE 9 : VALIDATION
# ============================================================

Show-Step 9 10 "Validation et envoi" "Dernière étape"
Show-Progress 9 10

Write-Host "  Sur le formulaire, finalise:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Coche les cases de consentement" -ForegroundColor Gray
Write-Host "  2. Relis les conditions générales" -ForegroundColor Gray
Write-Host "  3. Clique sur 'Valider' ou 'Envoyer'" -ForegroundColor Gray
Write-Host ""
Write-Host "  ⚠️  NE FERME PAS LE NAVIGATEUR AVANT LA CONFIRMATION" -ForegroundColor Red
Write-Host ""

Write-Log "Step 9: Validation in progress"

Wait-ForUser "Formulaire validé et confirmation affichée ? ENTRÉE"

# ============================================================
# ÉTAPE 10 : CONFIRMATION
# ============================================================

Show-Step 10 10 "Confirmation" "Sauvegarde tes informations"
Show-Progress 10 10

Write-Host "  📧 Vérifie ta boîte mail pour la confirmation" -ForegroundColor Green
Write-Host ""
Write-Host "  ⏱  Délais:" -ForegroundColor White
Write-Host "  → Confirmation immédiate par email" -ForegroundColor Gray
Write-Host "  → SIRET attribué sous 1 à 3 semaines" -ForegroundColor Gray
Write-Host ""

# Demander le numéro de dossier
$NumeroDossier = Read-Host "  Numéro de dossier (si reçu, sinon ENTRÉE)"
if ($NumeroDossier) {
    $userData.NumeroDossier = $NumeroDossier
    Save-UserData $userData
    Copy-ToClipboard $NumeroDossier "Numéro de dossier"
}

Write-Log "Step 10: Confirmation received"

# ============================================================
# RÉCAPITULATIF COMPLET
# ============================================================

Show-Header
Write-Host "  🎉 INSCRIPTION TERMINÉE AVEC SUCCÈS !" -ForegroundColor Green
Write-Host ""
Write-Host "  ╔══════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║  RÉCAPITULATIF                                      ║" -ForegroundColor Cyan
Write-Host "  ╠══════════════════════════════════════════════════════╣" -ForegroundColor Cyan
Write-Host "  ║  ✅ Compte URSSAF créé                              ║" -ForegroundColor Green
Write-Host "  ║  ✅ Activité déclarée en BNC                        ║" -ForegroundColor Green
Write-Host "  ║  ✅ Code APE: $($Config.CodeAPE)                              ║" -ForegroundColor Green
Write-Host "  ║  ✅ TVA: Franchise en base                          ║" -ForegroundColor Green
if ($acreChoice) {
Write-Host "  ║  ✅ ACRE demandée (-50% cotisations)                ║" -ForegroundColor Green
}
if ($vflChoice) {
Write-Host "  ║  ✅ VFL activé (2,2% du CA)                         ║" -ForegroundColor Green
}
Write-Host "  ╚══════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

Write-Host "  📋 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. 📧 Vérifie ta boîte mail" -ForegroundColor White
Write-Host "  2. 🔑 Garde ton numéro de dossier" -ForegroundColor White
Write-Host "  3. 🏦 Ouvre un compte bancaire dédié" -ForegroundColor White
Write-Host "  4. 📊 Connecte-toi sur autoentrepreneur.urssaf.fr" -ForegroundColor White
Write-Host "  5. 📅 Déclare ton CA chaque mois (même si 0 €)" -ForegroundColor White
Write-Host ""

Write-Host "  📅 CALENDRIER FISCAL :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  → Chaque mois: Déclaration CA + cotisations URSSAF" -ForegroundColor Gray
Write-Host "  → 30 septembre: Date limite option VFL" -ForegroundColor Gray
Write-Host "  → Mai-juin: Déclaration revenus 2042 C Pro" -ForegroundColor Gray
Write-Host "  → 31 décembre: Clôture comptable" -ForegroundColor Gray
Write-Host ""

Write-Host "  💰 CHARGES ESTIMÉES (sans ACRE) :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  → CA 30 000 € → Charges 6 390 € → Reste 22 950 €" -ForegroundColor Gray
Write-Host "  → CA 50 000 € → Charges 10 650 € → Reste 38 250 €" -ForegroundColor Gray
Write-Host "  → CA 75 000 € → Charges 15 975 € → Reste 57 375 €" -ForegroundColor Gray
Write-Host ""

Write-Host "  🔗 LIENS UTILES :" -ForegroundColor Cyan
Write-Host ""
Write-Host "  → URSSAF: $($Config.UrlURSSAF)" -ForegroundColor Gray
Write-Host "  → Infogreffe: $($Config.UrlInfogreffe)" -ForegroundColor Gray
Write-Host "  → Service-Public: $($Config.UrlServicePublic)" -ForegroundColor Gray
Write-Host ""

Write-Host "  💾 Données sauvegardées: $DataFile" -ForegroundColor DarkGray
Write-Host "  📄 Journal: $LogFile" -ForegroundColor DarkGray
Write-Host ""

Write-Log "Inscription completed successfully"

Wait-ForUser "Appuie sur ENTRÉE pour quitter"
