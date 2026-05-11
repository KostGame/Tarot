# Egyptian Tarot / Falconnier major-only deck

Date: `2026-05-11`

## What changed

- Connected `egyptian-falconnier` in `index.html` as a major-only historical deck.
- Added explicit mapping for all 22 major arcana cards.
- Added native titles for all 22 cards.
- Added the local asset pack under `assets/cards-experimental/egyptian-falconnier/`.
- Updated deck-candidate documentation and asset notes.

## Asset pack

- Source: [Commons category / Egyptian Tarot (Falconnier)](https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier))
- Coverage: `22/22`
- Local file format: PNG
- File size target: 500px thumbnails
- Missing assets: `0`
- Duplicate mappings: `0`
- General `Egyptian-tarot.jpg` file: intentionally not used

## Key mapping checks

- `Le Crocodile` -> app Fool / `major-00-fool`
- `Le Livre sacré` -> app Judgement / `major-20-judgement`
- Safe pool mode: `majors`
- Dropdown label: `Egyptian Tarot`

## Files changed

- `index.html`
- `docs/EGYPTIAN_FALCONNIER_MAPPING.md`
- `docs/ASSET_CANDIDATES.md`
- `docs/HISTORICAL_DECK_CANDIDATES.md`
- `assets/cards-experimental/README.md`
- `assets/cards-experimental/egyptian-falconnier/README.md`
- `assets/cards-experimental/egyptian-falconnier/*.png`

## Validation

- `git diff --check`
- JS syntax check for the inline script extracted from `index.html` with `node --check`
- PNG signature check for all 22 downloaded images
- Dimension check for all 22 images:
  - width: `500px` for every card
  - height varies per card, as expected

## Checks not available

- `package.json` is not present in this repository, so `npm run check`, `npm test`, and `npm run build` were not available.

## Smoke check

- Verified the code wiring for the deck registration, native titles, and major-only coverage.
- Verified the downloaded asset pack is complete and consists of valid PNGs at the requested compact size.
- A full interactive browser smoke-test was not available in this shell environment, so I did not claim a manual click-through beyond the static/code-level checks above.

