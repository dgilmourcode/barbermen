'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '@/lib/config';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export default function Footer() {
  return (
    <footer className="bg-bark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-3 gap-12"
        >
          <motion.div variants={fadeUp}>
            <a href="/" className="inline-flex items-center mb-4">
              <img src="/logo.svg" alt="Barbermen" width={140} height={28} className="h-7 w-auto brightness-0 invert" />
            </a>
            <p className="text-sm text-cream/50 mt-2 leading-relaxed max-w-xs">
              A melhor barbearia da cidade. Tradição, estilo e cuidado em cada detalhe.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-cream/70">Horários</h4>
            <div className="space-y-2 text-sm text-cream/50">
              <p>{CONTACT.hours.weekday}</p>
              <p>{CONTACT.hours.saturday}</p>
              <p>{CONTACT.hours.sunday}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-5 text-cream/70">Contato</h4>
            <div className="space-y-2 text-sm text-cream/50">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
              <p className="pt-2">{CONTACT.whatsappDisplay}</p>
              <p>{CONTACT.email}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30">
            © 2026 Barbermen. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-cream/30 hover:text-red-light transition-colors duration-200">
              Instagram
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="text-xs text-cream/30 hover:text-red-light transition-colors duration-200">
              Facebook
            </a>
            <a href={CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}` : '#'} target="_blank" rel="noopener noreferrer" className="text-xs text-cream/30 hover:text-red-light transition-colors duration-200">
              WhatsApp
            </a>
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="text-xs text-cream/30 hover:text-red-light transition-colors duration-200">
              YouTube
            </a>
            <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" className="text-xs text-cream/30 hover:text-red-light transition-colors duration-200">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
