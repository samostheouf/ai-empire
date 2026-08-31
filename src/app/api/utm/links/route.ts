import { NextResponse } from "next/server";
import { buildAllUtmLinks, DEFAULT_CAMPAIGN, BASE_URL } from "@/lib/utm";

export const dynamic = "force-dynamic";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_APP_URL || BASE_URL;
  const links = buildAllUtmLinks(base, DEFAULT_CAMPAIGN);
  return NextResponse.json({ campaign: DEFAULT_CAMPAIGN, base, links, generated_at: new Date().toISOString() }, {
    headers: { "Cache-Control": "no-store" }
  });
}
