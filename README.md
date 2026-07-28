# Barbermen - Barbearia Premium

Site institucional da Barbermen, barbearia premium em Teresina, PI. Projeto desenvolvido com **Astro 5**, **React 19**, **Tailwind CSS 4** e **Framer Motion**.

## Stack

- **Framework**: Astro 5 (static output)
- **UI**: React 19 + Tailwind CSS 4
- **Animações**: Framer Motion
- **Scroll**: Lenis
- **Agendamento**: WhatsApp (sem backend)

## Estrutura

```
src/
  components/     # Componentes React client-side
  layouts/        # Layouts Astro
  pages/          # Rotas Astro
  lib/            # Configurações e utilitários
  styles/         # Estilos globais
```

## Comandos

```bash
npm run dev       # Dev server (localhost:4321)
npm run build     # Build produção
npm run preview   # Preview do build
npm run lint      # Linter
```

## Design System

- **Cores**: bark, cream, brass/gold
- **Tipografia**: Playfair Display (display) + DM Sans (body)
- **Motion**: easing `[0.16, 1, 0.3, 1]`, scroll reveals, stagger em grids
- **Estilo**: sem gradientes decorativos, sem shadows em cards, border-radius 0 ou 9999px

## Deploy

Deploy na Vercel. O build gera arquivos estáticos em `dist/`.

## Notas

- Sem backend — agendamentos via WhatsApp
- Design system e skill documentados em `AGENTS.md`
- Galeria com carrossel infinito e lightbox na home page
- Página de serviços com accordion e imagens sponsor
