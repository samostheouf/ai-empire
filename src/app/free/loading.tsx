export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0a2e]" role="status" aria-live="polite">
      <div className="animate-pulse">
        <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
          <div className="h-6 w-48 bg-white/10 rounded-full mx-auto mb-6" />
          <div className="h-12 w-2/3 bg-white/10 rounded-xl mx-auto mb-6" />
          <div className="h-6 w-3/4 bg-white/10 rounded-lg mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <div className="h-5 w-28 bg-white/10 rounded" />
            <div className="h-5 w-32 bg-white/10 rounded" />
            <div className="h-5 w-24 bg-white/10 rounded" />
          </div>
        </div>
        <div className="px-4 pb-8 max-w-4xl mx-auto">
          <div className="aspect-video bg-white/10 rounded-2xl" />
        </div>
        <div className="px-4 py-16 max-w-2xl mx-auto">
          <div className="bg-white/5 rounded-2xl p-8 space-y-4">
            <div className="h-16 w-16 bg-white/10 rounded-2xl mx-auto" />
            <div className="h-6 w-48 bg-white/10 rounded mx-auto" />
            <div className="h-4 w-64 bg-white/10 rounded mx-auto" />
            <div className="h-12 w-full bg-white/10 rounded-xl" />
            <div className="h-12 w-full bg-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
