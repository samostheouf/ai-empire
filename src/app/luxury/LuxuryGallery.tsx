'use client'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

export type LuxuryImage = { url: string; alt: string; label: string; w: number; h: number }

export default function LuxuryGallery({ images }: { images: LuxuryImage[] }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const next = useCallback(() => setOpen((v) => v !== null ? (v + 1) % images.length : v), [images.length])
  const prev = useCallback(() => setOpen((v) => v !== null ? (v - 1 + images.length) % images.length : v), [images.length])

  useEffect(() => {
    if (open === null) return
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [open, close, next, prev])

  return (
    <>
      <div role="region" aria-label="Galerie photos HD 8 vues" className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            aria-label={`Ouvrir ${img.label} en grand — image ${i + 1} sur ${images.length}`}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
              <Image
                src={img.url}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(max-width:768px) 50vw, 25vw"
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" aria-hidden />
              <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-medium tracking-widest text-white">HD {String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="px-2.5 py-2 text-center">
              <p className="text-[11px] font-semibold tracking-widest text-zinc-300 uppercase">{img.label}</p>
              <p className="text-[10px] text-zinc-500 truncate">{img.alt.slice(0, 52)}</p>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox ${images[open].label}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Fermer la galerie"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <button onClick={(e)=>{e.stopPropagation();prev()}} aria-label="Image précédente" className="absolute left-2 md:left-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 hidden md:block">‹</button>
          <button onClick={(e)=>{e.stopPropagation();next()}} aria-label="Image suivante" className="absolute right-2 md:right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 hidden md:block">›</button>
          <div onClick={(e)=>e.stopPropagation()} className="relative max-h-[86vh] max-w-[92vw] w-full flex flex-col items-center">
            <div className="relative w-full max-w-[980px] aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden">
              <Image src={images[open].url} alt={images[open].alt} fill sizes="92vw" className="object-contain" priority />
            </div>
            <p className="mt-3 text-sm font-medium text-white">{String(open + 1).padStart(2,'0')} — {images[open].label}</p>
            <p className="max-w-[640px] text-center text-xs leading-relaxed text-zinc-300">{images[open].alt}</p>
            <div className="mt-3 flex gap-1.5" aria-hidden>
              {images.map((_,i)=>(<span key={i} className={`h-1.5 w-1.5 rounded-full ${i===open?'bg-white':'bg-white/30'}`} />))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
