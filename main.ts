import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke Laugh-Off (make.fun, $3 pot).
// The program writes exactly one office joke to /output/entry.txt,
// which the judge reads two at a time and keeps the funnier one.
// Gate: UTF-8 text of 1 to 200 characters, not only white space.

const JOKE =
  "The only thing promoted faster than me is the meeting invite I keep declining.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
