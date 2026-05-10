# Issue #42 — Marseille native titles mapping fix

## Что изменено

- Исправлен `nativeTitles` для `marseille-historical`:
  - `major-08-strength` → `La Force`
  - `major-11-justice` → `La Justice`
- Основное app title не менялось.
- Родное название по-прежнему показывается вторичной строкой в скобках.
- Native title отображается:
  - во fullscreen-просмотре карты;
  - в справочнике карт;
  - в карточке результата как компактная дополнительная строка.

## Что не менялось

- Share canvas не менялся.
- Mapping не менялся.
- Firebase не менялся.
- Share flow не менялся.
- LocalStorage keys не менялись.
- Новые колоды не подключались.

## Файлы

- `index.html`
- `reports/2026-05-11-issue-42-native-card-titles-fix.md`

## Проверки

- `git diff --check`
- inline JS syntax check через `new Function(...)`
- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test`, `npm run build` не запускались

## Визуальная проверка

- По коду подтверждено, что `Сила` получает `La Force`, а `Справедливость` получает `La Justice`.
- Fullscreen и справочник используют один и тот же deck-level native title source.
- Полноценный browser smoke-test в этой среде не удалось прогнать: здесь нет доступного локального browser binary и не установлен Playwright.

## Статус

- Branch: `feature/issue-42-native-card-titles-fix`
- Head commit: `3b019a7` (`Fix Marseille native title mapping`)
- PR #62: needs to be updated on remote branch `feature/issue-42-native-card-titles`
