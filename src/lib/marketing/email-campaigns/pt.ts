import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'pt',
  campaigns: [
    // === Campaign 1: Launch Announcement ===
    {
      id: 'email-launch',
      name: 'Anúncio de Lançamento',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire está no ar — O toolkit SaaS com IA', previewText: 'Templates, APIs de IA, Stripe e autenticação — tudo em uma plataforma.' },
        { id: 'launch-b', subject: 'Acabamos de lançar: templates Next.js 14 + APIs de IA', previewText: 'Tudo que você precisa para lançar seu SaaS em 24 horas.' },
        { id: 'launch-c', subject: 'Lance seu SaaS mais rápido — AI Empire chegou', previewText: 'Templates profissionais com integração de IA, prontos para deploy.' },
      ],
      previewText: 'Templates, APIs de IA, Stripe e autenticação — tudo em uma plataforma.',
      cta: 'Explorar AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire Está no Ar</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">O kit completo para criar produtos SaaS com inteligência artificial</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Olá {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Ficamos muito felizes em anunciar o lançamento do <strong>AI Empire</strong> — uma plataforma criada para ajudar desenvolvedores a lançar produtos SaaS com IA de forma mais rápida.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Veja o que está incluído:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Templates profissionais Next.js 14 (a partir de €19)</p>
      <p style="margin:4px 0;color:#333;">✅ API de IA unificada — Groq + Gemini em um único endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Integração Stripe billing configurada</p>
      <p style="margin:4px 0;color:#333;">✅ Autenticação pronta para uso</p>
      <p style="margin:4px 0;color:#333;">✅ Dashboard administrativo incluído</p>
      <p style="margin:4px 0;color:#333;">✅ Tier gratuito da API — 100 créditos no cadastro</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Seja você criando uma loja online, um blog ou um portfólio, a AI Empire fornece a base de que você precisa.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Explorar AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Templates Disponíveis</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template de e-commerce completo com Stripe, carrinho e dashboard administrativo</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog otimizado para SEO com MDX, modo escuro e feed RSS</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfólio profissional com animações, modo escuro e formulário de contato</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Pacote Completo — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Todos os 6 templates + suporte prioritário + atualizações gratuitas</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      Dúvidas? Responda a este e-mail — lemos todas as respostas.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      A equipe da AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crie produtos SaaS com IA mais rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentação</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar inscrição</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 2: Product Update ===
    {
      id: 'email-update',
      name: 'Atualização do Produto',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'Novidades — Atualizações da AI Empire deste mês', previewText: 'Novas funcionalidades, melhorias e o que vem por aí.' },
        { id: 'update-b', subject: 'Changelog da AI Empire — Novos templates e funcionalidades de API', previewText: 'Estivemos muito ocupados. Veja o que foi lançado.' },
        { id: 'update-c', subject: 'Sua atualização mensal da AI Empire está aqui', previewText: 'Novas integrações, melhorias de desempenho e funcionalidades em breve.' },
      ],
      previewText: 'Novas funcionalidades, melhorias e o que vem por aí.',
      cta: 'Ver Changelog',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">Novidades na AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Atualização Mensil do Produto — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Olá {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Veja o que lançamos este mês:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Nova Funcionalidade: Endpoint de Geração de Código com IA</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Um novo endpoint de API otimizado para tarefas de geração de código. Suporta Groq Llama 3 e Gemini Pro. Disponível em todos os planos, incluindo o gratuito.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Melhorado: Fluxo de Checkout da NeuraStore</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Experiência de checkout reformulada com suporte a Apple Pay e Google Pay. Taxa de conversão melhorada em 15% nos testes.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Atualizado: Documentação da API</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Documentação completamente reescrita com exemplos interativos, trechos de código copiar-e-colar e um novo guia de início rápido.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Vem no Próximo Mês</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Otimizador de SEO com IA para NeuraBlog. Meta descrições automáticas, imagens Open Graph e geração de dados estruturados.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Ver Changelog Completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Obrigado por construir com a AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      A equipe da AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crie produtos SaaS com IA mais rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentação</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar inscrição</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 3: Monthly Newsletter ===
    {
      id: 'email-newsletter',
      name: 'Newsletter Mensal',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Mensal — Dicas, tutoriais e atualizações', previewText: 'Sua dose mensal de insights sobre IA e SaaS.' },
        { id: 'newsletter-b', subject: 'Este mês no mundo da IA e SaaS — Newsletter AI Empire', previewText: 'Destaques da comunidade, novas funcionalidades e tendências do mercado.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — O que aprendemos este mês', previewText: 'Dicas práticas para criar produtos com inteligência artificial.' },
      ],
      previewText: 'Sua dose mensal de insights sobre IA e SaaS.',
      cta: 'Ler Mais',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Mensal</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Edição #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Olá {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Bem-vindo à newsletter deste mês. Veja o que aconteceu na comunidade AI Empire e no cenário mais amplo de IA/SaaS.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutoriais</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Como Adicionar Chat IA ao Seu App Next.js</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Guia passo a passo para integrar o endpoint de chat da AI Empire em uma aplicação Next.js. Inclui exemplos de código e dicas de deploy.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Melhores Práticas para Integração Stripe em SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Lições da construção do fluxo de pagamento da NeuraStore. Gerenciamento de assinaturas, webhooks e configuração do portal do cliente.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Deploy de Next.js 14 no Vercel: Guia Completo</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Do zero à produção. Variáveis de ambiente, domínios, deploys de preview e otimização de desempenho.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Destaques da Comunidade</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Projeto em Destaque:</strong> Um dos nossos usuários lançou um SaaS de processamento de documentos usando a NeuraStore como template base e a API da AI Empire para extração de texto. Do zero a clientes pagantes em 3 semanas.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Dica do Mês:</strong> Use o Groq para respostas em tempo real (baixa latência) e o Gemini para tarefas de raciocínio complexo. A AI Empire permite alternar entre modelos com uma simples mudança de parâmetro.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tendências do Mercado</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      O mercado de APIs de IA continua evoluindo rapidamente. Estamos vendo uma tendência clara em direção a endpoints unificados — os desenvolvedores querem uma única integração, não cinco. A AI Empire foi criada para essa realidade e estamos adicionando novos modelos regularmente.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Ler o Blog Completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Até o próximo mês,<br>A equipe da AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crie produtos SaaS com IA mais rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar inscrição</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 4: Re-engagement ===
    {
      id: 'email-reengagement',
      name: 'Reengajamento',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'Sentimos sua falta — Sua conta AI Empire está esperando', previewText: 'Volte e ganhe 50 créditos bônus.' },
        { id: 'reeng-b', subject: 'Ainda pensando? Seus créditos gratuitos estão expirando', previewText: '100 créditos gratuitos te esperam. Volte e crie.' },
        { id: 'reeng-c', subject: 'Muito mudou na AI Empire desde sua última visita', previewText: 'Novas funcionalidades, novos templates e créditos bônus para você.' },
      ],
      previewText: 'Volte e ganhe 50 créditos bônus.',
      cta: 'Reativar Minha Conta',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Sentimos sua falta</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Sua conta AI Empire ainda está aqui — e preparamos algo para você</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Olá {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Já faz um tempo desde sua última visita à AI Empire. Queremos que saiba que sua conta continua ativa e adicionamos <strong>50 créditos bônus</strong> para ajudá-lo a começar de novo.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Créditos</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Grátis. Sem pegadinhas.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Desde sua última visita, adicionamos:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>Novo endpoint de geração de código com IA</li>
      <li>Fluxo de checkout da NeuraStore melhorado</li>
      <li>Documentação da API completamente reescrita</li>
      <li>Melhorias nos SDKs de JavaScript e Python</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Reativar Minha Conta
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Se você não deseja mais receber e-mails, pode <a href="{{unsubscribe_url}}" style="color:#999;">cancelar a inscrição</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crie produtos SaaS com IA mais rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentação</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar inscrição</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 5: Upgrade Offer ===
    {
      id: 'email-upgrade',
      name: 'Oferta de Atualização',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Desbloqueie mais — Atualize seu plano AI Empire hoje', previewText: 'Mais créditos, mais templates, suporte prioritário.' },
        { id: 'upgrade-b', subject: 'Seu uso da AI Empire está crescendo — Hora de atualizar?', previewText: 'Obtenha mais créditos de API e templates premium.' },
        { id: 'upgrade-c', subject: 'Oferta especial: 20% de desconto nos templates da AI Empire', previewText: 'Oferta por tempo limitado para usuários ativos. Atualize agora.' },
      ],
      previewText: 'Mais créditos, mais templates, suporte prioritário.',
      cta: 'Atualizar Agora — 20% Off',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Evolua Seu SaaS</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">20% de desconto nos templates para usuários ativos da AI Empire</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Olá {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Você tem usado a AI Empire ativamente — e queremos recompensar isso. Aqui está um <strong>desconto exclusivo de 20%</strong> em todos os templates e no pacote completo.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Use o código no checkout:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">O Que Você Ganha com os Templates</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → €23,20 com código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template de e-commerce com Stripe, carrinho, dashboard administrativo, recomendações de IA</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → €15,20 com código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template de blog com MDX, modo escuro, RSS, otimização SEO</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → €23,20 com código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template de portfólio com animações, modo escuro, formulário de contato</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Pacote Completo — €299 → €239,20 com código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Todos os 6 templates + suporte prioritário + atualizações gratuitas. Melhor custo-benefício.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Atualizar Agora — 20% Off
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Esta oferta expira em 72 horas. Código válido para uso único.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crie produtos SaaS com IA mais rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentação</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar inscrição</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
