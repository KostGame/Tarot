# Asset Candidates

Date of the list: `2026-05-18`.

This document records experimental and alternative card decks for `KostGame/Tarot`.
Only sets that were safely downloaded or locally rendered and mapped unambiguously to the current model are connected in the UI.

## Connected in UI

### `rws-classic`

- Status: stable base deck.
- Source: Wikimedia Commons, Rider-Waite-Smith tarot deck (TaionWC).
- Local files: `assets/cards/`
- Coverage: `78/78`
- Notes: primary fallback for all experimental decks.

### `rws-dark-classic`

- Status: stable theme variant of the same deck.
- Source: the same local `rws-classic` images.
- Local files: `assets/cards/`
- Coverage: `78/78`
- Notes: uses CSS dark treatment only.

### `tarot-nouveau-grimaud-1898`

- Status: connected in UI as a full historical deck.
- UI label: `Tarot Nouveau`
- Detailed label for docs: `Tarot Nouveau · Grimaud 1898`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898`
- Local files: `assets/cards-experimental/tarot-nouveau-grimaud-1898/`
- Coverage: `78/78`
- Back side: excluded from the pack
- License / reuse: public domain scan on Commons; recheck individual Commons file pages if the pack is reused outside this project.
- Mapping strategy: normalize the French suit structure to the app's `wands / cups / swords / pentacles` model and map trumps as `Excuse` + `Atout 1..21`.
- Native titles strategy: show French native labels as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a French gaming tarot deck from 1898; the app's meanings remain an educational layer on top of the deck imagery.

### `tarocco-piemontese-solesio-1865`

- Status: connected in UI as a full historical deck.
- UI label: `Tarocco Piemontese`
- Detailed label for docs: `Tarocco Piemontese · Solesio 1865`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865`
- Local files: `assets/cards-experimental/tarocco-piemontese-solesio-1865/`
- Coverage: `78/78`
- Back side: excluded from the pack
- License / reuse: Commons file pages for the card scans mark the images as public domain. Recheck the individual Commons file pages if the assets are reused outside this project.
- Mapping strategy: title-based trumps plus direct suit/rank mapping to canonical app card ids.
- Native titles strategy: show Italian native titles as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a historical Italian gaming tarot deck; the app's meanings remain an educational layer on top of the imagery.

### `sola-busca`

- Status: connected in UI as a full historical deck.
- UI label: `Sola Busca`
- Detailed label for docs: `Sola Busca · Italian Renaissance pack`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck`
- Local files: `assets/cards-experimental/sola-busca/`
- Coverage: `78/78`
- Back side: excluded from the pack
- License / reuse: public domain scans on Commons; extra non-core files from the category were excluded from the curated pack.
- Mapping strategy: title-based trumps plus direct suit/rank mapping to canonical app card ids.
- Native titles strategy: show the Sola Busca printed names as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a historical Italian gaming tarot deck; the app's meanings remain an educational layer on top of the imagery.

### `jean-dodal-marseille`

- Status: connected in UI as a historical major-only deck.
- UI label: `Jean Dodal Tarot`
- Detailed label for docs: `Jean Dodal Tarot · Marseille 1701`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- Local files: `assets/cards-experimental/jean-dodal-marseille/`
- Coverage: `22/22` major arcana only.
- License / reuse: public domain scans on Commons; check the individual file pages and the tarot-history.com credit before reuse outside this project.
- Mapping strategy: title-based matching for the majors; app `Strength` uses the source scan titled `La Force`, and app `Justice` uses the source scan titled `La Justice`.
- Native titles strategy: show French native labels as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a Marseille 1701 major-only educational layer; minors are intentionally not connected because no safe 56-card pack was assembled.

### `marseille-historical`

- Status: connected in UI as a historical major-only deck.
- Source: Wikimedia Commons, Tarot de Marseille - Nicolas Conver 1760.
- Local files: `assets/cards-experimental/marseille-historical/`
- Coverage: `22/22` major arcana only.
- Notes: majors are mapped by title; minors are intentionally not connected because a safe full minor pack was not found.

### `oswald-wirth-tarot`

- Status: connected in UI as a historical major-only deck.
- UI label: `Oswald Wirth`
- Detailed label for docs: `Oswald Wirth · 1889`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck`
- Local files: `assets/cards-experimental/oswald-wirth-tarot/`
- Coverage: `22/22` major arcana only.
- License / reuse: Commons file pages for the 22 numbered scans describe the images as public domain. Recheck the individual Commons file pages if the assets are reused outside this project.
- Mapping strategy: title-based matching for the majors; the pack uses canonical app ids for filenames, with `La Justice` shown on app `major-11-justice` and `La Force` shown on app `major-08-strength`.
- Native titles strategy: show French native labels as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a historical major-only educational layer; minors are intentionally not connected because only the 22 majors were curated into a safe local pack.

### `unicode-playing-cards`

- Status: connected in UI as a symbolic major-and-court deck.
- UI label: `Unicode`
- Detailed label for docs: `Unicode Playing Cards`
- Source URL: `https://en.wikipedia.org/wiki/Playing_Cards_(Unicode_block)`
- Local files: `assets/cards-experimental/unicode-playing-cards/`
- Coverage: `38/38` major arcana + court cards only.
- License / reuse: locally rendered SVG assets built from Unicode card characters; no external image files or runtime hotlinks are used.
- Mapping strategy: canonical app ids for the 22 trumps plus the four court ranks in each suit.
- Native titles strategy: show the Unicode card names as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a symbolic educational layer derived from the Unicode Playing Cards block, not a historical scan pack.

### `egyptian-falconnier`

- Status: connected in UI as a historical major-only deck.
- UI label: `Egyptian Tarot`
- Detailed label for docs: `Egyptian Tarot · Falconnier`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)`
- Local files: `assets/cards-experimental/egyptian-falconnier/`
- Coverage: `22/22` major arcana only.
- License / reuse: Commons file pages for the 22 PNG card images are marked CC0 / public domain dedication; the general `Egyptian-tarot.jpg` file is intentionally not used.
- Mapping strategy: explicit historical correspondence, not a simple numeric offset.
- Native titles strategy: show the French source titles as a secondary line in the UI for all 22 majors.
- Notes: this is an experimental historical major-only pack; safe mode automatically narrows to `majors`.

### `pixel-tarot`

- Status: connected as an experimental full deck.
- Source: `https://papitas319.itch.io/tarot-pixel-assets`
- Local files: `assets/cards-experimental/pixel-tarot/`
- Coverage: `78/78`

### `veil-of-fate`

- Status: connected as an experimental `major + court` deck.
- Source: `https://dajeki.itch.io/veil-of-fate-mystic-tarot-icons`
- Local files: `assets/cards-experimental/veil-of-fate/`
- Coverage: `38` local files.

### `major-pixel-jcanabal`

- Status: connected as an experimental major-only deck.
- Source: `https://jcanabal.itch.io/major-arcana-pixel-art-free`
- Local files: `assets/cards-experimental/major-pixel-jcanabal/`
- Coverage: `22` local files.

### `major-pixel-zune`

- Status: connected as an experimental major-only deck.
- Source: `https://starsinabox.itch.io/majorarcana`
- Local files: `assets/cards-experimental/major-pixel-zune/`
- Coverage: `22` local files.

## Documentation-only candidates

### `False Dichotomy Tarot`

- Source: `https://github.com/ChaoteCruithne/FalseDichotomyTarot`
- Status: not connected in UI.
- Coverage check: source repo contains 22 Major Arcana PNG files and 56 Minor Arcana PNG files.
- License check: source repo README and `LICENSE.md` state Creative Commons Attribution 4.0.
- Blocker: README/Guide acknowledge `Chaos Times` font by Ablaze, while the DaFont page marks that font as `Free for personal use`. Do not connect or vendor the images until font rights for redistribution inside the card images are confirmed.
- Mapping note: the deck is structurally nonstandard for minors, with four suits (`Shadow/Self`, `Science/Magick`, `Risk/Reward`, `Past/Future`) and 14 prepositions instead of numbered ranks/court ranks. If the font blocker is resolved, connect only with an explicit mapping dictionary.

### `etteilla-historical`

- Source: `https://commons.wikimedia.org/wiki/Category:Etteilla_I_tarot_deck`
- Status: candidate only, not connected to UI.
- Reason: the Commons set is still not a safe automatic 78-card pack with stable suit/rank filenames.

### `etteilla-type-i`

- Source: `https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth`
- Status: historical experimental deck, documentation only.
- Reason: the mapping plan exists, but the pack is not part of this task and remains documented separately.

## Research-only public-domain / CC candidates

See [docs/FREE_TAROT_DECK_CANDIDATES.md](./FREE_TAROT_DECK_CANDIDATES.md) for the full research pass.

Short version:

- `Tarocco Piemontese / Solesio 1865` is the strongest safe full-deck candidate found in this pass.
- `Tarocco Piemontese / Solesio 1865` is now connected in the UI.
- `Sola Busca` is now connected in the UI as a full 78-card deck.
- `Viéville tarot` is a strong major/full-deck research candidate with a clean Commons category.
- `Tarot de Besançon` is a plausible major-only candidate.
- `Industrie und Glück` is not compatible with the current app model and should stay rejected for now.

## Rules for further connection

1. Do not use external images at runtime.
2. Connect only packs with a clear, reviewable mapping.
3. For `major-court` and `major-only` decks, automatically narrow the pool to the available coverage.
4. For every new deck, record source, added date, and license notes.
5. Before merge, check mobile width around `390px`, fullscreen behavior, horizontal scrolling, and fallback handling.


### `adler-cego`

- Status: connected in UI as a historical experimental major-only deck.
- Source: [Cego Animal Tarot - All Trumps](https://commons.wikimedia.org/wiki/File:Cego_Animal_Tarot_-_All_Trumps.jpg)
- Local files: `assets/cards-experimental/adler-cego/`
- Coverage: 22/22 majors.
- Mapping: title-based mapping to the app's current major ids.
- Native titles: `Sküs`, then source numbers `1..21`.
- License: the Commons file page marks the sheet as `CC BY-SA 4.0`; verify attribution and share-alike terms on reuse.
- Decision: safe to connect as a major-only pack from a structured Commons sheet.
