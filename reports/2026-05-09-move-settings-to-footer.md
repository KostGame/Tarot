# Move settings to footer

- Branch: `feature/move-settings-to-footer`
- Issue: https://github.com/KostGame/Tarot/issues/3
- PR: https://github.com/KostGame/Tarot/pull/4
- Commit hash: `9def9e9`
- Merge commit hash: will be available after PR merge
- Changed files:
  - `index.html`
  - `reports/2026-05-09-move-settings-to-footer.md`
- GitHub Pages: https://kostgame.github.io/Tarot/

## What changed

- Moved the compact `Настройки` block from the top controls area to the footer area below the warning text.
- Changed the collapsed settings entry label to `⚙ Настройки`.
- Kept the `Перевернутые карты` switch behavior unchanged.
- Kept the localStorage key unchanged: `tarot-use-reversed-cards`.

## Checks

- Confirmed `git diff --check` passes.
- Confirmed JavaScript syntax can be parsed from `index.html`.
- Confirmed the settings block appears after the warning in DOM order.
- Checked mobile width around 390 px with local static server and headless Edge/CDP:
  - settings are collapsed by default;
  - the main work panel appears immediately after the mode/deck switches;
  - settings are below the warning;
  - `tarot-use-reversed-cards` persists after reload;
  - no horizontal scroll (`scrollWidth` equals `390`).

## Manual steps

No manual steps are required. GitHub Pages may need a short time to refresh after merge.
