# Issue #44 — Historical deck candidates research

## Что сделано

- Подготовлен исследовательский документ по историческим кандидатам:
  - Tarot Nouveau / Grimaud 1898
  - Jean Dodal Tarot
  - Egyptian Tarot / Falconnier
  - Visconti-Sforza
- Обновлен `docs/ASSET_CANDIDATES.md`.
- Добавлен `docs/HISTORICAL_DECK_CANDIDATES.md`.
- Новые колоды в UI не подключались.
- Ассеты не скачивались.
- `index.html`, share flow, Firebase и localStorage keys не менялись.

## Краткий вывод по кандидатам

- Tarot Nouveau / Grimaud 1898:
  - самый сильный кандидат на будущий full deck;
  - Commons category показывает 79 файлов;
  - покрытие выглядит как `78/78` плюс один файл рубашки;
  - подключать в UI сейчас нельзя, потому что нужен вручную собранный и проверенный pack.
- Jean Dodal Tarot:
  - годится как future `major-only` deck;
  - Commons category показывает 29 файлов;
  - full 78-card pack не подтвержден;
  - minors безопасно не собираются.
- Egyptian Tarot / Falconnier:
  - тоже кандидат на future `major-only` deck;
  - Commons category показывает 23 файла;
  - номерная схема требует явного historical mapping;
  - full pack не подтвержден.
- Visconti-Sforza:
  - research-only blocker / partial candidate;
  - семейство разнесено по нескольким подколлекциям;
  - безопасного full pack сейчас нет.

## Источники, которые проверены

- `https://ru.wikipedia.org/wiki/Таро_Нуво`
- `https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898`
- `http://gallica.bnf.fr/ark:/12148/btv1b10510159t`
- `https://ru.wikipedia.org/wiki/Таро_Жана_Додаля`
- `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- `http://www.tarot-history.com/Jean-Dodal/`
- `https://ru.wikipedia.org/wiki/Египетское_Таро`
- `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)`
- `http://gallica.bnf.fr/ark:/12148/bpt6k5525090q`
- `https://ru.wikipedia.org/wiki/Таро_Висконти_—_Сфорцы`
- `https://commons.wikimedia.org/wiki/Category:Visconti-Sforza_tarot_deck`
- `https://commons.wikimedia.org/wiki/Category:Pierpont_Morgan-Bergamo_Visconti-Sforza_Tarot`

## Проверки

- `git diff --check`
- `npm run check` не запускался: в репозитории нет `package.json`
- `npm test` не запускался: в репозитории нет `package.json`
- `npm run build` не запускался: в репозитории нет `package.json`

## Статус

- Branch: `feature/issue-44-historical-deck-candidates`
- Head commit: `c4ec21f` (`Document historical deck candidates`)
- PR: не создан
- Issue comment: не оставлен
- Merge: не выполнялся

## Follow-up

- Следующий безопасный шаг: собрать manual asset pack только для Tarot Nouveau.
- Для Jean Dodal и Falconnier нужен отдельный major-only pack.
- Visconti-Sforza пока держать как blocker / research-only.

