export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0a2e]" role="status" aria-live="polite">
      <div className="animate-pulse">
        <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto text-center">
          <div className="h-10 w-64 bg-white/10 rounded-xl mx-auto mb-4" />
          <div className="h-6 w-96 bg-white/10 rounded-lg mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6 text-center space-y-3">
                <div className="h-12 w-12 bg-white/10 rounded-xl mx-auto" />
                <div className="h-8 w-20 bg-white/10 rounded mx-auto" />
                <div className="h-4 w-32 bg-white/10 rounded mx-auto" />
              </div>
            ))}
          </div>
          <div className="flex gap-4 mb-8">
            <div className="h-12 flex-1 bg-white/5 rounded-xl" />
            <div className="h-12 w-48 bg-white/5 rounded-xl" />
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="break-inside-avoid bg-white/5 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-5 w-3/4 bg-white/10 rounded" />
                  <div className="h-4 w-full bg-white/10 rounded" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-white/10 rounded-full" />
                    <div className="h-5 w-20 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-10 w-full bg-white/10 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
