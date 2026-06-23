'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-red-500">500</p>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Erreur dashboard</h1>
        <p className="mt-4 text-gray-500">
          Une erreur est survenue lors du chargement de votre espace.
        </p>
        <button
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500 transition-colors"
          aria-label="Réessayer"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
