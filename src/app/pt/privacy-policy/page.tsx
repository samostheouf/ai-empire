import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade (RGPD) — NeuraAPI',
  description: 'Política de privacidade da NeuraAPI, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD — UE 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/pt/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Política de Privacidade</h1>
          <p className="mt-2 text-indigo-300">Em conformidade com o Regulamento Geral de Proteção de Dados (RGPD — UE 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Responsável pelo tratamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Responsável:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Sede social:</span> 12 Rue de la Paix, 75002 Paris, França</p>
              <p><span className="font-semibold text-white">SIRET:</span> A preencher</p>
              <p><span className="font-semibold text-white">Encarregado de Proteção de Dados (DPO):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Paris, França</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Dados recolhidos</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>No âmbito dos nossos serviços, recolhemos as seguintes categorias de dados:</p>

              <h3 className="font-semibold text-white">Dados de identificação</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nome e apelido</li>
                <li>Endereço de email</li>
                <li>Palavra-passe (encriptada)</li>
                <li>Nome de utilizador</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dados de faturação</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Endereço de faturação</li>
                <li>Informações de pagamento (tratadas pela Stripe, não temos acesso aos números de cartão)</li>
                <li>Histórico de transações</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dados de utilização</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chaves API (encriptadas)</li>
                <li>Histórico de chamadas API (prompts, respostas, carimbos temporais)</li>
                <li>Estatísticas de utilização (número de chamadas, créditos consumidos)</li>
                <li>Dados de desempenho e diagnóstico</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dados de ligação</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Endereço IP</li>
                <li>Tipo de navegador e sistema operativo</li>
                <li>Data e hora de ligação</li>
                <li>Páginas visitadas e ações efetuadas</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Finalidades do tratamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Os seus dados são tratados para as seguintes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Gestão de contas:</span> Criação, gestão e autenticação de contas de utilizador</li>
                <li><span className="font-semibold text-white">Prestação de serviços:</span> Acesso às APIs, entrega de modelos, gestão de créditos</li>
                <li><span className="font-semibold text-white">Faturação:</span> Emissão de faturas, acompanhamento de pagamentos, lembretes</li>
                <li><span className="font-semibold text-white">Apoio ao cliente:</span> Resposta a pedidos e resolução de problemas</li>
                <li><span className="font-semibold text-white">Melhoria do serviço:</span> Estatísticas de utilização, otimização de desempenho</li>
                <li><span className="font-semibold text-white">Segurança:</span> Prevenção de fraude, deteção de abusos, proteção contra ataques</li>
                <li><span className="font-semibold text-white">Comunicação:</span> Envio de notificações importantes relativas ao serviço</li>
                <li><span className="font-semibold text-white">Obrigações legais:</span> Conservação de dados contabilísticos e fiscais</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Base legal do tratamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Cada tratamento de dados assenta numa base legal:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Execução do contrato (art. 6.1.b RGPD):</span> Prestação de serviços, gestão de contas, faturação</li>
                <li><span className="font-semibold text-white">Interesse legítimo (art. 6.1.f RGPD):</span> Segurança do serviço, melhoria, prevenção de fraude</li>
                <li><span className="font-semibold text-white">Obrigação legal (art. 6.1.c RGPD):</span> Conservação de dados contabilísticos e fiscais</li>
                <li><span className="font-semibold text-white">Consentimento (art. 6.1.a RGPD):</span> Cookies não essenciais, comunicações de marketing</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Prazo de conservação</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Os seus dados são conservados pelos seguintes prazos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Dados de conta:</span> Durante toda a duração da relação contratual, depois 3 anos após a última ligação</li>
                <li><span className="font-semibold text-white">Dados de faturação:</span> 10 anos (obrigação legal contabilística)</li>
                <li><span className="font-semibold text-white">Histórico de chamadas API:</span> 12 meses após a última chamada</li>
                <li><span className="font-semibold text-white">Dados de ligação:</span> 12 meses</li>
                <li><span className="font-semibold text-white">Cookies:</span> Máximo 13 meses</li>
                <li><span className="font-semibold text-white">Dados de prospeção:</span> 3 anos após o último contacto</li>
              </ul>
              <p className="mt-4">
                Aquando do termo destes prazos, os dados são eliminados ou anonimizados de forma irreversível.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Destinatários dos dados</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Os seus dados podem ser partilhados com as seguintes categorias de destinatários:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Fornecedores técnicos:</span> Vercel (alojamento), Stripe (pagamentos), Vercel Analytics (estatísticas)</li>
                <li><span className="font-semibold text-white">Fornecedores de pagamento:</span> Stripe Inc. — tratamento seguro de pagamentos</li>
                <li><span className="font-semibold text-white">Autoridades competentes:</span> Em caso de obrigação legal ou requisição judicial</li>
              </ul>
              <p className="mt-4">
                Estes fornecedores estão sujeitos a obrigações contratuais que garantem a proteção dos seus dados em conformidade com o RGPD. Nunca vendemos os seus dados a terceiros.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Transferências para fora da União Europeia</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Alguns dos nossos fornecedores situam-se fora da União Europeia (nomeadamente nos Estados Unidos). Estas transferências são reguladas por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cláusulas contratuais-tipo (CCT) conformes à decisão de execução da Comissão Europeia</li>
                <li>O Privacy Shield (para fornecedores certificados)</li>
                <li>Garantias adicionais adequadas em conformidade com os artigos 46 e seguintes do RGPD</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Os seus direitos</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Em conformidade com o RGPD, dispõe dos seguintes direitos sobre os seus dados pessoais:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Direito de acesso (art. 15):</span> Obter uma cópia dos seus dados</li>
                <li><span className="font-semibold text-white">Direito de retificação (art. 16):</span> Corrigir dados inexatos</li>
                <li><span className="font-semibold text-white">Direito à eliminação (art. 17):</span> Solicitar a eliminação dos seus dados</li>
                <li><span className="font-semibold text-white">Direito à limitação do tratamento (art. 18):</span> Limitar o tratamento dos seus dados</li>
                <li><span className="font-semibold text-white">Direito à portabilidade (art. 20):</span> Receber os seus dados num formato estruturado</li>
                <li><span className="font-semibold text-white">Direito de oposição (art. 21):</span> Opor-se ao tratamento dos seus dados</li>
                <li><span className="font-semibold text-white">Retirar o consentimento:</span> A qualquer momento, sem afetar a licitude do tratamento anterior</li>
              </ul>
              <p className="mt-4">
                Para exercer os seus direitos, contacte-nos em: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                Dispõe também do direito de apresentar uma reclamação à CNPD.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                O nosso site utiliza cookies em conformidade com a regulamentação em vigor. Para mais informações, consulte a nossa <a href="/pt/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Cookies</a>.
              </p>
              <p>
                Pode gerir as suas preferências de cookies através do banner de consentimento apresentado durante a sua primeira visita.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Segurança dos dados</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Implementamos as seguintes medidas técnicas e organizacionais para proteger os seus dados:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Encriptação TLS/SSL para todas as comunicações</li>
                <li>Encriptação de dados sensíveis em repouso</li>
                <li>Autenticação multifator (MFA) disponível</li>
                <li>Chaves API encriptadas e geridas de forma segura</li>
                <li>Acesso restrito aos dados (princípio do menor privilégio)</li>
                <li>Registo e monitorização de acessos</li>
                <li>Auditorias de segurança regulares</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Para qualquer questão relativa à proteção dos seus dados pessoais:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Email: </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Morada: NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, França</span>
                </div>
              </div>
              <p className="mt-4">
                Comprometemo-nos a responder ao seu pedido no prazo de um mês.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
