#!/usr/bin/env python3
"""Retirer la fenetre temporelle inventee (« vente flash 3 jours ») de /luxury.

Le floor est 4500€ ABSOLU et sans echeance (mesure 20/10 : luxury-pricing ->
HOLD 4500, daysActive 45.9). Annoncer une « flash sale 3 jours » promet une
echeance qui n'existe pas — meme famille que la taille ou l'origine inventee.
Remplace par un prix ferme sans limite de temps.

Cible : luxuryPoint8 + luxuryFaqA2 dans les 11 dictionnaires (luxury.ts porte
les 10 locales en clair, les 10 fichiers de locale dupliquent les cles).
Usage: python3 fix_flash_window.py [--apply]
"""
import re
import sys
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent
APPLY = "--apply" in sys.argv

FILES = sorted({(ROOT / "src/i18n/translations/luxury.ts")} | set(
    (ROOT / "src/i18n/translations").glob("*.ts")
))

# (regex, remplacement) — applique a luxuryPoint8 ET a point8
RULES = [
    (re.compile(r"décote -30% pour vente flash 3 jours\."),
     "décote -30% — prix ferme sans limite de temps."),
    (re.compile(r"Vente flash autonome 3j : on coupe"),
     "Prix ferme sans limite de temps : on coupe"),
    (re.compile(r"-30% flash sale 3 days\."),
     "-30% — firm price, no time limit."),
    (re.compile(r"3-day flash autonomous sale: we cut"),
     "Firm price, no time limit: we cut"),
    (re.compile(r"-30% venta flash 3 días\."),
     "-30% — precio firme sin límite de tiempo."),
    (re.compile(r"Venta flash autónoma 3 días: recortamos"),
     "Precio firme sin límite de tiempo: recortamos"),
    (re.compile(r"-30% Flash-Sale 3 Tage\."),
     "-30% — fester Preis, kein Zeitlimit."),
    (re.compile(r"3-Tage Flash autonom: wir streichen"),
     "Fester Preis ohne Zeitlimit: wir streichen"),
    (re.compile(r"-30% flash sale 3 giorni\."),
     "-30% — prezzo fisso senza limite di tempo."),
    (re.compile(r"Flash autonomo 3gg: tagliamo"),
     "Prezzo fisso senza limite di tempo: tagliamo"),
    (re.compile(r"-30% flash sale 3 dias\."),
     "-30% — preço fixo sem limite de tempo."),
    (re.compile(r"Flash autónomo 3 dias: cortamos"),
     "Preço fixo sem limite de tempo: cortamos"),
    (re.compile(r"-30%：3日間フラッシュセール。"),
     "-30%：期間限定なし・価格固定。"),
    (re.compile(r"3日間自律フラッシュ：eBay13%"),
     "期間限定なし・価格固定：eBay13%"),
    (re.compile(r"3日闪购-30%。"),
     "-30%：价格固定，不限时。"),
    (re.compile(r"3日自主闪购：砍掉eBay"),
     "价格固定不限时：砍掉eBay"),
    (re.compile(r"-30%: 3일 플래시 세일\."),
     "-30%: 기한 없음, 고정가."),
    (re.compile(r"3일 자율 플래시: eBay"),
     "기한 없는 고정가: eBay"),
    (re.compile(r"-30% بيع فلاش 3 أيام\."),
     "-30% — سعر ثابت بدون مهلة."),
    (re.compile(r"بيع فلاش ذاتي 3 أيام: نقطع"),
     "سعر ثابت بدون مهلة: نقطع"),
]


def sanitize(text: str):
    n = 0
    for rx, rep in RULES:
        text, k = rx.subn(rep, text)
        n += k
    return text, n


def main() -> int:
    total = 0
    for p in FILES:
        src = p.read_text(encoding="utf-8")
        out, n = sanitize(src)
        if not n:
            print(f"propre  {p.name}")
            continue
        total += n
        print(f"{n:3d}    {p.name}")
        if APPLY:
            p.write_text(out, encoding="utf-8")
    print(f"\n{'APPLIQUÉ' if APPLY else 'DRY-RUN'} — {total} substitutions sur {len(FILES)} fichiers")
    return 0


if __name__ == "__main__":
    sys.exit(main())
