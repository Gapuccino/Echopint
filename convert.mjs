import sharp from "sharp";
import fs from "fs";

async function run() {
  // Convert logo.png to webp
  if (fs.existsSync("public/logo.png")) {
    await sharp("public/logo.png").webp({ quality: 80 }).toFile("public/logo.webp");
    fs.unlinkSync("public/logo.png");
    console.log("Converted logo.png to logo.webp");
  }

  // Convert logo-matss.png to webp
  if (fs.existsSync("public/logo-matss.png")) {
    await sharp("public/logo-matss.png").webp({ quality: 80 }).toFile("public/logo-matss.webp");
    fs.unlinkSync("public/logo-matss.png");
    console.log("Converted logo-matss.png to logo-matss.webp");
  }

  // Handle favicon
  if (fs.existsSync("src/app/favicon.ico")) {
    fs.unlinkSync("src/app/favicon.ico");
    console.log("Deleted old favicon.ico");
  }

  if (fs.existsSync("src/app/favicon.png")) {
    // Next.js uses icon.png automatically for favicons
    fs.renameSync("src/app/favicon.png", "src/app/icon.png");
    console.log("Renamed favicon.png to icon.png");
  }
}

run().catch(console.error);
