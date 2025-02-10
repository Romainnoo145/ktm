const fs = require('fs').promises;
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../public/images/projects');
const PROJECT_DIRS = [
  'aanbouw maasbree',
  'dakrenovatie tegelen',
  'dakrenovatie panningen',
  'draagconstructie dakwerken',
  'timmerwerken maasbree',
  'renovatie-venlo',
  'nieuwbouw-roermond'
];

async function ensureDirectories() {
  for (const dir of PROJECT_DIRS) {
    const fullPath = path.join(SOURCE_DIR, dir);
    await fs.mkdir(fullPath, { recursive: true });
  }
}

async function moveAndRenameFiles() {
  // Get all files in the source directory
  const files = await fs.readdir(SOURCE_DIR);
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') ||
    file.toLowerCase().endsWith('.png')
  );

  // Group files by project number
  const projectGroups = {};
  for (const file of imageFiles) {
    const match = file.match(/Project (\d+)/);
    if (match) {
      const projectNum = match[1];
      if (!projectGroups[projectNum]) {
        projectGroups[projectNum] = [];
      }
      projectGroups[projectNum].push(file);
    }
  }

  // Map project numbers to directories
  const projectMapping = {
    '1': 'dakrenovatie panningen',
    '2': 'timmerwerken maasbree',
    '3': 'aanbouw maasbree',
    '4': 'dakrenovatie panningen',
    '5': 'dakrenovatie tegelen',
    '6': 'renovatie-venlo',
    '8': 'aanbouw maasbree',
    '9': 'nieuwbouw-roermond'
  };

  // Move and rename files
  for (const [projectNum, files] of Object.entries(projectGroups)) {
    const targetDir = projectMapping[projectNum];
    if (!targetDir) continue;

    for (let i = 0; i < files.length; i++) {
      const oldPath = path.join(SOURCE_DIR, files[i]);
      const newPath = path.join(SOURCE_DIR, targetDir, `${i + 1}.jpg`);
      
      try {
        await fs.rename(oldPath, newPath);
        console.log(`Moved: ${files[i]} -> ${targetDir}/${i + 1}.jpg`);
      } catch (error) {
        console.error(`Error moving ${files[i]}: ${error.message}`);
      }
    }
  }
}

async function main() {
  try {
    await ensureDirectories();
    await moveAndRenameFiles();
    console.log('Project images organization completed successfully!');
  } catch (error) {
    console.error('Error organizing project images:', error);
  }
}

main(); 