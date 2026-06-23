import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum — NeuraAPI',
  description: 'Impressum der Website NeuraAPI gemäß dem Telemediengesetz (TMG).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/de/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Impressum</h1>
          <p className="mt-2 text-indigo-300">Angaben gemäß § 5 TMG</p>
          <p className="mt-1 text-sm text-indigo-400">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Anbieter</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Firmenname:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Rechtsform:</span> Société par Actions Simplifiée (SAS)</p>
              <p><span className="font-semibold text-white">Sitz:</span> 12 Rue de la Paix, 75002 Paris, Frankreich</p>
              <p><span className="font-semibold text-white">SIRET:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">SIREN:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">NAF/APE-Code:</span> 6201Z — Computerprogrammierung</p>
              <p><span className="font-semibold text-white">USt-IdNr.:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">Stammkapital:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">Verantwortlicher Redakteur:</span> Noch nicht ausgefüllt</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Hosting</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Anbieter:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Adresse:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p><span className="font-semibold text-white">Website:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                Die Website wird auf der Cloud-Infrastruktur von Vercel gehostet und entspricht den Sicherheits- und Verfügbarkeitsstandards der DSGVO.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Kontakt</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">E-Mail:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Telefon:</span> Noch nicht ausgefüllt</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Adresse:</span> 12 Rue de la Paix, 75002 Paris, Frankreich</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Berufshaftpflichtversicherung</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Versicherer:</span> AXA France</p>
              <p><span className="font-semibold text-white">Police-Nr.:</span> Noch nicht ausgefüllt</p>
              <p><span className="font-semibold text-white">Deckung:</span> Berufshaftpflicht und Cyber-Risiken</p>
              <p className="text-sm text-indigo-300 mt-4">
                Gemäß den gesetzlichen Bestimmungen verfügt NeuraAPI SAS über eine Berufshaftpflichtversicherung, die Schäden an Dritten im Rahmen ihrer Geschäftstätigkeit abdeckt.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Geistiges Eigentum</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Die gesamten Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Icons, Sounds, Software) sind ausschließliches Eigentum von NeuraAPI SAS oder seinen Partnern und durch französische und internationale Gesetze zum geistigen Eigentum geschützt.
              </p>
              <p>
                Jede Vervielfältigung, Darstellung, Änderung, Veröffentlichung, Übertragung oder Verfälschung der Website oder ihrer Inhalte durch jegliche Mittel ist ohne vorherige schriftliche Genehmigung von NeuraAPI SAS untersagt.
              </p>
              <p>
                Die auf dieser Website dargestellten Marken und Logos sind eingetragene Marken von NeuraAPI SAS oder seinen Partnern. Jede Vervielfältigung oder Darstellung, ganz oder teilweise, dieser Marken oder Logos ist ohne vorherige Genehmigung untersagt.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Personenbezogene Daten</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Die Verarbeitung personenbezogener Daten unterliegt der Datenschutz-Grundverordnung (DSGVO — EU-Verordnung 2016/679) und dem Bundesdatenschutzgesetz (BDSG).
              </p>
              <p>
                Weitere Informationen finden Sie in unserer <a href="/de/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Datenschutzerklärung</a>.
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
                Gemäß der DSGVO können beim Besuch unserer Website Cookies auf Ihrem Endgerät gespeichert werden.
              </p>
              <p>
                Weitere Informationen über die von uns verwendeten Cookies und deren Verwaltung finden Sie in unserer <a href="/de/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie-Richtlinie</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Streitschlichtung</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Anwendbares Recht</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Dieses Impressum unterliegt dem französischen Recht. Im Falle von Streitigkeiten sind die Gerichte in Paris ausschließlich zuständlich, sofern keine zwingende abweichende Rechtsvorschrift gilt.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
