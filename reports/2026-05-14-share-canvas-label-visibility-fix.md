# Share canvas label visibility fix

## What changed

- The share image now renders the card native title as a separate secondary line when it exists.
- The share image now renders the deck name and year on a dedicated footer line above the URL.
- The textual share payload and clipboard payload were not changed.

## Why

- In the previous share screenshot, the native title and deck label were too easy to miss.
- The new layout gives them dedicated vertical space so they stay visible in the image.

## Files changed

- `index.html`

## Checks

- `git diff --check`
- Inline JS syntax check via `node` + `new Function(...)`
- Static review of the share canvas layout
- `npm run check` was not run because this repository does not contain a `package.json`
- `npm test` was not run because this repository does not contain a `package.json`
- `npm run build` was not run because this repository does not contain a `package.json`

## Smoke-test

- Full browser smoke-test on a mobile viewport is not available in this environment because there is no local browser runtime / Playwright.

## Notes

- No change was made to Firebase, card mappings, the guide, or the share text payload.
- The deck label/year line is image-only for the share canvas.
