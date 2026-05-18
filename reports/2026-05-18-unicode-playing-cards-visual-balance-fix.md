# Unicode Playing Cards Visual Balance Fix

Дата: 2026-05-18

## Что исправлено

- Уменьшен центральный glyph в SVG-паке `unicode-playing-cards`, чтобы он снова помещался в рамку карты.
- Восстановлены корректные Unicode playing-card символы в 38 SVG-файлах.
- `index.html`, share flow, Firebase, колоды, справочник и `localStorage` не менялись.

## Проверка

- `git diff --check` — OK
- Проверка Unicode round-trip для glyph-символа в одном из SVG — OK
- Проверка pack: 38 SVG-файлов на месте
- `npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`

## Примечание

В этой среде полноценный browser smoke-test недоступен, поэтому визуальную проверку пришлось ограничить статической валидацией SVG-пака и содержимого файлов.
