# Отчет: Add Etteilla historical tarot deck

Дата: 2026-05-10

## Основное

- Ветка: `feature/add-etteilla-historical-deck`
- Issue: https://github.com/KostGame/Tarot/issues/26
- PR: https://github.com/KostGame/Tarot/pull/27
- PR смержен: нет
- Commit hash: `e417297a2557dee2e9f8e482cb336fae503a6438`
- Merge commit hash: нет
- GitHub Pages: https://kostgame.github.io/Tarot/

## Повторная оценка

После research update по Etteilla mapping я повторно проверил источник на Wikimedia Commons.

Вывод:

- у категории есть 22 явно пронумерованных старших аркана с понятными названиями;
- дальше в категории идут общие исторические сканы и листы с длинными названиями, которые не дают надежного 78-карточного pack с однозначными suit/rank filename-паттернами;
- надежный полный набор файлов для безопасного автоматического подключения в UI не подтвержден;
- conservative mapping для старших и младших арканов зафиксирован в комментарии issue, но без ручного asset pack его лучше не активировать.

## Решение

Колода `etteilla-historical` остается candidate only и не подключается в UI.

Причина: несмотря на наличие исторически интересного материала, текущий источник не дает безопасного полного asset pack с однозначными файлами для всех 78 карт. Без ручной подготовки и проверки такого pack автоматическое подключение может ввести пользователя в заблуждение.

## Что зафиксировано

- схема исторического mapping подготовлена на уровне документации;
- UI-подключение отложено до ручного asset pack;
- `etteilla-historical` не добавлен в selector колод;
- локальные Etteilla-изображения в репозиторий не коммитились.

## Измененные файлы

- `docs/ASSET_CANDIDATES.md`
- `assets/cards-experimental/README.md`
- `reports/2026-05-10-add-etteilla-historical-deck.md`

## Документация

В `docs/ASSET_CANDIDATES.md` и `assets/cards-experimental/README.md` колода `etteilla-historical` оставлена как candidate path.

## Проверки

- `git status` - проверено.
- `git diff --check` - пройдено.
- Проверено, что `etteilla-historical` не добавлен в `cardDecks` и не отображается в UI.
- Проверено, что архивы, временные файлы и изображения Etteilla не добавлены.

## Ручные шаги

Для будущего подключения Etteilla нужен вручную подготовленный и проверенный asset pack на 78 карт с однозначными именами файлов. После этого можно будет безопасно подключить колоду в UI и сохранить fallback на `rws-classic`.
