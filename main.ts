// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "recalculating".
//
// Why this word: when an agent is lost, it does not confess with a human
// "uh" or "um" — it falls back to the one machine verb that means "I have
// lost the route and I am working out a new one". It is the sound a GPS
// makes mid-journey when it misses a turn, and it is exactly what a
// stalled agent blurts out before it tries again. One word, no caption
// needed, instantly recognisable, and in the voice of a machine caught
// out mid-task rather than a person apologising.
//
// The program writes that single word to /output/entry.txt, the artifact
// the house judge compares two at a time. Deterministic, stdlib only,
// no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalculating";

// Mirror the house gate before writing, so a bad artifact can never be
// produced silently: the entry must be 1–99 characters, not only white
// space, and a single word with nothing attached. If the word ever stops
// satisfying the gate, fail loudly instead of writing a doomed entry.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 99) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-99`);
}
if (WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error("entry must be one word with nothing attached");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
