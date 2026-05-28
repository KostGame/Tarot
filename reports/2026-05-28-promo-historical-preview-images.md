# Promo historical preview images report

Date: `2026-05-28`

## Summary

Replaced the CSS-only historical archive placeholders in `promo/` with real local preview images for the decks whose source and reuse status are already documented in the repository:

- `Tarot de Marseille`
- `Sola Busca`
- `Visconti-Sforza`

`Etteilla Type I` remains a CSS placeholder because the safe local pack is still not committed and the rights/source path remains a blocker.

No new playable app decks were added. No runtime hotlinks were introduced. The main app `index.html` was not changed.

## Branch

- Branch: `feature/promo-historical-preview-images`
- Issue: GitHub issue #121
- PR: pending at the time of this report

## Added preview images

| Local path | Original source URL | License / public-domain status | Deck name | Card name |
| --- | --- | --- | --- | --- |
| `assets/cards-experimental/marseille-historical/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages for the set are marked `CC BY-SA 4.0`; see `assets/cards-experimental/marseille-historical/README.md` | Tarot de Marseille | Le Mat |
| `assets/cards-experimental/marseille-historical/major-08-strength.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages for the set are marked `CC BY-SA 4.0`; see `assets/cards-experimental/marseille-historical/README.md` | Tarot de Marseille | La Force |
| `assets/cards-experimental/marseille-historical/major-17-star.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages for the set are marked `CC BY-SA 4.0`; see `assets/cards-experimental/marseille-historical/README.md` | Tarot de Marseille | L'Étoile |
| `assets/cards-experimental/sola-busca/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons file pages for the numbered scans mark the images as public domain; see `assets/cards-experimental/sola-busca/README.md` | Sola Busca | Fool / app `major-00-fool` |
| `assets/cards-experimental/sola-busca/swords-03-three.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons file pages for the numbered scans mark the images as public domain; see `assets/cards-experimental/sola-busca/README.md` | Sola Busca | Three of Swords / app `swords-03-three` |
| `assets/cards-experimental/sola-busca/wands-01-ace.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons file pages for the numbered scans mark the images as public domain; see `assets/cards-experimental/sola-busca/README.md` | Sola Busca | Ace of Wands / app `wands-01-ace` |
| `assets/cards/visconti-sforza-composite/major-00-fool.jpg` | `https://www.fromoldbooks.org/ViscontiSforza-TarotCards/pages/arcanum-fool/` | FromOldBooks states the image is out of copyright / public domain in the USA and requests credit; see `assets/cards/visconti-sforza-composite/ATTRIBUTION.md` | Visconti-Sforza | Fool |
| `assets/cards/visconti-sforza-composite/major-11-justice.jpg` | `https://www.fromoldbooks.org/ViscontiSforza-TarotCards/pages/arcanum-08-justice/` | FromOldBooks states the image is out of copyright / public domain in the USA and requests credit; see `assets/cards/visconti-sforza-composite/ATTRIBUTION.md` | Visconti-Sforza | Justice |
| `assets/cards/visconti-sforza-composite/swords-03-three.jpg` | `https://commons.wikimedia.org/wiki/File:Tre_di_spade.jpg` | Commons file page metadata marks the image public domain / attribution not required; see `assets/cards/visconti-sforza-composite/ATTRIBUTION.md` | Visconti-Sforza | Three of Swords / Tre di spade |

## Etteilla blocker

- `Etteilla Type I` stays on the CSS-only placeholder treatment.
- The issue request allows placeholders to remain when source rights are unclear.
- The repository still does not contain a safe, separately verified local `etteilla-historical` preview pack for the promo page.
- No external images were substituted for the blocker.

## Implementation notes

- The promo archive cards now use local `<img>` thumbnails for the three safe historical decks above.
- All image paths are local repository assets; no runtime hotlinks were added.
- The archive remains promo-only and does not change deck registry, card data, or the playable app.

## Checks

- `git diff --check`: passed
- Structural smoke-test (Node REPL, local file parsing): passed
- Browser smoke-test: attempted with Chrome and Edge headless, but both hit the same GPU-process crash in this environment before the page could render
- `npm run check`: unavailable, because the repository root does not contain `package.json`
- `npm test`: unavailable, because the repository root does not contain `package.json`
- `npm run build`: unavailable, because the repository root does not contain `package.json`
