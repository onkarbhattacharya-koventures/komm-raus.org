# IMAGE INTEGRATION MASTER PLAN
# PHASE 1: Global Master Plan

Status: 2026-02-22
Phase: 1 of 4

================================================================================
1. PAGE SCOPE
================================================================================

## 1.1 Top-Level Pages (10)
Process FIRST in this order:

| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | index | web/src/pages/index.astro |
| 2 | bildungseinrichtungen | web/src/pages/bildungseinrichtungen.astro |
| 3 | blaulicht | web/src/pages/blaulicht.astro |
| 4 | einsatzkraefte | web/src/pages/einsatzkraefte.astro |
| 5 | erlebnisse-kurse | web/src/pages/erlebnisse-kurse.astro |
| 6 | faq | web/src/pages/faq.astro |
| 7 | kontakt | web/src/pages/kontakt.astro |
| 8 | sitemap | web/src/pages/sitemap.astro |
| 9 | soil-to-table | web/src/pages/soil-to-table.astro |
| 10 | unternehmen | web/src/pages/unternehmen.astro |

## 1.2 Sub-Level Pages (40)
Process AFTER top-level pages:

### erlebnisse-kurse/ (10)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | adhs | web/src/pages/erlebnisse-kurse/adhs.astro |
| 2 | bewegung | web/src/pages/erlebnisse-kurse/bewegung.astro |
| 3 | bildungsreisen | web/src/pages/erlebnisse-kurse/bildungsreisen.astro |
| 4 | coaching-entwicklung | web/src/pages/erlebnisse-kurse/coaching-entwicklung.astro |
| 5 | kanu-tour | web/src/pages/erlebnisse-kurse/kanu-tour.astro |
| 6 | sprachreisen | web/src/pages/erlebnisse-kurse/sprachreisen.astro |
| 7 | waldbaden | web/src/pages/erlebnisse-kurse/waldbaden.astro |
| 8 | waldseilgarten-klettern | web/src/pages/erlebnisse-kurse/waldseilgarten-klettern.astro |
| 9 | wildkraeutertour | web/src/pages/erlebnisse-kurse/wildkraeutertour.astro |
| 10 | wildnis-naturhandwerk | web/src/pages/erlebnisse-kurse/wildnis-naturhandwerk.astro |

### einsatzkraefte/ (3)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | nachwuchsfoerderung | web/src/pages/einsatzkraefte/nachwuchsfoerderung.astro |
| 2 | regeneration-praevention | web/src/pages/einsatzkraefte/regeneration-praevention.astro |
| 3 | team-resilienz | web/src/pages/einsatzkraefte/team-resilienz.astro |

### unternehmen/ (5)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | assessment-center | web/src/pages/unternehmen/assessment-center.astro |
| 2 | csr | web/src/pages/unternehmen/csr.astro |
| 3 | leadership-management | web/src/pages/unternehmen/leadership-management.astro |
| 4 | manager-training | web/src/pages/unternehmen/manager-training.astro |
| 5 | teambuilding | web/src/pages/unternehmen/teambuilding.astro |

### bildungseinrichtungen/ (10)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | adhs-fokus-training | web/src/pages/bildungseinrichtungen/adhs-fokus-training.astro |
| 2 | fokus-und-konzentration | web/src/pages/bildungseinrichtungen/fokus-und-konzentration.astro |
| 3 | gruenes-klassenzimmer | web/src/pages/bildungseinrichtungen/gruenes-klassenzimmer.astro |
| 4 | hochbegabtenfoerderung | web/src/pages/bildungseinrichtungen/hochbegabtenfoerderung.astro |
| 5 | kindergaerten-eltern | web/src/pages/bildungseinrichtungen/kindergaerten-eltern.astro |
| 6 | klassenfahrten-projekttage | web/src/pages/bildungseinrichtungen/klassenfahrten-projekttage.astro |
| 7 | lehrerfortbildung | web/src/pages/bildungseinrichtungen/lehrerfortbildung.astro |
| 8 | meditation | web/src/pages/bildungseinrichtungen/meditation.astro |
| 9 | schulgarten | web/src/pages/bildungseinrichtungen/schulgarten.astro |
| 10 | teambuilding-schulklassen | web/src/pages/bildungseinrichtungen/teambuilding-schulklassen.astro |

### info-orga/ (8)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | faq | web/src/pages/info-orga/faq.astro |
| 2 | frageboegen | web/src/pages/info-orga/frageboegen.astro |
| 3 | glossar | web/src/pages/info-orga/glossar.astro |
| 4 | index | web/src/pages/info-orga/index.astro |
| 5 | sicherheitskonzept | web/src/pages/info-orga/sicherheitskonzept.astro |
| 6 | sitemap | web/src/pages/info-orga/sitemap.astro |
| 7 | ueber-uns | web/src/pages/info-orga/ueber-uns.astro |
| 8 | vordrucke | web/src/pages/info-orga/vordrucke.astro |

### kontakt/ (3)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | agb | web/src/pages/kontakt/agb.astro |
| 2 | datenschutz | web/src/pages/kontakt/datenschutz.astro |
| 3 | impressum | web/src/pages/kontakt/impressum.astro |

### download/ (1)
| # | Page Name | File Path |
|---|-----------|-----------|
| 1 | fragebogen-lehrer | web/src/pages/download/fragebogen-lehrer.astro |

================================================================================
2. IMAGE PLACEMENT RULES (BINDING)
================================================================================

## 2.1 Directory Structure with Fallback Logic
- ALL images are stored in: `web/public/bilder_nach_page/`
- For each page, the system uses a **fallback hierarchy**:

### Resolution Algorithm (Section 2.4 below)
- Level 1: Page-specific folder `bilder_nach_page/<parent>/<page>/`
- Level 2: Parent folder `bilder_nach_page/<parent>/`
- Level 3: Root folder `bilder_nach_page/`

### Examples:
- `index.astro` → Try: `bilder_nach_page/Startseite/` → Fallback: `bilder_nach_page/`
- `einsatzkraefte.astro` → Try: `bilder_nach_page/einsatzkraefte/` → Fallback: `bilder_nach_page/`
- `team-resilienz.astro` (parent: einsatzkraefte) → Try: `bilder_nach_page/einsatzkraefte/team-resilienz/` → Fallback: `bilder_nach_page/einsatzkraefte/` → Fallback: `bilder_nach_page/`

### CRITICAL RULES:
- **DO NOT create missing subfolders automatically**
- Always use parent directory as fallback if page-specific directory is missing
- Astro pages MUST reference ONLY optimized images from `/images/`

## 2.2 Section Image Rules
- EVERY content section with a headline must receive EXACTLY ONE image
- Remove ALL numbering from headlines (e.g., "1.", "2.", "a)", "b)")
- Hero section is exempt from this rule (handled separately)

## 2.3 Current Image Directory Status (with Fallback)
Existing directories in `web/public/bilder_nach_page/`:
- bildungseinrichtungen/
- download/
- einsatzkraefte/
- erlebnisse-kurse/
- kontakt/
- resilienzprotokoll/
- soil-to-table/
- Startseite/
- unternehmen/

### How Fallback Works (No Manual Creation Needed):
- Sub-pages like `einsatzkraefte/regeneration-praevention/` will automatically use `einsatzkraefte/` if their specific folder doesn't exist
- This eliminates the need to create folders like `blaulicht/`, `faq/`, `info-orga/`, `sitemap/` unless they have specific images
- The system gracefully falls back through the hierarchy: page → parent → root

**Summary:** Only create page-specific directories when you have images unique to that page. Otherwise, parent directory images will be used automatically.

================================================================================
## 2.4 Directory Resolution Algorithm (FALLBACK LOGIC)
================================================================================

This algorithm determines which directory to use for images:

### Step 1: Determine Page Hierarchy
- **Top-level pages** (e.g., `index.astro`, `einsatzkraefte.astro`):
  - Try: `bilder_nach_page/<page>/`
  - Fallback: `bilder_nach_page/`
  
- **Sub-pages** (e.g., `einsatzkraefte/team-resilienz.astro`):
  - Try: `bilder_nach_page/<parent>/<page>/`
  - Fallback: `bilder_nach_page/<parent>/`
  - Final fallback: `bilder_nach_page/`

### Step 2: Check Directory Existence
```
Algorithm: resolveImageDirectory(parent, page)

1. IF page is top-level (no parent):
   - path = `bilder_nach_page/${page}/`
   - IF directory exists(path):
     - RETURN path
   - ELSE:
     - RETURN `bilder_nach_page/` (root fallback)

2. IF page is sub-page:
   - path = `bilder_nach_page/${parent}/${page}/`
   - IF directory exists(path):
     - RETURN path
   - ELSE:
     - parentPath = `bilder_nach_page/${parent}/`
     - IF directory exists(parentPath):
       - RETURN parentPath
     - ELSE:
       - RETURN `bilder_nach_page/` (root fallback)
```

### Step 3: Practical Examples

| Page | Parent | Try First | Fallback 1 | Fallback 2 |
|------|--------|-----------|------------|------------|
| index.astro | - | Startseite/ | bilder_nach_page/ | - |
| einsatzkraefte.astro | - | einsatzkraefte/ | bilder_nach_page/ | - |
| regeneration-praevention.astro | einsatzkraefte | einsatzkraefte/regeneration-praevention/ | einsatzkraefte/ | bilder_nach_page/ |
| adhs.astro | erlebnisse-kurse | erlebnisse-kurse/adhs/ | erlebnisse-kurse/ | bilder_nach_page/ |
| nachwuchsfoerderung.astro | einsatzkraefte | einsatzkraefte/nachwuchsfoerderung/ | einsatzkraefte/ | bilder_nach_page/ |

### Step 4: Optimization Script Integration
The `optimize-images.js` script must implement this fallback logic:
- Scan all directories in `bilder_nach_page/`
- For each parent/child combination, check if child directory exists
- If child exists, process images from child
- If child doesn't exist but parent does, process images from parent
- Output all processed images to `/images/` with appropriate naming

### Step 5: Image Naming in /images/
When images are optimized:
- Use pattern: `<parent>-<page>-<section>.jpg` or `<parent>-<page>.jpg`
- For fallback images: use parent name only, e.g., `einsatzkraefte-teaser.jpg`
- This ensures images can be referenced consistently regardless of which level was used

### CRITICAL REMINDERS:
1. **DO NOT create missing subfolders automatically** - let fallback handle missing directories
2. **Always use parent directory as fallback** if page-specific directory is missing
3. **Astro pages reference /images/ only** - the fallback logic is for the optimization script
4. **If neither page-specific nor parent directory exists**, use root `bilder_nach_page/`

================================================================================
3. IMAGE SELECTION LOGIC
================================================================================

## 3.1 Priority Order (Highest to Lowest)
1. **Human Action** - People actively doing something relevant to the section
2. **Interaction** - Two or more people interacting in context
3. **Nature** - Natural environment, landscapes relevant to the topic
4. **Symbolic** - Abstract imagery representing the concept

## 3.2 Selection Criteria
- Image must match the headline meaning
- Image must support the core message of the section
- Avoid generic stock photos
- Prefer authentic, context-specific imagery

================================================================================
4. IMAGE OPTIMIZATION WORKFLOW (CORRECTED 2026-02-22)
================================================================================

## 4.1 Directory Structure - CORRECT UNDERSTANDING

### Source Images (Editorial Storage)
- **Location:** `web/public/bilder_nach_page/<page-name>/`
- **Purpose:** Store original high-resolution master images
- **Contains:** Full-resolution source images
- **Note:** These images are NOT used directly by the website

### Optimized Images (For Web)
- **Location:** `web/public/images/`
- **Purpose:** Optimized web versions for actual use
- **Generated by:** `web/scripts/optimize-images.js`
- **Outputs:** Creates versions at 250w, 400w, 800w, 1200w in both JPG and WebP
- **Note:** These are the ONLY images referenced by Astro pages

## 4.2 The CORRECT Workflow

### Step 1: Editors place original images into:
```
web/public/bilder_nach_page/<page-name>/
```

### Step 2: Run optimization script:
```
node web/scripts/optimize-images.js
```

### Step 3: The script processes images from:
- **INPUT:** `web/public/bilder_nach_page/`
- **OUTPUT:** `web/public/images/`

### Step 4: Astro pages must reference ONLY optimized images:
- **Correct:** `<img src="/images/example-800.webp">`
- **Incorrect:** `<img src="/bilder_nach_page/...">`

## 4.3 Absolute Rules (BINDING)

1. **Astro pages MUST NEVER reference `/bilder_nach_page/`**
2. **All production images MUST come from `/images/`**
3. **`/bilder_nach_page/` is editorial storage only**
4. **Image optimization script must use `/bilder_nach_page/` as input**
5. **`/assets/` must NOT be used for the image pipeline**

## 4.4 Reason

This architecture separates:

- **Editorial content** → Source images (`/bilder_nach_page/`)
- **Production assets** → Optimized images (`/images/`)

This guarantees:
- Consistent responsive images
- Smaller page weight
- Correct SEO image delivery
- Maintainable build pipeline

## 4.5 Responsive Images
- Mobile-first approach
- Desktop: no upscaling (use original or larger versions)
- Use srcset and sizes attributes

## 4.6 Required Attributes
```
html
<img 
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  src="image-800.jpg"
  alt="Descriptive alt text for SEO"
  loading="lazy"
  decoding="async"
/>
```

## 4.7 Lazy Loading
- ALL images below the fold must use `loading="lazy"`
- Hero images use `loading="eager"`

## 4.8 SEO Alt Text Requirements
- Describe the image content specifically
- Include relevant keywords naturally
- Max 125 characters
- Example: "Gruppe von Feuerwehrleuten beim Teambuilding im Waldseilgarten"

================================================================================
5. SEO FILE NAMING CONVENTIONS
================================================================================

## 5.1 Naming Rules
- ALL lowercase
- Words separated by hyphens (-)
- Descriptive, content-based names
- NO filler words (the, a, an, of, etc.)

## 5.2 Examples
Good: `feuerwehr-team-building-waldseilgarten.jpg`
Bad: `IMG_4829.jpg` or `team photo 2 final.jpg`

## 5.3 Allowed Modifications
- Images MAY be renamed to follow SEO conventions
- Document original filename for reference

================================================================================
6. RESILIENZPROTOKOLL - CONSISTENCY RULES
================================================================================

## 6.1 Overview
The Resilienzprotokoll appears on multiple pages and MUST be visually consistent.

## 6.2 Structure (9 Dimensions)
### Dimension 1 – Körper (Physical)
- Atmung
- Bewegung
- Ernährung
- Schlaf

### Dimension 2 – Innenwelt (Inner World)
- Denken / Geist
- Fühlen / Herz

### Dimension 3 – Außenwelt (Outer World)
- Verbindung
- Beziehung
- Natur
- Raum

## 6.3 Image Location
- Base path: `web/public/bilder_nach_page/resilienzprotokoll/`

## 6.4 Consistency Rules
- Use SAME core images per dimension across ALL pages
- Variants allowed ONLY as:
  - Crops
  - Perspective changes
- NO new image motifs allowed without approval

## 6.5 Affected Pages
- web/src/pages/einsatzkraefte/regeneration-praevention.astro
- web/src/pages/einsatzkraefte/team-resilienz.astro
- web/src/pages/einsatzkraefte/nachwuchsfoerderung.astro
- (Additional pages using Resilienzprotokoll)

================================================================================
7. PROCESSING ORDER
================================================================================

## 7.1 Wave 1: Top-Level Pages (10)
1. index
2. bildungseinrichtungen
3. blaulicht
4. einsatzkraefte
5. erlebnisse-kurse
6. faq
7. kontakt
8. sitemap
9. soil-to-table
10. unternehmen

## 7.2 Wave 2: erlebnisse-kurse/ (10)
In order as listed in section 1.2

## 7.3 Wave 3: einsatzkraefte/ (3)
In order as listed in section 1.2

## 7.4 Wave 4: unternehmen/ (5)
In order as listed in section 1.2

## 7.5 Wave 5: bildungseinrichtungen/ (10)
In order as listed in section 1.2

## 7.6 Wave 6: info-orga/ (8)
In order as listed in section 1.2

## 7.7 Wave 7: kontakt/ + download/ (4)
In order as listed in section 1.2

================================================================================
8. PHASE 1 COMPLETE - AWAITING INSTRUCTION FOR PHASE 2
================================================================================
