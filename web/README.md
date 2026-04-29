# komm-raus.org

Modern, accessible Astro site for **Komm Raus Erlebnispädagogik** with custom design system, advanced dropdown navigation, and optimized image pipeline (`/bilder_nach_page/` → `/images/`).

## Overview

Astro 5.16.9 TypeScript static site (~50 pages) targeting education (Bildungseinrichtungen), companies (Unternehmen), emergency services (Einsatzkräfte), experiences (Erlebnisse & Kurse), and org/info pages. Features responsive design, AOS animations, WCAG2AA accessibility, Sharp-optimized responsive images (JPG/WebP).

**Current Development**: Image integration masterplan Phases 1-3 ✅ complete (master plan + 50+ page TODOs created). Waves 1-3 fixed (e.g., einsatzkraefte paths), Wave 4 (unternehmen) hero updates done, Wave 5 (bildungseinrichtungen) active. See [TODO-image-integration-masterplan.md](TODO-image-integration-masterplan.md), [TODO-image-integration-current-wave.md](TODO-image-integration-current-wave.md).

Site: [https://komm-raus.org](https://komm-raus.org)

## Tech Stack

- **Framework**: Astro 5.16.9
- **Language**: TypeScript
- **Styling**: Custom design-system.css + utilities.css + global.css (Inter/Playfair fonts)
- **Animations**: AOS 2.3.4
- **Images**: Sharp 0.34.5 (optimize script generates srcset)
- **Accessibility**: pa11y 9.0.1 (WCAG2AA)
- **Build**: Vite, static dist/

## Project Structure

```
web/
├── src/
│   ├── components/     # Navigation.astro (complex dropdowns), Hero, Card, SectionTeaserGrid, etc.
│   ├── layouts/        # MainLayout.astro
│   ├── pages/          # ~50 pages
│   │   ├── index.astro
│   │   ├── bildungseinrichtungen/  # 10 subpages (adhs-fokus-training, gruenes-klassenzimmer, etc.)
│   │   ├── einsatzkraefte/         # 3 (nachwuchsfoerderung, etc.)
│   │   ├── erlebnisse-kurse/       # 10 (kanu-tour, waldbaden, etc.)
│   │   ├── unternehmen/            # 5 (leadership-management, teambuilding, etc.)
│   │   ├── info-orga/              # 8 (faq, ueber-uns, etc.)
│   │   ├── kontakt/                # 3 legal (agb, etc.)
│   │   ├── download/               # fragebogen-lehrer
│   │   ├── soil-to-table.astro     # Special BNE page
│   │   └── sitemap.astro
│   ├── lib/site.ts                 # Metadata (title, desc)
│   └── styles/
├── public/bilder_nach_page/        # Source images (editorial, by page/hub)
├── public/images/                  # Optimized output (run npm run images:optimize)
├── scripts/                        # optimize-images.cjs, a11y-run-all.mjs
├── astro.config.mjs
├── package.json
└── dist/                           # Build output
```

## Key Routes (from Navigation.astro)

**Main Nav**:
- `/` (Home)
- **Bildungseinrichtungen** → /bildungseinrichtungen + 10 subs (teambuilding-schulklassen, meditation, etc.)
- **Unternehmen** → /unternehmen + subs (leadership-management, assessment-center, csr)
- **Einsatzkräfte** → /einsatzkraefte + subs (team-resilienz, regeneration-praevention)
- **Erlebnisse** → /erlebnisse-kurse + 10 subs (waldseilgarten-klettern, kanu-tour, wildnis-naturhandwerk)
- **Info & Orga** → /info-orga + 8 subs (faq, sicherheitskonzept, ueber-uns)
- **Kontakt** → /kontakt + legal subs
- Special: /soil-to-table, /sitemap, /download/fragebogen-lehrer

Full list: See [WEBSITE_ARCHITECTURE.md](WEBSITE_ARCHITECTURE.md).

## Commands (cd web/ && ...)

| Command | Action |
|---------|--------|
| `npm run dev` | Dev server (localhost:4321) |
| `npm run images:optimize` | Optimize /bilder_nach_page/ → /images/ (JPG/WebP, responsive) |
| `npm run build` | Full build (optimize + astro build → dist/) |
| `npm run preview` | Preview dist/ |
| `npm run a11y:local` | Pa11y WCAG2AA on localhost:4321 |
| `npm run ci` | Optimize + build (CI-friendly) |

**Image Pipeline**: Place sources in `public/bilder_nach_page/<hub>/<page>/` (fallback: hub/root). Run `npm run images:optimize`. Pages reference `/images/<seo-name>.webp`.

## Deployment

1. `cd web && npm install` (once).
2. `npm run build` → `dist/`.
3. Upload `dist/` to host root (replace old).
4. Verify: `/`, hubs, Kontakt.
5. Update `src/lib/site.ts` + `astro.config.mjs` (base/site) if subfolder/domain changes, rebuild.

## Design System

`src/styles/design-system.css`: Colors (`--color-primary`), typography (modular scale), utilities (`.container`, `.grid-cols-*`, `.btn`, `.card`, `.hero-*`), responsive.

Example:
```astro
<Hero image="komm-raus-hero-800.webp" title="Welcome" />
<Section title="Features" image="feature-section.webp">
  Content with design-system classes.
</Section>
```

## Current Tasks (Image Integration Waves)

- **✅ Phases 1-3**: Masterplan, rules, all page TODOs created.
- **✅ Waves 1-3**: Top-level + einsatzkraefte fixed.
- **Active Wave 4/5**: unternehmen (leadership-management needs Glass redesign), bildungseinrichtungen (10 pages).
- Trackers: [TODO-image-integration-current-wave.md](TODO-image-integration-current-wave.md), [TODO-image-integration-page-level.md](TODO-image-integration-page-level.md).

## Accessibility & Performance

- **a11y**: pa11y WCAG2AA (`npm run a11y:local`).
- **Perf**: Lazy images, srcset, no JS bloat, static SSG.
- **Responsive**: Mobile-first nav (hamburger + sub-sections).

---
*Updated: Current state as of image Waves 4-5 (2026).*

