# Rapport — Debug Scroll Spy Offset (Desktop)

## Contexte
- Objectif : expliquer pourquoi l’offset Scroll Spy ne fonctionne pas en **desktop**, avec preuves factuelles via logs instrumentés.
- Debug activable via :
  - `localStorage.setItem("DEBUG_SCROLL_SPY","1"); location.reload();`
  - ou `?debugScrollSpy=1` dans l’URL.

## Pages testées
- Desktop (>= 1024px)
  1. `/` — scroll sections s1 → s4
  2. `/services` — scroll autour de `#avec-permis` et `#sans-permis`
  3. `/achievements` — scroll autour des ancres (novice/expert, etc.)
- Mobile (< 1024px)
  1. `/`
  2. `/services`
  3. `/achievements`

> ⚠️ Les observations ci-dessous sont **à compléter** après exécution des scénarios avec logs activés.

---

## 1) Résultats lecture CSS vars (preuves)
- Log attendu : `[SCROLL_SPY_DEBUG] offset:css-vars` (mount + resize).
- Champs à relever :
  - `candidates["--scroll-offset"]` (raw + px)
  - `candidates["--scroll-spy-offset"]` (raw + px)
  - `sourceVarName` (var finalement considérée)

**Desktop**
- `--scroll-offset` raw: _[à compléter]_ — px: _[à compléter]_
- `--scroll-spy-offset` raw: _[à compléter]_ — px: _[à compléter]_
- `sourceVarName`: _[à compléter]_

**Mobile**
- `--scroll-offset` raw: _[à compléter]_ — px: _[à compléter]_
- `--scroll-spy-offset` raw: _[à compléter]_ — px: _[à compléter]_
- `sourceVarName`: _[à compléter]_

---

## 2) Scroll input (preuves sur calcul)
- Log attendu : `[SCROLL_SPY_DEBUG] scroll:input` (throttlé)
- Champs clés :
  - `rawScrollY`
  - `offsetPx` (valeur utilisée)
  - `thresholdPx`
  - `effectiveScrollY`
  - `scrollInputSent.scrollY`

**Desktop**
- Exemple log : _[à compléter]_

**Mobile**
- Exemple log : _[à compléter]_

---

## 3) Worker protocol & outputs
- Log attendu : `[SCROLL_SPY_DEBUG] worker:protocol` (une seule fois)
- Log attendu : `[SCROLL_SPY_DEBUG] worker:output` (throttlé)

**Protocole**
- `inKeys`: _[à compléter]_ 
- `workerMessageKeys`: _[à compléter]_ 
- `outKeys`: _[à compléter]_

**Desktop — outputs**
- `workerOut.currentSectionId`: _[à compléter]_
- `normalizedActiveId`: _[à compléter]_
- `didChange`: _[à compléter]_

---

## 4) Propagation menu (activeSection / hash / classes)
- Log attendu : `[SCROLL_SPY_DEBUG] menu:active-change` (activeId change)
- Log attendu : `[SCROLL_SPY_DEBUG] menu:dom-proof` (throttlé)
- Log attendu : `[SCROLL_SPY_DEBUG] menu:active-change:post`

**Desktop**
- `activeId` → `activeSectionBefore/After` : _[à compléter]_
- `hashBefore` → `hashAfter` : _[à compléter]_
- `activeSubmenuCount` / `activeHeadCount` : _[à compléter]_
- `submenuSamples` / `headSamples` : _[à compléter]_

---

## 5) Cause racine (prouvée)
> **À compléter après exécution des scénarios**

- Cause racine : _[à compléter avec preuve]_
- Preuve (logs + champs) : _[à compléter]_

---

## 6) Fix minimal recommandé (sans implémentation)
> **À compléter après exécution des scénarios**

- Fix proposé : _[à compléter]_
- Impacts attendus : _[à compléter]_

---

## 7) Points de vigilance
- Resize et recalcul des sections.
- Contenu dynamique modifiant la hauteur des sections.
- `replaceState` vs scroll position réelle.
- Offsets mobiles/desktop divergents.

---

## 8) Observations détaillées
- Desktop `/` : _[à compléter]_
- Desktop `/services` : _[à compléter]_
- Desktop `/achievements` : _[à compléter]_
- Mobile `/` : _[à compléter]_
- Mobile `/services` : _[à compléter]_
- Mobile `/achievements` : _[à compléter]_
