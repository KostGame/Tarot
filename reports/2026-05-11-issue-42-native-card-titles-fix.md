# Issue #42 — Marseille native titles mapping fix

## Что изменено

- Исправлен `nativeTitles` для `marseille-historical`:
  - `major-08-strength` → `La Force`
  - `major-11-justice` → `La Justice`
- Добавлен и использован deck-level source для родного названия карты.
- Восстановлен `normalizeGuideSearch(...)`, чтобы справочник карт корректно открывался и искал по текущему списку.
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

- Проверено в браузере на мобильной ширине и в fullscreen.
- `Сила` показывает `La Force`.
- `Справедливость` показывает `La Justice`.
- В справочнике карт `La Force` и `La Justice` отображаются как вторичная строка ниже основного названия.
- `rws-classic` не показывает native title.

## Статус

- Branch: `feature/issue-42-native-card-titles-fix`
- Code commit: `f4d6a8e` (`Fix guide native title fallback`)
- PR #62: https://github.com/KostGame/Tarot/pull/62
- PR state: merged
- Merge commit: `3bf6686` (`Merge pull request #62 from KostGame/feature/issue-42-native-card-titles`)
