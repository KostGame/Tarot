# Отчет: Generate tarot card share image

Дата: 2026-05-10

## Основное

- Ветка: `feature/share-tarot-card-image`
- Issue: https://github.com/KostGame/Tarot/issues/23
- PR: https://github.com/KostGame/Tarot/pull/25
- PR смержен: да.
- Commit hash: `d3fb573af02673f4d8ebaae04a5ec1a494e8b3b3`
- Merge commit hash: `93980e9839b0eb6d1cc96e13ec6919965b073796`
- GitHub Pages: https://kostgame.github.io/Tarot/

## Измененные файлы

- `index.html`
- `reports/2026-05-10-share-tarot-card-image.md`

## Как генерируется share-картинка

- При нажатии `Поделиться` приложение сначала пытается создать PNG через `canvas`.
- Canvas имеет размер `1080x1920`, вертикальный формат для истории/мобильного шаринга.
- На изображении рисуются:
  - темный фон в стиле приложения;
  - мягкие свечения и звездный фон;
  - позиция карты;
  - изображение текущей карты;
  - название карты;
  - короткая трактовка;
  - подпись `Карта дня · kostgame.github.io/Tarot`.
- Длинный текст переносится по строкам и ограничивается по количеству строк с многоточием.

## Изображение карты

- Используется текущая карта, открытая во fullscreen.
- Источник изображения берется из текущего видимого изображения fullscreen (`currentSrc` / `src`), поэтому после свайпа используется уже новая карта.
- Если изображение выбранной колоды не загрузилось, используется `baseImage`.
- Для перевернутой карты изображение на canvas поворачивается на 180 градусов.
- Для `rws-dark-classic` применяется canvas-фильтр, соответствующий темной CSS-обработке.
- Для pixel-колод отключается сглаживание canvas, чтобы сохранить более четкий pixel look.

## Web Share и fallback

- Если браузер поддерживает `navigator.share`, `navigator.canShare` и `navigator.canShare({ files })`, отправляется файл `tarot-card.png`.
- Если отправка файла недоступна, используется fallback `navigator.share({ title, text, url })`.
- Если Web Share API недоступен, приложение пытается скопировать текст и ссылку через Clipboard API.
- Если clipboard недоступен, показывается мягкое уведомление с просьбой скопировать ссылку вручную.
- На время генерации кнопка меняет текст на `Готовим...` и блокируется от повторного нажатия.

## Проверки

- `git diff --check` — пройдено.
- JS-синтаксис inline-скрипта проверен через Node.js `new Function(...)` — пройдено.
- Статически проверено наличие:
  - canvas `1080x1920`;
  - PNG export через `canvas.toBlob`;
  - `File` для `tarot-card.png`;
  - проверки `navigator.canShare({ files })`;
  - fallback на text+url share;
  - clipboard fallback;
  - поворота перевернутой карты;
  - использования текущего fullscreen-изображения;
  - отключения сглаживания для pixel-колод;
  - состояния `Готовим...`.
- `package.json` отсутствует, поэтому `npm run check`, `npm test`, `npm run build` не запускались.
- Полноценная браузерная проверка системного share-dialog из текущего окружения недоступна.

## Ручные шаги

После merge нужно дождаться обновления GitHub Pages.

Рекомендуется вручную проверить на телефоне:

- share файлом в браузере с поддержкой Web Share API;
- fallback text+url;
- clipboard fallback;
- режим `Карта дня`;
- режим `Совет по вопросу` после свайпа между картами;
- прямую и перевернутую карту;
- rws-classic, rws-dark-classic, pixel-tarot, major-only deck, veil-of-fate.
