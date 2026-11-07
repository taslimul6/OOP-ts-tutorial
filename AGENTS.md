# AGENTS

## Project
- Minimal TypeScript project compiled to `dist/` (ESNext, NodeNext modules).
- Browser entry: `index.html` loads `./dist/index.js` as `type="module"`.

## Commands
- Build: `npx tsc`
- No test/lint scripts configured yet.

## Conventions
- Source lives in `src/`; compiled output in `dist/`.
- Keep `tsconfig.json` strict settings intact unless asked to change them.
- Do not add comments or dependencies unless required.
