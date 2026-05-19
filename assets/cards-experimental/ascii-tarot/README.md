# ASCII Tarot

Date added: `2026-05-19`

This directory contains the local 78-card SVG pack used for the `ascii-tarot` deck.

## Source

- Primary source repo: https://github.com/lawreka/ascii-tarot
- Reference manifest: https://raw.githubusercontent.com/arcanaland/reference-decks/main/ascii-tarot/deck.toml
- Upstream npm package: `ascii-tarot@1.0.6`

## Pack notes

- The pack is generated locally from the upstream ASCII source deck by `scripts/generate-ascii-tarot-assets.mjs`.
- The generator is deterministic and rewrites the same 78 SVG files from the same source data.
- All cards map to the app's canonical 78-card model, so the deck has no silent fallback gap.

## Coverage

- Full deck: `78/78`
- Majors: `22`
- Minors: `56`
- Court cards: `16`

## License / reuse

- Upstream license: MIT.
- Author: Kathryn Isabelle Lawrence.
- The generated SVG cards are a local derivative of the MIT-licensed source deck and do not use external runtime hotlinks.

## Notes

- The deck is intentionally monospaced and text-forward.
- The assets are static and work without network access after the initial build.
