// passive-aggressive-fridge: one funny passive-aggressive note a smart fridge
// leaves for its owner. Deterministic, no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your 2 a.m. ice cream is logged as 'meal prep.' I sent your fitness app the unedited version.";

// Gate (sealed scorer): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, a single line. Fail hard if violated.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
