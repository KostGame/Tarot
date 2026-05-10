# Отчет: Add Marseille historical deck

Дата: 2026-05-10

## Основное

- Ветка: `feature/marseille-historical-deck`
- Issue: https://github.com/KostGame/Tarot/issues/35
- PR: https://github.com/KostGame/Tarot/pull/36
- Commit: `768f00ef64788a7aabf1ac9ee5990bbfd792c0cd`
- Coverage: `major-only`
- Marseille подключена в UI: да

## Источник ассетов

- Source URL: [Commons category / Tarot de Marseille - Nicolas Conver 1760](https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760)
- License / reuse checked: да, file pages отмечены как `CC BY-SA 4.0`
- Assets local: `assets/cards-experimental/marseille-historical/`

## Что сделано

- Подключена историческая экспериментальная колода `marseille-historical`.
- Использован безопасный major-only pack `22/22`.
- Старшие арканы маппятся по названию.
- Justice / Strength нормализованы к app ids.
- Selector order обновлен: `rws-classic`, `rws-dark-classic`, `marseille-historical`, затем остальные экспериментальные колоды.
- Добавлено компактное уведомление для major-only режима Marseille.
- Обновлены `docs/ASSET_CANDIDATES.md`, `docs/MARSEILLE_MAPPING.md`, `assets/cards-experimental/README.md`, `assets/cards-experimental/marseille-historical/README.md`.

## Validation checklist

- Total mapped source cards: `22`
- Total target app major cards: `22`
- Missing major cards: `0`
- Duplicate major cards: `0`
- Missing source cards: `0`
- Major mapped by title: `22`
- Justice / Strength checked: yes
- Deck selector order checked: yes
- Safe pool modes checked: yes
- Fallback behavior checked: yes, `rws-classic` remains fallback
- Assets found: `22`
- Broken asset links: `0`

## Checks

- `git diff --check` - passed.
- `npm run check` - passed.
- `npm test` - passed after rerun outside sandbox.
- `npm run build` - passed after rerun outside sandbox.

## Smoke-test

Browser runner was not available in this environment, so interactive browser smoke-test was replaced with static validation:

- verified the Marseille deck entry is present in `index.html`;
- verified the deck points to `assets/cards-experimental/marseille-historical` with `jpg` assets;
- verified the local pack contains 22 `.jpg` files;
- verified the major-only notice path exists in the app code.

## Итог

Marseille connected as a historical experimental major-only deck. No runtime hotlinks were added, and the app stays on the existing fallback model for missing cards.
