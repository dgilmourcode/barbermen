'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Corte Clássico',
    description: 'Tesoura e máquina com acabamento preciso.',
    price: 'R$ 65',
    duration: '45 min',
  },
  {
    title: 'Degradê',
    description: 'Fade perfeito com transição suave.',
    price: 'R$ 75',
    duration: '50 min',
    highlight: true,
  },
  {
    title: 'Barba Navalha',
    description: 'Aparação com navalha, toalha quente e pós-barba.',
    price: 'R$ 55',
    duration: '40 min',
  },
  {
    title: 'Corte + Barba',
    description: 'Combo completo com corte e barba navalha.',
    price: 'R$ 110',
    duration: '75 min',
    highlight: true,
  },
  {
    title: 'Hidratação',
    description: 'Tratamento capilar com produtos premium.',
    price: 'R$ 45',
    duration: '30 min',
  },
  {
    title: 'Combo Completo',
    description: 'Corte + barba + hidratação + shampoo.',
    price: 'R$ 140',
    duration: '90 min',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-4 block">
            Serviços
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark tracking-tight">
            Nossos Serviços
          </h2>
          <p className="text-bark-muted max-w-md mx-auto mt-4 leading-relaxed">
            Cada serviço é pensado para oferecer a melhor experiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group p-7 border transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${
                service.highlight
                  ? 'bg-bark text-cream border-bark'
                  : 'bg-cream border-bark/8 hover:border-bark/15'
              }`}
            >
              <h3
                className={`font-[family-name:var(--font-display)] text-lg font-semibold mb-2 ${
                  service.highlight ? 'text-cream' : 'text-bark'
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.highlight ? 'text-cream/70' : 'text-bark-muted'
                }`}
              >
                {service.description}
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <span
                    className={`text-xl font-semibold ${
                      service.highlight ? 'text-gold-light' : 'text-brass'
                    }`}
                  >
                    {service.price}
                  </span>
                  <span
                    className={`text-xs block mt-0.5 ${
                      service.highlight ? 'text-cream/50' : 'text-bark-muted'
                    }`}
                  >
                    {service.duration}
                  </span>
                </div>
                <a
                  href="#agendar"
                  className={`text-xs tracking-wide font-medium transition-colors duration-200 ${
                    service.highlight
                      ? 'text-cream/60 hover:text-cream'
                      : 'text-bark-muted hover:text-brass'
                  }`}
                >
                  Agendar →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
