'use client'

import { useEffect } from 'react'

export default function SkipLinks() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Aller au contenu principal
      </a>
      <a
        href="#footer"
        className="sr-only focus:not-sr-only focus:fixed focus:bottom-2 focus:left-2 focus:z-[9999] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
      >
        Aller au pied de page
      </a>
    </>
  )
}
