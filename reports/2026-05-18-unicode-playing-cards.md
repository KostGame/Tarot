# Unicode Playing Cards

## Что сделано

- Подключена новая экспериментальная колода `Unicode Playing Cards`.
- Колода зарегистрирована в `index.html` как `major-court` deck.
- Добавлен локальный pack `assets/cards-experimental/unicode-playing-cards/` с 38 SVG-картами.
- Добавлены `nativeTitles` на основе Unicode card names.
- Обновлены документационные файлы:
  - `docs/ASSET_CANDIDATES.md`
  - `docs/FREE_TAROT_DECK_CANDIDATES.md`
  - `docs/UNICODE_PLAYING_CARDS_MAPPING.md`
  - `assets/cards-experimental/README.md`

## Источник и модель

- Источник для справки: [Playing Cards (Unicode block)](https://en.wikipedia.org/wiki/Playing_Cards_(Unicode_block))
- Это не исторический scan pack, а локально сгенерированный SVG pack из Unicode playing-card characters.
- Колода ограничена 22 старшими арканами и court cards, то есть `38/38`.

## Проверка покрытия

- Total target cards: `38`
- Major cards: `22`
- Court cards: `16`
- Missing assets: `0`
- Duplicate target ids: `0`
- Runtime hotlinks: отсутствуют

## Проверки

- `git diff --check`
- Статическая проверка SVG-пакета:
  - `38` SVG файлов
  - все файлы содержат корректную `svg` разметку
- Inline JS syntax check для `index.html` через `new Function(...)`

## Browser smoke-test

- Полноценный mobile browser smoke-test в этой среде завершить не удалось.
- Headless Chromium / Edge падают на GPU initialization / compositor startup.
- Поэтому UI-проверка отмечена как partially blocked, без пользовательских ошибок в самом приложении.

## Примечания

- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test`, `npm run build` недоступны.
- Firebase, share flow и `localStorage`-ключи не менялись.

