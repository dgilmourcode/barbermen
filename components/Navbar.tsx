'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-1.5">
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-bark tracking-tight">
              Barber
            </span>
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-brass tracking-tight">
              Man
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-bark-muted hover:text-bark transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#agendar"
              className="px-5 py-2.5 bg-bark text-cream text-sm font-medium tracking-wide hover:bg-bark-light transition-colors duration-200"
            >
              Agendar Horário
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-bark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-bark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[1.5px]' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-md pt-[72px] md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-12">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-bark"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#agendar"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 px-8 py-3 bg-bark text-cream text-sm font-medium tracking-wide"
              >
                Agendar Horário
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
