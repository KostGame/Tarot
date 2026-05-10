# Issue #59 — Capability-based share fallback

## Что изменено

- Убран автоматический Telegram fallback.
- Share-цепочка переведена на capability-based порядок:
  1. PNG Web Share;
  2. text + URL Web Share;
  3. `navigator.clipboard.writeText`;
  4. нейтральный ручной fallback.
- Для clipboard и текста шаринга используется стабильная ссылка `https://kostgame.github.io/Tarot/`.
- В текст для clipboard не попадают hash, query params или текущий `window.location.href`.
- `share canvas`, Firebase, колоды, справочник и `localStorage`-ключи не менялись.

## Файлы

- `index.html`
- `reports/2026-05-11-issue-59-capability-share-fallback.md`

## Проверки

- `git diff --check`
- inline JS syntax check через `new Function(...)` по inline-скрипту

## Что получилось проверить

- Порядок fallback в коде соответствует требованию Issue #59.
- Telegram / Instagram UA-детект как основной сценарий удалён.
- Clipboard получает только текст карты и стабильную ссылку на приложение.

## Что не удалось проверить в этой среде

- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test` и `npm run build` не запускались.
- Полноценный browser smoke-test не удалось прогнать: в доступной среде нет локального browser binary и не установлен Playwright.

## Блокеры

- Критических blocker'ов по коду нет.
- Единственный blocker — ограничение среды на визуальный smoke-test.
