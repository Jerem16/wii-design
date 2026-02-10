# Audit d'usage `src/` (validation UZ unitaire)

## Contexte de cette passe
- Validation réalisée **un fichier à la fois** pour la liste `Unused confirmé (haute confiance)` initiale.
- Neutralisation temporaire appliquée uniquement aux fichiers `.ts/.tsx/.js/.jsx` avec le contenu exact : `export {};`
- Après chaque test : restauration immédiate par `git restore <fichier>`.
- Vérifications exécutées à chaque itération :
  - `yarn tsc --noEmit`
  - `yarn build` (uniquement si `tsc` passait)

## Résultat final UZ (après revalidation 1 par 1)

### UNUSED validé (40)
- `src/assets/data/utils/attachContent.ts`
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

### REJETÉ car cassait build/tsc (donc utilisés) (5)
- `src/components/00-Header/NavLink.jsx`
- `src/components/00-Header/Navbar.jsx`
- `src/components/shared/logo/index.ts`
- `src/components/shared/nav-link/index.ts`
- `src/utils/useIsBrowser.ts`

### NON TESTÉ (type fichier ou hors périmètre neutralisation)
- `src/assets/data/description-des services.txt` — fichier texte, hors neutralisation TS/JS.
- `src/assets/data/rmdl/README.md` — documentation.
- `src/assets/data/rmdl/pages/etape-1.rmdl` — format RMDL, hors neutralisation TS/JS.
- `src/assets/styles/**` et tout `.css/.scss` — explicitement exclus du périmètre.
- `public/**` — explicitement exclu du périmètre.

## Routes `app/` confirmées
- Inventaire complet : `docs/app-routes.md`
- Page de parcours manuel : `/debug/routes`

## Traçabilité brute
- Résultats détaillés par fichier : `docs/uz-validation-results.json`
