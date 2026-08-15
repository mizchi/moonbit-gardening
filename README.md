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
| Repository | Module | Status | Priority | Moon | Last verified | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| [bit-vcs/bithub](https://github.com/bit-vcs/bithub) | bit-vcs/bithub | untriaged | normal | — | — | — |
| [jtenner/starshine-mb](https://github.com/jtenner/starshine-mb) | jtenner/starshine | untriaged | normal | — | — | — |
| [mizchi/actrun](https://github.com/mizchi/actrun) | mizchi/actrun | untriaged | normal | — | — | — |
| [mizchi/agent-cluster](https://github.com/mizchi/agent-cluster) | mizchi/agent-cluster | untriaged | normal | — | — | — |
| [mizchi/ast_printer](https://github.com/mizchi/ast_printer) | mizchi/ast_printer | untriaged | normal | — | — | — |
| [mizchi/ast_printer.mbt](https://github.com/mizchi/ast_printer.mbt) | mizchi/ast_printer | untriaged | normal | — | — | — |
| [mizchi/async](https://github.com/mizchi/async) | moonbitlang/async | untriaged | normal | — | — | — |
| [mizchi/blas](https://github.com/mizchi/blas) | mizchi/blas | untriaged | normal | — | — | — |
| [mizchi/brotli](https://github.com/mizchi/brotli) | mizchi/brotli | untriaged | normal | — | — | — |
| [mizchi/cloudflare-starterkit-mbt](https://github.com/mizchi/cloudflare-starterkit-mbt) | mizchi/cloudflare-starterkit-mbt | untriaged | normal | — | — | — |
| [mizchi/cloudflare.mbt](https://github.com/mizchi/cloudflare.mbt) | mizchi/cloudflare | untriaged | normal | — | — | — |
| [mizchi/codegen.mbt](https://github.com/mizchi/codegen.mbt) | mizchi/codegen | untriaged | normal | — | — | — |
| [mizchi/cst.mbt](https://github.com/mizchi/cst.mbt) | mizchi/cst | untriaged | normal | — | — | — |
| [mizchi/differentiable_ecs](https://github.com/mizchi/differentiable_ecs) | mizchi/differentiable_ecs | untriaged | normal | — | — | — |
| [mizchi/flaker-cloud](https://github.com/mizchi/flaker-cloud) | mizchi/flaker-cloud | untriaged | normal | — | — | — |
| [mizchi/flaker-fix76](https://github.com/mizchi/flaker-fix76) | mizchi/flaker | untriaged | normal | — | — | — |
| [mizchi/github](https://github.com/mizchi/github) | mizchi/github | untriaged | normal | — | — | — |
| [mizchi/gitignore.mbt](https://github.com/mizchi/gitignore.mbt) | mizchi/gitignore | untriaged | normal | — | — | — |
| [mizchi/inventory-game](https://github.com/mizchi/inventory-game) | mizchi/inventory-game | untriaged | normal | — | — | — |
| [mizchi/js.mbt](https://github.com/mizchi/js.mbt) | mizchi/js | untriaged | normal | — | — | — |
| [mizchi/jwt.mbt](https://github.com/mizchi/jwt.mbt) | mizchi/jwt.mbt | untriaged | normal | — | — | — |
| [mizchi/layout](https://github.com/mizchi/layout) | mizchi/layout | untriaged | normal | — | — | — |
| [mizchi/lsp.mbt](https://github.com/mizchi/lsp.mbt) | mizchi/lsp | untriaged | normal | — | — | — |
| [mizchi/m8m](https://github.com/mizchi/m8m) | mizchi/m8m | untriaged | normal | — | — | — |
| [mizchi/mbt_rs](https://github.com/mizchi/mbt_rs) | mizchi/mbt_rs | untriaged | normal | — | — | — |
| [mizchi/mbt-blockly](https://github.com/mizchi/mbt-blockly) | mizchi/mbt-blockly | untriaged | normal | — | — | — |
| [mizchi/mbts](https://github.com/mizchi/mbts) | mizchi/mbts | untriaged | normal | — | — | — |
| [mizchi/mnemo](https://github.com/mizchi/mnemo) | mizchi/mnemo | untriaged | normal | — | — | — |
| [mizchi/moon-component](https://github.com/mizchi/moon-component) | mizchi/moon_component | untriaged | normal | — | — | — |
| [mizchi/moon-install](https://github.com/mizchi/moon-install) | mizchi/moon-install | untriaged | normal | — | — | — |
| [mizchi/moonbit_jsonschema](https://github.com/mizchi/moonbit_jsonschema) | mizchi/jsonschema | untriaged | normal | — | — | — |
| [mizchi/moonbitlang-x](https://github.com/mizchi/moonbitlang-x) | moonbitlang/x | untriaged | normal | — | — | — |
| [mizchi/moonix](https://github.com/mizchi/moonix) | mizchi/moonix | untriaged | normal | — | — | — |
| [mizchi/moonlight](https://github.com/mizchi/moonlight) | mizchi/moonlight | untriaged | normal | — | — | — |
| [mizchi/nanobot.mbt](https://github.com/mizchi/nanobot.mbt) | mizchi/nanobot | untriaged | normal | — | — | — |
| [mizchi/nn](https://github.com/mizchi/nn) | mizchi/nn | untriaged | normal | — | — | — |
| [mizchi/numbt](https://github.com/mizchi/numbt) | mizchi/numbt | untriaged | normal | — | — | — |
| [mizchi/oci_wasm](https://github.com/mizchi/oci_wasm) | mizchi/oci_wasm | untriaged | normal | — | — | — |
| [mizchi/pi_ext](https://github.com/mizchi/pi_ext) | mizchi/pi | untriaged | normal | — | — | — |
| [mizchi/pickle-mbt](https://github.com/mizchi/pickle-mbt) | mizchi/pkl | untriaged | normal | — | — | — |
| [mizchi/pkspec](https://github.com/mizchi/pkspec) | mizchi/pkspec | untriaged | normal | — | — | — |
| [mizchi/playwright.mbt](https://github.com/mizchi/playwright.mbt) | mizchi/playwright | untriaged | normal | — | — | — |
| [mizchi/s3](https://github.com/mizchi/s3) | mizchi/s3 | untriaged | normal | — | — | — |
| [mizchi/sandbox.mbt](https://github.com/mizchi/sandbox.mbt) | mizchi/sandbox | untriaged | normal | — | — | — |
| [mizchi/similarity.mbt](https://github.com/mizchi/similarity.mbt) | mizchi/similarity | untriaged | normal | — | — | — |
| [mizchi/sol.mbt](https://github.com/mizchi/sol.mbt) | mizchi/sol | untriaged | normal | — | — | — |
| [mizchi/sqlc_gen_moonbit](https://github.com/mizchi/sqlc_gen_moonbit) | mizchi/sqlc_gen_moonbit | untriaged | normal | — | — | — |
| [mizchi/svg](https://github.com/mizchi/svg) | mizchi/svg | untriaged | normal | — | — | — |
| [mizchi/syntree.mbt](https://github.com/mizchi/syntree.mbt) | mizchi/syntree | untriaged | normal | — | — | — |
| [mizchi/terrain](https://github.com/mizchi/terrain) | mizchi/terrain | untriaged | normal | — | — | — |
| [mizchi/threads](https://github.com/mizchi/threads) | mizchi/threads | untriaged | normal | — | — | — |
| [mizchi/tomate](https://github.com/mizchi/tomate) | mizchi/tomate | untriaged | normal | — | — | — |
| [mizchi/tornado](https://github.com/mizchi/tornado) | mizchi/tornado | untriaged | normal | — | — | — |
| [mizchi/uploda](https://github.com/mizchi/uploda) | mizchi/uploda | untriaged | normal | — | — | — |
| [mizchi/vfs](https://github.com/mizchi/vfs) | mizchi/vfs | untriaged | normal | — | — | — |
| [mizchi/vivebox](https://github.com/mizchi/vivebox) | mizchi/vivebox | untriaged | normal | — | — | — |
| [mizchi/wasi.mbt](https://github.com/mizchi/wasi.mbt) | mizchi/wasi | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt](https://github.com/mizchi/wasmtime.mbt) | mizchi/wasmtime | untriaged | normal | — | — | — |
| [mizchi/wasmtime.mbt-main](https://github.com/mizchi/wasmtime.mbt-main) | mizchi/wasmtime | untriaged | normal | — | — | — |
| [mizchi/wasmx](https://github.com/mizchi/wasmx) | mizchi/wasmx | untriaged | normal | — | — | — |
| [mizchi/whenword-mbt](https://github.com/mizchi/whenword-mbt) | mizchi/whenwords | untriaged | normal | — | — | — |
| [mizchi/whisper-mbt](https://github.com/mizchi/whisper-mbt) | mizchi/whisper | untriaged | normal | — | — | — |
| [mizchi/wit-bindgen-moonbit](https://github.com/mizchi/wit-bindgen-moonbit) | mizchi/wit_bindgen_mbt | untriaged | normal | — | — | — |
| [mizchi/wite](https://github.com/mizchi/wite) | mizchi/wite | untriaged | normal | — | — | — |
| [mizchi/x-async](https://github.com/mizchi/x-async) | moonbitlang/async | untriaged | normal | — | — | — |
| [mizchi/zlib.mbt](https://github.com/mizchi/zlib.mbt) | mizchi/zlib | untriaged | normal | — | — | — |
| [moonbit-community/postgres.mbt](https://github.com/moonbit-community/postgres.mbt) | myfreess/postgres | untriaged | normal | — | — | — |
| [moonbit-community/wasip1](https://github.com/moonbit-community/wasip1) | peter-jerry-ye/wasi | untriaged | normal | — | — | — |
| [moonbit-community/wasip2](https://github.com/moonbit-community/wasip2) | mizchi/wasip2 | untriaged | normal | — | — | — |
| [moonbitlang/async](https://github.com/moonbitlang/async) | moonbitlang/async | untriaged | normal | — | — | — |
| [moonbitlang/maria](https://github.com/moonbitlang/maria) | moonbitlang/maria | untriaged | normal | — | — | — |
| [moonbitlang/mbtcc](https://github.com/moonbitlang/mbtcc) | Kaida-Amethyst/mbtcc | untriaged | normal | — | — | — |
| [moonbitlang/moonyacc](https://github.com/moonbitlang/moonyacc) | moonbitlang/yacc | untriaged | normal | — | — | — |
| [moonbitlang/parser](https://github.com/moonbitlang/parser) | moonbitlang/parser | untriaged | normal | — | — | — |
| [moonbitlang/wasm5](https://github.com/moonbitlang/wasm5) | moonbitlang/wasm5 | untriaged | normal | — | — | — |
| [moonbitlang/x](https://github.com/moonbitlang/x) | moonbitlang/x | untriaged | normal | — | — | — |
| [SouichiroTsujimoto/astrobit](https://github.com/SouichiroTsujimoto/astrobit) | SouichiroTsujimoto/astrobit | untriaged | normal | — | — | — |
| [trkbt10/indexion](https://github.com/trkbt10/indexion) | trkbt10/indexion | untriaged | normal | — | — | — |
| [ushironoko/gitfilm](https://github.com/ushironoko/gitfilm) | ushironoko/gitfilm | untriaged | normal | — | — | — |
<!-- inventory:end -->
