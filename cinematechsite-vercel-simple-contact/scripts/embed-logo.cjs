const fs = require('fs');
const path = require('path');

const dataFile = path.join(process.cwd(), 'data', 'cinematech_logo_datauri_full.txt');
const pageFile = path.join(process.cwd(), 'app', 'page.tsx');

if (!fs.existsSync(dataFile)) {
  console.error('[prepare-logo] Missing data/cinematech_logo_datauri_full.txt');
  process.exit(1);
}

const dataUri = fs.readFileSync(dataFile, 'utf8').trim();
if (!dataUri.startsWith('data:image/')) {
  console.error('[prepare-logo] The file does not start with a data:image/* URI');
  process.exit(1);
}

let page = fs.readFileSync(pageFile, 'utf8');
page = page.replace('data:image/jpeg;base64,REPLACE_WITH_FULL_BASE64_STRING', dataUri);
fs.writeFileSync(pageFile, page, 'utf8');

console.log('[prepare-logo] Embedded logo into app/page.tsx');
