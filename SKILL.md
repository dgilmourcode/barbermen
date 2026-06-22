# SKILL.md — Barberman Design & Motion

> Use quando criando ou melhorando componentes, páginas ou animações para o projeto Barberman.

## Quando Usar
- Criar/editar componentes UI do barberman
- Adicionar animações com Framer Motion
- Melhorar layout, tipografia ou cores
- Implementar scroll reveals, parallax, text reveals
- Refinar micro-interactions
- Revisar design para "cara de IA"

## Princípios Fundamentais

### 1. Artesanal, Não Industrial
- Cada componente parece handcrafted
- Nada de padrões simétricos perfeitos
- Espaço irregular é intencional
- Tipografia tem personalidade, não é uniforme

### 2. Motion com Propósito
- Animação existe para guiar o olhar, não para impressionar
- Cada motion tem uma razão: revelar, conectar, direcionar
- Nada de bounce, elastic, ou spring exagerado
- Apple-inspired: [0.16, 1, 0.3, 1] para enter, [0.4, 0, 1, 1] para exit

### 3. Referências Reais
- **Apple**: alternância de tiles, negative tracking, single accent
- **Nike**: contraste tipográfico extremo, editorial photography
- **Linear**: redução de ruído, clean surfaces
- **Velho Tranquilo**: accordion pattern, header/footer consistency

## Padrões de Componente

### Header
```tsx
// Scroll-aware: background opacity muda com scroll
// Mobile: hamburger com AnimatePresence para drawer
// Logo: Playfair Display, "Barber" em bark, "Man" em brass
```

### Hero (Home)
```tsx
// Eyebrow: micro uppercase brass tracking-wider
// Headline: display com negative tracking -0.03em
// Body: 1.125rem text-bark-muted leading-relaxed
// CTAs: primary (bg-bark) + ghost (border)
// Motion: stagger no eyebrow → headline → body → CTAs
```

### ServiceAccordion
```tsx
// Framer Motion AnimatePresence para content
// height animation com spring: [0.16, 1, 0.3, 1]
// Icon rotate 45deg com motion.div
// Hover: bg-cream-dark/50 com transition 150ms
```

### Cards
```tsx
// Zero border-radius (artesanal)
// Border: border-bark/5 → border-bark/15 no hover
// NENHUMA sombra
// Motion: opacity + translateY(20) no scroll reveal
```

### Formulários
```tsx
// Input: bg-cream-dark, border-bark/8, padding 14px
// Label: micro uppercase tracking-wider text-bark-muted
// Focus: border-bark/20 com transition 200ms
// Button: scale(0.96) no pressed
```

## Padrões de Motion

### Scroll Reveal (elemento único)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
```

### Stagger (grid de items)
```tsx
// Container com variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
}
// Item com variants
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
}
```

### Text Reveal (palavras)
```tsx
// Split por palavras, cada palavra com delay incremental
// opacity: 0 → 1, y: 10 → 0
// delay: index * 0.08
```

### Accordion
```tsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
```

### Magnetic Button
```tsx
// useMotionValue para x, y
// onMouseMove: calcula distância do centro
// onMouseLeave: reseta para 0
// transition: spring stiffness 150, damping 15
```

## Checklist Anti-AI
Antes de finalizar qualquer componente, verificar:
- [ ] Sem gradientes decorativos
- [ ] Sem shadows em cards
- [ ] Sem border-radius genérico (usar 0 ou 9999px)
- [ ] Tipografia com contraste (display vs body)
- [ ] Espaço generoso (não apertado)
- [ ] Um accent color apenas (brass)
- [ ] Motion sutil, não exagerado
- [ ] Alternância de superfície (cream ↔ cream-dark)
- [ ] Texto específico da marca, não genérico

## Arquivos de Referência
- `DESIGN.md` — sistema de design completo
- `app/globals.css` — tokens de cor e Tailwind theme
- `app/layout.tsx` — fontes e estrutura base
- `components/Header.tsx` — navegação consistente
- `components/Footer.tsx` — footer escuro
- `opencode-context/motion.md` — padrões de motion design
- `opencode-context/design.md` — referências de design

## Cores do Tema (Tailwind)
```
bg-cream       → #FAF9F6
bg-cream-dark  → #F0EDE6
text-bark      → #1C1710
text-bark-muted → #7A6E5E
text-brass     → #8B6914
text-gold      → #C4972A
```

## Fontes
```
font-[family-name:var(--font-display)] → Playfair Display
font-[family-name:var(--font-body)]    → DM Sans (default do body)
```
