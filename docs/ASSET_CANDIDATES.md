# Asset Candidates

Date of the list: `2026-05-19`.

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

### `false-dichotomy`

- Status: connected in UI as a full custom deck.
- UI label: `False Dichotomy`
- Detailed label for docs: `False Dichotomy Tarot`
- Source URL: `https://github.com/ChaoteCruithne/FalseDichotomyTarot`
- Local files: `assets/cards/false-dichotomy/`
- Coverage: `78/78`
- License / reuse: source repository README and LICENSE state CC BY 4.0; local pack is normalized to canonical app ids.
- Mapping strategy: source-order majors plus the four suit / 14-preposition minor groups map to canonical app card ids.
- Native titles strategy: show the source theme pairs as a secondary line in the UI, while keeping the translated app title as the primary one.
- Notes: this is a modern custom full deck; the app's meanings remain the educational layer on top of the imagery.

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

### `ascii-tarot`

- Status: connected in UI as a full experimental text deck.
- UI label: `ASCII Tarot`
- Detailed label for docs: `ASCII Tarot · monochrome text deck`
- Source URL: `https://github.com/lawreka/ascii-tarot`
- Reference manifest: `https://raw.githubusercontent.com/arcanaland/reference-decks/main/ascii-tarot/deck.toml`
- Local files: `assets/cards-experimental/ascii-tarot/`
- Coverage: `78/78`
- License / reuse: MIT-licensed upstream ASCII deck; the local SVG pack is generated deterministically from that source and does not use external runtime hotlinks.
- Mapping strategy: standard RWS-compatible canonical ids for the 22 trumps and the four suits with Ace/Page/Knight/Queen/King ranks.
- Native titles strategy: show standard English RWS names as the secondary line in the UI.
- Notes: this pack is distinct from `Unicode`, `Pixel Mono`, and `Pixel Zune`; those decks remain unchanged and this deck uses a separate full 78-card text source.

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

### `etteilla-historical`

- Source: `https://commons.wikimedia.org/wiki/Category:Etteilla_I_tarot_deck`
- Status: candidate only, not connected to UI.
- Reason: the Commons set is still not a safe automatic 78-card pack with stable suit/rank filenames.

### `etteilla-type-i`

- Source: `https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth`
- Status: historical experimental deck, documentation only.
- Reason: the mapping plan exists, but the pack is not part of this task and remains documented separately.

### `thoth-tarot`

- Source URL: `https://commons.wikimedia.org/wiki/Category:Crowley_Thoth_Tarot`
- Status: research blocker; not connected in UI.
- Coverage: no safe `78/78` pack found.
- License / reuse: the Commons category currently exposes only 3 files (`Crowley Unicursal Hexagram Tarot Card.svg`, `Taro Rose Cross.svg`, `Thoth Tarot Cards in the Museum of Witchcraft and Magic.jpg`); this is not a curated reusable tarot deck pack.
- Mapping strategy: not applicable until a complete, licensable pack is assembled.
- Native titles strategy: not applicable until source cards exist for the full deck.
- Notes: do not connect this deck in UI yet. A future follow-up would need a real `78/78` asset pack with clear file-level reuse terms.

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
### `aquatic-tarot`

- Status: connected in UI as a full 78/78 deck.
- UI label: `Aquatic Tarot`
- Source URL: `https://aquatictarot.de/`
- Reference manifest: `https://raw.githubusercontent.com/arcanaland/reference-decks/main/aquatic-tarot/deck.toml`
- Local files: `assets/cards/aquatic-tarot/`
- Coverage: `78/78`
- License / reuse: `CC BY-NC-SA 3.0`; non-commercial use only, attribution required, share-alike applies to derivatives.
- Mapping strategy: standard RWS-compatible canonical ids for the 22 trumps and the four suits with Ace/Page/Knight/Queen/King ranks.
- Native titles strategy: keep the app's translated titles as the primary line and do not add a separate native-title layer.
- Notes: the official site exposes a Creative Commons license block on the page; the local pack uses card images from the official Aquatic Tarot site and normalizes them into the app's standard 78-card model.
