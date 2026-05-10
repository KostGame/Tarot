# Issue #52: messenger share fallback

## Что изменено

- Сохранён текущий сценарий share canvas: сначала приложение пробует Web Share API с PNG.
- Если PNG share недоступен или падает не из-за отмены пользователем, приложение пробует обычный Web Share API с коротким текстом и ссылкой.
- Если native share не сработал, приложение пробует clipboard fallback с текстом карты и ссылкой на приложение.
- Если clipboard недоступен или заблокирован, открывается внешний messenger endpoint `https://t.me/share/url` с параметрами `url` и `text`.
- `url` и `text` кодируются через `encodeURIComponent`.
- Если автоматический переход заблокирован, показывается компактная кнопка `Отправить`.
- Ссылка для шаринга закреплена на `https://kostgame.github.io/Tarot/`.

## Scope

- Новые колоды не подключались.
- Firebase не менялся.
- Справочник карт не менялся.
- localStorage keys не менялись.
- Share canvas не менялся.

## Проверки

- `git diff --check`
- inline JS syntax check через `new Function(...)`
- `npm run check`, `npm test`, `npm run build` не запускались: в репозитории нет `package.json`.

## Smoke-test

- Проверено статически, что порядок fallback соответствует Issue:
  1. Web Share API с PNG.
  2. Web Share API с текстом и URL.
  3. Clipboard fallback с текстом карты и ссылкой.
  4. Messenger endpoint с `url` и `text`.
  5. Компактная кнопка `Отправить`, если `window.open` заблокирован.
- Проверено, что fallback text остаётся коротким и не содержит HTML или Markdown.

## Git

- Branch: `feature/issue-52-messenger-share-fallback`
- PR: [#54 Add messenger share fallback](https://github.com/KostGame/Tarot/pull/54)
- Commit: `790f87e`
- Merged by agent: no

## Blockers

- Активных открытых PR на момент проверки не было.
- Блокеров по коду не обнаружено.
- Интерактивный browser smoke-test в этой среде не завершён: browser-use plugin не содержит `browser-client.mjs`, а headless Edge/Chrome не смог стабильно открыть локальный сервер. PR оставлен открытым для визуальной проверки перед merge.
