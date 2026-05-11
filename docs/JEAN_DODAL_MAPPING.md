# Jean Dodal Mapping

Date: `2026-05-11`

## Deck metadata

- Deck id: `jean-dodal-marseille`
- UI label: `Jean Dodal Tarot`
- Detailed label: `Jean Dodal Tarot · Marseille 1701`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- Secondary source: `http://www.tarot-history.com/Jean-Dodal/`
- Coverage: `22/22` major arcana only
- Scope: historical Marseille-type educational layer, not a native RWS reading deck

## Why this pack is safe enough to connect

- The Commons category contains a clean local pack of 22 major arcana files.
- No minors are pulled into the UI.
- The pack is mapped by title, not by blind number reuse.
- The app keeps `Strength` and `Justice` aligned to the correct Marseille titles:
  - app `Strength` -> `La Force`
  - app `Justice` -> `La Justice`

## Title-based major mapping

- `major-00-fool` -> `major-00-fool.jpg` -> `Le Mat`
- `major-01-magician` -> `major-01-magician.jpg` -> `Le Bateleur`
- `major-02-high-priestess` -> `major-02-high-priestess.jpg` -> `La Papesse`
- `major-03-empress` -> `major-03-empress.jpg` -> `L'Impératrice`
- `major-04-emperor` -> `major-04-emperor.jpg` -> `L'Empereur`
- `major-05-hierophant` -> `major-05-hierophant.jpg` -> `Le Pape`
- `major-06-lovers` -> `major-06-lovers.jpg` -> `L'Amoureux`
- `major-07-chariot` -> `major-07-chariot.jpg` -> `Le Chariot`
- `major-08-strength` -> `major-11-strength.jpg` -> `La Force`
- `major-09-hermit` -> `major-09-hermit.jpg` -> `L'Hermite`
- `major-10-wheel-of-fortune` -> `major-10-wheel-of-fortune.jpg` -> `La Roue de Fortune`
- `major-11-justice` -> `major-08-justice.jpg` -> `La Justice`
- `major-12-hanged-man` -> `major-12-hanged-man.jpg` -> `Le Pendu`
- `major-13-death` -> `major-13-death.jpg` -> `L'Arcane sans nom`
- `major-14-temperance` -> `major-14-temperance.jpg` -> `Tempérance`
- `major-15-devil` -> `major-15-devil.jpg` -> `Le Diable`
- `major-16-tower` -> `major-16-tower.jpg` -> `La Maison Dieu`
- `major-17-star` -> `major-17-star.jpg` -> `L'Étoile`
- `major-18-moon` -> `major-18-moon.jpg` -> `La Lune`
- `major-19-sun` -> `major-19-sun.jpg` -> `Le Soleil`
- `major-20-judgement` -> `major-20-judgement.jpg` -> `Le Jugement`
- `major-21-world` -> `major-21-world.jpg` -> `Le Monde`

## Native titles strategy

- Show the French title as a secondary line in fullscreen and the card guide.
- Keep the translated app title as the primary title.
- Do not add native titles for minors because the pack is major-only.

## License and reuse

- The Commons scans are public-domain reproductions.
- Recheck the Commons file pages and the tarot-history.com credit if the pack is reused outside this project.

## Validation checklist

- [x] 22 source cards are connected
- [x] 22 target app cards are connected
- [x] No missing target cards
- [x] No duplicate target cards
- [x] No missing source cards in the connected pack
- [x] Major mapping is title-based
- [x] Minor mapping is not connected
- [x] `Strength` and `Justice` are aligned to `La Force` / `La Justice`

## UI status

- Connected in the deck selector
- Safe pool mode for this deck stays on `Старшие`
- Fullscreen, guide, and share canvas continue to use the existing app flow
