# RMDL — Rich MarkDown Lite

## Spécification v1.3 (complète et mise à jour)

---

## Objectif

Créer un langage de rédaction intermédiaire, plus riche que le Markdown et plus léger que le HTML, permettant :

-   Une mise en forme typographique fine.
-   Une écriture lisible et naturelle.
-   Un parsing déterministe sans bibliothèque externe.
-   Une sécurité stricte contre toute injection.

---

## 1. Principes fondamentaux

-   Les balises sont ouvertes et fermées par répétition du même tag (sans slash).
-   Tout est en minuscules (tags + attributs).
-   La fermeture n’accepte jamais d’attributs.
-   Le HTML final est reconstruit depuis un AST.
-   Aucun HTML utilisateur n’est exécuté.
-   Tous les caractères dangereux sont échappés.
-   Les blocs de code (fences) sont opaques : aucun parsing RMDL à l’intérieur.

---

## 2. Syntaxe des balises

### 2.1 Format général

Un tag s’écrit `<tag>` et se ferme en répétant le même tag, sans slash :

`<tag>contenu<tag>`

Exemple :

```txt
<h2>Titre de section<h2>
```

Fermeture invalide (interdite) :

```txt
<a h="/x">Lien<a h="/y">
```

---

## 3. Référentiel des tags

### 3.1 Structure (blocs)

-   `<h1> … <h1>` : Titre principal.
-   `<h2> … <h2>` : Titre de section.
-   `<h3> … <h3>` : Sous-section.

### 3.2 Inline (dans le texte)

-   `<s> … <s>` : Gras forcé (strong).
-   `<em> … <em>` : Italique forcé.
-   `<n> … <n>` : Normal forcé (reset `font-weight`, même si un parent est en gras).
-   `<pi> … <pi>` : Parenthèse typographique (voir règle §4.3).
-   `<a h="…"> … <a>` : Lien / CTA (voir §6).
-   `<ab d="…"> … <ab>` : Glossaire / abréviation (voir §6).
-   `<lb> … <lb>` : Label sémantique (préfixe, ex. “Objectif”).

### 3.3 Lists (blocs)

-   `<l> … <l>` : Liste à puces (contient des `<i>`).
-   `<ol> … <ol>` : Liste numérotée (contient des `<i>`).
-   `<l2> … <l2>` : Sous-liste puces niveau 2 (dans un `<i>`).
-   `<ol2> … <ol2>` : Sous-liste numérotée niveau 2 (dans un `<i>`).
-   `<i> … <i>` : Item de liste (enfant direct de `<l>/<ol>/<l2>/<ol2>`).

### 3.4 Whitespace contrôlé

-   `<br n="2"><br>` : Saut(s) de ligne forcé(s) (voir §5.3).
-   `<sp n="3"><sp>` : Espace(s) forcé(s) (voir §5.4).

### 3.5 Code (fences)

Fences Markdown standard :

```lang
contenu
```

Le contenu est opaque, non parsé.

---

## 4. Règles typographiques

### 4.1 Gras forcé `<s>`

-   Rend le contenu en gras.
-   Les caractères `?` et `!` peuvent rester en gras.
-   Les symboles neutres (règle s0) restent en normal.

### 4.2 Normalisation (règle s0)

Pour simplifier l’écriture et verrouiller le rendu, certains caractères sont toujours rendus en normal (jamais en gras), même s’ils sont couverts par `<s>` ou `<lb>`.

-   Toujours neutres : `: . , ; ( ) - – — --`
-   Non neutres : `? !`

### 4.3 Parenthèse typographique `<pi>`

**v1.3 :** `<pi>` ne doit pas inclure les parenthèses dans la source.

-   Le moteur ajoute automatiquement `(` et `)` au rendu.
-   Les parenthèses sont toujours rendues en style normal.
-   Le contenu interne est en italique.
-   Si `<s>` couvre `<pi>`, alors le contenu interne devient gras + italique.
-   Les parenthèses elles-mêmes ne deviennent jamais grasses.

Exemples :

```txt
<h3>Paiements jalonnés <pi>zéro effet tunnel<pi><h3>
<s>Un récapitulatif<s> <pi>1 page<pi>
<s>Un récapitulatif <pi>1 page<pi><s>
```

### 4.4 Italique forcé `<em>`

-   Rend le contenu en italique, sans ajouter de parenthèses.
-   Peut être utilisé partout en inline.

Exemple :

```txt
Texte avec <em>italique<em> et <s>gras<s>.
```

### 4.5 Normal forcé `<n>`

-   Rend le contenu en “poids normal” (reset `font-weight`), même si un parent est en gras.
-   Utile pour neutraliser un segment dans une zone en gras (en plus de la règle s0).

Exemple :

```txt
<s>Important <n>:<n> à lire<s>
```

---

## 5. Règles whitespace (espaces, retours à la ligne)

### 5.1 Texte (hors lists et hors code)

-   Les suites d’espaces / tabulations sont normalisées (collapsées) selon la politique du renderer.
-   Un retour à la ligne simple (LF) peut être traité comme un espace.
-   Une ligne vide (double LF) crée un nouveau paragraphe.

Recommandation déterministe : `\n` → espace, `\n\n` → nouveau paragraphe.

### 5.2 Dans les titres

Même règle que le texte : `\n` → espace, `\n\n` → nouveau bloc.

### 5.3 Sauts de ligne forcés `<br n="…"><br>`

-   Permet d’insérer des sauts de ligne explicites.
-   `n` est optionnel, par défaut `1`.
-   Le moteur rend `n` fois `<br />`.

Exemple :

```txt
Adresse :<br n="2"><br>
69 rue Maurice Tronel
```

### 5.4 Espaces forcés `<sp n="…"><sp>`

-   Permet d’insérer `n` espaces forcés.
-   `n` est optionnel, par défaut `1`.
-   Recommandation : rendu en espaces insécables (`\u00A0`) pour éviter la compression HTML.

Exemple :

```txt
<lb>Objectif<lb><sp n="2"><sp>: Fixer le cap.
```

---

## 6. Liens, CTA et glossaire

### 6.1 Liens `<a>`

Syntaxe :

```txt
<a h="/contact" cta>Me contacter<a>
<a h="https://wii-design.com" ext>Voir le site<a>
```

Attributs :

-   `h="…"` : URL (obligatoire).
-   `ext` : Lien externe (target blank + rel sécurisé).
-   `cta` : Rend le lien comme un bouton.
-   `dl` : Téléchargement (optionnel).

Règles d’attributs :

-   Attributs en minuscules.
-   Les booléens (`ext`, `cta`, `dl`) n’ont pas de valeur.
-   Les attributs à valeur exigent des guillemets doubles : `h="…"`.
-   La fermeture ne contient jamais d’attributs.

Politique d’URL :

-   Schémas autorisés : `http`, `https`, `mailto`, `tel`, `/` (relatif), `#` (ancre).
-   Schémas interdits : `javascript:`, `data:`, `vbscript:`.

### 6.2 Glossaire / abréviation `<ab>`

Syntaxe :

```txt
<ab d="Robot d’indexation des moteurs.">Crawler<ab>
<ab d="Robot d’indexation des moteurs." h="/glossaire#crawler">Crawler<ab>
```

Attributs :

-   `d="…"` : Définition (obligatoire).
-   `h="…"` : Lien optionnel (mêmes règles de sécurité que `<a>`).

---

## 7. Quotes `<q>`

-   `<q>` est un bloc de citation.
-   Peut contenir du texte, des retours à la ligne, et des tags inline (`<s>`, `<em>`, `<pi>`, `<a>`, `<ab>`, `<n>`).

Exemple :

```txt
<q>
Un bon cadrage réduit les allers-retours et sécurise le budget.
<pi>On évite de “coder à l’aveugle”.<pi>
<q>
```

---

## 8. Listes

### 8.1 Règles de validité (anti `<li>` vides)

À l’intérieur de `<l>`, `<ol>`, `<l2>`, `<ol2>` :

-   Seuls les tags `<i>` sont autorisés comme enfants directs.
-   Tout texte hors `<i>` (y compris indentation, lignes vides, espaces) doit être ignoré par le parseur.
-   Les items vides (ou whitespace-only) sont ignorés.
-   `<l2>` et `<ol2>` ne sont valides que dans un `<i>`.

Exemple valide :

```txt
<l>
<i>Premier item<i>
<i>Deuxième item<i>
<l>
```

---

## 9. Blocs de code (fences) — contenu opaque

Aucun parsing RMDL n’est appliqué dans les fences.

Exemple (doit rester brut) :

```text
<s>pas un strong<s>
<pi>pas une parenthèse auto<pi>
<script>alert("XSS")</script>
```

---

## 10. Sécurité

-   Allowlist stricte.
-   AST obligatoire.
-   Échappement HTML systématique.
-   Validation stricte des URLs.
-   Aucune exécution inline.
-   Isolation complète des blocs de code.

Nettoyage recommandé avant parsing :

-   Supprimer / ignorer les patterns externes non-RMDL (ex. `:contentReference[...]`).

---

## 11. Pipeline d’implémentation recommandé

1. Nettoyage pré-parse.
2. Tokenisation (tags, texte, fences).
3. Parsing vers AST.
4. Pass typographique (s0 + `<pi>` + normalisation).
5. Rendu HTML sécurisé.
6. Application CSS (classes par type : heading, label, strong, em, pi, link/cta, quote, listes, normal).

---

Fin de spécification v1.3
