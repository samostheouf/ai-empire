import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mentions Légales — NeuraAPI',
  description: "Mentions légales du site NeuraAPI, conformément à la Loi pour la Confiance dans l'Économie Numérique (LCEN).",
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/mentions-legales' },
}

export default function MentionsLegales() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Mentions Légales</h1>
          <p className="mt-2 text-indigo-300">Informations légales relatives au site NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Éditeur du site */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Éditeur du site</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Dénomination sociale :</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Forme juridique :</span> Société par Actions Simplifiée (SAS)</p>
              <p><span className="font-semibold text-white">Siège social :</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET :</span> À compléter</p>
              <p><span className="font-semibold text-white">SIREN :</span> À compléter</p>
              <p><span className="font-semibold text-white">Code NAF/APE :</span> 6201Z — Programmation informatique</p>
              <p><span className="font-semibold text-white">Numéro de TVA intracommunautaire :</span> À compléter</p>
              <p><span className="font-semibold text-white">Capital social :</span> À compléter</p>
              <p><span className="font-semibold text-white">Directeur de la publication :</span> À compléter</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Hébergeur</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Nom :</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><span className="font-semibold text-white">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                Le site est hébergé sur l&apos;infrastructure cloud de Vercel, conformément aux normes de sécurité et de disponibilité du RGPD.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Email :</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Téléphone :</span> À compléter</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Adresse :</span> 12 Rue de la Paix, 75002 Paris, France</p>
              </div>
            </div>
          </section>

          {/* Assurances */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Assurances professionnelles</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Assureur :</span> AXA France</p>
              <p><span className="font-semibold text-white">Police n° :</span> À compléter</p>
              <p><span className="font-semibold text-white">Couverture :</span> Responsabilité civile professionnelle et cyber-risques</p>
              <p className="text-sm text-indigo-300 mt-4">
                Conformément aux dispositions légales, NeuraAPI SAS dispose d&apos;une assurance responsabilité civile professionnelle couvrant les dommages causés aux tiers dans le cadre de son activité.
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Propriété intellectuelle</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive de NeuraAPI SAS ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, transmission ou dénaturation du site ou de son contenu, par quelque procédé que ce soit, est interdite sans autorisation préalable écrite de NeuraAPI SAS.
              </p>
              <p>
                Les marques et logos figurant sur ce site sont des marques déposées par NeuraAPI SAS ou ses partenaires. Toute reproduction ou représentation, totale ou partielle, de ces marques ou logos est interdite sans autorisation préalable.
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Données personnelles</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Le traitement des données à caractère personnel est régi par la loi n°78-17 du 6 janvier 1978 relative à l&apos;Informatique, aux Fichiers et aux Libertés (loi Informatique et Libertés) et par le Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
              </p>
              <p>
                Pour plus d&apos;informations, veuillez consulter notre <a href="/politique-confidentialite" className="text-indigo-400 hover:text-white transition-colors underline">Politique de Confidentialité</a>.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Conformément à la loi Informatique et Libertés et au RGPD, des cookies peuvent être déposés sur votre équipement lors de votre navigation sur notre site.
              </p>
              <p>
                Pour plus d&apos;informations sur les cookies que nous utilisons et comment les gérer, veuillez consulter notre <a href="/politique-cookies" className="text-indigo-400 hover:text-white transition-colors underline">Politique de Cookies</a>.
              </p>
            </div>
          </section>

          {/* Médiation */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Médiation des litiges</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, nous proposons à nos clients non professionnels un dispositif de médiation des litiges gratuit.
              </p>
              <p>
                En cas de litige, vous pouvez saisir le Médiateur de la consommation :
              </p>
              <div className="ml-4 space-y-2">
                <p>• Site : <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• Adresse : BP 84229, 69342 Lyon Cedex 07</p>
                <p>• Email : <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                Vous pouvez également utiliser la plateforme européenne de règlement des litiges en ligne accessible à l&apos;adresse : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          {/* Applicable law */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Droit applicable</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux judiciaires de Paris seront seuls compétents, sauf disposition impérative contraire.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
