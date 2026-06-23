import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) — NeuraAPI',
  description: 'Allgemeine Geschäftsbedingungen von NeuraAPI — Künstliche-intelligenz-Dienste und digitale Vorlagen.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/de/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-2 text-indigo-300">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">§ 1 — Gegenstand</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die vertraglichen Beziehungen zwischen der Gesellschaft NeuraAPI SAS, nachfolgend als „Verkäufer" bezeichnet, und jeder natürlichen oder juristischen Person, nachfolgend als „Kunde" bezeichnet, die die auf der Website <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a> angebotenen Dienstleistungen und Produkte erwerben möchte.
              </p>
              <p>
                Jede Bestellung von Dienstleistungen oder Produkten auf der Website impliziert die vorbehaltlose Annahme dieser AGB. Der Verkäufer behält sich das Recht vor, diese AGB jederzeit zu ändern. Es gelten die AGB, die zum Zeitpunkt der Bestellung durch den Kunden in Kraft sind.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 2 — Produkte und Dienstleistungen</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Der Verkäufer bietet folgende Produkte und Dienstleistungen zum Verkauf an:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">KI-API-Abonnements</span> — Zugang zu KI-Endpoints (Textgenerierung, SEO, Code) über einen persönlichen API-Schlüssel.</li>
                <li><span className="font-semibold text-white">Digitale Vorlagen</span> — Web-Vorlagen (Next.js, Tailwind CSS), die heruntergeladen und gemäß der erworbenen Lizenz verwendet werden können.</li>
                <li><span className="font-semibold text-white">Guthabenpakete</span> — Verbrauchseinheiten für API-Aufrufe, gültig für einen bestimmten Zeitraum.</li>
              </ul>
              <p>
                Die wesentlichen Merkmale der Produkte und Dienstleistungen werden auf der Website dargestellt. Bilder und Beschreibungen dienen nur zu Informationszwecken und stellen kein Angebot des Verkäufers dar.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 3 — Preise und Zahlungsbedingungen</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Preise</h3>
              <p>
                Die Preise der Produkte und Dienstleistungen sind in Euro (€) inklusive aller Steuern (inkl. MSt. zum geltenden Satz) angegeben. Der Verkäufer behält sich das Recht vor, seine Preise jederzeit zu ändern. Es gelten die zum Zeitpunkt der Auftragsbestätigung durch den Kunden gültigen Preise.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Zahlungsarten</h3>
              <p>Die Zahlung erfolgt ausschließlich online über:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kreditkarte (Visa, Mastercard, American Express)</li>
                <li>Banküberweisung (für Enterprise-Abonnements)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Rechnungsstellung</h3>
              <p>
                Nach jeder Zahlung wird elektronisch eine Rechnung ausgestellt, die im Kundenbereich abrufbar ist. Der Kunde verpflichtet sich, seine Rechnungen aufzubewahren.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Zahlungsverzug</h3>
              <p>
                Im Falle von Zahlungsverzug behält sich der Verkäufer das Recht vor, den Zugang zu den Diensten nach einer Mahnung, die 15 Tage lang ohne Wirkung geblieben ist, auszusetzen. Verzugszinsen in Höhe des dreifachen des gesetzlichen Zinssatzes können erhoben werden.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 4 — Bereitstellung und Lieferung</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Abonnementdienste</h3>
              <p>
                Der Zugang zu den APIs wird unmittelbar nach Zahlungsbestätigung zur Verfügung gestellt. Der API-Schlüssel wird automatisch generiert und ist im Kundenbereich abrufbar.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Digitale Vorlagen</h3>
              <p>
                Die Vorlagen sind unmittelbar nach dem Kauf zum Download verfügbar. Ein Download-Link wird per E-Mail versendet und ist im Kundenbereich abrufbar.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Guthabenpakete</h3>
              <p>
                Das Guthaben wird dem Kundenkonto unmittelbar nach der Zahlung gutgeschrieben und bleibt 12 Monate ab dem Kaufdatum gültig.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 5 — Widerrufsrecht</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Gemäß § 312g BGB i.V.m. § 355 BGB hat der Kunde innerhalb von <span className="font-semibold text-white">14 Tagen</span> ab dem Datum des Vertragsabschlusses oder des Kaufs das Recht, seinen Vertrag ohne Angabe von Gründen zu widerrufen.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Widerrufsbedingungen</h3>
              <p>Um sein Widerrufsrecht auszuüben, muss der Kunde dem Verkäufer eine eindeutige schriftliche Erklärung (E-Mail oder Brief) übermitteln.</p>
              <p>E-Mail: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Ausnahmen vom Widerrufsrecht</h3>
              <p>Das Widerrufsrecht besteht nicht in folgenden Fällen:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Die Dienstleistung wurde mit ausdrücklicher Zustimmung des Kunden vor Ablauf der 14-tägigen Frist begonnen</li>
                <li>Der digitale Inhalt (Vorlagen) wurde vom Kunden heruntergeladen oder aktiviert</li>
                <li>Die Dienstleistung wurde vollständig erbracht, bevor die Widerrufsfrist abgelaufen ist</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Erstattung</h3>
              <p>
                Bei einem gültigen Widerruf erfolgt die Erstattung innerhalb von maximal 14 Tagen über dasselbe Zahlungsmittel wie bei der ursprünglichen Transaktion.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 6 — Gewährleistungen</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Gewährleistung der Vertragsgemäßheit</h3>
              <p>
                Gemäß § 434 BGB ist der Verkäufer verpflichtet, ein vertragsgemäßes Produkt zu liefern. Der Kunde kann die Vertragsgemäßheit innerhalb von 2 Jahren ab Lieferung geltend machen.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Gewährleistung für versteckte Mängel</h3>
              <p>
                Gemäß § 438 BGB haftet der Verkäufer für versteckte Mängel. Der Kunde hat 2 Jahre ab Entdeckung des Mangels Zeit, Ansprüche geltend zu machen.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Serviceverfügbarkeit</h3>
              <p>
                Der Verkäufer verpflichtet sich, eine Serviceverfügbarkeit mit einer monatlichen Uptime-Rate von 99,9% (SLA) zu gewährleisten. Geplante Wartungsarbeiten werden 48 Stunden im Voraus mitgeteilt.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 7 — Haftungsbeschränkung</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Der Verkäufer haftet nicht für Schäden, die sich ergeben aus:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nicht vertragsgemäßem Gebrauch der Dienste durch den Kunden</li>
                <li>Temporären Serviceunterbrechungen zu Wartungs- oder Aktualisierungszwecken</li>
                <li>Datenverlust aufgrund eines technischen Infrastrukturausfalls</li>
                <li>Mittelbarem Schaden, entgangenem Umsatz, Datenverlust oder anderem Nachteil</li>
                <li>Nutzung der von der KI generierten Ergebnisse für rechtswidrige Zwecke oder gegen die öffentliche Ordnung</li>
              </ul>
              <p className="mt-4">
                Die Gesamthaftung des Verkäufers ist auf den Betrag beschränkt, den der Kunde in den 12 Monaten vor dem schadensverursachenden Ereignis gezahlt hat.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 8 — Nutzungs-Lizenz für Vorlagen</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Der Kauf einer Vorlage gewährt dem Kunden eine nicht-exklive, nicht übertragbare und eingeschränkte Nutzungs-Lizenz, die ihm Folgendes erlaubt:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nutzung der Vorlage für persönliche oder kommerzielle Projekte</li>
                <li>Änderung der Vorlage zur Anpassung an die eigenen Bedürfnisse</li>
                <li>Nutzung der Vorlage für eine unbegrenzte Anzahl von Projekten</li>
              </ul>
              <p className="mt-3">Der Kunde darf nicht:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Die Vorlage weiterverkaufen oder weiterverteilen</li>
                <li>Die Vorlage an Dritte unterlizenzieren</li>
                <li>Urheberrechtsvermerke entfernen oder ändern</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 9 — Personenbezogene Daten</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Die Verarbeitung personenbezogener Daten des Kunden wird durch unsere <a href="/de/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Datenschutzerklärung</a> geregelt, die der DSGVO entspricht.
              </p>
              <p>
                Der Kunde hat das Recht auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerspruch bezüglich seiner personenbezogenen Daten durch Kontaktaufnahme mit: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">§ 10 — Anwendbares Recht und Streitigkeiten</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Diese AGB unterliegen dem <span className="font-semibold text-white">französischen Recht</span>. Im Falle von Streitigkeiten bemühen sich die Parteien um eine gütliche Einigung. Andernfalls wird der Rechtsstreit vor den Gerichten in Paris verhandelt.
              </p>
              <p>
                Gemäß § 36 VSBG kann der Kunde im Falle eines nicht gelösten Streits kostenlos auf eine Verbraucherschlichtungsstelle zurückgreifen:
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Verbraucherschlichtung — mediation-conso.fr</a></p>
                <p>• Europäische OS-Plattform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">§ 11 — Sonstige Bestimmungen</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Gesamtheit</h3>
              <p>
                Diese AGB bilden die Gesamtheit der Vereinbarung zwischen dem Verkäufer und dem Kunden. Sollte eine Klausel für unwirksam erklärt werden, bleiben die anderen Klauseln bestehen.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Änderung</h3>
              <p>
                Der Verkäufer behält sich das Recht vor, diese AGB jederzeit zu ändern. Es gelten die AGB, die zum Zeitpunkt der Bestellung in Kraft sind.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Höhere Gewalt</h3>
              <p>
                Der Verkäufer haftet nicht für die Erfüllung seiner Verpflichtungen bei höherer Gewalt im Sinne von Art. 1218 des französischen Zivilgesetzbuchs (Code civil).
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Kontakt</h3>
              <p>
                Bei Fragen zu diesen AGB können Sie uns kontaktieren unter: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
