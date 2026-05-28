# Отчет: promo landing page for public launch

Дата: 2026-05-28

## Основное

- Issue: https://github.com/KostGame/Tarot/issues/114
- PR: https://github.com/KostGame/Tarot/pull/116
- Ветка: `feature/promo-launch-landing`
- Commit hash: `565b47b934d5aca11b7d26ab58214d6720ea6d8f`
- GitHub Pages, основная страница: https://kostgame.github.io/Tarot/
- GitHub Pages, promo-страница: https://kostgame.github.io/Tarot/promo/

## Добавленные файлы

- `promo/index.html`
- `promo/styles.css`
- `promo/REELS_STORIES.md`
- `promo/SOCIAL_COPY.md`
- `reports/2026-05-28-promo-launch-landing.md`

## Что сделано

- Добавлен отдельный статический promo-раздел для публичного запуска приложения «Карта дня».
- Promo-страница сделана mobile-first, в темном спокойном стиле без внешних API, backend и новых зависимостей.
- Добавлены блоки Hero, сценарий использования, фичи, галерея вертикальных promo-карточек, аудитории, privacy/no friction и нижний CTA.
- CTA ведет на основное приложение: https://kostgame.github.io/Tarot/
- Используются только локальные ассеты из репозитория: favicon/app icons, `assets/social/og-image.png`, изображения карт из `assets/cards/`.
- Для promo-страницы добавлены `title`, `description`, canonical, Open Graph и Twitter Card meta tags.
- Подготовлены сценарии для Stories/Reels и тексты для соцсетей.
- Основной `index.html` не менялся.
- Card data не менялись.

## Проверки

- `promo/index.html` локально открывается: passed, проверено через headless Chrome
- Проверка мобильной ширины около `390px`: passed, `innerWidth=390`
- Горизонтальная прокрутка на мобильной ширине: passed, `scrollWidth=375`
- Пути к favicon и изображениям из `promo/`: passed, локальные refs существуют
- CTA на основное приложение: passed, `https://kostgame.github.io/Tarot/`
- Основной `index.html` не изменен: passed
- Поиск запрещенного слова `шпаргалка` в новых promo/report файлах: passed, совпадений нет
- `git diff --check`: passed
- `npm run check`: unavailable, `package.json` отсутствует
- `npm test`: unavailable, `package.json` отсутствует
- `npm run build`: unavailable, `package.json` отсутствует

## Риск для основного приложения

Низкий. Изменения изолированы в новом каталоге `promo/` и отчете. Основной `index.html`, механика «Карта дня», card data и существующий social preview не изменяются.

## Ready for review

Доступные локальные проверки проходят. PR создан обычным PR, не Draft. Неожиданных изменений в основном приложении не обнаружено.
