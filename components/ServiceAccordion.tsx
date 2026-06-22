'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ServiceItem = {
  name: string
  description: string
  time: string
  price: string
}

export default function ServiceAccordion({
  category,
  icon,
  services,
}: {
  category: string
  icon: React.ReactNode
  services: ServiceItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border border-bark/8 bg-cream">
      <div className="p-6 flex items-center gap-4 border-b border-bark/5">
        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-cream-dark text-brass">
          {icon}
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark">
          {category}
        </h3>
      </div>

      <div>
        {services.map((service, i) => (
          <div key={service.name} className="border-b border-bark/5 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cream-dark/50 transition-colors duration-150"
            >
              <span className="text-sm font-medium text-bark pr-4">{service.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-brass font-semibold whitespace-nowrap">{service.price}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                  className="w-5 h-5 flex items-center justify-center text-bark-muted"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm text-bark-muted leading-relaxed">
                    <p className="mb-3">{service.description}</p>
                    <div className="flex items-center gap-4 text-xs text-bark-muted/70">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {service.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        {service.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
