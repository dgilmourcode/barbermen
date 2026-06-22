'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  { src: '/images/gallery-1.jpg', title: 'Corte Degradê', category: 'Cabelo' },
  { src: '/images/gallery-2.jpg', title: 'Barba Navalha', category: 'Barba' },
  { src: '/images/gallery-3.jpg', title: 'Visual Completo', category: 'Combo' },
  { src: '/images/gallery-4.jpg', title: 'Acabamento Perfeito', category: 'Detalhe' },
  { src: '/images/gallery-5.jpg', title: 'Hidratação Capilar', category: 'Tratamento' },
  { src: '/images/gallery-6.jpg', title: 'Corte Social', category: 'Cabelo' },
  { src: '/images/gallery-7.jpg', title: 'Navalha Clássica', category: 'Barba' },
  { src: '/images/gallery-8.jpg', title: 'Sobrancelha', category: 'Detalhe' },
]

export default function ProfessionalGallery() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const total = galleryImages.length

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir)
    setCurrent(idx)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % total, 1)
  }, [current, total, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, -1)
  }, [current, total, goTo])

  // Auto-play
  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox !== null) {
        if (e.key === 'Escape') setLightbox(null)
        if (e.key === 'ArrowLeft') setLightbox((lightbox - 1 + total) % total)
        if (e.key === 'ArrowRight') setLightbox((lightbox + 1) % total)
      } else {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, total, next, prev])

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <>
      <section className="py-20 bg-cream overflow-hidden">
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

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto px-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden aspect-[16/9] bg-bark/5 border border-bark/8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setLightbox(current)}
              >
                <Image
                  src={galleryImages[current].src}
                  alt={galleryImages[current].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-red-light font-semibold">
                    {galleryImages[current].category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-cream mt-1">
                    {galleryImages[current].title}
                  </h3>
                  <p className="text-cream/40 text-xs mt-2">
                    {current + 1} / {total}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={() => { prev(); setPaused(false) }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-bark/70 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-red hover:border-red/30 transition-all backdrop-blur-sm z-10"
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => { next(); setPaused(false) }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-bark/70 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-red hover:border-red/30 transition-all backdrop-blur-sm z-10"
            aria-label="Próximo"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i, i > current ? 1 : -1); setPaused(false) }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-red' : 'w-1.5 bg-red/20 hover:bg-red/40'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-bark/80 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-red hover:border-red/30 transition-all"
              aria-label="Fechar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + total) % total) }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-bark/80 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-red hover:border-red/30 transition-all"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % total) }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-bark/80 border border-cream/10 flex items-center justify-center text-cream/60 hover:text-red hover:border-red/30 transition-all"
              aria-label="Próximo"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative max-w-5xl w-full max-h-[75vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/10] bg-bark/50 border border-cream/5 overflow-hidden">
                <Image
                  src={galleryImages[lightbox].src}
                  alt={galleryImages[lightbox].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="text-center mt-4 md:mt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-light font-semibold">
                  {galleryImages[lightbox].category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-cream mt-1">
                  {galleryImages[lightbox].title}
                </h3>
                <p className="text-cream/30 text-[10px] uppercase tracking-[0.2em] mt-3">
                  {lightbox + 1} / {total}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
