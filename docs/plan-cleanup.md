# Plan d’action incrémental (safe)

## Phase 1 — No delete (safe)

Objectif : réduire le risque sans supprimer. Tout déplacement doit être réversible.

1) **Créer un espace `_legacy/` contrôlé**
   - Déplacer les fichiers listés “non référencés” vers `src/_legacy/`.
   - Ajouter un README dans `src/_legacy/` listant la source-of-truth et la date.
   - Check : `yarn build` + parcours pages clés.

2) **Stubs re-export (doublons)**
   - Choisir une source-of-truth par paire.
   - Remplacer le doublon par un stub re-export : `export * from "<source-of-truth>";`.
   - Check : `yarn build` + smoke tests navigation/scroll.

3) **Documenter les workers**
   - Ajouter une note claire : “public/workers” (chargé via URL string) vs “src/workers” (bundlé).
   - Conserver les deux tant que les deux voies sont actives.
   - Check : requêtes 200 sur `/workers/scrollWorker.js` et `/workers/scrollSmoothWorker.js`.

## Phase 2 — Delete conditionnel

1) **Suppression uniquement après validation**
   - Conditions minimales :
     - `yarn build` OK
     - pages clés visitées : `/`, mobile nav, `/debug/logo-test`, `/rmdl/etape-1`
     - workers OK (200)
   - Supprimer les fichiers déplacés en `_legacy/` **seulement** après preuve d’inutilité.

2) **Nettoyage duplicats**
   - Si un stub re-export est en place depuis 1 release et stable, supprimer le doublon.

## Check-list de commandes

```bash
# Build

yarn build

# Workers (exemples)

curl -I http://localhost:3000/workers/scrollWorker.js
curl -I http://localhost:3000/workers/scrollSmoothWorker.js
```
