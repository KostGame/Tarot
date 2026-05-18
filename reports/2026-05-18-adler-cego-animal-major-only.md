# Adler Cego Tarot

Дата: 2026-05-18
Ветка: `feature/adler-cego-animal-major-only-v2`

## Что сделано

- Подключена колода `Adler Cego` как `major-only` deck `22/22`.
- Добавлен локальный asset pack в `assets/cards-experimental/adler-cego/`.
- Колода зарегистрирована в `index.html` с коротким label `Adler Cego`.
- Добавлены `nativeTitles` на основе подписей с source sheet.
- Обновлены документы:
  - `docs/ADLER_CEGO_MAPPING.md`
  - `docs/ASSET_CANDIDATES.md`
  - `docs/FREE_TAROT_DECK_CANDIDATES.md`
  - `assets/cards-experimental/adler-cego/README.md`

## Источник

- Commons file page: [Cego Animal Tarot - All Trumps](https://commons.wikimedia.org/wiki/File:Cego_Animal_Tarot_-_All_Trumps.jpg)
- License / reuse note: Commons marks the sheet as `CC BY-SA 4.0`.

## Проверка покрытия

- Total mapped source cards: 22
- Total target app cards: 22
- Missing target cards: 0
- Duplicate target cards: 0
- Missing source cards: 0
- Assets found: 22
- Broken asset links: 0
- Deck selector order checked: yes
- Safe pool mode checked: yes

## Smoke / validation

- Проверил 22 локальных JPG-файла через `ffprobe`.
- Проверил сигнатуры и размеры pack-файлов.
- Визуально просмотрел representative crops: `major-00-fool`, `major-08-strength`, `major-11-justice`, `major-21-world`.
- `share canvas`, Firebase, `localStorage` и другие колоды не трогались.

## Проверки

- `git diff --check`
- inline JS syntax check через `new Function(...)`
- Проверка локального pack: 22 файла, все изображения валидны
- `npm run check` не запускался: в репозитории нет `package.json`
- `npm test` не запускался: в репозитории нет `package.json`
- `npm run build` не запускался: в репозитории нет `package.json`

## Вывод

Колода `Adler Cego` безопасно подключена как major-only pack. Блокеров на этом шаге нет.
