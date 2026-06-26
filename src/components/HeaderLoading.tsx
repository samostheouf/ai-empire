export default function HeaderLoading() {
  return (
    <div className="sticky top-0 z-50 w-full h-16 bg-indigo-950/80 backdrop-blur-md border-b border-indigo-900/20">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <div className="skeleton h-8 w-8 rounded-lg" />
          <div className="skeleton h-5 w-24 rounded" />
        </div>
        <div className="hidden md:flex items-center gap-2">
          <div className="skeleton h-8 w-16 rounded-lg" />
          <div className="skeleton h-8 w-16 rounded-lg" />
          <div className="skeleton h-8 w-16 rounded-lg" />
          <div className="skeleton h-8 w-16 rounded-lg" />
          <div className="skeleton h-8 w-24 rounded-lg ml-2" />
        </div>
        <div className="md:hidden">
          <div className="skeleton h-8 w-8 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
