# Barbermen - TODO e Changelog

## Status Atual
Projeto migrando de Next.js 16 para Astro 4.0  
**WebStudio configurado** em `C:\WebStudio` com app `barbermen-preview`  
**Design System** definido em DESIGN.md, SKILL.md, AGENTS.md

---

## ✅ Concluído (2026-07-23)

| Data | Resumo das mudanças |
|------|---------------------|
| 2026-07-23 | Criado app webstudio 'barbermen-preview' para visualização e live edit do design system; iniciado refatoração de componentes usando Tailwind e tokens de design. |
| 2026-07-23 | Corrigido `Header.tsx`: removido imports do Next.js (`next/link`, `next/navigation`), substituído por `@astrojs/react`; implementado estado `currentPath` para active links; dev server rodando em localhost:4323. |
| 2026-07-23 | Atualizado `astro.config.mjs` com integração `@astrojs/react`. |
| 2026-07-23 | Criado `PLAN.md` com 12 fases detalhadas para refatoração completa. |

---

## 🔥 Próximas Ações Imediatas (Prioridade Alta)

### Fase 1: Correções Críticas e Setup
- [ ] Corrigir conflito de versão ESLint (v9 vs eslint-plugin-react-hooks v4)
- [ ] Executar `npm audit fix` para vulnerabilidades (6 encontradas: 5 high, 1 moderate)
- [ ] Remover diretório `app/` (Next.js pages) - não utilizado no Astro
- [ ] Remover `next.config.ts` e `next-env.d.ts`
- [ ] Limpar duplicatas: `components/` (raiz) vs `src/components/`
- [ ] Verificar `Navbar.tsx` (arquivo vazio - 0 bytes)

### Fase 2: Design System & WebStudio
- [ ] Carregar skill `barbearia.md` no WebStudio (`C:\WebStudio\AI\skills\barbearia.md`)
- [ ] Configurar template `landing-premium.md` 
- [ ] Sincronizar tokens de cor, tipografia e motion do Barbermen com WebStudio
- [ ] Configurar fontes locais (Playfair Display, DM Sans) em `barbermen-preview/public/fonts`

### Fase 3: Componentes Críticos no WebStudio
- [ ] **Header/Navbar** - scroll-aware, mobile drawer, logo com cores da marca
- [ ] **Hero Section** - eyebrow, headline com negative tracking, CTAs, stagger motion
- [ ] **ServiceAccordion** - AnimatePresence, height spring, icon rotation
- [ ] **Footer** - dark theme (bark), social links, contact info, WhatsApp CTA
- [ ] **Cards de Serviços/Galeria** - zero border-radius, border-bark/5 hover, sem sombra

---

## 📋 Roadmap Completo (12 Fases)

| Fase | Descrição | Prioridade | Estimativa |
|------|-----------|------------|------------|
| 1 | Correções Críticas e Setup | 🔴 Alta | 1-2 dias |
| 2 | Design System & WebStudio | 🔴 Alta | 2-3 dias |
| 3 | Integração WebStudio → Astro | 🔴 Alta | 2-3 dias |
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
npm audit fix --force  # breaking changes

# Instalar dependências
npm install --legacy-peer-deps  # para evitar conflitos ESLint
```

---

## 📚 Referências Principais

- **WebStudio**: `C:\WebStudio\WEBSTUDIO.md`
- **Barbermen Skill**: `C:\WebStudio\AI\skills\barbearia.md`
- **Design System**: `C:\WebStudio\AI\design-system/` (colors.md, typography.md, animations.md)
- **Barbermen Docs**: DESIGN.md, SKILL.md, AGENTS.md, CLAUDE.md (raiz do projeto)
- **Plano Detalhado**: PLAN.md (raiz do projeto)

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