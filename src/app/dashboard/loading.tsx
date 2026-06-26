export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50" role="status" aria-live="polite">
      <div className="max-w-7xl mx-auto pt-8 pb-24 px-4">
        <div className="skeleton-heading w-48 mb-8" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 space-y-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="skeleton-avatar w-10 h-10" />
                <div className="flex-1 space-y-2">
                  <div className="skeleton-text w-32" />
                  <div className="skeleton-text w-20 h-3" />
                </div>
              </div>
              <div className="skeleton-text w-full" />
              <div className="skeleton-text w-3/4" />
              <div className="flex gap-2 pt-2">
                <div className="skeleton h-8 w-20 rounded-lg" />
                <div className="skeleton h-8 w-20 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-100">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-progress-indeterminate rounded-full" />
      </div>
    </div>
  )
}
