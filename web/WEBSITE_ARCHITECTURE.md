# Website Architecture Mapping - komm-raus.org

## Overview

This document maps the current Astro site structure as implemented in `web/src/pages` and the navigation defined in `web/src/components/Navigation.astro` (state as of February 6, 2026).

## Primary Navigation

Desktop navigation items:
- **Home** (`/`)
- **Über uns** (`/about`)
- **Angebote** (dropdown)
- **Zielgruppen** (dropdown)
- **Assessment** (`/assessment`)
- **Kontakt** (`/kontakt`)

## Route Map (Astro Pages)

Top-level pages:
- `/`
- `/about`
- `/angebote`
- `/assessment`
- `/kontakt`
- `/zielgruppen`
- `/blaulicht`
- `/adhs`
- `/schule`

Angebote:
- `/angebote/teambuilding`
- `/angebote/vertrauen`
- `/angebote/stressresilienz`
- `/angebote/konzentration`
- `/angebote/train-the-trainer`
- `/angebote/survival-bushcraft`
- `/angebote/kanutour`
- `/angebote/wildkraeutertour`
- `/angebote/intuitives-bogen-schiessen`
- `/angebote/stockfechten`
- `/angebote/gruenes-klassenzimmer`
- `/angebote/klassenfahrt`
- `/angebote/spass-feiern`
- `/angebote/eins-zu-eins`

Zielgruppen:
- `/zielgruppen/schule`
- `/zielgruppen/kindergarten`
- `/zielgruppen/unternehmen`
- `/zielgruppen/unternehmen/assessment-center`
- `/zielgruppen/unternehmen/manager-training`
- `/zielgruppen/unternehmen/csr`
- `/zielgruppen/vereine`
- `/zielgruppen/adhs`
- `/zielgruppen/eins-zu-eins`

Kontakt and legal:
- `/kontakt`
- `/kontakt/agb`
- `/kontakt/datenschutz`
- `/kontakt/impressum`

Downloads:
- `/download/fragebogen-lehrer`

## Source Tree (`web/src/pages`)

```
pages/
├── about.astro
├── adhs.astro
├── angebote.astro
├── assessment.astro
├── blaulicht.astro
├── index.astro
├── kontakt.astro
├── schule.astro
├── zielgruppen.astro
├── angebote/
│   ├── eins-zu-eins.astro
│   ├── gruenes-klassenzimmer.astro
│   ├── intuitives-bogen-schiessen.astro
│   ├── kanutour.astro
│   ├── klassenfahrt.astro
│   ├── konzentration.astro
│   ├── spass-feiern.astro
│   ├── stockfechten.astro
│   ├── stressresilienz.astro
│   ├── survival-bushcraft.astro
│   ├── teambuilding.astro
│   ├── train-the-trainer.astro
│   ├── vertrauen.astro
│   └── wildkraeutertour.astro
├── download/
│   └── fragebogen-lehrer.astro
├── kontakt/
│   ├── agb.astro
│   ├── datenschutz.astro
│   └── impressum.astro
└── zielgruppen/
    ├── adhs.astro
    ├── eins-zu-eins.astro
    ├── kindergarten.astro
    ├── schule.astro
    ├── unternehmen.astro
    ├── vereine.astro
    └── unternehmen/
        ├── assessment-center.astro
        ├── csr.astro
        └── manager-training.astro
```

## Navigation Notes

- The navigation points to `/blaulicht` as a top-level page, not a nested Zielgruppen route.
- Top-level routes `/adhs` and `/schule` exist alongside the nested Zielgruppen pages.
- The crawler output is stored at `web/scripts/website_architecture.json` for reference.
