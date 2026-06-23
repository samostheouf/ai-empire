import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Cookies — NeuraAPI',
  description: 'Política de cookies da NeuraAPI — Informações sobre os cookies utilizados e gestão das suas preferências.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/pt/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Política de Cookies</h1>
          <p className="mt-2 text-indigo-300">Informações sobre os cookies utilizados na NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">O que é um cookie?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Um cookie é um pequeno ficheiro de texto depositado no seu dispositivo (computador, tablet, smartphone) durante a visita a um website. Permite ao website reconhecer o seu dispositivo e armazenar certas informações sobre as suas preferências ou ações passadas.
              </p>
              <p>
                Os cookies são regidos pelo Regulamento Geral de Proteção de Dados (RGPD) e pelas recomendações da CNIL.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Tipos de cookies utilizados</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies essenciais</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Sempre ativos</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estes cookies são indispensáveis ao funcionamento do website. Não podem ser desativados porque são necessários para o bom funcionamento do site.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalidade</th>
                        <th className="pb-2 font-medium">Duração</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">Sessão de utilizador</td>
                        <td className="py-2">Sessão</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">Proteção CSRF</td>
                        <td className="py-2">Sessão</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Preferências de cookies</td>
                        <td className="py-2">13 meses</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Autenticação</td>
                        <td className="py-2">30 dias</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies analíticos</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">Com consentimento</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estes cookies permitem-nos medir a audiência do nosso website, compreender como os visitantes o utilizam e identificar as páginas mais visitadas.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalidade</th>
                        <th className="pb-2 font-medium">Duração</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Estatísticas de visitas</td>
                        <td className="py-2">Sessão</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Análise de desempenho</td>
                        <td className="py-2">1 ano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Megaphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies de marketing</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">Com consentimento</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estes cookies são utilizados para lhe propor publicidade e conteúdo personalizados com base nos seus interesses.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    Atualmente, a NeuraAPI não utiliza cookies de marketing de terceiros. Esta secção está prevista para utilização futura, se necessário.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Como gerir os seus cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Através do banner de consentimento</h3>
              <p>
                Na sua primeira visita, um banner de consentimento permite-lhe escolher quais os cookies que pretende ativar ou desativar. Pode alterar as suas preferências a qualquer momento clicando no botão &quot;Cookies&quot; no fundo da página.
              </p>

              <h3 className="font-semibold text-white mt-4">Através das definições do navegador</h3>
              <p>Pode também gerir os cookies diretamente a partir das definições do seu navegador:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/pt-PT/kb/ative-e-desative-cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Consequências da desativação</h3>
              <p>
                A desativação dos cookies essenciais pode impedir o bom funcionamento do website. Os cookies analíticos e de marketing podem ser livremente ativados ou desativados sem impacto na utilização do site.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies de terceiros</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                O nosso website pode incluir componentes de terceiros. Estes terceiros podem depositar cookies no seu dispositivo quando visita o nosso site. Não temos controlo sobre estes cookies de terceiros.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (pagamentos)</h3>
              <p>
                A Stripe utiliza cookies para garantir a segurança das transações e prevenir a fraude. Para mais informações: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (alojamento)</h3>
              <p>
                A Vercel pode depositar cookies para garantir o bom funcionamento da infraestrutura e recolher estatísticas anonimizadas. Para mais informações: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Para qualquer questão relativa à nossa política de cookies, pode contactar-nos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                Pode também apresentar uma reclamação à CNPD.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
