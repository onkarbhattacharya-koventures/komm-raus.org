# Content Integration Plan

## Ziel
Inhalte auf Unterseiten so integrieren, dass sie:
- gut scanbar sind,
- visuell konsistent mit bestehenden Seiten bleiben,
- ohne harte Kürzungen übernommen werden,
- keine Lesbarkeitsprobleme erzeugen (z. B. weiß auf weiß).

## Verbindliche Regeln

### 1) Struktur und Reihenfolge
- Originale Inhaltslogik beibehalten.
- Große Kapitel als `Section`-Blöcke aufbauen.
- Lange Unterkapitel in visuelle Einheiten aufteilen statt als Textwand.

### 2) Überschriften
- Keine numerischen Überschriften verwenden (`1.`, `2.1`, etc.).
- Klare, kurze H2/H3-Titel nutzen.
- Pro `Section` ein klarer thematischer Fokus.

### 3) Aufzählungen und Übersichtlichkeit
- Aufzählungen als Kartenlisten rendern: `<ul class="card-list">`.
- Komplexe Teilthemen als Kartenraster rendern: `<div class="cards-grid">` mit `<article class="card">`.
- Keine verschachtelten Bullet-Strukturen, wenn Kartenformat möglich ist.

### 4) Komponenten- und Layout-Konsistenz
- Seitenaufbau standardisiert:
  - `MainLayout`
  - `Hero`
  - `Section`
  - inhaltlich: `div.prose.max-w-none.content-panel`
- Kein erneutes Einführen von `GlassPanel` auf Seiten, die auf `content-panel` migriert wurden.

### 5) Lesbarkeit und Kontrast
- Standard-Text in `Section`-Inhalten dunkel halten (kein globales Weiß auf hellem Hintergrund).
- Kartenflächen nutzen, wenn Inhalte dicht sind.
- CTA-Bereich am Ende konsistent als eigener `Section`-Block.

### 6) Inhaltstreue
- Keine einschneidenden Kürzungen ohne explizite Freigabe.
- Inhalt primär umstrukturieren, nicht inhaltlich reduzieren.
- Formulierungen nur minimal sprachlich glätten, wenn nötig für UI-Klarheit.

### 7) Qualitätscheck vor Abschluss
- Prüfen: keine numerischen Headings mehr vorhanden.
- Prüfen: Listen konsequent `card-list` oder `cards-grid`.
- Prüfen: keine unerwünschten Komponenten-Rückfälle (z. B. `GlassPanel`).
- Prüfen: Kontrast/Lesbarkeit in Standard-Sections.

## Umsetzungsmuster (Kurz)

### Muster A: kurze Liste
- `h3`
- `<ul class="card-list"> ... </ul>`

### Muster B: komplexes Unterkapitel
- `h3`
- `<div class="cards-grid">`
- mehrere `<article class="card">` mit jeweils fokussiertem Teilaspekt

### Muster C: lange Seite
- Pro Hauptkapitel eine `Section`
- Unterkapitel als Kartenblöcke gruppieren
- Abschluss mit klarem CTA-Block
