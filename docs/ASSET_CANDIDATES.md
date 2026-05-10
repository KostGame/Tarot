# Asset Candidates

Дата фиксации списка: `2026-05-09`.

Этот документ фиксирует экспериментальные и альтернативные наборы карт для `KostGame/Tarot`. В UI подключены только те наборы, которые удалось автоматически скачать и однозначно привязать к текущей 78-карточной модели или к ее безопасному fallback-сценарию.

## Подключено в UI

### `rws-classic`

- Статус: базовая стабильная колода.
- Источник: Wikimedia Commons, Rider-Waite-Smith tarot deck (TaionWC).
- Локальные файлы: `assets/cards/`
- Покрытие: 78/78 карт.
- Примечание: основной fallback для всех экспериментальных наборов.

### `rws-dark-classic`

- Статус: базовая темная тема.
- Источник: те же локальные изображения `rws-classic`.
- Локальные файлы: `assets/cards/`
- Покрытие: 78/78 карт.
- Примечание: отдельные ассеты не требуются, используется CSS-обработка.

### `pixel-tarot`

- Статус: подключено как экспериментальный полный набор.
- Источник: [Papitas319 / Tarot pixel assets](https://papitas319.itch.io/tarot-pixel-assets)
- Локальные файлы: `assets/cards-experimental/pixel-tarot/`
- Покрытие: 78/78 карт.
- Формат подключения: прямой маппинг на все `major-*`, `cups-*`, `swords-*`, `wands-*`, `pentacles-*`.
- Fallback: не нужен для штатного сценария, но общий fallback на `rws-classic` сохранен.
- Лицензия: требует ручной проверки пользователем по странице/архиву источника.

### `veil-of-fate`

- Статус: подключено как экспериментальный набор `старшие + двор`.
- Источник: [Dajeki / Veil of Fate](https://dajeki.itch.io/veil-of-fate-mystic-tarot-icons)
- Локальные файлы: `assets/cards-experimental/veil-of-fate/`
- Покрытие: 38 локальных файлов.
- Что есть локально: 22 старших аркана и 16 фигурных карт.
- Режим состава в UI: автоматически используется `Старшие + двор`, поэтому номерные младшие арканы не вытягиваются для этой колоды.
- Маппинг стихий: `air -> swords`, `water -> cups`, `fire -> wands`, `earth -> pentacles`.
- Лицензия: на странице заявлен `CC0`, но набор отмечен как AI-assisted и требует ручной проверки пользователем.

### `major-pixel-jcanabal`

- Статус: подключено как экспериментальный набор только для старших арканов.
- Источник: [jcanabal / Major Arcana Pixel Art Free](https://jcanabal.itch.io/major-arcana-pixel-art-free)
- Локальные файлы: `assets/cards-experimental/major-pixel-jcanabal/`
- Покрытие: 22 локальных файла.
- Формат подключения: старшие арканы берутся из набора, младшие автоматически добираются из `rws-classic`.
- Лицензия: требует ручной проверки пользователем по странице/архиву источника.

### `major-pixel-zune`

- Статус: подключено как экспериментальный набор только для старших арканов.
- Источник: [ZUNE / Major Arcana Tarot Cards in Pixel](https://starsinabox.itch.io/majorarcana)
- Локальные файлы: `assets/cards-experimental/major-pixel-zune/`
- Покрытие: 22 локальных файла.
- Формат подключения: старшие арканы берутся из набора, младшие автоматически добираются из `rws-classic`.
- Особенность: numbering в исходнике не полностью совпадает с классической RWS-нумерацией (`Justice`/`Strength`), поэтому использован маппинг по именам папок, а не только по номеру.
- Лицензия: в `_readme.txt` автор просит атрибуцию и запрещает redistrib/resale/AI usage; нужен ручной обзор пользователем перед дальнейшим расширением использования.

## Оставлено только в документации

### False Dichotomy Tarot

- Источник: [ChaoteCruithne/FalseDichotomyTarot](https://github.com/ChaoteCruithne/FalseDichotomyTarot)
- Статус: не подключено в UI.
- Причина: автоматический маппинг к текущей модели приложения неочевиден, состав и соответствие карт требуют отдельной ручной проверки.

## Правила дальнейшего подключения

1. Не использовать внешние изображения в runtime.
2. Подключать в UI только наборы с понятным составом и проверяемым маппингом.
3. Для `major-court` и `major-only` наборов автоматически сужать состав карт до доступного покрытия.
4. Для каждого нового набора фиксировать источник, дату добавления и лицензионные замечания.
5. Перед merge проверять мобильную ширину около `390px`, fullscreen-просмотр, отсутствие горизонтального скролла и поведение fallback.
### `etteilla-historical`

- Source: [Wikimedia Commons / Etteilla I tarot deck](https://commons.wikimedia.org/wiki/Category:Etteilla_I_tarot_deck).
- Status: candidate only, not connected to UI.
- Intended local path if approved later: `assets/cards-experimental/etteilla-historical/`.
- Coverage note: the Commons category contains 107 files for the Grand Etteilla / Etteilla I tradition, including historical variants and scans, not a clean 78-card Rider-Waite-Smith-compatible set.
- Mapping note: Etteilla differs from Rider-Waite-Smith in structure, ordering, titles, and divinatory system. A direct automatic mapping to the app's current `major-*`, `cups-*`, `swords-*`, `wands-*`, and `pentacles-*` ids is not reliable.
- Decision for Issue #26: do not download or commit images and do not expose `etteilla-historical` in the deck selector until a manual mapping table is reviewed.
- UI order if later approved: place immediately after `rws-classic` and `rws-dark-classic`, before other experimental decks.
- Fallback plan if later approved: keep `rws-classic` fallback for missing or unmapped cards.
