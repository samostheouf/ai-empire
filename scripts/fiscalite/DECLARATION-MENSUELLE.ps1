# ============================================================
# NeuraAPI — Déclaration Mensuelle URSSAF
# Script guidé pour la déclaration mensuelle du CA
# ============================================================

$ErrorActionPreference = "Stop"
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$DataFile = Join-Path $ScriptDir "user-data.json"
$CAFile = Join-Path $ScriptDir "ca-historique.json"

# ============================================================
# CHARGEMENT DES DONNÉES
# ============================================================

if (-not (Test-Path $DataFile)) {
    Write-Host "  ❌ Données utilisateur non trouvées" -ForegroundColor Red
    exit 1
}

$userData = Get-Content -Path $DataFile -Raw | ConvertFrom-Json

# Charger l'historique CA
$caHistorique = @()
if (Test-Path $CAFile) {
    $caHistorique = @(Get-Content -Path $CAFile -Raw | ConvertFrom-Json)
}

# ============================================================
# FONCTIONS
# ============================================================

function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "  ║       Déclaration Mensuelle URSSAF                     ║" -ForegroundColor Cyan
    Write-Host "  ║       NeuraAPI — $($userData.Prenom) $($userData.Nom)".PadRight(57) "║" -ForegroundColor Cyan
    Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
    Write-Host ""
}

function Save-CAHistorique {
    $caHistorique | ConvertTo-Json | Set-Content -Path $CAFile -Encoding UTF8
}

# ============================================================
# MENU PRINCIPAL
# ============================================================

Show-Header

Write-Host "  Menu:" -ForegroundColor White
Write-Host ""
Write-Host "  1. 📊 Déclarer le CA du mois" -ForegroundColor Green
Write-Host "  2. 📈 Voir l'historique CA" -ForegroundColor Cyan
Write-Host "  3. 💰 Simuler les charges" -ForegroundColor Yellow
Write-Host "  4. 📅 Voir le calendrier fiscal" -ForegroundColor White
Write-Host "  5. 🔗 Ouvrir URSSAF" -ForegroundColor DarkGray
Write-Host "  6. ❌ Quitter" -ForegroundColor Red
Write-Host ""

do {
    $choix = Read-Host "  Choix [1]"
    if ([string]::IsNullOrWhiteSpace($choix)) { $choix = "1" }
} while ($choix -notin @("1", "2", "3", "4", "5", "6"))

switch ($choix) {
    "1" {
        # Déclarer le CA
        Clear-Host
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
        Write-Host "  ║       Déclaration du CA                                ║" -ForegroundColor Cyan
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
        Write-Host ""
        
        $Mois = Read-Host "  Mois (MM/AAAA) [$(Get-Date -Format 'MM/yyyy')]"
        if ([string]::IsNullOrWhiteSpace($Mois)) { $Mois = Get-Date -Format "MM/yyyy" }
        
        $CA = [double](Read-Host "  Chiffre d'affaires du mois (€)")
        
        # Calcul des charges
        $Cotisations = [math]::Round($CA * 0.213, 2)
        $VFL = [math]::Round($CA * 0.022, 2)
        $Total = $Cotisations + $VFL
        
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Yellow
        Write-Host "  ║  RÉSULTAT                                               ║" -ForegroundColor Yellow
        Write-Host "  ╠══════════════════════════════════════════════════════════╣" -ForegroundColor Yellow
        Write-Host "  ║  CA déclaré:        $($CA.ToString('N2')) €".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  Cotisations:       $($Cotisations.ToString('N2')) € (21,3%)".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  VFL:               $($VFL.ToString('N2')) € (2,2%)".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  Total à payer:     $($Total.ToString('N2')) €".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Yellow
        Write-Host ""
        
        # Sauvegarder
        $entry = @{
            Mois = $Mois
            CA = $CA
            Cotisations = $Cotisations
            VFL = $VFL
            Total = $Total
            DateDeclaration = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        }
        $caHistorique += $entry
        Save-CAHistorique
        
        Write-Host "  📋 Prochaines étapes:" -ForegroundColor Green
        Write-Host "  1. Connecte-toi sur autoentrepreneur.urssaf.fr" -ForegroundColor Gray
        Write-Host "  2. Va dans 'Mes déclarations'" -ForegroundColor Gray
        Write-Host "  3. Déclare le CA: $CA €" -ForegroundColor Gray
        Write-Host "  4. Valide la déclaration" -ForegroundColor Gray
        Write-Host "  5. Paiement automatique par prélèvement" -ForegroundColor Gray
        Write-Host ""
        
        # Copier le montant
        Set-Clipboard -Value $CA.ToString() -ErrorAction SilentlyContinue
        Write-Host "  ✅ Montant CA copié dans le presse-papiers" -ForegroundColor Green
    }
    
    "2" {
        # Historique
        Clear-Host
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
        Write-Host "  ║       Historique CA                                     ║" -ForegroundColor Cyan
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
        Write-Host ""
        
        if ($caHistorique.Count -eq 0) {
            Write-Host "  📭 Aucune déclaration enregistrée" -ForegroundColor Yellow
        } else {
            Write-Host "  Mois          CA            Charges       VFL           Total" -ForegroundColor White
            Write-Host "  ─────────────────────────────────────────────────────────────" -ForegroundColor DarkGray
            
            $totalCA = 0
            $totalCharges = 0
            
            foreach ($entry in $caHistorique) {
                Write-Host "  $($entry.Mois.PadRight(14))$($entry.CA.ToString('N2').PadRight(13))$($entry.Cotisations.ToString('N2').PadRight(13))$($entry.VFL.ToString('N2').PadRight(13))$($entry.Total.ToString('N2'))" -ForegroundColor Gray
                $totalCA += $entry.CA
                $totalCharges += $entry.Total
            }
            
            Write-Host "  ─────────────────────────────────────────────────────────────" -ForegroundColor DarkGray
            Write-Host "  TOTAL         $($totalCA.ToString('N2').PadRight(13))$(''.PadRight(13))$(''.PadRight(13))$($totalCharges.ToString('N2'))" -ForegroundColor Green
            Write-Host ""
            Write-Host "  📊 CA annuel: $($totalCA.ToString('N2')) €" -ForegroundColor Cyan
        }
    }
    
    "3" {
        # Simulation
        Clear-Host
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
        Write-Host "  ║       Simulation des charges                           ║" -ForegroundColor Cyan
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
        Write-Host ""
        
        $CAAnnuel = [double](Read-Host "  CA annuel estimé (€)")
        
        $Cotisations = [math]::Round($CAAnnuel * 0.213, 2)
        $VFL = [math]::Round($CAAnnuel * 0.022, 2)
        $Total = $Cotisations + $VFL
        $Net = $CAAnnuel - $Total
        
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Yellow
        Write-Host "  ║  SIMULATION                                             ║" -ForegroundColor Yellow
        Write-Host "  ╠══════════════════════════════════════════════════════════╣" -ForegroundColor Yellow
        Write-Host "  ║  CA annuel:         $($CAAnnuel.ToString('N2')) €".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  Cotisations:       $($Cotisations.ToString('N2')) € (21,3%)".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  VFL:               $($VFL.ToString('N2')) € (2,2%)".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  Total charges:     $($Total.ToString('N2')) €".PadRight(60) "║" -ForegroundColor White
        Write-Host "  ║  ─────────────────────────────────────────────────────".PadRight(60) "║" -ForegroundColor Cyan
        Write-Host "  ║  NET avant IR:      $($Net.ToString('N2')) €".PadRight(60) "║" -ForegroundColor Green
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Yellow
    }
    
    "4" {
        # Calendrier
        Clear-Host
        Write-Host ""
        Write-Host "  ╔══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
        Write-Host "  ║       Calendrier Fiscal 2025/2026                       ║" -ForegroundColor Cyan
        Write-Host "  ╚══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
        Write-Host ""
        
        $moisActuel = Get-Date -Month
        
        $calendrier = @(
            @{ Mois = "Janvier"; Action = "Déclaration CA décembre + Cotisations"; Urgent = ($moisActuel -eq 1) }
            @{ Mois = "Février"; Action = "Déclaration CA janvier"; Urgent = ($moisActuel -eq 2) }
            @{ Mois = "Mars"; Action = "Déclaration CA février"; Urgent = ($moisActuel -eq 3) }
            @{ Mois = "Avril"; Action = "Déclaration CA mars (T1)"; Urgent = ($moisActuel -eq 4) }
            @{ Mois = "Mai"; Action = "Déclaration revenus 2042 C Pro"; Urgent = ($moisActuel -eq 5) }
            @{ Mois = "Juin"; Action = "Déclaration CA mai"; Urgent = ($moisActuel -eq 6) }
            @{ Mois = "Juillet"; Action = "Déclaration CA juin (T2)"; Urgent = ($moisActuel -eq 7) }
            @{ Mois = "Août"; Action = "Déclaration CA juillet"; Urgent = ($moisActuel -eq 8) }
            @{ Mois = "Septembre"; Action = "Date limite VFL + Déclaration CA août"; Urgent = ($moisActuel -eq 9) }
            @{ Mois = "Octobre"; Action = "Déclaration CA septembre (T3)"; Urgent = ($moisActuel -eq 10) }
            @{ Mois = "Novembre"; Action = "Avis d'imposition CFE"; Urgent = ($moisActuel -eq 11) }
            @{ Mois = "Décembre"; Action = "Déclaration CA novembre + Clôture"; Urgent = ($moisActuel -eq 12) }
        )
        
        foreach ($item in $calendrier) {
            if ($item.Urgent) {
                Write-Host "  🔴 $($item.Mois): $($item.Action)" -ForegroundColor Red
            } else {
                Write-Host "  ⚪ $($item.Mois): $($item.Action)" -ForegroundColor Gray
            }
        }
        
        Write-Host ""
        Write-Host "  🔴 = Mois actuel" -ForegroundColor Red
    }
    
    "5" {
        # Ouvrir URSSAF
        Start-Process "https://autoentrepreneur.urssaf.fr"
        Write-Host "  🌐 URSSAF ouvert dans le navigateur" -ForegroundColor Cyan
    }
    
    "6" {
        Write-Host ""
        Write-Host "  👋 À bientôt !" -ForegroundColor Green
        exit
    }
}
