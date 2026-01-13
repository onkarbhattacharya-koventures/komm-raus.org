Image optimization notes

- Sample images folder: `public/images/` (contains `lagerfeuer-bg.jpg`)
- Recommended pipeline:
  - use `sharp` to convert to WebP/AVIF and generate multiple sizes
  - create `scripts/optimize-images.js` that walks `web/public/images` and outputs to `web/public/images/optimized` with filenames containing width
  - generate `srcset` and `sizes` for responsive images
- Example npm scripts to add to `package.json`:
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js"
  }

- Consider adding `@astrojs/image` or using `astro-imagetools` for runtime image transforms during build.

Sample sharp script (conceptual):

const sharp = require('sharp');
// iterate files and run sharp(file).resize(800).toFile(output)

