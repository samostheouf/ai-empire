export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0a2e]" role="status" aria-live="polite">
      <div className="pt-24 pb-16 px-4 max-w-4xl mx-auto text-center">
        <div className="skeleton mx-auto mb-6 h-6 w-48 rounded-full" />
        <div className="skeleton mx-auto mb-6 h-12 w-2/3 rounded-xl" />
        <div className="skeleton mx-auto mb-8 h-6 w-3/4 rounded-lg" />
        <div className="flex justify-center gap-4">
          <div className="skeleton h-5 w-28 rounded" />
          <div className="skeleton h-5 w-32 rounded" />
          <div className="skeleton h-5 w-24 rounded" />
        </div>
      </div>
      <div className="px-4 pb-8 max-w-4xl mx-auto">
        <div className="skeleton-card aspect-video" />
      </div>
      <div className="px-4 py-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 space-y-4">
          <div className="skeleton mx-auto h-16 w-16 rounded-2xl" />
          <div className="skeleton mx-auto h-6 w-48 rounded" />
          <div className="skeleton mx-auto h-4 w-64 rounded" />
          <div className="space-y-3 pt-4">
            <div className="skeleton h-12 w-full rounded-xl" />
            <div className="skeleton h-12 w-full rounded-xl" />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/5">
        <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress-indeterminate rounded-full" />
      </div>
    </div>
  )
}
