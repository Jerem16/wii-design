# Inventaire des routes Next.js (`app/`)

## Résumé
- Total routes `page` visitables : **12**
- Total API routes (`route.ts|js`) : **0**

## Détail des segments

| URL | Fichiers présents (page/layout/loading/error/not-found/route) | Notes |
| --- | --- | --- |
| `/` | `page: app/page.tsx`<br>`layout: app/layout.tsx` | Home avec layout racine global. |
| `/about` | `page: app/about/page.tsx`<br>`loading: app/about/loading.tsx`<br>`error: app/about/error.tsx` | Segment page standard. |
| `/achievements` | `page: app/achievements/page.tsx`<br>`loading: app/achievements/loading.tsx`<br>`error: app/achievements/error.tsx` | Segment page standard. |
| `/connection` | `page: app/connection/page.tsx`<br>`loading: app/connection/loading.tsx`<br>`error: app/connection/error.tsx` | Segment page standard. |
| `/contact` | `page: app/contact/page.tsx`<br>`loading: app/contact/loading.tsx`<br>`error: app/contact/error.tsx` | Segment page standard. |
| `/debug/logo-test` | `page: app/debug/logo-test/page.tsx` | Page debug existante. |
| `/informations-legales` | `page: app/informations-legales/page.tsx`<br>`loading: app/informations-legales/loading.tsx`<br>`error: app/informations-legales/error.tsx` | Segment page standard. |
| `/mentions-legales` | `page: app/mentions-legales/page.tsx`<br>`loading: app/mentions-legales/loading.tsx`<br>`error: app/mentions-legales/error.tsx` | Segment page standard. |
| `/reservation` | `page: app/reservation/page.tsx`<br>`loading: app/reservation/loading.tsx`<br>`error: app/reservation/error.tsx` | Segment page standard. |
| `/rmdl/[slug]` | `page: app/rmdl/[slug]/page.tsx` | Route dynamique. |
| `/search` | `page: app/search/page.tsx`<br>`loading: app/search/loading.tsx`<br>`error: app/search/error.tsx` | Segment page standard. |
| `/services` | `page: app/services/page.tsx`<br>`loading: app/services/loading.tsx`<br>`error: app/services/error.tsx` | Segment page standard. |

## Fichiers spéciaux constatés
- `app/layout.tsx` (layout racine)
- Aucun `not-found.tsx` détecté sous `app/`
- Aucun `route.ts|route.js` (API route) détecté sous `app/`
