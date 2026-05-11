# Historical Deck Candidates

Date: `2026-05-11`

This document is research-only. It does not connect any new deck to the UI and it does not download assets.

## Native title policy

- Keep the translated app card name unchanged.
- Show the native title as a secondary line below the main card name.
- Native title follows the selected visual deck.
- If the native title is unknown or not curated, hide it.

## 1) Tarot Nouveau / Grimaud 1898

- Candidate deck id: `tarot-nouveau-grimaud-1898`
- Recommended UI label: `Tarot Nouveau · historical · full`
- Source URLs:
  - Wikipedia: `https://ru.wikipedia.org/wiki/Таро_Нуво`
  - Gallica source: `http://gallica.bnf.fr/ark:/12148/btv1b10510159t`
- Commons category URL: `https://commons.wikimedia.org/wiki/Category:Tarot_nouveau_-_Grimaud_-_1898`
- Expected coverage: `78/78` cards plus one back side file
- Assets found: `79` files in the Commons category
- License / reuse:
  - Commons file pages mark the 1898 scans as public domain / PD-old / PDM.
  - The category is sourced from Gallica/BnF.
  - A file-by-file description-page check is still required before any future pack assembly.
- Mapping strategy:
  - Full deck candidate.
  - Map the French suits directly to the app suits.
  - Map the trumps from `1-21` plus `Excuse/Fool` into the app major model.
  - This is a French playing-card style deck, not a native Rider-Waite reading.
- Native titles strategy:
  - Use native labels only if we prepare a manual French title dictionary.
  - If there is no curated native title, hide it.
- Can connect to UI now: `no`
- Recommended coverage: `full`
- Risks:
  - The pack still needs a clean local asset download and a final per-card verification.
  - The back side file should not be mistaken for a card.
- Next action:
  - Prepare a reviewed local pack and then connect it as the first historical full-deck candidate.

## 2) Jean Dodal Tarot

- Candidate deck id: `jean-dodal-historical`
- Recommended UI label: `Jean Dodal · historical · major-only`
- Source URLs:
  - Wikipedia: `https://ru.wikipedia.org/wiki/Таро_Жана_Додаля`
  - Tarot-history source page: `http://www.tarot-history.com/Jean-Dodal/`
- Commons category URL: `https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal`
- Expected coverage: `major-only`
- Assets found: `29` files in the Commons category
- License / reuse:
  - The Commons file page describes the scans as faithful photographic reproductions of public-domain art.
  - The file page also points to the source page on tarot-history.com.
  - Reuse should still be checked file by file before a pack is assembled.
- Mapping strategy:
  - Use title-based matching for the 22 majors.
  - Do not infer a full minor pack from this category.
  - The category contains a few minor samples, a reverse image, and other extra scans, but not a full 78-card set.
- Native titles strategy:
  - Show the French trump titles for majors if a manual dictionary is curated.
  - Hide native titles for minors because the pack is incomplete.
- Can connect to UI now: `no`
- Recommended coverage: `major-only`
- Risks:
  - Incomplete minors.
  - Mixed extra scans in the Commons category.
  - Still needs a reviewed local major pack.
- Next action:
  - If this deck is used later, build a clean 22-card major pack first.

## 3) Egyptian Tarot / Falconnier

- Candidate deck id: `egyptian-falconnier`
- Recommended UI label: `Egyptian Tarot / Falconnier · historical · major-only`
- Source URLs:
  - Wikipedia: `https://ru.wikipedia.org/wiki/Египетское_Таро`
  - Gallica source: `http://gallica.bnf.fr/ark:/12148/bpt6k5525090q`
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
- Recommended coverage: `major-only`
- Risks:
  - Numbering does not match the app's `0-21` major ids directly.
  - No safe 78-card pack was found in this research pass.
- Next action:
  - Build a verified 22-card major pack before any UI connection.

## 4) Visconti-Sforza

- Candidate deck id: `visconti-sforza-pierpont-morgan-bergamo`
- Recommended UI label: `Visconti-Sforza · historical · partial / blocker`
- Source URLs:
  - Wikipedia: `https://ru.wikipedia.org/wiki/Таро_Висконти_—_Сфорцы`
  - Commons umbrella category: `https://commons.wikimedia.org/wiki/Category:Visconti-Sforza_tarot_deck`
  - Pierpont Morgan-Bergamo subcategory: `https://commons.wikimedia.org/wiki/Category:Pierpont_Morgan-Bergamo_Visconti-Sforza_Tarot`
  - Cary-Yale subcategory: `https://commons.wikimedia.org/wiki/Category:Cary-Yale_Visconti_Tarot`
  - Brera subcategory: `https://commons.wikimedia.org/wiki/Category:Visconti-Sforza_tarot_deck_cards_in_the_Pinacoteca_di_Brera`
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
- Recommended coverage: `blocker / partial`
- Risks:
  - Incomplete and heterogeneous collections.
  - Ambiguous boundaries between the subcollections.
  - No clean 78/78 asset pack was confirmed.
- Next action:
  - Keep this family out of the UI until a manual asset pack and mapping table are prepared.

