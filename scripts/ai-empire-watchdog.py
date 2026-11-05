#!/usr/bin/env python3
"""Watchdog récursif ai-empire — 0 LLM, stdout vide si sain.

Vérifie en live avec cache-buster, UA navigateur, retry sur 000/403 :
health, gate succès factice, luxury sans auth, paywall tar.gz direct,
download gaté factice, prix affichés, sitemap sans success, en-têtes.
Sortie vide + exit 0 = sain. Anomalies imprimées + exit 1 sinon.
"""
import sys
import time
import urllib.request
import urllib.error

BASE = "https://ai-empire-steel.vercel.app"
UA = "Mozilla/5.0 (Linux; Android 15) AppleWebKit/537.36 Chrome/120 Safari/537.36"
ISSUES = []

def fetch(path, expect=(200,), retries=2):
    code, body, headers = 0, "", {}
    for attempt in range(retries + 1):
        cb = int(time.time() * 1000)
        sep = "&" if "?" in path else "?"
        url = f"{BASE}{path}{sep}cb={cb}"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            with urllib.request.urlopen(req, timeout=25) as r:
                code = r.status
                body = r.read().decode("utf-8", "ignore")
                headers = {k.lower(): v for k, v in r.headers.items()}
                return code, body, headers
        except urllib.error.HTTPError as e:
            code = e.code
            try:
                body = e.read().decode("utf-8", "ignore")
            except Exception:
                body = ""
            try:
                headers = {k.lower(): v for k, v in e.headers.items()}
            except Exception:
                headers = {}
            return code, body, headers
        except Exception:
            code = 0
            if attempt == retries:
                return code, body, headers
            time.sleep(3)
    return code, body, headers

def check(name, ok, detail=""):
    if not ok:
        ISSUES.append(f"{name} {detail}".strip())

# 1. Health DB + Stripe ok
c, b, _ = fetch("/api/health")
check("health", c == 200 and '"status":"ok"' in b, f"HTTP {c}")

# 2. Succès factice : titre Vérification, aucun Merci / Paiement Réussi
c, b, _ = fetch("/checkout/success?session_id=cs_test_invente_12345")
check("success-title", "Vérification du paiement" in b, f"HTTP {c}")
check("success-no-merci", "Merci pour votre achat" not in b)
check("success-no-reussi", "Paiement Réussi" not in b)

# 3. Verify factice 404
c, b, _ = fetch("/api/checkout/verify?session_id=cs_test_invente_12345")
check("verify-bogus", c == 404, f"HTTP {c}")

# 4. Luxury sans auth 401
c, b, _ = fetch("/api/luxury")
check("luxury-auth", c == 401, f"HTTP {c}")

# 5. Paywall : tar.gz direct 401
c, b, _ = fetch("/agent-pro.tar.gz")
check("paywall-tar-direct", c == 401, f"HTTP {c} (attendu 401, 200 = fuite paywall)")

# 6. Download gaté factice 404 (route existe, gate refuse)
c, b, _ = fetch("/api/templates/download?template_id=x&session_id=cs_test_invente_12345")
check("download-bogus", c == 404, f"HTTP {c}")

# 7. Prix affichés
c, b, _ = fetch("/pricing")
check("pricing", "49" in b and "149" in b, f"HTTP {c}")

# 8. Sitemap sans success, >= 100 loc
c, b, _ = fetch("/sitemap.xml")
locs = b.count("<loc>")
check("sitemap-count", c == 200 and locs >= 100, f"HTTP {c} loc={locs}")
check("sitemap-no-success", "/checkout/success" not in b)

# 9. En-têtes 6/6 sur /
c, b, h = fetch("/")
need = ["content-security-policy", "strict-transport-security", "x-frame-options",
        "x-content-type-options", "referrer-policy", "permissions-policy"]
missing = [k for k in need if k not in h]
check("headers", not missing, f"manquants: {','.join(missing)}")

if ISSUES:
    print("AI-EMPIRE WATCHDOG ANOMALIES:")
    for i in ISSUES:
        print(f"  - {i}")
    sys.exit(1)
sys.exit(0)
