'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="bg-indigo-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-red-500">500</p>
        <h1 className="mt-6 text-3xl font-bold text-white">Erreur serveur</h1>
        <p className="mt-4 text-indigo-300">
          Une erreur est survenue lors du chargement du blog.
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
