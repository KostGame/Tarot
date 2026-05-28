# Отчет: promo historical deck teaser

Дата: `2026-05-28`

## Основное

- Issue: https://github.com/KostGame/Tarot/issues/119
- PR: https://github.com/KostGame/Tarot/pull/120
- Ветка: `feature/promo-historical-deck-teaser`
- Commit hash: `a882cd8ed7348ed5b602d0b7e7240be7249d2f5f`
- GitHub Pages, основная страница: https://kostgame.github.io/Tarot/
- GitHub Pages, promo-страница: https://kostgame.github.io/Tarot/promo/

## Что изменено

- Перестроена секция колод на promo-странице так, чтобы она явно разделяла `доступно сейчас` и исторический архив.
- В блоке `доступно сейчас` показаны только реально доступные режимы приложения.
- В историческом архиве показаны `Tarot de Marseille`, `Sola Busca`, `Visconti-Sforza` как уже доступные исторические линии и `Etteilla Type I` как teaser-кандидат в работе.
- Для архивных карточек использованы CSS-заглушки, без новых внешних изображений и без hotlink.
- Обновлены `promo/REELS_STORIES.md` и `promo/SOCIAL_COPY.md` под исторический угол подачи.

## Историческое позиционирование

- `Etteilla Type I` остается исторической колодой в работе, без ложных обещаний готовности.
- `Tarot de Marseille`, `Sola Busca` и `Visconti-Sforza` показаны как уже доступные исторические линии, а не как будущие обещания.
- Новые app decks не добавлялись.
- Основной `index.html` не менялся.

## Проверки

- `promo/index.html` открылся локально через headless Chrome: passed.
- Mobile viewport около `390px`: passed, `innerWidth=390`.
- Горизонтальная прокрутка: passed, `scrollWidth=375`.
- CTA ведет на `https://kostgame.github.io/Tarot/`: passed.
- Локальные image refs в `promo/index.html`: passed, `local=32`, `missing=0`, `external=0`.
- Исторические статусы в promo: passed, `available now` и `work in progress` разделены честно.
- `git diff --check`: passed.
- Основной `index.html` не изменен: passed.
- `npm run check`: unavailable, `package.json` отсутствует.
- `npm test`: unavailable, `package.json` отсутствует.
- `npm run build`: unavailable, `package.json` отсутствует.

## Итог

Promo-страница теперь показывает не только текущие визуальные режимы, но и направление проекта в сторону архивных и редких исторических колод без нарушения ограничений по доступности, ассетам и внешним источникам.
