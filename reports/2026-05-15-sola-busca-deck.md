# Sola Busca Tarot

Дата: `2026-05-15`

## Что сделано

- Подключена колода `Sola Busca` как полный исторический deck `78/78`.
- Добавлен локальный pack в `assets/cards-experimental/sola-busca/`.
- Добавлены `nativeTitles` для всех 78 карт.
- Обновлены справочники кандидатов и документация по experimental assets.
- UI не использует runtime hotlink.

## Источник и покрытие

- Commons category: `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck`
- В категории есть `83` файлов.
- Курация собрала безопасный pack `78/78`.
- Лишние non-core файлы из категории в pack не вошли.

## Маппинг

- Trumps подключены через title-based correspondence к app major ids.
- Minors подключены напрямую по suit/rank к canonical app ids.
- Native titles показывают исторические Sola Busca названия, а для minors используются итальянские suit/rank labels.

## Проверки

- `git diff --check`
- Inline JS syntax check через `node` + `new Function(...)`
- Проверка локального pack:
  - `78` JPG файлов
  - JPEG signatures OK
  - размеры файлов выровнены до thumbnail-уровня: `330x611` и `330x610`
- Проверка соответствия имён:
  - missing: `0`
  - extra: `0`

## Что не удалось проверить здесь

- `npm run check`, `npm test`, `npm run build` не запускались, потому что в репозитории по-прежнему нет `package.json`.
- Полный browser smoke-test в этой среде недоступен; поэтому визуальную валидацию UI оставляю как ручной шаг для GitHub Pages.

## Замечания

- При скачивании Commons временно отдавал `429 Too many requests`, поэтому pack собирался через thumbnail URLs и с паузой между запросами.
- Это не повлияло на лицензионную проверку: на Commons файлы отмечены как public domain scans.
