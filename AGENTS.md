# AGENTS.md — Chronicle of Heroes

This document provides an overview of the project for developers and AI agents.

## Project Overview

A fully static fantasy esports tournament landing page built with TanStack Start, React 19, and Material UI. No backend, no API, no database. All content is defined in `src/data/gameData.ts`.

## Key Architecture

```
src/
  components/
    Navbar.tsx            # Fixed nav with mobile drawer
    HeroSection.tsx       # Full-viewport cinematic hero
    PlayersSection.tsx    # Player card grid (8 cards)
    RankingsSection.tsx   # Leaderboard table with win-rate bars
    BracketSection.tsx    # QF → SF → Final bracket with connectors
    Footer.tsx
  data/
    gameData.ts           # All static content: players[], bracket[]
  routes/
    __root.tsx            # MUI ThemeProvider, Google Fonts, CssBaseline
    index.tsx             # "/" — assembles all sections
  styles.css              # CSS vars, keyframes, global resets
```

## Styling Conventions

- **MUI `sx` prop** is the primary styling mechanism throughout
- CSS custom properties in `styles.css` define design tokens (`--gold`, `--bg-void`, etc.)
- Keyframes (floatUp, particleDrift, borderPulse, fadeIn) live in `styles.css`
- `animationFillMode: 'forwards'` + `opacity: 0` is used for staggered entrance sequences

## MUI Theme

Defined in `src/routes/__root.tsx`. Sets dark mode, gold primary / purple secondary palette, Cinzel/Crimson Text fonts, and component overrides for Button, Card, TableCell. Update Google Fonts link in `head()` if adding new fonts.

## Data Model

Edit `src/data/gameData.ts` to change players or bracket state. `BracketMatch.status` drives visuals: `'completed'` | `'live'` | `'upcoming'`.

## Non-obvious Decisions

- **MUI Grid v2 API**: Uses `size={{ xs: 12, sm: 6, lg: 3 }}` (MUI v7 syntax)
- **Bracket connectors**: Absolute-positioned Box elements with CSS borders, not SVG
- **`src/data/products.ts`**: Scaffold leftover, unused but retained to avoid import errors

## Development Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
netlify dev      # Netlify local emulation at http://localhost:8888
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (TanStack Router) |
| Frontend | React 19 |
| UI Library | Material UI v7 + Emotion |
| Build | Vite 7 |
| Styling | MUI sx + Tailwind CSS 4 + CSS custom properties |
| Language | TypeScript |
| Deployment | Netlify |
