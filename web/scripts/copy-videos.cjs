const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../public/assets');
const outDir = path.resolve(__dirname, '../public/videos');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => /\.(mp4|webm|avi)$/i.test(f));

files.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(outDir, file);
  fs.copyFileSync(src, dest);
  console.log(`copied ${file} to videos/`);
});
