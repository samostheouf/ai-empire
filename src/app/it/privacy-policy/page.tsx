import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy (GDPR) — NeuraAPI',
  description: 'Informativa sulla privacy di NeuraAPI, conforme al Regolamento Generale sulla Protezione dei Dati (GDPR — UE 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/it/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Informativa sulla Privacy</h1>
          <p className="mt-2 text-indigo-300">Conforme al Regolamento Generale sulla Protezione dei Dati (GDPR — UE 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Titolare del trattamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Titolare:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Sede legale:</span> 12 Rue de la Paix, 75002 Parigi, Francia</p>
              <p><span className="font-semibold text-white">SIRET:</span> Da completare</p>
              <p><span className="font-semibold text-white">Responsabile della Protezione dei Dati (RPD/DPO):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Parigi, Francia</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Dati raccolti</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>Nel quadro dei nostri servizi, raccogliamo le seguenti categorie di dati:</p>

              <h3 className="font-semibold text-white">Dati di identificazione</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Password (crittografata)</li>
                <li>Nome utente</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dati di fatturazione</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Indirizzo di fatturazione</li>
                <li>Informazioni di pagamento (elaborate da Stripe, non abbiamo accesso ai numeri di carta)</li>
                <li>Storico delle transazioni</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dati di utilizzo</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiavi API (crittografate)</li>
                <li>Storico delle chiamate API (prompt, risposte, timestamp)</li>
                <li>Statistiche di utilizzo (numero di chiamate, crediti consumati)</li>
                <li>Dati di prestazione e diagnostica</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Dati di connessione</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Indirizzo IP</li>
                <li>Tipo di browser e sistema operativo</li>
                <li>Data e ora di accesso</li>
                <li>Pagine visitate e azioni effettuate</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Finalità del trattamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>I vostri dati vengono trattati per le seguenti finalità:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Gestione degli account:</span> Creazione, gestione e autenticazione degli account utente</li>
                <li><span className="font-semibold text-white">Fornitura dei servizi:</span> Accesso alle API, consegna dei template, gestione dei crediti</li>
                <li><span className="font-semibold text-white">Fatturazione:</span> Emissione di fatture, monitoraggio dei pagamenti, solleciti</li>
                <li><span className="font-semibold text-white">Supporto clienti:</span> Risposta alle richieste e risoluzione dei problemi</li>
                <li><span className="font-semibold text-white">Miglioramento del servizio:</span> Statistiche di utilizzo, ottimizzazione delle prestazioni</li>
                <li><span className="font-semibold text-white">Sicurezza:</span> Prevenzione delle frodi, rilevamento degli abusi, protezione dagli attacchi</li>
                <li><span className="font-semibold text-white">Comunicazione:</span> Invio di notifiche importanti relative al servizio</li>
                <li><span className="font-semibold text-white">Obblighi legali:</span> Conservazione dei dati contabili e fiscali</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Base giuridica del trattamento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Ogni trattamento si basa su una base giuridica:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Esecuzione del contratto (art. 6.1.b GDPR):</span> Fornitura dei servizi, gestione degli account, fatturazione</li>
                <li><span className="font-semibold text-white">Interesse legittimo (art. 6.1.f GDPR):</span> Sicurezza del servizio, miglioramento, prevenzione delle frodi</li>
                <li><span className="font-semibold text-white">Obbligo legale (art. 6.1.c GDPR):</span> Conservazione dei dati contabili e fiscali</li>
                <li><span className="font-semibold text-white">Consenso (art. 6.1.a GDPR):</span> Cookie non essenziali, comunicazioni di marketing</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Periodo di conservazione</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>I vostri dati vengono conservati per i seguenti periodi:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Dati dell&apos;account:</span> Per tutta la durata del rapporto contrattuale, poi 3 anni dopo l&apos;ultimo accesso</li>
                <li><span className="font-semibold text-white">Dati di fatturazione:</span> 10 anni (obbligo legale contabile)</li>
                <li><span className="font-semibold text-white">Storico chiamate API:</span> 12 mesi dopo l&apos;ultima chiamata</li>
                <li><span className="font-semibold text-white">Dati di connessione:</span> 12 mesi</li>
                <li><span className="font-semibold text-white">Cookie:</span> Massimo 13 mesi</li>
                <li><span className="font-semibold text-white">Dati di prospezione:</span> 3 anni dopo l&apos;ultimo contatto</li>
              </ul>
              <p className="mt-4">
                Alla scadenza di questi termini, i dati vengono eliminati o anonimizzati in modo irreversibile.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Destinatari dei dati</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>I vostri dati possono essere condivisi con le seguenti categorie di destinatari:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Fornitori tecnici:</span> Vercel (hosting), Stripe (pagamenti), Vercel Analytics (statistiche)</li>
                <li><span className="font-semibold text-white">Fornitori di pagamento:</span> Stripe Inc. — elaborazione sicura dei pagamenti</li>
                <li><span className="font-semibold text-white">Autorità competenti:</span> In caso di obbligo legale o richiesta giudiziaria</li>
              </ul>
              <p className="mt-4">
                Questi fornitori sono soggetti a obblighi contrattuali che garantiscono la protezione dei vostri dati conformemente al GDPR. Non vendiamo mai i vostri dati a terzi.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Trasferimenti al di fuori dell&apos;Unione Europea</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Alcuni dei nostri fornitori si trovano al di fuori dell&apos;Unione Europea (in particolare negli Stati Uniti). Questi trasferimenti sono regolati da:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clausole contrattuali standard (CCS) conformi alla decisione di esecuzione della Commissione europea</li>
                <li>Il Privacy Shield (per i fornitori certificati)</li>
                <li>Garanzie aggiuntive adeguate conformemente agli articoli 46 e seguenti del GDPR</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. I vostri diritti</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                In conformità con il GDPR, disponete dei seguenti diritti sui vostri dati personali:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Diritto di accesso (art. 15):</span> Ottenere una copia dei vostri dati</li>
                <li><span className="font-semibold text-white">Diritto di rettifica (art. 16):</span> Correggere dati inesatti</li>
                <li><span className="font-semibold text-white">Diritto alla cancellazione (art. 17):</span> Richiedere l&apos;eliminazione dei vostri dati</li>
                <li><span className="font-semibold text-white">Diritto alla limitazione del trattamento (art. 18):</span> Limitare il trattamento dei vostri dati</li>
                <li><span className="font-semibold text-white">Diritto alla portabilità (art. 20):</span> Ricevere i vostri dati in un formato strutturato</li>
                <li><span className="font-semibold text-white">Diritto di opposizione (art. 21):</span> Opporsi al trattamento dei vostri dati</li>
                <li><span className="font-semibold text-white">Revoca del consenso:</span> In qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
              </ul>
              <p className="mt-4">
                Per esercitare i vostri diritti, contattateci a: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                Avete inoltre il diritto di presentare un reclamo al Garante per la protezione dei dati personali.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Il nostro sito utilizza cookie in conformità con la normativa vigente. Per maggiori informazioni, consultare la nostra <a href="/it/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie Policy</a>.
              </p>
              <p>
                Potete gestire le vostre preferenze sui cookie tramite il banner di consenso visualizzato durante la prima visita.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Sicurezza dei dati</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Adottiamo le seguenti misure tecniche e organizzative per proteggere i vostri dati:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Crittografia TLS/SSL per tutte le comunicazioni</li>
                <li>Crittografia dei dati sensibili a riposo</li>
                <li>Autenticazione multi-fattore (MFA) disponibile</li>
                <li>Chiavi API crittografate e gestite in modo sicuro</li>
                <li>Accesso limitato ai dati (principio del minimo privilegio)</li>
                <li>Registrazione e monitoraggio degli accessi</li>
                <li>Audits di sicurezza regolari</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Contatti</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Per qualsiasi domanda relativa alla protezione dei vostri dati personali:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Email: </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Indirizzo: NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Parigi, Francia</span>
                </div>
              </div>
              <p className="mt-4">
                Ci impegniamo a rispondere alla vostra richiesta entro un mese.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
