# AGENTS.md

## Cursor Cloud specific instructions

This is a React (TypeScript) single-page application using Create React App (`react-scripts 3.4.0`).

### Services

| Service | Command | Port |
|---|---|---|
| React Dev Server | `BROWSER=none npm run start:dev` | 3000 |
| Express Prod Server | `npm run build && npm start` | 8080 |

Only the React dev server is needed for development. The Express server is for production-like testing only.

### Key notes

- **Node version**: Requires Node 18 (`nvm use 18`). The project pins `"node": "18.12.0"` in `package.json`.
- **OpenSSL flag**: The `start:dev` and `build` scripts already include `--openssl-legacy-provider` to work with Node 18.
- **Lint**: `npx prettier --check "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"`. There is one pre-existing formatting issue in `src/index.css`.
- **Tests**: `CI=true npm test`. The sole test (`App.test.tsx`) is a leftover CRA boilerplate that looks for "learn react" text and fails — this is a pre-existing issue, not a regression.
- **Build**: `npm run build` compiles with warnings (unused vars) but succeeds.
- **No databases or external services** are required. Blog content from Dev.to/Medium is fetched client-side and will simply be empty without network access.
