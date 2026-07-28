'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from '@/components/Link';
import PageHero from '@/components/PageHero';
import ServiceAccordion from '@/components/ServiceAccordion';

const sponsorImages = [
  { src: '/images/gallery-1.jpg', alt: 'Corte Degradê' },
  { src: '/images/gallery-2.jpg', alt: 'Barba Navalha' },
  { src: '/images/gallery-3.jpg', alt: 'Visual Completo' },
  { src: '/images/gallery-4.jpg', alt: 'Acabamento' },
  { src: '/images/gallery-6.jpg', alt: 'Corte Social' },
  { src: '/images/gallery-8.jpg', alt: 'Sobrancelha' },
]

const barbaIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
)

const cabeloIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v18M18 3v18M6 12h12M9 3c0 3-3 3-3 6s3 3 3 6M15 3c0 3 3 3 3 6s-3 3-3 6" />
  </svg>
)

const comboIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
)

const tratamentoIcon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5m-4.25-11.396c.251.023.501.05.75.082M12 21a8.966 8.966 0 005.982-2.275M12 21a8.966 8.966 0 01-5.982-2.275M15.75 3.186a24.284 24.284 0 012.038.557M8.25 3.186a24.284 24.284 0 00-2.038.557M12 3v2.25" />
  </svg>
)

export default function ServicosClient() {
  return (
    <>
      <PageHero title="Cortes de Estilo e Tratamentos Premium" subtitle="Barbearia" />

      {/* SPONSOR - Fotos quadradas */}
      <section className="py-12 bg-cream-dark border-y border-bark/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-3 justify-center flex-wrap md:flex-nowrap">
            {sponsorImages.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 relative overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <ServiceAccordion
            category="Cabelo"
            icon={cabeloIcon}
            services={[
              { name: 'Corte Clássico', description: 'Tesoura e máquina com acabamento preciso. Curto, comprido, repicado ou bagunçado — entregamos o estilo que você deseja.', time: '45 min', price: 'R$ 65' },
              { name: 'Degradê', description: 'Fade perfeito com transição suave do skin fade ao mid fade. Nosso serviço mais procurado.', time: '50 min', price: 'R$ 75' },
              { name: 'Corte Infantil', description: 'Corte para crianças até 10 anos. Ambiente descontraído e profissionais patientes.', time: '30 min', price: 'R$ 50' },
              { name: 'Pezinho', description: 'Contorno e acabamento do corte com máquina e navalha. Mantém o visual caprichado por mais tempo.', time: '20 min', price: 'R$ 35' },
              { name: 'Corte Cabelo Longo', description: 'Corte especializado para cabelos longos com técnica de tesoura profissional.', time: '60 min', price: 'R$ 85' },
            ]}
          />

          <ServiceAccordion
            category="Barba"
            icon={barbaIcon}
            services={[
              { name: 'Barba Navalha', description: 'Aparação completa com navalha, toalha quente, óleo pré-barba e pós-barba hidratante. Uma experiência clássica e refinada.', time: '40 min', price: 'R$ 55' },
              { name: 'Barba com Máquina', description: 'Aparação e modelagem com máquina de precisão. Acabamento limpo e visual impecável.', time: '25 min', price: 'R$ 40' },
              { name: 'Barba + Sobrancelha', description: 'Barba completa com modelagem e sobrancelha na navalha.', time: '50 min', price: 'R$ 65' },
            ]}
          />

          <ServiceAccordion
            category="Combos"
            icon={comboIcon}
            services={[
              { name: 'Corte + Barba', description: 'Nosso combo mais popular. Corte completo com degradê ou clássico + barba na navalha.', time: '75 min', price: 'R$ 110' },
              { name: 'Combo Completo', description: 'Corte + barba + hidratação capilar + lavagem.               A experiência completa Barbermen.', time: '90 min', price: 'R$ 140' },
              { name: 'Corte + Hidratação', description: 'Corte de cabelo + tratamento hidratante com produtos profissionais.', time: '60 min', price: 'R$ 95' },
            ]}
          />

          <ServiceAccordion
            category="Tratamentos"
            icon={tratamentoIcon}
            services={[
              { name: 'Hidratação Capilar', description: 'Tratamento profundo para repor umidade, nutrientes e queratina. Cabelos saudáveis, com brilho e macios.', time: '30 min', price: 'R$ 45' },
              { name: 'Lavagem Especial', description: 'Lavagem com shampoos e condicionadores premium da linha Keune 1922.', time: '20 min', price: 'R$ 35' },
              { name: 'Sobrancelha', description: 'Design e modelagem de sobrancelha com navalha e pinça.', time: '15 min', price: 'R$ 25' },
            ]}
          />
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
              Gostou dos nossos serviços?
            </h2>
            <p className="text-cream/50 max-w-md mx-auto mb-8">
              Agende agora e experimente a diferença Barbermen.
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

