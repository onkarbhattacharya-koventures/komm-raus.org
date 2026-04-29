# Welle 2: Einsatzkräfte Glass-Redesign

Status: ✅ Abgeschlossen
Datum: 2026-02-22
Basierend auf: web/TODO-glass-redesign-rollout.md (Welle 2)

## Überarbeitete Seiten:
- [x] `einsatzkraefte.astro` - Hauptseite/Hub
- [x] `einsatzkraefte/team-resilienz.astro`
- [x] `einsatzkraefte/regeneration-praevention.astro`
- [x] `einsatzkraefte/nachwuchsfoerderung.astro`

## Durchgeführte Änderungen:

### 1. Imports hinzugefügt
- GlassPanel importiert
- SectionTeaserGrid importiert für Hub-Seite

### 2. Listen umgewandelt
- Alle `<ul class="list-disc pl-6 space-y-2">` → `<ul class="card-list">`
- `<ul class="list-decimal pl-6 space-y-2">` → `<ul class="card-list">`
- Inline-Styles für Listen entfernt

### 3. GlassPanel Wrapping
- Alle inhaltlichen Blöcke mit GlassPanel oder content-panel gewrappt
- IDs für Section-Anker hinzugefügt

### 4. SectionTeaserGrid
- Auf allen 4 Seiten implementiert mit passenden Bildern

## Qualitätscheck:
- ✅ Alle Seiten mit neuem Design
- ✅ Glass-Panels für Hauptinhalte
- ✅ card-list für Aufzählungen
- ✅ SectionTeaserGrid für Sprungnavigation
