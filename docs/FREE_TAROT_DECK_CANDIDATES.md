# Free Tarot Deck Candidates

Date: `2026-05-18`

This document is research-only. It does not download assets and it does not connect new decks to the UI.

## Reading rules

- Check the license on the individual Commons file pages, not only the age of the original deck.
- Treat unclear licensing as unsafe.
- Do not assume that a historical deck is safe just because the original art is old.
- Do not use modern commercial repacks or restored packs with unclear reuse terms.

## Short answer

- Best safe full-deck candidate found in this pass: `Tarocco Piemontese / Solesio 1865` (now connected in the UI).
- Highest-value historical research target: `Sola Busca` (now connected in the UI as a full deck).
- Connected historical major-only deck from this pass: `Oswald Wirth Tarot` (22/22).
- Best major-only research candidate with a clean Commons category: `Viéville tarot`.
- Reject for the current app model: `Industrie und Glück` / historical tarock packs, because they are 54-card tarock variants rather than standard 78-card tarot packs.

## Candidate survey

### 1) Sola Busca Tarot

- Deck id candidate: `sola-busca`
- Expected coverage: `full 78`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Sola-Busca_tarot_deck)
  - [Representative file page: Sola Busca tarot card 00.jpg](https://commons.wikimedia.org/wiki/File:Sola_Busca_tarot_card_00.jpg)
  - [Representative file page: Sola Busca tarot card 20.jpg](https://commons.wikimedia.org/wiki/File:Sola_Busca_tarot_card_20.jpg)
  - [Deck reference at WaiteSmith](https://waitesmith.org/index.php/decks/the-sola-busca-deck/)
- Asset source candidate: Wikimedia Commons category with `83` files; the core cards are present and were curated into a safe local `78/78` pack.
- License / reuse: Commons file pages identify the scan as a faithful photographic reproduction of a public-domain work of art; file pages also carry PD / PDM style status.
- Mapping strategy:
  - Suits should map cleanly to the app's suit model.
  - Trumps need a deck-specific historical dictionary, not a blind numeric offset.
  - The file set is now curated into a clean 78-card pack for UI use.
- Native titles strategy:
  - Use historical Sola Busca titles as a secondary line, if a reliable title table is assembled.
  - Do not guess titles from the card number alone.
- Risks:
  - The Commons category still includes extra images and historical variants.
  - Native title mapping is more bespoke than Marseille-style decks.
  - Extra category files still need to be excluded from any future repackaging.
- Recommendation: `connected`
- Current status: connected in UI as a full deck

### 2) Tarocco Piemontese / Solesio 1865

- Deck id candidate: `tarocco-piemontese-solesio-1865`
- Expected coverage: `full 78`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Piedmontese_tarot_deck_-_Solesio_-_1865)
  - [Representative file page: Ace of Swords](https://commons.wikimedia.org/wiki/File:Piedmontese_tarot_deck_-_Solesio_-_1865_-_Ace_of_Swords.jpg)
  - [Representative file page: Back side](https://commons.wikimedia.org/wiki/File:Piedmontese_tarot_deck_-_Solesio_-_1865_-_Back_side.jpg)
- Asset source candidate: Commons category with `79` files for a `78-card tarot deck`, plus one back-side file.
- License / reuse: Commons file pages identify the cards as public domain; the deck page is sourced from Gallica/BnF.
- Mapping strategy:
  - This is the safest structurally clear full-deck candidate in this pass.
  - Minor suits map directly to the app's four suits.
  - Rank mapping is straightforward.
  - Trumps can be curated by printed title.
- Native titles strategy:
  - Use Italian native names for suits/ranks as a secondary line, if desired.
  - Keep app meanings as the primary educational layer.
- Risks:
  - The back side must be excluded from the connected pack.
  - Title normalization still needs a small deck-specific table.
- Recommendation: `connected`
- Current status: already connected in the UI as a full deck

### 3) Jacques Viéville Tarot

- Deck id candidate: `vieville-tarot`
- Expected coverage: `full 78`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Vi%C3%A9ville_tarot)
  - [Representative file page](https://commons.wikimedia.org/wiki/File:Jeu_de_tarot_%C3%A0_enseignes_italiennes_dit_%22tarot_Vi%C3%A9ville%22_-_jeu_de_cartes%2C_estampe_-_btv1b10510963k_(022_of_156).jpg)
- Asset source candidate: Commons category with `79` files for a deck described as a `78-card deck for French tarot`; the scan set is a Gallica/BnF upload with 156 pages in the source numbering.
- License / reuse: Commons file pages identify the images as public domain.
- Mapping strategy:
  - Use historical title-based mapping for the trumps.
  - Use the app's standard four-suit model for the minors.
  - Curate a clean pack from the Commons set before connection.
- Native titles strategy:
  - Show French native titles as the secondary line.
  - Keep the translated app title as the primary one.
- Risks:
  - One extra file / duplicate-style image appears in the Commons set.
  - The 156-page source set is noisy and needs pack curation.
- Recommendation: `research more`

### 4) Jean Noblet Tarot

- Deck id candidate: `jean-noblet-tarot`
- Expected coverage: `full 78`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Jeu_de_tarot_%C3%A0_enseignes_italiennes_dit_%22tarot_Noblet%22_-_jeu_de_cartes%2C_estampe_-_btv1b105109641)
  - [Representative file page](https://commons.wikimedia.org/wiki/File:Jeu_de_tarot_%C3%A0_enseignes_italiennes_dit_%22tarot_Noblet%22_-_jeu_de_cartes%2C_estampe_-_btv1b105109641_(042_of_154).jpg)
- Asset source candidate: Commons category with `154` files from a Gallica/BnF scan set.
- License / reuse: Commons file pages identify the images as public domain / PD-1923 style files, but the set is a large scan collection rather than a curated pack.
- Mapping strategy:
  - Use title-based mapping for majors and standard suit mapping for minors if a clean pack is assembled.
  - Do not infer card identities from page numbers alone.
- Native titles strategy:
  - Use French native titles as the secondary line.
  - Preserve the app's translated titles as primary.
- Risks:
  - The set is a scan collection, so a pack still needs manual extraction.
  - The current candidate pass does not prove a ready-to-connect 78-card pack.
- Recommendation: `research more`

### 5) Tarot de Paris

- Deck id candidate: `tarot-de-paris`
- Expected coverage: `full 78`
- Source URLs:
  - [Representative Commons file page](https://commons.wikimedia.org/wiki/File:Jeu_de_tarot_parisien_anonyme_%C3%A0_enseignes_italiennes_-_%28jeu_de_cartes%2C_estampe%29_%28Original%29_-_btv1b105109624_(098_of_156).jpg)
  - [Representative Commons file page](https://commons.wikimedia.org/wiki/File:Jeu_de_tarot_parisien_anonyme_%C3%A0_enseignes_italiennes_-_%28jeu_de_cartes%2C_estampe%29_%28Original%29_-_btv1b105109624_(118_of_156).jpg)
- Asset source candidate: Commons/BnF scan set with `156` page images.
- License / reuse: Commons file pages show public-domain status / PD-1923 style markup on the scanned files.
- Mapping strategy:
  - The pack likely needs manual extraction from the scan set.
  - Use title-based correspondence for trumps and suit normalization for minors if the pack is assembled.
- Native titles strategy:
  - Keep French native labels as a secondary line if a deck-specific title list is prepared.
- Risks:
  - The current source is a scan set, not a ready pack.
  - File naming and deck boundaries are noisy.
- Recommendation: `research more`

### 6) Oswald Wirth Tarot

- Deck id candidate: `oswald-wirth-tarot`
- Expected coverage: `major-only 22/22`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Oswald_Wirth_tarot_deck)
  - [Representative file page: Le Fou](https://commons.wikimedia.org/wiki/File:00_Le_Fou,_Oswald_Wirth_Tarot_Deck_1889_BnF.jpg)
  - [Representative file page: La Justice](https://commons.wikimedia.org/wiki/File:08_La_Justice,_Oswald_Wirth_Tarot_Deck_1889_BnF.jpg)
  - [Representative file page: La Force](https://commons.wikimedia.org/wiki/File:11_La_Force,_Oswald_Wirth_Tarot_Deck_1889_BnF.jpg)
- Asset source candidate: Commons category with `29` files; the connected pack uses the 22 numbered BnF scans and excludes the duplicate/alternate files.
- License / reuse: Commons file pages for the 22 numbered scans describe the images as public domain.
- Mapping strategy:
  - Major-only title-based mapping.
  - Use canonical app ids for filenames.
  - `La Justice` is shown on app `major-11-justice`.
  - `La Force` is shown on app `major-08-strength`.
- Native titles strategy:
  - Show French major titles as the secondary line.
  - Keep the translated app title as the primary title.
- Risks:
  - The category includes duplicate / alternate image versions, but they were filtered out of the pack.
- Recommendation: `connected`
- Current status: connected in UI as a historical major-only deck

### 7) Tarot de Besançon / Renault

- Deck id candidate: `tarot-de-besancon-renault`
- Expected coverage: `major-only 22/22`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Tarot_de_Besan%C3%A7on_-_Renault)
  - [Parent Commons category](https://commons.wikimedia.org/wiki/Category:Tarot_de_Besan%C3%A7on)
  - [Representative file page](https://commons.wikimedia.org/wiki/File:Tarot_de_Besan%C3%A7on_-_Renault_-_Trump_07.jpg)
- Asset source candidate: Commons category with `22` files, all trumps.
- License / reuse: Commons file pages mark the Trump images as public domain.
- Mapping strategy:
  - Major-only title-based mapping.
  - No minors should be inferred from this source set.
- Native titles strategy:
  - Use the historical French names or local Besançon variants as the secondary line.
- Risks:
  - This is only the trump set in Commons, not a full 78-card deck.
  - The current app can host it as major-only, but the research pass does not prove a ready pack beyond the trump category.
- Recommendation: `research more`

### 8) Industrie und Glück / historical Tarock

- Deck id candidate: `industrie-und-gluck`
- Expected coverage: `partial / incompatible`
- Source URLs:
  - [Commons category](https://commons.wikimedia.org/wiki/Category:Industrie_und_Gl%C3%BCck)
  - [Representative file page](https://commons.wikimedia.org/wiki/File:Austrian_Tarock_Type_A_-_Trull_-_IMG_7612.jpg)
- Asset source candidate: Commons category with `22` files, but the category itself describes a `54-card variant of the French-suited tarot pack`.
- License / reuse: mixed; some files are public domain, others are CC BY / CC-BY-SA user photographs or self-published work. The category is not a clean safe pack.
- Mapping strategy:
  - Not compatible with the app's current 78-card tarot model.
  - Even if the art is reusable, the game structure is tarock-specific.
- Native titles strategy:
  - Not worth solving for the current app.
- Risks:
  - Different deck family and different card count.
  - Mixed licensing across the category.
  - Not a safe match for the app model.
- Recommendation: `reject`

### 9) Nicolas Conver Tarot

- Deck id candidate: `marseille-historical`
- Expected coverage: `major-only 22/22`
- Source URLs:
  - [Current app docs](./HISTORICAL_DECK_CANDIDATES.md)
  - [Commons-based existing pack in the repo](./ASSET_CANDIDATES.md)
- Asset source candidate: already connected in the app as the Nicolas Conver / Marseille historical majors pack.
- License / reuse: already handled in the project documentation.
- Mapping strategy:
  - Title-based Marseille major mapping.
  - Minors are intentionally not connected.
- Native titles strategy:
  - Already supported in the app.
- Risks:
  - None for this research pass; this is the baseline historical major-only deck already in UI.
- Recommendation: `already connected`

## Other public-domain / CC candidates spotted during the scan

- `Papus Tarot 1909` looks promising as a future research follow-up, but it was not fully evaluated in this pass because the current candidate list already covers the safer and more relevant decks above.

## Suggested next step

If we want the safest immediate full-deck implementation, `Tarocco Piemontese / Solesio 1865` is the best current full-deck choice and is already connected in the UI.

If we want the most historically distinctive and research-heavy deck, `Sola Busca` is the best next research target, but it needs a curated 78-card pack and a bespoke title table before connection.

## Sources reviewed

- Wikimedia Commons category and file pages listed above.
- Gallica / BnF scan references embedded in the Commons file pages.
- Historical deck pages referenced by the Commons scan sets.
