# Отчет: Add social preview meta tags

Дата: 2026-05-10

## Основное

- Ветка: `feature/social-preview-meta`
- Issue: https://github.com/KostGame/Tarot/issues/22
- PR: https://github.com/KostGame/Tarot/pull/24
- PR смержен: нет.
- Commit hash: `3b4f63da33c72f2c8c4f81ba9bb144c6644af293`
- Merge commit hash: нет.
- GitHub Pages: https://kostgame.github.io/Tarot/

## Измененные файлы

- `index.html`
- `assets/social/og-image.png`
- `reports/2026-05-10-social-preview-meta.md`

## Meta-теги

В `<head>` добавлены:

- `description`
- `og:type`
- `og:site_name`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `og:image:width`
- `og:image:height`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

`og:image` и `twitter:image` указывают на абсолютный GitHub Pages URL:

`https://kostgame.github.io/Tarot/assets/social/og-image.png`

## Preview-картинка

Файл: `assets/social/og-image.png`

Размер: `1200x630`.

Картинка сделана локально без внешних runtime-зависимостей: темный фон в стиле приложения, название `Карта дня`, подпись про мягкий расклад Таро и визуальный намек на карту.

## Проверки

- `git diff --check` — пройдено.
- JS-синтаксис inline-скрипта проверен через Node.js `new Function(...)` — пройдено.
- Проверено, что meta-теги находятся в `<head>`.
- Проверено, что `og:image` использует абсолютный URL GitHub Pages.
- Проверено, что `assets/social/og-image.png` существует.
- Проверен размер preview-картинки: `1200x630`.
- `package.json` отсутствует, поэтому `npm run check`, `npm test`, `npm run build` не запускались.

## Важно

После merge нужно дождаться обновления GitHub Pages. Фактический preview в Telegram, соцсетях и мессенджерах может обновиться не сразу из-за кеша платформ.

Ручные шаги: после деплоя проверить ссылку `https://kostgame.github.io/Tarot/` в нужных мессенджерах или через preview-debugger конкретной платформы.
