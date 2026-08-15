const HEADER = `| Repository | Module | Status | Priority | Moon | Last verified | Notes |
| --- | --- | --- | --- | --- | --- | --- |`;

function cell(value) {
  if (value === null || value === undefined || value === "") return "—";
  return String(value).replaceAll("|", "\\|");
}

export function renderTable(entries) {
  const rows = entries.map((entry) => {
    const repository = entry.repository.replace(/^github\.com\//, "");
    const link = `[${repository}](https://github.com/${repository})`;
    return `| ${link} | ${cell(entry.module)} | ${cell(entry.status)} | ${cell(entry.priority)} | ${cell(entry.moonVersion)} | ${cell(entry.lastVerified)} | ${cell(entry.notes)} |`;
  });
  return [HEADER, ...rows].join("\n");
}

export function replaceInventory(readme, table) {
  const start = "<!-- inventory:start -->";
  const end = "<!-- inventory:end -->";
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!pattern.test(readme)) throw new Error("README inventory markers not found");
  return readme.replace(pattern, `${start}\n${table}\n${end}`);
}
