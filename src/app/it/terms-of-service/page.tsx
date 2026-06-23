import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termini di Servizio — NeuraAPI',
  description: 'Termini di Servizio di NeuraAPI — Servizi di intelligenza artificiale e template digitali.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/it/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Termini di Servizio</h1>
          <p className="mt-2 text-indigo-300">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Articolo 1 — Oggetto</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                I presenti Termini di Servizio (TS) disciplinano i rapporti contrattuali tra la società NeuraAPI SAS, di seguito denominata &quot;il Venditore&quot;, e qualsiasi persona fisica o giuridica, di seguito denominata &quot;il Cliente&quot;, che desidera acquistare i servizi e i prodotti offerti sul sito web <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                Qualsiasi ordine di servizi o prodotti sul sito web implica l&apos;accettazione incondizionata dei presenti TS. Il Venditore si riserva il diritto di modificare i presenti TS in qualsiasi momento. I TS applicabili sono quelli in vigore alla data dell&apos;ordine del Cliente.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 2 — Prodotti e servizi</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Il Venditore propone alla vendita i seguenti prodotti e servizi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Abbonamenti API di intelligenza artificiale</span> — Accesso agli endpoint IA (generazione di testo, SEO, codice) tramite chiave API personale.</li>
                <li><span className="font-semibold text-white">Template digitali</span> — Template web (Next.js, Tailwind CSS) scaricabili e utilizzabili in conformità con la licenza acquisita.</li>
                <li><span className="font-semibold text-white">Pacchetti crediti</span> — Unità di consumo per le chiamate API, valide per un periodo determinato.</li>
              </ul>
              <p>
                Le caratteristiche essenziali dei prodotti e dei servizi sono presentate sul sito web. Le immagini e le descrizioni sono fornite a titolo indicativo e non vincolano il Venditore.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 3 — Prezzi e modalità di pagamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Prezzi</h3>
              <p>
                I prezzi dei prodotti e dei servizi sono indicati in euro (€) IVA inclusa. Il Venditore si riserva il diritto di modificare i prezzi in qualsiasi momento. I prezzi applicabili sono quelli in vigore al momento della conferma dell&apos;ordine da parte del Cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Modalità di pagamento</h3>
              <p>Il pagamento avviene esclusivamente online tramite:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Carta di credito (Visa, Mastercard, American Express)</li>
                <li>Bonifico bancario (per gli abbonamenti Enterprise)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Fatturazione</h3>
              <p>
                Dopo ogni pagamento viene emessa elettronicamente una fattura accessibile nell&apos;area clienti. Il Cliente si impegna a conservare le proprie fatture.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Mancato pagamento</h3>
              <p>
                In caso di mancato pagamento, il Venditore si riserva il diritto di sospendere l&apos;accesso ai servizi dopo una messa in mora rimasta senza effetto per 15 giorni. Possono essere applicate penalità di ritardo al tasso legale triplo.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 4 — Messa a disposizione e consegna</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Servizi in abbonamento</h3>
              <p>
                L&apos;accesso alle API è messo a disposizione immediatamente dopo la conferma del pagamento. La chiave API viene generata automaticamente ed è accessibile dall&apos;area clienti.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Template digitali</h3>
              <p>
                I template sono scaricabili immediatamente dopo l&apos;acquisto. Un link di download viene inviato per email ed è accessibile dall&apos;area clienti.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Pacchetti crediti</h3>
              <p>
                I crediti vengono accreditati sul conto del Cliente immediatamente dopo il pagamento e rimangono validi per 12 mesi dalla data di acquisto.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 5 — Diritto di recesso</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                In conformità con gli articoli L.221-18 e seguenti del Codice del Consumo, il Cliente dispone di un termine di <span className="font-semibold text-white">14 giorni</span> dalla data di sottoscrizione o acquisto per esercitare il diritto di recesso, senza dover motivare la propria decisione.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Condizioni di recesso</h3>
              <p>Per esercitare il diritto di recesso, il Cliente deve inviare al Venditore una dichiarazione scritta (email o lettera) che esprima chiaramente la propria volontà di recedere.</p>
              <p>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Eccezioni al diritto di recesso</h3>
              <p>Il diritto di recesso non può essere esercitato nei seguenti casi:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L&apos;esecuzione del servizio è iniziata, con il consenso espresso del Cliente, prima della scadenza del termine di 14 giorni</li>
                <li>Il contenuto digitale (template) è stato scaricato o attivato dal Cliente</li>
                <li>La prestazione del servizio è stata interamente eseguita prima della scadenza del termine di recesso</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Rimborso</h3>
              <p>
                In caso di recesso valido, il rimborso avviene entro un massimo di 14 giorni, con lo stesso mezzo di pagamento utilizzato nella transazione iniziale.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 6 — Garanzie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Garanzia di conformità</h3>
              <p>
                In conformità con gli articoli L.217-3 e seguenti del Codice del Consumo, il Venditore è tenuto a consegnare un bene conforme al contratto. Il Cliente può richiedere la conformità del bene entro 2 anni dalla consegna.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Garanzia per vizi occulti</h3>
              <p>
                In conformità con gli articoli 1641 e seguenti del Codice Civile, il Venditore è tenuto a garantire i vizi occulti. Il Cliente dispone di 2 anni dalla scoperta del vizio per agire.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Disponibilità del servizio</h3>
              <p>
                Il Venditore si impegna a garantire la disponibilità del servizio con un tasso di disponibilità mensile del 99,9% (SLA). Le manutenzioni pianificate sono comunicate con 48 ore di anticipo.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 7 — Limitazione di responsabilità</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Il Venditore non può essere ritenuto responsabile dei danni derivanti da:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilizzo non conforme dei servizi da parte del Cliente</li>
                <li>Interruzione temporanea del servizio per manutenzione o aggiornamento</li>
                <li>Perdita di dati dovuta a guasto dell&apos;infrastruttura tecnica</li>
                <li>Danno indiretto, perdita di fatturato, perdita di dati o qualsiasi altro pregiudizio</li>
                <li>Utilizzo dei risultati generati dall&apos;IA per fini illeciti o contrari all&apos;ordine pubblico</li>
              </ul>
              <p className="mt-4">
                La responsabilità totale del Venditore è limitata all&apos;importo pagato dal Cliente nei 12 mesi precedenti l&apos;evento che ha causato il danno.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 8 — Licenza d&apos;uso dei template</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                L&apos;acquisto di un template conferisce al Cliente una licenza d&apos;uso non esclusiva, non trasferibile e limitata, che gli consente di:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilizzare il template per progetti personali o commerciali</li>
                <li>Modificare il template per adattarlo alle proprie esigenze</li>
                <li>Utilizzare il template per un numero illimitato di progetti</li>
              </ul>
              <p className="mt-3">Il Cliente non può:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Rivendere o ridistribuire il template come tale</li>
                <li>Sotto-licenziare il template a terzi</li>
                <li>Rimuovere o modificare le indicazioni di copyright</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 9 — Dati personali</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Il trattamento dei dati personali del Cliente è disciplinato dalla nostra <a href="/it/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Informativa sulla Privacy</a>, conforme al GDPR.
              </p>
              <p>
                Il Cliente dispone dei diritti di accesso, rettifica, cancellazione, portabilità e opposizione sui propri dati personali contattando: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Articolo 10 — Legge applicabile e controversie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                I presenti TS sono regolati dal <span className="font-semibold text-white">diritto francese</span>. In caso di controversia, le parti si adopereranno per trovare una soluzione amichevole. In mancanza, la controversia sarà sottoposta ai tribunali di Parigi.
              </p>
              <p>
                In conformità con gli articoli L.616-1 e R.616-1 del Codice del Consumo, il Cliente può ricorrere gratuitamente a un mediatore del consumo in caso di controversia non risolta:
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mediazione del consumo — mediation-conso.fr</a></p>
                <p>• Piattaforma europea di risoluzione delle controversie: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Articolo 11 — Disposizioni varie</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Interezza</h3>
              <p>
                I presenti TS costituiscono l&apos;intero accordo tra il Venditore e il Cliente. Se una clausola fosse dichiarata nulla, le altre clausole resterebbero in vigore.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Modifiche</h3>
              <p>
                Il Venditore si riserva il diritto di modificare i presenti TS in qualsiasi momento. I TS applicabili sono quelli in vigore alla data dell&apos;ordine.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Forza maggiore</h3>
              <p>
                Il Venditore non può essere ritenuto responsabile dell&apos;esecuzione delle proprie obbligazioni in caso di forza maggiore ai sensi dell&apos;articolo 1218 del Codice Civile.
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Contatti</h3>
              <p>
                Per qualsiasi domanda relativa ai presenti TS, potete contattarci a: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
