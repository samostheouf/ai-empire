import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Thomas Lefèvre',
    role: 'CTO, DataFlow',
    company: 'DataFlow',
    avatar: 'TL',
    rating: 5,
    quote: 'NeuraAPI a transformé notre workflow. On a intégré l\'IA dans notre SaaS en une journée au lieu de 3 semaines. Le SDK TypeScript est incroyablement bien conçu.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Sarah Martin',
    role: 'Fondatrice, ContentAI',
    company: 'ContentAI',
    avatar: 'SM',
    rating: 5,
    quote: 'Les templates Next.js sont d\'une qualité exceptionnelle. Stripe intégré, auth, dashboard — tout fonctionne du premier coup. Un gain de temps énorme.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Alex Dubois',
    role: 'Lead Dev, ScaleUp',
    company: 'ScaleUp',
    avatar: 'AD',
    rating: 5,
    quote: 'Le meilleur rapport qualité-prix pour intégrer l\'IA. Les endpoints sont rapides, la doc est claire, et le support est réactif. Je recommande à 100%.',
    color: 'from-emerald-500 to-teal-500',
  },
]

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
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            <Quote className="w-4 h-4" aria-hidden="true" />
            Témoignages
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ce que disent nos développeurs
          </h2>
          <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
            Des développeurs qui livrent plus vite grâce à NeuraAPI
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="relative">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-sm text-indigo-200/80 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-sm font-bold text-white`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-indigo-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
