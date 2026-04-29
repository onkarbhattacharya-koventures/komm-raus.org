# Build ENOSPC Fix Plan
## Status: In Progress

### Step 1: Create temp dir for videos ✓ Pending
`mkdir C:/temp-videos`

### Step 2: Move large MP4s out of public/ ✓ Pending
`cd web && Move-Item public/bilder_nach_page/erlebnisse-kurse/wildnis-naturhandwerk/*.mp4 C:/temp-videos/`

### Step 3: Clean dist/ ✓ Pending
`cd web && Remove-Item -Recurse -Force dist/`

### Step 4: Test build ✓ Pending
`cd web && npm run build`

### Step 5: Long-term video handling ✓ Pending
- Compress with ffmpeg
- External host
- Exclude from build

Updated after each step.

