# TODO: Fix remaining Anfrage buttons

## Completed (11 files):
- [x] soil-to-table.astro ✅
- [x] waldseilgarten-klettern.astro ✅
- [x] adhs.astro ✅
- [x] bildungsreisen.astro ✅
- [x] bewegung.astro ✅
- [x] coaching-entwicklung.astro ✅
- [x] kanu-tour.astro ✅
- [x] sprachreisen.astro ✅ (bereits korrekt implementiert)
- [x] waldbaden.astro ✅ (bereits korrekt implementiert)
- [x] wildkraeutertour.astro ✅ (bereits korrekt implementiert)
- [x] wildnis-naturhandwerk.astro ✅ (bereits korrekt implementiert)

## Status: ALLE ABGESCHLOSSEN ✅

## Fix method:
Change from:
```
html
<script type="module">
  import { bindModalTrigger } from '../../scripts/content-enhancements.js';
  document.addEventListener('DOMContentLoaded', () => {
    bindModalTrigger('xxx-anfrage-button');
  });
</script>
```

To:
```
html
<script client:load>
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('xxx-anfrage-button');
    const modal = document.getElementById('anfrage-modal');

    if (button && modal) {
      button.addEventListener('click', () => {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
      });
    }
  });
</script>
