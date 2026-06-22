'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { CONTACT } from '@/lib/config'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero title="Contato" subtitle="Fale Conosco" />

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark mb-2">
                Entre em Contato
              </h2>
              <div className="w-10 h-px bg-red mb-8" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="space-y-6"
              >
                {[
                  {
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                    label: 'Endereço',
                    value: `${CONTACT.address}, ${CONTACT.city}`,
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                    label: 'WhatsApp',
                    value: CONTACT.whatsappDisplay,
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    label: 'Horários',
                    value: 'Seg-Sáb: 08h às 20h · Dom: 09h às 14h',
                  },
                  {
                    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
                    label: 'Email',
                    value: CONTACT.email,
                  },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-cream-dark text-red">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-medium tracking-wider uppercase text-bark-muted block mb-0.5">{item.label}</span>
                      <span className="text-sm text-bark">{item.value}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* FORMULÁRIO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark mb-2">
                Envie uma Mensagem
              </h2>
              <div className="w-10 h-px bg-red mb-8" />

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  className="p-8 bg-cream-dark border border-bark/5 text-center"
                >
                  <svg className="w-10 h-10 text-red mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <h3 className="text-lg font-semibold text-bark mb-2">Mensagem enviada!</h3>
                  <p className="text-sm text-bark-muted">Entraremos em contato em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">Nome</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-3.5 bg-cream-dark border border-bark/8 text-bark text-sm focus:outline-none focus:border-red/20 transition-colors duration-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-3.5 bg-cream-dark border border-bark/8 text-bark text-sm focus:outline-none focus:border-red/20 transition-colors duration-200" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">Telefone</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full p-3.5 bg-cream-dark border border-bark/8 text-bark text-sm focus:outline-none focus:border-red/20 transition-colors duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">Mensagem</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-3.5 bg-cream-dark border border-bark/8 text-bark text-sm focus:outline-none focus:border-red/20 transition-colors duration-200 resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 btn-gradient text-cream text-sm font-medium tracking-wide active:scale-[0.96] transition-all duration-200">
                    Enviar Mensagem
                  </button>
                </form>
              )}
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-cream tracking-tight mb-4">
              Prefere agendar pelo WhatsApp?
            </h2>
            <p className="text-cream/50 max-w-md mx-auto mb-8">
              Fale diretamente com a gente e reserve seu horário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5586994936797" target="_blank" rel="noopener noreferrer" className="btn-gradient px-8 py-4 text-cream text-sm font-medium tracking-wide active:scale-[0.96] transition-all duration-200">
                Chamar no WhatsApp
              </a>
              <Link href="/agendar" className="px-8 py-4 border border-cream/15 text-cream text-sm font-medium tracking-wide hover:border-cream/30 active:scale-[0.96] transition-all duration-200">
                Agendar pelo Site
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
