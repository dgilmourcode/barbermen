'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

interface Service {
  name: string;
  description: string;
  time: string;
  price: string;
}

interface ServiceAccordionProps {
  category: string;
  icon: React.ReactNode;
  services: Service[];
}

export default function ServiceAccordion({ category, icon, services }: ServiceAccordionProps) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (name: string) => {
    setOpen(open === name ? null : name);
  };

  return (
    <div className="border border-bark/8 bg-cream">
      <button
        type="button"
        onClick={() => toggle(category)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-cream-dark text-red">
            {icon}
          </div>
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-bark">{category}</span>
        </div>
        <motion.span
          animate={{ rotate: open === category ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 flex items-center justify-center text-bark-muted"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open === category && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { height: 0, opacity: 0 },
              show: { height: 'auto', opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
              exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const } },
            }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-3">
              {services.map((service) => (
                <motion.div key={service.name} variants={fadeUp} className="p-4 bg-cream-dark border border-bark/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-bark">{service.name}</h4>
                    <p className="text-xs text-bark-muted mt-0.5 max-w-xl">{service.description}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:text-right">
                    <span className="text-xs text-bark-muted">{service.time}</span>
                    <span className="text-sm font-semibold text-red">{service.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

