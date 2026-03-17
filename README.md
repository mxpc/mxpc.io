# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Deployment is handled by GitHub Actions:

1. Open a pull request to `main` and ensure CI passes (`typecheck` + `build`).
2. Merge to `main` to trigger deployment to GitHub Pages.
3. Optionally run deployment manually from the Actions tab using `workflow_dispatch`.
