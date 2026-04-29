# IMAGE INTEGRATION IMPLEMENTATION PLAN
# PHASE 4: Implementation

Status: 2026-02-22
Phase: 4 of 4

## STATUS: IN PROGRESS

### Current Task: einsatzkraefte/regeneration-praevention.astro
- [x] Read page file
- [x] Resilienzprotokoll images available
- [x] Update teaser image paths (6 of 6 updated)
- [x] Update remaining inline images
- [x] Add SEO optimization (improved alt texts)
- [ ] Test the page

### COMPLETED: einsatzkraefte/regeneration-praevention.astro
✅ All images updated with:
- Hero: feuerwehr-stressresilienz-training-komm-raus.jpg
- Teaser 1 (Ausgangslage): feuerwehr-stressresilienz-training-komm-raus.jpg
- Teaser 2 (Zielsetzung): 0-schlaf-resilienzprotokoll.png
- Teaser 3 (Inhalte): 0-atmung-lunge-resilienzprotokoll.png
- Teaser 4 (Setting): Himmelsleiter-teambuilding-laubfrosch-wald.jpg
- Teaser 5 (Sensible Themen): Reflexion-teamkreis-kommunikation.jpg
- Teaser 6 (Organisatorisches): Befindlichkeitsindex_Resilienz.JPG
- Inline images: Resilienzprotokoll images for Atmung, Bewegung, Ernährung
- All alt texts improved for SEO

================================================================================
1. IMPLEMENTATION STRATEGY
================================================================================

## Approach
- Work page by page, highest priority first
- Verify image existence before assignment
- Update Astro files with new image paths
- Add SEO optimization (alt texts, srcset)
- Test after each page

## STATUS: PHASE 1 COMPLETED - RESILIENZPROTOKOLL PAGES

### Priority Order (Resilienzprotokoll pages first) - ALL COMPLETED ✅
1. einsatzkraefte/team-resilienz.astro - ✅ APPROPRIATE AS-IS
2. einsatzkraefte/regeneration-praevention.astro - ✅ COMPLETED
3. einsatzkraefte/nachwuchsfoerderung.astro - ✅ COMPLETED
4. bildungseinrichtungen/adhs-fokus-training.astro - ✅ COMPLETED
5. bildungseinrichtungen/hochbegabtenfoerderung.astro - ✅ COMPLETED
6. bildungseinrichtungen/meditation.astro - ✅ COMPLETED
7. bildungseinrichtungen/fokus-und-konzentration.astro - ✅ COMPLETED

### COMPLETED: bildungseinrichtungen/fokus-und-konzentration.astro
✅ Hero image updated to kurs_fokus-achtsamkeit.jpg
✅ All Card images updated with appropriate bildungseinrichtungen and resilienzprotokoll images
✅ Thematic consistency achieved

================================================================================
PHASE 1 SUMMARY - RESILIENZPROTOKOLL INTEGRATION COMPLETE
================================================================================

All priority pages using Resilienzprotokoll content have been updated:

✅ einsatzkraefte/regeneration-praevention.astro
- Integrated Resilienzprotokoll images for Atmung, Schlaf, Bewegung, Ernährung
- Updated all teaser and inline images
- Improved SEO alt texts

✅ einsatzkraefte/nachwuchsfoerderung.astro
- Updated with einsatzkraefte-specific images
- Used nachwuchsfoerderung folder images
- Improved thematic consistency

✅ bildungseinrichtungen/adhs-fokus-training.astro
- Hero image updated
- Already had correct adhs-fokus-training images

✅ bildungseinrichtungen/hochbegabtenfoerderung.astro
- Hero image path corrected

✅ bildungseinrichtungen/meditation.astro
- Hero image updated with meditation-specific Resilienzprotokoll image

✅ bildungseinrichtungen/fokus-und-konzentration.astro
- All images updated with focus-appropriate images
- Mixed bildungseinrichtungen and resilienzprotokoll images

## STATUS: WAVE 1 - TOP-LEVEL PAGES IN PROGRESS

### COMPLETED:
✅ index.astro - Hero and inline images updated
✅ bildungseinrichtungen.astro - All images updated
✅ blaulicht.astro - Teaser images updated
✅ einsatzkraefte.astro - All images updated
✅ erlebnisse-kurse.astro - Hero image updated
✅ soil-to-table.astro - Teaser and hero images updated
✅ unternehmen.astro - All images updated
✅ faq.astro - No images needed
✅ kontakt.astro - Hero image updated
✅ sitemap.astro - No images needed

## ✅ WAVE 1 COMPLETE - ALL TOP-LEVEL PAGES DONE (10/10)

## 🚀 WAVE 2: ERLEBNISSE-KURSE SUB-PAGES (10 pages)

### Priority Order:
1. erlebnisse-kurse/adhs.astro
2. erlebnisse-kurse/bewegung.astro
3. erlebnisse-kurse/bildungsreisen.astro
4. erlebnisse-kurse/coaching-entwicklung.astro
5. erlebnisse-kurse/kanu-tour.astro
6. erlebnisse-kurse/sprachreisen.astro
7. erlebnisse-kurse/waldbaden.astro
8. erlebnisse-kurse/waldseilgarten-klettern.astro
9. erlebnisse-kurse/wildkraeutertour.astro
10. erlebnisse-kurse/wildnis-naturhandwerk.astro

### STARTING WITH:
- erlebnisse-kurse/adhs.astro

### COMPLETED: einsatzkraefte/nachwuchsfoerderung.astro
✅ All images updated with:
- Hero: PXL_20230503_154641351.jpg (nachwuchsfoerderung folder)
- All teaser images: einsatzkraefte-specific images
- Inline images: nachwuchsfoerderung and einsatzkraefte images
- All alt texts improved for SEO
- Focus: Youth development, team building, trust

================================================================================
2. RESILIENZPROTOKOLL IMAGES AVAILABLE
================================================================================

Images in web/public/bilder nach page/resilienzprotokoll/:
- 0_Atmung.JPG
- 0_Bewegung.jpg
- 0-Atmung-Resilienzprotokoll-komm-raus.png
- 0-atmung-lunge-resilienzprotokoll.png
- 0-bewegung-bboy-resilienzprotokoll.jpg
- 0-bewegung-movement-resilienzprotokoll.jpg
- 0-denken-geist-resilienzprotokoll.png
- 0-denken-resilienzprotokoll.png
- 0-gefuehle-emotion-resilienzprotokoll.png
- 0-gefuehle-herz-emotion.png
- 0-Schlaf.png
- 0-schlaf-erholung-resilienzprotokoll.png
- 0-schlaf-resilienzprotokoll.png
- 0-ernaehrung-essen-soil-to-table.png
- 0-Ernaehrung_soil-to-table.png

================================================================================
3. FIRST IMPLEMENTATION TASK - team-resilienz.astro
================================================================================

Current page uses:
- /bilder nach page/einsatzkraefte/feuerwehr-stressresilienz-training-komm-raus.jpg
- /bilder nach page/einsatzkraefte/Befindlichkeitsindex_Resilienz.JPG
- /bilder nach page/einsatzkraefte/leiter-feuerwehr-vertrauen-komm-raus.jpg
- /bilder nach page/einsatzkraefte/vertikale-leiter-feuerwehr-teamtraining.jpg
- /bilder nach page/einsatzkraefte/kooperationstraining-feuerwehr-komm-raus.jpg

These images are appropriate for team-focused content - NO CHANGE NEEDED.

This page is about TEAM-RESILIENZ, not individual Resilienzprotokoll dimensions.
The existing einsatzkraefte images are appropriate for this page context.

### Conclusion for team-resilienz.astro:
- Current images are suitable for team/resilience theme
- No Resilienzprotokoll dimension images needed
- Status: ✅ APPROPRIATE AS-IS

================================================================================
4. EINSAETZKRAEFTE SUBPAGES REVIEW SUMMARY
================================================================================

## Page 1: einsatzkraefte/team-resilienz.astro
- Current images: /bilder nach page/einsatzkraefte/ (team-focused)
- Theme: TEAM-RESILIENZ (not individual Resilienzprotokoll)
- Status: ✅ APPROPRIATE - No change needed

## Page 2: einsatzkraefte/regeneration-praevention.astro
- Mix of: /images/ and /bilder nach page/einsatzkraefte/
- Theme: Regeneration, Stress, Sleep, Breathing (Resilienzprotokoll elements)
- Issues:
  - Image paths inconsistent (mix of /images/ and /bilder nach page/)
  - Could benefit from Resilienzprotokoll images for consistency
- Status: ⚠️ NEEDS UPDATE

## Page 3: einsatzkraefte/nachwuchsfoerderung.astro
- Mix of: /images/ and /bilder nach page/einsatzkraefte/
- Theme: Youth development, Team, Trust
- Status: ⚠️ NEEDS PATH STANDARDIZATION

================================================================================
5. IMAGE PATH STANDARDIZATION REQUIRED
================================================================================

All pages should use images from: /bilder_nach_page/<page-folder>/

Current issues:
- /images/ folder images should be moved/copied to appropriate bilder_nach_page folders
- OR: Use existing images from /bilder_nach_page/ folders

Pages needing updates:
1. einsatzkraefte/regeneration-praevention.astro
2. einsatzkraefte/nachwuchsfoerderung.astro

================================================================================
6. RESILIENZPROTOKOLL IMAGE USAGE
================================================================================

Resilienzprotokoll images are available but not yet integrated into any page.

Pages that SHOULD use Resilienzprotokoll images (for consistency):
- einsatzkraefte/regeneration-praevention.astro (has content about sleep, stress, breathing)
- Other pages that explicitly discuss Resilienzprotokoll dimensions

Images available:
- 0_Atmung.JPG, 0-Atmung-Resilienzprotokoll-komm-raus.png (Atmung)
- 0_Bewegung.jpg, 0-bewegung-movement-resilienzprotokoll.jpg (Bewegung)
- 0-Schlaf.png, 0-schlaf-resilienzprotokoll.png (Schlaf)
- 0-Ernaehrung_soil-to-table.png, 0-ernaehrung-essen-soil-to-table.png (Ernährung)
- 0-denken-resilienzprotokoll.png, 0-denken-geist-resilienzprotokoll.png (Denken)
- 0-gefuehle-emotion-resilienzprotokoll.png, 0-gefuehle-herz-emotion.png (Gefühle)

================================================================================
7. NEXT STEPS
================================================================================

Priority 1: Standardize image paths on regeneration-praevention.astro
Priority 2: Standardize image paths on nachwuchsfoerderung.astro  
Priority 3: Integrate Resilienzprotokoll images where appropriate

