const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 80;
const MAX_WIDTH = 1920;
const THUMB_WIDTH = 800;

const SOURCE_DIR = path.join(__dirname, '../public/images/temp');
const TARGET_DIRS = {
  hero: path.join(__dirname, '../public/images/hero'),
  services: path.join(__dirname, '../public/images/services'),
  'villa-maasbree': path.join(__dirname, '../public/images/projects/villa-maasbree'),
  'kantoor-venlo': path.join(__dirname, '../public/images/projects/kantoor-venlo'),
  'interieur-roermond': path.join(__dirname, '../public/images/projects/interieur-roermond')
};

async function ensureDirectories() {
  for (const dir of Object.values(TARGET_DIRS)) {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(sourcePath, targetPath, width) {
  await sharp(sourcePath)
    .resize(width, null, { 
      fit: 'inside',
      withoutEnlargement: true 
    })
    .jpeg({ 
      quality: QUALITY,
      progressive: true 
    })
    .toFile(targetPath);
}

function getProjectFromFilename(filename) {
  // Extract project info from filename
  // Example: "villa-maasbree-exterieur.jpg" -> "villa-maasbree"
  const match = filename.match(/^([a-z-]+)-/);
  if (match && TARGET_DIRS[match[1]]) {
    return match[1];
  }
  
  // Default to hero for non-project images
  return 'hero';
}

async function processImages() {
  await ensureDirectories();
  
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') ||
    file.toLowerCase().endsWith('.png')
  );
  
  for (const file of imageFiles) {
    const sourcePath = path.join(SOURCE_DIR, file);
    const project = getProjectFromFilename(file);
    const targetPath = path.join(TARGET_DIRS[project], file);
    
    // Optimize and save
    await optimizeImage(sourcePath, targetPath, 
      project === 'hero' ? MAX_WIDTH : THUMB_WIDTH);
    
    console.log(`Processed: ${file} -> ${project}/${file}`);
  }
}

processImages().catch(console.error); 