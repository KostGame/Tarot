# Issue #76 — Share text formatting fix

## Summary

- Branch: `feature/issue-76-share-text-fix`
- Base: latest `origin/main`
- Goal: keep the app link separate from the card description in text/clipboard share payloads.

## What changed

- Updated only the textual share payload.
- Clipboard payload now ends with a separate `Карта дня` block and the stable app URL.
- The stable URL used in the payload is `https://kostgame.github.io/Tarot/`.
- No HTML, Markdown, canvas rendering, Firebase, decks, guide, mapping, or `localStorage` changes were made.
- No automatic Telegram redirect was introduced.

## Checks

- `git diff --check`
- inline JS syntax check via `new Function(...)`
- `npm run check`: not run, because `package.json` is absent in this repository
- `npm test`: not run, because `package.json` is absent in this repository
- `npm run build`: not run, because `package.json` is absent in this repository

## Smoke-test

- Static review confirms the payload formatter now separates the card content from the app link.
- Browser smoke-test was not run in this environment; no local browser binary is available here.

## Status

- Only the share text / clipboard payload formatting was changed.
