// ============================================
// AI-EMPIRE — Modelos de Email Blast
// Campanhas de email otimizadas para conversão
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === CAMPANHA 1: LANÇAMENTO DE PRODUTO ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Anúncio de lançamento',
  subject: '🚀 AI-Empire finalmente está aqui — A plataforma de IA francesa para startups',
  preheader: 'Obtenha uma API de IA gratuita em 5 minutos, com suporte em francês.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire finalmente está aqui!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">A plataforma de IA francesa para startups</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Olá {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Temos ótimas notícias: <strong>AI-Empire foi oficialmente lançado!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Agora você tem acesso a:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ API de IA unificada (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 endpoints: Geração, SEO, Código</p>
          <p style="margin: 5px 0; color: #333;">✅ Créditos gratuitos para começar</p>
          <p style="margin: 5px 0; color: #333;">✅ Dashboard intuitivo em francês</p>
          <p style="margin: 5px 0; color: #333;">✅ Suporte em francês</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>Sua chave de API:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Iniciar meu primeiro teste →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Próximo passo: Faça sua primeira chamada de API em 2 minutos.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — A plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Documentação</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar inscrição</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Iniciar meu primeiro teste →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === CAMPANHA 2: OFERTA LIMITADA -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Oferta limitada -50%',
  subject: '⚡ -50% no NeuraPortfolio — Oferta expira em 48h',
  preheader: 'Template Next.js premium pela metade do preço. 50+ componentes, dark mode, responsivo.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">Oferta expira em 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Olá {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Temos uma <strong>oferta exclusiva</strong> para você: <strong>-50% no NeuraPortfolio</strong>, o template premium Next.js para criar seu portfólio de IA.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Limitada a 50 vendas — expira em 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          O que você recebe:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ componentes React</li>
          <li>✅ Dark mode + responsivo</li>
          <li>✅ Animações fluidas</li>
          <li>✅ Integração nativa de IA</li>
          <li>✅ Suporte em francês</li>
          <li>✅ Atualizações gratuitas para sempre</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Aproveitar a oferta →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Após 48h, o preço volta para €49. Não perca essa oportunidade!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — A plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar inscrição</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Aproveitar a oferta →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === CAMPANHA 3: CASOS DE SUCESSO ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Depoimentos de clientes',
  subject: '💬 Como essas startups francesas tiveram sucesso com IA',
  preheader: '3 histórias de clientes que provam que a IA é acessível a todos.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Depoimentos de clientes</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">O sucesso deles pode ser o seu</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Olá {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Queremos mostrar o que as startups francesas estão alcançando com AI-Empire.
        </p>

        <!-- Depoimento 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Reduzimos nossos custos de IA em 60% ao migrar para AI-Empire. A integração levou 5 minutos e o suporte em francês é um grande diferencial."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO de uma startup em Paris</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: -60% custos, +40% velocidade</p>
        </div>

        <!-- Depoimento 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Integrei a IA no meu SaaS em 2 horas. Os clientes adoram as novas funcionalidades."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, fundadora de um SaaS em Lyon</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: +25% de conversões</p>
        </div>

        <!-- Depoimento 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "O dashboard em francês é intuitivo. Minha equipe adotou a IA em 1 dia."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM de uma scale-up em Bordeaux</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: +40% de produtividade</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Juntar-se aos sucessos →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — A plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar inscrição</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Juntar-se aos sucessos →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === CAMPANHA 4: NEWSLETTER MENSAL ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Newsletter mensal',
  subject: '📰 Newsletter AI-Empire — Janeiro 2025',
  preheader: 'As últimas notícias, dicas e ofertas da plataforma de IA francesa.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 Newsletter AI-Empire</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Janeiro 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Olá {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Aqui estão as últimas novidades da AI-Empire:
        </p>

        <!-- Novidade 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 Novidade: Endpoint SEO</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Gere conteúdo otimizado para SEO com um clique. Integre-o no seu blog ou SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Descobrir o endpoint SEO →
        </a>

        <!-- Novidade 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Dica: Otimize suas chamadas de API</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Economize até 30% nas suas chamadas usando cache inteligente. Veja como:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Ver o tutorial →
        </a>

        <!-- Oferta -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Oferta exclusiva para assinantes: -30% no NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Use o código NEWSLETTER30</p>
        </div>

        <!-- Estatísticas -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 Nossos números do mês</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Usuários</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Chamadas API</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Satisfação</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Acessar o dashboard →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — A plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar inscrição</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Acessar o dashboard →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === CAMPANHA 5: PROGRAMA DE INDICAÇÃO ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Programa de indicação',
  subject: '💰 Ganhe €50 para cada amigo que indicar!',
  preheader: 'Programa de indicação: convide seus amigos, ganhe dinheiro.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Programa de indicação</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Ganhe €50 por amigo indicado</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Olá {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Gosta da AI-Empire? <strong>Compartilhe com seus amigos e ganhe dinheiro!</strong>
        </p>

        <!-- Como funciona -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Como funciona?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Compartilhe seu link de indicação único
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Seu amigo se cadastra com seu link
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> Ele compra um plano pago
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> Você recebe <strong>€50</strong> na sua conta!
          </p>
        </div>

        <!-- Link único -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Seu link único:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Benefícios -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Benefícios para o indicador</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 por indicação bem-sucedida</li>
          <li>📊 Dashboard de acompanhamento em tempo real</li>
          <li>💳 Pagamento via Stripe (transferência bancária)</li>
          <li>🎁 -20% na sua próxima renovação</li>
          <li>⭐ Status "Indicador Gold" após 5 indicações</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Compartilhar meu link →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Sem limite de indicações. Quanto mais compartilhar, mais ganha!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — A plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar inscrição</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Compartilhar meu link →',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
