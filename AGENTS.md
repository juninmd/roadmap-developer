# AGENTS.md

Roadmap de desenvolvedor 2026: a VitePress static guide (pt-BR) with learning paths per area. Deployed to GitHub Pages on push to `master`.

## Stack

- VitePress (`.vitepress/`), `vitepress-plugin-mermaid`, Vue theme components (`TechRadar.vue`)
- Node.js >= 20.19, npm (`package-lock.json`), TypeScript (`tsc --noEmit`)
- Tests: Vitest (`tests/`), Playwright (`tests-e2e/`), ESLint, markdownlint

## Commands

- Install: `npm ci`
- Dev site: `npm run docs:dev` · Build: `npm run docs:build` · Preview: `npm run docs:preview`
- Lint: `npm run lint` (ESLint) and `npm run lint:md` (markdownlint)
- Typecheck: `npm run typecheck`
- Test: `npm test` · Coverage: `npm run test:coverage` · E2E: `npm run test:e2e`

## Structure

- `roadmaps/` — learning paths as Markdown: `ai/`, `backend/`, `data/`, `devops/`, `frontend/`, `fullstack/`, `general/`, `mobile/`, `qa/`, `security/`
- `roadmap.md`, `advices.md`, `radar.md`, `index.md` — top-level pages
- `.vitepress/config.mts` — menu, sidebar and plugins; `.vitepress/theme/` — custom theme and radar data
- `utils/link-checker.ts` — link checker used by `tests/link-checker.test.ts`
- `.github/workflows/` — `validate.yml` (base-actions reusable validation), `pages.yml` (deploy), `sast.yml`, `security.yml`, `release-drafter.yml`

## Content guidelines

- Focus on 2026: generative AI and agents everywhere; sustainability (green software); privacy and edge computing (local AI); modern tools (Rust, WebGPU, platform engineering).
- Write clear, inclusive pt-BR. Be direct and practical; no lecturing.
- Link only to real, high-quality resources (official docs, well-known courses).
- Start each roadmap with a Mermaid `flowchart TD` diagram. Use emojis to aid scanning.

## Technical guidelines

- Adding a `.md` page: add it to the `sidebar` and `nav` in `.vitepress/config.mts`.
- Mermaid uses `vitepress-plugin-mermaid`. Fence blocks with ` ```mermaid ` and `flowchart TD`.
- Run `npm run docs:build` before calling work done.
- Check for broken links (`tests/link-checker.test.ts`).
- No placeholders (`TODO`, `FIXME`) in submitted content.

## Gotchas

- Deploy is automatic on push to `master` (`pages.yml`, base-actions `reusable-pages`). Never push to `master` directly.
- `.vitepress/dist` and `test-results/` are generated and git-ignored.

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.
