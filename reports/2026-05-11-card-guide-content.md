# Issue #56: full card guide content

Дата: 2026-05-11

## Статус

- Ветка: `feature/issue-56-card-guide-content`
- Implementation commit before report: `9cfce79265415b585239f23849d5e3e9b6f9ce30`
- PR: будет добавлен после публикации ветки
- Merge агентом: нет на момент отчета

## Что добавлено

- Добавлен файл данных `assets/data/card-guide-content.json`.
- В справочник подключены 78 карт: 22 старших аркана и 56 младших.
- Карточки справочника теперь показывают preview-картинку, название, native name, качества, краткое описание и раскрываемое расширенное описание.
- Добавлен фильтр `Избранные`.
- Избранное хранится в `localStorage` по ключу `tarot-card-guide-favorites` и привязано к app card id, а не к визуальной колоде.
- В справочнике добавлен селектор визуальной колоды с теми же deck id и тем же ключом `tarot-card-deck-id`, что и на главном экране.
- Полный просмотр из справочника переиспользует существующий lightbox и показывает расширенный текст в прокручиваемой области.

## Не менялось

- Firebase daily counter не менялся.
- Share canvas не менялся.
- Mapping исторических колод не менялся.
- Существующие ключи `tarot-use-reversed-cards`, `tarot-card-deck-id`, `tarot-card-pool-mode` сохранены.

## Проверки

- `git diff --check origin/main...HEAD` - успешно.
- JS-синтаксис inline script через `new Function(...)` - успешно.
- `assets/data/card-guide-content.json` - валидный JSON.
- Покрытие JSON: 78 карт, 78 уникальных id.
- `package.json` отсутствует, поэтому `npm run check`, `npm test`, `npm run build` недоступны.

## Smoke-test

- Статически проверено, что справочник строится из полного `fullDeck`, а изображения идут через существующий `cardImageForDeck`.
- Проверена логика fallback: для неполных визуальных колод справочник продолжает получать безопасный путь через текущий deck fallback.
- Проверена логика фильтров, поиска и избранного на уровне кода.
- Полный интерактивный headless smoke-test через Chrome DevTools Protocol не удалось стабильно завершить в текущем окружении, поэтому PR не следует self-merge без визуальной проверки владельцем.

## Blockers / notes

- Данных достаточно для подключения: `assets/data/card-guide-content.json` содержит 78/78 карт.
- Основной остаточный риск: требуется визуальная проверка на мобильной ширине около 390px перед merge.
