# Fix Accordion Visibility Issue

## Problem
Images in accordion sections remain visible when the accordion is collapsed because the HTML structure places the h2 inside a grid layout, causing the accordion script to not include all content in the collapsible part.

## Tasks
- [x] Move the h2 "Pädagogischer Ansatz & Sicherheit" outside the grid div in bildungseinrichtungen.astro
- [x] Verify that the picture in that section is now hidden when collapsed
- [x] Check other sections for similar issues (e.g., "Bilder aus unseren Programmen")
- [x] Test the accordion functionality on the page

## Files to Edit
- web/src/pages/bildungseinrichtungen.astro
