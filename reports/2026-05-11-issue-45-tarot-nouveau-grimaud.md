# Issue #45 — Tarot Nouveau / Grimaud 1898

- Branch: `feature/issue-45-tarot-nouveau-grimaud`
- Commits:
  - `789d2cc` (`Add Tarot Nouveau full deck`)
  - `df458b0` (`Fix Tarot Nouveau native titles`)
- PR: https://github.com/KostGame/Tarot/pull/71
- PR state: `OPEN`, mergeable: `MERGEABLE`

## Что сделано

- Подключил `Tarot Nouveau` как полный deck `78/78`.
- Сохранил короткий dropdown label: `Tarot Nouveau`.
- Добавил локальный pack в `assets/cards-experimental/tarot-nouveau-grimaud-1898/` без runtime hotlink.
- Исключил обратную сторону из pack.
- Добавил `nativeTitles` для всех 78 карт.
- Обновил research docs:
  - `docs/ASSET_CANDIDATES.md`
  - `docs/HISTORICAL_DECK_CANDIDATES.md`
- Добавил pack README:
  - `assets/cards-experimental/tarot-nouveau-grimaud-1898/README.md`

## Источник и лицензия

- Source: `https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898`
- Gallica / BnF source: `http://gallica.bnf.fr/ark:/12148/btv1b10510159t`
- Commons file pages describe the scans as public domain / PD-old / PDM.
- В UI колода описана как французская игровая колода 1898 года, а трактовки приложения остаются учебным слоем.

## Проверка ассетов

- Total image files: `78`
- Missing assets: `0`
- Duplicate mappings: `0`
- Broken links: `0`
- Native titles: `78/78`
- Back side excluded from the pack: `yes`

## Проверки

- `git diff --check`
- inline JS syntax check через `node` / `new Function(...)`
- статическая проверка pack: ожидаемые `78` файлов, фактические `78`
- браузерный smoke-test через headless Chrome на локальном HTTP server:
  - ширина мобильного viewport около `390px`
  - dropdown показывает `Tarot Nouveau`
  - guide открывается и показывает `78` карт
  - fullscreen открывается
  - возврат из fullscreen в guide работает
  - возврат в main screen работает
  - горизонтального скролла нет
- `npm run check`, `npm test`, `npm run build` не запускались, потому что в репозитории нет `package.json`

## Smoke-test details

- В `guide` у Tarot Nouveau native title отображается как `Excuse`.
- В fullscreen native title отображается как `Excuse`.
- Main screen, guide, fullscreen и возврат назад визуально проверены по скриншотам.

## Примечание

- В рабочем дереве остался чужой untracked файл `_test_tarot_nouveau.jpg`; я его не трогал.
