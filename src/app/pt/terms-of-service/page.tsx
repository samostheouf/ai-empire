import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Serviço — NeuraAPI',
  description: 'Termos de Serviço da NeuraAPI — Serviços de inteligência artificial e modelos digitais.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/pt/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Termos de Serviço</h1>
          <p className="mt-2 text-indigo-300">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Artigo 1 — Objeto</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Os presentes Termos de Serviço (TS) regem as relações contratuais entre a sociedade NeuraAPI SAS, doravante denominada &quot;o Vendedor&quot;, e toda pessoa singular ou coletiva, doravante denominada &quot;o Cliente&quot;, que deseje adquirir os serviços e produtos oferecidos no site <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                Qualquer encomenda de serviços ou produtos no site implica a aceitação sem reservas dos presentes TS. O Vendedor reserva-se o direito de alterar estes TS a qualquer momento. Os TS aplicáveis são os que estiverem em vigor na data da encomenda do Cliente.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 2 — Produtos e serviços</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>O Vendedor oferece à venda os seguintes produtos e serviços:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Subscrições a APIs de inteligência artificial</span> — Acesso a endpoints de IA (geração de texto, SEO, código) através de uma chave API pessoal.</li>
                <li><span className="font-semibold text-white">Modelos digitais</span> — Modelos web (Next.js, Tailwind CSS) transferíveis e utilizáveis em conformidade com a licença adquirida.</li>
                <li><span className="font-semibold text-white">Pacotes de créditos</span> — Unidades de consumo para chamadas API, válidas por um período determinado.</li>
              </ul>
              <p>
                As características essenciais dos produtos e serviços são apresentadas no site. As imagens e descrições são fornecidas a título indicativo e não vinculam o Vendedor.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 3 — Preços e modalidades de pagamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Preços</h3>
              <p>
                Os preços dos produtos e serviços são indicados em euros (€) impostos incluidos (IVA incluído à taxa em vigor). O Vendedor reserva-se o direito de alterar os seus preços a qualquer momento. Os preços aplicáveis são os que estiverem em vigor no momento da validação da encomenda pelo Cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Modalidades de pagamento</h3>
              <p>O pagamento é efetuado exclusivamente online através de:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cartão de crédito (Visa, Mastercard, American Express)</li>
                <li>Transferência bancária (para subscrições Enterprise)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Faturação</h3>
              <p>
                Uma fatura é emitida eletronicamente e acessível na área de cliente após cada pagamento. O Cliente compromete-se a conservar as suas faturas.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Incumprimento de pagamento</h3>
              <p>
                Em caso de incumprimento de pagamento, o Vendedor reserva-se o direito de suspender o acesso aos serviços após uma notificação formal que tenha permanecido sem efeito durante 15 dias. Podem ser aplicadas penalidades de atraso à taxa de três vezes a taxa de juro legal.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 4 — Disponibilização e entrega</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Serviços por subscrição</h3>
              <p>
                O acesso às APIs é disponibilizado imediatamente após a validação do pagamento. A chave API é gerada automaticamente e acessível a partir da área de cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Modelos digitais</h3>
              <p>
                Os modelos são transferíveis imediatamente após a compra. Um link de transferência é enviado por email e acessível a partir da área de cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Pacotes de créditos</h3>
              <p>
                Os créditos são creditados na conta do Cliente imediatamente após o pagamento e permanecem válidos durante 12 meses a partir da data de compra.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 5 — Direito de desistência</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Em conformidade com o Código do Consumidor, o Cliente dispõe de um prazo de <span className="font-semibold text-white">14 dias</span> a partir da data de subscrição ou compra para exercer o seu direito de desistência, sem necessidade de justificar a sua decisão.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Condições de desistência</h3>
              <p>Para exercer o seu direito de desistência, o Cliente deve comunicar ao Vendedor uma declaração por escrito (email ou carta) expressando claramente a sua vontade de desistir.</p>
              <p>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Exceções ao direito de desistência</h3>
              <p>O direito de desistência não pode ser exercido nos seguintes casos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A execução do serviço foi iniciada, com o consentimento expresso do Cliente, antes do termo do prazo de 14 dias</li>
                <li>O conteúdo digital (modelos) foi transferido ou ativado pelo Cliente</li>
                <li>O serviço foi integralmente executado antes do termo do prazo de desistência</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Reembolso</h3>
              <p>
                Em caso de desistência válida, o reembolso é efetuado no máximo de 14 dias, pelo mesmo meio de pagamento utilizado na transação inicial.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 6 — Garantias</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Garantia de conformidade</h3>
              <p>
                Em conformidade com o Código do Consumidor, o Vendedor é obrigado a entregar um bem conforme ao contrato. O Cliente pode solicitar a conformidade do bem no prazo de 2 anos a partir da entrega.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Garantia de vícios ocultos</h3>
              <p>
                Em conformidade com o Código Civil, o Vendedor é obrigado a garantir os vícios ocultos. O Cliente dispõe de um prazo de 2 anos a partir da descoberta do vício para agir.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Disponibilidade do serviço</h3>
              <p>
                O Vendedor compromete-se a garantir a disponibilidade do serviço com uma taxa de disponibilidade mensal de 99,9% (SLA). As manutenções planeadas são comunicadas com 48 horas de antecedência.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 7 — Limitação de responsabilidade</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>O Vendedor não pode ser responsabilizado por danos decorrentes de:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilização não conforme dos serviços pelo Cliente</li>
                <li>Interrupção temporária do serviço para manutenção ou atualização</li>
                <li>Perda de dados devido a falha da infraestrutura técnica</li>
                <li>Dano indireto, perda de faturação, perda de dados ou qualquer outro prejuízo</li>
                <li>Utilização dos resultados gerados pela IA para fins ilícitos ou contrários à ordem pública</li>
              </ul>
              <p className="mt-4">
                A responsabilidade total do Vendedor é limitada ao montante pago pelo Cliente nos 12 meses anteriores ao evento que causou o dano.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 8 — Licença de utilização dos modelos</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                A compra de um modelo confere ao Cliente uma licença de utilização não exclusiva, intransferível e limitada, permitindo:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilizar o modelo em projetos pessoais ou comerciais</li>
                <li>Modificar o modelo para se adaptar às suas necessidades</li>
                <li>Utilizar o modelo para um número ilimitado de projetos</li>
              </ul>
              <p className="mt-3">O Cliente não pode:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Revender ou redistribuir o modelo como tal</li>
                <li>Sublicenciar o modelo a terceiros</li>
                <li>Remover ou alterar as menções de direitos de autor</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 9 — Dados pessoais</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                O tratamento dos dados pessoais do Cliente é regido pela nossa <a href="/pt/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Privacidade</a>, em conformidade com o RGPD.
              </p>
              <p>
                O Cliente dispõe dos direitos de acesso, retificação, eliminação, portabilidade e oposição sobre os seus dados pessoais contactando: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artigo 10 — Lei aplicável e litígios</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Os presentes TS são regidos pelo <span className="font-semibold text-white">direito francês</span>. Em caso de litígio, as partes esforçar-se-ão por encontrar uma solução amigável. Na falta disso, o litígio será submetido aos tribunais judiciais de Paris.
              </p>
              <p>
                Em conformidade com o Código do Consumidor, o Cliente pode recorrer gratuitamente a um mediador de consumo em caso de litígio não resolvido:
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mediação de consumo — mediation-conso.fr</a></p>
                <p>• Plataforma europeia de resolução de litígios: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Artigo 11 — Disposições diversas</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Integridade</h3>
              <p>
                Os presentes TS constituem a totalidade do acordo entre o Vendedor e o Cliente. Se alguma cláusula for declarada nula, as restantes cláusulas permanecerão em vigor.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Alteração</h3>
              <p>
                O Vendedor reserva-se o direito de alterar os presentes TS a qualquer momento. Os TS aplicáveis são os que estiverem em vigor na data da encomenda.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Força maior</h3>
              <p>
                O Vendedor não pode ser responsabilizado pelo cumprimento das suas obrigações em caso de força maior, nos termos do artigo 1218 do Código Civil.
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Contacto</h3>
              <p>
                Para qualquer questão relativa aos presentes TS, pode contactar-nos em: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
