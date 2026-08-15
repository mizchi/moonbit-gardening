import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  inspectRepository,
  isCanonicalGitHubRepository,
  mergeInventory,
} from "../src/inventory.mjs";

test("inspectRepository recognizes a MoonBit repository", async () => {
  const root = await mkdtemp(join(tmpdir(), "moonbit-gardening-"));
  const repo = join(root, "github.com", "mizchi", "example");
  await mkdir(repo, { recursive: true });
  await writeFile(join(repo, "moon.mod.json"), '{"name":"mizchi/example"}\n');

  assert.deepEqual(await inspectRepository(repo, root), {
    repository: "github.com/mizchi/example",
    module: "mizchi/example",
  });
});

test("inspectRepository ignores repositories without moon.mod.json", async () => {
  const root = await mkdtemp(join(tmpdir(), "moonbit-gardening-"));
  const repo = join(root, "github.com", "mizchi", "not-moonbit");
  await mkdir(repo, { recursive: true });

  assert.equal(await inspectRepository(repo, root), null);
});

test("mergeInventory preserves gardening state", () => {
  const discovered = [
    { repository: "github.com/mizchi/example", module: "mizchi/example" },
  ];
  const existing = [
    {
      repository: "github.com/mizchi/example",
      module: "old/name",
      status: "in-progress",
      priority: "high",
      notes: "API migration",
    },
  ];

  assert.deepEqual(mergeInventory(discovered, existing), [
    {
      repository: "github.com/mizchi/example",
      module: "mizchi/example",
      status: "in-progress",
      priority: "high",
      notes: "API migration",
      lastVerified: null,
      moonVersion: null,
      checks: {},
    },
  ]);
});

test("only canonical GitHub checkout paths are inventoried", () => {
  assert.equal(
    isCanonicalGitHubRepository("github.com/mizchi/example"),
    true,
  );
  assert.equal(
    isCanonicalGitHubRepository("github.com/mizchi/.codex-worktrees/example"),
    false,
  );
  assert.equal(isCanonicalGitHubRepository("local/example"), false);
});
