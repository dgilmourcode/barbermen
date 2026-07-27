'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import PageHero from '@/components/PageHero';
import { CONTACT } from '@/lib/config';

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
}

const initialForm: FormData = { service: '', professional: '', date: '', time: '', name: '', phone: '' }

function buildWhatsAppMessage(form: FormData): string {
  const dateFormatted = form.date
    ? new Date(form.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
    : ''
  return encodeURIComponent(
     `Oi! Gostaria de agendar um horário na Barbermen.\n\n` +
    `*Serviço:* ${form.service}\n` +
    `*Profissional:* ${form.professional}\n` +
    `*Data:* ${dateFormatted}\n` +
    `*Horário:* ${form.time}\n` +
    `*Nome:* ${form.name}\n` +
    `*Telefone:* ${form.phone}\n\n` +
    `Aguardo confirmação!`
  )
}

export default function AgendarClient() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(initialForm)
  const [sent, setSent] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [generating, setGenerating] = useState(false)
  const receiptRef = useRef<HTMLDivElement>(null)

  const set = (field: keyof FormData, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const canNext = () => {
    if (step === 1) return form.service !== '' && form.professional !== ''
    if (step === 2) return form.date !== '' && form.time !== ''
    if (step === 3) return form.name.length > 2 && form.phone.length >= 10
    return true
  }

  const next = () => {
    if (step < 4) {
      setStep((s) => s + 1)
    } else {
      const msg = buildWhatsAppMessage(form)
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank')
      setSent(true)
    }
  }

  const back = () => setStep((s) => s - 1)

  const generateImage = useCallback(async (): Promise<Blob | null> => {
    if (!receiptRef.current) return null
    setGenerating(true)
    try {
      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      })
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          setGenerating(false)
          resolve(blob)
        }, 'image/png')
      })
    } catch {
      setGenerating(false)
      return null
    }
  }, [])

  const handleShareImage = async () => {
    const blob = await generateImage()
    if (!blob) return

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    if (isMobile && navigator.share && navigator.canShare) {
        const file = new File([blob], 'agendamento-barbermen.png', { type: 'image/png' })
      if (navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            title: 'Meu Agendamento - Barbermen',
            text: `Agendamento confirmado!\n${form.service} com ${form.professional}`,
            files: [file],
          })
          return
        } catch { /* user cancelled */ }
      }
    }

    // Desktop ou fallback
    setShowShareModal(true)
  }

  const handleDownload = async () => {
    const blob = await generateImage()
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
      a.download = 'agendamento-barbermen.png'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (sent) {
    const dateFormatted = form.date
      ? new Date(form.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : ''

    const shareText = `Agendamento Barbermen\n${form.service} com ${form.professional}\n${dateFormatted} às ${form.time}`
    const shareUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(shareText)}`

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(shareText)
        setShowShareModal(false)
      } catch { /* clipboard not available */ }
    }

    return (
      <>
        <PageHero title="Agendamento Confirmado" />
        <section className="py-20 bg-cream">
          <div className="max-w-lg mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="w-14 h-14 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-brass" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-bark mb-2">Agendamento Confirmado!</h3>
              <p className="text-xs text-bark-muted mb-8">Sua mensagem foi enviada para o WhatsApp da barbearia.</p>

              {/* ===== COMPROVANTE VISUAL (escondido, usado pra gerar imagem) ===== */}
              <div className="flex justify-center mb-6">
                <div
                  ref={receiptRef}
                  style={{
                    width: 400,
                    background: '#FFFFFF',
                    overflow: 'hidden',
                    fontFamily: 'Georgia, serif',
                    position: 'relative',
                    border: '1px solid #E5E5E5',
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: 4, background: '#991B1B' }} />

                  {/* Header */}
                  <div style={{ padding: '28px 24px 20px', textAlign: 'center', borderBottom: '1px solid #F0F0F0' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' as const, color: '#991B1B', marginBottom: 6, fontWeight: 600 }}>
                      Barbearia Premium
                    </div>
                    <div style={{ fontSize: 32, fontWeight: 700, color: '#1C1710', letterSpacing: '-0.5px', lineHeight: 1 }}>
                       Barber<span style={{ color: '#991B1B' }}>men</span>
                    </div>
                    <div style={{ fontSize: 10, color: '#999', marginTop: 8, letterSpacing: '0.15em' }}>
                      CONFIRMAÇÃO DE AGENDAMENTO
                    </div>
                  </div>

                  {/* Badge */}
                  <div style={{ textAlign: 'center', padding: '20px 0 0' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: '#991B1B',
                      color: '#FFFFFF',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      padding: '8px 18px',
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      Confirmado
                    </div>
                  </div>

                  {/* Horário destaque */}
                  <div style={{ textAlign: 'center', padding: '20px 0 16px' }}>
                    <div style={{ fontSize: 48, fontWeight: 700, color: '#1C1710', lineHeight: 1, letterSpacing: '-1px' }}>
                      {form.time}
                    </div>
                    <div style={{ fontSize: 13, color: '#666', marginTop: 6 }}>
                      {dateFormatted}
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: '#F0F0F0', margin: '0 24px' }} />

                  {/* Detalhes */}
                  <div style={{ padding: '16px 28px' }}>
                    {[
                      { label: 'Serviço', value: form.service },
                      { label: 'Profissional', value: form.professional },
                      { label: 'Horário', value: form.time },
                      { label: 'Cliente', value: form.name },
                    ].map((item) => (
                      <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F5F5F5' }}>
                        <span style={{ fontSize: 11, color: '#999', textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontWeight: 500 }}>{item.label}</span>
                        <span style={{ fontSize: 13, color: '#1C1710', fontWeight: 600 }}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: '#F0F0F0', margin: '0 24px' }} />

                  {/* Footer */}
                  <div style={{ padding: '16px 24px 20px', textAlign: 'center' }}>
                    <div style={{ fontSize: 10, color: '#999', lineHeight: 1.8 }}>
                      <div>{CONTACT.address} — {CONTACT.city}</div>
                      <div>{CONTACT.whatsappDisplay}</div>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div style={{ height: 3, background: 'linear-gradient(90deg, #991B1B 0%, #B91C1C 50%, #991B1B 100%)' }} />
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownload}
                  disabled={generating}
                  className="flex-1 py-3 bg-bark text-cream text-sm font-medium tracking-wide hover:bg-bark-light active:scale-[0.96] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  {generating ? 'Gerando...' : 'Baixar Imagem'}
                </button>
                <button
                  onClick={handleShareImage}
                  disabled={generating}
                  className="flex-1 py-3 border border-bark/15 text-bark text-sm font-medium tracking-wide hover:border-bark/25 active:scale-[0.96] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                  Compartilhar
                </button>
              </div>

              <button
                onClick={() => { setSent(false); setStep(1); setForm(initialForm) }}
                className="mt-6 text-xs font-medium text-brass hover:text-bark transition-colors"
              >
                ← Novo Agendamento
              </button>
            </motion.div>
          </div>
        </section>

        {/* Modal de Compartilhamento — Desktop */}
        <AnimatePresence>
          {showShareModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-bark/40 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setShowShareModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cream border border-bark/10 w-full max-w-sm p-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark">Compartilhar</h3>
                  <button onClick={() => setShowShareModal(false)} className="w-8 h-8 flex items-center justify-center text-bark-muted hover:text-bark transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2">
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowShareModal(false)}
                    className="flex items-center gap-3 p-3 border border-bark/8 hover:border-bark/15 hover:bg-cream-dark/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#25D366]/10 text-[#25D366]">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-bark block">WhatsApp</span>
                      <span className="text-xs text-bark-muted">Enviar mensagem</span>
                    </div>
                  </a>

                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center gap-3 p-3 border border-bark/8 hover:border-bark/15 hover:bg-cream-dark/50 transition-all duration-200 text-left"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-brass/10 text-brass">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-bark block">Baixar imagem</span>
                      <span className="text-xs text-bark-muted">Salvar no computador</span>
                    </div>
                  </button>

                  <button
                    onClick={() => { handleDownload(); window.open('https://www.instagram.com/', '_blank'); setShowShareModal(false) }}
                    className="w-full flex items-center gap-3 p-3 border border-bark/8 hover:border-bark/15 hover:bg-cream-dark/50 transition-all duration-200 text-left"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-bark block">Instagram</span>
                      <span className="text-xs text-bark-muted">Postar nos Stories</span>
                    </div>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center gap-3 p-3 border border-bark/8 hover:border-bark/15 hover:bg-cream-dark/50 transition-all duration-200 text-left"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-bark/5 text-bark-muted">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-bark block">Copiar texto</span>
                      <span className="text-xs text-bark-muted">Área de transferência</span>
                    </div>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <>
      <PageHero title="Reserve Seu Horário" subtitle="Agendamento" />

      <section className="py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            {['Serviço', 'Data', 'Dados', 'Confirmar'].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${i + 1 <= step ? 'bg-bark text-cream' : 'bg-cream-dark border border-bark/10 text-bark-muted'}`}>{i + 1}</div>
                  <span className="text-[10px] text-bark-muted hidden sm:block">{label}</span>
                </div>
                {i < 3 && <div className={`w-8 sm:w-10 h-px mb-4 transition-colors duration-300 ${i + 1 < step ? 'bg-bark' : 'bg-bark/10'}`} />}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-2">Serviço</label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {serviceList.map((s) => (
                      <button key={s.name} type="button" onClick={() => set('service', s.name)} className={`text-left p-3.5 border transition-all duration-200 ${form.service === s.name ? 'border-bark bg-bark text-cream' : 'border-bark/8 bg-cream hover:border-bark/15'}`}>
                        <span className={`text-sm font-medium block ${form.service === s.name ? 'text-cream' : 'text-bark'}`}>{s.name}</span>
                        <span className={`text-xs ${form.service === s.name ? 'text-cream/50' : 'text-bark-muted'}`}>{s.duration} · {s.price}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-2">Profissional</label>
                  <div className="grid grid-cols-3 gap-2">
                    {professionals.map((p) => (
                      <button key={p.name} type="button" onClick={() => set('professional', p.name)} className={`text-center p-3 border transition-all duration-200 ${form.professional === p.name ? 'border-bark bg-bark text-cream' : 'border-bark/8 bg-cream hover:border-bark/15'}`}>
                        <div className="w-10 h-10 rounded-full bg-cream-dark mx-auto mb-2 flex items-center justify-center">
                          <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-brass">{p.name[0]}</span>
                        </div>
                        <span className={`text-xs font-medium block ${form.professional === p.name ? 'text-cream' : 'text-bark'}`}>{p.name}</span>
                        <span className={`text-[10px] ${form.professional === p.name ? 'text-cream/50' : 'text-bark-muted'}`}>{p.role}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-2">Data</label>
                  <input type="date" value={form.date} onChange={(e) => set('date', e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full p-3.5 bg-cream border border-bark/8 text-bark text-sm focus:outline-none focus:border-bark/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-2">Horário</label>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {timeSlots.map((t) => (
                      <button key={t} type="button" onClick={() => set('time', t)} className={`py-2.5 text-xs font-medium border transition-all duration-200 ${form.time === t ? 'border-bark bg-bark text-cream' : 'border-bark/8 bg-cream text-bark-muted hover:border-bark/15'}`}>{t}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">Nome</label>
                  <input type="text" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Nome completo" className="w-full p-3.5 bg-cream border border-bark/8 text-bark text-sm placeholder:text-bark-muted/40 focus:outline-none focus:border-bark/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-wider uppercase text-bark-muted mb-1.5">WhatsApp</label>
                  <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(11) 99999-9999" className="w-full p-3.5 bg-cream border border-bark/8 text-bark text-sm placeholder:text-bark-muted/40 focus:outline-none focus:border-bark/20 transition-colors" />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="p-6 bg-cream border border-bark/8 space-y-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark mb-4">Confirme seu agendamento</h3>
                {[
                  { label: 'Serviço', value: form.service },
                  { label: 'Profissional', value: form.professional },
                  { label: 'Data', value: form.date ? new Date(form.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }) : '' },
                  { label: 'Horário', value: form.time },
                  { label: 'Nome', value: form.name },
                  { label: 'WhatsApp', value: form.phone },
                ].filter((i) => i.value).map((item) => (
                  <div key={item.label} className="flex justify-between text-sm py-2 border-b border-bark/5 last:border-0">
                    <span className="text-bark-muted">{item.label}</span>
                    <span className="text-bark font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <div className="flex gap-3 mt-8">
            {step > 1 && <button type="button" onClick={back} className="flex-1 py-3 border border-bark/10 text-bark-muted text-sm font-medium hover:border-bark/20 transition-colors">Voltar</button>}
            <button type="button" onClick={next} disabled={!canNext()} className={`flex-1 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${canNext() ? 'bg-bark text-cream hover:bg-bark-light active:scale-[0.96]' : 'bg-bark/10 text-bark-muted/30 cursor-not-allowed'}`}>
              {step < 4 ? 'Próximo' : 'Enviar via WhatsApp'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

