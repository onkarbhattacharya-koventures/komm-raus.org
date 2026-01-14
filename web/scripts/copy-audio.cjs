const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../public/assets');
const outDir = path.resolve(__dirname, '../public/audio');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.(mp3|wav|ogg)$/i.test(f));

files.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(outDir, file);
  fs.copyFileSync(src, dest);
  console.log(`copied ${file} to audio/`);
});
