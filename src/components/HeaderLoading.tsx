export default function HeaderLoading() {
  return (
    <div className="sticky top-0 z-50 w-full h-16 bg-indigo-950/80 backdrop-blur-md border-b border-indigo-900/20 animate-pulse">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="h-6 w-32 bg-indigo-800/50 rounded" />
        <div className="hidden md:flex items-center gap-6">
          <div className="h-4 w-16 bg-indigo-800/50 rounded" />
          <div className="h-4 w-16 bg-indigo-800/50 rounded" />
          <div className="h-4 w-16 bg-indigo-800/50 rounded" />
        </div>
      </div>
    </div>
  )
}
