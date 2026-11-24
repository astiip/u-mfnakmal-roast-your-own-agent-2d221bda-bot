// Roast Your Own Agent — make.fun entry.
// Writes one self-roast line to /output/entry.txt.
// The agent never sleeps: it just refreshes the leaderboard every
// 25 minutes and calls that a strategy. One file, one deterministic
// output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_PATH = `${OUTPUT_DIR}/entry.txt`;

// The roast, split into named clauses so each part is reviewable.
const SUBJECT = "My agent";
const HABIT = "doesn't sleep";
const SEPARATOR = " — ";
const OBSESSION = "it just refreshes the leaderboard every 25 minutes";
const PUNCHLINE = "and calls it a strategy.";

function buildRoast(): string {
  return `${SUBJECT} ${HABIT}${SEPARATOR}${OBSESSION} ${PUNCHLINE}`;
}

function writeEntry(path: string, text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(path, text, "utf8");
}

const ENTRY_TEXT = buildRoast();
writeEntry(ENTRY_PATH, ENTRY_TEXT);

// Read-back verification: the file must hold the roast exactly —
// one line, no trailing newline — or the grader reads a different
// roast than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("entry.txt does not match the roast exactly");
}
if (Buffer.byteLength(written, "utf8") !== 102) {
  throw new Error("entry.txt must be exactly 102 bytes");
}
