# ============================================================
# NeuraAPI - Inscription Auto-Entrepreneur URSSAF
# Script guide etape par etape (securise, pas de controle PC)
# ============================================================

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$DataFile = Join-Path $ScriptDir "user-data.json"
$LogFile = Join-Path $ScriptDir "inscription.log"
$Url = "https://autoentrepreneur.urssaf.fr"

# --- Donnees personnelles (a remplir) ---
$Nom = ""
$Prenom = ""
$Email = ""
$Telephone = ""
$Adresse = "61 rue Raymond Poincare"
$CodePostal = "57700"
$Ville = "Hayange"
$SIRET = "931 277 359 00012"
$DateNaissance = ""
$Nationalite = "Francaise"
$Activite = ""

# --- Fonctions utilitaires ---
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logEntry = "[$timestamp] [$Level] $Message"
    Add-Content -Path $LogFile -Value $logEntry -ErrorAction SilentlyContinue
}

function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================" -ForegroundColor Cyan
    Write-Host "    Inscription Auto-Entrepreneur URSSAF     " -ForegroundColor Cyan
    Write-Host "    NeuraAPI - Samy Multiservice              " -ForegroundColor Cyan
    Write-Host "  ============================================" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Step {
    param([int]$Step, [int]$Total, [string]$Title)
    Write-Host ""
    Write-Host "  --- ETAPE $Step/$Total --- $Title ---" -ForegroundColor Yellow
    Write-Host ""
}

function Show-Progress {
    param([int]$Current, [int]$Total)
    $percent = [math]::Round(($Current / $Total) * 100)
    $filled = [math]::Floor($percent / 5)
    $empty = 20 - $filled
    $bar = "#" * $filled + "-" * $empty
    Write-Host "  Progression: [$bar] $percent%" -ForegroundColor Cyan
}

function Wait-ForUser {
    param([string]$Message = "Appuie sur ENTREE pour continuer...")
    Write-Host ""
    Write-Host "  -> $Message" -ForegroundColor Gray
    Read-Host
}

function Copy-ToClipboard {
    param([string]$Text, [string]$Label = "")
    try {
        Set-Clipboard -Value $Text -ErrorAction Stop
        if ($Label) {
            Write-Host "  [OK] $Label copie dans le presse-papiers !" -ForegroundColor Green
        } else {
            Write-Host "  [OK] Copie dans le presse-papiers !" -ForegroundColor Green
        }
        Write-Log "Clipboard: $Label = $Text"
    } catch {
        Write-Host "  [!] Copie manuelle requise" -ForegroundColor Yellow
        Write-Log "Clipboard failed: $Label" "WARN"
    }
}

function Show-Field {
    param([string]$Label, [string]$Value, [switch]$Copy)
    Write-Host "  $Label : $Value" -ForegroundColor Green
    if ($Copy) {
        Copy-ToClipboard $Value $Label
    }
}

function Open-Url {
    param([string]$Url, [string]$Description = "")
    Start-Process $Url
    Write-Host "  Navigateur ouvert: $Description $Url" -ForegroundColor Cyan
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
# ETAPE 0 : CHARGEMENT DES DONNEES
# ============================================================

Show-Header

$savedData = Load-UserData
if ($savedData) {
    Write-Host "  Donnees sauvegardees trouvees !" -ForegroundColor Green
    Write-Host ""
    Write-Host "  Nom: $($savedData.Nom) $($savedData.Prenom)" -ForegroundColor Gray
    Write-Host "  Email: $($savedData.Email)" -ForegroundColor Gray
    Write-Host "  Activite: $($savedData.Activite)" -ForegroundColor Gray
    Write-Host ""
    
    if (Confirm-Action "Utiliser les donnees sauvegardees ?") {
        $Nom = $savedData.Nom
        $Prenom = $savedData.Prenom
        $Email = $savedData.Email
        $Telephone = $savedData.Telephone
        $Activite = $savedData.Activite
        $DateNaissance = $savedData.DateNaissance
        $Nationalite = $savedData.Nationalite
        Write-Host ""
        Write-Host "  Donnees chargees" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "  Nouvelle saisie..." -ForegroundColor Yellow
    }
} else {
    Write-Host "  Premiere execution - saisie des donnees requise" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "  Ce script va te guider pour creer ton compte" -ForegroundColor White
Write-Host "  auto-entrepreneur sur le site URSSAF." -ForegroundColor White
Write-Host ""
Write-Host "  Duree estimee: 10-15 minutes" -ForegroundColor DarkGray
Write-Host "  A faire AVANT la premiere vente" -ForegroundColor Red
Write-Host "  Tes donnees seront sauvegardees pour reutilisation" -ForegroundColor DarkGray
Write-Host ""

Wait-ForUser "Pret ? Appuie sur ENTREE"

# ============================================================
# ETAPE 1 : COLLECTE DES INFORMATIONS
# ============================================================

Show-Step 1 10 "Collecte des informations personnelles"
Show-Progress 1 10

Write-Host "  Renseigne tes informations:" -ForegroundColor White
Write-Host ""

# Nom
if (-not $Nom) {
    do {
        $Nom = Read-Host "  Nom de famille"
    } while ([string]::IsNullOrWhiteSpace($Nom))
}

# Prenom
if (-not $Prenom) {
    do {
        $Prenom = Read-Host "  Prenom"
    } while ([string]::IsNullOrWhiteSpace($Prenom))
}

# Email
if (-not $Email) {
    do {
        $Email = Read-Host "  Email"
    } while ($Email -notmatch "^[^@]+@[^@]+\.[^@]+$")
}

# Telephone
if (-not $Telephone) {
    do {
        $Telephone = Read-Host "  Telephone (ex: 06 29 41 85 24)"
    } while ([string]::IsNullOrWhiteSpace($Telephone))
}

# Date de naissance
if (-not $DateNaissance) {
    do {
        $DateNaissance = Read-Host "  Date de naissance (JJ/MM/AAAA)"
    } while ($DateNaissance -notmatch "^\d{2}/\d{2}/\d{4}$")
}

# Nationalite
if (-not $Nationalite -or $Nationalite -eq "") {
    $NationaliteInput = Read-Host "  Nationalite [Francaise]"
    if ([string]::IsNullOrWhiteSpace($NationaliteInput)) { $Nationalite = "Francaise" } else { $Nationalite = $NationaliteInput }
}

# Activite
if (-not $Activite) {
    Write-Host ""
    Write-Host "  Type d'activite:" -ForegroundColor White
    Write-Host "  1. Vente de templates web" -ForegroundColor Gray
    Write-Host "  2. Developpement d'API IA" -ForegroundColor Gray
    Write-Host "  3. Les deux (recommande)" -ForegroundColor Green
    do {
        $choix = Read-Host "  Choix [3]"
    } while ($choix -notin @("1", "2", "3", ""))
    
    switch ($choix) {
        "1" { $Activite = "Vente de templates web" }
        "2" { $Activite = "Developpement d'API d'intelligence artificielle" }
        default { $Activite = "Vente de templates web et developpement d'API d'intelligence artificielle" }
    }
}

# Sauvegarder les donnees
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
Write-Host "  Informations collectees" -ForegroundColor Green
Write-Log "Step 1 completed: Info collected for $Prenom $Nom"

Wait-ForUser "Infos correctes ? ENTREE"

# ============================================================
# ETAPE 2 : OUVRIR LE SITE URSSAF
# ============================================================

Show-Step 2 10 "Ouvrir le site URSSAF"
Show-Progress 2 10

Open-Url $Url "Site officiel URSSAF"
Start-Sleep -Seconds 3

Write-Host ""
Write-Host "  Sur le site URSSAF:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Clique sur 'Se connecter'" -ForegroundColor Gray
Write-Host "  2. Clique sur 'Creer un compte'" -ForegroundColor Gray
Write-Host "  3. Remplis le formulaire de creation" -ForegroundColor Gray
Write-Host ""
Write-Host "  Email a utiliser: $Email" -ForegroundColor Cyan
Copy-ToClipboard $Email "Email"

Write-Host ""
Write-Host "  IMPORTANT: Verifie ta boite mail pour confirmer le compte" -ForegroundColor Red

Write-Log "Step 2: URSSAF website opened"

Wait-ForUser "Compte cree et confirme par email ? ENTREE"

# ============================================================
# ETAPE 3 : INFORMATIONS PERSONNELLES
# ============================================================

Show-Step 3 10 "Remplir les informations personnelles"
Show-Progress 3 10

Write-Host "  Sur le formulaire URSSAF, remplis:" -ForegroundColor White
Write-Host ""

Show-Field "Nom" $Nom -Copy
Wait-ForUser "Nom rempli ? ENTREE"

Show-Field "Prenom" $Prenom -Copy
Wait-ForUser "Prenom rempli ? ENTREE"

Show-Field "Date de naissance" $DateNaissance -Copy
Wait-ForUser "Date de naissance remplie ? ENTREE"

Show-Field "Nationalite" $Nationalite -Copy
Wait-ForUser "Nationalite remplie ? ENTREE"

Show-Field "Email" $Email -Copy
Wait-ForUser "Email rempli ? ENTREE"

Show-Field "Telephone" $Telephone -Copy
Wait-ForUser "Telephone rempli ? ENTREE"

Write-Log "Step 3: Personal info filled"

# ============================================================
# ETAPE 4 : ADRESSE
# ============================================================

Show-Step 4 10 "Remplir l'adresse"
Show-Progress 4 10

Write-Host "  Sur le formulaire, remplis l'adresse:" -ForegroundColor White
Write-Host ""

Show-Field "Adresse" $Adresse -Copy
Wait-ForUser "Adresse remplie ? ENTREE"

Show-Field "Code postal" $CodePostal -Copy
Wait-ForUser "Code postal rempli ? ENTREE"

Show-Field "Ville" $Ville -Copy
Wait-ForUser "Ville remplie ? ENTREE"

Write-Log "Step 4: Address filled"

# ============================================================
# ETAPE 5 : ACTIVITE
# ============================================================

Show-Step 5 10 "Declarer l'activite"
Show-Progress 5 10

Write-Host "  Sur le formulaire, choisis:" -ForegroundColor White
Write-Host ""

Write-Host "  Type d'activite: Activite liberale non reglementee" -ForegroundColor Green
Copy-ToClipboard "Activite liberale non reglementee" "Categorie"
Wait-ForUser "Type d'activite selectionne ? ENTREE"

Write-Host ""
Write-Host "  Description: $Activite" -ForegroundColor Green
Copy-ToClipboard $Activite "Description"
Wait-ForUser "Description remplie ? ENTREE"

Write-Host ""
Write-Host "  Code APE/NAF: 6201Z (Programmation informatique)" -ForegroundColor Green
Copy-ToClipboard "6201Z" "Code APE"
Wait-ForUser "Code APE selectionne ? ENTREE"

$DateDebut = Get-Date -Format "dd/MM/yyyy"
Write-Host ""
Write-Host "  Date de debut d'activite: $DateDebut (aujourd'hui)" -ForegroundColor Green
Copy-ToClipboard $DateDebut "Date debut"
Wait-ForUser "Date de debut remplie ? ENTREE"

Write-Log "Step 5: Activity declared"

# ============================================================
# ETAPE 6 : OPTIONS FISCALES
# ============================================================

Show-Step 6 10 "Options fiscales (VFL et ACRE)"
Show-Progress 6 10

Write-Host "  Configure tes options fiscales:" -ForegroundColor White
Write-Host ""

Write-Host "  Versement Forfaitaire Liberatoire (VFL):" -ForegroundColor Green
Write-Host "  Taux: 2,2% du CA (BNC)" -ForegroundColor White
Write-Host "  Condition: revenu fiscal N-2 inferieur a 29 579 EUR" -ForegroundColor Gray
Write-Host ""

$vflChoice = Confirm-Action "Activer le VFL ? (recommande si eligible)"
if ($vflChoice) {
    Write-Host "  VFL selectionne" -ForegroundColor Green
    Copy-ToClipboard "Oui" "VFL"
} else {
    Write-Host "  VFL reporte" -ForegroundColor Yellow
    Copy-ToClipboard "Non" "VFL"
}

Write-Host ""

Write-Host "  ACRE (Aide a la Creation):" -ForegroundColor Green
Write-Host "  Reduction: 50% de reduction des cotisations la 1ere annee" -ForegroundColor White
Write-Host "  Condition: pas ete micro-entrepreneur les 3 dernieres annees" -ForegroundColor Gray
Write-Host ""
Write-Host "  A DEMANDER IMPERATIVEMENT a la creation" -ForegroundColor Red

$acreChoice = Confirm-Action "Demander l'ACRE ?"
if ($acreChoice) {
    Write-Host "  ACRE demandee" -ForegroundColor Green
    Copy-ToClipboard "Oui" "ACRE"
} else {
    Write-Host "  ACRE non demandee - tu pourras le regretter !" -ForegroundColor Red
    Copy-ToClipboard "Non" "ACRE"
}

Write-Log "Step 6: Fiscal options set"

# ============================================================
# ETAPE 7 : BANQUE
# ============================================================

Show-Step 7 10 "Compte bancaire"
Show-Progress 7 10

Write-Host "  Tu dois fournir un RIB (Releve d'Identite Bancaire)." -ForegroundColor White
Write-Host ""
Write-Host "  Informations bancaires:" -ForegroundColor Green
Write-Host "  Tu devras entrer le RIB de ton compte bancaire dedie" -ForegroundColor Gray
Write-Host ""
Write-Host "  Si tu n'as pas encore de compte bancaire dedie:" -ForegroundColor Yellow
Write-Host "  -> Cree un compte pro (Qonto, Shine, BNP Pro, etc.)" -ForegroundColor Gray
Write-Host "  -> OU utilise ton compte perso (autorise si CA < 10 000 EUR/an)" -ForegroundColor Gray
Write-Host ""

Wait-ForUser "RIB pret ? ENTREE"

Write-Log "Step 7: Bank info ready"

# ============================================================
# ETAPE 8 : VERIFICATION
# ============================================================

Show-Step 8 10 "Verification finale"
Show-Progress 8 10

Write-Host "  Verifie TOUTES les informations avant de valider:" -ForegroundColor White
Write-Host ""
Write-Host "  RESUME DE L'INSCRIPTION:" -ForegroundColor Cyan
Write-Host "  Nom: $Nom $Prenom" -ForegroundColor White
Write-Host "  Email: $Email" -ForegroundColor White
Write-Host "  Telephone: $Telephone" -ForegroundColor White
Write-Host "  Ne le: $DateNaissance" -ForegroundColor White
Write-Host "  Nationalite: $Nationalite" -ForegroundColor White
Write-Host "  Adresse: $Adresse" -ForegroundColor White
Write-Host "  CP/Ville: $CodePostal $Ville" -ForegroundColor White
Write-Host "  Activite: $Activite" -ForegroundColor White
Write-Host "  Code APE: 6201Z (Programmation informatique)" -ForegroundColor White
Write-Host "  Debut: $DateDebut" -ForegroundColor White
Write-Host "  TVA: Franchise en base (article 293 B du CGI)" -ForegroundColor White
Write-Host "  Cotisations: 21,3% du CA" -ForegroundColor White
Write-Host "  VFL: $(if ($vflChoice) { 'Oui (2,2%)' } else { 'Non' })" -ForegroundColor White
Write-Host "  ACRE: $(if ($acreChoice) { 'Oui (-50%)' } else { 'Non' })" -ForegroundColor White
Write-Host ""

Write-Log "Step 8: Verification completed"

Wait-ForUser "Tout est correct ? ENTREE"

# ============================================================
# ETAPE 9 : VALIDATION
# ============================================================

Show-Step 9 10 "Validation et envoi"
Show-Progress 9 10

Write-Host "  Sur le formulaire, finalise:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Coche les cases de consentement" -ForegroundColor Gray
Write-Host "  2. Relis les conditions generales" -ForegroundColor Gray
Write-Host "  3. Clique sur 'Valider' ou 'Envoyer'" -ForegroundColor Gray
Write-Host ""
Write-Host "  NE FERME PAS LE NAVIGATEUR AVANT LA CONFIRMATION" -ForegroundColor Red
Write-Host ""

Write-Log "Step 9: Validation in progress"

Wait-ForUser "Formulaire valide et confirmation affichee ? ENTREE"

# ============================================================
# ETAPE 10 : CONFIRMATION
# ============================================================

Show-Step 10 10 "Confirmation"
Show-Progress 10 10

Write-Host "  Verifie ta boite mail pour la confirmation" -ForegroundColor Green
Write-Host ""
Write-Host "  Delais:" -ForegroundColor White
Write-Host "  Confirmation immediate par email" -ForegroundColor Gray
Write-Host "  SIRET attribue sous 1 a 3 semaines" -ForegroundColor Gray
Write-Host ""

$NumeroDossier = Read-Host "  Numero de dossier (si recu, sinon ENTREE)"
if ($NumeroDossier) {
    $userData.NumeroDossier = $NumeroDossier
    Save-UserData $userData
    Copy-ToClipboard $NumeroDossier "Numero de dossier"
}

Write-Log "Step 10: Confirmation received"

# ============================================================
# RECAPITULATIF COMPLET
# ============================================================

Show-Header
Write-Host "  INSCRIPTION TERMINEE AVEC SUCCES !" -ForegroundColor Green
Write-Host ""
Write-Host "  RECAPITULATIF:" -ForegroundColor Cyan
Write-Host "  [OK] Compte URSSAF cree" -ForegroundColor Green
Write-Host "  [OK] Activite declaree en BNC" -ForegroundColor Green
Write-Host "  [OK] Code APE: 6201Z" -ForegroundColor Green
Write-Host "  [OK] TVA: Franchise en base" -ForegroundColor Green
if ($acreChoice) {
Write-Host "  [OK] ACRE demandee (-50% cotisations)" -ForegroundColor Green
}
if ($vflChoice) {
Write-Host "  [OK] VFL active (2,2% du CA)" -ForegroundColor Green
}
Write-Host ""

Write-Host "  PROCHAINES ETAPES :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  1. Verifie ta boite mail" -ForegroundColor White
Write-Host "  2. Garde ton numero de dossier" -ForegroundColor White
Write-Host "  3. Ouvre un compte bancaire dedie" -ForegroundColor White
Write-Host "  4. Connecte-toi sur autoentrepreneur.urssaf.fr" -ForegroundColor White
Write-Host "  5. Declare ton CA chaque mois (meme si 0 EUR)" -ForegroundColor White
Write-Host ""

Write-Host "  CALENDRIER FISCAL :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  Chaque mois: Declaration CA + cotisations URSSAF" -ForegroundColor Gray
Write-Host "  30 septembre: Date limite option VFL" -ForegroundColor Gray
Write-Host "  Mai-juin: Declaration revenus 2042 C Pro" -ForegroundColor Gray
Write-Host "  31 decembre: Cloture comptable" -ForegroundColor Gray
Write-Host ""

Write-Host "  CHARGES ESTIMEES (sans ACRE) :" -ForegroundColor Yellow
Write-Host ""
Write-Host "  CA 30 000 EUR -> Charges 6 390 EUR -> Reste 22 950 EUR" -ForegroundColor Gray
Write-Host "  CA 50 000 EUR -> Charges 10 650 EUR -> Reste 38 250 EUR" -ForegroundColor Gray
Write-Host "  CA 75 000 EUR -> Charges 15 975 EUR -> Reste 57 375 EUR" -ForegroundColor Gray
Write-Host ""

Write-Host "  LIENS UTILES :" -ForegroundColor Cyan
Write-Host ""
Write-Host "  URSSAF: https://autoentrepreneur.urssaf.fr" -ForegroundColor Gray
Write-Host "  Infogreffe: https://infogreffe.fr" -ForegroundColor Gray
Write-Host "  Service-Public: https://www.service-public.fr" -ForegroundColor Gray
Write-Host ""

Write-Host "  Donnees sauvegardees: $DataFile" -ForegroundColor DarkGray
Write-Host "  Journal: $LogFile" -ForegroundColor DarkGray
Write-Host ""

Write-Log "Inscription completed successfully"

Wait-ForUser "Appuie sur ENTREE pour quitter"
