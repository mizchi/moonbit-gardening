import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  classifySync,
  inspectRepository,
  isCanonicalGitHubRepository,
  mergeInventory,
} from "../src/inventory.mjs";

test("classifySync distinguishes local and upstream state", () => {
  assert.equal(classifySync(0, 0), "equal");
  assert.equal(classifySync(2, 0), "ahead");
  assert.equal(classifySync(0, 3), "behind");
  assert.equal(classifySync(1, 1), "diverged");
});

test("inspectRepository recognizes a MoonBit repository", async () => {
  const root = await mkdtemp(join(tmpdir(), "moonbit-gardening-"));
  const repo = join(root, "github.com", "mizchi", "example");
  await mkdir(repo, { recursive: true });
  await writeFile(join(repo, "moon.mod.json"), '{"name":"mizchi/example"}\n');

  const gitState = {
    lastCommit: "2026-08-15",
    dirty: false,
    upstream: "origin/main",
    sync: "equal",
  };
  assert.deepEqual(await inspectRepository(repo, root, async () => gitState), {
    repository: "github.com/mizchi/example",
    module: "mizchi/example",
    ...gitState,
  });
});

test("inspectRepository ignores repositories without moon.mod.json", async () => {
  const root = await mkdtemp(join(tmpdir(), "moonbit-gardening-"));
  const repo = join(root, "github.com", "mizchi", "not-moonbit");
  await mkdir(repo, { recursive: true });

  assert.equal(await inspectRepository(repo, root), null);
});

test("inspectRepository ignores stale Git worktrees", async () => {
  const root = await mkdtemp(join(tmpdir(), "moonbit-gardening-"));
  const repo = join(root, "github.com", "mizchi", "stale-worktree");
  await mkdir(repo, { recursive: true });
  await writeFile(join(repo, "moon.mod.json"), '{"name":"mizchi/stale"}\n');

  assert.equal(
    await inspectRepository(repo, root, async () => {
      throw new Error("not a git repository");
    }),
    null,
  );
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
      lastCommit: null,
      dirty: null,
      upstream: null,
      sync: "unknown",
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
