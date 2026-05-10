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
- Mapping note: after the research update, only the 22 major arcana are clearly numbered and named in a way that is easy to inspect. The remaining Commons entries are mixed historical scans and do not provide a safe automatic 78-card asset pack with stable suit/rank filenames.
- Decision for Issue #26: keep `etteilla-historical` out of the deck selector until a manual asset pack is prepared and reviewed.
- UI order if later approved: place immediately after `rws-classic` and `rws-dark-classic`, before other experimental decks.
- Fallback plan if later approved: keep `rws-classic` fallback for missing or unmapped cards.

### `etteilla-type-i`

- Source: [Original Etteilla Tarot - Le Jeu de Toth](https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth), [Aeclectic Tarot review](https://www.aeclectic.net/tarot/cards/book-of-thoth-etteilla/), [LearnTarot reference](https://www.learntarot.com/bhdesc.htm).
- Status: historical experimental deck, documentation only.
- Intended local path if approved later: `assets/cards-experimental/etteilla-type-i/`.
- Coverage note: Original Etteilla Type I is a full `78/78` deck.
- Mapping note: majors should follow the historical correspondence table in `docs/ETTEILLA_MAPPING.md`; minors map by suit and rank to the app's current model.
- Decision for this task: keep `etteilla-type-i` out of the UI and do not download assets in this PR.
- Fallback plan if later approved: keep `rws-classic` fallback for missing or unmapped cards.

### `marseille-historical`

- Source: [Wikipedia / Tarot of Marseilles](https://en.wikipedia.org/wiki/Tarot_of_Marseilles).
- Status: candidate only, not connected to UI.
- Intended local path if approved later: `assets/cards-experimental/marseille-historical/`.
- Coverage note: Tarot de Marseille minors are pip cards, not illustrated Rider-Waite scenes, so the app's current reading layer is a learning layer rather than a native Marseille interpretation.
- Mapping note: majors should be mapped by title, not blindly by number, because Marseille numbering varies across traditions.
- Justice/Strength warning: Tarot de Marseille commonly places Justice at VIII and Strength at XI; this app follows Rider-Waite ids, so `La Justice` must map to app Justice and `La Force` must map to app Strength.
- Decision for Issue #28: prepare the mapping in documentation only; do not download assets or expose `marseille-historical` in the deck selector yet.
- Fallback plan if later approved: keep `rws-classic` fallback for missing or unmapped cards.
