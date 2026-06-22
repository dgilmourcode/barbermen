'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
  { label: 'Corte Degradê', category: 'Cabelo', img: '/images/gallery-1.jpg' },
  { label: 'Barba Navalha', category: 'Barba', img: '/images/gallery-2.jpg' },
  { label: 'Combo Completo', category: 'Combo', img: '/images/gallery-3.jpg' },
  { label: 'Acabamento', category: 'Detalhe', img: '/images/gallery-4.jpg' },
  { label: 'Hidratação', category: 'Tratamento', img: '/images/gallery-5.jpg' },
  { label: 'Corte Infantil', category: 'Cabelo', img: '/images/gallery-6.jpg' },
]

const items2 = [
  { label: 'Visual Completo', category: 'Combo', img: '/images/gallery-7.jpg' },
  { label: 'Navalha Clássica', category: 'Barba', img: '/images/gallery-8.jpg' },
  { label: 'Sobrancelha', category: 'Detalhe', img: '/images/gallery-1.jpg' },
  { label: 'Lavagem Premium', category: 'Tratamento', img: '/images/gallery-2.jpg' },
  { label: 'Corte Social', category: 'Cabelo', img: '/images/gallery-3.jpg' },
  { label: 'Barba/modelagem', category: 'Barba', img: '/images/gallery-4.jpg' },
]

export default function InfiniteCarousel() {
  const doubled1 = [...items, ...items]
  const doubled2 = [...items2, ...items2]

  return (
    <section className="py-20 bg-cream-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-red mb-3 block">Galeria</span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-bark tracking-tight">
            Nosso Trabalho
          </h2>
          <div className="w-12 h-px bg-red mx-auto mt-5" />
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          className="flex gap-4 w-max"
        >
          {doubled1.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex-shrink-0 w-72 h-48 bg-bark/5 border border-bark/8 group hover:border-red/30 transition-all duration-300 relative overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="288px"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] text-red-light tracking-wider uppercase">{item.category}</span>
                <span className="text-sm font-medium text-cream block">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-4 w-max"
        >
          {doubled2.map((item, i) => (
            <div
              key={`rev-${item.label}-${i}`}
              className="flex-shrink-0 w-56 h-40 bg-bark/5 border border-bark/8 group hover:border-red/30 transition-all duration-300 relative overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="224px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-bark/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] text-red-light tracking-wider uppercase">{item.category}</span>
                <span className="text-xs font-medium text-cream block">{item.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
