'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="pt-28 pb-16 bg-cream-dark border-b border-bark/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {subtitle && (
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-red mb-3 block">{subtitle}</span>
          )}
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark tracking-tight">
            {title}
          </h1>
          <div className="w-12 h-px bg-red mx-auto mt-5" />
        </motion.div>
      </div>
    </section>
  )
}
