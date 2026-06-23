import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Note Legali — NeuraAPI',
  description: 'Note legali del sito web NeuraAPI, conformemente al Codice dell\'Informatica.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/it/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Note Legali</h1>
          <p className="mt-2 text-indigo-300">Informazioni legali relative al sito web NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Editore del sito</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Ragione sociale:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Forma giuridica:</span> Società per Azioni Semplificata (SAS)</p>
              <p><span className="font-semibold text-white">Sede legale:</span> 12 Rue de la Paix, 75002 Parigi, Francia</p>
              <p><span className="font-semibold text-white">SIRET:</span> Da completare</p>
              <p><span className="font-semibold text-white">SIREN:</span> Da completare</p>
              <p><span className="font-semibold text-white">Codice NAF/APE:</span> 6201Z — Programmazione informatica</p>
              <p><span className="font-semibold text-white">Partita IVA intracomunitaria:</span> Da completare</p>
              <p><span className="font-semibold text-white">Capitale sociale:</span> Da completare</p>
              <p><span className="font-semibold text-white">Direttore della pubblicazione:</span> Da completare</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Provider di hosting</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Nome:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Indirizzo:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, Stati Uniti</p>
              <p><span className="font-semibold text-white">Sito web:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                Il sito è ospitato sull&apos;infrastruttura cloud di Vercel, in conformità con gli standard di sicurezza e disponibilità del GDPR.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contatti</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Email:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Telefono:</span> Da completare</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Indirizzo:</span> 12 Rue de la Paix, 75002 Parigi, Francia</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Assicurazioni professionali</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Assicuratore:</span> AXA France</p>
              <p><span className="font-semibold text-white">N. polizza:</span> Da completare</p>
              <p><span className="font-semibold text-white">Copertura:</span> Responsabilità civile professionale e rischi informatici</p>
              <p className="text-sm text-indigo-300 mt-4">
                In conformità con le disposizioni di legge, NeuraAPI SAS dispone di un&apos;assicurazione di responsabilità civile professionale che copre i danni causati a terzi nell&apos;ambito della propria attività.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Proprietà intellettuale</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Tutti i contenuti di questo sito web (testi, immagini, grafiche, loghi, icone, suoni, software) sono di proprietà esclusiva di NeuraAPI SAS o dei suoi partner e sono protetti dalle leggi francesi e internazionali in materia di proprietà intellettuale.
              </p>
              <p>
                È vietata qualsiasi riproduzione, rappresentazione, modifica, pubblicazione, trasmissione o alterazione del sito o del suo contenuto, con qualsiasi mezzo, senza previa autorizzazione scritta di NeuraAPI SAS.
              </p>
              <p>
                I marchi e i loghi presenti su questo sito sono marchi registrati di NeuraAPI SAS o dei suoi partner. È vietata qualsiasi riproduzione o rappresentazione, totale o parziale, di questi marchi o loghi senza previa autorizzazione.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Dati personali</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Il trattamento dei dati personali è regolato dal Regolamento Generale sulla Protezione dei Dati (GDPR — Regolamento UE 2016/679) e dal D.Lgs. 196/2003 (Codice Privacy).
              </p>
              <p>
                Per maggiori informazioni, consultare la nostra <a href="/it/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Informativa sulla Privacy</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                In conformità con il GDPR, sul vostro dispositivo possono essere depositati cookie durante la navigazione sul nostro sito web.
              </p>
              <p>
                Per maggiori informazioni sui cookie che utilizziamo e su come gestirli, consultare la nostra <a href="/it/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie Policy</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Risoluzione delle controversie</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                In conformità con il D.Lgs. 206/2005 (Codice del Consumo), offriamo ai nostri clienti non professionisti un meccanismo gratuito di risoluzione delle controversie.
              </p>
              <p>
                In caso di controversia, è possibile rivolgersi al Mediatore del Consumo:
              </p>
              <div className="ml-4 space-y-2">
                <p>• Sito web: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• Indirizzo: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• Email: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                È inoltre possibile utilizzare la piattaforma europea per la risoluzione delle controversie online disponibile all&apos;indirizzo: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Legge applicabile</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Le presenti note legali sono regolate dal diritto francese. In caso di controversia, i tribunali di Parigi saranno i soli competenti, salvo disposizione imperativa contraria.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
