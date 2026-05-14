# Tarocco Piemontese Mapping

Date: `2026-05-14`

## Deck metadata

- Deck id: `tarocco-piemontese-solesio-1865`
- UI label: `Tarocco Piemontese`
- Detailed label: `Tarocco Piemontese · Solesio 1865`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865`
- Coverage: `78/78`
- Scope: historical Italian gaming tarot deck, educational layer on top of the images

## Why this pack is safe enough to connect

- The Commons category provides a clean local 78-card pack plus one back side image.
- The back side is excluded from the connected pack.
- The file pages for the card images mark the scans as public domain.
- The pack has explicit title-based mapping for trumps and a direct suit/rank mapping for minors.

## Title-based trump mapping

- `major-00-fool` -> `major-00-fool.jpg` -> `Il Matto`
- `major-01-magician` -> `major-01-magician.jpg` -> `Il Bagatto`
- `major-02-high-priestess` -> `major-02-high-priestess.jpg` -> `La Papessa`
- `major-03-empress` -> `major-03-empress.jpg` -> `L'Imperatrice`
- `major-04-emperor` -> `major-04-emperor.jpg` -> `L'Imperatore`
- `major-05-hierophant` -> `major-05-hierophant.jpg` -> `Il Papa`
- `major-06-lovers` -> `major-06-lovers.jpg` -> `Gli Amanti`
- `major-07-chariot` -> `major-07-chariot.jpg` -> `Il Carro`
- `major-08-justice` -> `major-08-justice.jpg` -> `La Giustizia`
- `major-09-hermit` -> `major-09-hermit.jpg` -> `L'Eremita`
- `major-10-wheel-of-fortune` -> `major-10-wheel-of-fortune.jpg` -> `Rota di Fortuna`
- `major-11-strength` -> `major-11-strength.jpg` -> `La Forza`
- `major-12-hanged-man` -> `major-12-hanged-man.jpg` -> `L'Appeso`
- `major-13-death` -> `major-13-death.jpg` -> `La Morte`
- `major-14-temperance` -> `major-14-temperance.jpg` -> `La Temperenza`
- `major-15-devil` -> `major-15-devil.jpg` -> `Il Diavolo`
- `major-16-tower` -> `major-16-tower.jpg` -> `La Torre`
- `major-17-star` -> `major-17-star.jpg` -> `Le Stelle`
- `major-18-moon` -> `major-18-moon.jpg` -> `La Luna`
- `major-19-sun` -> `major-19-sun.jpg` -> `Il Sole`
- `major-20-judgement` -> `major-20-judgement.jpg` -> `L'Angelo`
- `major-21-world` -> `major-21-world.jpg` -> `Il Mondo`

## Minor mapping

- `Spade` -> `swords`
- `Coppe` -> `cups`
- `Denari` -> `pentacles`
- `Bastoni` -> `wands`

Ranks:

- `Ace` -> `01-ace`
- `2..10` -> `02-two` .. `10-ten`
- `Jack` / `Fante` -> `11-page`
- `Cavallo` -> `12-knight`
- `Donna` -> `13-queen`
- `Re` -> `14-king`

## Native titles strategy

- Show the Italian native title as a secondary line in fullscreen and the card guide.
- Keep the translated app title as the primary title.
- Use the app's translated `Justice` / `Strength` names for the primary label, while keeping the source titles above as the deck-native titles.

## Validation checklist

- [x] 78 source cards are connected
- [x] 78 target app cards are connected
- [x] No missing target cards
- [x] No duplicate target cards
- [x] No missing source cards in the connected pack
- [x] Major mapping is title-based
- [x] Minor mapping is suit/rank-based
- [x] Back side is excluded from the connected pack

## UI status

- Connected in the deck selector as `Tarocco Piemontese`
- Safe pool mode stays on `full`
- Fullscreen, guide, and share canvas continue to use the existing app flow

