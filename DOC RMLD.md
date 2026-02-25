# RMDL — Rich MarkDown Lite  
## Spécification v1.1 (mise à jour)

**Objectif :**  
Créer un langage de rédaction intermédiaire, plus riche que le Markdown et plus léger que le HTML, permettant une mise en forme typographique fine, lisible à l’écriture, facilement parseable sans bibliothèque externe, et sécurisé contre toute injection de code malveillant.

---

## Principes généraux

- Balises ouvertes et fermées par répétition du même tag, sans slash de fermeture.
- Tout est en minuscules : noms de tags et options (ex. `<h2>`, `<l>`, `<ol2>`, `ext`, `cta`).
- Une règle typographique = un rendu unique et déterministe.
- Le HTML final est reconstruit par le moteur : aucun HTML utilisateur n’est exécuté.
- Tous les caractères potentiellement dangereux sont échappés avant rendu.

---

## Notation et fermeture des tags

Un tag s’écrit `<tag>` et se ferme en répétant le même tag, sans slash.  
La fermeture n’embarque pas d’attributs : elle est toujours la plus courte possible.

### Exemples

```txt
<h2>Étape 1 — Cadrage & Stratégie <pi>(1–2 h)<pi><h2>
<lb>Objectif<lb> : Fixer le cap.
<s>Important<s> !
````

---

## Référentiel des tags (v1.1)

| Tag                 | Rôle                     | Notes                                                                                   |
| ------------------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `<h1> … <h1>`       | Titre principal          | Structure du document                                                                   |
| `<h2> … <h2>`       | Titre de section         | Structure et navigation                                                                 |
| `<h3> … <h3>`       | Sous-section             | Niveau inférieur à `<h2>`                                                               |
| `<s> … <s>`         | Strong                   | Mot ou segment fort (importance)                                                        |
| `<lb> … <lb>`       | Label                    | Préfixe sémantique (Objectif, Résultat, etc.)                                           |
| `<pi>(…)<pi>`       | Parenthèse typographique | Parenthèses normales, contenu interne italique ; peut devenir gras si couvert par `<s>` |
| `<a h="…"> … <a>`   | Lien / CTA               | Options : `ext`, `cta`                                                                  |
| `<ab d="…"> … <ab>` | Glossaire / abréviation  | Infobulle ; optionnel : `h="…"`                                                         |
| `<q> … <q>`         | Bloc quote               | Citation / mise en avant                                                                |
| `<l> … <l>`         | Liste à puces            | Contient des items `<i>`                                                                |
| `<ol> … <ol>`       | Liste numérotée          | Contient des items `<i>`                                                                |
| `<l2> … <l2>`       | Sous-liste puces         | Niveau 2                                                                                |
| `<ol2> … <ol2>`     | Sous-liste numérotée     | Niveau 2                                                                                |
| `<i> … <i>`         | Item de liste            | Élément de liste                                                                        |
| `lang … `           | Bloc de code             | Contenu opaque, non parsé                                                               |

---

# Règles typographiques

## 1) Strong (`<s>`)

* `<s>` exprime une importance sémantique (mot fort).
* Les caractères `?` et `!` peuvent être inclus dans `<s>`.

---

## 2) Symboles neutres (règle s0) — gérée en JavaScript

Pour simplifier l’écriture et verrouiller le rendu, certains caractères sont toujours rendus en normal (jamais en gras), même s’ils sont couverts par `<s>` ou `<lb>`.

**Toujours neutres :**
`: . , ; ( ) - – — --`

**Non neutres :**
`? !`

### Exemples

```txt
<s>Clarté :<s>  → ':' rendu en normal
<s>Incroyable !<s>  → '!' peut rester en gras
<s>Vraiment ?<s>  → '?' peut rester en gras
<s>Budget (prévisionnel)<s>
```

---

## 3) Parenthèse italique (`<pi>`)

* Par défaut, `<pi>` n’est pas en gras.
* Les parenthèses sont toujours rendues en style normal.
* Seul le contenu interne est en italique.
* Si `<s>` couvre `<pi>`, alors le contenu interne devient **gras + italique**.
* Les parenthèses ne sont jamais rendues en gras.

### Exemples

```txt
<s>Un récapitulatif clair<s> <pi>(1 page)<pi>
<s>Un récapitulatif clair <pi>(1 page)<pi><s>
```

---

## 4) Labels (`<lb>`)

* Préfixe sémantique (Objectif, Résultat, etc.).
* La ponctuation `:` doit être écrite hors `<lb>`.

### Exemple

```txt
<lb>Objectif<lb> : Fixer le cap.
```

---

# Liens, CTA et éléments interactifs (`<a>`)

Le tag `<a>` unifie les liens et les CTA.

### Syntaxe

```txt
<a h="/contact" cta>Me contacter<a>
<a h="https://wii-design.com" ext>Voir le site<a>
```

### Attributs

* `h="…"` : URL (obligatoire)
* `ext` : Lien externe sécurisé
* `cta` : Style bouton
* `dl` : Téléchargement (optionnel)

---

# Glossaire et abréviations (`<ab>`)

Permet une définition au survol et/ou un lien.

### Syntaxe

```txt
<ab d="Robot d’indexation des moteurs.">Crawler<ab>
<ab d="Robot d’indexation des moteurs." h="/glossaire#crawler">Crawler<ab>
```

### Attributs

* `d="…"` : Définition (échappée)
* `h="…"` : Lien optionnel

---

# Citations (`<q>`)

```txt
<q>On n’écrit pas du code. On crée une expérience.<q>
```

---

# Listes

### Liste à puces

```txt
<l>
  <i>Premier item<i>
  <i>Deuxième item<i>
<l>
```

### Liste numérotée

```txt
<ol>
  <i>Item 1<i>
  <i>Item 2<i>
<ol>
```

### Sous-liste

```txt
<i>Item parent
  <l2>
    <i>Sous item<i>
  <l2>
<i>
```

---

# Blocs de code — contenu opaque

```ts
const x: number = 1;
```

Aucun parsing RMDL n’est appliqué dans les blocs de code.

---

# Sécurité — anti-injection (obligatoire)

* Allowlist stricte des tags documentés.
* Échappement systématique du HTML.
* Reconstruction via AST.
* Validation stricte des URLs (refus `javascript:`, `data:`, `vbscript:`).
* Aucun parsing inline dans les blocs de code.

---

# Recommandation d’implémentation (sans bibliothèque externe)

1. Tokeniser (tags, texte, fences).
2. Parser en AST.
3. Appliquer un pass typographique (règle s0 + `<pi>`).
4. Rendre en HTML sécurisé.
5. Appliquer le CSS (heading, label, strong, pi, lien, quote, listes).

---

**Fin de spécification**