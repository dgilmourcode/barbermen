# Barbermen - TODO e Changelog

## Status Atual
Projeto migrado para **Astro 5** + **React 19** + **Tailwind CSS 4**  
**Design System** definido em `AGENTS.md`
**Dev server** rodando em `http://localhost:4321`

---

## ✅ Concluído (2026-07-27)

| Data | Resumo das mudanças |
|------|---------------------|
| 2026-07-27 | Alinhado `@astrojs/react` com `vite@6` para corrigir erro `Missing field moduleType` no dev server |
| 2026-07-27 | Corrigido hydration mismatch no `Header.tsx`: removido acesso direto a `window.location.pathname` durante renderização; passou a usar estado local `pathname` com `useEffect` |
| 2026-07-27 | Migração de Next.js para Astro concluída: páginas, layouts, componentes React e estilos |
| 2026-07-27 | Merge da branch `feat/migrate-astro` para `main` |

---

## 🔥 Próximas Ações (Prioridade Alta)

### Fase 1: Validação e Deploy
- [ ] Validar build de produção (`npm run build`)
- [ ] Validar comportamento no refresh de rotas na Vercel
- [ ] Corrigir eventuais hydration mismatches restantes
- [ ] Executar `npm audit fix` para vulnerabilidades

### Fase 2: Design System & WebStudio
- [ ] Carregar skill `barbearia.md` no WebStudio (`C:\WebStudio\AI\skills\barbearia.md`)
- [ ] Configurar template `landing-premium.md` 
- [ ] Sincronizar tokens de cor, tipografia e motion do Barbermen com WebStudio

### Fase 3: Componentes Críticos
- [ ] **Hero Section** - eyebrow, headline com negative tracking, CTAs, stagger motion
- [ ] **ServiceAccordion** - AnimatePresence, height spring, icon rotation
- [ ] **Footer** - dark theme (bark), social links, contact info, WhatsApp CTA
- [ ] **Cards de Serviços/Galeria** - zero border-radius, border-bark/5 hover, sem sombra

---

## 📋 Roadmap Completo (12 Fases)

| Fase | Descrição | Prioridade | Estimativa |
|------|-----------|------------|------------|
| 1 | Validação e Deploy | 🔴 Alta | 1-2 dias |
| 2 | Design System & WebStudio | 🔴 Alta | 2-3 dias |
| 3 | Componentes Críticos no WebStudio | 🔴 Alta | 2-3 dias |
| 4 | Segurança | 🔴 Alta | 1-2 dias |
| 5 | Performance | 🟡 Média | 2-3 dias |
| 6 | Design & Framer Motion | 🔴 Alta | 3-4 dias |
| 7 | Semântica e SEO | 🟡 Média | 2 dias |
| 8 | DRY, SOLID, Boas Práticas | 🟡 Média | 2-3 dias |
| 9 | Banco de Dados (opcional) | 🟢 Baixa | 2-3 dias |
| 10 | Admin Painel (opcional) | 🟢 Baixa | 2-3 dias |
| 11 | Testes, ESLint, Prettier | 🟡 Média | 2-3 dias |
| 12 | Documentação e Entrega | 🟢 Baixa | 1 dia |

**Total estimado**: 20-30 dias

---

## 🛠️ Comandos de Referência

```bash
# Dev server
npm run dev

# Build produção
npm run build

# Preview build
npm run preview

# Lint + format
npm run lint
npm run format

# Segurança
npm audit
npm audit fix
npm audit fix -- force  # breaking changes

# Instalar dependências
npm install
```

---

## 📚 Referências Principais

- **WebStudio**: `C:\WebStudio\WEBSTUDIO.md`
- **Barbermen Skill**: `C:\WebStudio\AI\skills\barbearia.md`
- **Design System**: `AGENTS.md` (raiz do projeto)

---

## 🎯 Critérios de Qualidade (Anti-AI Checklist)

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