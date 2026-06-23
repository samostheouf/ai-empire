'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-red-500">500</p>
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Erreur</h1>
        <p className="mt-4 text-gray-600">
          Une erreur est survenue. Veuillez réessayer.
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
