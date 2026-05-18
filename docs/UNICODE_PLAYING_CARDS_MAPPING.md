# Unicode Playing Cards Mapping

- Deck id: `unicode-playing-cards`
- Coverage: `38/38` major arcana + court cards only
- Source reference: [Playing Cards (Unicode block)](https://en.wikipedia.org/wiki/Playing_Cards_(Unicode_block))
- Rendering model: locally generated SVG card images derived from Unicode playing-card characters, with tarot-sized proportions.

## Mapping notes

- The 22 major arcana map to the Unicode trump cards `FOOL` and `TRUMP-1..21`.
- Court cards map by tarot suit to the Unicode suit family:
  - `swords` -> `SPADES`
  - `cups` -> `HEARTS`
  - `pentacles` -> `DIAMONDS`
  - `wands` -> `CLUBS`
- The rank mapping uses the Unicode court ranks:
  - `11-page` -> `JACK`
  - `12-knight` -> `KNIGHT`
  - `13-queen` -> `QUEEN`
  - `14-king` -> `KING`

## Validation checklist

- 22 major cards present
- 16 court cards present
- 38 target cards total
- no missing assets
- no duplicate target ids
- no runtime hotlinks
- native titles shown as a secondary UI line only

