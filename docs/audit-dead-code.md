# Audit « code mort / duplicats »

## Méthodologie rapide (sans faux positifs)
- Analyse des doublons connus (navigation/scroll + workers) + recherche d’imports `@utils/*` vs `features/navigation/core/*`.
- Vérification des références avec `rg -n` (imports, chaînes `/workers/`).
- Exclusion volontaire des conventions Next.js (`app/`, layouts, route segments), des imports dynamiques et des assets `public/`.

> **Source-of-truth attendue pour navigation/scroll** : `src/features/navigation/core/*` (selon le scope). Les duplicats dans `src/utils/*` sont donc **suspects** et considérés comme “legacy” jusqu’à preuve contraire.

---

## 1) Inventaire des duplications (table)

| Duplication | Source-of-truth (SOT) | Preuve d’usage du duplicat | Risque suppression | Action recommandée |
|---|---|---|---|---|
| `src/features/navigation/core/utils/scrollUtils.ts` vs `src/utils/scrollUtils.ts` | `src/features/navigation/core/utils/scrollUtils.ts` | `src/features/mobile-nav/components/MobileHeader.tsx` importe `@utils/scrollUtils`. (`rg -n "@utils/scrollUtils" src app`) | **Moyen** (utilisé en mobile nav) | **SAFE** : créer un stub `src/utils/scrollUtils.ts` qui re-exporte le SOT. **SUPPRIMABLE** après validation mobile/nav. |
| `src/features/navigation/core/utils/scrollSmooth.ts` vs `src/utils/scrollSmooth.ts` | `src/features/navigation/core/utils/scrollSmooth.ts` (branche “/workers/”) | Utilisé via `@utils/useSmoothScroll` → `src/features/mobile-nav/components/MobileHeader.tsx`. (`rg -n "@utils/useSmoothScroll" src app`) | **Élevé** (différence d’impl: `new Worker("/workers/..." )` vs `new URL("../workers/..." )`) | **SAFE** : stub `src/utils/scrollSmooth.ts` vers SOT **ou** aligner les workers. **SUPPRIMABLE** après test workers. |
| `src/features/navigation/core/utils/sections.ts` vs `src/utils/sections.ts` | `src/features/navigation/core/utils/sections.ts` | `src/hooks/useScrollAnchors.ts` importe `@utils/sections`. (`rg -n "@utils/sections" src app`) | **Moyen** | **SAFE** : stub `src/utils/sections.ts` re-export SOT. |
| `src/features/navigation/core/utils/rafThrottle.ts` vs `src/utils/rafThrottle.ts` | `src/features/navigation/core/utils/rafThrottle.ts` | `src/hooks/useScrollAnchors.ts` importe `@utils/rafThrottle`. (`rg -n "@utils/rafThrottle" src app`) | **Moyen** | **SAFE** : stub `src/utils/rafThrottle.ts` re-export SOT. |
| `src/features/navigation/core/utils/handlers.ts` vs `src/utils/handlers.ts` | `src/features/navigation/core/utils/handlers.ts` | `src/features/mobile-nav/components/*` importe `@utils/handlers`. (`rg -n "@utils/handlers" src app`) | **Moyen** | **SAFE** : stub `src/utils/handlers.ts` re-export SOT. |
| `src/features/navigation/core/utils/nav.ts` vs `src/utils/nav.ts` | `src/features/navigation/core/utils/nav.ts` | Aucune référence directe à `@utils/nav` trouvée. (`rg -n "@utils/nav" src app` → 0) | **Faible** | **SAFE** : déplacer en `_legacy/` avec README. **SUPPRIMABLE** après validations. |
| `src/features/navigation/core/context/*` vs `src/utils/context/*` | `src/features/navigation/core/context/*` | `src/features/mobile-nav/components/*` importe `@utils/context/*` (Navigation/Scroll). (`rg -n "@utils/context" src app`) | **Élevé** (providers actifs) | **SAFE** : créer un pont explicite (re-exports) ou migration progressive vers SOT. |
| `src/features/navigation/core/hooks/useSmoothScroll.ts` vs `src/utils/useSmoothScroll.ts` | `src/features/navigation/core/hooks/useSmoothScroll.ts` | `src/features/mobile-nav/components/MobileHeader.tsx` importe `@utils/useSmoothScroll`. (`rg -n "@utils/useSmoothScroll" src app`) | **Moyen** | **SAFE** : stub `src/utils/useSmoothScroll.ts` vers SOT. |
| `src/features/navigation/core/hooks/useScrollAnchors.ts` vs `src/hooks/useScrollAnchors.ts` | `src/features/navigation/core/hooks/useScrollAnchors.ts` | `src/features/mobile-nav/components/MobileNav.tsx` importe `src/hooks/useScrollAnchors`. (`rg -n "hooks/useScrollAnchors" src app`) | **Élevé** (workers + logique active) | **SAFE** : aligner vers SOT, puis stub. |
| `public/workers/*` vs `src/workers/*` | `public/workers/*` (référencé par `new Worker("/workers/...")`) | `src/features/navigation/core/utils/scrollSmooth.ts` et `src/features/navigation/core/hooks/useScrollAnchors.ts` utilisent `/workers/`. | **Élevé** (différences de chargement) | **SAFE** : standardiser le chargement sur `public/workers` et garder les types dans `src/workers/*.d.ts`. |

---

## 2) Liste “non référencés” (preuves)
> Ces fichiers n’ont **aucune référence** trouvée par import ou chemin dans le code (hors auto-références). Pour chaque item : preuve `rg` (0 résultat), risques potentiels et action suggérée.

| Fichier | Preuve | Risques | Action |
|---|---|---|---|
| `src/utils/fnScrollUtils.ts` | `rg -n "fnScrollUtils" src app` → 0 | import dynamique possible (faible) | Déplacer en `src/_legacy/utils/` + test scroll. |
| `src/utils/blogData/fetchData.ts` | `rg -n "fetchBlogData" src app` → 0 | data JSON ou usage hors repo | Déplacer en `_legacy/` + vérifier routes blog. |
| `src/utils/blogData/loadData.ts` | `rg -n "loadData" src app` → 0 | idem | Déplacer en `_legacy/` + tests. |
| `src/utils/cookieStorage/useCookie.tsx` | `rg -n "useCookie\\b" src app` → 0 | usage potentiel via import dynamique | Déplacer en `_legacy/` + tests forms. |
| `src/utils/sessionStorage/useSessionStorage.tsx` | `rg -n "useSessionStorage\\b" src app` → 0 | idem | Déplacer en `_legacy/` + tests UI. |
| `src/utils/localStorage/useLocalStorage.tsx` | `rg -n "useLocalStorage\\b" src app` → 0 | idem | Déplacer en `_legacy/` + tests UI. |
| `src/utils/useToggle.ts` | `rg -n "useToggle" src app` → 0 | idem | Déplacer en `_legacy/` + tests UI. |
| `src/utils/cookiesUtils.ts` | `rg -n "cookiesUtils" src app` → 0 | idem | Déplacer en `_legacy/` + tests auth. |
| `src/utils/Space.tsx` | `rg -n "@utils/Space" src app` → 0 | composant utilisé via import non-standard | Déplacer en `_legacy/` + parcours pages. |
| `src/utils/validationForm.js` | `rg -n "validationForm" src app` → 0 | usage via HTML inline ou CMS | Déplacer en `_legacy/` + vérifier formulaires. |
| `src/utils/functions/colorGradientAnimation.js` | `rg -n "colorGradientAnimation" src app` → 0 | usage inline potentiel | Déplacer en `_legacy/` + vérifier pages SVG. |
| `src/utils/context/DrivingContext.tsx` | `rg -n "DrivingContext|DrivingProvider" src app` → 0 | possible feature toggle dormant | Déplacer en `_legacy/` + vérifier pages driving. |

---

## 3) Liste “suspects” (risque de faux positif) + comment vérifier

### Workers
- **Fichiers concernés** : `public/workers/*`, `src/workers/*`, usages dans `src/features/navigation/core/utils/scrollSmooth.ts`, `src/features/navigation/core/hooks/useScrollAnchors.ts`, `src/hooks/useScrollAnchors.ts`, `src/utils/scrollSmooth.ts`.
- **Risque** : les workers sont chargés via chaînes (`"/workers/..."`) ou `new URL(...)` → faux positifs possibles.
- **Vérif** : tester `/workers/scrollWorker.js` et `/workers/scrollSmoothWorker.js` en direct + navigation/scroll.

### Assets `public/`
- **Exemples** : `manifest`, `sitemap`, `robots`, icônes/PNG/SVG.
- **Risque** : utilisés par conventions Next (pas d’import explicite).
- **Vérif** : `yarn build` + check réseau en prod.

### RMDL / fichiers générés
- **Zones** : `src/rmdl/*`, `src/generated/*`, scripts associés.
- **Risque** : génération + imports indirects.
- **Vérif** : `yarn build` + parcours `/rmdl/etape-1`.

### Lazy/Suspense / imports dynamiques
- **Risque** : `import()` non détecté si non couvert par nos regex.
- **Vérif** : `rg -n "import\\(" src app` + tests manuels.

---

## Checks recommandés (à exécuter avant toute suppression)
- `yarn build`
- Pages clés : `/`, responsive mobile nav, `/debug/logo-test`, `/rmdl/etape-1`.
- Workers : `/workers/scrollWorker.js`, `/workers/scrollSmoothWorker.js`.
