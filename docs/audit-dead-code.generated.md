# Audit dead-code (généré)

- Généré le : 2026-02-04T12:38:07.958Z
- Racines scannées : src, app, scripts
- Fichiers scannés : 197
- Imports statiques trouvés : 351
- Références de workers (/workers/*) : 10

JSON complet : docs/audit-dead-code.generated.json

## Notes
- Cet export ne suit pas les imports dynamiques : à vérifier manuellement.
- Lister les fichiers Next.js via app/* est uniquement informatif.

## Exécution
```bash
node --import=tsx scripts/audit-dead-code.ts
```
