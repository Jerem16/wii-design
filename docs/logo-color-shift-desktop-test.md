# Plan de test — Logo Desktop (color shift)

## Pré-requis
- Démarrer l'application en local (Next.js).
- Utiliser un viewport Desktop (pas de mode mobile).
- Navigateur: Chrome Desktop + Firefox Desktop.

## Étapes de test
1. Ouvrir la page de test: `/debug/logo-test`.
2. Vérifier la présence:
   - Navbar Desktop avec le logo principal.
   - Sidebar avec les icônes visibles.
   - Deux logos supplémentaires affichés dans la page (3 logos au total).
3. Confirmer que le panneau debug en bas à droite indique **PASS**.

## Scénarios
- Hover sur le logo (Navbar + logos supplémentaires) : l’animation de color shift reste stable.
- Hover sur les liens de navigation : aucune altération du logo ou des icônes.
- Scroll de la page : pas de glitch, animation stable.
- Navigation Next.js: aller sur `/about` puis revenir sur `/debug/logo-test`.
- Hard refresh (Ctrl/Cmd + Shift + R).
- Afficher/masquer la sidebar si applicable.

## Attendu visuel
- Color shift stable et identique entre les 3 logos.
- Aucune variation inattendue sur les icônes de la sidebar.
- Pas de glitch ou de changement de teinte au hover des autres éléments.

## Attendu technique
- Le panneau debug en bas à droite affiche **PASS**.
- Aucun message d’erreur dans la console relatif aux IDs SVG non préfixés ou aux duplications.
