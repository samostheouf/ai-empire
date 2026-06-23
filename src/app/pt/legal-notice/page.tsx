import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal — NeuraAPI',
  description: 'Aviso legal do site NeuraAPI, em conformidade com a Lei de Serviços da Sociedade da Informação e de Comércio Eletrónico.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/pt/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Aviso Legal</h1>
          <p className="mt-2 text-indigo-300">Informações legais relativas ao site NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Editor do site</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Razão social:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Forma jurídica:</span> Sociedade por Ações Simplificada (SAS)</p>
              <p><span className="font-semibold text-white">Sede social:</span> 12 Rue de la Paix, 75002 Paris, França</p>
              <p><span className="font-semibold text-white">SIRET:</span> A preencher</p>
              <p><span className="font-semibold text-white">SIREN:</span> A preencher</p>
              <p><span className="font-semibold text-white">Código NAF/APE:</span> 6201Z — Programação informática</p>
              <p><span className="font-semibold text-white">N.º de IVA intracomunitário:</span> A preencher</p>
              <p><span className="font-semibold text-white">Capital social:</span> A preencher</p>
              <p><span className="font-semibold text-white">Diretor da publicação:</span> A preencher</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Fornecedor de alojamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Nome:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Morada:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, Estados Unidos</p>
              <p><span className="font-semibold text-white">Website:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                O site está alojado na infraestrutura cloud da Vercel, em conformidade com as normas de segurança e disponibilidade do RGPD.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Email:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Telefone:</span> A preencher</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Morada:</span> 12 Rue de la Paix, 75002 Paris, França</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Seguros profissionais</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Segurador:</span> AXA France</p>
              <p><span className="font-semibold text-white">N.º da apólice:</span> A preencher</p>
              <p><span className="font-semibold text-white">Cobertura:</span> Responsabilidade civil profissional e ciber-riscos</p>
              <p className="text-sm text-indigo-300 mt-4">
                Em conformidade com as disposições legais, a NeuraAPI SAS dispõe de um seguro de responsabilidade civil profissional que cobre os danos causados a terceiros no âmbito da sua atividade.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Propriedade intelectual</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Todo o conteúdo deste site (textos, imagens, gráficos, logótipos, ícones, sons, software) é propriedade exclusiva da NeuraAPI SAS ou dos seus parceiros e está protegido pelas leis francesas e internacionais de propriedade intelectual.
              </p>
              <p>
                É proibida qualquer reprodução, representação, modificação, publicação, transmissão ou alteração do site ou do seu conteúdo, por qualquer meio, sem autorização prévia por escrito da NeuraAPI SAS.
              </p>
              <p>
                As marcas e logótipos que aparecem neste site são marcas registadas da NeuraAPI SAS ou dos seus parceiros. É proibida qualquer reprodução ou representação, total ou parcial, dessas marcas ou logótipos sem autorização prévia.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Dados pessoais</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                O tratamento de dados pessoais é regido pelo Regulamento Geral de Proteção de Dados (RGPD — Regulamento UE 2016/679) e pela Lei n.º 58/2019.
              </p>
              <p>
                Para mais informações, consulte a nossa <a href="/pt/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Privacidade</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Em conformidade com o RGPD, cookies podem ser depositados no seu dispositivo durante a navegação no nosso site.
              </p>
              <p>
                Para mais informações sobre os cookies que utilizamos e como os gerir, consulte a nossa <a href="/pt/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Cookies</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Resolução de litígios</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Em conformidade com o Código do Consumidor, oferecemos aos nossos clientes não profissionais um mecanismo gratuito de resolução de litígios.
              </p>
              <p>
                Em caso de litígio, poderá recorrer ao Mediador do Consumidor:
              </p>
              <div className="ml-4 space-y-2">
                <p>• Website: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• Morada: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• Email: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                Poderá também utilizar a plataforma europeia de resolução de litígios online disponível em: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Lei aplicável</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                O presente aviso legal é regido pelo direito francês. Em caso de litígio, os tribunais judiciais de Paris serão os únicos competentes, salvo disposição imperativa em contrário.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
