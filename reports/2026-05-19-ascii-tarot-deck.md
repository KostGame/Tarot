# ASCII Tarot deck report

- Issue: [#103](https://github.com/KostGame/Tarot/issues/103)
- PR: [#104](https://github.com/KostGame/Tarot/pull/104)
- Ветка: `feature/deck-ascii-tarot`
- Коммит: `6969c3b`
- Merge commit: не применимо, PR не смержен
- Был ли дубль существующих mono decks: нет
- Источник: `https://github.com/lawreka/ascii-tarot`
- Reference manifest: `https://raw.githubusercontent.com/arcanaland/reference-decks/main/ascii-tarot/deck.toml`
- Лицензия: `MIT`
- Coverage: `78/78`
- Каким способом подключены ASCII assets: локально сгенерированный `78/78` SVG-pack из upstream ASCII deck через детерминированный `scripts/generate-ascii-tarot-assets.mjs`
- Подключалась ли колода в UI: да, добавлена отдельная экспериментальная колода `ASCII Tarot`
- Были ли blockers: да, manual browser smoke-test не удалось завершить, потому что browser backend в этом workspace блокирует локальные URL (`http://127.0.0.1`, `file://`, `data:`)
- Какие файлы добавлены:
  - `scripts/generate-ascii-tarot-assets.mjs`
  - `assets/cards-experimental/ascii-tarot/source/cards.cjs`
  - `assets/cards-experimental/ascii-tarot/README.md`
  - `assets/cards-experimental/ascii-tarot/LICENSE.md`
  - `assets/cards-experimental/ascii-tarot/ATTRIBUTION.md`
  - `assets/cards-experimental/ascii-tarot/SOURCE_URLS.md`
  - `assets/cards-experimental/ascii-tarot/*.svg` (78 файлов)
- Какие документы обновлены:
  - `assets/cards-experimental/README.md`
  - `docs/ASSET_CANDIDATES.md`
  - `docs/FREE_TAROT_DECK_CANDIDATES.md`
  - `index.html`
- Какие проверки запускались:
  - `node scripts/generate-ascii-tarot-assets.mjs`
  - `git diff --check`
  - `git diff --cached --check`
  - `npm run check` / `npm test` / `npm run build` не запускались, потому что в репозитории нет `package.json`
- Результат ручного smoke-test: частично blocked; browser backend не дал открыть локальный статический сайт, поэтому проверить selector/fullscreen/share/image-only preview в браузере здесь не удалось
- Статус merge: не выполнен, PR оставлен draft
- Статус Pages, если проверял: не проверял

## Итог

`ASCII Tarot` не является дублем `Unicode`, `Pixel Mono` или `Pixel Zune`, лицензия и provenance подтверждены, локальный `78/78` SVG pack подключён и задокументирован. Единственный оставшийся gap для полного merge в этом окружении - browser smoke-test, который заблокирован политикой browser backend на локальные URL.
