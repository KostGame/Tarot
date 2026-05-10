# Отчет: Tarot de Marseille mapping research

Дата: 2026-05-10

## Основное

- Ветка: `feature/tarot-de-marseille-mapping`
- Issue: https://github.com/KostGame/Tarot/issues/28
- PR: пока не создан
- PR смержен: нет
- Commit hash: будет добавлен после commit
- Merge commit hash: нет
- Источник: [Wikipedia / Tarot of Marseilles](https://en.wikipedia.org/wiki/Tarot_of_Marseilles)

## Задача

Подготовить безопасный маппинг для будущей исторической колоды Tarot de Marseille и зафиксировать его в документации без скачивания ассетов и без подключения в UI.

## Итог

Колода `marseille-historical` подготовлена как documentation-only candidate.

Причины не подключать UI сейчас:

- Marseille minors являются pip cards, а не иллюстрированными сценами в стиле Rider-Waite-Smith.
- Нумерация старших арканов в Marseille традициях может отличаться от RWS.
- Для текущего приложения нужен title-based mapping для старших и аккуратная совместимость с существующей моделью карт.

## Major mapping by title

- Le Mat / Le Fou -> Fool
- I Le Bateleur -> Magician
- II La Papesse -> High Priestess
- III L'Imperatrice -> Empress
- IV L'Empereur -> Emperor
- V Le Pape -> Hierophant
- VI L'Amoureux -> Lovers
- VII Le Chariot -> Chariot
- VIII La Justice -> Justice
- VIIII / IX L'Hermite -> Hermit
- X La Roue de Fortune -> Wheel of Fortune
- XI La Force -> Strength
- XII Le Pendu -> Hanged Man
- XIII L'Arcane sans nom / La Mort -> Death
- XIV Temperance -> Temperance
- XV Le Diable -> Devil
- XVI La Maison Dieu -> Tower
- XVII L'Etoile -> Star
- XVIII La Lune -> Moon
- XIX Le Soleil -> Sun
- XX Le Jugement -> Judgement
- XXI Le Monde -> World

## Justice / Strength warning

Tarot de Marseille normally places Justice as VIII and Strength as XI. The app uses Rider-Waite-style ids where `major-08` is Strength and `major-11` is Justice.

Therefore the safe app-level mapping is title-based:

- `La Justice` -> app Justice
- `La Force` -> app Strength

## Minor mapping

- Batons / Bâtons -> Wands
- Coupes -> Cups
- Epees / Épées -> Swords
- Deniers / Coins -> Pentacles
- Ace to 10 -> Ace to 10
- Valet -> Page
- Chevalier / Cavalier -> Knight
- Dame / Reine -> Queen
- Roi -> King

## Risks

- Marseille minors are not native illustrated RWS-style cards, so any future reading layer is an adaptation, not a historical Marseille interpretation.
- Some Marseille packs and museum descriptions may vary in spelling, accents, and numbering conventions.
- A future asset pack should be checked card-by-card before UI connection.

## Documentation updates

- Added `marseille-historical` to `docs/ASSET_CANDIDATES.md` as a candidate-only historical deck.
- Added a note in `assets/cards-experimental/README.md` that the deck is not stored yet and should stay out of UI until a safe asset pack exists.

## Recommendation

Wait for a manually prepared historical asset pack with stable filenames before connecting a Marseille deck in the selector. Until then, keep this issue documentation-only.

