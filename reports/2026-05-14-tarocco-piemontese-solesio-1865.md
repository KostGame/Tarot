# Add Tarocco Piemontese / Solesio 1865 deck

## What was done

- Added a new full historical deck: `tarocco-piemontese-solesio-1865`.
- Downloaded and normalized a local 78-card pack from Wikimedia Commons.
- Excluded the back side image from the connected pack.
- Added native titles for all 78 cards.
- Updated the historical candidate documentation.
- Added a deck-specific mapping doc and a pack README.

## Files changed

- `index.html`
- `assets/cards-experimental/tarocco-piemontese-solesio-1865/` (78 local card files + `README.md`)
- `assets/cards-experimental/README.md`
- `docs/ASSET_CANDIDATES.md`
- `docs/FREE_TAROT_DECK_CANDIDATES.md`
- `docs/TAROCCO_PIEMONTESE_MAPPING.md`

## Asset validation

- Local pack count: `78/78`
- Missing cards: `0`
- Duplicate cards: `0`
- Broken links: `0`
- File signature check: JPEG signatures verified on all 78 files
- Size check: all files were at least `500x847` and at most `500x887`
- Runtime hotlink: none for the connected deck

## Checks

- `git diff --check`
- Inline JS syntax check via `node` + `new Function(...)`
- Asset signature / dimension validation on all local files
- `npm run check` was not run because this repository does not contain a `package.json`
- `npm test` was not run because this repository does not contain a `package.json`
- `npm run build` was not run because this repository does not contain a `package.json`

## Smoke-test

- Static verification confirmed the deck is wired into the selector and points to the local `assets/cards-experimental/tarocco-piemontese-solesio-1865/` pack.
- A full visual browser smoke-test was not available in this environment because the browser backend/plugin and a local system browser were unavailable.

## Issue / PR status

- Issue created: [#81 Add Tarocco Piemontese / Solesio 1865 deck](https://github.com/KostGame/Tarot/issues/81)
- PR: [#82 Add Tarocco Piemontese / Solesio 1865 deck](https://github.com/KostGame/Tarot/pull/82)
- Head commit: `2a7cf44` (`Add Tarocco Piemontese full deck`)

## Follow-up

- The safest full-deck candidate from the earlier research pass is now connected.
- `Sola Busca` remains the best next research target for a more distinctive historical full-deck follow-up.
