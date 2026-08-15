import { readFile } from "node:fs/promises";
import { relative, sep } from "node:path";
import { promisify } from "node:util";
import { execFile } from "node:child_process";

const execFileAsync = promisify(execFile);

const DEFAULT_STATE = {
  status: "untriaged",
  priority: "normal",
  notes: "",
  lastVerified: null,
  moonVersion: null,
  checks: {},
  lastCommit: null,
  dirty: null,
  upstream: null,
  sync: "unknown",
};

export function classifySync(ahead, behind) {
  if (ahead === 0 && behind === 0) return "equal";
  if (ahead > 0 && behind === 0) return "ahead";
  if (ahead === 0 && behind > 0) return "behind";
  return "diverged";
}

async function git(repositoryPath, args) {
  const env = { ...process.env };
  delete env.DEVELOPER_DIR;
  delete env.SDKROOT;
  const { stdout } = await execFileAsync("git", ["-C", repositoryPath, ...args], {
    encoding: "utf8",
    env,
    timeout: 10_000,
  });
  return stdout.trim();
}

export async function inspectGitRepository(repositoryPath) {
  const porcelain = await git(repositoryPath, ["status", "--porcelain"]);
  let lastCommit = null;
  try {
    lastCommit = await git(repositoryPath, ["log", "-1", "--format=%cs"]);
  } catch {
    // An initialized repository may not have its first commit yet.
  }

  let upstream = null;
  try {
    upstream = await git(repositoryPath, [
      "rev-parse",
      "--abbrev-ref",
      "@{upstream}",
    ]);
  } catch {
    return {
      lastCommit,
      dirty: porcelain.length > 0,
      upstream: null,
      sync: "no-upstream",
    };
  }

  try {
    const counts = await git(repositoryPath, [
      "rev-list",
      "--left-right",
      "--count",
      "HEAD...@{upstream}",
    ]);
    const [ahead, behind] = counts.split(/\s+/).map(Number);
    return {
      lastCommit,
      dirty: porcelain.length > 0,
      upstream,
      sync: classifySync(ahead, behind),
    };
  } catch {
    return {
      lastCommit,
      dirty: porcelain.length > 0,
      upstream,
      sync: "unknown",
    };
  }
}

export function isCanonicalGitHubRepository(repository) {
  const segments = repository.split("/");
  return segments.length === 3 && segments[0] === "github.com";
}

function parseMoonMod(source) {
  const match = source.match(/^\s*name\s*=\s*"([^"]+)"\s*$/m);
  return { name: match?.[1] ?? null };
}

async function readManifest(repositoryPath) {
  try {
    return JSON.parse(
      await readFile(`${repositoryPath}/moon.mod.json`, "utf8"),
    );
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  try {
    return parseMoonMod(await readFile(`${repositoryPath}/moon.mod`, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

export async function inspectRepository(
  repositoryPath,
  ghqRoot,
  inspectGit = inspectGitRepository,
) {
  const manifest = await readManifest(repositoryPath);
  if (manifest === null) return null;

  let gitState;
  try {
    gitState = await inspectGit(repositoryPath);
  } catch {
    return null;
  }

  return {
    repository: relative(ghqRoot, repositoryPath).split(sep).join("/"),
    module: manifest.name ?? null,
    ...gitState,
  };
}

export function mergeInventory(discovered, existing = []) {
  const byRepository = new Map(
    existing.map((entry) => [entry.repository, entry]),
  );

  return discovered
    .map((entry) => ({
      ...DEFAULT_STATE,
      ...byRepository.get(entry.repository),
      ...entry,
    }))
    .sort((left, right) => left.repository.localeCompare(right.repository));
}
