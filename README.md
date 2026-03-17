# Website

This site uses [Astro](https://astro.build/) with [Starlight](https://starlight.astro.build/) for docs.

## Installation

```bash
yarn install --frozen-lockfile
```

## Local Development

```bash
yarn dev
```

## Typecheck

```bash
yarn typecheck
```

## Build

```bash
yarn build
```

The production output is generated in `dist/`.

## Deployment

Deployment is handled by GitHub Actions.

1. Open a pull request to `main` and ensure CI checks pass.
2. Merge to `main` to trigger deployment to GitHub Pages.
3. Optionally run deployment manually from the Actions tab with `workflow_dispatch`.
