# Wave 5 Image Integration Plan: bildungseinrichtungen/ (10 subpages)

Status: Planning
From masterplan 1.2:

1. adhs-fokus-training.astro
2. fokus-und-konzentration.astro 
3. gruenes-klassenzimmer.astro
4. hochbegabtenfoerderung.astro
5. kindergaerten-eltern.astro
6. klassenfahrten-projekttage.astro
7. lehrerfortbildung.astro
8. meditation.astro
9. schulgarten.astro
10. teambuilding-schulklassen.astro

## Status from search_files
Many /bilder_nach_page/ paths (fix to /images/), some /assets/, Cards in some.

## Images available
bilder_nach_page/bildungseinrichtungen/ has subdirs with relevant JPGs for each (e.g., adhs-fokus-training/kurs_fokus-*.jpg).

## Plan
- Fix Hero imagePath: /bilder_nach_page/ → /images/unternehmen-[page]-hero-800.jpg
- Cards/Sections: one image per headline, responsive <picture class="image-card">
- Run optimize-images.cjs before edits.

Next: Create breakdown TODO-wave5-plan-breakdown.md with steps.
