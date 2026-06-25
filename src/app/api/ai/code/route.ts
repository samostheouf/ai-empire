import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { callAI, isDemoMode } from '@/lib/ai';
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const DEMO_CODE = `// [Mode Démo] Code généré par NeuraAPI
// Pour activer le vrai code, configurez GROQ_API_KEY ou GEMINI_API_KEY

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

interface CreateUserInput {
  email: string;
  name: string;
}

class UserService {
  private users: Map<string, User> = new Map();

  create(input: CreateUserInput): User {
    const user: User = {
      id: crypto.randomUUID(),
      email: input.email,
      name: input.name,
      createdAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.get(id);
  }

  findByEmail(email: string): User | undefined {
    return Array.from(this.users.values()).find(u => u.email === email);
  }

  list(): User[] {
    return Array.from(this.users.values());
  }

  delete(id: string): boolean {
    return this.users.delete(id);
  }
}

export default new UserService();`;

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey) {
      return NextResponse.json({ error: 'Clé API requise' }, { status: 401 });
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { apiKey } });
      },
      null
    );

    if (!user) {
      return NextResponse.json({ error: 'Clé API invalide' }, { status: 401 });
    }

    const rl = await rateLimit(`ai-code:${user.id}`, 20, 60_000)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, {
        status: 429,
        headers: getRateLimitHeaders(rl, 20),
      })
    }

    if (user.credits <= 0) {
      return NextResponse.json({ error: 'Crédits insuffisants' }, { status: 402 });
    }

    const body = await request.json();
    const { description, language = 'typescript', framework = '' } = body;

    if (!description) {
      return NextResponse.json({ error: 'Le champ description est requis' }, { status: 400 });
    }

    if (typeof description === 'string' && description.length > 4000) {
      return NextResponse.json({ error: 'La description ne doit pas dépasser 4000 caractères' }, { status: 400 });
    }

    const ALLOWED_LANGUAGES = ['typescript', 'javascript', 'python', 'rust', 'go', 'java', 'php', 'ruby', 'csharp', 'swift', 'html', 'css', 'sql', 'bash'];
    const ALLOWED_FRAMEWORKS = ['react', 'nextjs', 'vue', 'angular', 'svelte', 'express', 'fastapi', 'django', 'flask', 'laravel', 'rails', 'spring', ''];

    const safeLanguage = ALLOWED_LANGUAGES.includes(language.toLowerCase()) ? language.toLowerCase() : 'typescript';
    const safeFramework = ALLOWED_FRAMEWORKS.includes(framework.toLowerCase()) ? framework.toLowerCase() : '';

    if (isDemoMode()) {
      return NextResponse.json({
        code: DEMO_CODE,
        tokensUsed: 0,
        language,
        demo: true,
        message: 'Mode démo — Configurez GROQ_API_KEY ou GEMINI_API_KEY pour du vrai code',
      });
    }

    const frameworkInfo = safeFramework ? ` dans le framework ${safeFramework}` : '';
    const prompt = `Tu es un développeur expert. Génère du code ${safeLanguage}${frameworkInfo} basé sur cette description:\n"${description}"\nRetourne uniquement le code, sans explications.`;

    const result = await callAI(prompt, 2000);

    if (result.provider === 'demo') {
      return NextResponse.json({
        code: DEMO_CODE,
        tokensUsed: 0,
        language,
        demo: true,
        message: 'Mode démo — Aucun provider IA configuré',
      });
    }

    await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        await prisma.$executeRaw`UPDATE "ApiUser" SET credits = GREATEST(0, credits - ${result.tokensUsed}) WHERE id = ${user.id} AND credits > 0`;
        await prisma.usageLog.create({ data: { userId: user.id, endpoint: '/api/ai/code', tokens: result.tokensUsed, cost: 0 } });
      },
      null
    );

    return NextResponse.json({ code: result.content, tokensUsed: result.tokensUsed, language, provider: result.provider });
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la génération de code' }, { status: 500 });
  }
}
