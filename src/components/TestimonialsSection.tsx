import { Star, Quote } from 'lucide-react'

// 100% éthique : aucun faux témoignage. Tant qu'aucun client réel n'a laissé
// d'avis, on affiche une invitation honnête au lieu de citations inventées.
// À brancher sur une source réelle (table Testimonial vérifiée) dès les 1ers retours.

const HAS_REAL_TESTIMONIALS = false

const REAL_TESTIMONIALS: { name: string; role: string; quote: string }[] = []

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} sur 5 étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-white/10'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  if (!HAS_REAL_TESTIMONIALS) {
    return (
      <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            <Quote className="w-4 h-4" aria-hidden="true" />
            Témoignages
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Rejoignez les premiers développeurs
          </h2>
          <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
            Nous publions uniquement des avis vérifiés de vrais utilisateurs.
            Soyez le premier à partager votre expérience avec NeuraAPI.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 px-8 py-4">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
            <span className="text-lg font-semibold text-indigo-300">
              Vos retours réels arrivent ici
            </span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            <Quote className="w-4 h-4" aria-hidden="true" />
            Témoignages vérifiés
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ce que disent nos développeurs
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REAL_TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="glass-card rounded-2xl p-6">
              <StarRating rating={5} />
              <blockquote className="mt-4 text-sm text-indigo-200/80 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
                  {testimonial.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-indigo-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
