import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const svgPath = "public/img/favicon/logo.svg";
const outputDir = "public/img/favicon/icons";
const sizes = [16, 32, 48, 120, 152, 180, 192, 512];

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// 1. Générer les PNG
sizes.forEach((size) => {
    sharp(svgPath)
        .resize(size, size)
        .png()
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
        .then(() => console.log(`✅ favicon-${size}x${size}.png généré`))
        .catch((err) => console.error(`Erreur pour la taille ${size}:`, err));
});


console.log("\n📋 À insérer dans <head> :\n");
sizes.forEach((size) => {
    console.log(
        `<link rel="icon" type="image/png" sizes="${size}x${size}" href="img/favicon/icons/favicon-${size}x${size}.png">`
    );
});
