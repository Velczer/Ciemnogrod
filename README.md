# Chronicle of Heroes — Olden Era Tournament

A visually immersive fantasy esports tournament landing page inspired by the dark fantasy aesthetics of Heroes of Might & Magic: Olden Era. Built as a fully static, component-based React application with no backend or database dependencies.

## Key Technologies

- **React 19** with **TanStack Start** (file-based routing via TanStack Router)
- **Material UI (MUI) v7** as the primary component library
- **Emotion** for CSS-in-JS styling
- **Tailwind CSS v4** (minimal usage alongside MUI)
- **TypeScript**
- **Vite** for bundling
- **Netlify** for deployment

## Visual Design

Dark fantasy / esports aesthetic featuring:
- Deep void-black backgrounds with gold (`#C9A84C`) and arcane purple (`#7B4FA6`) accents
- Cinzel & Cinzel Decorative (serif) + Crimson Text for typography — evokes a fantasy codex
- Glassmorphism panels, glowing borders, cinematic gradients
- CSS-only particle animations and entrance animations
- Fully responsive — collapses gracefully to mobile single-column

## Sections

1. **Hero** — Full-viewport cinematic intro with floating particles, decorative runes, animated title, and CTA buttons
2. **Players** — 8-card grid of fantasy player profiles with faction-colored hover effects
3. **Rankings** — Styled data table with animated win-rate bars and rank tier indicators
4. **Tournament Bracket** — Static quarterfinals → semifinals → grand final ladder with decorative connectors

## Running Locally

```bash
npm install
npm run dev
# App available at http://localhost:3000
```

Netlify CLI is also supported:
```bash
netlify dev
# App + Netlify features at http://localhost:8888
```
