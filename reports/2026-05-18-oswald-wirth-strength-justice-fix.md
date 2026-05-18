# Oswald Wirth Strength / Justice Fix

Дата: 2026-05-18

## Что исправлено

- В pack `oswald-wirth-tarot` поменяны местами два изображения:
  - `major-08-strength.jpg`
  - `major-11-justice.jpg`
- Теперь `Strength / La Force` показывает правильный образ с львом.
- `Justice / La Justice` показывает правильный образ со мечом и весами.
- `index.html`, share flow, Firebase, колоды и localStorage не менялись.

## Проверка

- Ручная визуальная проверка двух файлов через локальный просмотр — OK
- `git diff --check` — OK
- `npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`

## Примечание

Это точечный asset hotfix без изменения deck registry и native titles.
