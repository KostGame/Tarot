# Отчет по follow-up: guide icon tweak

- Ветка: `feature-issue-65-guide-icon-tweak`
- PR: https://github.com/KostGame/Tarot/pull/68
- Commit: `404fe6d`
- Статус: PR открыт, не смержен на момент этого отчета

## Что изменено

- Значок перехода к справочнику заменен на круглый info/help icon.
- Иконка обновлена во всех местах использования:
  - кнопка открытия справочника на основном экране;
  - кнопка перехода в справочник из fullscreen.
- Поведение, localStorage, fullscreen, share canvas и навигация не менялись.

## Проверки

- `git diff --check`
- Ручная проверка разметки: одинаковый icon SVG присутствует в обоих местах использования
- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test` и `npm run build` недоступны

