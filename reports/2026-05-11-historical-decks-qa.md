# Historical decks QA report

Date: `2026-05-11`

## Scope

Checked the UX after the historical deck additions:

- Tarot Nouveau
- Jean Dodal Tarot
- Egyptian Tarot
- Marseille historical

## What I verified

- Dropdown order keeps the historical decks grouped after the base decks.
- Labels stay short and do not include service-style suffixes.
- `major-only` decks automatically use the `Старшие` safe pool mode.
- The guide has the right deck sizes:
  - Tarot Nouveau: `78`
  - Jean Dodal: `22`
  - Egyptian Tarot: `22`
  - Marseille historical: `22`
- Fullscreen native titles are wired through the existing deck mapping.
- Egyptian tarot native titles keep the requested correspondences:
  - Fool -> `Le Crocodile`
  - Judgement -> `Le Livre sacre`
- The code paths for the share card and Firebase counter were not touched.
- No horizontal scroll regression was introduced in the checked layout logic.

## Result

I did not find a UI or mapping issue that required a code fix in this PR.
This PR is therefore report-only.

## Checks

- `git diff --check`
- Static asset counts for the four historical packs
- Code-level inspection of deck order, safe pool mode, and native-title wiring

## Notes

- `package.json` is still not present in this repository, so npm checks remain unavailable.
- I did not change any deck mappings, share flow, Firebase logic, or `localStorage` keys.
