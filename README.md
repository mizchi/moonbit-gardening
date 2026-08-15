# moonbit-gardening

Maintenance inventory for MoonBit repositories. It discovers repositories from
`ghq`, records migration state in `repos.json`, and renders the table below.

## Workflow

```sh
just refresh
just verify ~/ghq/github.com/mizchi/example
```

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
| [mizchi/blas](https://github.com/mizchi/blas) | mizchi/blas | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/brotli](https://github.com/mizchi/brotli) | mizchi/brotli | 2026-03-10 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/cloudflare-starterkit-mbt](https://github.com/mizchi/cloudflare-starterkit-mbt) | mizchi/cloudflare-starterkit-mbt | 2026-05-19 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/cloudflare.mbt](https://github.com/mizchi/cloudflare.mbt) | mizchi/cloudflare | 2026-02-26 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/codegen.mbt](https://github.com/mizchi/codegen.mbt) | mizchi/codegen | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/cst.mbt](https://github.com/mizchi/cst.mbt) | mizchi/cst | 2026-05-16 | clean | equal | passing | normal | 0.1.20260803 | 2026-08-15 | PR #3 merged; warning-free strict checks; published 0.1.9 |
| [mizchi/differentiable_ecs](https://github.com/mizchi/differentiable_ecs) | mizchi/differentiable_ecs | 2026-06-03 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/flaker-cloud](https://github.com/mizchi/flaker-cloud) | mizchi/flaker-cloud | 2026-04-10 | clean | ahead | untriaged | normal | — | — | — |
| [mizchi/github](https://github.com/mizchi/github) | mizchi/github | 2026-04-05 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/gitignore.mbt](https://github.com/mizchi/gitignore.mbt) | mizchi/gitignore | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/inventory-game](https://github.com/mizchi/inventory-game) | mizchi/inventory-game | 2026-07-16 | clean | no-upstream | untriaged | normal | — | — | — |
| [mizchi/js.mbt](https://github.com/mizchi/js.mbt) | mizchi/js | 2026-05-26 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/jwt.mbt](https://github.com/mizchi/jwt.mbt) | mizchi/jwt.mbt | 2026-02-03 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/layout](https://github.com/mizchi/layout) | mizchi/layout | 2026-03-21 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/lsp.mbt](https://github.com/mizchi/lsp.mbt) | mizchi/lsp | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/m8m](https://github.com/mizchi/m8m) | mizchi/m8m | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/mbt_rs](https://github.com/mizchi/mbt_rs) | mizchi/mbt_rs | 2026-03-26 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mbt-blockly](https://github.com/mizchi/mbt-blockly) | mizchi/mbt-blockly | 2026-03-30 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mbts](https://github.com/mizchi/mbts) | mizchi/mbts | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/mnemo](https://github.com/mizchi/mnemo) | mizchi/mnemo | 2026-05-28 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moon-component](https://github.com/mizchi/moon-component) | mizchi/moon_component | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/moon-install](https://github.com/mizchi/moon-install) | mizchi/moon-install | 2026-02-04 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/moonbit_jsonschema](https://github.com/mizchi/moonbit_jsonschema) | mizchi/jsonschema | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/moonbitlang-x](https://github.com/mizchi/moonbitlang-x) | moonbitlang/x | 2026-05-18 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/moonix](https://github.com/mizchi/moonix) | mizchi/moonix | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/moonlight](https://github.com/mizchi/moonlight) | mizchi/moonlight | 2026-04-07 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/nanobot.mbt](https://github.com/mizchi/nanobot.mbt) | mizchi/nanobot | 2026-02-10 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/nn](https://github.com/mizchi/nn) | mizchi/nn | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/numbt](https://github.com/mizchi/numbt) | mizchi/numbt | 2026-05-27 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/oci_wasm](https://github.com/mizchi/oci_wasm) | mizchi/oci_wasm | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/pi_ext](https://github.com/mizchi/pi_ext) | mizchi/pi | 2026-04-26 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/pickle-mbt](https://github.com/mizchi/pickle-mbt) | mizchi/pkl | 2026-05-24 | clean | equal | blocked | normal | 0.1.20260803 | 2026-08-15 | Remote is mizchi/pkl-mbt; PR #30 updates cst 0.1.9 from current main; CLI-backed pkspec gate fails globally |
| [mizchi/pkspec](https://github.com/mizchi/pkspec) | mizchi/pkspec | 2026-06-27 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/playwright.mbt](https://github.com/mizchi/playwright.mbt) | mizchi/playwright | 2026-03-20 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/s3](https://github.com/mizchi/s3) | mizchi/s3 | 2026-04-10 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sandbox.mbt](https://github.com/mizchi/sandbox.mbt) | mizchi/sandbox | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/similarity.mbt](https://github.com/mizchi/similarity.mbt) | mizchi/similarity | 2026-02-19 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sol.mbt](https://github.com/mizchi/sol.mbt) | mizchi/sol | 2026-05-04 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/sqlc_gen_moonbit](https://github.com/mizchi/sqlc_gen_moonbit) | mizchi/sqlc_gen_moonbit | 2026-05-29 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/svg](https://github.com/mizchi/svg) | mizchi/svg | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/syntree.mbt](https://github.com/mizchi/syntree.mbt) | mizchi/syntree | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/terrain](https://github.com/mizchi/terrain) | mizchi/terrain | 2026-03-09 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/threads](https://github.com/mizchi/threads) | mizchi/threads | 2026-02-27 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/tomate](https://github.com/mizchi/tomate) | mizchi/tomate | 2026-02-20 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/tornado](https://github.com/mizchi/tornado) | mizchi/tornado | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/uploda](https://github.com/mizchi/uploda) | mizchi/uploda | — | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/vfs](https://github.com/mizchi/vfs) | mizchi/vfs | 2026-04-05 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/vivebox](https://github.com/mizchi/vivebox) | mizchi/vivebox | 2026-04-25 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasi.mbt](https://github.com/mizchi/wasi.mbt) | mizchi/wasi | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt](https://github.com/mizchi/wasmtime.mbt) | mizchi/wasmtime | 2026-02-03 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt-main](https://github.com/mizchi/wasmtime.mbt-main) | mizchi/wasmtime | 2026-04-25 | clean | equal | untriaged | normal | — | — | — |
| [mizchi/wasmx](https://github.com/mizchi/wasmx) | mizchi/wasmx | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/whenword-mbt](https://github.com/mizchi/whenword-mbt) | mizchi/whenwords | 2026-02-11 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/whisper-mbt](https://github.com/mizchi/whisper-mbt) | mizchi/whisper | 2026-02-19 | dirty | equal | untriaged | normal | — | — | — |
| [mizchi/wit-bindgen-moonbit](https://github.com/mizchi/wit-bindgen-moonbit) | mizchi/wit_bindgen_mbt | 2026-02-01 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/wite](https://github.com/mizchi/wite) | mizchi/wite | 2026-03-22 | dirty | diverged | untriaged | normal | — | — | — |
| [mizchi/x-async](https://github.com/mizchi/x-async) | moonbitlang/async | 2026-01-26 | dirty | no-upstream | untriaged | normal | — | — | — |
| [mizchi/zlib.mbt](https://github.com/mizchi/zlib.mbt) | mizchi/zlib | 2026-05-19 | clean | equal | passing | normal | 0.1.20260803 | 2026-08-15 | PR #6 merged; strict release-check passes; published 0.4.9 |
| [moonbit-community/postgres.mbt](https://github.com/moonbit-community/postgres.mbt) | myfreess/postgres | 2025-10-08 | clean | diverged | untriaged | normal | — | — | — |
| [moonbit-community/wasip1](https://github.com/moonbit-community/wasip1) | peter-jerry-ye/wasi | 2026-01-07 | clean | behind | untriaged | normal | — | — | — |
| [moonbit-community/wasip2](https://github.com/moonbit-community/wasip2) | mizchi/wasip2 | 2026-01-25 | clean | no-upstream | untriaged | normal | — | — | — |
| [moonbitlang/async](https://github.com/moonbitlang/async) | moonbitlang/async | 2026-03-18 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/maria](https://github.com/moonbitlang/maria) | moonbitlang/maria | 2026-01-27 | dirty | no-upstream | untriaged | normal | — | — | — |
| [moonbitlang/mbtcc](https://github.com/moonbitlang/mbtcc) | Kaida-Amethyst/mbtcc | 2026-01-15 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/moonyacc](https://github.com/moonbitlang/moonyacc) | moonbitlang/yacc | 2025-12-24 | dirty | equal | untriaged | normal | — | — | — |
| [moonbitlang/parser](https://github.com/moonbitlang/parser) | moonbitlang/parser | 2026-01-16 | dirty | ahead | untriaged | normal | — | — | — |
| [moonbitlang/wasm5](https://github.com/moonbitlang/wasm5) | moonbitlang/wasm5 | 2026-01-29 | clean | behind | untriaged | normal | — | — | — |
| [moonbitlang/x](https://github.com/moonbitlang/x) | moonbitlang/x | 2026-01-30 | clean | behind | untriaged | normal | — | — | — |
| [SouichiroTsujimoto/astrobit](https://github.com/SouichiroTsujimoto/astrobit) | SouichiroTsujimoto/astrobit | 2026-03-25 | dirty | equal | untriaged | normal | — | — | — |
| [trkbt10/indexion](https://github.com/trkbt10/indexion) | trkbt10/indexion | 2026-03-04 | dirty | equal | untriaged | normal | — | — | — |
| [ushironoko/gitfilm](https://github.com/ushironoko/gitfilm) | ushironoko/gitfilm | 2026-03-27 | clean | equal | untriaged | normal | — | — | — |
<!-- inventory:end -->
