import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { slugify } from '@/lib/utils';
import { sanitizeInput } from '@/lib/input-validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, tags, previewUrl, screenshot, fileUrl, liveDemo, features } = body;

    if (!name || !description || price === undefined) {
      return NextResponse.json({ error: 'Données manquantes' }, { status: 400 });
    }

    const slug = slugify(name);
    const safeName = sanitizeInput(name);
    const safeDescription = sanitizeInput(description);

    const template = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.template.create({
          data: {
            name: safeName,
            description: safeDescription,
            slug,
            price,
            category: category || 'Autre',
            tags: JSON.stringify(tags || []),
            previewUrl: previewUrl || screenshot || '',
            screenshot: screenshot || previewUrl || '',
            fileUrl: fileUrl || '',
            liveDemo: liveDemo || null,
            features: JSON.stringify(features || []),
          },
        });
      },
      null
    );

    if (!template) {
      return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
    }

    return NextResponse.json(template);
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la création du template' }, { status: 500 });
  }
}
