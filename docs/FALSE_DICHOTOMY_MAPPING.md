# False Dichotomy Tarot Mapping

Date: `2026-05-19`

## Deck metadata

- Deck id: `false-dichotomy`
- UI label: `False Dichotomy`
- Source URL: `https://github.com/ChaoteCruithne/FalseDichotomyTarot`
- Coverage: `78/78`
- Scope: custom full deck normalized to canonical app ids

## Mapping dictionary

```text
majorMap = {
  "action-intention.png": "major-00-fool",
  "creator-created.png": "major-01-magician",
  "death-rebirth.png": "major-02-high-priestess",
  "desire-addiction.png": "major-03-empress",
  "feast-famine.png": "major-04-emperor",
  "forest-trees.png": "major-05-hierophant",
  "incense-perfume.png": "major-06-lovers",
  "matyrzealot.png": "major-07-chariot",
  "mission-obsession.png": "major-08-strength",
  "omen-evidence.png": "major-09-hermit",
  "pain-pleasure.png": "major-10-wheel-of-fortune",
  "patron-supplicant.png": "major-11-justice",
  "predator-prey.png": "major-12-hanged-man",
  "rule-exception.png": "major-13-death",
  "soma-panacea.png": "major-14-temperance",
  "speaking-listening.png": "major-15-devil",
  "swarm-gestalt.png": "major-16-tower",
  "taboo-tradition.png": "major-17-star",
  "truth-honesty.png": "major-18-moon",
  "unity-proximity.png": "major-19-sun",
  "watcher-seer.png": "major-20-judgement",
  "wilderness-metropolis.png": "major-21-world"
}

suitMap = {
  "Past / Future": "pentacles",
  "Risk / Reward": "wands",
  "Science / Magick": "swords",
  "Self / Shadow": "cups"
}

rankMap = {
  "Against": "01-ace",
  "Amidst": "02-two",
  "Beyond": "03-three",
  "Despite": "04-four",
  "For": "05-five",
  "From": "06-six",
  "Like": "07-seven",
  "Of": "08-eight",
  "Since": "09-nine",
  "Through": "10-ten",
  "Towards": "11-page",
  "Until": "12-knight",
  "Upon": "13-queen",
  "Without": "14-king"
}

minorSourcePattern = "<rank><SuitSuffix>.png"
```

## Source filename normalization

- `PastFut` maps to `Past / Future`.
- `RiskRew` maps to `Risk / Reward`.
- `SciMag` maps to `Science / Magick`.
- `SelfShad` maps to `Self / Shadow`.
- The source tree spells one Science / Magick file as `sincSciMag.png`; the local pack normalizes it to `swords-09-nine.png`.

## Validation checklist

- 22 major source files mapped
- 56 minor source files mapped
- 78 target app cards
- no missing target cards
- no duplicate target cards
- all images stored locally under canonical filenames
