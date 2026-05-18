# Unicode Playing Cards Visual Balance Fix 2

Дата: 2026-05-18

## Что исправлено

- Центральный glyph у Unicode Playing Cards увеличен ещё раз, чтобы он занимал больше площади карточного поля в fullscreen / справочнике.
- Размер glyph повышен до `320`, при этом сохранены корректные Unicode playing-card символы во всех 38 SVG.
- `index.html`, share flow, Firebase, колоды и `localStorage` не менялись.

## Проверка

- `git diff --check` — OK
- Проверка Unicode round-trip для всех 38 SVG — OK
- Проверка pack: 38 SVG-файлов на месте
- `npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`

## Примечание

Browser smoke-test в этой среде по-прежнему недоступен, поэтому проверка ограничена статической валидацией SVG-пака и содержимого файлов.
