# Issue #63: fix empty card guide list

Дата: 2026-05-11

## Статус

- Ветка: `feature/issue-63-normalize-guide-search`
- Commit: `23eb5b42e11fbdea1a2108bb28908021af9b3a6a`
- PR: https://github.com/KostGame/Tarot/pull/64
- Merge агентом: нет

## Причина бага

В `renderGuideView()` вызывалась отсутствующая функция `normalizeGuideSearch(...)`. Из-за `ReferenceError` выполнение падало до `guideGrid.innerHTML`, и карточки справочника не успевали отрисоваться.

## Что исправлено

- Добавлена функция `normalizeGuideSearch(value)`.
- Функция размещена рядом с guide helper-функциями и нормализует строку поиска через `String(...).trim().toLowerCase()`.
- Остальной пайплайн справочника не менялся: `card-guide-content.json` сохранен, Firebase/share/mapping колод не трогал.

## Проверки

- `git diff --check` — успешно.
- Inline JS syntax через `new Function(...)` — успешно.
- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test`, `npm run build` недоступны.

## Smoke-test

- На live smoke-test причина сбоя подтверждена: `ReferenceError: normalizeGuideSearch is not defined`.
- После правки кодовый путь `renderGuideView()` больше не упирается в отсутствующий helper.
- Полноценный интерактивный browser smoke в текущем окружении не удалось завершить из-за зависания CDP-вызовов `Runtime.evaluate`, поэтому self-merge не выполнялся до визуальной проверки.

## Notes

- Базовый список карт остается завязан на `fullDeck`.
- Если нужен дополнительный safety-check, лучше открыть PR на GitHub Pages и проверить `Справочник карт` на мобильной ширине 390px вручную.
