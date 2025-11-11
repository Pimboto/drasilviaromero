# Repository Guidelines

## Project Structure & Module Organization
The App Router code lives in `app/`, with route groups mapping directly to top level pages; client only widgets stay in `components/` to keep `app/` lean.
Shared runtime settings (SEO metadata, feature flags, theming tokens) live in `config/`, presentation tokens stay in `styles/`, and static files belong in `public/`.
Type definitions for server actions, API payloads, and HeroUI props live in `types/`; mirror this structure for any new feature to keep imports predictable.

## Build, Test, and Development Commands
Use `pnpm dev` (or `npm run dev`) for local development; it runs `next dev --turbopack` with hot refresh.
`pnpm build` performs a production build, and `pnpm start` serves the compiled output, so run both before cutting a release.
Run `pnpm lint` to apply ESLint auto fixes; add `SKIP_ENV_VALIDATION=1` locally if you only need type or lint feedback without full env vars.

## Coding Style & Naming Conventions
Stick to TypeScript, two space indentation, and module scoped `type` exports.
React components and files in `components/` use `PascalCase`, while route segments in `app/` remain `kebab-case` (example: `app/(marketing)/about/page.tsx`).
Favor HeroUI primitives plus Tailwind utility classes; encapsulate repeated Tailwind sets with `tailwind-variants` helpers in the same folder.
The bundled eslint and prettier config enforces import order, unused checks, and accessibility rules, so run lint before commits to keep CI quiet.

## Testing Guidelines
The template ships without a default runner, so add component or integration specs alongside features using the `*.spec.tsx` pattern (example: `components/Button/Button.spec.tsx`).
Prefer React Testing Library with Vitest or Jest for DOM work, and keep mock data in `__mocks__/`.
Until automated coverage is added, smoke test key flows with `pnpm dev` before pushing and record any manual steps in the pull request.

## Commit & Pull Request Guidelines
This repo is distributed without `.git`, so adopt Conventional Commits (`feat: add pricing card`, `fix: handle null hero data`) to keep downstream history searchable.
Each pull request should include a concise summary, screenshots for UI shifts, linked issue IDs, and notes about testing performed (manual or automated).

## Configuration & Security Tips
Secrets and API keys belong in `.env.local`; never commit them.
Keep the `public-hoist-pattern[]=*@heroui/*` line in `.npmrc` when using pnpm so HeroUI remains deduped.
Update `next.config.js` and any files in `config/` together whenever domains, analytics IDs, or theme defaults change.
