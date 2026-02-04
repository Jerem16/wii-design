# Audit dead code (navigation/scroll)

## Contexte
- Objectif: supprimer le code mort et les duplications legacy sans régression, en plaçant la SOT navigation/scroll dans `src/utils/navigation/core/*`.
- Stratégie workers conservée (`new Worker(new URL(..., import.meta.url))`).

## Preuves (ripgrep)
### Navigation/scroll
- `rg -n "(scrollUtils|scrollSmooth|sections|rafThrottle|handlers|useSmoothScroll|useScrollAnchors)" src`
- `rg -n "NavigationContext|ScrollContext|createUseContext" src`

### Imports legacy vs SOT
- `rg -n "@utils/" src app`
- `rg -n "features/navigation/core" src app`

### Workers (anti-faux positifs)
- `rg -n "new Worker\\(new URL\\(" src`
- `rg -n "import\\.meta\\.url" src`
- `rg -n "new Worker\\(\\\"/workers/" src app`

## Résultats clés
- Navigation/scroll trouvés dans `src/utils/*` (legacy) et dans les hooks/features (mobile nav).
- Utilisation confirmée de workers via `new Worker(new URL(..., import.meta.url))`, donc les fichiers `src/workers/**` sont conservés.

## Décision
- Création de la SOT `src/utils/navigation/core/*`.
- Mise en place de stubs (re-exports) dans les chemins legacy pour éviter la casse.
- Aucune suppression de workers.
