import sharp from "sharp";
import { existsSync } from "fs";
import path from "path";

const resizeTargets = [
  { src: "public/photo-1551288049-bebda4e38f71.webp", width: 400 },
];

const compressTargets = [
  { src: "src/app/icon.png", maxWidth: 512 },
];

(async () => {
  for (const { src, width } of resizeTargets) {
    const ext = path.extname(src);
    const base = src.slice(0, -ext.length);
    const out = `${base}-${width}${ext}`;
    if (!existsSync(out)) {
      await sharp(src).resize({ width }).toFile(out);
      console.log(`Generated ${out}`);
    }
  }

  for (const { src, maxWidth } of compressTargets) {
    const meta = await sharp(src).metadata();
    const originalBytes = (await sharp(src).toBuffer()).length;
    const compressed = await sharp(src)
      .resize({ width: Math.min(meta.width ?? maxWidth, maxWidth), withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toBuffer();
    if (compressed.length < originalBytes) {
      await sharp(compressed).toFile(src);
      const saved = ((originalBytes - compressed.length) / 1024).toFixed(1);
      console.log(`Compressed ${src}: saved ${saved} KB`);
    }
  }
})();
