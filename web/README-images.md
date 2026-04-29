# Image Optimization - komm-raus.org

## Current State

- **Directory**: `web/public/images`
- **Files**: 143
- **Base image sets**: 24
- **Originals still kept**: `Baumstamm-sortieren-Balance.jpg`, `lagerfeuer-bg.jpg`, `Leiterueberwindung-teamwork.jpg`
- **Derivatives**: 400, 800, 1200 widths in JPG + WebP

## Base Image Sets (Present in `public/images`)

- Baumklettern-Seilaufstiegstechnik
- Baumstamm-sortieren-Balance
- Feuer-machen-bowdrill-set
- Floß-bauen-Erlebnispädagogik-Teambuilding
- internationale-schüler-austausch-kooperation-erlebnispädagogik
- internationale-schüler-austausch-kooperation-erlebnispädagogik-2
- internationale-schüler-austausch-kooperation-erlebnispädagogik-3
- kanu-fahren
- kanu-fahren-1
- konzept_koop_240px
- konzept_team_240px
- konzept_toprope_240px
- kurs_naturwanderung
- kurs_taschenmesser
- lagerfeuer-bg
- Leiterueberwindung-teamwork
- logo_laubfrosch
- maedchen-hände-erdbeere
- parkplatz_small2
- prog_firmen_400
- prog_fobi_400
- prog_kindergeb_400
- prog_schule_400
- Rätsel-Rally-geocaching-schnitzeljagd

## Referenced in Code

These bases are referenced from `web/src/**/*.astro`:
- AAT-Baumstamm-PXL_20240511_105736043
- Baumklettern-Seilaufstiegstechnik
- Baumstamm-sortieren-Balance
- Feuer-machen-bowdrill-set
- Floß-bauen-Erlebnispädagogik-Teambuilding
- himmelsleiter
- hoehenrettung-blaulicht-polizei-feuerwehr
- internationale-schüler-austausch-kooperation-erlebnispädagogik
- kanu-fahren
- konzept_koop_240px
- konzept_team_240px
- konzept_toprope_240px
- kurs_naturwanderung
- kurs_taschenmesser
- lagerfeuer-bg
- Leiterueberwindung-teamwork
- Lions-
- logo_laubfrosch
- maedchen-hände-erdbeere
- parkplatz_small2
- prog_firmen_400
- prog_fobi_400
- prog_kindergeb_400
- prog_schule_400
- Rätsel-Rally-geocaching-schnitzeljagd
- Reflexion

Missing assets (referenced but not present in `public/images`):
- AAT-Baumstamm-PXL_20240511_105736043
- himmelsleiter
- hoehenrettung-blaulicht-polizei-feuerwehr
- Lions-
- Reflexion

## Optimization Scripts

- `scripts/optimize-images.cjs` - Main image processor

Supported formats:
- **Input**: JPG, PNG, GIF, BMP, TIFF
- **Output**: JPG + WebP
- **Sizes**: 400px, 800px, 1200px widths

## Usage in Components

Picture element (recommended):
```astro
<picture>
  <source
    type="image/webp"
    srcset="/images/lagerfeuer-bg-400.webp 400w, /images/lagerfeuer-bg-800.webp 800w, /images/lagerfeuer-bg-1200.webp 1200w"
  />
  <img
    src="/images/lagerfeuer-bg-400.jpg"
    srcset="/images/lagerfeuer-bg-400.jpg 400w, /images/lagerfeuer-bg-800.jpg 800w, /images/lagerfeuer-bg-1200.jpg 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    alt="Lagerfeuer"
    loading="lazy"
    class="strip-image"
  />
</picture>
```

Simple image:
```astro
<img
  src="/images/logo_laubfrosch-400.jpg"
  srcset="/images/logo_laubfrosch-400.jpg 400w, /images/logo_laubfrosch-800.jpg 800w"
  alt="Laubfrosch Logo"
  class="rounded-full"
  loading="lazy"
/>
```

## Build Process

Commands:
```bash
npm run images:optimize
npm run assets:optimize
npm run build
```

Automation:
- Images are optimized during `npm run build`
- WebP versions created for modern browsers
- Multiple sizes generated for responsive design
- Original aspect ratios preserved
