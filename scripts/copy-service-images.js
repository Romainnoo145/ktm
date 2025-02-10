const fs = require('fs').promises;
const path = require('path');

async function copyServiceImages() {
  const sourceDir = path.join(__dirname, '../public/images/projects');
  const targetDir = path.join(__dirname, '../public/images/services');

  // Ensure target directory exists
  await fs.mkdir(targetDir, { recursive: true });

  try {
    // Dakwerken - eerste foto met dak en steigers
    await fs.copyFile(
      path.join(sourceDir, 'dakrenovatie panningen/Project 4 (4).jpg'),
      path.join(targetDir, 'dakwerken.jpg')
    );

    // Timmerwerken - foto met houten constructie
    await fs.copyFile(
      path.join(sourceDir, 'timmerwerken maasbree/Project 1 (2).jpg'),
      path.join(targetDir, 'timmerwerken.jpg')
    );

    // Renovatie - foto met gevel en ramen
    await fs.copyFile(
      path.join(sourceDir, 'aanbouw maasbree/Project 8 (3).jpg'),
      path.join(targetDir, 'renovatie.jpg')
    );

    console.log('Service images copied successfully!');
  } catch (error) {
    console.error('Error copying service images:', error);
  }
}

copyServiceImages(); 