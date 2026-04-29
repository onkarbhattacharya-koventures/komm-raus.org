# RESILIENZPROTOKOLL - CONSISTENCY RULES
# PHASE 2: Resilienzprotokoll Integration

Status: 2026-02-22
Phase: 2 of 4

================================================================================
1. CONCEPT OVERVIEW
================================================================================

## 1.1 What is the Resilienzprotokoll?
The Resilienzprotokoll is a framework for building resilience across multiple dimensions of human experience. It appears on multiple pages throughout the website and MUST be visually consistent.

## 1.2 The 9 Dimensions

### Dimension 1 – Körper (Physical)
| German | English | Description |
|--------|---------|-------------|
| Atmung | Breathing | Conscious control of tension and relaxation |
| Bewegung | Movement | Physical activity for brain performance |
| Ernährung | Nutrition | Blood sugar, micronutrients, gut-brain axis |
| Schlaf | Sleep | Sleep architecture and recovery strategies |

### Dimension 2 – Innenwelt (Inner World)
| German | English | Description |
|--------|---------|-------------|
| Denken / Geist | Thinking / Mind | Growth mindset, error handling |
| Fühlen / Herz | Feeling / Heart | Emotion perception, dealing with perfectionism |

### Dimension 3 – Außenwelt (Outer World)
| German | English | Description |
|--------|---------|-------------|
| Verbindung | Connection | Self-regulation, internal resources |
| Beziehung | Relationship | Social connections, team dynamics |
| Natur | Nature | Nature experience as counterweight |
| Raum | Space | Environment, boundaries |

================================================================================
2. AFFECTED PAGES
================================================================================

## 2.1 Pages Using Resilienzprotokoll Elements

### Primary Pages (Full Implementation)
| Page | File Path | Dimensions Used |
|------|-----------|-----------------|
| Team-Resilienz | web/src/pages/einsatzkraefte/team-resilienz.astro | Team-focused |
| Regeneration & Prävention | web/src/pages/einsatzkraefte/regeneration-praevention.astro | All 9 dimensions |
| Nachwuchsförderung | web/src/pages/einsatzkraefte/nachwuchsfoerderung.astro | Youth-focused |
| Hochbegabtenförderung | web/src/pages/bildungseinrichtungen/hochbegabtenfoerderung.astro | 6-Säulen program |
| ADHS Fokus-Training | web/src/pages/bildungseinrichtungen/adhs-fokus-training.astro | Focus on body dimensions |
| Meditation & Achtsamkeit | web/src/pages/bildungseinrichtungen/meditation.astro | Mindfulness focus |
| Fokus und Konzentration | web/src/pages/bildungseinrichtungen/fokus-und-konzentration.astro | Educational focus |

### Secondary Pages (Partial Usage)
- web/src/pages/erlebnisse-kurse/adhs.astro
- web/src/pages/erlebnisse-kurse/bewegung.astro
- web/src/pages/erlebnisse-kurse/waldbaden.astro
- web/src/pages/unternehmen/manager-training.astro

================================================================================
3. IMAGE LOCATION STRUCTURE
================================================================================

## 3.1 Base Directory
```
web/public/bilder_nach_page/resilienzprotokoll/
```

## 3.2 Subdirectory Structure
```
resilienzprotokoll/
├── koerper/
│   ├── atmung/
│   ├── bewegung/
│   ├── ernaehrung/
│   └── schlaf/
├── innenwelt/
│   ├── denken/
│   └── fuehlen/
├── aussenwelt/
│   ├── verbindung/
│   ├── beziehung/
│   ├── natur/
│   └── raum/
└── _variants/
```

================================================================================
4. CONSISTENCY RULES (BINDING)
================================================================================

## 4.1 Core Image Rule
- Use the SAME core images per dimension across ALL pages
- A "core image" is the main, full-format version

## 4.2 Allowed Variants
Variants are ONLY permitted in these forms:
1. **Crops** - Different aspect ratios (square, portrait, landscape)
2. **Perspective Changes** - Different angles or viewpoints of the SAME subject

## 4.3 Forbidden Modifications
- NO new image motifs without explicit approval
- NO different subjects within the same dimension
- NO color grading variations as "variants"
- NO AI-generated alternatives

## 4.4 Dimension-to-Image Mapping (Required)
| Dimension | Core Image Subject | Priority |
|-----------|-------------------|----------|
| Atmung | Person doing breathing exercise | 1 |
| Bewegung | Person moving in nature | 1 |
| Ernährung | Healthy food/nature connection | 1 |
| Schlaf | Rest/recovery imagery | 1 |
| Denken | Person in focused thought | 1 |
| Fühlen | Emotional connection | 1 |
| Verbindung | Individual in nature | 1 |
| Beziehung | Two+ people interacting | 1 |
| Natur | Natural landscape | 1 |
| Raum | Environment/boundary | 2 |

## 4.5 Image Style Guidelines
- Authentic, not stock-photo style
- Natural lighting preferred
- Human subjects in context
- Warm, inviting tone
- Resolution: minimum 1200px width for originals

================================================================================
5. IMPLEMENTATION RULES
================================================================================

## 5.1 Image Path Convention
```
astro
<!-- Full dimension path -->
<img src="/bilder_nach_page/resilienzprotokoll/koerper/atmung/atmung-original.jpg" />

<!-- Variant usage -->
<img src="/bilder_nach_page/resilienzprotokoll/koerper/atmung/atmung-crop-square.jpg" />
```

## 5.2 Alt Text Convention
```
astro
<img 
  src="..."
  alt="Atmung: [specific description]" 
/>
```

## 5.3 Responsive Images
All core images must have:
- WebP and JPG versions
- srcset with 400w, 800w, 1200w sizes
- sizes attribute appropriate to context

================================================================================
6. CURRENT STATE ASSESSMENT (2026-02-22)
================================================================================

## 6.1 Directory Status
- `web/public/bilder_nach_page/resilienzprotokoll/` - **EXISTS BUT EMPTY**
- No images have been assigned yet

## 6.2 Current Image Sources by Page

### einsatzkraefte/team-resilienz.astro
Images currently used from:
- `/bilder nach page/einsatzkraefte/feuerwehr-stressresilienz-training-komm-raus.jpg`
- `/bilder nach page/einsatzkraefte/Befindlichkeitsindex_Resilienz.JPG`
- `/bilder nach page/einsatzkraefte/leiter-feuerwehr-vertrauen-komm-raus.jpg`
- `/bilder nach page/einsatzkraefte/vertikale-leiter-feuerwehr-teamtraining.jpg`
- `/bilder nach page/einsatzkraefte/kooperationstraining-feuerwehr-komm-raus.jpg`
- `/bilder nach page/einsatzkraefte/feuerwehr-laubfrosch-waldseilgarten.jpg`

### einsatzkraefte/regeneration-praevention.astro
Images currently used from:
- `/bilder nach page/einsatzkraefte/feuerwehr-stressresilienz-training-komm-raus.jpg`
- `/images/Leiterueberwindung-teamwork-400.jpg`
- `/images/kanu-fahren-400.jpg`
- `/images/Baumstamm-sortieren-Balance-400.jpg`
- `/images/Floß-bauen-Erlebnispädagogik-Teambuilding-400.jpg`
- `/images/Baumklettern-Seilaufstiegstechnik-400.jpg`
- `/images/internationale-schüler-austausch-kooperation-erlebnispädagogik-400.jpg`
- `/bilder nach page/einsatzkraefte/Reflexion-teamkreis-kommunikation.jpg`

### einsatzkraefte/nachwuchsfoerderung.astro
Images currently used from:
- `/images/internationale-schüler-austausch-kooperation-erlebnispädagogik-400.jpg`
- `/images/Leiterueberwindung-teamwork-400.jpg`
- `/images/kanu-fahren-400.jpg`
- `/images/Floß-bauen-Erlebnispädagogik-Teambuilding-400.jpg`
- `/images/Baumklettern-Seilaufstiegstechnik-400.jpg`
- `/bilder nach page/einsatzkraefte/leiter-feuerwehr-vertrauen-laubfrosch-wsg.jpg`
- `/bilder nach page/einsatzkraefte/feuerwehr-laubfrosch-waldseilgarten.jpg`
- `/bilder nach page/einsatzkraefte/vertikale-leiterueberwindung-laubfrosch.jpg`
- `/bilder nach page/einsatzkraefte/Reflexion-teamkreis-kommunikation.jpg`

## 6.3 Required Actions
1. [ ] Create subdirectory structure under resilienzprotokoll/
2. [ ] Source/assign core images for each of the 9 dimensions
3. [ ] Create variants as needed (crop-square, perspective changes)
4. [ ] Update affected pages to use consistent images from resilienzprotokoll/

## 6.4 Pages Requiring Updates
| Page | Current Image Sources | Migration Needed |
|------|----------------------|------------------|
| einsatzkraefte/team-resilienz.astro | einsatzkraefte/ folder | → resilienzprotokoll/ |
| einsatzkraefte/regeneration-praevention.astro | /images/ + einsatzkraefte/ | → resilienzprotokoll/ |
| einsatzkraefte/nachwuchsfoerderung.astro | /images/ + einsatzkraefte/ | → resilienzprotokoll/ |
| bildungseinrichtungen/hochbegabtenfoerderung.astro | None | Add from resilienzprotokoll/ |
| bildungseinrichtungen/meditation.astro | /images/ folder | → resilienzprotokoll/ |
| bildungseinrichtungen/adhs-fokus-training.astro | erlebnisse-kurse folder | Add from resilienzprotokoll/ |
| bildungseinrichtungen/fokus-und-konzentration.astro | erlebnisse-kurse folder | Add from resilienzprotokoll/ |

================================================================================
7. NAMING CONVENTIONS
================================================================================

## 7.1 File Naming
- lowercase
- hyphen-separated
- descriptive: `<dimension>-<variant-type>.jpg`
- Examples:
  - `atmung-original.jpg`
  - `atmung-crop-square.webp`
  - `bewegung-perspective-low.jpg`

## 7.2 Variant Suffixes
| Suffix | Meaning | Use Case |
|--------|---------|----------|
| `-original` | Full version | Hero sections, large displays |
| `-crop-square` | Square crop | Cards, teasers |
| `-crop-portrait` | Portrait crop | Sidebar, narrow spaces |
| `-crop-landscape` | Landscape crop | Wide banners |
| `-perspective-low` | Low angle | Dramatic effect |
| `-perspective-high` | High angle | Overview effect |
| `-thumb` | Thumbnail | Navigation, previews |

================================================================================
8. QUALITY REQUIREMENTS
================================================================================

## 8.1 Technical Requirements
- Minimum resolution: 1200px width (originals)
- Format: WebP primary, JPG fallback
- File size: < 200KB for web delivery
- Color space: sRGB

## 8.2 Content Requirements
- Authentic imagery (no obvious stock photos)
- Human subjects appropriately represented
- Diversity in subjects (age, gender where appropriate)
- Consistent visual style across all dimensions

================================================================================
9. APPROVAL WORKFLOW
================================================================================

## 9.1 For New Core Images
1. Propose image with rationale
2. Check dimension mapping
3. Verify no duplicate motifs
4. Get approval before implementation

## 9.2 For New Variants
1. Must use same core image as source
2. Document original filename
3. Apply only approved modifications (crop, perspective)

================================================================================
PHASE 2 STATUS: COMPLETE ✅
================================================================================

**Summary:**
- Rules and guidelines documented
- Directory structure defined
- Consistency rules established
- Current state assessed
- Pages requiring updates identified

**Next Step:** Awaiting instruction to proceed to PHASE 3 (page-level TODO lists)
