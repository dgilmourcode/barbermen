'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre" className="py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark leading-tight tracking-tight mb-6">
              Mais que uma barbearia,
              <br />
              um espaço de estilo
            </h2>
            <div className="space-y-4 text-bark-muted leading-relaxed">
              <p>
                Na Barberman, acreditamos que cada homem merece uma experiência
                única de cuidado pessoal. Nossos barbeiros são mestres no
                ofício, combinando técnicas tradicionais com tendências modernas.
              </p>
              <p>
                Do corte clássico ao degradê mais atual, cada detalhe é
                pensado para que você saia se sentindo melhor do que entrou.
                Ambiente sofisticado, atendimento personalizado.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: '10+', label: 'Anos de experiência' },
              { number: '5K+', label: 'Clientes fiéis' },
              { number: '3', label: 'Profissionais' },
              { number: '15K+', label: 'Cortes realizados' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-cream-dark border border-bark/5"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-brass block mb-1">
                  {stat.number}
                </span>
                <span className="text-xs text-bark-muted tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
