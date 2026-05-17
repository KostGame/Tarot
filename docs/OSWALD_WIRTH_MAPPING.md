# Oswald Wirth Tarot Mapping

- Deck id: `oswald-wirth-tarot`
- Coverage: `22/22` major arcana only
- Source: `https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck`
- App model: the app keeps its canonical RWS-style card ids, while the French printed titles are shown as native titles.

## Mapping notes

- This deck is intentionally major-only.
- The connected pack uses the 22 numbered BnF scans from Commons.
- The pack filenames follow the app's canonical ids, so the UI can resolve the images locally without runtime hotlinks.
- `La Justice` is shown on app `major-11-justice`.
- `La Force` is shown on app `major-08-strength`.

## Major mapping

| Source title | App card id | Native title |
| --- | --- | --- |
| 00 Le Fou | `major-00-fool` | Le Fou |
| 01 Le Bateleur | `major-01-magician` | Le Bateleur |
| 02 La Papesse | `major-02-high-priestess` | La Papesse |
| 03 L'Imperatrice | `major-03-empress` | L'Impératrice |
| 04 L'Empereur | `major-04-emperor` | L'Empereur |
| 05 Le Pape | `major-05-hierophant` | Le Pape |
| 06 L'Amoureux | `major-06-lovers` | L'Amoureux |
| 07 Le Chariot | `major-07-chariot` | Le Chariot |
| 08 La Justice | `major-11-justice` | La Justice |
| 09 L'Ermite | `major-09-hermit` | L'Ermite |
| 10 La Roue de Fortune | `major-10-wheel-of-fortune` | La Roue de Fortune |
| 11 La Force | `major-08-strength` | La Force |
| 12 Le Pendu | `major-12-hanged-man` | Le Pendu |
| 13 La Mort | `major-13-death` | La Mort |
| 14 La Temperance | `major-14-temperance` | La Tempérance |
| 15 Le Diable | `major-15-devil` | Le Diable |
| 16 Le Feu du Ciel | `major-16-tower` | Le Feu du Ciel |
| 17 Les Etoiles | `major-17-star` | Les Étoiles |
| 18 La Lune | `major-18-moon` | La Lune |
| 19 Le Soleil | `major-19-sun` | Le Soleil |
| 20 Le Jugement | `major-20-judgement` | Le Jugement |
| 21 Le Monde | `major-21-world` | Le Monde |

## Validation checklist

- 22 source cards
- 22 target app cards
- no duplicates
- no missing cards
- no fallback to `rws-classic`
- native titles shown as a secondary line only
