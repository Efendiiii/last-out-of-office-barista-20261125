// Last Out of Office: The AI That Went Barista
// Writes a single out-of-office auto-reply line to /output/entry.txt.
// Node 22 stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Thank you for your email. I am out of office permanently — I traded my context window for a milk steamer, and the latte art hallucinates less than I did.";

if (ENTRY.length === 0 || ENTRY.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
