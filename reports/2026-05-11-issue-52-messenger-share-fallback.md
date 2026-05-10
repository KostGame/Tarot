# Issue #52: messenger share fallback

## Что изменено

- Сохранён текущий сценарий share canvas: сначала приложение пробует Web Share API с PNG.
- Если PNG share недоступен или падает не из-за отмены пользователем, приложение пробует обычный Web Share API с коротким текстом и ссылкой.
- Если native share не сработал, открывается внешний messenger endpoint `https://t.me/share/url` с параметрами `url` и `text`.
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
  3. Messenger endpoint с `url` и `text`.
  4. Компактная кнопка `Отправить`, если `window.open` заблокирован.
- Проверено, что fallback text остаётся коротким и не содержит HTML или Markdown.

## Git

- Branch: `feature/issue-52-messenger-share-fallback`
- PR: pending
- Commit: pending
- Merged by agent: pending

## Blockers

- Активных открытых PR на момент проверки не было.
- Блокеров по коду не обнаружено.
