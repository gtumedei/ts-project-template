# ts-project-template

## Features

- ESM support + top-level await
- No compile step necessary
- Watch file changes in dev mode

## Workflow

- Clone the repo and `npm i`
- `npm run dev` to run in development and watch for changes
- `npm run typecheck` to check TypeScript types before going live
- `npm run start` in production

## Notes

I really wanted to use `ts-node-dev`, but as of 27 Jan 2023 it's still incompatible with ESM, so `nodemon` is the way.
