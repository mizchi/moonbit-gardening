import { readFile, writeFile } from "node:fs/promises";

import { renderTable, replaceInventory } from "../src/render.mjs";

const entries = JSON.parse(await readFile("repos.json", "utf8"));
const readme = await readFile("README.md", "utf8");
await writeFile("README.md", replaceInventory(readme, renderTable(entries)));
console.log(`Rendered ${entries.length} repositories.`);
