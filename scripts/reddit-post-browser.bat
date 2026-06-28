@echo off
title AI Empire — Reddit Browser Post
color 0A
echo.
echo =========================================
echo   AI EMPIRE — Reddit Browser Post (Simple)
echo =========================================
echo.
echo This script opens Reddit with the title pre-filled.
echo No API credentials needed.
echo.
echo Press Enter to continue...
pause >nul

powershell.exe -ExecutionPolicy Bypass -File "%~dp0reddit-post-browser.ps1"
echo.
echo Press Enter to close...
pause >nul
