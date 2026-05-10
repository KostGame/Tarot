# Marseille Mapping

Deck id: `marseille-historical`

Status: historical experimental deck, connected in UI as `major-only`.

## Source

- [Commons category / Tarot de Marseille - Nicolas Conver 1760](https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760)
- License / reuse note: the Commons file pages for this set are marked `CC BY-SA 4.0`. Keep attribution and share-alike requirements in mind for any future reuse.
- Source pack used in the app: 22 downloaded major arcana files, stored locally in `assets/cards-experimental/marseille-historical/`.

## Deck facts

- Tarot de Marseille minors are pip cards and are not bundled in this safe pack.
- Safe mode in the app: `majors` only.
- The app still keeps `rws-classic` as fallback for missing cards in shared infrastructure.

## Major mapping by title

Map by title, not blindly by number.

- `LE MAT` -> app Fool (`major-00-fool`)
- `I LE BATELEUR` -> app Magician (`major-01-magician`)
- `II LA PAPESSE` -> app High Priestess (`major-02-high-priestess`)
- `III L'IMPÉRATRICE` -> app Empress (`major-03-empress`)
- `IIII-L'EMPEREUR` -> app Emperor (`major-04-emperor`)
- `V LE PAPE` -> app Hierophant (`major-05-hierophant`)
- `VI L'AMOUREUX` -> app Lovers (`major-06-lovers`)
- `VII LE CHARIOT` -> app Chariot (`major-07-chariot`)
- `VIII LA JUSTICE` -> app Justice (`major-11-justice`)
- `VIIII L'HERMITE` -> app Hermit (`major-09-hermit`)
- `X LA ROUE DE FORTUNE` -> app Wheel of Fortune (`major-10-wheel-of-fortune`)
- `XI LA FORCE` -> app Strength (`major-08-strength`)
- `XII LE PENDU` -> app Hanged Man (`major-12-hanged-man`)
- `13 XIII` -> app Death (`major-13-death`)
- `XIIII TEMPERANCE` -> app Temperance (`major-14-temperance`)
- `XV LE DIABLE` -> app Devil (`major-15-devil`)
- `XVI LA MAISON DE DIEU` -> app Tower (`major-16-tower`)
- `XVII L'ETOILE` -> app Star (`major-17-star`)
- `XVIII LA LUNE` -> app Moon (`major-18-moon`)
- `XVIIII LE SOLEIL` -> app Sun (`major-19-sun`)
- `XX LE JUGEMENT` -> app Judgement (`major-20-judgement`)
- `XXI LE MONDE` -> app World (`major-21-world`)

## Justice / Strength check

Tarot de Marseille commonly places Justice at VIII and Strength at XI. The app uses Rider-Waite-style ids where `major-08` is Strength and `major-11` is Justice.

The safe pack therefore normalizes the file names to the app ids:

- `VIII LA JUSTICE` is stored as `major-11-justice.jpg`
- `XI LA FORCE` is stored as `major-08-strength.jpg`

## Minor mapping note

The minor mapping contract is documented for future use, but this PR does not bundle minors and the current safe pack remains `major-only`.

If a future full pack is ever prepared, the suit mapping stays aligned with the app model:

- Bâtons -> Wands / Жезлы
- Coupes -> Cups / Кубки
- Épées -> Swords / Мечи
- Deniers -> Pentacles / Пентакли

This PR does not bundle minors.

## Blocker note

The current Commons category does not provide a safe 56-card minor pack with stable filenames. It exposes the 22 majors plus only a couple of ace files, which is not enough for a safe full 78/78 Marseille pack.

Because of that, `marseille-historical` stays connected as `major-only` until a separately verified minor pack exists.

## Validation checklist

- [x] 22 source cards
- [x] Minor mapping contract documented
- [x] 22 target app major cards
- [x] Missing major cards: 0
- [x] Duplicate major cards: 0
- [x] Major mapped by title: 22
- [x] Justice / Strength checked
- [x] Safe mode: majors only
- [ ] 56 minor cards

## Recommendation

Keep `marseille-historical` connected as a historical experimental major-only deck.
Do not switch it to a full 78-card deck unless a separately verified minor pack is prepared.
