export default function Loading() {
  return (
    <div className="bg-[#0f0a2e] min-h-screen" role="status" aria-live="polite">
      <div className="max-w-5xl mx-auto pt-32 px-4 text-center">
        <div className="skeleton mx-auto mb-6 h-6 w-48 rounded-full" />
        <div className="skeleton mx-auto mb-4 h-16 w-3/4 rounded-xl" />
        <div className="skeleton mx-auto mb-8 h-16 w-2/3 rounded-xl" />
        <div className="skeleton mx-auto mb-10 h-6 w-2/3 rounded-lg" />
        <div className="flex justify-center gap-4">
          <div className="skeleton h-12 w-48 rounded-xl" />
          <div className="skeleton h-12 w-48 rounded-xl" />
          <div className="skeleton h-12 w-40 rounded-xl" />
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <div className="skeleton h-5 w-40 rounded" />
          <div className="skeleton h-5 w-32 rounded" />
          <div className="skeleton h-5 w-36 rounded" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 space-y-4">
              <div className="skeleton h-12 w-12 rounded-xl" />
              <div className="skeleton h-5 w-24 rounded" />
              <div className="skeleton h-4 w-full rounded" />
              <div className="skeleton h-4 w-3/4 rounded" />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/5">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress-indeterminate rounded-full" />
      </div>
    </div>
  )
}
