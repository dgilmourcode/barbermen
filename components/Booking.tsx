'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const serviceList = [
  { name: 'Corte Clássico', price: 'R$ 65', duration: '45 min' },
  { name: 'Degradê', price: 'R$ 75', duration: '50 min' },
  { name: 'Barba Navalha', price: 'R$ 55', duration: '40 min' },
  { name: 'Corte + Barba', price: 'R$ 110', duration: '75 min' },
  { name: 'Hidratação', price: 'R$ 45', duration: '30 min' },
  { name: 'Combo Completo', price: 'R$ 140', duration: '90 min' },
]

const professionals = [
  { name: 'Carlos', role: 'Barbeiro Principal' },
  { name: 'Miguel', role: 'Especialista em Degrade' },
  { name: 'Rafael', role: 'Barba & Navalha' },
]

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
]

type FormData = {
  service: string
  professional: string
  date: string
  time: string
  name: string
  phone: string
  notes: string
}

const initialForm: FormData = {
  service: '', professional: '', date: '', time: '',
  name: '', phone: '', notes: '',
}

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initialForm)
  const [confirmed, setConfirmed] = useState(false)

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const canNext = () => {
    if (step === 1) return form.service !== '' && form.professional !== ''
    if (step === 2) return form.date !== '' && form.time !== ''
    if (step === 3) return form.name.length > 2 && form.phone.length >= 10
    return true
  }

  const next = () => {
    if (step < 4) setStep((s) => s + 1)
    else setConfirmed(true)
  }

  const back = () => setStep((s) => s - 1)

  const selectedService = serviceList.find((s) => s.name === form.service)

  if (confirmed) {
    return (
      <section id="agendar" className="py-28 bg-cream">
        <div className="max-w-lg mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 bg-cream-dark border border-bark/5"
          >
            <div className="w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark mb-3">
              Agendamento Confirmado!
            </h3>
            <p className="text-bark-muted text-sm mb-1">{form.service}</p>
            <p className="text-bark-muted text-sm mb-1">
              com <span className="font-medium text-bark">{form.professional}</span>
            </p>
            <p className="text-bark-muted text-sm mb-6">
              {new Date(form.date + 'T12:00').toLocaleDateString('pt-BR', {
                weekday: 'long', day: 'numeric', month: 'long',
              })} às {form.time}
            </p>
            <p className="text-xs text-bark-muted">
              Enviaremos um lembrete no WhatsApp ({form.phone})
            </p>
            <button
              onClick={() => { setConfirmed(false); setStep(1); setForm(initialForm) }}
              className="mt-8 px-6 py-2.5 text-xs font-medium text-brass border border-brass/30 hover:border-brass/60 transition-colors duration-200"
            >
              Novo Agendamento
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="agendar" className="py-28 bg-cream-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brass mb-4 block">
            Agendamento
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-bark tracking-tight">
            Reserve Seu Horário
          </h2>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-10">
          {['Serviço', 'Data', 'Dados', 'Confirmar'].map((label, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                    i + 1 <= step
                      ? 'bg-bark text-cream'
                      : 'bg-cream border border-bark/10 text-bark-muted'
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-[10px] text-bark-muted tracking-wide hidden sm:block">
                  {label}
                </span>
              </div>
              {i < 3 && (
                <div className={`w-8 sm:w-12 h-px mb-4 transition-colors duration-300 ${
                  i + 1 < step ? 'bg-bark' : 'bg-bark/10'
                }`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-3 uppercase">
                    Escolha o serviço
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {serviceList.map((s) => (
                      <button
                        key={s.name}
                        type="button"
                        onClick={() => set('service', s.name)}
                        className={`text-left p-4 border transition-all duration-200 ${
                          form.service === s.name
                            ? 'border-bark bg-bark text-cream'
                            : 'border-bark/8 bg-cream hover:border-bark/20'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className={`text-sm font-medium block ${
                              form.service === s.name ? 'text-cream' : 'text-bark'
                            }`}>
                              {s.name}
                            </span>
                            <span className={`text-xs ${
                              form.service === s.name ? 'text-cream/50' : 'text-bark-muted'
                            }`}>
                              {s.duration}
                            </span>
                          </div>
                          <span className={`text-sm font-semibold ${
                            form.service === s.name ? 'text-gold-light' : 'text-brass'
                          }`}>
                            {s.price}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-3 uppercase">
                    Escolha o profissional
                  </label>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {professionals.map((p) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => set('professional', p.name)}
                        className={`text-center p-4 border transition-all duration-200 ${
                          form.professional === p.name
                            ? 'border-bark bg-bark text-cream'
                            : 'border-bark/8 bg-cream hover:border-bark/20'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-full bg-cream-dark mx-auto mb-3 flex items-center justify-center">
                          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-brass">
                            {p.name[0]}
                          </span>
                        </div>
                        <span className={`text-sm font-medium block ${
                          form.professional === p.name ? 'text-cream' : 'text-bark'
                        }`}>
                          {p.name}
                        </span>
                        <span className={`text-xs ${
                          form.professional === p.name ? 'text-cream/50' : 'text-bark-muted'
                        }`}>
                          {p.role}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-3 uppercase">
                    Selecione a data
                  </label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => set('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-4 bg-cream border border-bark/8 text-bark text-sm focus:outline-none focus:border-bark/25 transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-3 uppercase">
                    Selecione o horário
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set('time', t)}
                        className={`py-2.5 text-xs font-medium border transition-all duration-200 ${
                          form.time === t
                            ? 'border-bark bg-bark text-cream'
                            : 'border-bark/8 bg-cream text-bark-muted hover:border-bark/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-2 uppercase">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Nome completo"
                    className="w-full p-4 bg-cream border border-bark/8 text-bark text-sm placeholder:text-bark-muted/40 focus:outline-none focus:border-bark/25 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-2 uppercase">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full p-4 bg-cream border border-bark/8 text-bark text-sm placeholder:text-bark-muted/40 focus:outline-none focus:border-bark/25 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-bark-muted tracking-wide mb-2 uppercase">
                    Observações <span className="normal-case">(opcional)</span>
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => set('notes', e.target.value)}
                    placeholder="Alguma preferência ou observação..."
                    rows={3}
                    className="w-full p-4 bg-cream border border-bark/8 text-bark text-sm placeholder:text-bark-muted/40 focus:outline-none focus:border-bark/25 transition-colors duration-200 resize-none"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="p-8 bg-cream border border-bark/8 space-y-4">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark mb-6">
                  Confirme seu agendamento
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Serviço', value: form.service },
                    { label: 'Profissional', value: form.professional },
                    { label: 'Data', value: form.date ? new Date(form.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) : '' },
                    { label: 'Horário', value: form.time },
                    { label: 'Nome', value: form.name },
                    { label: 'WhatsApp', value: form.phone },
                  ].filter((item) => item.value).map((item) => (
                    <div key={item.label} className="flex justify-between text-sm py-2 border-b border-bark/5 last:border-0">
                      <span className="text-bark-muted">{item.label}</span>
                      <span className="text-bark font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                {selectedService && (
                  <div className="flex justify-between text-sm pt-3 border-t border-bark/10">
                    <span className="text-bark font-medium">Total</span>
                    <span className="text-brass font-semibold text-lg">{selectedService.price}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="flex-1 py-3.5 border border-bark/10 text-bark-muted text-sm font-medium tracking-wide hover:border-bark/20 transition-colors duration-200"
            >
              Voltar
            </button>
          )}
          <button
            type="button"
            onClick={next}
            disabled={!canNext()}
            className={`flex-1 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 ${
              canNext()
                ? 'bg-bark text-cream hover:bg-bark-light'
                : 'bg-bark/10 text-bark-muted/30 cursor-not-allowed'
            }`}
          >
            {step < 4 ? 'Próximo' : 'Confirmar Agendamento'}
          </button>
        </div>
      </div>
    </section>
  )
}
