# RMDL — Rich MarkDown Lite

## Spécification v1.3.1 (complète, mise à jour)

> Version **v1.3.1** : clarifie **parenthèses**, **espaces**, **retours ligne**, et l’usage de **`<n>`** pour _neutraliser_ le gras/italique sur du texte “normal” (ex. parenthèses écrites à la main).

---

## Objectif

Créer un langage de rédaction intermédiaire, plus riche que le Markdown et plus léger que le HTML, permettant :

-   Une mise en forme typographique fine.
-   Une écriture lisible et naturelle.
-   Un parsing déterministe **sans bibliothèque externe**.
-   Une sécurité stricte contre toute injection.

---

## 1) Principes fondamentaux

-   Les balises sont **ouvertes et fermées par répétition du même tag** (sans slash) : `<h2>...<h2>`.
-   Tout est en **minuscules** (tags + attributs).
-   La **fermeture n’accepte jamais d’attributs**.
-   Le HTML final est **reconstruit depuis un AST**.
-   Aucun HTML utilisateur n’est exécuté.
-   Tous les caractères dangereux sont échappés.
-   Les blocs de code (fences) sont **opaques** : aucun parsing RMDL à l’intérieur.

---

## 2) Syntaxe des balises

### Format général

Un tag s’écrit `<tag>` et se ferme en répétant le même tag, sans slash :

`<tag>contenu<tag>`

Exemples :

```txt
<h2>Étape 1 — Cadrage & Stratégie<h2>
<s>Important<s>
<em>Italique<em>
<n>Normal (reset gras)<n>
```

Fermeture invalide (interdite) :

```txt
<a h="/x">Lien<a h="/y">
```

---

## 3) Référentiel des tags

### 3.1 Blocs (structure)

-   `<h1> … <h1>` : Titre principal.
-   `<h2> … <h2>` : Titre de section.
-   `<h3> … <h3>` : Sous-section.
-   `<q> … <q>` : Bloc de citation / mise en avant.
-   `<l> … <l>` : Liste à puces (enfants directs = `<i>`).
-   `<ol> … <ol>` : Liste numérotée (enfants directs = `<i>`).
-   `<l2> … <l2>` : Sous-liste à puces niveau 2 (uniquement dans un `<i>`).
-   `<ol2> … <ol2>` : Sous-liste numérotée niveau 2 (uniquement dans un `<i>`).
-   `<i> … <i>` : Item de liste.

### 3.2 Inline (dans le texte)

-   `<s> … <s>` : **Gras forcé** (strong).
-   `<em> … <em>` : **Italique forcé**.
-   `<n> … <n>` : **Normal forcé** (reset `font-weight`, neutralise le gras hérité).
-   `<lb> … <lb>` : Label sémantique (préfixe : Objectif, Résultat…).
-   `<pi> … <pi>` : Parenthèse typographique **auto** (voir §4.3).
-   `<a h="…"> … <a>` : Lien / CTA.
-   `<ab d="…"> … <ab>` : Glossaire / abréviation.

### 3.3 Whitespace contrôlé

-   `<br n="2"><br>` : Saut(s) de ligne forcé(s).
-   `<sp n="3"><sp>` : Espace(s) forcé(s).

### 3.4 Code (fences)

Fences Markdown standard :

```lang
contenu
```

Le contenu est **opaque** : aucun parsing RMDL à l’intérieur.

---

## 4) Règles typographiques

### 4.1 Gras forcé — `<s>`

-   Rend le contenu en gras.
-   Les caractères `?` et `!` peuvent rester en gras.
-   Les “symboles neutres” (règle s0) restent en normal **si** le renderer les wrap en `<n>` (cf. §4.2).

### 4.2 Règle s0 (neutralisation de symboles)

Objectif : certains caractères doivent rester **en poids normal**, même s’ils sont couverts par `<s>` ou `<lb>`.

-   Toujours neutres : `: . , ; ( ) - – — --`
-   Non neutres : `? !`

**Implémentation recommandée** : au rendu, envelopper ces symboles par `<span class="rmdl-n">…</span>` (ou équivalent).

> Important : si tu écris `(` `)` directement dans le texte et que tout le titre est dans `<s>…<s>`, ces parenthèses **hériteront** du gras (c’est normal).  
> Pour forcer des parenthèses “normales” dans un contexte gras, utilise **`<n>(...)<n>`** (cf. §4.5).

### 4.3 Parenthèses typographiques auto — `<pi>`

**v1.3+ :** `<pi>` ne doit **pas** inclure les parenthèses dans la source.

-   Le renderer ajoute automatiquement `(` et `)` au rendu.
-   Les parenthèses sont toujours rendues en style normal.
-   Le contenu interne est en italique.
-   Si `<s>` couvre `<pi>`, le contenu interne devient **gras + italique**.
-   Les parenthèses elles-mêmes ne deviennent jamais grasses.

Exemples :

```txt
<h3>Paiements jalonnés <pi>zéro effet tunnel<pi><h3>

<s>Un récapitulatif<s> <pi>1 page<pi>
<s>Un récapitulatif <pi>1 page<pi><s>
```

### 4.4 Italique forcé — `<em>`

-   Rend le contenu en italique.
-   Ne crée aucune parenthèse.
-   Utilisable partout en inline.

Exemple :

```txt
Texte avec <em>italique<em> et <s>gras<s>.
```

### 4.5 Normal forcé — `<n>`

-   Rend le contenu en poids normal (`font-weight: 400`), même si un parent est en gras.
-   Sert aussi à neutraliser ponctuation / segments dans une zone en gras.

Exemples :

```txt
<s>Important <n>:<n> à lire<s>
<h2><s>Étape X — ... <n>(1–2 h)<n><s><h2>
```

> À retenir : **si tu veux des parenthèses écrites à la main** (texte brut) mais **toujours normales**, tu dois les envelopper dans `<n>…<n>`.

---

## 5) Whitespace (espaces, retours à la ligne)

### 5.1 Retours à la ligne “naturels”

Politique recommandée (déterministe) :

-   `\n` (simple) → rendu comme **un espace** (continuité).
-   `\n\n` (double) → **nouveau paragraphe** (nouveau `<p>`).

### 5.2 Sauts de ligne forcés — `<br n="…"><br>`

-   Insère `n` sauts de ligne (`<br />`).
-   `n` optionnel, défaut = `1`.
-   `n` doit être un entier **borné** (recommandé : `1..20`).

Exemples :

```txt
Adresse<n>:<n><br n="2"><br>
69 rue Maurice Tronel<br><br>
67620 Le Havre
```

### 5.3 Espaces forcés — `<sp n="…"><sp>`

-   Insère `n` espaces forcés.
-   `n` optionnel, défaut = `1`.
-   Recommandation : rendu en NBSP (`\u00A0`) pour éviter la compression HTML.

Exemples :

```txt
<lb>Objectif<lb><sp n="2"><sp><n>:<n> Fixer le cap.
Avant parenthèse<sp n="1"><sp><pi>1–2 h<pi>
```

---

## 6) Liens, CTA et glossaire

### 6.1 Liens / CTA — `<a>`

Syntaxe :

```txt
<a h="/contact" cta>Me contacter<a>
<a h="https://wii-design.com" ext>Voir le site<a>
<a h="/docs/plaquette.pdf" dl>Télécharger<a>
```

Attributs :

-   `h="…"` : URL (**obligatoire**)
-   `ext` : lien externe (booléen)
-   `cta` : style bouton (booléen)
-   `dl` : téléchargement (booléen)

Règles :

-   Attributs en minuscules.
-   Les booléens (`ext`, `cta`, `dl`) n’ont **pas** de valeur.
-   Les valeurs sont entre **guillemets doubles**.
-   La fermeture ne contient jamais d’attributs.

### 6.2 Politique d’URL (sécurité)

Interdits : `javascript:`, `data:`, `vbscript:`.

Autorisés :

-   `http://`, `https://`
-   `mailto:`, `tel:`
-   `/...` (relatif)
-   `#...` (ancre)

### 6.3 Glossaire / abréviation — `<ab>`

Syntaxe :

```txt
<ab d="Robot d’indexation des moteurs.">crawler<ab>
<ab d="Robot d’indexation des moteurs." h="/glossaire#crawler">crawler<ab>
```

Attributs :

-   `d="…"` : définition (obligatoire)
-   `h="…"` : lien (optionnel, même policy que `<a>`)

---

## 7) Quotes — `<q>`

-   `<q>` est un bloc.
-   Peut contenir texte, retours à la ligne, et tags inline (`<s>`, `<em>`, `<pi>`, `<a>`, `<ab>`, `<n>`, `<sp>`, `<br>`).

---

## 8) Listes

Dans `<l>`, `<ol>`, `<l2>`, `<ol2>` :

-   Seuls les `<i>` sont autorisés comme enfants directs.
-   Tout texte hors `<i>` (indentation, lignes vides) est ignoré.
-   Items vides ignorés.
-   `<l2>` / `<ol2>` valides uniquement **dans** un `<i>`.

---

## 9) Blocs de code (fences) — contenu opaque

Dans un fence, **rien** n’est interprété :

```text
<pi>reste du texte brut<pi>
<sp n="6"><sp>
<script>alert("XSS")</script>
```

---

## 10) Cas de figure “parenthèses” (guide pratique)

### A) Parenthèses écrites à la main (texte brut)

-   Parent normal :

```txt
<h2>Étape A — Cadrage & Stratégie (1–2 h)<h2>
```

-   Parent en gras, parenthèses forcées normales :

```txt
<h2><s>Étape A — Cadrage & Stratégie <n>(1–2 h)<n><s><h2>
```

-   Parenthèses normales, intérieur en gras :

```txt
<h2>Étape B — Cadrage & Stratégie <n>(<s>1–2 h<s>)<n><h2>
```

-   Parenthèses normales, intérieur en italique :

```txt
<h2>Étape C — Cadrage & Stratégie <n>(<em>1–2 h<em>)<n><h2>
```

### B) Parenthèses typographiques auto (recommandé)

-   Auto + italique :

```txt
<h2>Étape E — Cadrage & Stratégie <pi>1–2 h<pi><h2>
```

-   Auto + gras+italique :

```txt
<h2>Étape F — Cadrage & Stratégie <s><pi>1–2 h<pi><s><h2>
```

-   Auto + reset normal à l’intérieur :

```txt
<h2><s>Étape G — Cadrage & Stratégie <pi><n>1–2 h<n><pi><s><h2>
```

---

## 11) Points d’attention

-   Ne pas écrire `<pi>(... )<pi>` : `<pi>` ajoute déjà les parenthèses.
-   Si tu écris `(...)` dans un contexte gras, elles héritent du gras → utilise `<n>(...)<n>` si tu veux les neutraliser.
-   `<sp>` et `<br>` doivent être fermés en répétant le tag.
-   `n` (sur `<sp>` / `<br>`) : entier borné recommandé `1..20`.

---

## 12) Classes CSS attendues (renderer)

-   `.rmdl-h1`, `.rmdl-h2`, `.rmdl-h3`
-   `.rmdl-p`
-   `.rmdl-lb`
-   `.rmdl-n`
-   `.rmdl-pi`, `.rmdl-paren`
-   `.rmdl-list`, `.rmdl-l`, `.rmdl-ol`, `.rmdl-l2`, `.rmdl-ol2`, `.rmdl-li`
-   `.rmdl-quote`, `.rmdl-quote-content`
-   `.rmdl-code`
-   `.rmdl-a`, `.rmdl-a.rmdl-cta`
-   `.rmdl-ab` + tooltip `[data-def]`

---

Fin de spécification v1.3.1
