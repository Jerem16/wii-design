# Plan de cleanup navigation/scroll

## Phase 0 — Baseline & preuves
- Collecter les preuves `rg` (navigation/scroll, contexts, workers).
- Conserver la stratégie `import.meta.url` pour les workers.

## Phase 1 — Débranchage safe
1. Créer la SOT dans `src/utils/navigation/core/*`.
2. Mettre en place des stubs (re-exports) pour les anciens chemins.
3. Mettre à jour les features pour consommer la SOT.

## Phase 2 — Suppression (future)
- Supprimer uniquement après:
  - preuves `rg` sans références,
  - build OK,
  - validation manuelle OK.

## Phase 3 — Garde-fous
- Ajouter un mode `--check` au script d'audit pour:
  - refuser le retour des duplications legacy,
  - protéger les workers si `import.meta.url` est utilisé.
