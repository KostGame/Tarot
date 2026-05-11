# Asset Candidates

Date of the list: `2026-05-11`.

This document records experimental and alternative card decks for `KostGame/Tarot`.
Only sets that were safely downloaded and mapped unambiguously to the current model are connected in the UI.

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
- Reason: automatic mapping to the current app model is still unclear and requires a separate manual review.

### `etteilla-historical`

- Source: `https://commons.wikimedia.org/wiki/Category:Etteilla_I_tarot_deck`
- Status: candidate only, not connected to UI.
- Reason: the Commons set is still not a safe automatic 78-card pack with stable suit/rank filenames.

### `etteilla-type-i`

- Source: `https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth`
- Status: historical experimental deck, documentation only.
- Reason: the mapping plan exists, but the pack is not part of this task and remains documented separately.

## Rules for further connection

1. Do not use external images at runtime.
2. Connect only packs with a clear, reviewable mapping.
3. For `major-court` and `major-only` decks, automatically narrow the pool to the available coverage.
4. For every new deck, record source, added date, and license notes.
5. Before merge, check mobile width around `390px`, fullscreen behavior, horizontal scrolling, and fallback handling.
