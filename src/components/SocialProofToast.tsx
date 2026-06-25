'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, ExternalLink } from 'lucide-react'

const PROOF_NAMES = [
  { name: 'Thomas', city: 'Paris', action: "s'est inscrit sur NeuraAPI" },
  { name: 'Marie', city: 'Lyon', action: 'a généré du code avec l\'API IA' },
  { name: 'Lucas', city: 'Marseille', action: 'a téléchargé un template SaaS' },
  { name: 'Sarah', city: 'Bruxelles', action: 'a activé son plan Pro' },
  { name: 'Yuki', city: 'Tokyo', action: 'a généré du contenu SEO' },
  { name: 'Chen', city: 'Shanghai', action: 'a utilisé le chatbot IA' },
  { name: 'Ahmed', city: 'Casablanca', action: 'a créé un compte Starter' },
  { name: 'Pedro', city: 'São Paulo', action: 'a intégré l\'API dans son app' },
]

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(PROOF_NAMES[0])

  useEffect(() => {
    const show = () => {
      setCurrent(PROOF_NAMES[Math.floor(Math.random() * PROOF_NAMES.length)])
      setVisible(true)
      setTimeout(() => setVisible(false), 5000)
    }

    const firstTimer = setTimeout(show, 15000)
    const interval = setInterval(show, 45000)
    return () => { clearTimeout(firstTimer); clearInterval(interval) }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-24 left-4 z-40 max-w-xs animate-slide-in">
      <div className="rounded-xl border border-indigo-800/50 bg-indigo-950/95 backdrop-blur-md p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
          <div>
            <p className="text-sm text-white font-medium">
              {current.name} de {current.city}
            </p>
            <p className="text-xs text-indigo-300">{current.action}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
