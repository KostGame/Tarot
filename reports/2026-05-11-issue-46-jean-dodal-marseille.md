# Issue #46 — Jean Dodal Tarot major-only deck

## Summary

- Branch: `feature/issue-46-jean-dodal-marseille`
- PR: [#72 Add Jean Dodal Tarot major-only deck](https://github.com/KostGame/Tarot/pull/72)
- Code commit: `8b0e1b7` (`Add Jean Dodal major-only deck`)
- Report date: `2026-05-11`

## What changed

- Connected `Jean Dodal Tarot` in the deck selector as a historical Marseille-type major-only deck.
- Added a local 22-card asset pack at `assets/cards-experimental/jean-dodal-marseille/`.
- Kept the dropdown label short: `Jean Dodal Tarot`.
- Added title-based major mapping instead of blind number reuse.
- Added native titles for the 22 majors.
- Added `docs/JEAN_DODAL_MAPPING.md`.
- Updated `docs/ASSET_CANDIDATES.md`, `docs/HISTORICAL_DECK_CANDIDATES.md`, and `assets/cards-experimental/README.md`.

## Mapping notes

- The pack is major-only: `22/22`.
- `Strength` is mapped to the source scan titled `La Force`.
- `Justice` is mapped to the source scan titled `La Justice`.
- Minors are intentionally not connected.

## Checks

- `git diff --check`
- inline JS syntax check via `new Function(...)`
- `npm run check`: not run, because `package.json` is absent in this repository
- `npm test`: not run, because `package.json` is absent in this repository
- `npm run build`: not run, because `package.json` is absent in this repository

## Smoke-test

- Static verification confirms the deck entry is present, the safe pool mode is `Старшие` for `major-only`, and the 22 local image files are present.
- Visual browser smoke-test could not be completed in this environment because no local browser binary is available (`msedge`, `chrome`, and `firefox` were all absent).

## Status

- PR is open and not drafted.
- No Firebase, share flow, or localStorage settings were changed.
- The connected pack is local-only and does not use runtime hotlinks.
