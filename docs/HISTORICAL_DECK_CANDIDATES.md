# Historical Deck Candidates

Date: `2026-05-11`

This document is research-only. It does not connect new decks to the UI by itself.

## Native title policy

- Keep the translated app card name as the primary title.
- Show the native title as a secondary line in parentheses.
- Tie native titles to the selected visual deck.
- Hide the native title entirely if it is not curated and verified.

## 1) Tarot Nouveau / Grimaud 1898

- Candidate deck id: `tarot-nouveau-grimaud-1898`
- UI label: `Tarot Nouveau`
- Detailed label: `Tarot Nouveau В· Grimaud 1898`
- Source URL: `https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898`
- Expected coverage: `78/78`
- Assets found: `78` card files after excluding the back side
- License / reuse:
  - Commons file pages mark the scans as public domain / PD-old / PDM.
  - The set is sourced from Gallica/BnF.
  - Recheck the file pages if the assets are reused outside this project.
- Mapping strategy:
  - Full deck candidate.
  - Normalize the French suit structure to the app model: `wands`, `cups`, `swords`, `pentacles`.
  - Map trumps as `Excuse` plus `Atout 1..21`.
  - This is a French gaming tarot deck, not a native Rider-Waite reading.
- Native titles strategy:
  - Use French labels as secondary titles:
    - `Excuse`
    - `Atout 1..21`
    - suit cards in the form `As de ...`, `2 de ...`, `Valet de ...`, `Cavalier de ...`, `Dame de ...`, `Roi de ...`
- Can connect to UI now: `yes`
- Notes:
  - The pack is now connected as the first historical full-deck candidate.
  - The app meanings remain an educational layer on top of the deck imagery.

## 2) Jean Dodal Tarot

- Candidate deck id: `jean-dodal-marseille`
- UI label: `Jean Dodal Tarot`
- Detailed label: `Jean Dodal Tarot · Marseille 1701`
- Source URLs:
  - `http://www.tarot-history.com/Jean-Dodal/`
  - `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- Expected coverage: `22/22` major arcana only
- Assets found: `22` local card files in `assets/cards-experimental/jean-dodal-marseille/`
- License / reuse:
  - The Commons scans are public-domain reproductions.
  - The Commons file pages and tarot-history.com credit should still be checked if the set is reused elsewhere.
- Mapping strategy:
  - Use title-based matching for the majors.
  - Do not infer a full minor pack from this category.
  - The connected pack is majors only.
- Native titles strategy:
  - Show French trump titles for the majors as a secondary line in the UI.
  - Keep the translated app title as the primary one.
- Can connect to UI now: `yes`
- Risks:
  - Minors remain intentionally out of scope.
  - The pack is historical and educational, not a native RWS reading layer.
- Next action:
  - Keep the local 22-card pack as the safe historical major-only set.

## 3) Egyptian Tarot / Falconnier

- Candidate deck id: `egyptian-falconnier`
- UI label: `Egyptian Tarot / Falconnier В· historical В· major-only`
- Source URLs:
  - `https://ru.wikipedia.org/wiki/Р•РіРёРїРµС‚СЃРєРѕРµ_РўР°СЂРѕ`
  - `http://gallica.bnf.fr/ark:/12148/bpt6k5525090q`
- Commons category URL: `https://commons.wikimedia.org/wiki/Category:Egyptian_Tarot_(Falconnier)`
- Expected coverage: `major-only`
- Assets found: `23` files in the Commons category
- License / reuse:
  - The file page marks the scan as CC0 1.0 / public domain dedication.
  - The source is a Gallica/BnF scan of the 1896 publication.
  - The deck material is usable for research-oriented reuse, but the exact local pack still needs manual assembly.
- Mapping strategy:
  - Majors only.
  - Do not map minors automatically.
  - The source numbering is `01-22`, so the app mapping needs an explicit historical dictionary rather than a naive numeric offset.
- Native titles strategy:
  - Use historical French major names if a curated dictionary is prepared.
  - Hide native titles for cards that do not have a verified title.
- Can connect to UI now: `no`
- Risks:
  - Numbering does not match the app's `0-21` major ids directly.
  - No safe 78-card pack was found in this research pass.
- Next action:
  - Build a verified 22-card major pack before any UI connection.

## 4) Visconti-Sforza

- Candidate deck id: `visconti-sforza-pierpont-morgan-bergamo`
- UI label: `Visconti-Sforza В· historical В· partial / blocker`
- Source URLs:
  - `https://ru.wikipedia.org/wiki/РўР°СЂРѕ_Р’РёСЃРєРѕРЅС‚Рё_вЂ”_РЎС„РѕСЂС†С‹`
  - `https://commons.wikimedia.org/wiki/Category:Visconti-Sforza_tarot_deck`
  - `https://commons.wikimedia.org/wiki/Category:Pierpont_Morgan-Bergamo_Visconti-Sforza_Tarot`
  - `https://commons.wikimedia.org/wiki/Category:Cary-Yale_Visconti_Tarot`
  - `https://commons.wikimedia.org/wiki/Category:Visconti-Sforza_tarot_deck_cards_in_the_Pinacoteca_di_Brera`
- Expected coverage:
  - The family is historically incomplete and split across several collections.
  - The Pierpont Morgan-Bergamo subcollection says `74` cards remain from the original `78`.
- Assets found:
  - `124` files in Pierpont Morgan-Bergamo.
  - `73` files in Cary-Yale.
  - `6` files in the Brera subcategory.
- License / reuse:
  - This is a mixed family of subcollections with per-file licenses.
  - No single safe pack can be assumed.
  - Each file would need separate review before any pack assembly.
- Mapping strategy:
  - Not safe to infer automatically.
  - The family contains multiple naming conventions and multiple partially overlapping subcollections.
  - A future pack would need a manually selected subset and a deck-specific title table.
- Native titles strategy:
  - Only after a specific pack is fixed.
  - Do not guess native titles by the family name alone.
- Can connect to UI now: `no`
- Risks:
  - Incomplete and heterogeneous collections.
  - Ambiguous boundaries between the subcollections.
  - No clean 78/78 asset pack was confirmed.
- Next action:
  - Keep this family out of the UI until a manual asset pack and mapping table are prepared.
