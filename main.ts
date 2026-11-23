// A Day of One-Line Pitches — make.fun entry.
// One sentence (max 240 chars) that would convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
// The program writes the pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "Just describe the app you've always wanted in plain words, and an AI agent on make.fun will build the first working version for you while you finish your coffee — free to try, and the idea stays yours.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space. Fail loudly here rather than shipping a bad entry.
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`Pitch is ${PITCH.length} chars; must be 1-240.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote entry.txt (${PITCH.length} chars).`);
