export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center" role="status" aria-live="polite">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" aria-hidden="true" />
        <p className="mt-4 text-gray-500">Chargement du panel admin...</p>
      </div>
    </div>
  )
}
