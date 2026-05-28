# Visconti-Sforza Composite deck report

Date: 2026-05-28

## Summary

Implemented `visconti-sforza-composite` as a partial composite historical deck with local historical assets and Rider-Waite-Smith fallback for missing source cards.

## Result

- Deck id: `visconti-sforza-composite`
- UI label: Visconti-Sforza
- Coverage: partial-composite
- Historical assets committed: 74
- Fallback cards: 4

## Sources

- Primary source: https://www.fromoldbooks.org/ViscontiSforza-TarotCards/
- Source context / rights note: https://www.madore.org/~david/weblog/d.2003-09-17.0234.html
- Supplemental research: Wikimedia Commons file pages and category search

## Rights status

FromOldBooks card pages state the included historical images are out of copyright / public domain in the USA and royalty-free for all-purpose use with credit requested. David Madore's source note states that the seventy-four Visconti tarot cards are in the Public Domain and can be copied and used freely for any purpose.

## Fallback cards

- `major-15-devil` — Дьявол: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set
- `major-16-tower` — Башня: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set
- `pentacles-12-knight` — Рыцарь Пентаклей: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set; Cary-Yale Knight of Coins was rejected as outside the app 78-card Visconti-Sforza composite model
- `swords-03-three` — Тройка Мечей: not present in the FromOldBooks 74-card set; a Commons PD candidate exists but was not downloaded because Wikimedia returned 429 / robot-policy errors during this build

## Source findings

FromOldBooks was checked first and has 74 items. The expected missing cards were confirmed: 3 of Swords, Knight of Coins, Devil, Tower.

The expected related / replacement cards are present in the checked source: Fortitude, Temperance, Moon, Star, Sun, World.

Wikimedia Commons has a public-domain Tre di spade candidate, but it was not downloaded because Wikimedia returned 429 / robot-policy errors during the build. This kept the committed asset pack deterministic and source-clean.

## Implementation

- Added local historical assets in `assets/cards/visconti-sforza-composite/`.
- Added `visconti-sforza-composite` to the deck selector as Visconti-Sforza.
- Added coverage: "partial-composite" so the deck can use all pool modes.
- Added `fallbackCards` metadata for the four missing cards.
- Added a normal-result-only fallback note: Отсутствует в оригинальной колоде.

## Note visibility

Shown only on normal result cards for fallback cards.

Not shown in fullscreen, image-only preview, share canvas, share text, clipboard fallback, Open Graph / social preview, card title, or interpretation text.

## Validation checklist

- Target mappings: 78
- Historical assets: 74
- Fallback cards: 4
- Fallback reasons: 4/4
- Modern reconstructions: not used
- Cary-Yale extra cards: not used
- Runtime hotlinks: not used

## Required cards checked

- Дьявол: fallback
- Башня: fallback
- Рыцарь Монет: fallback
- Тройка Мечей: fallback
- Сила: historical asset
- Умеренность: historical asset
- Луна: historical asset
- Звезда: historical asset
- Солнце: historical asset
- Мир: historical asset

## Checks

- git diff --check: passed
- JPG signature validation: passed, 74/74 historical files are valid JPEGs
- Static mapping validation: passed, 74 historical assets + 4 classic fallback cards = 78 target cards
- Source URL table validation: passed, 78 rows
- Required fallback validation: passed, fallback files exist in `assets/cards/`
- Required historical cards validation: passed for Strength, Temperance, Moon, Star, Sun, World
- inline JS syntax check: passed (`scripts_ok=1`)
- `npm run check`: unavailable, `package.json` is absent
- `npm test`: unavailable, `package.json` is absent
- `npm run build`: unavailable, `package.json` is absent

## Smoke-test

- Deck selector entry: statically verified in `index.html` as `Visconti-Sforza`
- Pool modes: `partial-composite` is treated as unrestricted so `all`, `major-court`, and `majors` can keep working with fallback images
- Normal fallback note: statically verified as rendered only by `readingCard`
- Fullscreen/share/image-only preview: no fallback-note render path was added
- Runtime hotlinks: none for card images; local assets and classic fallback are used

## Merge status

Pending.
