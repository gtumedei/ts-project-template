# ts-project-template

## Features

- ESM
- Top-level await
- No compile step necessary (but one is configured with ESBuild)
- Watch file changes in dev mode

## Workflow

- Clone the repo and `npm i`
- `npm run dev` to run in development and watch for changes
- `npm run typecheck` to check TypeScript types before going live
- Either `npm run start:tsx` to transpile in production
- Or build with `npm run build` and start with `npm run start`
