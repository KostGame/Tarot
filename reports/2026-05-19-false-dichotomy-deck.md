# Отчет по колоде False Dichotomy Tarot

Дата: `2026-05-19`

## Итог

Колода `False Dichotomy Tarot` подключена как полноценная `78/78` колода приложения «Карта дня», PR создан и смержен в `main`.

Отдельный font-rights blocker был снят после подтверждения, что колода нужна только для личного некоммерческого использования. После этого provenance, лицензия и покрытие были подтверждены, ассеты скачаны и UI обновлен.

## Источник и права

- Источник: `https://github.com/ChaoteCruithne/FalseDichotomyTarot`
- Лицензия: `CC BY 4.0`
- Coverage: `full 78/78`
- Формат: RWS-compatible standard 78-card deck
- License docs present: `yes`
- Attribution docs present: `yes`
- Source URLs present: `yes`
- No fallback to `rws-classic` for this deck: `yes`

## Проверка источника

- README исходного репозитория подтверждает стандартную колоду на 78 карт.
- `LICENSE.md` исходного репозитория содержит `CC BY 4.0`.
- Изображения доступны как отдельные файлы:
  - 22 Major Arcana
  - 56 Minor Arcana
- Отдельный blocker по `font-rights` был закрыт после пользовательского подтверждения сценария личного некоммерческого использования.
- Сторонних ассетов с неясными правами в подключаемом пакете не использовалось.

## Валидация покрытия

- Total source cards: `78`
- Total mapped target cards: `78`
- Missing source cards: `0`
- Missing target cards: `0`
- Duplicate target cards: `0`
- Majors: `22`
- Minors: `56`
- Court cards: `16`

## GitHub

- Issue: `#101` — `https://github.com/KostGame/Tarot/issues/101`
- PR: `#107` — `https://github.com/KostGame/Tarot/pull/107`
- Ветка: `feature/deck-false-dichotomy-tarot`
- Коммит: `4200251`
- Merge commit: `e2c45e6a31daa282620b4be5f633d54111f9cfe7`
- Статус merge: `merged`

## Изменения

### Добавлены файлы

- `Tarot-adler-cego/assets/cards/false-dichotomy/` — 78 нормализованных PNG-ассетов колоды
- `Tarot-adler-cego/assets/cards/false-dichotomy/LICENSE.md`
- `Tarot-adler-cego/assets/cards/false-dichotomy/ATTRIBUTION.md`
- `Tarot-adler-cego/assets/cards/false-dichotomy/SOURCE_URLS.md`
- `Tarot-adler-cego/docs/FALSE_DICHOTOMY_MAPPING.md`

### Обновлены документы

- `Tarot-adler-cego/assets/cards/README.md`
- `Tarot-adler-cego/docs/ASSET_CANDIDATES.md`
- `Tarot-adler-cego/docs/FREE_TAROT_DECK_CANDIDATES.md`
- `Tarot-adler-cego/index.html`

## Проверки

- `git diff --check`
- Ручной smoke-test в браузере
- Headless smoke-test через Playwright
- `npm run check`: не запускался, в этом worktree нет `package.json`
- `npm test`: не запускался, в этом worktree нет `package.json`
- `npm run build`: не запускался, в этом worktree нет `package.json`

## Результат smoke-test

- В селекторе есть `False Dichotomy`
- Режим `Карта дня` работает
- Режим `Совет по вопросу` работает
- Fullscreen просмотр работает
- Image-only preview работает
- Share-картинка работает
- Перевернутые карты работают
- Все изображения грузятся без `404`
- Нет silent fallback на `rws-classic`

## Статус

- Blockers: `нет`
- UI: `подключалась`
- Merge: `выполнен`
- Pages: `не проверялся`
