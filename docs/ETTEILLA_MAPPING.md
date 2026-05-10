# Etteilla Type I Mapping

Deck id: `etteilla-type-i`

Status: historical experimental deck, documentation only.

## Source

- [Original Etteilla Tarot - Le Jeu de Toth](https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth)
- Reuse note: the source states CC BY-NC 4.0 reuse for informational, academic, and research-oriented websites for public-domain decks.

## Deck facts

- Original Etteilla Type I has `78/78` cards.
- The source shows an explicit structure:
  - Major Arcana `0-21`
  - Swords
  - Coins
  - Batons
  - Cups

## Minor mapping

- Swords -> Мечи
- Coins -> Пентакли
- Batons -> Жезлы
- Cups -> Кубки
- `1` -> Ace
- `2..10` -> `2..10`
- Jake -> Page
- Cavalier -> Knight
- Queen -> Queen
- King -> King

Confidence: high

## Major mapping

Historical correspondence:

- Major 0 / Fool -> Шут
- Major 1 / Chaos -> Иерофант
- Major 2 / Light -> Солнце
- Major 3 / Plants -> Луна
- Major 4 / Heavens -> Звезда
- Major 5 / Man and Animals -> Мир
- Major 6 / Stars -> Императрица
- Major 7 / Birds and Fish -> Император
- Major 8 / Rest -> Жрица
- Major 9 / Justice -> Справедливость
- Major 10 / Temperance -> Умеренность
- Major 11 / Strength -> Сила
- Major 12 / Prudence -> Повешенный
- Major 13 / High Priest -> Влюбленные
- Major 14 / Devil -> Дьявол
- Major 15 / Magician -> Маг
- Major 16 / Last Judgment -> Суд
- Major 17 / Death -> Смерть
- Major 18 / Hermit -> Отшельник
- Major 19 / Temple Struck by Lightning -> Башня
- Major 20 / Wheel of Fortune -> Колесо Фортуны
- Major 21 / Chariot -> Колесница

Confidence: medium

## Interpretation note

This is not a native Rider-Waite-Smith mapping. It is an experimental historical correspondence layer prepared for the app's current card model.

## Validation checklist

- [ ] 78 source cards
- [ ] 78 target cards
- [ ] no duplicates
- [ ] no missing cards
- [ ] 22 majors by dictionary
- [ ] 56 minors by suit/rank

## Recommendation

Keep `etteilla-type-i` as a historical experimental deck in documentation only for now.
Do not connect the deck in the UI until a manually verified asset pack exists.
Automated validation against the source remains blocked: local requests could not resolve `etteilla.org`, direct `eti.la` image URLs returned Cloudflare `530 / error code: 1016`, and Node `fetch` failed for both hosts.
When assets are ready, keep `rws-classic` as fallback for missing or unmapped cards.
