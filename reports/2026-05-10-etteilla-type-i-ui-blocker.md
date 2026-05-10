# Отчет: Issue #32 Etteilla Type I UI connection blocker

Дата: 2026-05-10

## Основное

- Ветка: `feature/etteilla-type-i-ui-blocker`
- Issue: https://github.com/KostGame/Tarot/issues/32
- Source: https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth
- PR: https://github.com/KostGame/Tarot/pull/33
- PR смержен: да
- Commit hash: `1804ae9d1ef89c5c997eab5ba8c25c5ab5090fec`
- Merge commit hash: нет
- Follow-up branch: `feature/etteilla-type-i-asset-recheck`
- Follow-up PR: https://github.com/KostGame/Tarot/pull/34
- Follow-up commit hash: `dfb206dbc69ef7b6f703fedb72ae021229a93f48`

## Результат

Etteilla Type I не подключена в UI.

Причина: несмотря на то, что source structure и mapping contract уже подготовлены, безопасный local asset pack собрать не удалось. При автоматической проверке source image host возвращал `error code: 1016`, поэтому прямое скачивание 78 карточных изображений не прошло.

## Повторная проверка asset pack

Повторно проверены варианты безопасной сборки `78/78` asset pack:

- structured source `https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth`;
- direct image host `https://eti.la/i/...`;
- Node `fetch` к обоим host;
- related `ancient.cards` page as a research lead, not as основная замена source.

Результат:

- локальный `curl` не смог разрешить `etteilla.org`;
- direct `eti.la` image URLs возвращают Cloudflare `530 / error code: 1016`;
- Node `fetch` завершается ошибкой для `etteilla.org` и `eti.la`;
- `ancient.cards` доступен, но отдаёт screenshots, а не отдельный структурированный 78-card pack;
- безопасный локальный pack `78/78` снова не найден.

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
- Assets found: `0` blocked by source host error `1016` and local source host resolution failure
- Broken asset links: not verified because assets could not be downloaded
- Deck selector order checked: no
- Safe pool modes checked: no

## What changed

- Updated `docs/ASSET_CANDIDATES.md` with a blocker note.
- Updated `docs/ETTEILLA_MAPPING.md` with reuse and blocker notes.
- Rechecked the asset source and documented the repeated blocker.
- UI was intentionally not changed.
- No assets were downloaded.

## Checks

- `git diff --check` - passed.
- `npm run check` - passed.
- `npm test` - passed after rerun outside sandbox; the first sandboxed run hit Vite `EPERM` while writing `.vite-temp`.
- `npm run build` - passed after rerun outside sandbox; the first sandboxed run hit Vite `EPERM` while writing `.vite-temp`.
- GitHub Actions / commit statuses for PR #33 commit `1804ae9d1ef89c5c997eab5ba8c25c5ab5090fec` - not found during the previous blocker PR review.
- GitHub Actions / commit statuses for PR #34 commit `dfb206dbc69ef7b6f703fedb72ae021229a93f48` - not found; `statusCheckRollup` is empty.
- Recheck commands: `curl` source page probe, `curl` direct image URL probe, Node `fetch` probe.

## Recommendation

Keep `etteilla-type-i` disconnected from UI until a manual asset pack can be prepared and verified card by card.
If a future asset pack becomes available, re-run the checklist and only then connect the deck in the selector.
