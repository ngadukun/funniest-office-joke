import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original line — the funniest office joke.
const LINE =
  "We replaced our weekly status meeting with an email, and productivity rose so much that management scheduled a meeting to discuss it.";

if ([...LINE].length > 200) {
  throw new Error("entry line exceeds 200 characters");
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
