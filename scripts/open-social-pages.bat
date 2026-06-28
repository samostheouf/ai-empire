@echo off
echo ========================================
echo   NeuraAPI — Ouvrir les pages API
echo ========================================
echo.
echo Ouverture des 3 pages de developpeur...
echo.

start https://developer.twitter.com/en/portal/dashboard
timeout /t 2 /nobreak >nul
start https://www.reddit.com/prefs/apps
timeout /t 2 /nobreak >nul
start https://www.linkedin.com/developers/apps

echo.
echo 3 pages ouvertes dans le navigateur !
echo.
echo Quand tu as les clés, envoie-les moi et
echo je les configure automatiquement.
echo.
pause
