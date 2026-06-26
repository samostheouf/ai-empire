'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error) {
    console.error('ErrorBoundary caught:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-indigo-950 flex items-center justify-center px-4">
          <div className="text-center max-w-md animate-fade-in-up">
            <div className="relative mx-auto w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />
              <div className="relative w-20 h-20 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-red-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Une erreur est survenue</h1>
            <p className="text-indigo-300/80 mb-2 text-sm">
              {this.state.error?.message || 'Erreur inconnue'}
            </p>
            <p className="text-indigo-400/60 mb-8 text-xs">
              Si le problème persiste, contactez le support.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                aria-label="Réessayer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <RefreshCw className="h-4 w-4" />
                Réessayer
              </button>
              <Link
                href="/"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-indigo-200 hover:bg-white/10 transition-all"
              >
                <Home className="h-4 w-4" />
                Accueil
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
