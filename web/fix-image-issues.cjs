const fs = require('fs');
const path = require('path');

// Configuration
const PAGES_DIR = path.resolve(__dirname, 'src/pages');

// Common fixes to apply
const fixes = [
  // Fix 1: Remove numbered headlines (1., 2., etc. at start of h2/h3)
  {
    name: 'Remove numbered headlines',
    regex: /<h[23]>([0-9]+\.\s+)/g,
    replacement: '<h3>'
  },
  
  // Fix 2: Fix Hero image attribute - change image="xxx" to imagePath="/images/xxx.jpg"
  {
    name: 'Fix Hero image attribute',
    regex: /image="([^"]+)"/g,
    replacement: (match, p1) => {
      // If it's already a proper path, keep it
      if (p1.startsWith('/') && !p1.includes('-bg')) {
        return match;
      }
      // Convert bg names to proper paths
      const imageMap = {
        'lagerfeuer-bg': '/assets/Waldseilgarten-Laubfrosch-Buedingen-Klettergarten.jpg',
        'wald-bg': '/assets/Waldseilgarten-Laubfrosch-Buedingen-Klettergarten.jpg',
        'feuer-bg': '/assets/feuer-machen-bowdrill.jpg'
      };
      const newPath = imageMap[p1] || `/assets/${p1}.jpg`;
      return `imagePath="${newPath}"`;
    }
  },
  
  // Fix 3: Fix Card image attribute - change image="xxx" to image="/bilder_nach_page/..."
  {
    name: 'Fix Card image attribute - convert short names to paths',
    regex: /image="([^"/][^"]+)"/g,
    replacement: (match, p1) => {
      // Skip if already has path
      if (p1.includes('/') || p1.startsWith('/')) {
        return match;
      }
      // Convert short names to bilder_nach_page paths (these need manual verification)
      return `image="/bilder_nach_page/erlebnisse-kurse/${p1}"`;
    }
  }
];

// Recursively find all .astro files
function findAstroFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findAstroFiles(fullPath));
    } else if (entry.name.endsWith('.astro')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Apply fixes to a single file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const fix of fixes) {
    const original = content;
    content = content.replace(fix.regex, fix.replacement);
    if (content !== original) {
      changed = true;
      console.log(`  ✓ ${fix.name}`);
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

// Main execution
console.log('🔧 Starting batch image fix...\n');

const astroFiles = findAstroFiles(PAGES_DIR);
console.log(`Found ${astroFiles.length} .astro files\n`);

let fixedCount = 0;
let processedCount = 0;

for (const file of astroFiles) {
  processedCount++;
  const relativePath = path.relative(PAGES_DIR, file);
  
  if (fixFile(file)) {
    console.log(`✅ Fixed: ${relativePath}`);
    fixedCount++;
  }
}

console.log(`\n📊 Summary:`);
console.log(`  Processed: ${processedCount} files`);
console.log(`  Fixed: ${fixedCount} files`);
console.log(`\n✨ Batch fix complete!`);
