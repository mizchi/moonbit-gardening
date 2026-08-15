default: check

test:
    pnpm test

refresh:
    pnpm refresh
    pnpm render

order:
    env -u SDKROOT -u DEVELOPER_DIR -u NIX_CFLAGS_COMPILE -u NIX_LDFLAGS CC=/usr/bin/clang moon run --target native dependency-order.mbtx

verify repo:
    node scripts/verify.mjs {{repo}}

check:
    pnpm test
    node --check scripts/refresh.mjs
    node --check scripts/render.mjs
    node --check scripts/verify.mjs
