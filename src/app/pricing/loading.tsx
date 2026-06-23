export default function Loading() {
  return (
    <div className="bg-[#0f0a2e] min-h-screen" role="status" aria-live="polite">
      <div className="animate-pulse">
        <div className="max-w-7xl mx-auto pt-24 pb-24 px-4">
          <div className="text-center mb-16">
            <div className="h-10 w-64 bg-white/10 rounded-xl mx-auto mb-4" />
            <div className="h-6 w-96 bg-white/10 rounded-lg mx-auto" />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-8 space-y-4">
                <div className="h-6 w-32 bg-white/10 rounded" />
                <div className="h-10 w-24 bg-white/10 rounded" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 w-full bg-white/10 rounded" />
                  ))}
                </div>
                <div className="h-12 w-full bg-white/10 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
