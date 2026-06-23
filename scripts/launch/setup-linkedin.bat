@echo off
title LinkedIn Setup Guide
color 0B
echo.
echo =========================================
echo   LINKEDIN — Setup Guide (1-Click)
echo =========================================
echo.
echo  Ce script guide pas a pas pour creer
echo  ton application LinkedIn.
echo.
echo  Appuie sur Entree pour commencer...
pause >nul

powershell.exe -ExecutionPolicy Bypass -File "%~dp0setup-linkedin.ps1"

echo.
echo Appuie sur Entree pour fermer...
pause >nul
