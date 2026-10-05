# abdultheactivepiecer.github.io

Abdul-Rahman Al-Hussien's CV site. Vite + React + TypeScript + Tailwind v4 + shadcn/ui + Motion. Served on GitHub Pages at https://abdultheactivepiecer.github.io/.

## Dev

```sh
bun install
bun run dev        # http://localhost:5173/
bun run typecheck
bun run lint
bun run format
```

## Build

```sh
bun run build      # tsc + vite build, then copies dist/index.html -> dist/404.html
bun run preview
```

## Deploy

Push to `main`; `.github/workflows/deploy.yml` builds and deploys via GitHub Pages.
In the repo settings, set Pages source to "GitHub Actions". The repo is named `abdultheactivepiecer.github.io`, so the site is served at the root (Vite `base` is `/`).

## Editing content

- Site copy lives as typed data in `src/content/` (`profile.ts`, `journey.ts`, `work.ts`, `side-quests.ts`, `typescript.ts`).
- Screenshots go in `public/shots/`. Raw captures stay out of the repo.
- The PDF CV is `public/cv.pdf`, printed from `docs/cv-pdf/cv.html` with `docs/cv-pdf/build.sh`.
- See `CONVENTIONS.md` for code conventions.
