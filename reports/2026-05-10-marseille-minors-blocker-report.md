# Отчет: Marseille minors blocker report

Дата: 2026-05-10

## Основное

- Ветка: `feature/marseille-minors-blocker-report`
- Issue: https://github.com/KostGame/Tarot/issues/38
- Coverage итоговая: `major-only`
- Marseille в UI: да, но только старшие арканы

## Проверка источника

- Source URL: [Commons category / Tarot de Marseille - Nicolas Conver 1760](https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Nicolas_Conver_1760)
- License / reuse checked: да, file pages отмечены как `CC BY-SA 4.0`
- Minor assets found: нет безопасного полного minor pack `56/56`
- Minor assets expected: `56`
- Minor mapping contract documented: да

## Что найдено

- В Commons category доступны 22 majors.
- Для minors видны только `As BATON` и `As ÉPÉE`.
- Полного и безопасного набора `56` младших карт с устойчивыми файлами и без сомнений по составу в этой категории не найдено.

## Что сделано

- `docs/MARSEILLE_MAPPING.md` дополнен minor mapping contract и blocker note.
- `docs/ASSET_CANDIDATES.md` обновлен пояснением, что Marseille остается major-only.
- `marseille-historical` не расширялась до full `78/78`.

## Validation checklist

- Deck id: `marseille-historical`
- Coverage remains: `major-only`
- UI full mode not enabled: yes
- Safe mode remains majors only: yes
- Missing minor pack blocker: yes
- Broken asset links: not applicable for missing minors

## Checks

- `git diff --check` - run.
- `npm run check` - run.
- `npm test` - run.
- `npm run build` - run.

## Итог

Полный безопасный Marseille pack `78/78` собрать не удалось. `marseille-historical` остается `major-only`, а minor mapping contract задокументирован для будущего ручного asset pack.
