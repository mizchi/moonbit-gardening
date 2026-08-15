# moonbit-gardening

Maintenance inventory for MoonBit repositories. It discovers repositories from
`ghq`, records migration state in `repos.json`, and renders the table below.

## Workflow

```sh
just refresh
just order
just verify ~/ghq/github.com/mizchi/example
```

`just order` reads the dependency metadata refreshed into `repos.json` and
prints `mizchi/*` modules in dependency-first order. It fails when the local
package graph contains a cycle.

Repository updates follow exploration → Red → Green → Refactoring. The shared
verification contract runs `moon fmt --check`, `moon info`, `moon check`,
`moon test`, and `moon build` in that order.

Statuses: `untriaged`, `reproduced`, `in-progress`, `blocked`, `passing`, and
`archived`.

## Inventory

<!-- inventory:start -->
| Repository | Module | Last commit | Worktree | Sync | Status | Priority | Moon | Last verified | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [bit-vcs/bithub](https://github.com/bit-vcs/bithub) | bit-vcs/bithub | 2026-07-25 | dirty | equal | untriaged | normal | — | — | — |
| [jtenner/starshine-mb](https://github.com/jtenner/starshine-mb) | jtenner/starshine | 2026-01-28 | clean | diverged | untriaged | normal | — | — | — |
| [mizchi/actrun](https://github.com/mizchi/actrun) | mizchi/actrun | 2026-05-26 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/agent-cluster](https://github.com/mizchi/agent-cluster) | mizchi/agent-cluster | 2026-02-27 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/ast_printer](https://github.com/mizchi/ast_printer) | mizchi/ast_printer | 2026-03-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/ast_printer.mbt](https://github.com/mizchi/ast_printer.mbt) | mizchi/ast_printer | 2026-04-27 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/async](https://github.com/mizchi/async) | moonbitlang/async | 2026-05-21 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/blas](https://github.com/mizchi/blas) | mizchi/blas | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/brotli](https://github.com/mizchi/brotli) | mizchi/brotli | 2026-08-16 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/cloudflare-starterkit-mbt](https://github.com/mizchi/cloudflare-starterkit-mbt) | mizchi/cloudflare-starterkit-mbt | 2026-05-19 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/cloudflare.mbt](https://github.com/mizchi/cloudflare.mbt) | mizchi/cloudflare | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/codegen.mbt](https://github.com/mizchi/codegen.mbt) | mizchi/codegen | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/converge](https://github.com/mizchi/converge) | mizchi/converge | 2026-08-05 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/converge_audit](https://github.com/mizchi/converge_audit) | mizchi/converge_audit | 2026-08-14 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/core](https://github.com/mizchi/core) | moonbitlang/core | 2026-07-14 | dirty | ahead | untriaged | normal | — | — | — |
| [mizchi/core-unicode-pred](https://github.com/mizchi/core-unicode-pred) | moonbitlang/core | 2026-06-26 | clean | diverged | untriaged | normal | — | — | — |
| [mizchi/core-upstream-main](https://github.com/mizchi/core-upstream-main) | moonbitlang/core | 2026-06-25 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/crater](https://github.com/mizchi/crater) | mizchi/crater | 2026-07-12 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/css](https://github.com/mizchi/css) | mizchi/css | 2026-06-29 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/cst.mbt](https://github.com/mizchi/cst.mbt) | mizchi/cst | 2026-08-15 | clean | equal | passing | normal | 0.1.20260803 | 2026-08-15 | PR #3 merged; warning-free strict checks; published 0.1.9 |
| [mizchi/differentiable_ecs](https://github.com/mizchi/differentiable_ecs) | mizchi/differentiable_ecs | 2026-06-03 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/effectts-vs-moonbit](https://github.com/mizchi/effectts-vs-moonbit) | mizchi/effectts-vs-moonbit | 2026-07-27 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/experimental_crypto](https://github.com/mizchi/experimental_crypto) | mizchi/experimental_crypto | 2026-06-02 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/flaker-cloud](https://github.com/mizchi/flaker-cloud) | mizchi/flaker-cloud | 2026-04-10 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/folddown](https://github.com/mizchi/folddown) | mizchi/folddown | 2026-07-17 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/font](https://github.com/mizchi/font) | mizchi/font | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/gfx-mbt](https://github.com/mizchi/gfx-mbt) | mizchi/gfx | 2026-05-23 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/github](https://github.com/mizchi/github) | mizchi/github | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/gitignore.mbt](https://github.com/mizchi/gitignore.mbt) | mizchi/gitignore | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/glfw-mbt](https://github.com/mizchi/glfw-mbt) | mizchi/glfw | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/image-mbt](https://github.com/mizchi/image-mbt) | mizchi/image | 2026-07-20 | clean | diverged | passing | normal | 0.1.20260803 | 2026-08-15 | PR #4 merged latest-MoonBit manifest and zlib updates; JS/native strict CI passes; mizchi/image 0.4.3 was already published |
| [mizchi/inventory-game](https://github.com/mizchi/inventory-game) | mizchi/inventory-game | 2026-07-16 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/js.mbt](https://github.com/mizchi/js.mbt) | mizchi/js | 2026-05-26 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/jwt.mbt](https://github.com/mizchi/jwt.mbt) | mizchi/jwt.mbt | 2026-02-03 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/kagura](https://github.com/mizchi/kagura) | mizchi/kagura | 2026-06-06 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/layout](https://github.com/mizchi/layout) | mizchi/layout | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/llm](https://github.com/mizchi/llm) | mizchi/llm | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/lsp.mbt](https://github.com/mizchi/lsp.mbt) | mizchi/lsp | 2026-08-15 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/m8m](https://github.com/mizchi/m8m) | mizchi/m8m | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/markdown.mbt](https://github.com/mizchi/markdown.mbt) | mizchi/markdown | 2026-07-28 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/mars.mbt](https://github.com/mizchi/mars.mbt) | mizchi/mars | 2026-06-30 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/mayo](https://github.com/mizchi/mayo) | mizchi/mayo | 2026-07-16 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mbt_rs](https://github.com/mizchi/mbt_rs) | mizchi/mbt_rs | 2026-03-26 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mbt-blockly](https://github.com/mizchi/mbt-blockly) | mizchi/mbt-blockly | 2026-03-30 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mbts](https://github.com/mizchi/mbts) | mizchi/mbts | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mnemo](https://github.com/mizchi/mnemo) | mizchi/mnemo | 2026-05-28 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moomaid](https://github.com/mizchi/moomaid) | mizchi/moomaid | 2026-07-28 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moon-component](https://github.com/mizchi/moon-component) | mizchi/moon_component | 2026-08-16 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/moon-install](https://github.com/mizchi/moon-install) | mizchi/moon-install | 2026-02-04 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/moonbit_jsonschema](https://github.com/mizchi/moonbit_jsonschema) | mizchi/jsonschema | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moonbitlang-x](https://github.com/mizchi/moonbitlang-x) | moonbitlang/x | 2026-05-18 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moonix](https://github.com/mizchi/moonix) | mizchi/moonix | 2026-08-16 | clean | equal | blocked | normal | 0.1.20260803 | 2026-08-15 | PR #1 removed unused root cst dependency; latest MoonBit check is blocked by pre-existing FileType Debug migration already present in the dirty local checkout |
| [mizchi/moonlight](https://github.com/mizchi/moonlight) | mizchi/moonlight | 2026-04-07 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/nanobot.mbt](https://github.com/mizchi/nanobot.mbt) | mizchi/nanobot | 2026-02-10 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/nn](https://github.com/mizchi/nn) | mizchi/nn | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/npm_typed.mbt](https://github.com/mizchi/npm_typed.mbt) | mizchi/npm_typed | 2026-07-07 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/numbt](https://github.com/mizchi/numbt) | mizchi/numbt | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/oci_wasm](https://github.com/mizchi/oci_wasm) | mizchi/oci_wasm | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/pi_ext](https://github.com/mizchi/pi_ext) | mizchi/pi | 2026-04-26 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/pickle-mbt](https://github.com/mizchi/pickle-mbt) | mizchi/pkl | 2026-08-15 | clean | equal | passing | normal | 0.1.20260803 | 2026-08-15 | Remote is mizchi/pkl-mbt; PR #30 merged cst 0.1.9 and core/env migration; all CI checks and pkspec contracts pass |
| [mizchi/pixelmatch](https://github.com/mizchi/pixelmatch) | mizchi/pixelmatch | 2026-07-03 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/pkfire](https://github.com/mizchi/pkfire) | mizchi/pkf | 2026-08-03 | clean | behind | untriaged | normal | — | — | — |
| [mizchi/pkl-mbt](https://github.com/mizchi/pkl-mbt) | mizchi/pkl | 2026-08-03 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/pkspec](https://github.com/mizchi/pkspec) | mizchi/pkspec | 2026-06-27 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/playwright.mbt](https://github.com/mizchi/playwright.mbt) | mizchi/playwright | 2026-03-20 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/quint-connect-moonbit](https://github.com/mizchi/quint-connect-moonbit) | mizchi/quint_connect | 2026-08-05 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/ripple](https://github.com/mizchi/ripple) | mizchi/ripple | 2026-06-01 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/rkyv-mbt](https://github.com/mizchi/rkyv-mbt) | mizchi/rkyv | 2026-07-27 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/s3](https://github.com/mizchi/s3) | mizchi/s3 | 2026-04-10 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sandbox.mbt](https://github.com/mizchi/sandbox.mbt) | mizchi/sandbox | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/semver.mbt](https://github.com/mizchi/semver.mbt) | mizchi/semver | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/signals](https://github.com/mizchi/signals) | mizchi/signals | 2026-03-21 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/simd](https://github.com/mizchi/simd) | mizchi/simd | 2026-07-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/similarity.mbt](https://github.com/mizchi/similarity.mbt) | mizchi/similarity | 2026-02-19 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sol.mbt](https://github.com/mizchi/sol.mbt) | mizchi/sol | 2026-05-04 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sqlc_gen_moonbit](https://github.com/mizchi/sqlc_gen_moonbit) | mizchi/sqlc_gen_moonbit | 2026-05-29 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/starlint](https://github.com/mizchi/starlint) | mizchi/starlint | 2026-04-04 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/svg](https://github.com/mizchi/svg) | mizchi/svg | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/syntree.mbt](https://github.com/mizchi/syntree.mbt) | mizchi/syntree | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/terrain](https://github.com/mizchi/terrain) | mizchi/terrain | 2026-03-09 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/threads](https://github.com/mizchi/threads) | mizchi/threads | 2026-02-27 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/tomate](https://github.com/mizchi/tomate) | mizchi/tomate | 2026-02-20 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/tornado](https://github.com/mizchi/tornado) | mizchi/tornado | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/ts.mbt](https://github.com/mizchi/ts.mbt) | mizchi/ts | 2026-07-29 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/tui.mbt](https://github.com/mizchi/tui.mbt) | mizchi/tui | 2026-06-06 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/uploda](https://github.com/mizchi/uploda) | mizchi/uploda | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/v8.mbt](https://github.com/mizchi/v8.mbt) | mizchi/v8 | 2026-06-29 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/vfs](https://github.com/mizchi/vfs) | mizchi/vfs | 2026-08-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/vibe-lang-feat-thread](https://github.com/mizchi/vibe-lang-feat-thread) | mizchi/vibe | 2026-06-05 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/vivebox](https://github.com/mizchi/vivebox) | mizchi/vivebox | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasi.mbt](https://github.com/mizchi/wasi.mbt) | mizchi/wasi | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt](https://github.com/mizchi/wasmtime.mbt) | mizchi/wasmtime | 2026-02-03 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt-main](https://github.com/mizchi/wasmtime.mbt-main) | mizchi/wasmtime | 2026-04-25 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/wasmx](https://github.com/mizchi/wasmx) | mizchi/wasmx | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/webnn-playground](https://github.com/mizchi/webnn-playground) | mizchi/webnn | 2026-07-15 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/whenword-mbt](https://github.com/mizchi/whenword-mbt) | mizchi/whenwords | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/whisper-mbt](https://github.com/mizchi/whisper-mbt) | mizchi/whisper | 2026-02-19 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wit-bindgen-moonbit](https://github.com/mizchi/wit-bindgen-moonbit) | mizchi/wit_bindgen_mbt | 2026-02-01 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/wit.mbt](https://github.com/mizchi/wit.mbt) | mizchi/wit | 2026-08-16 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/wite](https://github.com/mizchi/wite) | mizchi/wite | 2026-08-16 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/x](https://github.com/mizchi/x) | mizchi/x | 2026-08-16 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/x-async](https://github.com/mizchi/x-async) | moonbitlang/async | 2026-01-26 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/zlib](https://github.com/mizchi/zlib) | mizchi/zlib | 2026-06-29 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/zlib.mbt](https://github.com/mizchi/zlib.mbt) | mizchi/zlib | 2026-08-15 | clean | equal | passing | normal | 0.1.20260803 | 2026-08-15 | PR #6 merged; strict release-check passes; published 0.4.9 |
| [moonbit-community/moongrep](https://github.com/moonbit-community/moongrep) | moonbit-community/moongrep | 2026-07-31 | dirty | equal | untriaged | normal | — | — | — |
| [moonbit-community/postgres.mbt](https://github.com/moonbit-community/postgres.mbt) | myfreess/postgres | 2025-10-08 | clean | diverged | untriaged | normal | — | — | — |
| [moonbit-community/verified](https://github.com/moonbit-community/verified) | moonbit-community/verified | 2026-07-11 | clean | equal | untriaged | normal | — | — | — |
| [moonbit-community/wasip1](https://github.com/moonbit-community/wasip1) | peter-jerry-ye/wasi | 2026-01-07 | clean | behind | untriaged | normal | — | — | — |
| [moonbit-community/wasip2](https://github.com/moonbit-community/wasip2) | mizchi/wasip2 | 2026-01-25 | clean | no-upstream | untriaged | normal | — | — | — |
| [moonbitlang/async](https://github.com/moonbitlang/async) | moonbitlang/async | 2026-03-18 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/core](https://github.com/moonbitlang/core) | moonbitlang/core | 2026-05-23 | clean | equal | untriaged | normal | — | — | — |
| [moonbitlang/maria](https://github.com/moonbitlang/maria) | moonbitlang/maria | 2026-01-27 | dirty | no-upstream | untriaged | normal | — | — | — |
| [moonbitlang/mbtcc](https://github.com/moonbitlang/mbtcc) | Kaida-Amethyst/mbtcc | 2026-01-15 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/moonyacc](https://github.com/moonbitlang/moonyacc) | moonbitlang/yacc | 2025-12-24 | dirty | equal | untriaged | normal | — | — | — |
| [moonbitlang/openseek](https://github.com/moonbitlang/openseek) | bobzhang/openseek | 2026-07-01 | dirty | equal | untriaged | normal | — | — | — |
| [moonbitlang/parser](https://github.com/moonbitlang/parser) | moonbitlang/parser | 2026-01-16 | dirty | ahead | untriaged | normal | — | — | — |
| [moonbitlang/wasm5](https://github.com/moonbitlang/wasm5) | moonbitlang/wasm5 | 2026-01-29 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/x](https://github.com/moonbitlang/x) | moonbitlang/x | 2026-01-30 | clean | behind | untriaged | normal | — | — | — |
| [oboard/mocket](https://github.com/oboard/mocket) | oboard/mocket | 2026-07-09 | clean | equal | untriaged | normal | — | — | — |
| [SouichiroTsujimoto/astrobit](https://github.com/SouichiroTsujimoto/astrobit) | SouichiroTsujimoto/astrobit | 2026-03-25 | dirty | equal | untriaged | normal | — | — | — |
| [trkbt10/indexion](https://github.com/trkbt10/indexion) | trkbt10/indexion | 2026-03-04 | dirty | equal | untriaged | normal | — | — | — |
| [ushironoko/gitfilm](https://github.com/ushironoko/gitfilm) | ushironoko/gitfilm | 2026-03-27 | clean | equal | untriaged | normal | — | — | — |
<!-- inventory:end -->
