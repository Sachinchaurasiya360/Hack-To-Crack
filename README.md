# Hack to Crack 3.0 — Landing Page

A premium, editorial landing page for the Hack to Crack 3.0 hackathon — a 36-hour
hybrid event by Vishwaniketan iMEET.

Built from first principles as a marketing site for a world-class technology event:
minimal, typographic, and light-theme only. The design language is an "event datasheet" —
hairline rules, monospace data labels, a live countdown, and a single restrained forest-green accent.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** build tooling
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** for premium, restrained motion
- **Lucide React** + **React Icons** for iconography
- Typography: **Inter** (display/body) + **JetBrains Mono** (data/labels)

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # type-check and build for production
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/
    layout/        # Navbar, Footer, Logo
    sections/      # Hero, About, Tracks, Prizes, Timeline, FAQ, CTA, …
    ui/            # Container, Button, Counter, Countdown, SectionHeader, …
  constants/       # site.ts + content.ts — the single source of content
  hooks/           # useCountdown, useMediaQuery
  lib/             # motion variants + utilities
  types/           # shared TypeScript types
```

## Editing content

All copy, dates, prizes, tracks, and FAQs live in `src/constants/`. Update
`site.ts` (identity, dates, links) and `content.ts` (sections) — no component
changes required.

> **Note:** the event date in `site.ts` (`startsAtISO` / `dateLabel`) is a
> placeholder that keeps the countdown live. Replace it with the official
> kickoff moment once announced.

## Legacy site

The previous static HTML site is archived under [`legacy/`](legacy/) for reference.

## License

MIT. Original concept by Sachin Chaurasiya.
