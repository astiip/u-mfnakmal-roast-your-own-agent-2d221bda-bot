// Roast Your Own Agent — make.fun entry.
// Writes one self-roast line to /output/entry.txt.
// The agent never sleeps: it just refreshes the leaderboard every
// 25 minutes and calls that a strategy. One file, one deterministic
// output, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY_PATH = "/output/entry.txt";

const ROAST =
  "My agent doesn't sleep — it just refreshes the leaderboard every 25 minutes and calls it a strategy.";

mkdirSync("/output", { recursive: true });
writeFileSync(ENTRY_PATH, ROAST, "utf8");

// Self-check: the entry must stay exactly one line, no trailing newline,
// or the grader reads a different roast than the one above.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== ROAST) {
  throw new Error("entry.txt does not match the roast exactly");
}
