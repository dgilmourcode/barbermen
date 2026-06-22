'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cream-dark" />

      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-brass/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_rgba(139,105,20,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.25em] uppercase text-brass mb-6">
              Barbearia Premium · Desde 2018
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,6vw,5rem)] font-semibold text-bark leading-[1.05] tracking-tight mb-6"
          >
            Onde o corte
            <br />
            vira experiência
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-bark-muted text-lg leading-relaxed max-w-md mb-10"
          >
            Os melhores barbeiros da cidade em um ambiente feito para você.
            Tradição, estilo e cuidado em cada detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#agendar"
              className="px-8 py-4 bg-bark text-cream text-sm font-medium tracking-wide hover:bg-bark-light transition-colors duration-200 text-center"
            >
              Agende Seu Horário
            </a>
            <a
              href="#servicos"
              className="px-8 py-4 border border-bark/15 text-bark text-sm font-medium tracking-wide hover:border-bark/30 transition-colors duration-200 text-center"
            >
              Ver Serviços
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-6 hidden lg:flex items-center gap-8"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-brass font-[family-name:var(--font-display)]">10+</span>
            <span className="text-xs text-bark-muted tracking-wide">Anos de experiência</span>
          </div>
          <div className="w-px h-10 bg-bark/10" />
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-brass font-[family-name:var(--font-display)]">5.000+</span>
            <span className="text-xs text-bark-muted tracking-wide">Clientes atendidos</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
