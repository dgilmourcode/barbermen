'use client'

import { motion } from 'framer-motion'

const images = [
  { id: 1, label: 'Degradê', span: 'md:col-span-2 md:row-span-2', bg: 'from-brass/20 to-cream-dark' },
  { id: 2, label: 'Barba', span: '', bg: 'from-bark-muted/10 to-cream-dark' },
  { id: 3, label: 'Corte Clássico', span: 'md:row-span-2', bg: 'from-brass/15 to-cream-dark' },
  { id: 4, label: 'Hidratação', span: '', bg: 'from-bark-muted/8 to-cream-dark' },
  { id: 5, label: 'Navalha', span: '', bg: 'from-brass/10 to-cream-dark' },
  { id: 6, label: 'Finalização', span: 'md:col-span-2', bg: 'from-brass/12 to-cream-dark' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-4 block">
            Galeria
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark tracking-tight">
            Nosso Trabalho
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative aspect-square overflow-hidden group cursor-pointer bg-gradient-to-br ${image.bg} ${image.span}`}
            >
              <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="text-cream text-sm font-medium">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
