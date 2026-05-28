# Visconti-Sforza Composite mapping

Date: 2026-05-28

## Deck summary

- Deck id: `visconti-sforza-composite`
- UI label: Visconti-Sforza
- Coverage: partial-composite
- Local historical assets: `assets/cards/visconti-sforza-composite/`
- Historical asset count: 74
- Classic fallback count: 4

This is a composite historical deck, not a single complete original 78-card Visconti-Sforza deck. The checked FromOldBooks source has 74 cards. Missing cards are resolved with the app's existing `rws-classic` fallback so every one of the app's 78 target cards has an image.

## Primary source verification

Primary source checked: https://www.fromoldbooks.org/ViscontiSforza-TarotCards/

Facts verified from the source:

- FromOldBooks lists 74 Visconti-Sforza Tarot Cards.
- Missing from the checked FromOldBooks set: 3 of Swords, Knight of Coins, Devil, Tower.
- The source includes the replacement / related set cards expected in the task: Fortitude, Temperance, Moon, Star, Sun, World.

## Additional source verification

Wikimedia Commons was checked for supplemental file-level licensing.

- File:Tre di spade.jpg exists and is marked Public domain in Commons metadata.
- It was not included in this asset pack because Wikimedia returned 429 / robot-policy errors during the build.
- Cary-Yale Tarot deck - Knight of Coins.jpg was rejected because Cary-Yale additional cards are outside this app's 78-card Visconti-Sforza composite model.

## Suit mapping

- Bastoni / Staves / Batons -> wands / Жезлы
- Coppe / Cups -> cups / Кубки
- Spade / Swords -> swords / Мечи
- Denari / Coins -> pentacles / Пентакли

## Court mapping

- Re / King -> King
- Regina / Queen -> Queen
- Cavaliere / Knight -> Knight
- Fante / Knave / Page / Jack -> Page

## Historical cards from FromOldBooks

- `cups-01-ace`
- `cups-02-two`
- `cups-03-three`
- `cups-04-four`
- `cups-05-five`
- `cups-06-six`
- `cups-07-seven`
- `cups-08-eight`
- `cups-09-nine`
- `cups-10-ten`
- `cups-11-page`
- `cups-12-knight`
- `cups-13-queen`
- `cups-14-king`
- `major-00-fool`
- `major-01-magician`
- `major-02-high-priestess`
- `major-03-empress`
- `major-04-emperor`
- `major-05-hierophant`
- `major-06-lovers`
- `major-07-chariot`
- `major-08-strength`
- `major-09-hermit`
- `major-10-wheel-of-fortune`
- `major-11-justice`
- `major-12-hanged-man`
- `major-13-death`
- `major-14-temperance`
- `major-17-star`
- `major-18-moon`
- `major-19-sun`
- `major-20-judgement`
- `major-21-world`
- `pentacles-01-ace`
- `pentacles-02-two`
- `pentacles-03-three`
- `pentacles-04-four`
- `pentacles-05-five`
- `pentacles-06-six`
- `pentacles-07-seven`
- `pentacles-08-eight`
- `pentacles-09-nine`
- `pentacles-10-ten`
- `pentacles-11-page`
- `pentacles-13-queen`
- `pentacles-14-king`
- `swords-01-ace`
- `swords-02-two`
- `swords-04-four`
- `swords-05-five`
- `swords-06-six`
- `swords-07-seven`
- `swords-08-eight`
- `swords-09-nine`
- `swords-10-ten`
- `swords-11-page`
- `swords-12-knight`
- `swords-13-queen`
- `swords-14-king`
- `wands-01-ace`
- `wands-02-two`
- `wands-03-three`
- `wands-04-four`
- `wands-05-five`
- `wands-06-six`
- `wands-07-seven`
- `wands-08-eight`
- `wands-09-nine`
- `wands-10-ten`
- `wands-11-page`
- `wands-12-knight`
- `wands-13-queen`
- `wands-14-king`

## Wikimedia Commons cards used

None in the committed asset pack.

Commons was used for research only in this build. The 3 of Swords candidate was verified as public domain but not downloaded because Wikimedia returned 429 / robot-policy errors.

## Fallback cards

- `major-15-devil` — Дьявол: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set
- `major-16-tower` — Башня: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set
- `pentacles-12-knight` — Рыцарь Пентаклей: not present in the checked FromOldBooks / Madore Visconti-Sforza 74-card set; Cary-Yale Knight of Coins was rejected as outside the app 78-card Visconti-Sforza composite model
- `swords-03-three` — Тройка Мечей: not present in the FromOldBooks 74-card set; a Commons PD candidate exists but was not downloaded because Wikimedia returned 429 / robot-policy errors during this build

## Fallback behavior

The deck object contains historical image paths only for the available historical assets. For missing cards, the app resolves images through `fallbackDeckId: "rws-classic"`.

On the normal result card only, fallback cards show the note:

Отсутствует в оригинальной колоде

The note is intentionally not rendered in:

- fullscreen;
- image-only preview;
- share canvas;
- share text;
- clipboard fallback;
- Open Graph / social preview;
- card title;
- card interpretation text.

## Rejected sources

- Modern reconstructions and commercial repacks: rejected.
- Pinterest / Etsy / random blogs / app dumps / torrents / watermarked files: rejected.
- Cary-Yale extra cards: rejected for this app mapping because the task explicitly excludes nonstandard additional Cary-Yale cards from the 78-card model.

