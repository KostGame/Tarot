# Отчет: Etteilla Type I mapping plan

Дата: 2026-05-10

## Основное

- Ветка: `feature/etteilla-type-i-mapping`
- Issue: https://github.com/KostGame/Tarot/issues/26
- Source: https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth
- PR: будет создан после commit
- PR смержен: нет
- Commit hash: будет добавлен после commit
- Merge commit hash: нет

## Цель

Подготовить надежный mapping plan для `etteilla-type-i` без подключения колоды в UI и без скачивания ассетов.

## Deck facts

- `etteilla-type-i`
- Original Etteilla Type I has `78/78` cards.
- The source has an explicit structure:
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

This is not a native Rider-Waite-Smith mapping. It is an experimental historical correspondence layer prepared for the app's current model.

## Validation checklist

- 78 source cards
- 78 target cards
- no duplicates
- no missing cards
- 22 majors by dictionary
- 56 minors by suit/rank

## Result

- Etteilla Type I remains a historical experimental deck.
- UI is not connected in this PR.
- No assets were downloaded.
- `rws-classic` remains the fallback for a future asset pack.

## Documentation updates

- Created `docs/ETTEILLA_MAPPING.md`.
- Updated `docs/ASSET_CANDIDATES.md`.

