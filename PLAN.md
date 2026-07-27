# Plano de Migração: Barbermen de Next.js para Astro

## Objetivo
Migrar o projeto Barbermen de Next.js 16 para Astro 4.0 mantendo todas as funcionalidades, design e animações.

## Abordagem
1. Manter estrutura de componentes existente onde possível
2. Converter páginas Next.js/Astro para páginas Astro (.astro ou .mdx)
3. Adaptar componentes React para Astro islands quando necessário
4. Preservar todas as animações (Framer Motion, GSAP, Lenis)
5. Manter o mesmo design system e variáveis CSS
6. Otimizar para performance (Astro é naturalmente mais rápido)

## Fases do Plano

### Fase 1: Preparação e Setup
- [x] Criar CLAUDE.md com stack técnico atualizado
- [x] Criar TODO.md para tracking
- [x] Criar estrutura de diretórios Astro
- [x] Criar branch separada `feat/migrate-astro` para migração
- [x] Instalar Astro com TypeScript e Tailwind
- [x] Configurar tsconfig.json para Astro
- [x] Migrar tailwind.config e postcss.config
- [x] Configurar astro.config.mjs com integrações necessárias

### Fase 2: Conversão de Layout e Componentes
- [x] Converter layout.tsx para Astro layout
- [x] Migrar globals.css paraAstro
- [x] Converter componentes reutilizáveis (Header, Footer, etc)
- [x] Adaptar uso de next/link para padrões Astro
- [x] Manter Framer Motion e GSAP nos componentes

### Fase 3: Conversão de Páginas
- [x] Converter app/page.tsx (Home) para src/pages/index.astro
- [x] Converter app/sobre/page.tsx para src/pages/sobre.astro
- [x] Converter app/servicos/page.tsx para src/pages/servicos.astro
- [x] Converter app/galeria (criar nova página) para src/pages/galeria.astro
- [x] Converter app/contato/page.tsx para src/pages/contato.astro
- [x] Converter app/agendar/page.tsx para src/pages/agendar.astro

### Fase 4: Integração e Funcionalidades
- [x] Implementar navegation.ts equivalente em Astro
- [x] Manter funcionalidade de scroll suave
- [x] Preservar lógica de header fixo/transparente
- [x] Manter menu mobile com animações
- [x] Preservar integração com WhatsApp para agendamentos
- [x] Manter variáveis de configuração (lib/config.ts)
- [x] Implementar scroll suave global (Lenis)
- [x] Adicionar SEO dinâmico por página
- [x] Configurar sitemap e robots

### Fase 5: Otimização e Testes
- [x] Implementar otimização de imagens Astro
- [x] Adicionar suporte a metatags SEO
- [x] Implementar sitemap.xml dinâmico
- [x] Adicionar robots.txt
- [x] Testar responsividade e performance
- [x] Build final e validação

## Critérios de Aceitação
- Todas as páginas funcionais idênticas ao original
- Design visual preservado 100%
- Todas as animações funcionando
- Navegação funcionando corretamente
- Performance igual ou melhor que o Next.js
- Código limpo e seguindo padrões Astro
- SEO preservado (metatags, estrutura semântica)

## Dependências a serem mantidas
- framer-motion
- gsap
- lenis
- @types/three, three, @react-three/fiber, @react-three/drei (se usados)
- html2canvas (se usado)

## Decisões Técnicas
- Usar Astro islands para componentes interativos que precisam de React
- Componentes estáticos permanecerão como puro Astro/HTML
- Manter TypeScript em todo o projeto
- Tailwind 4 configurado via astro.config.mjs
- Variáveis CSS preservadas em globals.css
- SEO gerado via astro:config e componentes de metatags
