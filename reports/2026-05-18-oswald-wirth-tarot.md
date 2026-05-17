# Oswald Wirth Tarot

## Что сделано
- Подключена колода `Oswald Wirth Tarot` как `major-only` deck.
- Локальный pack добавлен в `assets/cards-experimental/oswald-wirth-tarot/`.
- В `index.html` колода зарегистрирована с коротким label `Oswald Wirth`.
- Добавлены `nativeTitles` на французском.
- Обновлены исследовательские документы:
  - `docs/ASSET_CANDIDATES.md`
  - `docs/FREE_TAROT_DECK_CANDIDATES.md`
  - `docs/OSWALD_WIRTH_MAPPING.md`
  - `assets/cards-experimental/oswald-wirth-tarot/README.md`

## Источник и лицензия
- Commons category: `Category:Oswald_Wirth_tarot_deck`
- Использованы 22 numbered BnF scans.
- По Commons file pages эти scans описаны как public domain.
- Категория содержит альтернативные / дублирующие сканы, но они не вошли в pack.

## Покрытие
- Source cards mapped: `22/22`
- Target app cards: `22/22`
- Missing target cards: `0`
- Duplicate target cards: `0`
- Missing source cards: `0`
- Broken asset links: `0`

## Проверки
- `git diff --check`
- inline JS syntax check через `new Function(...)`
- проверка локального pack: 22 JPEG, все сигнатуры `FFD8`, все файлы читаются как изображения, размеры одинакового thumbnail-уровня

## Browser smoke-test
- Попытка визуальной проверки через headless Chromium / Edge была сделана.
- В этой среде headless-браузеры падают на инициализации GPU / compositor, поэтому полноценный mobile smoke-test не удалось завершить стабильно.
- Из-за этого UI-верификация в браузере отмечена как partially blocked, без каких-либо пользовательских ошибок в самом приложении.

## Примечания
- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test`, `npm run build` недоступны.
- Firebase, share flow и `localStorage`-ключи не менялись.
