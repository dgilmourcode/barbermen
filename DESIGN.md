# DESIGN.md — Barberman Design System

> Barbearia premium. Artesanal. Nada de "template de IA".

## Referências de Qualidade
- **Apple**: Produto como hero, typography system, white space generoso, grid preciso
- **Nike**: Contraste tipográfico extremo, editorial photography, pill CTAs
- **Linear**: Redução de ruído visual, density control, clean surfaces
- **Velho Tranquilo**: Referência barbearia real — accordion services, consistência header/footer
- **RWJoias**: Referência premium brasileira — elegância sem excesso

## Identidade Visual
- **Essência**: Tradição meets modernidade. Artesanal, não industrial.
- **Voz**: Confiante, direta, sem exagero. Como um bom barbeiro fala.
- **Sensação**: Entrar numa barbearia de bairro que ficou famosa pelo serviço.

## Cores

### Paleta Principal
```css
--bark: #1C1710;          /* Ink principal — nunca preto puro */
--bark-light: #2A2118;    /* Hover state */
--bark-muted: #7A6E5E;    /* Texto secundário */

--cream: #FAF9F6;          /* Canvas principal */
--cream-dark: #F0EDE6;     /* Surface alternado */

--brass: #8B6914;          /* Accent — interativo */
--gold: #C4972A;           /* Accent hover */
--gold-light: #D4AD42;     /* Accent lighter */
```

### Regras de Cor
- **Nunca preto puro** — `#1C1710` (bark) é o ink. Preto puro só em fotos.
- **Um accent só** — brass/gold é o único "click me" do sistema.
- **Alternância de superfície** — cream → cream-dark cria ritmo sem divisores.
- **Nada de gradientes decorativos** — profundidade vem de fotografia.

## Tipografia

### Sistema de Fontes
- **Display**: Playfair Display (serif) — títulos, hero, números grandes
- **Body**: DM Sans (sans-serif) — parágrafos, UI, captions

### Hierarquia
| Nível | Tamanho | Weight | Letter-spacing | Uso |
|-------|---------|--------|----------------|-----|
| Display | clamp(2.8rem, 6vw, 4.8rem) | 600 | -0.03em | Hero headlines |
| H1 | clamp(2rem, 4vw, 3.2rem) | 600 | -0.02em | Section headers |
| H2 | clamp(1.8rem, 3.5vw, 2.8rem) | 600 | -0.015em | Sub-sections |
| H3 | 1.25rem | 600 | -0.01em | Card titles |
| Body | 1rem | 400 | 0 | Paragraphs |
| Small | 0.875rem | 400 | 0 | Captions |
| Micro | 0.75rem | 500 | 0.01em | Eyebrows, labels |

### Princípios Tipográficos
- **Negative tracking em display** — -0.03em no hero, -0.02em no H1. Nunca positivo.
- **Weight 600, não 700** — headlines usam semibold, não bold.
- **Body a 1rem** — não 0.875. O pixel extra define o ritmo de leitura.
- **Eyebrows em micro** — tracking-wider uppercase para labels como "Barbearia Premium · Desde 2018".
- **Line-height é context-specific** — display: 1.05, body: 1.6, dense: 2.4.

## Espaçamento

### Sistema
- **Base unit**: 8px
- **Tokens**: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
- **Section padding**: 96px vertical (desktop), 64px (mobile)
- **Card padding**: 24-32px
- **Side margins**: 24px mobile, 48px desktop

### Filosofia
- **Whitespace é pedestal** — cada seção começa com 64px de ar acima do headline.
- **Nada de dividers decorativos** — a mudança de cor (cream ↔ cream-dark) É o divisor.
- **Densidade é intencional** — footer é denso (links visíveis), hero é aberto.

## Bordas & Sombras

### Bordas
- **Hairline**: `rgba(0,0,0,0.05)` — nunca borda sólida preta
- **Input focus**: `rgba(0,0,0,0.15)` — sutil, não gritante
- **Cards**: `border-bark/5` ou `border-bark/8`

### Sombras
- **Nenhuma sombra em cards** — Apple não usa sombra em chrome.
- **Sombra só em produto** — se tiver fotografia de produto, uma sombra sutil.
- **Elevação por cor** — cream → cream-dark cria profundidade, não shadow.

## Componentes

### Botões
- **Primary**: bg-bark, text-cream, padding 16px 32px, sem border-radius (quadrado = artesanal)
- **Secondary**: border-bark/15, text-bark, mesma geometria
- **Ghost**: text-brass, sem background, sem border
- **Pressed**: `scale(0.96)` — micro-interaction consistente

### Cards
- **Superfície**: bg-cream com border-bark/5
- **Hover**: border-bark/15 — nunca shadow lift
- **Padding**: 24-32px
- **Radius**: 0px (quadrado = artesanal, premium)

### Accordion (Serviços)
- **Header**: ícone + título + preço, border-bark/5
- **Content**: max-height animation com ease [0.16, 1, 0.3, 1]
- **Hover**: bg-cream-dark/50

### Formulários
- **Input**: bg-cream-dark, border-bark/8, text-bark, padding 14px
- **Focus**: border-bark/20, outline-none
- **Label**: micro uppercase tracking-wider text-bark-muted

## Motion Design

### Timing & Easing
```tsx
const easings = {
  enter: [0.16, 1, 0.3, 1],      // Spring-like entrance (Apple)
  exit: [0.4, 0, 1, 1],           // Fast exit
  smooth: [0.76, 0, 0.24, 1],    // Equal ease in/out
}

const duration = {
  micro: 0.15,    // Button press, toggle
  quick: 0.2,     // Hover, focus
  normal: 0.4,    // Element enter
  slow: 0.8,      // Section reveal
  narrative: 1.2, // Hero reveal
}
```

### Padrões de Motion
1. **Scroll Reveal** — elementos surgem com opacity + translateY(20px) quando entram no viewport
2. **Stagger** — grid items aparecem com delay incremental (0.05s entre cada)
3. **Text Reveal** — palavras surgem com clip-path ou opacity stagger
4. **Parallax leve** — background se move 20-30% mais lento que o foreground
5. **Magnetic Button** — botão se move levemente em direção ao cursor
6. **Accordion** — max-height com spring easing, ícone rotaciona 45deg

### Performance
- **Só transform e opacity** — GPU accelerated
- **will-change: transform** só durante animação
- **prefers-reduced-motion** — respeitarAccessibility
- **viewport={{ once: true }}** — animar uma vez, não repetir

## Layout

### Grid
- **12 colunas**, 24px gap
- **Max content**: 1152px (max-w-6xl)
- **Mobile first**: breakpoints em 640px, 768px, 1024px

### Padrão de Seção
```
Section (cream)
  └─ Container (max-w-6xl, px-6)
      ├─ Eyebrow (micro, uppercase, brass, tracking-wider)
      ├─ Headline (display, text-bark)
      ├─ [optional] Divider (w-12 h-px bg-brass)
      └─ Content (grid ou stack)
```

## Anti-Padrões (Cara de IA)
- ❌ Hero + Features + Pricing genérico
- ❌ Cards simétricos com ícones iguais
- ❌ Gradientes decorativos
- ❌ Shadows em tudo
- ❌ Tipografia monótona (tudo mesmo weight)
- ❌ Animações exageradas (bounce, elastic)
- ❌ Texto "Lorem ipsum" ou genérico demais
- ✅ Alternância de superfície
- ✅ Typografia com contraste extremo
- ✅ Motion sutil e intencional
- ✅ Espaço generoso
- ✅ Um accent color apenas

## Responsividade

### Breakpoints
| Nome | Largura | Mudanças |
|------|---------|----------|
| Mobile | < 640px | 1 coluna, typography reduzida, hamburger nav |
| Tablet | 640-1023px | 2 colunas, nav compacta |
| Desktop | ≥ 1024px | Layout completo, 3 colunas |

### Touch Targets
- Mínimo 44×44px em todos os elementos interativos
- Botões: 48px height mínimo
- Accordion triggers: 48px height mínimo
