# Scripts RMDL

- `rmdl-to-tsx.ts` : compile `src/assets/data/rmdl/pages/*.rmdl` vers `src/generated/rmdl/pages/*.tsx`
- `rmdl-clean.ts` : nettoie les artefacts

Intégration suggérée :
- Ajouter un script `rmdl:gen` dans `package.json`.
- Exécuter `rmdl:gen` avant `next build`.
