'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from '@/components/Link';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative pt-16 min-h-[90vh] flex items-center bg-cream-dark overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-5 block"
            >
              Barbearia Premium · Desde 2018
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,6vw,4.8rem)] font-semibold text-bark leading-[1.05] tracking-tight mb-6"
            >
              Onde o corte<br />vira experiência
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-bark-muted text-lg leading-relaxed max-w-md mb-10"
            >
              Os melhores barbeiros da cidade em um ambiente feito para você.
              Tradição, estilo e cuidado em cada detalhe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/agendar" className="btn-gradient px-8 py-4 text-cream text-sm font-medium tracking-wide active:scale-[0.96] transition-all duration-200 text-center">
                Agende Seu Horário
              </Link>
              <Link href="/servicos" className="px-8 py-4 border border-bark/15 text-bark text-sm font-medium tracking-wide hover:border-red/30 hover:text-red active:scale-[0.96] transition-all duration-200 text-center">
                Ver Serviços
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Deco line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bark/10 to-transparent" />
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Profissionais', text: 'Barbeiros experientes e especializados em cada tipo de corte e barba.' },
              { title: 'Produtos Premium', text: 'Utilizamos apenas produtos de alta qualidade para o melhor resultado.' },
              { title: 'Ambiente', text: 'Espaço moderno, aconchegante e feito para o conforto do cliente.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="p-8 border border-bark/5 bg-cream-dark group hover:border-red/20 transition-colors duration-300">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark mb-2">{item.title}</h3>
                <p className="text-sm text-bark-muted leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS PREVIEW */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-3 block">Serviços</span>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark tracking-tight">
              Nossos Serviços
            </h2>
            <div className="w-12 h-px bg-red mx-auto mt-5" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Cabelo', desc: 'Corte clássico, degradê, infantil e mais.', price: 'A partir de R$ 35', href: '/servicos' },
              { title: 'Barba', desc: 'Navalha, máquina, sobrancelha e acabamento.', price: 'A partir de R$ 40', href: '/servicos' },
              { title: 'Combos', desc: 'Corte + barba, combo completo e hidratação.', price: 'A partir de R$ 95', href: '/servicos' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="group p-8 border border-bark/8 bg-cream hover:border-red/20 transition-all duration-300">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-bark mb-2">{item.title}</h3>
                <p className="text-sm text-bark-muted mb-6">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-red">{item.price}</span>
                  <Link href={item.href} className="text-xs text-bark-muted group-hover:text-red transition-colors duration-200">
                    Ver todos →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOBRE PREVIEW */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-3 block">Sobre Nós</span>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-bark leading-tight tracking-tight mb-5">
                Mais que uma barbearia,<br />um espaço de estilo
              </h2>
              <p className="text-bark-muted leading-relaxed mb-5">
                Na Barbermen, acreditamos que cada homem merece uma experiência
                única de cuidado pessoal. Nossos barbeiros são mestres no ofício,
                combinando técnicas tradicionais com tendências modernas.
              </p>
              <Link href="/sobre" className="text-sm font-medium text-red hover:text-red-dark transition-colors duration-200">
                Conheça nossa história →
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '10+', label: 'Anos' },
                { number: '5K+', label: 'Clientes' },
                { number: '3', label: 'Profissionais' },
                { number: '15K+', label: 'Cortes' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="p-6 bg-cream border border-bark/5 text-center">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-red block">{stat.number}</span>
                  <span className="text-xs text-bark-muted">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-cream tracking-tight mb-4">
              Pronto para uma experiência única?
            </h2>
            <p className="text-cream/50 max-w-md mx-auto mb-8">
              Agende agora e descubra por que somos a melhor barbearia da cidade.
            </p>
            <Link href="/agendar" className="btn-gradient inline-block px-10 py-4 text-cream text-sm font-semibold tracking-wide active:scale-[0.96] transition-all duration-200">
              Agendar Horário
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
