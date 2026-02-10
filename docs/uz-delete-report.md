# UZ delete report

## Supprimés
- src/assets/data/utils/attachContent.ts
- src/components/99-Svg_Icon/GlobalLogoDefs.jsx
- src/components/99-Svg_Icon/SearchClose.jsx
- src/components/99-Svg_Icon/sideBar/preload/R1.jsx
- src/components/99-Svg_Icon/sideBar/preload/R2.jsx
- src/components/99-Svg_Icon/sideBar/preload/R3.jsx
- src/components/99-Svg_Icon/sideBar/preload/R4.jsx
- src/components/99-Svg_Icon/sideBar/preload/R5.jsx
- src/components/99-Svg_Icon/sideBar/preload/R6.jsx
- src/components/99-Svg_Icon/sideBar/preload/W1.jsx
- src/components/99-Svg_Icon/sideBar/preload/W2.jsx
- src/components/99-Svg_Icon/sideBar/preload/W3.jsx
- src/components/99-Svg_Icon/sideBar/preload/W4.jsx
- src/components/99-Svg_Icon/sideBar/preload/W5.jsx
- src/components/99-Svg_Icon/sideBar/preload/W6.jsx
- src/components/99-Svg_Icon/social/Twitter.jsx
- src/components/99-Svg_Icon/utils/Arrow.jsx
- src/components/99-Svg_Icon/utils/CheckedIcon.jsx
- src/components/Legal/DevLegalNotices.tsx
- src/components/Legal/PrivacyPolicy.tsx
- src/components/Legal/RegistrationAndVAT.tsx
- src/components/Legal/TermsOfUse.tsx
- src/components/button/Button.tsx
- src/components/error-404/Error401.jsx
- src/components/shared/data/index.ts
- src/components/shared/index.ts
- src/features/desktop-nav/adaptableMenuUtils.ts
- src/features/desktop-nav/core/navigation/hooks/useDesktopInitialScroll.ts
- src/features/desktop-nav/core/navigation/utils/addScrollListener.ts
- src/features/desktop-nav/data/sections.ts
- src/features/desktop-nav/index.ts
- src/features/desktop-nav/useAdaptableMenu.ts
- src/features/desktop-nav/useAdaptableResize.ts
- src/features/mobile-nav/components/MobileNavWithProviders.tsx
- src/features/mobile-nav/types/scrollSmoothWorker.ts
- src/features/mobile-nav/types/scrollWorker.ts
- src/hooks/useTimeoutWorker.ts
- src/utils/addScrollListener.ts
- src/utils/getSectionIds.ts
- src/utils/localStorage/boolean-convertor/useLocalStorageBoolean.tsx

## Restaurés car nécessaire
- Aucun

## Résultats de validation
- `yarn tsc --noEmit`: OK
- `yarn build`: OK

## Check-list manuelle (no-régression runtime)
1. Ouvrir `/debug/routes`.
2. Cliquer chaque lien de route listé sur la page `/debug/routes`.
3. Vérifier pour chaque page :
   - rendu complet sans erreur visuelle bloquante,
   - absence d'erreur console bloquante,
   - navigation retour/avant OK.
4. Vérifier spécifiquement les routes légales :
   - `/informations-legales`
   - `/mentions-legales`
5. Vérifier les routes avec composants dynamiques/interactifs :
   - `/search`
   - `/connection`
   - `/reservation`
