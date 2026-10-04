# CV

Portfolio / CV site. Vite + React + TypeScript + Tailwind v4 + shadcn/ui. Served on GitHub Pages at `/CV/`.

## Dev

```sh
bun install
bun run dev        # http://localhost:5173/CV/
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
In the repo settings, set Pages source to "GitHub Actions". The repo must be named `CV` (Vite `base` is `/CV/`).

## Editing content

Edit the typed data in `src/content/` (`profile.ts`, `journey.ts`, `skills.ts`). Put screenshots in `public/screenshots/` and the PDF CV at `public/cv.pdf`. Add shadcn components with `bunx shadcn@latest add <name>`. See `CONVENTIONS.md`.
