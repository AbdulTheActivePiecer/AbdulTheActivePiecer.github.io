# Conventions

Mirrored from the Activepieces frontend (`packages/web`) so code feels familiar.

## Sources

- `activepieces/CLAUDE.md`, `AGENTS.md`: exported types and constants go at the END of a file, after all logic.
- `packages/web/CLAUDE.md`: structure, Tailwind and component rules.
- `packages/web/components.json`: shadcn config (copied: new-york, neutral, CSS variables, lucide).
- `packages/web/src/styles.css`: Tailwind v4 theme, `@custom-variant dark`.
- `.prettierrc`, `.editorconfig`, `.eslintrc.base.json`: formatting and lint.

## Stack

- Tailwind v4 (CSS-first, no `tailwind.config`; `@tailwindcss/vite`). `components.json` has `tailwind.config: ""`.
- Radix via the `radix-ui` umbrella package, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`.
- Package manager: bun (activepieces uses bun).

## Layout (`src/`)

- `app/`: app shell (header, layout, theme toggle).
- `features/<name>/`: one folder per page section/feature, e.g. `features/hero/hero-section.tsx`.
- `components/ui/`: shadcn primitives only (generated; edit sparingly). Shared non-primitive components go in `components/custom/`.
- `lib/`: utilities. `cn()` lives in `lib/utils.ts`.
- `hooks/`: shared hooks, `kebab-case` files (`use-theme.ts`).
- `content/`: typed data for the site; edit these to change copy.

## Naming and style

- Files and folders are kebab-case; components are PascalCase, named exports (no default exports).
- Alias `@/` -> `src/`. Use it for cross-folder imports; relative only within the same folder.
- Prettier: `singleQuote: true`, 2-space indent, LF, final newline (`.editorconfig`).
- ESLint: typescript-eslint recommended; `unused-imports/no-unused-imports` warn; unused vars warn unless prefixed `_`; `no-explicit-any` warn.

## Tailwind

- Always compose classes with `cn()` from `@/lib/utils`; never template-literal class strings.
- No arbitrary font sizes; use theme tokens. No negative margins; use `gap`/padding/`space-*`.
- Theming via CSS variables in `styles.css` (`:root` and `.dark`), class strategy for dark mode.
- Reuse existing components before creating new ones; extend with props rather than duplicating.

## Tests

- If added: live under `test/` (not `src/`), mirror source paths, import via `@/`.

## Deviations

- No Zustand, React Query, router or i18n yet (not needed for a static page).
- Single `tsconfig.app.json` + `tsconfig.node.json` (Vite template) instead of the Nx base config.
- ESLint flat config (`eslint.config.js`) since ESLint 10 dropped `.eslintrc`.
