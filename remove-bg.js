import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function removeBackground(inputPath, outputPath, options = {}) {
  const { threshold = 238, feather = 4, edgeThreshold = 210 } = options;
  
  console.log(`Processing: ${inputPath} -> ${outputPath}`);
  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  
  // Get raw RGBA buffer
  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  const outputBuffer = Buffer.alloc(width * height * 4);

  // We perform smart background mask extraction
  // Seed flood-fill or edge-aware background classification
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Helper to get pixel index
  const getIdx = (x, y) => y * width + x;

  // Add border pixels to start floodfill if they are bright white/light
  for (let x = 0; x < width; x++) {
    const idxTop = getIdx(x, 0);
    const rT = rawBuffer[idxTop * 4];
    const gT = rawBuffer[idxTop * 4 + 1];
    const bT = rawBuffer[idxTop * 4 + 2];
    if (rT >= threshold && gT >= threshold && bT >= threshold) {
      isBg[idxTop] = 1;
      queue.push([x, 0]);
    }

    const idxBottom = getIdx(x, height - 1);
    const rB = rawBuffer[idxBottom * 4];
    const gB = rawBuffer[idxBottom * 4 + 1];
    const bB = rawBuffer[idxBottom * 4 + 2];
    if (rB >= threshold && gB >= threshold && bB >= threshold) {
      isBg[idxBottom] = 1;
      queue.push([x, height - 1]);
    }
  }

  for (let y = 0; y < height; y++) {
    const idxLeft = getIdx(0, y);
    const rL = rawBuffer[idxLeft * 4];
    const gL = rawBuffer[idxLeft * 4 + 1];
    const bL = rawBuffer[idxLeft * 4 + 2];
    if (rL >= threshold && gL >= threshold && bL >= threshold) {
      isBg[idxLeft] = 1;
      queue.push([0, y]);
    }

    const idxRight = getIdx(width - 1, y);
    const rR = rawBuffer[idxRight * 4];
    const gR = rawBuffer[idxRight * 4 + 1];
    const bR = rawBuffer[idxRight * 4 + 2];
    if (rR >= threshold && gR >= threshold && bR >= threshold) {
      isBg[idxRight] = 1;
      queue.push([width - 1, y]);
    }
  }

  // Flood fill connected background components
  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = getIdx(nx, ny);
        if (!isBg[nIdx]) {
          const r = rawBuffer[nIdx * 4];
          const g = rawBuffer[nIdx * 4 + 1];
          const b = rawBuffer[nIdx * 4 + 2];

          // Check if it's near-white background
          if (r >= edgeThreshold && g >= edgeThreshold && b >= edgeThreshold) {
            isBg[nIdx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Write output pixels with smooth alpha anti-aliasing
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = getIdx(x, y);
      const byteIdx = idx * 4;

      const r = rawBuffer[byteIdx];
      const g = rawBuffer[byteIdx + 1];
      const b = rawBuffer[byteIdx + 2];

      if (isBg[idx]) {
        // Transparent pixel
        outputBuffer[byteIdx] = r;
        outputBuffer[byteIdx + 1] = g;
        outputBuffer[byteIdx + 2] = b;
        outputBuffer[byteIdx + 3] = 0;
      } else {
        // Check distance to background for soft anti-aliased edge
        let minBgDist = 999;
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[getIdx(nx, ny)]) {
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < minBgDist) minBgDist = dist;
              }
            }
          }
        }

        let alpha = 255;
        if (minBgDist <= 1.5) {
          // Soft edge blending
          const brightness = (r + g + b) / 3;
          if (brightness > 200) {
            alpha = Math.max(40, Math.min(255, Math.round((255 - brightness) * 3.5)));
          }
        }

        outputBuffer[byteIdx] = r;
        outputBuffer[byteIdx + 1] = g;
        outputBuffer[byteIdx + 2] = b;
        outputBuffer[byteIdx + 3] = alpha;
      }
    }
  }

  // Save as high quality transparent PNG
  await sharp(outputBuffer, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Saved transparent PNG: ${outputPath}`);
}

async function run() {
  await removeBackground(
    'src/assets/hero-doctor.jpg',
    'public/hero-doctor.png',
    { threshold: 240, edgeThreshold: 220 }
  );

  await removeBackground(
    'src/assets/doctors-duo.jpg',
    'public/doctors-duo.png',
    { threshold: 238, edgeThreshold: 215 }
  );

  // Also copy to src/assets
  fs.copyFileSync('public/hero-doctor.png', 'src/assets/hero-doctor.png');
  fs.copyFileSync('public/doctors-duo.png', 'src/assets/doctors-duo.png');
}

run().catch(console.error);
