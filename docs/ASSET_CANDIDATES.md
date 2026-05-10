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

### `marseille-historical`

- Статус: подключено в UI как историческая экспериментальная колода major-only.
- Источник: [Commons category / Tarot de Marseille - Nicolas Conver 1760](https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760)
- Локальные файлы: `assets/cards-experimental/marseille-historical/`
- Покрытие: 22/22 старших арканов.
- Режим состава в UI: автоматически используется `Старшие`, младшие не вытягиваются для этой колоды.
- Маппинг: старшие арканы маппятся по названию; `VIII LA JUSTICE` кладется в app Justice, а `XI LA FORCE` в app Strength, чтобы совпасть с текущими id приложения.
- Лицензия: файлы на Commons отмечены как `CC BY-SA 4.0`; при дальнейшем использовании нужна атрибуция и соблюдение условий share-alike.
- Примечание: это историческая колода Tarot de Marseille на базе Nicolas Conver 1760, а не native Rider-Waite-Smith mapping.
- Решение: колода подключена в UI, но остается экспериментальной и major-only.

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

- Source: [Original Etteilla Tarot - Le Jeu de Toth](https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth).
- Status: historical experimental deck, documentation only.
- Intended local path if approved later: `assets/cards-experimental/etteilla-type-i/`.
- Coverage note: Original Etteilla Type I is a full `78/78` deck.
- Mapping note: majors and minors are documented in `docs/ETTEILLA_MAPPING.md`; this is an experimental historical correspondence layer, not a native RWS mapping.
- License / reuse note: the Etteilla Foundation allows reuse for informational, academic, and research-oriented websites under CC BY-NC 4.0 for public-domain decks. The project fits that non-commercial profile.
- Blocker note for Issue #32: repeated automated asset retrieval checks failed. Local `curl` could not resolve `etteilla.org`; direct `eti.la` image URLs returned Cloudflare `530 / error code: 1016`; Node `fetch` failed for both hosts. A related `ancient.cards` page is reachable but exposes screenshots, not a structured 78-card asset pack.
- Decision for this task: keep `etteilla-type-i` out of the UI until a manual asset pack can be downloaded and verified card by card.
- Fallback plan if later approved: keep `rws-classic` fallback for missing or unmapped cards.
