import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// IndexNow : notifie Bing/IndexNow des URLs du blog dès qu'elles sont publiées.
// Implémentation réelle (POST vers api.indexnow.org). Clé servie publiquement
// dans /public/aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4.txt (spec IndexNow).
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://ai-empire-steel.vercel.app";
const INDEXNOW_KEY = "aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4";

export const dynamic = "force-dynamic";

async function blogUrls(): Promise<string[]> {
  const blogDir = path.join(process.cwd(), "src", "app", "blog");
  const urls: string[] = [];
  const locales = ["fr", "en", "de", "es", "it", "ar"];
  try {
    const entries = await fs.readdir(blogDir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const full = path.join(blogDir, e.name);
      // Article racine (ex: chatbot-ia-nextjs-groq) sans sous-dossier locale
      if (await exists(path.join(full, "page.tsx"))) {
        urls.push(`${SITE_URL}/blog/${e.name}`);
      }
      // Déclinaisons localisées
      if (locales.includes(e.name)) {
        const sub = await fs.readdir(full, { withFileTypes: true });
        for (const s of sub) {
          if (s.isDirectory() && (await exists(path.join(full, s.name, "page.tsx")))) {
            urls.push(`${SITE_URL}/blog/${e.name}/${s.name}`);
          }
        }
      }
    }
  } catch {
    /* blog introuvable = liste vide, best-effort */
  }
  return urls;
}

async function exists(p: string): Promise<boolean> {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function GET() {
  const urlList = await blogUrls();
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return NextResponse.json({ ok: res.ok, submitted: urlList.length, status: res.status });
  } catch {
    return NextResponse.json({ ok: false, submitted: urlList.length, note: "indexnow submit skipped" });
  }
}
