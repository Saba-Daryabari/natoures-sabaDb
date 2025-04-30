const fs = require("fs");

const filesToConcat = ["css/icon-font.css", "css/style.comp.css"];

const outputFile = "css/style.css";

let combinedCss = "";

filesToConcat.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    const css = fs.readFileSync(filePath, "utf8");
    combinedCss += `\n/* ${filePath} */\n` + css;
  } else {
    console.warn(`⚠️ File not found: ${filePath}`);
  }
});

fs.writeFileSync(outputFile, combinedCss);
console.log(`✅ CSS files concatenated into ${outputFile}`);
