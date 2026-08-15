# MoonBit Gardening

ユーザーには日本語で報告する。

このリポジトリは、MoonBit の破壊的変更に追従して `mizchi` の公開パッケージ群を順番に保守するための台帳である。単一パッケージの修正だけで終わらず、依存するパッケージへ更新を波及させる。

## 基本方針

- TDD で進める: 探索 → Red → Green → Refactoring。
- ユーザーの未コミット変更や untracked files は保持する。
- `moon.mod.json` から `moon.mod` への公式な自動移行が発生した場合は、その差分も含める。
- 非推奨 API を機械的に隠すのではなく、最新 API へ移行する。警告抑制はターゲット実装差など、修正不能なものに限定し理由を残す。
- 互換 API は必要なら残し、新 API を追加して依存側を段階的に移行する。

## リリース追従手順

1. `just refresh` など、このリポジトリの台帳更新コマンドを実行し、公開版・ローカル版・最終更新日・依存関係を確認する。
2. 基盤パッケージから依存順に作業する。基盤を patch release してから、その公開版を依存側に指定する。
3. 対象リポジトリで `AGENTS.md`、作業ツリー、manifest、依存、ターゲット設定、既存テストを探索する。
4. 最新 MoonBit toolchain で `moon update`、`moon fmt`、`moon info`、`moon check --deny-warn` を実行し、破壊点と警告を列挙する。
5. 挙動追加やバグ修正では、先に最小のテストを追加して Red を確認する。外部通信は純粋な request/response 変換ロジックへ分離し、そこを単体テストする。
6. コンパイラ警告を修正する。よく発生する移行項目:
   - 古いコンストラクタ (`Ref::new`, `Map::new`) を現行構文へ変更する。
   - deprecated な `to_string()` を用途に応じて `to_owned()` 等へ変更する。
   - `inspect` を `moonbitlang/core/debug` の `@debug.debug_inspect` へ移行し、snapshot を実際の Debug 表現に更新する。
   - implicit trait method promotion を明示的な trait 呼び出し、または `extend` へ変更する。
   - `try?`、error syntax、async API を現行仕様へ移行する。
7. 状態、transport、レスポンス解析を分離して Green にし、重複コードを共通層へ移す。
8. 少なくとも `js`、`native`、`wasm`、`wasm-gc` で次を実行する。
   - `moon check --deny-warn --target <target>`
   - `moon test --target <target>`
   ターゲット固有ランタイムが未対応なら、build/check と純粋ロジックのテストを通し、実行不能な host import を報告する。
9. `just release-check` があれば実行する。`moon publish --dry-run` で展開後パッケージも検証する。
10. manifest の patch version を1つ上げて `moon publish` する。公開成功後に commit し、main を push する。
11. このリポジトリの台帳を再更新し、次に壊れている依存パッケージへ進む。

## 検証上の注意

- snapshot 更新は失敗内容を確認してから行う。表現変更だけであることを確認し、未使用になった `expected` 変数を残さない。
- `moon info` が生成する `pkg.generated.mbti` は公開 API 差分として確認する。
- `git diff --check` と `git status --short` で、公開前と commit 前に差分を確認する。
- Nix 由来の削除済み Apple SDK が環境変数に残って native build や registry の Git 操作を壊す場合は、次のように環境を消して実行する。

  ```sh
  env -u SDKROOT -u DEVELOPER_DIR -u NIX_CFLAGS_COMPILE -u NIX_LDFLAGS CC=/usr/bin/clang <command>
  ```

- `moon publish --dry-run` が server status `202 Accepted` と検証成功を表示した後に非ゼロ終了する場合は、ログ上の package/version と展開後 check の成功を確認してから実 publish を判断する。

## 完了報告

次を簡潔に報告する。

- 更新した依存と version
- 修正した破壊的変更・警告
- 各ターゲットの check/test 件数と例外
- publish した package version
- commit hash と push 結果
- 意図的に残した未追跡ファイルや既知の toolchain 制約
