import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung (DSGVO) — NeuraAPI',
  description: 'Datenschutzerklärung von NeuraAPI, conform mit der Datenschutz-Grundverordnung (DSGVO — EU 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/de/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Datenschutzerklärung</h1>
          <p className="mt-2 text-indigo-300">Gemäß der Datenschutz-Grundverordnung (DSGVO — EU 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Verantwortlicher</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Verantwortlicher:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Sitz:</span> 12 Rue de la Paix, 75002 Paris, Frankreich</p>
              <p><span className="font-semibold text-white">SIRET:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">Datenschutzbeauftragter (DSB):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Paris, Frankreich</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Erhobene Daten</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>Im Rahmen unserer Dienste erheben wir folgende Datenkategorien:</p>

              <h3 className="font-semibold text-white">Identifikationsdaten</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Passwort (verschlüsselt)</li>
                <li>Benutzername</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Abrechnungsdaten</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Rechnungsadresse</li>
                <li>Zahlungsinformationen (verarbeitet durch Stripe, wir haben keinen Zugriff auf Kartennummern)</li>
                <li>Transaktionshistorie</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Nutzungsdaten</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>API-Schlüssel (verschlüsselt)</li>
                <li>API-Aufrufhistorie (Prompts, Antworten, Zeitstempel)</li>
                <li>Nutzungsstatistiken (Anzahl der Aufrufe, verbrauchtes Guthaben)</li>
                <li>Leistungs- und Diagnosedaten</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Verbindungsdaten</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP-Adresse</li>
                <li>Browser-Typ und Betriebssystem</li>
                <li>Datum und Uhrzeit der Anmeldung</li>
                <li>Besuchte Seiten und durchgeführte Aktionen</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Zweck der Verarbeitung</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Ihre Daten werden für folgende Zwecke verarbeitet:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Kontoverwaltung:</span> Erstellung, Verwaltung und Authentifizierung von Benutzerkonten</li>
                <li><span className="font-semibold text-white">Dienstleistungserbringung:</span> API-Zugang, Vorlagenbereitstellung, Guthabenverwaltung</li>
                <li><span className="font-semibold text-white">Abrechnung:</span> Rechnungserstellung, Zahlungsverfolgung, Mahnungen</li>
                <li><span className="font-semibold text-white">Kundensupport:</span> Beantwortung von Anfragen und Problembehebung</li>
                <li><span className="font-semibold text-white">Serviceverbesserung:</span> Nutzungsstatistiken, Leistungsoptimierung</li>
                <li><span className="font-semibold text-white">Sicherheit:</span> Betrugsprävention, Missbrauchserkennung, Schutz vor Angriffen</li>
                <li><span className="font-semibold text-white">Kommunikation:</span> Versand wichtiger dienstbezogener Benachrichtigungen</li>
                <li><span className="font-semibold text-white">Gesetzliche Pflichten:</span> Aufbewahrung von Buchungs- und Steuerdaten</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Rechtsgrundlage der Verarbeitung</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Jede Datenverarbeitung basiert auf einer Rechtsgrundlage:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Vertragserfüllung (Art. 6.1.b DSGVO):</span> Dienstleistungserbringung, Kontoverwaltung, Abrechnung</li>
                <li><span className="font-semibold text-white">Berechtigtes Interesse (Art. 6.1.f DSGVO):</span> Servicesicherheit, Verbesserung, Betrugsprävention</li>
                <li><span className="font-semibold text-white">Gesetzliche Verpflichtung (Art. 6.1.c DSGVO):</span> Aufbewahrung von Buchungs- und Steuerdaten</li>
                <li><span className="font-semibold text-white">Einwilligung (Art. 6.1.a DSGVO):</span> Nicht-essentielle Cookies, Marketingkommunikation</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Speicherdauer</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Ihre Daten werden für folgende Zeiträume gespeichert:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Kontodaten:</span> Während der gesamten Vertragsdauer, dann 3 Jahre nach der letzten Anmeldung</li>
                <li><span className="font-semibold text-white">Abrechnungsdaten:</span> 10 Jahre (gesetzliche Buchführungspflicht)</li>
                <li><span className="font-semibold text-white">API-Aufrufhistorie:</span> 12 Monate nach dem letzten Aufruf</li>
                <li><span className="font-semibold text-white">Verbindungsdaten:</span> 12 Monate</li>
                <li><span className="font-semibold text-white">Cookies:</span> Maximal 13 Monate</li>
                <li><span className="font-semibold text-white">Werbedaten:</span> 3 Jahre nach dem letzten Kontakt</li>
              </ul>
              <p className="mt-4">
                Nach Ablauf dieser Fristen werden die Daten gelöscht oder unwiderruflich anonymisiert.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Empfänger der Daten</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Ihre Daten können mit folgenden Empfängerkategorien geteilt werden:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Technische Dienstleister:</span> Vercel (Hosting), Stripe (Zahlungen), Vercel Analytics (Statistiken)</li>
                <li><span className="font-semibold text-white">Zahlungsdienstleister:</span> Stripe Inc. — sichere Zahlungsabwicklung</li>
                <li><span className="font-semibold text-white">Zuständige Behörden:</span> Im Falle einer gesetzlichen Verpflichtung oder gerichtlichen Anordnung</li>
              </ul>
              <p className="mt-4">
                Diese Dienstleister unterliegen vertraglichen Pflichten, die den Schutz Ihrer Daten gemäß der DSGVO gewährleisten. Wir verkaufen Ihre Daten niemals an Dritte.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Übermittlungen in Drittländer</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Einige unserer Dienstleister befinden sich außerhalb der Europäischen Union (insbesondere in den USA). Diese Übermittlungen werden geregelt durch:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standardvertragsklauseln (SVK) gemäß dem Beschluss der Europäischen Kommission</li>
                <li>EU-US Privacy Shield (für zertifizierte Dienstleister)</li>
                <li>Zusätzliche angemessene Garantien gemäß Art. 46 ff. DSGVO</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Ihre Rechte</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Gemäß der DSGVO stehen Ihnen folgende Rechte in Bezug auf Ihre personenbezogenen Daten zu:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Auskunftsrecht (Art. 15):</span> Erhalt einer Kopie Ihrer Daten</li>
                <li><span className="font-semibold text-white">Recht auf Berichtigung (Art. 16):</span> Korrektur unrichtiger Daten</li>
                <li><span className="font-semibold text-white">Recht auf Löschung (Art. 17):</span> Lösung Ihrer Daten verlangen</li>
                <li><span className="font-semibold text-white">Recht auf Einschränkung (Art. 18):</span> Einschränkung der Verarbeitung Ihrer Daten</li>
                <li><span className="font-semibold text-white">Recht auf Datenübertragbarkeit (Art. 20):</span> Erhalt Ihrer Daten in strukturiertem Format</li>
                <li><span className="font-semibold text-white">Widerspruchsrecht (Art. 21):</span> Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                <li><span className="font-semibold text-white">Widerruf der Einwilligung:</span> Jederzeit, ohne die Rechtmäßigkeit der bisherigen Verarbeitung zu berühren</li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                Sie haben auch das Recht, bei der zuständigen Datenschutzbehörde Beschwerde einzulegen.
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
                Unsere Website verwendet Cookies gemäß der geltenden Gesetzgebung. Weitere Informationen finden Sie in unserer <a href="/de/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie-Richtlinie</a>.
              </p>
              <p>
                Sie können Ihre Cookie-Einstellungen über das Einwilligungsbanner verwalten, das bei Ihrem ersten Besuch angezeigt wird.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Datensicherheit</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Wir setzen folgende technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>TLS/SSL-Verschlüsselung für alle Kommunikationen</li>
                <li>Verschlüsselung sensibler Daten bei Speicherung</li>
                <li>Mehrfaktorauthentifizierung (MFA) verfügbar</li>
                <li>Verschlüsselte und sicher verwaltete API-Schlüssel</li>
                <li>Eingeschränkter Datenzugriff (Prinzip der minimalen Berechtigung)</li>
                <li>Zugriffsprotokollierung und Überwachung</li>
                <li>Regelmäßige Sicherheitsprüfungen</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Kontakt</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Bei Fragen zum Schutz Ihrer personenbezogenen Daten:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>E-Mail: </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Adresse: NeuraAPI SAS — DSB, 12 Rue de la Paix, 75002 Paris, Frankreich</span>
                </div>
              </div>
              <p className="mt-4">
                Wir verpflichten uns, Ihre Anfrage innerhalb eines Monats zu beantworten.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
