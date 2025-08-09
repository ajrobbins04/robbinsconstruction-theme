import fs from "fs";
import stripJsonComments from "strip-json-comments";

const sourceFile = "tsconfig.jsonc";
const destFile = "tsconfig.json";

// Read the source file containing comments
const sourceContent = fs.readFileSync(sourceFile, "utf8");

if (!sourceContent) {
  console.error(`Error: ${sourceFile} is empty or does not exist.`);
}

// Strip comments from the content
const strippedContent = stripJsonComments(sourceContent);

// Write the stripped content to the destination json file
fs.writeFileSync(destFile, strippedContent, "utf8");

console.log(`Comments stripped from ${sourceFile} and written to ${destFile}.`);