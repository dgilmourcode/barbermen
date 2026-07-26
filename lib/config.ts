// Configuração de contatos da Barbermen
// Atualizar com dados reais antes de deploy

export const CONTACT = {
  whatsapp: '5586994936797',
  whatsappDisplay: '(86) 99493-6797',
  email: 'contato@barbermen.com.br',
  address: 'Rua Augusta, 1500 - Consolação',
  city: 'São Paulo, SP',
  instagram: 'https://instagram.com/dgilmourcode',
  facebook: 'https://facebook.com/dgilmourcode',
  twitter: 'https://twitter.com/dgilmourcode',
  linkedin: 'https://linkedin.com/in/dgilmourcode',
  youtube: 'https://youtube.com/@dgilmourcode',
  tiktok: 'https://tiktok.com/@dgilmourcode',
  hours: {
    weekday: 'Segunda a Sexta: 08h - 20h',
    saturday: 'Sábado: 08h - 18h',
    sunday: 'Domingo: 09h - 14h',
  },
}

export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`
  if (message) return `${base}?text=${encodeURIComponent(message)}`
  return base
}
