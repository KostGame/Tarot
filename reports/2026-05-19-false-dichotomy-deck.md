# False Dichotomy Tarot blocker report

Дата: `2026-05-19`

## Итог

Колода `False Dichotomy Tarot` не подключалась в UI и ассеты не коммитились.

Причина остановки: найден font-rights blocker. В README и guidebook источника указан шрифт `Chaos Times` by Ablaze, а страница DaFont для этого шрифта помечает его как `Free for personal use`. До отдельного подтверждения, что шрифт можно использовать и перераспространять в составе CC BY 4.0 изображений колоды, provenance asset pack недостаточно чистый для подключения.

## Проверки источника

- Источник: `https://github.com/ChaoteCruithne/FalseDichotomyTarot`
- Source commit: `923032442ec6070ad8d8a353cc5debc87e1070dd`
- README: подтверждает, что колода создана автором с нуля, свободно доступна под Creative Commons Attribution 4.0 и является standard 78-card deck: 22 Major Arcana + 56 Minor Arcana.
- `LICENSE.md`: содержит текст Creative Commons Attribution 4.0 International Public License.
- Изображения доступны как файлы в репозитории:
  - `Images/MajorArcana/*.png`: 22 файла.
  - `Images/MinorArcana/*.png`: 56 файлов.
- Source files доступны отдельно в `SourceFiles/`.
- Сторонний компонент: `Chaos Times` font by Ablaze, ссылка из README/Guide: `https://www.dafont.com/chaos-times.font`.
- Страница шрифта DaFont: `Free for personal use`.

## Валидация покрытия

- Total source cards: 78
- Total mapped target cards: 0, потому что mapping не применялся после blocker.
- Missing source cards: 0
- Missing target cards: не проверялось после blocker.
- Duplicate target cards: не проверялось после blocker.
- Majors: 22
- Minors: 56
- Court cards: не проверялось после blocker.
- License docs present: yes, в источнике есть `LICENSE.md`.
- Attribution docs present: no, в проект не добавлялись, потому что ассеты не подключались.
- Source URLs present: no, в asset pack не добавлялись, потому что ассеты не подключались.
- No fallback to rws-classic for this deck: yes, потому что deck id не зарегистрирован в UI.

## Mapping

Младшие арканы источника имеют нестандартную структуру: четыре suits `Shadow/Self`, `Science/Magick`, `Risk/Reward`, `Past/Future` и 14 prepositions вместо традиционных ranks. Для подключения потребовался бы явный mapping dictionary к модели приложения.

Mapping dictionary не создавался и не применялся, потому что проверка остановлена раньше на font-rights blocker.

## GitHub

- Issue: `https://github.com/KostGame/Tarot/issues/101`
- PR: не создавался.
- Ветка: `feature/deck-false-dichotomy-tarot`
- Коммит: документационный commit `Document False Dichotomy Tarot blocker` в этой ветке.
- Merge commit: нет.

## Изменения

- Подключалась ли колода в UI: нет.
- Ассеты скачивались в проект: нет.
- Добавленные файлы проекта: только этот blocker-report.
- Обновленные документы: `docs/ASSET_CANDIDATES.md`.

## Проверки

- `npm run check`: не запускался, в этом worktree нет `package.json`.
- `npm test`: не запускался, в этом worktree нет `package.json`.
- `npm run build`: не запускался, в этом worktree нет `package.json`.
- `git diff --check`: запускался после документационных изменений.

## Ручной smoke-test

Не выполнялся, потому что колода не подключалась в UI.

## Статус

- Blockers: yes.
- Merge: не выполнялся.
- Pages: не проверялся, потому что изменений приложения и PR не было.
