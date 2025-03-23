import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

const sourceImage = path.join(__dirname, '../src/assets/favicon.png');
const outputDir = path.join(__dirname, '../public/favicon');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate PNG files
async function generateFavicons() {
  try {
    // Generate all PNG sizes
    await Promise.all(sizes.map(async ({ size, name }) => {
      await sharp(sourceImage)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, name));
      console.log(`Generated ${name}`);
    }));

    // Generate ICO file (combines 16x16, 32x32, and 48x48)
    await sharp(sourceImage)
      .resize(48, 48)
      .toFile(path.join(outputDir, 'temp-48x48.png'));

    // Create ICO file using the 32x32 version (most common size)
    await sharp(path.join(outputDir, 'favicon-32x32.png'))
      .toFile(path.join(outputDir, 'favicon.ico'));

    // Clean up temporary file
    fs.unlinkSync(path.join(outputDir, 'temp-48x48.png'));

    console.log('Generated favicon.ico');
    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 