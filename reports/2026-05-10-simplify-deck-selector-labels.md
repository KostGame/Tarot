# Simplify deck selector labels

## Что изменено

- Укорочены подписи в выпадающем списке выбора колоды.
- Из `select` убраны служебные слова вроде:
  - `экспериментальная`
  - `историческая`
  - `только старшие`
  - `старшие + двор`
  - `все карты`
- Оставлены короткие названия:
  - `Классика`
  - `Темная классика`
  - `Tarot de Marseille`
  - `Pixel Tarot`
  - `Veil of Fate`
  - `Pixel Mono`
  - `Pixel Zune`

## Git

- PR: [#51 Simplify deck selector labels](https://github.com/KostGame/Tarot/pull/51)
- Branch: `feature/simplify-deck-selector-labels`
- Commit: `9b3c198aeb548d4be3dbdb258e5317d1969c7783`
- PR merged by agent: yes

## Что не менялось

- localStorage keys:
  - `tarot-use-reversed-cards`
  - `tarot-card-deck-id`
  - `tarot-card-pool-mode`
- safe pool mode logic
- fallback logic
- mappings исторических колод
- assets
- share canvas

## Проверки

- `git diff --check`
- статическая проверка: служебные подписи больше не попадают в `optionLabel`

## Smoke-test

- Проверено, что список колод использует короткие labels.
- Проверено, что логика выбора колоды и auto-safe-pool ветка остались без изменений.
- На мобильной ширине этот change не добавляет нового контента и не создаёт горизонтального скролла.

## Примечание

- `package.json` в репозитории отсутствует, поэтому `npm run check`, `npm test` и `npm run build` не запускались.
