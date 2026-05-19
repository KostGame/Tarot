# Thoth Tarot blocker report

Дата: `2026-05-19`

## Что проверил

- Источник запроса: [Thoth Tarot](https://en.wikipedia.org/wiki/Thoth_Tarot)
- Ручной research по Wikimedia Commons и связанным источникам.

## Итог

Безопасный `78/78` asset pack для подключения `Thoth Tarot` в текущий UI не найден.

На Wikimedia Commons категория [Crowley Thoth Tarot](https://commons.wikimedia.org/wiki/Category:Crowley_Thoth_Tarot) сейчас содержит только 3 файла, и это не полноценный, безопасно переиспользуемый pack карт Таро:

- `Crowley Unicursal Hexagram Tarot Card.svg`
- `Taro Rose Cross.svg`
- `Thoth Tarot Cards in the Museum of Witchcraft and Magic.jpg`

Этого недостаточно, чтобы корректно и без догадок собрать `78/78` карточек, не нарушая правило проекта проверять именно конкретные файлы и их reuse status.

## Что не делал

- не скачивал ассеты;
- не подключал колоду в UI;
- не менял `index.html`;
- не менял `share flow`;
- не менял Firebase;
- не менял `localStorage` keys;
- не трогал другие колоды.

## Обновлённая документация

- [docs/ASSET_CANDIDATES.md](../docs/ASSET_CANDIDATES.md)
- [docs/FREE_TAROT_DECK_CANDIDATES.md](../docs/FREE_TAROT_DECK_CANDIDATES.md)

## Проверки

- `git diff --check`
- `npm run check` не запускал: в репозитории по-прежнему нет `package.json`
- `npm test` не запускал: в репозитории по-прежнему нет `package.json`
- `npm run build` не запускал: в репозитории по-прежнему нет `package.json`

## Вывод

`Thoth Tarot` остаётся research / blocker candidate. Если позже появится безопасный `78/78` pack с ясными file-level reuse terms, можно вернуться к подключению.
