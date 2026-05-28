# Отчет: promo redesign with deck showcase

Дата: 2026-05-28

## Основное

- Issue: https://github.com/KostGame/Tarot/issues/117
- PR: pending
- Ветка: `feature/promo-redesign-deck-showcase`
- Commit hash: pending
- GitHub Pages, основная страница: https://kostgame.github.io/Tarot/
- GitHub Pages, promo-страница: https://kostgame.github.io/Tarot/promo/

## Измененные файлы

- `promo/index.html`
- `promo/styles.css`
- `promo/REELS_STORIES.md`
- `promo/SOCIAL_COPY.md`
- `reports/2026-05-28-promo-redesign-deck-showcase.md`

## Что сделано

- Promo-страница переработана из шаблонного лендинга в авторскую витрину продукта.
- Hero заменен на редакционный opening с layered app composition: карта, текст чтения, переключение колоды, share-preview.
- Добавлены реальные сценарии использования: утренная карта, совет по вопросу, изучение карты через справочник.
- Добавлен визуальный showcase колод с sample thumbnails и статусами из текущего `index.html`.
- Product modes переписаны как конкретные действия в приложении, а не абстрактная feature grid.
- Gallery расширена до 6 story-style frames с разными колодами и текстовыми overlays.
- `promo/REELS_STORIES.md` и `promo/SOCIAL_COPY.md` обновлены под новую концепцию.
- Основной `index.html` не менялся.
- Card data не менялись.

## Deck statuses

- `rws-classic`: `stable`, `full`, 78 карт
- `rws-dark-classic`: `stable`, `full`, 78 карт, CSS-версия классики
- `pixel-tarot`: `experimental`, `full`, 78 карт
- `veil-of-fate`: `experimental`, `major-court`
- `major-pixel-jcanabal`: `experimental`, `major-only`, 22 карты
- `major-pixel-zune`: `experimental`, `major-only`, 22 карты

## Проверки

- `promo/index.html` локально открывается: passed, проверено через headless Chrome
- Проверка мобильной ширины около `390px`: passed, `innerWidth=390`
- Горизонтальная прокрутка на мобильной ширине: passed, `scrollWidth=375`
- Пути к локальным изображениям и favicon из `promo/`: passed, 38 local refs, missing: 0
- CTA на основное приложение: passed, `https://kostgame.github.io/Tarot/`
- Deck labels/statuses соответствуют текущим данным приложения: passed, сверено с `index.html`
- Основной `index.html` не изменен: passed
- Поиск запрещенного слова `шпаргалка` в `promo/` и отчете: passed, совпадений нет
- `git diff --check`: passed
- `npm run check`: unavailable, `package.json` отсутствует
- `npm test`: unavailable, `package.json` отсутствует
- `npm run build`: unavailable, `package.json` отсутствует

## Риск для основного приложения

Низкий. Изменения ограничены `promo/` и новым отчетом. Основной `index.html`, механика приложения и card data не изменяются.

## Ready for review

Доступные локальные проверки проходят. Можно создавать обычный PR и мержить его при отсутствии неожиданных изменений в основном приложении.
