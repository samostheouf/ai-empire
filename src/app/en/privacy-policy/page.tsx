import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy (GDPR) — NeuraAPI',
  description: 'Privacy policy of NeuraAPI, compliant with the General Data Protection Regulation (GDPR — EU 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/en/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-2 text-indigo-300">Compliant with the General Data Protection Regulation (GDPR — EU 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="space-y-12">
          {/* Data Controller */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Data Controller</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Controller:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Registered office:</span> 12 Rue de la Paix, 75002 Paris, France</p>
              <p><span className="font-semibold text-white">SIRET:</span> To be completed</p>
              <p><span className="font-semibold text-white">Data Protection Officer (DPO):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Paris, France</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Collected */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Data Collected</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>In the course of our services, we collect the following categories of data:</p>

              <h3 className="font-semibold text-white">Identification Data</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>First and last name</li>
                <li>Email address</li>
                <li>Password (encrypted)</li>
                <li>Username</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Billing Data</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Billing address</li>
                <li>Payment information (processed by Stripe, we do not have access to card numbers)</li>
                <li>Transaction history</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Usage Data</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>API keys (encrypted)</li>
                <li>API call history (prompts, responses, timestamps)</li>
                <li>Usage statistics (number of calls, credits consumed)</li>
                <li>Performance and diagnostic data</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Connection Data</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>IP address</li>
                <li>Browser type and operating system</li>
                <li>Login date and time</li>
                <li>Pages visited and actions performed</li>
              </ul>
            </div>
          </section>

          {/* Purpose of Processing */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Purpose of Processing</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Your data is processed for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Account management:</span> Creation, management and authentication of user accounts</li>
                <li><span className="font-semibold text-white">Service provision:</span> API access, template delivery, credit management</li>
                <li><span className="font-semibold text-white">Invoicing:</span> Invoice issuance, payment tracking, reminders</li>
                <li><span className="font-semibold text-white">Customer support:</span> Response to requests and problem resolution</li>
                <li><span className="font-semibold text-white">Service improvement:</span> Usage statistics, performance optimization</li>
                <li><span className="font-semibold text-white">Security:</span> Fraud prevention, abuse detection, attack protection</li>
                <li><span className="font-semibold text-white">Communication:</span> Sending important service-related notifications</li>
                <li><span className="font-semibold text-white">Legal obligations:</span> Retention of accounting and tax data</li>
              </ul>
            </div>
          </section>

          {/* Legal Basis */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Legal Basis for Processing</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Each data processing operation is based on a legal basis:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Contract performance (Art. 6.1.b GDPR):</span> Service provision, account management, invoicing</li>
                <li><span className="font-semibold text-white">Legitimate interest (Art. 6.1.f GDPR):</span> Service security, improvement, fraud prevention</li>
                <li><span className="font-semibold text-white">Legal obligation (Art. 6.1.c GDPR):</span> Retention of accounting and tax data</li>
                <li><span className="font-semibold text-white">Consent (Art. 6.1.a GDPR):</span> Non-essential cookies, marketing communications</li>
              </ul>
            </div>
          </section>

          {/* Retention Period */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Data Retention Period</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Your data is retained for the following periods:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Account data:</span> For the duration of the contractual relationship, then 3 years after the last login</li>
                <li><span className="font-semibold text-white">Billing data:</span> 10 years (legal accounting obligation)</li>
                <li><span className="font-semibold text-white">API call history:</span> 12 months after the last call</li>
                <li><span className="font-semibold text-white">Connection data:</span> 12 months</li>
                <li><span className="font-semibold text-white">Cookies:</span> Maximum 13 months</li>
                <li><span className="font-semibold text-white">Prospecting data:</span> 3 years after the last contact</li>
              </ul>
              <p className="mt-4">
                Upon expiry of these periods, data is deleted or irreversibly anonymized.
              </p>
            </div>
          </section>

          {/* Data Recipients */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Data Recipients</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Your data may be shared with the following categories of recipients:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Technical providers:</span> Vercel (hosting), Stripe (payments), Vercel Analytics (statistics)</li>
                <li><span className="font-semibold text-white">Payment providers:</span> Stripe Inc. — secure payment processing</li>
                <li><span className="font-semibold text-white">Competent authorities:</span> In the event of a legal obligation or judicial request</li>
              </ul>
              <p className="mt-4">
                These providers are subject to contractual obligations guaranteeing the protection of your data in accordance with the GDPR. We never sell your data to third parties.
              </p>
            </div>
          </section>

          {/* Transfers Outside the EU */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Transfers Outside the European Union</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Some of our providers are located outside the European Union (notably in the United States). These transfers are governed by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard contractual clauses (SCCs) compliant with the European Commission&apos;s implementing decision</li>
                <li>The Privacy Shield (for certified providers)</li>
                <li>Additional appropriate safeguards in accordance with Articles 46 and following of the GDPR</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Your Rights</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                In accordance with the GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Right of access (Art. 15):</span> Obtain a copy of your data</li>
                <li><span className="font-semibold text-white">Right of rectification (Art. 16):</span> Correct inaccurate data</li>
                <li><span className="font-semibold text-white">Right to erasure (Art. 17):</span> Request the deletion of your data</li>
                <li><span className="font-semibold text-white">Right to restriction of processing (Art. 18):</span> Restrict the processing of your data</li>
                <li><span className="font-semibold text-white">Right to data portability (Art. 20):</span> Receive your data in a structured format</li>
                <li><span className="font-semibold text-white">Right to object (Art. 21):</span> Object to the processing of your data</li>
                <li><span className="font-semibold text-white">Right to withdraw consent:</span> At any time, without affecting the lawfulness of prior processing</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact us at: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                You also have the right to lodge a complaint with the CNIL: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Our website uses cookies in accordance with current regulations. For more information, please consult our <a href="/en/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Cookie Policy</a>.
              </p>
              <p>
                You can manage your cookie preferences via the consent banner displayed during your first visit.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Data Security</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                We implement the following technical and organizational measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>TLS/SSL encryption for all communications</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Multi-factor authentication (MFA) available</li>
                <li>Encrypted and securely managed API keys</li>
                <li>Restricted data access (principle of least privilege)</li>
                <li>Access logging and monitoring</li>
                <li>Regular security audits</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>For any questions relating to the protection of your personal data:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Email: </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Address: NeuraAPI SAS — DPO, 12 Rue de la Paix, 75002 Paris, France</span>
                </div>
              </div>
              <p className="mt-4">
                We commit to responding to your request within one month.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
