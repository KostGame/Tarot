# Improve mobile card result layout

- Branch: `feature/card-result-mobile-layout`
- Issue: https://github.com/KostGame/Tarot/issues/7
- PR: https://github.com/KostGame/Tarot/pull/8
- Merged: pending at report creation
- Commit hash: `5a9c2f9`
- Merge commit hash: will be available after PR merge
- Changed files:
  - `index.html`
  - `reports/2026-05-09-card-result-mobile-layout.md`
- GitHub Pages: https://kostgame.github.io/Tarot/

## Mobile result layout

- On mobile widths, the result card keeps the card image on the left and the role/name/keywords on the right.
- The main card message now moves below the top row and spans the full card width.
- The mobile result title, summary, card spacing, and text sizes are tightened without changing the desktop layout.
- On desktop, the result card keeps its existing two-column layout.

## Fullscreen card view

- The card image area is now a real button with `alt` text on the image, visible focus styling, and pointer cursor on desktop.
- Tapping/clicking the card opens a fullscreen overlay with a dimmed backdrop, large contained card image, and card title.
- The overlay closes through:
  - the close button;
  - clicking the backdrop;
  - pressing Escape.
- While the overlay is open, body scrolling is locked and restored on close.
- If the card is reversed, only the fullscreen image is rotated; the title text is not rotated.

## First mobile screen

- The existing compact mobile hero spacing remains in place.
- On a 390 x 844 viewport, the `Вытянуть карту дня` CTA is visible without scrolling.

## Reversed cards

- Reversed cards were checked with the optional reversed-card setting enabled.
- The result card and fullscreen view both keep text upright while rotating only the card image.
- The localStorage key `tarot-use-reversed-cards` was not changed.

## Checks

- `git diff --check`
- JavaScript syntax parsed from `index.html`
- Local static server with headless Edge/CDP at 390 x 844:
  - no horizontal scroll;
  - day-card result layout is compact;
  - message spans the available width below the top row;
  - fullscreen opens by clicking the card;
  - fullscreen closes by button, backdrop, and Escape;
  - reversed fullscreen rotates only the image;
  - question mode renders 3 cards.
- Local static server with headless Edge/CDP at 1024 x 900:
  - desktop result layout remains two-column;
  - no horizontal scroll.

## Manual steps

No manual steps are required. GitHub Pages may need a short time to refresh after merge.
