# QA: Tarocco Piemontese after PR #82 merge

## What was checked

- `Tarocco Piemontese` is present in the deck selector with the short label only.
- The connected pack is the local `78/78` `tarocco-piemontese-solesio-1865` asset folder.
- `major-08-strength.jpg` and `major-11-justice.jpg` are the only Strength / Justice files in the pack.
- The old filenames `major-08-justice.jpg` and `major-11-strength.jpg` are not present anymore.
- `nativeTitles` are wired for the deck and show:
  - `Сила (La Forza)`
  - `Справедливость (La Giustizia)`
- The guide / fullscreen title strategy still uses the app title as the primary label and the native title as the secondary line.
- Historical decks continue to resolve their own native titles and mappings:
  - Tarot Nouveau: `78`
  - Jean Dodal Tarot: `22`
  - Egyptian Tarot: `22`
  - Marseille historical: `22`
- Marseille / Jean Dodal Strength and Justice are not flipped in the canonical app layer:
  - Marseille historical: `La Force` -> `major-08-strength`, `La Justice` -> `major-11-justice`
  - Jean Dodal historical titles are still mapped through the existing native-title strategy
- Egyptian historical titles remain correct:
  - Fool -> `Le Crocodile`
  - Judgement -> `Le Livre sacré`
- The share-card flow was not modified by this QA work.
- The Firebase counter was not modified by this QA work.

## Static validation

- `git diff --check`
- Inline JS syntax check via `node` + `new Function(...)`
- Local asset validation for the Tarocco pack:
  - 78 JPEG files
  - valid JPEG signatures on all files
  - dimensions within the expected pack range
- Verified by search that the deck configuration points to the Tarocco local pack and does not fall back to `rws-classic`

## Browser smoke-test

- A live browser smoke-test on a mobile viewport around `390px` was not available in this environment because no local browser binary / Playwright runtime was installed.
- I therefore treated this as a static QA pass and did not change product code.

## Result

- No UI or mapping regressions were found in the checked paths.
- No code fix was needed.
- This is a report-only QA pass after PR #82 merge.

## Repo state

- Base branch updated to current `main` after merge commit `1700ddc`.
- No product files were changed in this QA follow-up.
