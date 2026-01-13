const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../public/assets');
const outDir = path.resolve(__dirname, '../public/images');
const widths = [400, 800, 1200];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));

async function processAll() {
  for (const file of files) {
    try {
      const name = path.parse(file).name.replace(/\s+/g, '-');
      const input = path.join(srcDir, file);
      for (const w of widths) {
        const outJpg = path.join(outDir, `${name}-${w}.jpg`);
        const outWebp = path.join(outDir, `${name}-${w}.webp`);
        await sharp(input).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpg);
        await sharp(input).resize({ width: w }).webp({ quality: 75 }).toFile(outWebp);
        console.log(`generated ${outJpg} and ${outWebp}`);
      }
    } catch (err) {
      console.warn(`Skipping ${file}: ${err.message}`);
      continue;
    }
  }
}

processAll().catch(err => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
