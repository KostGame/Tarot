# Issue #57: restrict Telegram fallback

## Что изменено

- Telegram share fallback теперь срабатывает автоматически только если `navigator.userAgent` похож на Telegram WebView.
- Для обычных браузеров после `PNG` share, `text + url` share и clipboard fallback Telegram больше не открывается автоматически.
- Для non-Telegram окружений показан нейтральный ручной fallback через компактную кнопку `Скопировать`.
- Share canvas не менялся.

## Git

- Branch: `feature/issue-57-restrict-telegram-fallback`
- PR: [#58 Restrict Telegram share fallback](https://github.com/KostGame/Tarot/pull/58)
- Commit: `ce45d9f`
- Merged by agent: no

## Scope

- Firebase не менялся.
- Колоды не менялись.
- Справочник карт не менялся.
- localStorage keys не менялись.

## Проверки

- `git diff --check`
- inline JS syntax check через `new Function(...)`
- `npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`.

## Smoke-test

- Проверен порядок fallback в коде:
  1. Web Share API с PNG.
  2. Web Share API с text + url.
  3. Clipboard fallback.
  4. Telegram fallback только если `isTelegramWebView()`.
  5. Иначе нейтральный ручной fallback.
- Проверено, что Telegram endpoint не вызывается для non-Telegram ветки.
- Интерактивный browser smoke-test в этой среде недоступен: локальный browser-use backend не содержит нужного `browser-client.mjs`, а headless browser не смог стабильно работать с локальным сервером.

## Blockers

- Блокеров по коду не обнаружено.
- Автоматический Telegram fallback для Instagram и других WebView ограничен по UA, как и требовалось.
