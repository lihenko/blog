import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public"; // або ./src/assets
const outputDir = "./public"; // куди зберігати webp

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (file.endsWith(".png")) {
      results.push(filePath);
    }
  });

  return results;
}

async function convert() {
  const files = walk(inputDir);

  for (const file of files) {
    const outputFile = file.replace(".png", ".webp");

    await sharp(file)
      .webp({ quality: 80 })
      .toFile(outputFile);

    console.log(`✔ Converted: ${file}`);
  }
}

convert();