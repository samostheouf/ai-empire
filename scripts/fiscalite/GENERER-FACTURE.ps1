# ============================================================
# NeuraAPI — Générateur de Modèle de Facture Conforme
# Génère un modèle de facture avec toutes les mentions légales
# ============================================================

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$OutputDir = Join-Path $ScriptDir "factures"
$DataFile = Join-Path $ScriptDir "user-data.json"

# ============================================================
# CHARGEMENT DES DONNÉES
# ============================================================

if (-not (Test-Path $DataFile)) {
    Write-Host "  ❌ Données utilisateur non trouvées" -ForegroundColor Red
    Write-Host "  → Lance d'abord INSCRIPTION-AUTOENTREPRENEUR.ps1" -ForegroundColor Yellow
    exit 1
}

$userData = Get-Content -Path $DataFile -Raw | ConvertFrom-Json

# ============================================================
# CONFIGURATION
# ============================================================

$Facture = @{
    # Vendeur
    NomVendeur = "$($userData.Prenom) $($userData.Nom)"
    Societe = "NeuraAPI — $($userData.Prenom) $($userData.Nom)"
    AdresseVendeur = "61 rue Raymond Poincaré"
    CPVille = "57700 Hayange"
    Pays = "France"
    SIRET = "931 277 359 00012"
    Email = $userData.Email
    Telephone = $userData.Telephone
    
    # TVA
    TVA = "Non applicable"
    MentionTVA = "TVA non applicable - article 293 B du CGI"
    Regime = "Micro-entrepreneur — Régime de la franchise en base"
    
    # Activité
    Activite = $userData.Activite
    CodeAPE = "6201Z"
    
    # Mentions légales
    MentionsLegales = @(
        "En vertu de l'article L.441-9 du Code de commerce,"
        "les informations figurant sur la présente facture sont"
        "exactes à la date de son établissement."
        "",
        "En cas de retard de paiement, des pénalités de retard"
        "au taux de 3 fois le taux d'intérêt légal seront appliquées"
        "(article L.441-10 du Code de commerce)."
        "",
        "Une indemnité forfaitaire de 40 euros sera due en cas de"
        "retard de paiement (article D.441-5 du Code de commerce)."
    )
}

# ============================================================
# GÉNÉRATION DU MODÈLE
# ============================================================

function New-FactureTemplate {
    param(
        [string]$NumeroFacture,
        [string]$DateFacture,
        [string]$NomClient,
        [string]$Description,
        [double]$MontantHT
    )
    
    $TVA = 0  # Franchise en base
    $TTC = $MontantHT + $TVA
    
    $template = @"
╔══════════════════════════════════════════════════════════════════════════╗
║                           FACTURE                                       ║
╚══════════════════════════════════════════════════════════════════════════╝

Numéro: $NumeroFacture
Date: $DateFacture

────────────────────────────────────────────────────────────────────────────

ÉMETTEUR:
$($Facture.Societe)
$($Facture.AdresseVendeur)
$($Facture.CPVille), $($Facture.Pays)
SIRET: $($Facture.SIRET)
Email: $($Facture.Email)
Tél: $($Facture.Telephone)

────────────────────────────────────────────────────────────────────────────

CLIENT:
$NomClient

────────────────────────────────────────────────────────────────────────────

DESCRIPTION                          MONTANT HT
────────────────────────────────────────────────────────────────────────────
$($Description.PadRight(50))     $($MontantHT.ToString("N2")) €

────────────────────────────────────────────────────────────────────────────

                                     Total HT:    $($MontantHT.ToString("N2")) €
                                     TVA:         0,00 €
                                     Total TTC:   $($TTC.ToString("N2")) €

────────────────────────────────────────────────────────────────────────────

RÉGIME FISCAL:
$($Facture.Regime)
$($Facture.MentionTVA)

────────────────────────────────────────────────────────────────────────────

CONDITIONS DE PAIEMENT:
Paiement à réception de facture.
En cas de retard de paiement, pénalités au taux de 3 fois le taux
d'intérêt légal + indemnité forfaitaire de 40 €.

────────────────────────────────────────────────────────────────────────────

MENTIONS LÉGALES:
$($Facture.MentionsLegales -join "`n")

────────────────────────────────────────────────────────────────────────────
"@
    
    return $template
}

# ============================================================
# INTERFACE
# ============================================================

Clear-Host
Write-Host ""
Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║       Générateur de Facture Conforme                    ║" -ForegroundColor Cyan
Write-Host "  ║       NeuraAPI — Samy Multiservice                      ║" -ForegroundColor Cyan
Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Créer le dossier de sortie
if (-not (Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
}

# Demander les infos
Write-Host "  Informations de la facture:" -ForegroundColor White
Write-Host ""

$NumeroFacture = Read-Host "  Numéro de facture (ex: NEURA-2025-001)"
$DateFacture = Read-Host "  Date (JJ/MM/AAAA) [$(Get-Date -Format 'dd/MM/yyyy')]"
if ([string]::IsNullOrWhiteSpace($DateFacture)) { $DateFacture = Get-Date -Format "dd/MM/yyyy" }

$NomClient = Read-Host "  Nom du client"
$Description = Read-Host "  Description de la prestation"
$MontantHT = [double](Read-Host "  Montant HT (€)")

# Générer la facture
Write-Host ""
Write-Host "  Génération de la facture..." -ForegroundColor Yellow

$factureContent = New-FactureTemplate `
    -NumeroFacture $NumeroFacture `
    -DateFacture $DateFacture `
    -NomClient $NomClient `
    -Description $Description `
    -MontantHT $MontantHT

# Sauvegarder
$fileName = "Facture-$NumeroFacture-$(Get-Date -Format 'yyyyMMdd').txt"
$filePath = Join-Path $OutputDir $fileName
$factureContent | Set-Content -Path $filePath -Encoding UTF8

Write-Host ""
Write-Host "  ✅ Facture générée !" -ForegroundColor Green
Write-Host "  📄 Fichier: $filePath" -ForegroundColor Cyan
Write-Host ""

# Afficher la facture
Write-Host "  Aperçu:" -ForegroundColor White
Write-Host ""
Write-Host $factureContent

Write-Host ""
Write-Host "  📋 Mentions légales vérifiées:" -ForegroundColor Green
Write-Host "  ✓ SIRET présent" -ForegroundColor Gray
Write-Host "  ✓ Mention TVA (article 293 B CGI)" -ForegroundColor Gray
Write-Host "  ✓ Pénalités de retard" -ForegroundColor Gray
Write-Host "  ✓ Indemnité forfaitaire 40 €" -ForegroundColor Gray
Write-Host "  ✓ Conditions de paiement" -ForegroundColor Gray
Write-Host ""

Write-Host "  🔗 Pour envoyer la facture:" -ForegroundColor Yellow
Write-Host "  → Par email depuis $OutputDir" -ForegroundColor Gray
Write-Host "  → Ou via Stripe (automatique)" -ForegroundColor Gray
Write-Host ""
