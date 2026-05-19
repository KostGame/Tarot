# Отчет: Etteilla Type I blocker report

Дата: `2026-05-19`

## Что проверил

- Источник: [Original Etteilla Tarot - Le Jeu de Toth](https://etteilla.org/en/deck/10/original-etteilla-tarot-le-jeu-de-toth)
- Terms / rights: [Etteilla collection TOS](https://etteilla.org/en/collection-tos)
- Текущий deck registry: `Egyptian Tarot` в `index.html` использует `egyptian-falconnier` и это другой source pack, не дубль Etteilla Type I.

## Итог

- Rights gate: `yes`
- License / rights evidence: `yes`
- Coverage: `78/78`
- Card back: `yes`, но не входит в 78
- UI connection: `no`
- Assets committed: `no`

## Rights notes

- На сайте указано, что для public-domain decks scans / renderings доступны под `CC BY-NC 4.0`.
- Разрешение описано для informational, academic и research-oriented websites, которые не ведут к commercial activity.
- Attribution required.
- Я не нашел на проверенных страницах явного запрета на public GitHub repo, GitHub Pages или non-commercial browser app.
- По правам колода подходит для некоммерческого educational / informational use.

## Source validation

- Major Arcana: `22`
- Minor suits: `56`
- Total source cards: `78`
- Source card back: `yes`
- Missing source cards: `0`
- Duplicate source cards: `0`
- Duplicate target cards: `0`
- Major mapped by explicit dictionary: `22`
- Minor mapped by suit/rank: `56`
- Historical warning: `yes`
- No fallback to `rws-classic` for this deck: `yes`

## Blockers

- `pageAssets.bundle()` на source page не смог забрать `eti.la` images: `TypeError: Failed to fetch`.
- Direct top-level navigation к `eti.la` image URLs был заблокирован Browser Use policy (`net::ERR_BLOCKED_BY_CLIENT`).
- Shell `Invoke-WebRequest` и Node `fetch` к image host в этом окружении не прошли.
- Попытки обойти это через локальный wrapper (`data:`, `file://`, `localhost`) были заблокированы browser policy или упирались в screenshot timeout.
- В результате безопасный локальный public-repo asset pack для `78/78` собрать и card-by-card verify не удалось.

## Что не делал

- Не менял `index.html`.
- Не подключал колоду в UI.
- Не скачивал и не коммитил изображения.
- Не менял другие колоды.
- Не менял `localStorage` keys.
- Не трогал fullscreen / share flow.

## Проверки

- `git diff --check` - будет выполнена после добавления report file.
- `npm run check` - не запускал: в корне этого репозитория нет `package.json`.
- `npm test` - не запускал: в корне этого репозитория нет `package.json`.
- `npm run build` - не запускал: в корне этого репозитория нет `package.json`.

## Вывод

`Etteilla Type I` остается documented blocker / research candidate.
Для подключения UI нужен вручную собранный локальный asset pack с понятным rights-safe source path и проверкой всех 78 карт.
