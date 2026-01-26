# RMDL — Artefacts générés (Option A)

Ce dossier contient la sortie de compilation RMDL -> TSX (Server Components).

- `pages/*.tsx` : pages précompilées (à importer côté Next).
- `manifest.ts` : mappe `slug -> import()`.

Ne pas modifier à la main. Regénérer via `scripts/rmdl-to-tsx.ts`.
