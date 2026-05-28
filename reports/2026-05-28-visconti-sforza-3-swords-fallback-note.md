# Visconti-Sforza: 3 Мечей и fallback-пометка

Дата: 2026-05-28

## Контекст

Issue: https://github.com/KostGame/Tarot/issues/112

После PR #111 колода `visconti-sforza-composite` имела 74 исторических ассета и 4 fallback-карты. Задача этого follow-up — повторно проверить Commons-кандидат для `swords-03-three` / `Tre di spade` и проверить область отображения пометки `Отсутствует в оригинальной колоде`.

## Результат

- Ветка: `feature/visconti-sforza-3-swords-and-fallback-note-check`
- PR: pending
- Commit: pending
- Merge status: pending
- `swords-03-three`: подключена как исторический ассет
- Итоговый historical asset count: 75
- Итоговый fallback count: 3

## Источник `3 Мечей`

- Source file page: https://commons.wikimedia.org/wiki/File:Tre_di_spade.jpg
- Download URL: `https://upload.wikimedia.org/wikipedia/commons/2/20/Tre_di_spade.jpg`
- Commons file title: `Tre di spade`
- Metadata description: `Three of spades from the Pierpont-Morgan tarot collection, shot on location at the library`
- Author / uploader metadata: `Campelli`
- Rights status: Public domain
- Usage terms: Public domain
- Attribution required: false
- License metadata: `pd`

Файл сохранен локально как `assets/cards/visconti-sforza-composite/swords-03-three.jpg`. Runtime hotlink не используется.

## Итоговые fallback-карты

- `major-15-devil` — Дьявол
- `major-16-tower` — Башня
- `pentacles-12-knight` — Рыцарь Пентаклей

`swords-03-three` больше не входит в fallback-список.

## Пометка fallback

Пометка `Отсутствует в оригинальной колоде` показывается только на обычном экране результата и только если `selectedCardDeck.fallbackCards` содержит id выпавшей карты.

Пометка не показывается:

- во fullscreen;
- в image-only preview;
- на share-картинке;
- в share text;
- в clipboard fallback;
- в названии карты;
- в тексте трактовки.

## Проверки

- `git diff --check`: passed
- inline JS syntax check: passed (`scripts_ok=1`)
- static mapping validation: passed
  - `75` historical JPG assets in `assets/cards/visconti-sforza-composite/`
  - `3` fallback cards through `rws-classic`
  - `75 + 3 = 78` target cards
  - `SOURCE_URLS.md` contains `78` per-card rows
  - `swords-03-three` exists in the historical pack and is absent from `fallbackCards`
- JPEG signature validation: passed, `75/75`
- Fallback file validation: passed, remaining fallback files exist in `assets/cards/`
- Fallback note scope validation: passed
  - `deckFallbackNoteForCard` is called only from `readingCard`
  - no render path was added to fullscreen/share/image-only preview
- `npm run check`: unavailable, `package.json` отсутствует
- `npm test`: unavailable, `package.json` отсутствует
- `npm run build`: unavailable, `package.json` отсутствует

## Smoke-test

- `Дьявол`, `Башня`, `Рыцарь Пентаклей`: остаются fallback и показывают пометку на обычном экране результата.
- `Тройка Мечей`: использует локальный historical asset без fallback-пометки.
- Fullscreen/share/image-only preview не получают `deckFallbackNoteForCard`, поэтому пометка туда не попадает.

Итог smoke-test: passed by static/deterministic validation. Browser smoke-test не запускался: в текущей среде нет доступного Playwright/browser runtime.
