# Audit d'usage `src/` (entrypoints `app/`)

## Résumé chiffré
- Total fichiers sous `src/` : **218**
- `used` (atteignables depuis `app/**`) : **132**
- `unused confirmé` (neutralisation + `yarn tsc --noEmit` + `yarn build` OK) : **45**
- `unused probable` (non atteignable + aucune occurrence `rg`) : **5**
- `uncertain` : **36**

## Méthode
- Graphe d'imports construit à partir des entrypoints Next (`page/layout/loading/error/not-found/route`) et `app/MetaData.js`.
- Imports pris en compte : `import`, `export ... from`, `require()`, `import("littéral")` avec résolution relative + aliases `tsconfig.paths`.
- Validation par neutralisation temporaire (`export {};`) sur candidats `.ts/.tsx/.js/.jsx` (hors CSS/SCSS/public), puis checks :
  - `yarn tsc --noEmit`
  - `yarn build`

## Unused confirmé (haute confiance)
- `src/assets/data/utils/attachContent.ts`
- `src/components/00-Header/NavLink.jsx`
- `src/components/00-Header/Navbar.jsx`
- `src/components/99-Svg_Icon/GlobalLogoDefs.jsx`
- `src/components/99-Svg_Icon/SearchClose.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R1.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R2.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R3.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R4.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R5.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/R6.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W1.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W2.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W3.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W4.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W5.jsx`
- `src/components/99-Svg_Icon/sideBar/preload/W6.jsx`
- `src/components/99-Svg_Icon/social/Twitter.jsx`
- `src/components/99-Svg_Icon/utils/Arrow.jsx`
- `src/components/99-Svg_Icon/utils/CheckedIcon.jsx`
- `src/components/Legal/DevLegalNotices.tsx`
- `src/components/Legal/PrivacyPolicy.tsx`
- `src/components/Legal/RegistrationAndVAT.tsx`
- `src/components/Legal/TermsOfUse.tsx`
- `src/components/button/Button.tsx`
- `src/components/error-404/Error401.jsx`
- `src/components/shared/data/index.ts`
- `src/components/shared/index.ts`
- `src/components/shared/logo/index.ts`
- `src/components/shared/nav-link/index.ts`
- `src/features/desktop-nav/adaptableMenuUtils.ts`
- `src/features/desktop-nav/core/navigation/hooks/useDesktopInitialScroll.ts`
- `src/features/desktop-nav/core/navigation/utils/addScrollListener.ts`
- `src/features/desktop-nav/data/sections.ts`
- `src/features/desktop-nav/index.ts`
- `src/features/desktop-nav/useAdaptableMenu.ts`
- `src/features/desktop-nav/useAdaptableResize.ts`
- `src/features/mobile-nav/components/MobileNavWithProviders.tsx`
- `src/features/mobile-nav/types/scrollSmoothWorker.ts`
- `src/features/mobile-nav/types/scrollWorker.ts`
- `src/hooks/useTimeoutWorker.ts`
- `src/utils/addScrollListener.ts`
- `src/utils/getSectionIds.ts`
- `src/utils/localStorage/boolean-convertor/useLocalStorageBoolean.tsx`
- `src/utils/useIsBrowser.ts`

## Unused probable (moyenne confiance)
- `src/assets/data/description-des services.txt`
- `src/assets/data/rmdl/README.md`
- `src/assets/data/rmdl/pages/etape-1.rmdl`
- `src/assets/styles/04_rmdl/README.md`
- `src/assets/styles/README.md`

## Uncertain / à vérifier
- `src/assets/data/iconsPathsData.json` — occurrences trouvées par nom de fichier
- `src/assets/data/navLinks.json` — occurrences trouvées par nom de fichier
- `src/assets/data/rmdl/glossary.json` — occurrences trouvées par nom de fichier
- `src/rmdl/ast.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/compiler/emit-tsx.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/compiler/escape-tsx.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/components/rmdl-ab.tsx` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/components/rmdl-code.tsx` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/components/rmdl-link.tsx` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/lexer.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/parser.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/sanitize.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/schema.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/url-policy.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/rmdl/validate.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/workers/scrollSmoothWorker.d.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/workers/scrollWorker.d.ts` — neutralisation casse yarn tsc/yarn build (imports scripts/types workers)
- `src/assets/styles/00_utils/_fonts.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/00_utils/_functions.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/00_utils/_mixins.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/00_utils/_variables.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/01_base/_general.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/01_base/_media-query.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/01_base/_navToggler.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/_desktop-adaptable-nav.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/_header.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/_logo.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/_sidebar.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/mobile/_index.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/mobile/_mnav.logo.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/02_components/header/mobile/_nav.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/03_pages/_page.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/04_rmdl/_rmdl.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/05_animations/_animatios.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/assets/styles/main.css.map` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique
- `src/components/button/_button.scss` — hors périmètre de neutralisation (CSS/SCSS) ou artefact statique

## Notes
- CSS/SCSS et `public/**` non modifiés, non supprimés.
- Limite connue : les assets/références string-based peuvent échapper au graphe statique.
