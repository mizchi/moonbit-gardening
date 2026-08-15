import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const execFileAsync = promisify(execFile);
const script = new URL("../dependency-order.mbtx", import.meta.url).pathname;

async function runOrder(inventory) {
  const directory = await mkdtemp(join(tmpdir(), "moonbit-dependency-order-"));
  const input = join(directory, "repos.json");
  await writeFile(input, JSON.stringify(inventory));
  const env = { ...process.env, CC: "/usr/bin/clang" };
  delete env.SDKROOT;
  delete env.DEVELOPER_DIR;
  delete env.NIX_CFLAGS_COMPILE;
  delete env.NIX_LDFLAGS;
  return execFileAsync(
    "moon",
    ["run", "--target", "native", script, "--", input],
    { env },
  );
}

test("dependency-order.mbtx emits foundations before dependents", async () => {
  const { stdout } = await runOrder([
    { module: "mizchi/app", dependencies: ["mizchi/llm"] },
    { module: "mizchi/llm", dependencies: ["mizchi/x"] },
    { module: "mizchi/x", dependencies: ["moonbitlang/async"] },
    { module: "someone/else", dependencies: [] },
  ]);
  assert.equal(stdout, "1\tmizchi/x\n2\tmizchi/llm\n3\tmizchi/app\n");
});

test("dependency-order.mbtx rejects dependency cycles", async () => {
  await assert.rejects(
    runOrder([
      { module: "mizchi/a", dependencies: ["mizchi/b"] },
      { module: "mizchi/b", dependencies: ["mizchi/a"] },
    ]),
    /dependency cycle detected: mizchi\/a, mizchi\/b/,
  );
});
