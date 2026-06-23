@echo off
title AI EMPIRE — Post Social Media (1-Click)
color 0A
echo.
echo =========================================
echo   AI EMPIRE — Post Social Media
echo =========================================
echo.
echo  Ce script va :
echo   1. Ouvrir Reddit, Twitter, LinkedIn
echo   2. Copier le contenu dans le presse-papier
echo   3. Tu colles et publies
echo.
echo  Appuie sur Entree pour commencer...
pause >nul

powershell.exe -ExecutionPolicy Bypass -File "%~dp0post-all.ps1"

echo.
echo Appuie sur Entree pour fermer...
pause >nul
