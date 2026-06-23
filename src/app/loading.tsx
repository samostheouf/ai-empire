export default function Loading() {
  return (
    <div className="bg-[#0f0a2e] min-h-screen" role="status" aria-live="polite">
      <div className="animate-pulse">
        <div className="max-w-5xl mx-auto pt-32 px-4 text-center">
          <div className="h-6 w-48 bg-white/10 rounded-full mx-auto mb-8" />
          <div className="h-16 w-3/4 bg-white/10 rounded-xl mx-auto mb-4" />
          <div className="h-16 w-2/3 bg-white/10 rounded-xl mx-auto mb-8" />
          <div className="h-6 w-2/3 bg-white/10 rounded-lg mx-auto mb-10" />
          <div className="flex justify-center gap-4">
            <div className="h-12 w-48 bg-white/10 rounded-xl" />
            <div className="h-12 w-48 bg-white/10 rounded-xl" />
            <div className="h-12 w-40 bg-white/10 rounded-xl" />
          </div>
          <div className="mt-10 flex justify-center gap-6">
            <div className="h-5 w-40 bg-white/10 rounded" />
            <div className="h-5 w-32 bg-white/10 rounded" />
            <div className="h-5 w-36 bg-white/10 rounded" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 space-y-3">
                <div className="h-12 w-12 bg-white/10 rounded-xl" />
                <div className="h-5 w-24 bg-white/10 rounded" />
                <div className="h-4 w-full bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
