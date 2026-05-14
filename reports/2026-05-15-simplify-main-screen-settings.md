# Issue #88 — simplify main screen and move advanced settings under spoiler

Сделал облегчение главной страницы без изменения логики расклада:

- добавил ненавязчивый chip с текущей колодой и годом наверху;
- по нажатию chip открывает скрытые настройки и фокусирует выбор колоды;
- перенёс расширенные настройки вниз под спойлер;
- продублировал выбор колоды внутри настроек;
- убрал тяжёлые controls с первого экрана;
- не менял `localStorage` keys, Firebase counter, share canvas, fullscreen, справочник и логику режимов.

Изменённые файлы:

- `index.html`

Проверки:

- `git diff --check`
- inline JS syntax check через `node` + `new Function(...)`
- `package.json` в этом worktree отсутствует, поэтому `npm run check`, `npm test`, `npm run build` недоступны

Smoke / validation:

- статически проверил, что chip, настройки, select колоды и переключатели синхронизированы по коду;
- визуальный headless smoke в этой среде не удалось завершить: Chrome на Windows не отдал стабильный screenshot для локального file URL, поэтому полноценную browser-проверку отмечаю как ограничение среды.

Blockers:

- кодовых blocker'ов нет;
- есть ограничение по визуальному smoke в текущей среде.
