'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="bg-[#0f0a2e] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-red-400">!</p>
        <h2 className="mt-6 text-2xl font-bold text-white">Erreur d&apos;inscription</h2>
        <p className="mt-3 text-indigo-300">
          Impossible de charger la page d&apos;inscription. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
