import { Sparkles, Zap, Shield, Globe, Star, Users, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({ locale: 'pt_BR',
  title: 'NeuraAPI - APIs de IA e Templates para Desenvolvedores Brasileiros',
  description: 'APIs de IA premium e templates Next.js para a comunidade de desenvolvedores brasileiros. Rápido, seguro e acessível.',
  path: '/pt/br',
  keywords: ['API IA Brasil', 'Templates Next.js', 'SaaS Templates', 'Inteligência Artificial API', 'Ferramentas para Desenvolvedores', 'Líderes de mercado'],
})

const organizationSchema = generateOrganizationSchema()

const brFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais métodos de pagamento a NeuraAPI aceita no Brasil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo), PayPal, Apple Pay, Google Pay e PIX. Todos os pagamentos são processados com segurança em BRL via Stripe.',
      },
    },
    {
      '@type': 'Question',
      name: 'A NeuraAPI é compatível com a LGPD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, a NeuraAPI é totalmente compatível com a Lei Geral de Proteção de Dados (LGPD). Processamos dados em data centers nas Américas e fornecemos Contrato de Tratamento de Dados.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso pagar em Reais (BRL)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, todos os preços são exibidos em Reais (BRL). Aceitamos PIX, cartões nacionais e internacionais, além de boleto bancário.',
      },
    },
  ],
}

export default function BrazilPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brFaqSchema) }}
      />

      <link rel="alternate" hrefLang="en-us" href="https://ai-empire-steel.vercel.app/en/usa" />
      <link rel="alternate" hrefLang="en-gb" href="https://ai-empire-steel.vercel.app/en/uk" />
      <link rel="alternate" hrefLang="de" href="https://ai-empire-steel.vercel.app/de/de" />
      <link rel="alternate" hrefLang="ja" href="https://ai-empire-steel.vercel.app/ja/jp" />
      <link rel="alternate" hrefLang="pt-br" href="https://ai-empire-steel.vercel.app/pt/br" />
      <link rel="alternate" hrefLang="x-default" href="https://ai-empire-steel.vercel.app" />

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <TrendingUp className="w-4 h-4" />
            Pré-lançamento — Seja um dos primeiros usuários
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            APIs de IA &amp; Templates<br />
            <span className="text-indigo-400">Para Desenvolvedores Brasileiros</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Acelere seu desenvolvimento com APIs de IA e templates Next.js premium. Preços acessíveis em Reais, infraestrutura otimizada para o Brasil.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              Ver Templates
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Documentação
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-indigo-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> API em produção</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Gratuito para começar</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 99,9% uptime</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Por que Desenvolvedores Brasileiros Escolhem NeuraAPI
          </h2>
          <p className="text-center text-indigo-300 mt-2">Qualidade de empresa com experiência de desenvolvedor</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Infra nas Américas</h3>
              <p className="mt-2 text-indigo-300">
                Dados processados em data centers nas Américas. Latência baixa otimizada para o Brasil.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Compatível com LGPD</h3>
              <p className="mt-2 text-indigo-300">
                Totalmente compatível com a Lei Geral de Proteção de Dados. Contrato de tratamento disponível.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">PIX e Boleto</h3>
              <p className="mt-2 text-indigo-300">
                Aceitamos PIX, boleto bancário e cartões nacionais. Pagamento em Reais sem surpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Planos em BRL
          </h2>
          <p className="text-center text-indigo-300 mt-2">Sem taxas ocultas. Cancele quando quiser.</p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: 'R$0',
                credits: '100 créditos',
                description: 'Perfeito para projetos pessoais e experimentação',
                features: ['100 créditos de API/mês', 'Todos os modelos de IA', 'Suporte da comunidade', 'Rate limits padrão'],
                cta: 'Começar Grátis',
                popular: false,
              },
              {
                name: 'Pro',
                price: 'R$149',
                credits: '10.000 créditos',
                description: 'Para startups em crescimento e desenvolvedores indie',
                features: ['10.000 créditos de API/mês', 'Suporte prioritário', 'Analytics avançado', 'Rate limits customizados', 'Integrações via webhook'],
                cta: 'Assinar Pro',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: 'R$499',
                credits: 'Ilimitados',
                description: 'Para equipes que precisam de escala e confiabilidade',
                features: ['Créditos de API ilimitados', 'Suporte dedicado', 'SLA customizado', 'Gestão de equipes', 'SSO & SAML', 'Opção on-premise'],
                cta: 'Falar com Vendas',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-indigo-500 bg-indigo-900/50'
                    : 'border-indigo-800/50 bg-indigo-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-indigo-300">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'R$0' && (
                    <span className="text-indigo-300">/mês</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-indigo-400">{plan.credits}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm text-indigo-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price === 'R$0' ? '/register' : '/pricing'}
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-indigo-600 text-indigo-200 hover:bg-indigo-900/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-indigo-400 mt-6">
            Métodos de pagamento: PIX, Boleto Bancário, Visa, Mastercard, Elo, PayPal — Processamento em BRL via Stripe
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Apreciado por Equipes Brasileiras
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'NeuraAPI Team', role: 'Pré-lançamento', content: 'NeuraAPI está em fase de pré-lançamento. Junte-se a nós para ser um dos primeiros usuários.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-indigo-200 italic">&quot;{item.content}&quot;</p>
                <div className="mt-4 pt-4 border-t border-indigo-800/50">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-indigo-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Pronto para Desenvolver Mais Rápido?
          </h2>
          <p className="mt-4 text-indigo-200">
            Junte-se a nós — NeuraAPI está em pré-lançamento. Comece grátis — sem cartão de crédito.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Começar Grátis
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Ver Documentação
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-indigo-900/20 bg-indigo-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </div>
            <p className="text-sm text-indigo-300">
              &copy; {new Date().getFullYear()} NeuraAPI. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mentions-legales" className="text-sm text-indigo-400 hover:text-white transition-colors">Legal</Link>
              <Link href="/cgv" className="text-sm text-indigo-400 hover:text-white transition-colors">Termos</Link>
              <Link href="/politique-confidentialite" className="text-sm text-indigo-400 hover:text-white transition-colors">Privacidade</Link>
              <Link href="/politique-cookies" className="text-sm text-indigo-400 hover:text-white transition-colors">Cookies</Link>
              <Link href="/contact" className="text-sm text-indigo-400 hover:text-white transition-colors">Contato</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
