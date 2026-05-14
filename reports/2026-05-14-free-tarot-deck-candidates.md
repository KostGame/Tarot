# Free tarot deck candidates research

## What was done

- Prepared a research-only survey of freely reusable tarot / tarock candidates.
- Added [docs/FREE_TAROT_DECK_CANDIDATES.md](../docs/FREE_TAROT_DECK_CANDIDATES.md).
- Updated [docs/ASSET_CANDIDATES.md](../docs/ASSET_CANDIDATES.md).
- Did not download assets.
- Did not connect new decks in the UI.
- Did not change `index.html`, share flow, Firebase, `localStorage` keys, or mappings.

## Candidate summary

- Strongest safe full-deck candidate found in this pass: `Tarocco Piemontese / Solesio 1865`.
- Highest-value historical research target: `Sola Busca`.
- Strong major-only research candidate: `Viéville tarot`.
- Reject for the current app model: `Industrie und Glück` / historical tarock packs.

## Checks

- `git diff --check`
- No runtime asset download or UI smoke-test was needed for this research-only step.
- `npm run check` was not run because the repository does not contain a `package.json` in this worktree.
- `npm test` was not run because the repository does not contain a `package.json` in this worktree.
- `npm run build` was not run because the repository does not contain a `package.json` in this worktree.

## Status

- Branch: `feature/research-free-tarot-candidates`
- Head: pending commit
- PR: not created yet
- Issue comment: pending, because the target issue number was not specified in the task text

## Follow-up proposal

- First implementation candidate: `Tarocco Piemontese / Solesio 1865`.
- Research-next candidate: `Sola Busca`.
