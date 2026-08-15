import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { relative, sep } from "node:path";

import {
  inspectRepository,
  isCanonicalGitHubRepository,
  mergeInventory,
} from "../src/inventory.mjs";

const ghqRoot = execFileSync("ghq", ["root"], { encoding: "utf8" }).trim();
const repositoryPaths = execFileSync("ghq", ["list", "-p"], {
  encoding: "utf8",
})
  .trim()
  .split("\n")
  .filter(Boolean);

const canonicalPaths = repositoryPaths.filter((path) =>
  isCanonicalGitHubRepository(relative(ghqRoot, path).split(sep).join("/")),
);
const discovered = (
  await Promise.all(canonicalPaths.map((path) => inspectRepository(path, ghqRoot)))
).filter(Boolean);

let existing = [];
try {
  existing = JSON.parse(await readFile("repos.json", "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const inventory = mergeInventory(discovered, existing);
await writeFile("repos.json", `${JSON.stringify(inventory, null, 2)}\n`);
console.log(`Discovered ${inventory.length} MoonBit repositories.`);
