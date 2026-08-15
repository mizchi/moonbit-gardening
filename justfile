default: check

test:
    pnpm test

refresh:
    pnpm refresh
    pnpm render

verify repo:
    node scripts/verify.mjs {{repo}}

check:
    pnpm test
    node --check scripts/refresh.mjs
    node --check scripts/render.mjs
    node --check scripts/verify.mjs
