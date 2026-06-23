export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50" role="status" aria-live="polite">
      <div className="animate-pulse">
        <div className="max-w-7xl mx-auto pt-8 pb-24 px-4">
          <div className="h-8 w-48 bg-gray-200 rounded mb-8" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 space-y-3 shadow-sm">
                <div className="h-5 w-32 bg-gray-200 rounded" />
                <div className="h-8 w-20 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-3/4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
