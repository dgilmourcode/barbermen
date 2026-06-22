'use client'

import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="pt-28 pb-16 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-3 block"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-semibold text-bark tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-12 h-px bg-brass mx-auto mt-5 origin-center"
        />
      </div>
    </section>
  )
}
