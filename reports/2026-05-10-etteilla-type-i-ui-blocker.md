# Отчет: Issue #32 Etteilla Type I UI connection blocker

Дата: 2026-05-10

## Основное

- Ветка: `feature/etteilla-type-i-ui-blocker`
- Issue: https://github.com/KostGame/Tarot/issues/32
- Source: https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth
- PR: будет создан после commit
- PR смержен: нет
- Commit hash: будет добавлен после commit
- Merge commit hash: нет

## Результат

Etteilla Type I не подключена в UI.

Причина: несмотря на то, что source structure и mapping contract уже подготовлены, безопасный local asset pack собрать не удалось. При автоматической проверке source image host возвращал `error code: 1016`, поэтому прямое скачивание 78 карточных изображений не прошло.

## License / reuse note

По источнику reuse допускается для informational, academic и research-oriented websites under CC BY-NC 4.0 для public-domain decks. Это не являлось blocker'ом. Blocker возник на этапе технического доступа к image host.

## Mapping status

- Deck id: `etteilla-type-i`
- Source deck size: `78/78`
- Mapping contract: available in `docs/ETTEILLA_MAPPING.md`
- Major mapping: historical correspondence, medium confidence
- Minor mapping: suit/rank, high confidence
- Native RWS reading: no, this is an experimental historical correspondence layer

## Validation checklist

- Total mapped source cards: `78`
- Total target app cards: `78`
- Missing target cards: `0`
- Duplicate target cards: `0`
- Missing source cards: `0`
- Major mapped by dictionary: `22`
- Minor mapped by suit/rank: `56`
- Assets found: `0` blocked by source host error `1016`
- Broken asset links: not verified because assets could not be downloaded
- Deck selector order checked: no
- Safe pool modes checked: no

## What changed

- Updated `docs/ASSET_CANDIDATES.md` with a blocker note.
- Updated `docs/ETTEILLA_MAPPING.md` with reuse and blocker notes.
- UI was intentionally not changed.
- No assets were downloaded.

## Checks

- `git diff --check` - run.
- `npm run check` - not available, `package.json` is absent in this repo.
- `npm test` - not available, `package.json` is absent in this repo.
- `npm run build` - not available, `package.json` is absent in this repo.

## Recommendation

Keep `etteilla-type-i` disconnected from UI until a manual asset pack can be prepared and verified card by card.
If a future asset pack becomes available, re-run the checklist and only then connect the deck in the selector.
