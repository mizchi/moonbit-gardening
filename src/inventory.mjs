import { readFile } from "node:fs/promises";
import { relative, sep } from "node:path";

const DEFAULT_STATE = {
  status: "untriaged",
  priority: "normal",
  notes: "",
  lastVerified: null,
  moonVersion: null,
  checks: {},
};

export function isCanonicalGitHubRepository(repository) {
  const segments = repository.split("/");
  return segments.length === 3 && segments[0] === "github.com";
}

export async function inspectRepository(repositoryPath, ghqRoot) {
  let manifest;
  try {
    manifest = JSON.parse(
      await readFile(`${repositoryPath}/moon.mod.json`, "utf8"),
    );
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }

  return {
    repository: relative(ghqRoot, repositoryPath).split(sep).join("/"),
    module: manifest.name ?? null,
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
