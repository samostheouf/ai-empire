@echo off
title AI EMPIRE — Copie rapide
color 0A
echo.
echo =========================================
echo   COPIE RAPIDE — Presse-papier
echo =========================================
echo.
echo  Choisir :
echo    1. Reddit
echo    2. Twitter
echo    3. LinkedIn
echo    4. Tout
echo.
set /p choice="Ton choix (1-4): "

if "%choice%"=="1" powershell.exe -ExecutionPolicy Bypass -File "%~dp0copy-content.ps1" reddit
if "%choice%"=="2" powershell.exe -ExecutionPolicy Bypass -File "%~dp0copy-content.ps1" twitter
if "%choice%"=="3" powershell.exe -ExecutionPolicy Bypass -File "%~dp0copy-content.ps1" linkedin
if "%choice%"=="4" powershell.exe -ExecutionPolicy Bypass -File "%~dp0copy-content.ps1" all

echo.
echo Appuie sur Entree pour fermer...
pause >nul
