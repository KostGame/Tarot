# Unicode Playing Cards Visual Scale Follow-up

## Что изменено

- Увеличил центральный Unicode glyph в SVG-картах.
- Немного подвинул подписи внутри карточки, чтобы композиция стала плотнее.
- Не менял deck registry, `localStorage`, share flow, Firebase и остальные колоды.

## Что проверено

- Все 38 SVG-файлов остались на месте.
- Каждый SVG по-прежнему содержит корректную разметку `<svg>`.
- `git diff --check` чистый.
- Inline JS syntax check для `index.html` остаётся чистым.

## Ограничение среды

- Полноценный browser smoke-test не удалось завершить в этой среде из-за падения headless Chromium / Edge на этапе GPU initialization.

