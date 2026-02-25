# RMDL — Rich MarkDown Lite

## Spécification v1.3

## Principes

- Balises ouvertes/fermées par répétition du même tag (`<h2>...<h2>`), jamais avec `</...>`.
- Allowlist stricte : seuls les tags documentés sont interprétés, sinon c'est du texte échappé.
- Parsing déterministe (sans dépendance externe), AST typé strictement.
- Les fences de code ```` ```lang ... ``` ```` sont opaques : aucun parsing inline à l'intérieur.

## Tags supportés

### Blocs

- `<h1>...<h1>`, `<h2>...<h2>`, `<h3>...<h3>`
- `<q>...<q>`
- `<l>...<l>`, `<ol>...<ol>`, `<l2>...<l2>`, `<ol2>...<ol2>` avec items `<i>...<i>`
- Fences code : ```lang

### Inline

- `<s>...<s>` : gras forcé
- `<em>...<em>` : italique forcé (fonctionne dans tous les contextes)
- `<n>...<n>` : normal forcé (`font-weight: 400`)
- `<lb>...<lb>` : label
- `<pi>...<pi>` : parenthèses auto + contenu en italique
- `<a h="..." [ext] [cta] [dl]>...<a>`
- `<ab d="..." [h="..."]>...<ab>`
- `<sp n="x"><sp>` : espaces forcés (NBSP)
- `<br n="x"><br>` : retours forcés

## Attributs

- `<a>` : `h` (string), booléens `ext`, `cta`, `dl`
- `<ab>` : `d` (définition), `h` (href optionnel)
- `<sp>` / `<br>` : `n` optionnel
- `n` est normalisé en entier borné `[1..20]`.
  - absent => `1`
  - invalide/non numérique => `1`

## URL policy

Refusées : `javascript:`, `data:`, `vbscript:`.

Autorisées :

- `http://`
- `https://`
- `mailto:`
- `/...`
- `#...`

## Règles de rendu v1.3

- `<sp n="4"><sp>` produit 4 `\u00A0`.
- `<br n="2"><br>` produit 2 `<br />`.
- `<pi>` ajoute automatiquement `(` et `)` via le renderer.
- Le contenu de `<pi>` est italique.
- Si `<s>` couvre `<pi>`, le contenu interne devient gras+italique.
- Les parenthèses de `<pi>` restent normales (`font-weight: 400 !important`) même sous `<strong>`.
- `<n>` annule l'héritage gras localement.

## Classes CSS attendues

- `.rmdl-h1`, `.rmdl-h2`, `.rmdl-h3`
- `.rmdl-p`
- `.rmdl-lb`
- `.rmdl-em`
- `.rmdl-n`
- `.rmdl-pi`, `.rmdl-paren`
- `.rmdl-list`, `.rmdl-l`, `.rmdl-ol`, `.rmdl-l2`, `.rmdl-ol2`, `.rmdl-li`
- `.rmdl-quote`, `.rmdl-quote-content`
- `.rmdl-code`, `.rmdl-code code`
- `.rmdl-a`, `.rmdl-a.rmdl-cta`
- `.rmdl-ab` (+ tooltip `[data-def]`)

## Exemples de test

```txt
<h2>Étape A — Cadrage & Stratégie (1–2 h)<h2>
<h2>Étape C — ... (<em>1–2 h<em>)<h2>
<h2>... <pi>1–2 h<pi><h2>
<h2><s>... <pi><n>1–2 h<n><pi><s><h2>
<sp n="4"><sp>aligné
Ligne A<br n="2"><br>Ligne B
```

```text
Dans un fence <em>n'est pas</em> parsé.
<sp n="6"><sp> reste du texte brut.
```
