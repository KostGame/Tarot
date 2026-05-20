# Favicon assets

Дата: `2026-05-20`

## Что сделано

- Добавлен сайт-иконка в стиле tarot.
- Подключены:
  - `favicon.svg`
  - `favicon.ico`
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png`
- Добавлен `site.webmanifest`.
- В `index.html` добавлены ссылки на favicon и manifest.

## Проверки

- `git diff --check`
- визуальная проверка самих иконок в 16px, 32px и 192px
- проверка сигнатур PNG и ICO

## Что не менялось

- Firebase
- share flow
- колоды
- справочник
- mapping
- `localStorage` keys

## Примечание

`npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`.
