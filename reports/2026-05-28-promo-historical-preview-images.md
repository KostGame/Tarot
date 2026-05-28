# Отчет по обновлению промо-архива исторических колод

- Ветка: `feature/promo-historical-preview-images`
- PR: открыт на GitHub
- Коммит: актуальный commit этой ветки
- Область правки: `promo/index.html`, `promo/styles.css`

## Что изменилось

В промо-секции архивных колод убран тизер Etteilla Type I и заменен на реальные исторические линии, которые уже есть в приложении:

- Tarot de Marseille
- Jean Dodal
- Oswald Wirth
- Egyptian Tarot (Falconnier)
- Sola Busca
- Visconti-Sforza
- Tarocco Piemontese

Теперь секция показывает только подключенные исторические колоды без обещаний того, чего еще нет в UI.

## Добавленные превью-изображения

| Локальный путь | Original source URL | License / public-domain status | Deck name | Card name |
| --- | --- | --- | --- | --- |
| `assets/cards-experimental/marseille-historical/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages are marked `CC BY-SA 4.0` | Tarot de Marseille | Le Mat |
| `assets/cards-experimental/marseille-historical/major-08-strength.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages are marked `CC BY-SA 4.0` | Tarot de Marseille | La Force |
| `assets/cards-experimental/marseille-historical/major-17-star.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760` | Commons file pages are marked `CC BY-SA 4.0` | Tarot de Marseille | L'Étoile |
| `assets/cards-experimental/jean-dodal-marseille/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal` | Commons scans are public domain; see repo docs for reuse note | Jean Dodal | Le Mat |
| `assets/cards-experimental/jean-dodal-marseille/major-11-strength.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal` | Commons scans are public domain; see repo docs for reuse note | Jean Dodal | La Force |
| `assets/cards-experimental/jean-dodal-marseille/major-17-star.jpg` | `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal` | Commons scans are public domain; see repo docs for reuse note | Jean Dodal | L'Étoile |
| `assets/cards-experimental/oswald-wirth-tarot/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck` | Commons file pages for the 22 scans describe the images as public domain | Oswald Wirth | Le Fou |
| `assets/cards-experimental/oswald-wirth-tarot/major-08-strength.jpg` | `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck` | Commons file pages for the 22 scans describe the images as public domain | Oswald Wirth | La Force |
| `assets/cards-experimental/oswald-wirth-tarot/major-17-star.jpg` | `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck` | Commons file pages for the 22 scans describe the images as public domain | Oswald Wirth | Les Étoiles |
| `assets/cards-experimental/egyptian-falconnier/major-00-fool.png` | `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)` | Commons file pages for the 22 PNG cards are marked CC0 / public domain dedication | Egyptian Tarot | Le Crocodile |
| `assets/cards-experimental/egyptian-falconnier/major-08-strength.png` | `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)` | Commons file pages for the 22 PNG cards are marked CC0 / public domain dedication | Egyptian Tarot | La Force |
| `assets/cards-experimental/egyptian-falconnier/major-17-star.png` | `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)` | Commons file pages for the 22 PNG cards are marked CC0 / public domain dedication | Egyptian Tarot | L'Etoile |
| `assets/cards-experimental/sola-busca/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons scans for the numbered cards are public domain | Sola Busca | Fool / app `major-00-fool` |
| `assets/cards-experimental/sola-busca/swords-03-three.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons scans for the numbered cards are public domain | Sola Busca | Three of Swords / app `swords-03-three` |
| `assets/cards-experimental/sola-busca/wands-01-ace.jpg` | `https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck` | Commons scans for the numbered cards are public domain | Sola Busca | Ace of Wands / app `wands-01-ace` |
| `assets/cards/visconti-sforza-composite/major-00-fool.jpg` | `https://www.fromoldbooks.org/ViscontiSforza-TarotCards/pages/arcanum-fool/` | Out of copyright / public domain in the USA; credit requested | Visconti-Sforza | Fool |
| `assets/cards/visconti-sforza-composite/major-11-justice.jpg` | `https://www.fromoldbooks.org/ViscontiSforza-TarotCards/pages/arcanum-08-justice/` | Out of copyright / public domain in the USA; credit requested | Visconti-Sforza | Justice |
| `assets/cards/visconti-sforza-composite/swords-03-three.jpg` | `https://commons.wikimedia.org/wiki/File:Tre_di_spade.jpg` | Commons file page metadata marks the image public domain | Visconti-Sforza | Three of Swords / Tre di spade |
| `assets/cards-experimental/tarocco-piemontese-solesio-1865/major-00-fool.jpg` | `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865` | Commons file pages mark the cards as public domain | Tarocco Piemontese | Il Matto |
| `assets/cards-experimental/tarocco-piemontese-solesio-1865/major-08-strength.jpg` | `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865` | Commons file pages mark the cards as public domain | Tarocco Piemontese | La Forza |
| `assets/cards-experimental/tarocco-piemontese-solesio-1865/major-21-world.jpg` | `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865` | Commons file pages mark the cards as public domain | Tarocco Piemontese | Il Mondo |

## Источники и лицензии

- Tarot de Marseille: локальный исторический pack без runtime hotlinking.
- Jean Dodal: `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- Oswald Wirth: `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck`
- Egyptian Tarot (Falconnier): `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)`
- Sola Busca: локальный исторический pack, подключенный в UI
- Visconti-Sforza: локальный composite pack, подключенный в UI
- Tarocco Piemontese: `https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865`

## Проверки

- `rg -n "http(s)?://" promo/index.html promo/styles.css` — внешних runtime hotlink’ов для карточек не найдено
- `git status` — изменения ограничены промо-страницей, стилями и отчетом
- Ручная проверка логики секции — тексты и карточки теперь описывают только реальные исторические колоды

## Итог

Промо-архив теперь выглядит как витрина уже подключенных исторических колод, а не как смесь доступных и еще не готовых тизеров.
