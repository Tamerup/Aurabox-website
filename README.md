# Aurabox — Feel The Luxury.

A one-page luxury brand experience for Aurabox, built with Next.js 15 (App
Router), React 19, TypeScript, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Architecture

```
src/
  app/
    layout.tsx           Root layout: fonts, global SEO metadata
    page.tsx              Composes the one-page experience section by section
    globals.css            Design tokens (color/type theme) + reveal animation utilities
    icon.tsx                Generated favicon (next/og)
    opengraph-image.tsx     Generated OG/social share image (next/og)
    sitemap.ts / robots.ts  SEO routes
  components/
    layout/               Header (nav) and Footer, shared across the page
    sections/             One component per brand section (Hero, Manifesto,
                           Experience, Machine, Fragrances, Locations,
                           Partners, Instagram, Contact)
    ui/                   Small shared primitives (Button, Eyebrow)
  data/                    Typed content for fragrances, experiences,
                           locations and partner categories — edit these to
                           change copy without touching component markup
  hooks/
    useInView.ts           Lightweight IntersectionObserver hook powering
                           the scroll-reveal animations
  lib/
    utils.ts                `cn()` class-merging helper
```

### Animation strategy

Most scroll reveals are pure CSS transitions driven by `useInView` (a ~30
line IntersectionObserver hook) rather than a JS animation library — this
keeps the section components dependency-free and off the critical rendering
path, which matters a lot for mobile performance on an animation-heavy page.

Framer Motion and GSAP are both part of the stack, used only where a
lightweight CSS transition can't do the job, and both are kept out of the
initial JS bundle:

- **Framer Motion** powers the interactive location map's detail-panel
  transitions (`components/sections/Locations.tsx`). That component is
  loaded via `next/dynamic` in `app/page.tsx`, so Framer Motion ships in its
  own chunk instead of the main bundle.
- **GSAP** (`gsap` + `ScrollTrigger`) drives the scroll-linked parallax on
  the numerals in the Experience section (`components/sections/Experience.tsx`).
  It's imported dynamically inside a `useEffect`, so it loads and runs after
  hydration rather than blocking first paint.

All animation respects `prefers-reduced-motion`.

## Content

Copy for fragrances, locations, experience moments and partner categories
lives in `src/data/*.ts` as typed arrays — update those files to change what
renders without touching any component.

## Performance & quality

Audited with Lighthouse (desktop preset: 100/100/100/100; mobile,
simulated slow 4G + 4x CPU throttling: 95 performance / 100 accessibility /
100 best practices / 100 SEO).
