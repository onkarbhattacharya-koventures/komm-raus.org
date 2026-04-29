# IMAGE INTEGRATION WAVE 4: unternehmen/ pages

Status: Pending
Pages:
1. web/src/pages/unternehmen/assessment-center.astro
2. web/src/pages/unternehmen/csr.astro 
3. web/src/pages/unternehmen/leadership-management.astro (hero done, add section images)
4. web/src/pages/unternehmen/manager-training.astro
5. web/src/pages/unternehmen/teambuilding.astro

Rules: One image per content section headline from bilder_nach_page/unternehmen/ or fallback.
Fix any /bilder_nach_page/ to /images/.

Steps:
1. [ ] Run list_files web/public/bilder_nach_page/unternehmen recursive
2. [ ] search_files ./web/src/pages/unternehmen for img src to check status
3. [ ] Add/fix images per page
4. [ ] Update TODOs

Next after: Wave 5 bildungseinrichtungen/
