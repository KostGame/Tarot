# Отчет: Etteilla Type I mapping plan

Дата: 2026-05-10

## Основное

- Ветка: `feature/etteilla-type-i-mapping`
- Источники:
  - https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth
  - https://www.aeclectic.net/tarot/cards/book-of-thoth-etteilla/
  - https://learntarot.com/bhdesc.htm
- PR: не создан
- PR смержен: нет
- Commit hash: будет добавлен после commit
- Merge commit hash: нет

## Цель

Подготовить надежный mapping plan для `etteilla-type-i` без скачивания ассетов и без подключения в UI.

## Deck id

- `etteilla-type-i`

## Deck facts

- Original Etteilla Type I имеет `78/78` карт.
- Это историческая experimental deck.

## Minor mapping

- Swords -> Мечи
- Coins -> Пентакли
- Batons -> Жезлы
- Cups -> Кубки
- `1` -> Ace
- `2..10` -> `2..10`
- Jake / Knave -> Page
- Cavalier -> Knight
- Queen -> Queen
- King -> King

Confidence: high

## Major mapping

Historical correspondence:

- `0/78 Folly` -> Fool
- `1 Chaos` -> Hierophant
- `2 Light` -> Sun
- `3 Plants` -> Moon
- `4 Heavens` -> Star
- `5 Man and Animals` -> World
- `6 Stars` -> Empress
- `7 Birds and Fish` -> Emperor
- `8 Rest` -> High Priestess
- `9 Justice` -> Justice
- `10 Temperance` -> Temperance
- `11 Strength` -> Strength
- `12 Prudence` -> Hanged Man
- `13 High Priest` -> Lovers
- `14 Devil` -> Devil
- `15 Magician` -> Magician
- `16 Last Judgment` -> Judgement
- `17 Death` -> Death
- `18 Hermit` -> Hermit
- `19 Temple Struck by Lightning` -> Tower
- `20 Wheel of Fortune` -> Wheel of Fortune
- `21 Chariot / African Despot` -> Chariot

Confidence: medium

## Notes

- Etteilla Type I is historical and experimental, not native Rider-Waite-Smith.
- The mapping is a correspondence layer for the current app model, not a claim of shared historical interpretation.
- The deck must stay out of the UI until a manually verified local asset pack exists.
- No assets were downloaded.

## Documentation updates

- Added `docs/ETTEILLA_MAPPING.md`.
- Added `etteilla-type-i` to `docs/ASSET_CANDIDATES.md`.

## Recommendation

Keep the deck documentation-only for now. A future asset connection should happen only after a card-by-card filename and numbering review.

