'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export default function SobrePage() {
  return (
    <>
      <PageHero title="Sobre Nós" subtitle="Nossa História" />

      {/* HISTÓRIA + FOTOS */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LADO ESQUERDO — Fotos + Cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Grid de fotos 2x2 com alturas diferentes */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="space-y-3">
                  <motion.div variants={fadeUp} className="overflow-hidden border border-bark/8 group">
                    <div className="relative h-64">
                      <Image src="/images/gallery-1.jpg" alt="Corte clássico" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="overflow-hidden border border-bark/8 group">
                    <div className="relative h-48">
                      <Image src="/images/gallery-2.jpg" alt="Barba navalha" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
                    </div>
                  </motion.div>
                </div>
                <div className="space-y-3 pt-8">
                  <motion.div variants={fadeUp} className="overflow-hidden border border-bark/8 group">
                    <div className="relative h-48">
                      <Image src="/images/gallery-3.jpg" alt="Ambiente" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeUp} className="overflow-hidden border border-bark/8 group">
                    <div className="relative h-64">
                      <Image src="/images/gallery-4.jpg" alt="Acabamento" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Cards Visão / Missão / Valores */}
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Visão', text: 'Ser referência em barbearia premium na região.' },
                  { title: 'Missão', text: 'Oferecer beleza e bem estar ao homem contemporâneo com excelência.' },
                  { title: 'Valores', text: 'Paixão pelo cliente. Qualidade. Inovação contínua.' },
                ].map((item) => (
                  <motion.div key={item.title} variants={fadeUp} className="p-5 bg-cream-dark border border-bark/5 hover:border-red/20 transition-colors duration-300">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-bark mb-1">{item.title}</h3>
                    <div className="w-6 h-px bg-red mb-2" />
                    <p className="text-xs text-bark-muted leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* LADO DIREITO — Texto */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:sticky lg:top-28"
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-red mb-3 block">Nossa História</span>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-bark leading-tight tracking-tight mb-5">
                Mais que uma barbearia,<br />um espaço de estilo
              </h2>
              <div className="w-10 h-px bg-red mb-6" />
              <div className="space-y-4 text-bark-muted leading-relaxed">
                <p>
                  A Barbermen nasceu da paixão por transformar o simples ato de cortar
                  cabelo em uma experiência memorável. Fundada em 2018, começamos como
                  uma pequena barbearia de bairro com um sonho grande.
                </p>
                <p>
                  Criar um espaço onde os homens pudessem se sentir bem acolhidos
                  e cuidados. Nossos barbeiros são selecionados não apenas pela técnica,
                  mas pela dedicação em entender o que cada cliente precisa.
                </p>
                <p>
                  Cada corte é uma conversa, cada detalhe importa. Ao longo dos anos,
                  construímos uma comunidade fiel de clientes que confiam no nosso trabalho.
                </p>
                <p>
                  Hoje, somos referência em barbearia premium na região, mantendo sempre
                  o toque pessoal e a qualidade que nos trouxe até aqui.
                </p>
              </div>
              <Link href="/agendar" className="btn-gradient inline-block px-6 py-3 text-cream text-sm font-medium tracking-wide active:scale-[0.96] transition-all duration-200 mt-8">
                Agendar Horário
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center mb-14"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark">
              Nossos <strong>Diferenciais</strong>
            </h2>
            <div className="w-10 h-px bg-red mx-auto mt-4" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            {[
              'Mais de 60 opções de serviços',
              'A experiência do cliente em primeiro lugar',
              'Serviços e produtos de qualidade',
              'Atendimento personalizado',
              'Ambiente descontraído e moderno',
              'Agendamento fácil e prático',
              'Profissionais certificados',
              'Produtos importados',
            ].map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 p-5 bg-cream border border-bark/5">
                <svg className="w-4 h-4 text-red mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-bark">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROFISSIONAIS */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-center mb-14"
          >
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark">Nossa Equipe</h2>
            <div className="w-10 h-px bg-red mx-auto mt-4" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { name: 'Carlos', role: 'Barbeiro Principal', exp: '12 anos de experiência', img: '/images/barber-1.jpg' },
              { name: 'Miguel', role: 'Especialista em Degrade', exp: '8 anos de experiência', img: '/images/barber-miguel.jpg' },
              { name: 'Rafael', role: 'Barba & Navalha', exp: '10 anos de experiência', img: '/images/barber-3.jpg' },
            ].map((person) => (
              <motion.div key={person.name} variants={fadeUp} className="text-center p-8 border border-bark/5 bg-cream-dark group hover:border-red/20 transition-all duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-bark/10 group-hover:border-red/30 mx-auto mb-4 transition-colors duration-300">
                  <Image src={person.img} alt={person.name} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark">{person.name}</h3>
                <p className="text-xs text-red mt-0.5 font-medium">{person.role}</p>
                <p className="text-xs text-bark-muted mt-2">{person.exp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-cream tracking-tight mb-4">
              Pronto para conhecer a Barbermen?
            </h2>
            <p className="text-cream/50 max-w-md mx-auto mb-8">
              Venha nos visitar ou agende seu horário pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agendar" className="btn-gradient px-8 py-4 text-cream text-sm font-medium tracking-wide active:scale-[0.96] transition-all duration-200">
                Agendar Horário
              </Link>
              <a href="https://wa.me/5586994936797" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-cream/15 text-cream text-sm font-medium tracking-wide hover:border-cream/30 active:scale-[0.96] transition-all duration-200">
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
