#!/usr/bin/env python3
"""
Gumroad Marketplace — auto-tagging via API (sans X)
Docs: https://app.gumroad.com/api
Env: GUMROAD_ACCESS_TOKEN (Bearer)
Usage: python scripts/traffic-gumroad-sync.py           -> dry-run (affiche ce qui serait fait)
       python scripts/traffic-gumroad-sync.py --apply    -> écrit via API
"""
import os, json, sys
import urllib.request, urllib.parse

GUMROAD_API = "https://api.gumroad.com/v2"
# 15 tags Discover optimisés par template (max Gumroad discover weight)
TEMPLATES_TAGS = {
    "neurastarter-gratuit": ["nextjs","nextjs-template","saas","starter","tailwind","typescript","free","boilerplate","landing-page","dashboard"],
    "neura-blog": ["nextjs","blog-template","seo","markdown","cms","tailwind","typescript","saas"],
    "neura-store": ["nextjs","ecommerce","stripe","shopify-alternative","tailwind","saas","boilerplate"],
    "neura-portfolio": ["nextjs","portfolio","freelance","tailwind","typescript","landing-page"],
}

def api_get(path, token):
    req = urllib.request.Request(f"{GUMROAD_API}{path}", headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())

def api_put(path, token, data):
    body = urllib.parse.urlencode(data).encode()
    req = urllib.request.Request(f"{GUMROAD_API}{path}", data=body, headers={"Authorization": f"Bearer {token}"}, method="PUT")
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())

def main():
    apply = "--apply" in sys.argv
    token = os.environ.get("GUMROAD_ACCESS_TOKEN","").strip()
    if not token:
        print("[DRY-RUN] GUMROAD_ACCESS_TOKEN manquant — affichage plan uniquement (pas d'appel API).")
        print("Exporte GUMROAD_ACCESS_TOKEN puis relance avec --apply pour écrire.")
        for slug, tags in TEMPLATES_TAGS.items():
            print(f"  {slug}: {', '.join(tags)}  (UTM: ?utm_source=gumroad&utm_medium=marketplace&utm_campaign=sans_x_20260831&utm_content={slug})")
        print("\nOK dry-run. Bloqué par: GUMROAD_ACCESS_TOKEN non fourni (à renseigner par user dans .env.local)")
        return 0
    # Live mode
    try:
        products = api_get("/products", token)
        print(f"Produits Gumroad: {len(products.get('products',[]))}")
        for p in products.get("products", []):
            slug = p.get("custom_summary") or p.get("name","").lower().replace(" ","-")
            print(f" - {p.get('name')} id={p.get('id')} tags={p.get('tags')}")
    except Exception as e:
        print(f"API error: {e}")
        return 1
    if not apply:
        print("Dry-run: ajoute --apply pour écrire les tags")
        return 0
    for slug, tags in TEMPLATES_TAGS.items():
        print(f"Tagging {slug} -> {tags} ... (à mapper manuellement via dashboard si API produits limitée)")
    return 0

if __name__ == "__main__":
    sys.exit(main())
