# Audit Desktop — color shift / animation du logo

> Périmètre : Desktop uniquement (header/nav/sidebar + SVG desktop). Mobile non modifié.

## A) Cartographie (fichiers → rôle → impact → remarques)

| Fichier | Rôle | Impact sur l'effet | Risque / remarque |
| --- | --- | --- | --- |
| `src/components/00-Header/Logo.jsx` | Monte le logo desktop dans la navbar | Rend `img.l1` + `MyLogoBG` + `MyLogoTypo` + `MyLogoW` | Composition multi-SVG → risques de collisions d’IDs SVG/defs et de styles globaux. |
| `src/components/00-Header/Navbar.jsx` | En-tête desktop | Positionne le logo dans `.nav-bar` | Contribue au contexte de stacking (z-index). |
| `src/components/00-Header/NavInterface.jsx` | Monte navbar + sidebar + mobile | Desktop et sidebar sont rendus en même temps | Mobile est aussi monté mais stylé ailleurs. |
| `src/components/99-Svg_Icon/SideBodyLogo.jsx` | Enveloppe SVG du logo | Injecte `SvgDefBG` (defs + filter) | Répète des IDs de defs dans chaque SVG. |
| `src/components/99-Svg_Icon/MyLogoBG.jsx` | Fond du logo | Utilise `fill="url(#A)"` + `filter="url(#H)"` + `mixBlendMode: screen` | Dépend de defs globales (`#A`, `#H`) + blend sensible au contexte. |
| `src/components/99-Svg_Icon/MyLogoTypo.jsx` | Typo du logo | Injecte `SvgDefs` + `SvgUse` | Dépend de gradients `#C/#D/#E`. |
| `src/components/99-Svg_Icon/MyLogoW.jsx` | "W" du logo | Utilise `SvgUse` | Dépend de gradients `#C/#D/#E`. |
| `src/components/99-Svg_Icon/SvgDefBG.jsx` | Defs du fond | Déclare `#A` + `#H` + `#I` via `SvgFilter` | IDs globalement réutilisés. |
| `src/components/99-Svg_Icon/SvgDefs.jsx` | Defs typo/logo | Déclare `#C/#D/#E` | IDs globalement réutilisés. |
| `src/components/99-Svg_Icon/SvgDefBG2.jsx` | Defs des icônes sidebar | Déclare `#AX` + `#H` + `#I` et `#RX` | Partage `#AX` avec l’animation des stops. |
| `src/components/99-Svg_Icon/SvgUse.jsx` | Reuse d’un path | `fill="url(#C/#D/#E)"` + `mixBlendMode: screen` | Dépend d’IDs globaux + blend. |
| `src/components/99-Svg_Icon/GlobalLogoDefs.jsx` | Defs globales alternatives | Pas de montage observé | Unused : source de confusion. |
| `public/deferCss.css` | CSS global minifié | Déclare animations sur `#A/#C/#D/#E/#AX` + keyframes + hover logo | Effet principal du color shift + collisions possibles de keyframes/IDs. |
| `src/assets/styles/02_components/header/_logo.scss` | Styles logo | Positionnement `.logo` + tailles | `z-index` local vs global. |
| `src/assets/styles/02_components/header/_header.scss` | Styles navbar | Fixe `z-index` + structure | Crée contexte d’empilement pour le logo. |
| `src/assets/styles/02_components/header/_sidebar.scss` | Styles sidebar | Taille/hover des icônes | Lien avec `#RX`, `.white-bg_icon`. |
| `src/assets/styles/01_base/_general.scss` | Reset global | `svg`, `img`, `.logo` | Cascade globale (z-index 1) peut être override. |
| `src/utils/functions/colorGradientAnimation.js` | JS d’animation stop-color | Cible `#AX` via Worker | Non importé → probablement inactif. |

## B) Comment ça marche (pipeline de rendu)

1. **Montage DOM (Desktop)**
   - Le logo desktop est rendu par `Logo.jsx` dans `Navbar.jsx`, lui-même monté via `NavInterface.jsx`. Le logo combine un `<img>` (`.l1`) et trois SVG inline (`MyLogoBG`, `MyLogoTypo`, `MyLogoW`).
2. **SVG + defs/gradients**
   - `MyLogoBG` injecte un `<path id="Z">` puis le re-render via `<use>` avec `fill="url(#A)"` et `filter="url(#H)"`. Les defs correspondantes (`#A`, `#H`, `#I`) sont injectées par `SvgDefBG` via `SideBodyLogo`.
   - `MyLogoTypo` et `MyLogoW` utilisent `SvgUse` qui applique `fill="url(#C/#D/#E)"` (avec `mixBlendMode: screen`) pour créer la surimpression colorée. Les defs `#C/#D/#E` sont injectées par `SvgDefs`.
3. **Animation “color shift”**
   - Le “color shift” est généré **par CSS** via `public/deferCss.css` : les sélecteurs `#A/#C/#D/#E/#AX stop:first-child/last-child` animent `stop-color` avec des `@keyframes` longues (60s → 360s).
4. **Interaction CSS / hover**
   - Toujours dans `deferCss.css`, le hover du `.logo` modifie `transform`/`animation` (`.logoBG`, `.logoW`, `.l1`). Cela peut impacter le blend et les contextes de stacking.

## C) Risques / problèmes (classés)

### Critique
- **Collisions d’IDs SVG**
  - Cause : IDs `A/C/D/E/H/I/AX` réutilisés dans plusieurs SVG inline (`SvgDefBG`, `SvgDefs`, `SvgDefBG2`, `GlobalLogoDefs`).
  - Symptôme : animations de stops s’appliquent à *tous* les éléments `#A`, `#C`, etc. dans le DOM → effets aléatoires si plusieurs logos/icônes coexistent.
  - Fix minimal : générer des IDs uniques (prefix `useId()`) et propager via props dans `SvgDefBG`, `SvgDefs`, `SvgUse`, `MyLogoBG`.

### Important
- **CSS global minifié pilotant les stops**
  - Cause : sélecteurs globaux `#A/#C/#D/#E/#AX` dans `deferCss.css`.
  - Symptôme : la moindre collision d’ID ou un autre SVG avec les mêmes IDs héritera de l’animation.
  - Fix minimal : scope via prefix, ou `svg[data-logo] #A` (si possible) pour limiter la portée.

- **Mix-blend-mode + stacking contexts**
  - Cause : `mixBlendMode: screen` sur les `use` SVG, combiné avec `z-index` et `position` sur `.logo`/`.nav-bar`.
  - Symptôme : rendu différent selon le stacking context (navbar fixe, sidebar, hover transform).
  - Fix minimal : isoler le logo dans un wrapper avec `isolation: isolate` (uniquement desktop) pour stabiliser le blend.

### Mineur
- **Script JS d’animation non branché**
  - Cause : `colorGradientAnimation.js` n’est importé nulle part.
  - Symptôme : aucune animation JS active sur `#AX` (tout passe par CSS).
  - Fix minimal : supprimer ou documenter l’inutilisation si confirmé.

## D) Patch minimal (Desktop) — pseudo-diff

> Objectif : éviter collisions d’IDs + stabiliser l’animation, sans changer le design.

```diff
// Logo.jsx
+ import { useId } from "react";

const Logo = () => {
+  const logoId = useId();
   return (
-    <Link className="logo" ...>
+    <Link className="logo" data-logo-id={logoId} ...>
-      <LazyMyLogoBG />
-      <LazyMyLogoTypo />
-      <LazyMyLogoW />
+      <LazyMyLogoBG idPrefix={logoId} />
+      <LazyMyLogoTypo idPrefix={logoId} />
+      <LazyMyLogoW idPrefix={logoId} />
     </Link>
   );
}

// SideBodyLogo.jsx (et SvgDefBG/SvgDefs/SvgUse)
- <linearGradient id="A" ...>
+ <linearGradient id={`${idPrefix}-A`} ...>
- fill="url(#A)"
+ fill={`url(#${idPrefix}-A)`}

- <linearGradient id="C" ...>
+ <linearGradient id={`${idPrefix}-C`} ...>

- fill="url(#C)"
+ fill={`url(#${idPrefix}-C)`}

// deferCss.css (scope CSS des stops)
- #A stop:first-child { ... }
+ [data-logo-id] stop[id$="-A"]:first-child { ... }
```

**Notes :**
- On évite de toucher aux fichiers mobile.
- Variante plus robuste : centraliser les defs dans un composant monté une seule fois (ex: `GlobalLogoDefs`) + refs par ID unique.

## E) Checklist de test (Desktop)

- Hover navbar (logo + nav links)
- Focus clavier (tab sur liens)
- Scroll page (navbar fixe)
- Changement de page (navigation Next)
- Re-render (hot reload / state change)
- Plusieurs icônes affichées simultanément (sidebar + logo)
- Perf (FPS) : animations longues sur stops, pas de glitch visuel
- Chrome + Firefox (Desktop)

## F) Commandes exécutées (repérage)

- `rg -n "colorGradientAnimation|hue-rotate|feColorMatrix|feTurbulence|feDisplacementMap|mix-blend-mode|mask|clip-path|background-clip|keyframes|animation:|filter:|gradient|url\\(#" src app public`
- `rg -n "id=\\"|url\\(#" src/components/99-Svg_Icon`
- `rg -n "\\.logo|logo\\b|MyLogo|GlobalLogoDefs|SvgFilter" src app`
- `rg -n "colorGradientAnimation" src app`
- `rg -n "@keyframes blue1|@keyframes red1|@keyframes green1|@keyframes stopColor2|@keyframes opacityTide|@keyframes opacityLogo2|@keyframes scale0|@keyframes scale1" src public app`
