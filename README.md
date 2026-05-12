# jetlint.github.io

Marketing site and docs for [jetlint](https://github.com/jetlint) — a fast, type-aware TypeScript linter.

Built with [Astro](https://astro.build/). Deployed to GitHub Pages on push to `main`.

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output lands in `dist/`. The CI workflow at `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
