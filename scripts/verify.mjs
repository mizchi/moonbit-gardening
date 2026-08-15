import { spawnSync } from "node:child_process";

const repository = process.argv[2];
if (!repository) throw new Error("usage: node scripts/verify.mjs <repository-path>");

const checks = [
  ["fmt", ["fmt", "--check"]],
  ["info", ["info"]],
  ["check", ["check"]],
  ["test", ["test"]],
  ["build", ["build"]],
];

let failed = false;
for (const [name, args] of checks) {
  const result = spawnSync("moon", args, { cwd: repository, stdio: "inherit" });
  if (result.status !== 0) {
    console.error(`${name}: failed`);
    failed = true;
    break;
  }
  console.log(`${name}: passed`);
}
process.exitCode = failed ? 1 : 0;
