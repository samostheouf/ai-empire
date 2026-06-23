'use client'

import { useState, memo } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

function FAQAccordionItem({ item, id }: { item: FAQItem; id: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${id}`

  return (
    <div className={`rounded-xl border transition-all duration-300 ${
      open
        ? 'border-indigo-500/30 bg-indigo-900/30 shadow-lg shadow-indigo-500/5'
        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8'
    }`}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between p-5 text-left transition-colors"
      >
        <span className="font-medium text-white pr-4">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 text-indigo-400 flex-shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-indigo-300 text-sm leading-relaxed border-t border-white/5 pt-4">
          {item.a}
        </div>
      </div>
    </div>
  )
}

const FAQ = memo(function FAQ({ items, title, subtitle }: FAQProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="text-indigo-300/80 mt-3">{subtitle}</p>
          )}
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <FAQAccordionItem key={i} item={item} id={i} />
          ))}
        </div>
      </div>
    </section>
  )
});

export default FAQ;
