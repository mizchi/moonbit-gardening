# MoonBit Gardening

Respond to the user in Japanese.

This repository is the inventory for maintaining `mizchi`'s published packages after breaking MoonBit releases. Do not stop after fixing a single package; propagate updates through downstream packages in dependency order.

## Principles

- Follow TDD: exploration → Red → Green → Refactoring.
- Preserve the user's uncommitted changes and untracked files.
- Include an official automatic migration from `moon.mod.json` to `moon.mod` when it occurs.
- Migrate deprecated APIs to their current replacements instead of hiding warnings mechanically. Suppress a warning only when it cannot be fixed, such as a target-specific implementation difference, and document the reason.
- Preserve compatibility APIs when necessary, add new APIs, and migrate downstream packages incrementally.

## Release migration workflow

1. Run this repository's inventory command, such as `just refresh`, and inspect published versions, local versions, last update dates, and dependencies.
2. Work from foundational packages toward their dependents. Publish a patch release of a foundation package before pinning that published version in downstream packages.
3. In each target repository, inspect `AGENTS.md`, the working tree, manifests, dependencies, target configuration, and existing tests.
4. With the latest MoonBit toolchain, run `moon update`, `moon fmt`, `moon info`, and `moon check --deny-warn` to enumerate breakages and warnings.
5. For behavioral changes and bug fixes, first add the smallest test that demonstrates Red. Separate external I/O from pure request/response transformation logic and unit-test the pure logic.
6. Fix compiler warnings. Common migrations include:
   - Replace old constructors such as `Ref::new` and `Map::new` with current syntax.
   - Replace deprecated `to_string()` calls with `to_owned()` or another appropriate API.
   - Migrate `inspect` to `@debug.debug_inspect` from `moonbitlang/core/debug`, then update snapshots to the actual Debug representation.
   - Replace implicit trait method promotion with an explicit trait call or `extend` declaration.
   - Migrate `try?`, error syntax, and async APIs to the current language specification.
7. Keep state, transport, and response parsing separate while reaching Green, then refactor duplicated logic into shared layers.
8. Run at least the following for `js`, `native`, `wasm`, and `wasm-gc`:
   - `moon check --deny-warn --target <target>`
   - `moon test --target <target>`
   If a target runtime is not supported, pass build/check and pure-logic tests, and report any unavailable host import required for runtime execution.
9. Run `just release-check` when available. Use `moon publish --dry-run` to validate the packaged and re-extracted module.
10. Increment the manifest's patch version by one and run `moon publish`. Commit and push `main` only after publication succeeds.
11. Refresh this repository's inventory, then continue with the next broken downstream package.

## Validation notes

- Review snapshot failures before updating them. Confirm that only representation changed, and remove any `expected` variables made unused by the update.
- Treat `pkg.generated.mbti` files produced by `moon info` as the public API diff and inspect them accordingly.
- Run `git diff --check` and `git status --short` before publishing and before committing.
- If environment variables still point to an Apple SDK removed from the Nix store and break native builds or registry Git operations, clear them for the command:

  ```sh
  env -u SDKROOT -u DEVELOPER_DIR -u NIX_CFLAGS_COMPILE -u NIX_LDFLAGS CC=/usr/bin/clang <command>
  ```

- If `moon publish --dry-run` reports server status `202 Accepted` and successful validation but exits non-zero afterward, verify the package/version in the log and the successful check of the extracted package before deciding whether to publish.

## Completion report

Report the following concisely:

- Updated dependencies and versions
- Fixed breaking changes and warnings
- Check/test counts for each target and any exceptions
- Published package version
- Commit hash and push result
- Intentionally preserved untracked files and known toolchain limitations
