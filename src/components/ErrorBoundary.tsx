'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'

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
          <div className="text-center max-w-md">
            <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Une erreur est survenue</h1>
            <p className="text-indigo-300 mb-6">
              {this.state.error?.message || 'Erreur inconnue'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              aria-label="Réessayer"
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
