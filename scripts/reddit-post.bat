@echo off
title AI Empire — Reddit Auto-Post
color 0A
echo.
echo =========================================
echo   AI EMPIRE — Reddit Auto-Post (1-Click)
echo =========================================
echo.
echo Ce script va :
echo 1. Ouvrir Reddit pour creer une app
echo 2. Te demander tes credentials
echo 3. Poster automatiquement sur r/webdev
echo.
echo Appuie sur Entree pour commencer...
pause >nul

powershell.exe -ExecutionPolicy Bypass -File "%~dp0reddit-post.ps1"
echo.
echo Appuie sur Entree pour fermer...
pause >nul
