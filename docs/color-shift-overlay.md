# 1. Contexte & objectif

Le projet contient déjà un effet visuel de variation colorimétrique (“color shift”) appliqué à des éléments SVG du logo et des icônes sidebar, principalement via animations sur les `stop-color` de gradients SVG et via `mix-blend-mode: screen`.

Objectif de cette note : **documenter l’existant**, identifier les points de couplage à la forme SVG (notamment le losange “Z”), et proposer une **spécification CSS réutilisable** pour une future couche `ColorShiftOverlay` (100% largeur/hauteur) utilisable dans d’autres conteneurs (sidebar, logo, cards), sans implémentation immédiate.

---

# 2. Périmètre NO-REGRESSION

- Cette analyse est **DOC ONLY** : aucune implémentation, aucun refactor, aucun composant ajouté dans ce livrable.
- État observé : les styles d’animation color shift sont chargés via `/deferCss.css` dans `app/layout.tsx`.
- Le comportement visuel actuel dépend :
  - de la structure SVG (`<defs>`, `<linearGradient>`, `<use>`, `<path>`),
  - de conventions d’ID (`-A`, `-C`, `-D`, `-E`, `-AX`, `-RX`),
  - et de sélecteurs CSS ciblant ces IDs/gradients.
- Les fichiers TSX/JSX/SCSS existants ne portent pas tous les keyframes : plusieurs animations sont uniquement visibles dans `public/deferCss.css`.

---

# 3. Cartographie de l’existant

## 3.1 Fichiers concernés (liste)

### Chargement global des styles différés
- `app/layout.tsx` (préload + stylesheet de `/deferCss.css`).

### Composants logo / SVG
- `src/components/00-Header/Logo.jsx`
- `src/components/00-Header/LogoContent.tsx`
- `src/components/99-Svg_Icon/SideBodyLogo.jsx`
- `src/components/99-Svg_Icon/MyLogoBG.jsx`
- `src/components/99-Svg_Icon/MyLogoW.jsx`
- `src/components/99-Svg_Icon/MyLogoTypo.jsx`
- `src/components/99-Svg_Icon/SvgDefs.jsx`
- `src/components/99-Svg_Icon/SvgDefBG.jsx`
- `src/components/99-Svg_Icon/SvgDefBG2.jsx`
- `src/components/99-Svg_Icon/SvgGradientWithFilter.jsx`
- `src/components/99-Svg_Icon/SvgFilter.jsx`
- `src/components/99-Svg_Icon/SvgUse.jsx`
- `src/components/99-Svg_Icon/StpOf7.jsx`
- `src/hooks/useIdPrefix.ts`

### Composants sidebar (icônes)
- `src/components/99-Svg_Icon/sideBar/SideBodyIcon.tsx`
- `src/components/99-Svg_Icon/sideBar/LazyIconContent.jsx`

### Styles structurels (source SCSS)
- `src/assets/styles/main.scss`
- `src/assets/styles/02_components/header/_logo.scss`
- `src/assets/styles/02_components/header/_sidebar.scss`

### CSS runtime contenant les animations color shift
- `public/deferCss.css`

### Référence SVG statique (asset)
- `public/img/favicon/icons/logo.svg`

## 3.2 Classes/selecteurs concernés (liste)

### Sélecteurs CSS observés dans `public/deferCss.css`
- `.logoBG`
- `.logo:hover .logoBG`
- `.logo:hover .logoW`
- `.logo .l1`, `.l1`, `.logo:hover .l1`
- `#C stop:first-child`, `#C stop:last-child`
- `#D stop:first-child`, `#D stop:last-child`
- `#E stop:first-child`, `#E stop:last-child`
- `#A stop:first-child`, `#A stop:last-child`
- `#AX stop:first-child`, `#AX stop:last-child`
- `linearGradient[id$="-C"] stop:first-of-type`, `linearGradient[id$="-C"] stop:last-of-type`
- `linearGradient[id$="-D"] ...`, `linearGradient[id$="-E"] ...`, `linearGradient[id$="-A"] ...`, `linearGradient[id$="-AX"] ...`
- `.red-content_icon`, `.white-bg_icon`
- `[id$="-RX"]`
- `.sidebar .side-nav .side-icon:hover [id$="-RX"]`

### Classes JSX/TSX directement liées
- `logo`, `mnav__logo`, `my-logo`, `l1`, `l2`
- `logoBG`, `logoW`, `animated-z`, `animated-w`
- `red-content_icon`, `white-bg_icon`, `s-a`

## 3.3 Keyframes / animations (noms exacts, où, usages)

### Keyframes trouvées (fichier: `public/deferCss.css`)
- `blue1` : anime `stop-color` (ex. `#C` first stop, `#A`/`#AX` first stop).
- `blue2` : anime `stop-color` (`#C` last stop).
- `red1` : anime `stop-color` (`#D` first stop).
- `red2` : anime `stop-color` (`#D` last stop).
- `green1` : anime `stop-color` (`#E` first stop).
- `green2` : anime `stop-color` (`#E` last stop).
- `stopColor2` : anime `stop-color` (`#A`/`#AX` last stop).
- `opacityTide` : variation d’opacité sur `.l1`.
- `opacityLogo2` : utilisé pour `.logo:hover .l1` et `[id$="-RX"]`.
- `scale0` : disparition/scale down de `.logoBG` au hover logo.
- `scale1` : apparition scale in de `.logoBG` et `.s-a`.
- `fillRGBAstart` : transition de fill pour `.white-bg_icon`.

### Animations déclarées/consommées mais non définies localement
- `sport-icon-V2` est référencée dans `public/deferCss.css` sur `.sidebar .side-nav .side-icon:active .red-content_icon`, **mais keyframes non trouvées** dans les fichiers scannés.

### Vérification “source SCSS”
- Recherche de `@keyframes blue1|blue2|red1|red2|green1|green2|stopColor2|opacityTide|fillRGBAstart` dans `src/assets/styles` : **non trouvé**.
- Conclusion : le color shift actif est porté par `public/deferCss.css` (fichier généré ou legacy), pas par les partials SCSS source inspectés.

## 3.4 Dépendances techniques (mask/clip-path/filter/mix-blend-mode/backdrop-filter/SVG specifics)

- `mix-blend-mode: screen` appliqué inline sur plusieurs `<use>` SVG (`SvgUse`, `MyLogoBG`), ce qui participe au rendu “color shift” par superposition.
- `filter` SVG (blur/fusion) via `SvgFilter` : `feGaussianBlur stdDeviation="3"` + `feMerge`.
- Animations ciblant **les stops de gradients SVG** (`stop-color`) via sélecteurs d’ID de `<linearGradient>`.
- Dépendance aux IDs SVG dynamiques (`idPrefix`) générés par `useIdPrefix`.
- `backdrop-filter` est présent ailleurs (header/mobile nav), mais pas utilisé pour ce color shift SVG.
- `mask` / `clip-path` : **non trouvé** pour cet effet dans les fichiers inspectés.

## 3.5 Points de couplage au SVG (ce qui empêche la réutilisation)

1. **Couplage à des IDs de gradients SVG**
   - Les animations CSS ciblent `#A/#C/#D/#E/#AX` ou `linearGradient[id$="-X"]` ; impossible de réutiliser tel quel hors SVG gradients.

2. **Couplage à des paths/formes spécifiques**
   - Le fond logo repose sur le path losange `id="...-Z"` (`d="M235 470L0 235 235 0 470 235z"`).
   - Les icônes sidebar reposent sur le path rectangulaire `id="...-RX"` dans `SvgDefBG2`.

3. **Couplage aux `<use>` multi-couches**
   - L’effet coloré est obtenu par duplication de shape (`<use>`) avec gradients C/D/E + offsets (x, y), pas par une couche overlay CSS autonome.

4. **Couplage aux classes structurelles historiques**
   - `.logoBG`, `.logoW`, `.l1`, `.white-bg_icon`, `.red-content_icon`, `[id$="-RX"]` sont sémantiquement liées aux composants logo/sidebar.

---

# 4. Comportement actuel (ce que l’utilisateur voit)

## 4.1 Où l’effet apparaît aujourd’hui

- **Logo header** :
  - superposition d’un logo SVG statique (`img.logo1.svg`, classe `.l1`) et de couches SVG React lazy (`MyLogoBG`, `MyLogoTypo`, `MyLogoW`).
  - au survol de `.logo`, le fond `.logoBG` se rétracte (`scale0`), la couche `.logoW` pivote (`rotateY`), et `.l1` change d’opacité.

- **Icônes sidebar** :
  - fond gradient via `SvgDefBG2` (`-AX`/`-RX`) et contenus `.red-content_icon` / `.white-bg_icon`.
  - au hover, `[id$="-RX"]` devient visible, avec transitions d’opacité/fill.

## 4.2 Conditions d’affichage (breakpoints, thèmes, états)

- Le CSS color shift est chargé globalement via `/deferCss.css` sans media query restrictive dans le layout.
- États clairement observés : `:hover`, `:active` sur logo/sidebar.
- Thèmes (light/dark) spécifiques à cet effet : **non trouvé**.
- Conditions de breakpoint spécifiques à cet effet dans `deferCss.css` : **non trouvé** (pas de media query dédiée observée sur la ligne inspectée).

## 4.3 Paramètres implicites (opacité, blur, saturation, vitesse, etc.)

Paramètres explicitement observés :
- `opacity`: variations multiples (`opacityTide`, `opacityLogo2`, états hover).
- `blur`: `feGaussianBlur stdDeviation="3"` (filtre SVG).
- `mix-blend-mode`: `screen` (inline SVG).
- `vitesse`:
  - gradients: 8s, 60s, 120s, 180s, 300s, 360s, 600s (`ease-in-out`, `infinite alternate`)
  - opacité logo: `32s linear 4s infinite alternate`
  - transitions/anims interaction: `0.5s`, `0.6s`, `0.8s`, `1s`, `3.2s`.

Paramètres **non trouvés** explicitement dans le color shift actuel :
- `saturation` CSS (`filter: saturate(...)`) : non trouvé.
- `contrast` CSS (`filter: contrast(...)`) : non trouvé.

---

# 5. Spécification proposée : “ColorShiftOverlay”

## 5.1 But du composant (overlay 100%/100%)

Créer une couche visuelle générique, indépendante d’une forme SVG précise :
- positionnée en absolu sur un parent,
- couvrant `100%` largeur/hauteur,
- réutilisable dans logo/sidebar/cards,
- pilotable via variables CSS,
- avec possibilité de réutiliser les keyframes existantes quand pertinent.

## 5.2 API CSS (noms de classes)

> Spécification cible (sans implémentation dans ce livrable) :

- `.color-shift-overlay-host`
  - conteneur parent recevant l’overlay.
- `.color-shift-overlay`
  - couche visuelle absolue 100%/100%.
- `.color-shift-overlay--interactive`
  - active des transitions liées aux états (hover/focus/active du host).
- `.color-shift-overlay--subtle`
  - preset faible intensité.
- `.color-shift-overlay--vivid`
  - preset forte intensité.
- `.color-shift-overlay--paused`
  - stop animation (`animation-play-state: paused`).

Convention de scope recommandée : préfixer toutes les nouvelles classes/variables `color-shift-*` pour éviter collisions avec legacy (`logoBG`, `l1`, etc.).

## 5.3 Variables CSS (noms + valeurs par défaut + description)

Variables minimales recommandées :

- `--color-shift-opacity: 0.55;`
  - opacité globale de l’overlay.
- `--color-shift-blur: 3px;`
  - intensité de flou perçu (équivalent conceptuel du blur SVG actuel).
- `--color-shift-saturation: 1;`
  - facteur de saturation.
- `--color-shift-contrast: 1;`
  - facteur de contraste.
- `--color-shift-blend-mode: screen;`
  - mode de fusion.
- `--color-shift-speed: 180s;`
  - vitesse d’animation principale.

Variables utiles complémentaires :
- `--color-shift-hue-rotation: 0deg;`
- `--color-shift-scale-hover: 1.025;`
- `--color-shift-transition-duration: 0.6s;`

## 5.4 Accessibilité & UX

- `pointer-events: none` sur la couche overlay pour ne jamais bloquer les interactions du contenu.
- Si un wrapper DOM est introduit ultérieurement côté React : `aria-hidden="true"` pour la couche purement décorative.
- Respect `@media (prefers-reduced-motion: reduce)` :
  - désactiver/ralentir les animations,
  - conserver un état statique lisible (pas de clignotement/opacité instable).

## 5.5 Compatibilité (sidebar/logo/cards) + contraintes parent (position relative / overflow)

- Pré-requis parent :
  - `position: relative` (ou autre contexte de positionnement),
  - gestion explicite d’`overflow` (hidden/clip/visible selon usage),
  - `isolation: isolate` recommandé si blend modes superposés à du contenu hétérogène.
- Sidebar/logo/cards :
  - même API de classes,
  - réglage par variables au niveau du host,
  - pas de dépendance à des IDs SVG.

---

# 6. Plan d’implémentation (sans coder)

## 6.1 Stratégie de réutilisation des keyframes existantes (priorité)

1. **Réutiliser d’abord les keyframes déjà en production** (`blue1`, `blue2`, `red1`, `red2`, `green1`, `green2`, `stopColor2`) pour minimiser l’écart visuel.
2. Encapsuler leur usage derrière `.color-shift-overlay` pour ne plus dépendre de sélecteurs d’IDs SVG globaux.
3. Garder l’effet legacy actif tant que les points d’intégration n’ont pas été validés visuellement (mode coexistence).

## 6.2 Stratégie de fallback si keyframes introuvables (règles, naming non conflictuel)

- Si keyframes historiques indisponibles dans le scope futur :
  - créer une famille `@keyframes color-shift-overlay-*` (naming non conflictuel),
  - conserver les durées proches des rythmes actuels (8s / 60s / 180s / 300s selon preset),
  - documenter équivalences visuelles (legacy → overlay).
- Pour cette analyse : keyframes historiques **trouvées dans `public/deferCss.css`** ; fallback non requis immédiatement mais à prévoir pour robustesse.

## 6.3 Stratégie d’intégration au projet (où importer le CSS, sans casser)

- Option la plus sûre : ajouter le futur CSS overlay dans la chaîne déjà chargée globalement (même niveau que styles header/nav), sans retirer `deferCss.css` au début.
- Éviter toute surcharge globale des sélecteurs legacy (`#A`, `linearGradient[id$="-A"]`, etc.) dans la première itération.
- Introduire l’overlay sur un périmètre pilote (ex. un conteneur non critique) avant migration logo/sidebar.

## 6.4 Stratégie de test visuel (avant/après) + points de contrôle

1. Captures avant/après sur :
   - logo au repos,
   - logo hover,
   - icône sidebar repos/hover/active,
   - un container générique (card test).
2. Vérifier :
   - absence de régression interaction (clic, focus, hitbox),
   - continuité de rendu couleurs/opacité,
   - absence de scintillement excessif,
   - comportement stable en `prefers-reduced-motion`.
3. Vérifier la non-régression CSS :
   - pas de conflit de nommage,
   - pas de fuite de style hors host.

---

# 7. Check-list de validation

- [x] Les fichiers liés au color shift existant sont identifiés.
- [x] Les keyframes existantes sont listées avec leurs noms exacts.
- [x] Les points de couplage SVG (IDs/paths/use/gradients) sont explicités.
- [x] Les éléments non trouvés sont indiqués explicitement.
- [x] Une API CSS `ColorShiftOverlay` réutilisable est proposée (classes + variables).
- [x] Le plan d’implémentation privilégie la non-régression et la coexistence.

---

# 8. Annexes : commandes de recherche utilisées

## Patterns recherchés
- `color shift`
- `colorshift`
- `color-shift`
- `hue-rotate`
- `mix-blend-mode`
- `overlay`
- `mask`
- `clip-path`
- `filter`
- `backdrop-filter`
- `keyframes`
- `logo`
- `gradient`
- `Z`
- `losange`

## Commandes exécutées

```bash
rg --files
```

```bash
rg -n "color shift|colorshift|color-shift|hue-rotate|mix-blend-mode|backdrop-filter|clip-path|mask|keyframes|overlay|gradient|losange|logo|\bZ\b" src app public docs --glob '!docs/color-shift-overlay.md'
```

```bash
rg -n "id=\"[A-Z]+\"|linearGradient|stop-color|white-bg_icon|red-content_icon|logoBG|logoW|RX|keyframes|animation" src/components src/assets/styles public/deferCss.css app/globals.css
```

```bash
rg -n "deferCss.css|desktopDeferNav.css|blue1|stopColor2|fillRGBAstart|opacityTide|logoBG|white-bg_icon|id\$=\"-RX\"|RX\]" src app public
```

```bash
sed -n '1,220p' ...
nl -ba ...
```
(plusieurs lectures ciblées de fichiers listés en section 3.1)
