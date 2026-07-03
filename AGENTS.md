# documentation

Fishjam documentation site (Docusaurus, Yarn Berry).

## Cursor Cloud specific instructions

Node (via nvm) and Corepack/Yarn are pre-installed; the startup script runs `yarn install`. Non-obvious notes:

- Validated command: `yarn typecheck` (passes).
- `yarn start` runs the Docusaurus dev server; `yarn build` produces the static site. `yarn generate:python:docs` / `update-api` pull docs from the SDKs and may need those repos/network.
