# Plan d’action incrémental (no-regression)

## Phase 1 — SAFE (sans delete)
Objectif : réduire le risque de régression en **centralisant la source-of-truth** sans supprimer.

### 1.1 — Stubs de re-export vers la SOT
- **Actions** :
  - Créer des stubs `src/utils/*` qui re-exportent `src/features/navigation/core/*`.
  - Préserver les signatures et types (aucun `any`).
- **Fichiers impactés** (exemples) :
  - `src/utils/scrollUtils.ts` → re-export `src/features/navigation/core/utils/scrollUtils.ts`.
  - `src/utils/scrollSmooth.ts` → re-export `src/features/navigation/core/utils/scrollSmooth.ts`.
  - `src/utils/sections.ts`, `src/utils/rafThrottle.ts`, `src/utils/handlers.ts`.
  - `src/utils/useSmoothScroll.ts` → re-export `src/features/navigation/core/hooks/useSmoothScroll.ts`.
- **Checks** :
  - `yarn build`
  - Pages : `/`, `/debug/logo-test`, `/rmdl/etape-1`.
  - Mobile nav responsive.
  - Workers (voir Phase 2).

### 1.2 — Documentation “Source-of-truth”
- Ajouter un `README.md` dans `src/features/navigation/core/` précisant que ce dossier est la SOT navigation/scroll.
- Ajouter un `README.md` dans `src/_legacy/` listant les fichiers déplacés.

### 1.3 — Déplacement en `_legacy/` (sans suppression)
- **Actions** : déplacer les fichiers non référencés identifiés dans `src/_legacy/`.
- **Fichiers candidats** :
  - `src/utils/fnScrollUtils.ts`
  - `src/utils/blogData/*`
  - `src/utils/cookieStorage/useCookie.tsx`
  - `src/utils/sessionStorage/useSessionStorage.tsx`
  - `src/utils/localStorage/useLocalStorage.tsx`
  - `src/utils/useToggle.ts`
  - `src/utils/cookiesUtils.ts`
  - `src/utils/Space.tsx`
  - `src/utils/validationForm.js`
  - `src/utils/functions/colorGradientAnimation.js`
  - `src/utils/context/DrivingContext.tsx`
- **Checks** :
  - `yarn build`
  - Parcours pages clés.

---

## Phase 2 — SUPPRIMABLE (avec conditions de validation)
Objectif : supprimer uniquement après validations strictes.

### 2.1 — Workers
- **Condition** : `public/workers/*` répondent en 200 + navigation/scroll OK.
- **Action** : supprimer `src/workers/*.js` si tous les usages ont été alignés sur `/workers/`.
- **Checks** :
  - `yarn build`
  - Vérifier `/workers/scrollWorker.js` et `/workers/scrollSmoothWorker.js`.

### 2.2 — Legacy utils
- **Condition** : stubs en place + aucune erreur en prod.
- **Action** : supprimer les duplicats dans `src/utils/*` après migration complète.
- **Checks** :
  - `yarn build`
  - Pages clés + responsive mobile nav.

---

## Process de validation recommandé
1. Exécuter l’audit automatique : `node scripts/audit-dead-code.ts`.
2. Vérifier les pages/flows critiques.
3. Valider les workers (200 + comportement scroll).
4. Taguer chaque fichier “OK-to-delete” dans un PR distinct.
