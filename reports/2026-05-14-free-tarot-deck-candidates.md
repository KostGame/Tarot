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
- Head: `b82053a` (`Document free tarot deck candidates`)
- PR: [#80 Document free tarot deck candidates](https://github.com/KostGame/Tarot/pull/80)
- Issue comment: [issuecomment-4449850340](https://github.com/KostGame/Tarot/issues/44#issuecomment-4449850340)

## Follow-up proposal

- First implementation candidate: `Tarocco Piemontese / Solesio 1865`.
- Research-next candidate: `Sola Busca`.
