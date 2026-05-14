# Share canvas: native titles and deck label

## What changed

- In the share image, cards with a native title now render it in parentheses after the app title, for example:
  - `Сила (La Force)`
  - `Справедливость (La Giustizia)`
  - `Шут (Le Crocodile)`
  - `Суд (Le Livre sacré)`
- Added a bottom line above the link with the current deck label and year when a year can be inferred from the deck description.
- Kept the textual share payload / clipboard payload unchanged.
- Kept the share canvas as the only place where these extra labels appear.

## Files changed

- `index.html`

## Checks

- `git diff --check`
- Inline JS syntax check via `node` + `new Function(...)`
- Static review of the share canvas rendering path
- `npm run check` was not run because this repository does not contain a `package.json`
- `npm test` was not run because this repository does not contain a `package.json`
- `npm run build` was not run because this repository does not contain a `package.json`

## Smoke-test

- Full browser smoke-test is not available in this environment because there is no local browser runtime / Playwright.
- The change is limited to the image canvas and does not touch Firebase, mappings, deck selection, or share text.

## Notes

- The deck label/year line is visual-only for the share screenshot.
- No new decks were added.
