# Guide des styles SCSS

Ce guide décrit l'organisation des styles SCSS et où intervenir selon les composants.

## Structure générale

- `00_utils/` : variables, fonctions et mixins partagés.
- `01_base/` : reset + styles globaux.
- `02_components/` : composants (header, navbar, sidebar, mobile nav, etc.).
- `03_pages/` : styles de pages.
- `04_rmdl/` : styles dédiés au rendu éditorial (RMDL).
- `main.scss` : point d'entrée des imports pour cette base de styles.

> Note : une base parallèle existe dans `src/adaptable/src/assets/styles/` avec une structure similaire.

## Où modifier quoi ?

- **Navbar / Header** :
  - Desktop : `02_components/header/_header.scss`, `02_components/header/_desktop-adaptable-nav.scss`.
  - Mobile : `02_components/header/mobile/_index.scss`, `_nav.scss`, `_mnav.logo.scss`.
- **Sidebar** : `02_components/header/_sidebar.scss`.
- **Logo** : `02_components/header/_logo.scss`.
- **Pages** : `03_pages/_page.scss`.
- **RMDL** : `04_rmdl/_rmdl.scss`.

Pour la base **adaptable** :

- **Header / Navbar** : `src/adaptable/src/components/header/_header.scss`.
- **Footer** : `src/adaptable/src/components/footer/_footer.scss`.
- **Home / Slider** : `src/adaptable/src/home/slider/_slider*.scss`.
- **Home / About** : `src/adaptable/src/home/about/_about.scss`.
- **Home / Services** : `src/adaptable/src/home/service/_services.scss` + sous-parties `beginner/` et `confirmed/`.
- **Home / Contact** : `src/adaptable/src/home/contact-section/_contact.scss` + `contactForm/_form.scss`.

## Convention de commentaires

Chaque fichier SCSS suit le même en-tête et une table des matières :

```scss
/* ==========================================================================
   FILE: <path>
   ROLE: <global | layout | component | utility | page>
   SCOPE: <ex: Navbar, Menu, Sidebar>
   DEPENDENCIES: <variables/mixins/other partials>
   BREAKPOINTS:
     - Mobile: default
     - Desktop: >= 1024px
   NOTES: <particularités / pièges / why>
   ========================================================================== */

/* --- Table of contents -----------------------------------------------------
  1) Tokens / variables locales (si applicable)
  2) Base / structure
  3) States (hover, focus, active, open)
  4) Animations
  5) Responsive - Desktop (>= 1024px)
  6) Overrides / exceptions (si vraiment nécessaire)
--------------------------------------------------------------------------- */
```

## Breakpoints

- **Mobile-first** par défaut.
- **Desktop** : `@media (min-width: 1024px)` quand applicable.
- Certains fichiers historiques utilisent des `max-width` (ex: 1390px, 992px). Ils sont conservés pour éviter les régressions.
