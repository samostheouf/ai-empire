import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Legal Notice — NeuraAPI',
  description: 'Legal notice of the NeuraAPI website, in accordance with the Information Society Services Act.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/en/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Legal Notice</h1>
          <p className="mt-2 text-indigo-300">Legal information relating to the NeuraAPI website</p>
          <p className="mt-1 text-sm text-indigo-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="space-y-12">
          {/* Website Publisher */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Website Publisher</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Company name:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Legal form:</span> Simplified Joint-Stock Company (SAS)</p>
              <p><span className="font-semibold text-white">Registered office:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> To be completed</p>
              <p><span className="font-semibold text-white">SIREN:</span> To be completed</p>
              <p><span className="font-semibold text-white">NAF/APE Code:</span> 6201Z — Computer programming</p>
              <p><span className="font-semibold text-white">Intra-community VAT number:</span> To be completed</p>
              <p><span className="font-semibold text-white">Share capital:</span> To be completed</p>
              <p><span className="font-semibold text-white">Publication director:</span> To be completed</p>
            </div>
          </section>

          {/* Hosting Provider */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Hosting Provider</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Name:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Address:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, United States</p>
              <p><span className="font-semibold text-white">Website:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                The website is hosted on Vercel&apos;s cloud infrastructure, in compliance with GDPR security and availability standards.
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
                <p><span className="font-semibold text-white">Email:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Phone:</span> To be completed</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Address:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              </div>
            </div>
          </section>

          {/* Professional Insurance */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Professional Insurance</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Insurer:</span> AXA France</p>
              <p><span className="font-semibold text-white">Policy number:</span> To be completed</p>
              <p><span className="font-semibold text-white">Coverage:</span> Professional liability and cyber risks</p>
              <p className="text-sm text-indigo-300 mt-4">
                In accordance with legal provisions, NeuraAPI SAS holds professional liability insurance covering damage caused to third parties in the course of its business activities.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                All content on this website (texts, images, graphics, logos, icons, sounds, software) is the exclusive property of NeuraAPI SAS or its partners and is protected by French and international intellectual property laws.
              </p>
              <p>
                Any reproduction, representation, modification, publication, transmission or alteration of the website or its content, by any means whatsoever, is prohibited without prior written authorization from NeuraAPI SAS.
              </p>
              <p>
                The trademarks and logos appearing on this website are registered trademarks of NeuraAPI SAS or its partners. Any reproduction or representation, total or partial, of these trademarks or logos is prohibited without prior authorization.
              </p>
            </div>
          </section>

          {/* Personal Data */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Personal Data</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                The processing of personal data is governed by Law No. 78-17 of January 6, 1978 relating to Information Technology, Files and Liberties (Information Technology and Liberties Law) and the General Data Protection Regulation (GDPR — EU Regulation 2016/679).
              </p>
              <p>
                For more information, please consult our <a href="/en/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Privacy Policy</a>.
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
                In accordance with the Information Technology and Liberties Law and the GDPR, cookies may be placed on your device when you browse our website.
              </p>
              <p>
                For more information about the cookies we use and how to manage them, please consult our <a href="/en/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie Policy</a>.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Dispute Resolution</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                In accordance with Articles L.616-1 and R.616-1 of the Consumer Code, we offer our non-professional customers a free dispute resolution mechanism.
              </p>
              <p>
                In the event of a dispute, you may refer the matter to the Consumer Ombudsman:
              </p>
              <div className="ml-4 space-y-2">
                <p>• Website: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• Address: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• Email: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                You may also use the European online dispute resolution platform available at: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          {/* Applicable Law */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Applicable Law</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                These legal notices are governed by French law. In the event of a dispute, the courts of Paris shall have exclusive jurisdiction, unless otherwise required by applicable law.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
