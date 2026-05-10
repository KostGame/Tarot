# Отчет: Add Etteilla historical tarot deck

Дата: 2026-05-10

## Основное

- Ветка: `feature/add-etteilla-historical-deck`
- Issue: https://github.com/KostGame/Tarot/issues/26
- PR: https://github.com/KostGame/Tarot/pull/27
- PR смержен: нет.
- Commit hash: `e417297a2557dee2e9f8e482cb336fae503a6438`
- Merge commit hash: нет.
- GitHub Pages: https://kostgame.github.io/Tarot/

## Решение

Колода `etteilla-historical` не подключена в UI.

Причина: маппинг Etteilla к текущей модели карт ненадежен. Историческая Etteilla I / Grand Etteilla отличается от Rider-Waite-Smith по структуре, порядку, названиям и системе соответствий. Источник на Wikimedia Commons содержит 107 файлов, а не чистый набор 78 карт, который можно автоматически разложить по текущим id `major-*`, `cups-*`, `swords-*`, `wands-*`, `pentacles-*`.

Поэтому безопасный результат для Issue #26:

- не скачивать и не коммитить изображения;
- не добавлять `etteilla-historical` в селектор колод;
- зафиксировать набор как candidate в документации;
- явно указать, что перед подключением нужен ручной mapping table.

## Измененные файлы

- `docs/ASSET_CANDIDATES.md`
- `assets/cards-experimental/README.md`
- `reports/2026-05-10-add-etteilla-historical-deck.md`

## Документация

В `docs/ASSET_CANDIDATES.md` добавлен candidate:

- id: `etteilla-historical`
- источник: Wikimedia Commons / Etteilla I tarot deck
- предполагаемый путь при будущем подключении: `assets/cards-experimental/etteilla-historical/`
- статус: candidate only, не подключено в UI
- причина: ненадежный автоматический маппинг к текущей RWS-ориентированной модели
- будущий порядок в UI, если mapping будет одобрен: после `rws-classic` и `rws-dark-classic`, перед остальными экспериментальными колодами
- fallback-план при будущем подключении: `rws-classic`

В `assets/cards-experimental/README.md` добавлена заметка, что `etteilla-historical/` пока является только candidate path и не хранит локальные ассеты.

## Проверки

- `git status` — проверено.
- `git diff --check` — пройдено.
- JS-синтаксис inline-скрипта через Node.js `new Function(...)` — пройдено.
- Проверено, что `etteilla-historical` не добавлен в `cardDecks` и не отображается в UI.
- Проверено, что архивы, временные файлы и изображения Etteilla не добавлены.

## Ручные шаги

Для будущего подключения Etteilla нужно вручную подготовить и проверить таблицу соответствий исторической Etteilla I / Grand Etteilla к текущей модели приложения. Без этого подключение в UI может вводить пользователя в заблуждение.

После merge нужно дождаться обновления GitHub Pages только для обновления документации в репозитории; пользовательский UI не меняется.
