'use client'

import { Star } from 'lucide-react'

export default function ProductHuntBadge() {
  return (
    <a
      href="https://www.producthunt.com/posts/neuraapi"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-3 hover:bg-orange-500/20 transition-all group"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500 text-white font-bold text-lg">
        P
      </div>
      <div>
        <p className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
          Product Hunt
        </p>
        <div className="flex items-center gap-1">
          <span className="text-xs text-indigo-300">As featured on</span>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
          ))}
        </div>
      </div>
    </a>
  )
}
