# Wave 4 Image Integration - Breakdown from Approved Plan

Status: In Progress
Current Working Directory: web/

## Steps from Approved Plan (Complete Sequentially)

### 1. [x] Fix teambuilding.astro Card imagePaths
- Replace /assets/ → /images/ with context-specific images from bilder_nach_page/unternehmen/teambuilding/
- 9 Cards: Zusammenarbeit, Fehlerkultur, Belastungserleben, 6 Zielgruppen cards

### 2. [x] Update TODO-wave4-current.md
- Mark teambuilding ✅
- Log progress

### 3. [x] Verify & Test
- node web/scripts/optimize-images.cjs (if needed)
- npx astro dev
- Check http://localhost:4322/unternehmen/teambuilding
- node web/scripts/a11y-run-all.mjs

### 4. [x] Next: leadership-management.astro sections
### 5. [ ] csr.astro complete
### 6. [ ] manager-training.astro complete
### 7. [ ] Wave 4 ✅ → Update masterplan trackers

**Next Action:** Step 4 - leadership-management.astro sections


