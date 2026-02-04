# Audit dead-code / duplicats

> Objectif : identifier les duplications et zones mortes **sans supprimer** et sans régression.

## 1) Inventaire des duplications (avec preuves)

| Doublon | Source-of-truth (usage actuel) | Où l’autre est importée (preuve) | Risque si suppression | Action recommandée |
| --- | --- | --- | --- | --- |
| `src/features/navigation/core/utils/scrollUtils.ts` vs `src/utils/scrollUtils.ts` | **Actuellement utilisée** : `src/utils/scrollUtils.ts` (appelée depuis mobile nav). | `src/features/mobile-nav/components/MobileHeader.tsx` importe `@utils/scrollUtils`. | Moyen (différence d’implémentation : offset vs `handleScrollClick`). | **Phase 1** : stub re-export vers une seule source-of-truth + note README. |
| `src/features/navigation/core/utils/scrollSmooth.ts` vs `src/utils/scrollSmooth.ts` | **Deux usages actifs** : core utilise `/workers/scrollSmoothWorker.js`, legacy utilise `new URL("../workers/scrollSmoothWorker.js", import.meta.url)`. | `src/features/navigation/core/hooks/useSmoothScroll.ts` et `src/utils/useSmoothScroll.ts`. | Élevé (workers différents : public vs bundlé). | **Phase 1** : documenter les deux voies + tests workers avant regroupement. |
| `src/features/navigation/core/utils/rafThrottle.ts` vs `src/utils/rafThrottle.ts` | **Deux usages actifs** : core + legacy. | `src/features/navigation/core/hooks/useScrollAnchors.ts` et `src/hooks/useScrollAnchors.ts`. | Faible (impl identique) mais usage critique (scroll). | **Phase 1** : stub re-export + vérifier perf. |
| `src/features/navigation/core/utils/sections.ts` vs `src/utils/sections.ts` | **Deux usages actifs** : core + legacy. | `src/features/navigation/core/hooks/useScrollAnchors.ts` et `src/hooks/useScrollAnchors.ts`. | Moyen (navigation/scroll). | **Phase 1** : aligner API, documenter source-of-truth. |
| `src/features/navigation/core/utils/handlers.ts` vs `src/utils/handlers.ts` | **Utilisée** : `src/utils/handlers.ts` via mobile nav. | `src/features/mobile-nav/components/*` importent `@utils/handlers`. | Faible à moyen (events menu). | **Phase 1** : stub re-export + supprimer doublon après validation. |
| `src/features/navigation/core/context/*` vs `src/utils/context/*` | **Utilisée** : `src/utils/context/*` via mobile nav/legacy hooks. Core utilise aussi ses propres contexts. | `src/features/mobile-nav/components/*` + `src/hooks/useScrollAnchors.ts`. | Élevé (navigation/scroll global). | **Phase 1** : doc source-of-truth + éviter mélange. |
| `public/workers/scrollWorker.js` vs `src/workers/scrollWorker.js` | **Deux usages actifs** : public pour core, bundlé pour legacy. | `src/features/navigation/core/hooks/useScrollAnchors.ts` et `src/hooks/useScrollAnchors.ts`. | Élevé (worker au cœur du scroll). | **Phase 1** : conserver les deux + tests endpoints. |
| `public/workers/scrollSmoothWorker.js` vs `src/workers/scrollSmoothWorker.js` | **Deux usages actifs** : public pour core, bundlé pour legacy. | `src/features/navigation/core/utils/scrollSmooth.ts` et `src/utils/scrollSmooth.ts`. | Élevé (smooth scroll). | **Phase 1** : conserver les deux + tests endpoints. |

## 2) Liste “non référencés” (preuves)

> Méthode : `rg -n "<nom_fichier>" src app scripts` retourne 0 résultat (hors le fichier lui‑même).

| Fichier | Preuve (rg 0 résultat) | Risques | Action |
| --- | --- | --- | --- |
| `src/utils/fnScrollUtils.ts` | Aucun import trouvé. | Possible legacy ou usage runtime indirect. | **Phase 1** : déplacer en `src/_legacy/` et vérifier pages clés. |
| `src/utils/Space.tsx` | Aucun import trouvé. | Risque faible (composant utilitaire). | **Phase 1** : déplacer en `src/_legacy/`. |
| `src/utils/nav.ts` | Aucun import trouvé. | Risque moyen si import dynamique inattendu. | **Phase 1** : déplacer en `src/_legacy/` + tests nav. |
| `src/features/navigation/core/hooks/useScrollAnchors.ts` | Aucun import direct (l’usage actuel pointe vers `src/hooks/useScrollAnchors.ts`). | Risque élevé (scroll). | **Phase 1** : garder, documenter; ne déplacer qu’après bascule explicite. |

## 3) Liste “suspects” (risque de faux positif)

> Ces zones sont sensibles : **ne pas déplacer** sans vérification manuelle.

- **Workers** : références via `new Worker("/workers/...")` et `new URL("../workers/...", import.meta.url)`.
- **Assets public** : `public/*` (manifest/robots/sitemap/logo). Vérifier usage Next.js.
- **RMDL** : `src/rmdl/*`, `src/generated/*`, scripts RMDL.
- **Imports dynamiques / lazy** : composants chargés via `dynamic()` ou `React.lazy`.
- **Data JSON / contenu** : fichiers référencés par string ou configuration.

### Vérifications manuelles suggérées
- Pages : `/`, `/debug/logo-test`, `/rmdl/etape-1`.
- Navigation mobile (menu + scroll anchors).
- Workers : `/workers/scrollWorker.js` et `/workers/scrollSmoothWorker.js` doivent répondre 200.

## 4) Procédure reproductible (script interne)

Script : `scripts/audit-dead-code.ts` (sans dépendance lourde).

Exécution :
```bash
node --import=tsx scripts/audit-dead-code.ts
```

Sorties :
- `docs/audit-dead-code.generated.json` (détails)
- `docs/audit-dead-code.generated.md` (résumé)

Notes :
- Le script ne suit pas les imports dynamiques.
- Les références `/workers/` sont collectées via recherche de string.
