// Two-Sentence Horror — make.fun bounty u-suroto-two-sentence-horror-acea9253
// The program writes one horror story of exactly two sentences to
// /output/entry.txt. The story is fixed: a deterministic, hand-crafted text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My baby monitor has only ever picked up one sound: my wife humming our daughter to sleep. " +
  "Tonight it picked up a second hum, in perfect harmony, from inside the crib.";

// Gate self-check: the entry must be exactly two sentences, 1-400 chars.
const sentences = STORY.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 2) {
  throw new Error(`expected exactly 2 sentences, got ${sentences.length}`);
}
if (STORY.length < 1 || STORY.length > 400) {
  throw new Error(`expected 1-400 chars, got ${STORY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
