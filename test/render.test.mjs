import assert from "node:assert/strict";
import test from "node:test";

import { renderTable, replaceInventory } from "../src/render.mjs";

test("renderTable creates a linked status row", () => {
  const table = renderTable([
    {
      repository: "github.com/mizchi/example",
      module: "mizchi/example",
      status: "passing",
      priority: "normal",
      moonVersion: "0.1.0",
      lastVerified: "2026-08-15",
      notes: "ready",
    },
  ]);
  assert.match(table, /\[mizchi\/example\]\(https:\/\/github.com\/mizchi\/example\)/);
  assert.match(table, /\| passing \| normal \| 0\.1\.0 \| 2026-08-15 \| ready \|/);
});

test("replaceInventory only replaces the generated section", () => {
  const readme = "before\n<!-- inventory:start -->\nold\n<!-- inventory:end -->\nafter\n";
  assert.equal(
    replaceInventory(readme, "new"),
    "before\n<!-- inventory:start -->\nnew\n<!-- inventory:end -->\nafter\n",
  );
});
