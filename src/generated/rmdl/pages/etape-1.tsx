/**
 * Page RMDL générée (Option A).
 * Ne pas modifier à la main.
 */

import React from "react";
import { RmdlHeading } from "../../../rmdl/components/rmdl-heading";
import { RmdlList } from "../../../rmdl/components/rmdl-list";
import { RmdlLink } from "../../../rmdl/components/rmdl-link";
import { RmdlAb } from "../../../rmdl/components/rmdl-ab";
import { RmdlQuote } from "../../../rmdl/components/rmdl-q";
import { RmdlCode } from "../../../rmdl/components/rmdl-code";

export default function Page(): React.ReactElement {
  const __slug = "etape-1";
  void __slug; // slug dispo si besoin
  return (
    <React.Fragment>
    <RmdlHeading level={1} key={0}>
      {"RMDL v1.3 — Démo complète"}
    </RmdlHeading>
    <p className="rmdl-p" key={1}>
      <span key={0} className="rmdl-lb">{"But"}</span>
      {" "}
      <span key={2} className="rmdl-n">{":"}</span>
      {" Montrer tous les cas d’usage (titres, styles inline, espaces, sauts de ligne, listes, liens, glossaire, quote, code opaque)."}
    </p>
    <RmdlQuote key={2}>
      <p className="rmdl-p" key={0}>
        <strong key={0}>{"Rappel"}</strong>
        {" "}
        <span key={2} className="rmdl-n">{":"}</span>
        {" Le rendu HTML est reconstruit par le moteur, aucun HTML utilisateur n’est exécuté."}
        {" "}
      </p>
    </RmdlQuote>
    <RmdlHeading level={2} key={3}>
      {"Étape 1 — Cadrage & Stratégie"}
    </RmdlHeading>
    <p className="rmdl-p" key={4}>
      <span key={0} className="rmdl-lb">{"Tests parenthèses (même titre, mêmes mots)"}</span>
      {" "}
      <span key={2} className="rmdl-n">{":"}</span>
    </p>
    <p className="rmdl-p" key={5}>
      <span key={0} className="rmdl-lb">{"A — Parenthèses normales + intérieur normal (pas italique, pas gras)"}</span>
      {" "}
    </p>
    <RmdlHeading level={2} key={6}>
      {"Étape A — Cadrage & Stratégie "}
      <span key={1} className="rmdl-n">{"(1–2 h)"}</span>
    </RmdlHeading>
    <p className="rmdl-p" key={7}>
      <span key={0} className="rmdl-lb">{"B — Parenthèses normales + intérieur gras (pas italique)"}</span>
      {" "}
    </p>
    <RmdlHeading level={2} key={8}>
      {"Étape B — Cadrage & Stratégie "}
      <span key={1} className="rmdl-n">{"("}<strong key={1}>{"1–2 h"}</strong>{")"}</span>
    </RmdlHeading>
    <p className="rmdl-p" key={9}>
      <span key={0} className="rmdl-lb">{"C — Parenthèses normales + intérieur italique (pas gras)"}</span>
      {" "}
    </p>
    <RmdlHeading level={2} key={10}>
      {"Étape C — Cadrage & Stratégie "}
      <span key={1} className="rmdl-n">{"("}<em key={1} className="rmdl-em">{"1–2 h"}</em>{")"}</span>
    </RmdlHeading>
    <p className="rmdl-p" key={11}>
      <span key={0} className="rmdl-lb">{"D — Parenthèses normales + intérieur gras + italique (forcé)"}</span>
      {" "}
    </p>
    <RmdlHeading level={2} key={12}>
      {"Étape D — Cadrage & Stratégie "}
      <span key={1} className="rmdl-n">{"("}<strong key={1}><em key={0} className="rmdl-em">{"1–2 h"}</em><span key={1} className="rmdl-n">{")"}</span>{"<h2>"}{" "}{" "}<span key={5} className="rmdl-lb">{"E — Parenthèses typographiques auto + intérieur italique (pi)"}</span>{" "}{"<h2>"}{"Étape E — Cadrage & Stratégie "}<span key={9} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={13} className="rmdl-lb">{"F — Parenthèses typographiques auto + intérieur gras + italique (pi sous strong)"}</span>{" "}{"<h2>"}{"Étape F — Cadrage & Stratégie "}</strong><span key={2} className="rmdl-pi"><span className="rmdl-paren">(</span><em>{"1–2 h"}</em><span className="rmdl-paren">)</span></span><strong key={3}>{"<h2>"}{" "}{" "}<span key={3} className="rmdl-lb">{"G — Parenthèses auto (pi) sous gras + reset normal à l’intérieur (utile si parent en gras)"}</span>{" "}{"<h2>"}</strong>{"Étape G — Cadrage & Stratégie "}<span key={5} className="rmdl-pi"><span className="rmdl-paren">(</span><em><span key={0} className="rmdl-n">{"1–2 h"}</span></em><span className="rmdl-paren">)</span></span><strong key={6}>{"<h2>"}{" "}{" "}{" "}{"<h2>"}{"Tests espaces (même phrase, même ligne)"}{"<h2>"}{" "}{" "}<span key={9} className="rmdl-lb">{"Référence (0 espace forcé)"}</span>{" "}{"<h2>"}{"Étape E0 — Cadrage & Stratégie "}<span key={13} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={17} className="rmdl-lb">{"Espace 1 (sp n=\"1\")"}</span>{" "}{"<h2>"}{"Étape E1 — Cadrage & Stratégie"}{" "}<span key={22} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={26} className="rmdl-lb">{"Espace 2 (sp n=\"2\")"}</span>{" "}{"<h2>"}{"Étape E2 — Cadrage & Stratégie"}{"  "}<span key={31} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={35} className="rmdl-lb">{"Espace 3 (sp n=\"3\")"}</span>{" "}{"<h2>"}{"Étape E3 — Cadrage & Stratégie"}{"   "}<span key={40} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={44} className="rmdl-lb">{"Espace 4 (sp n=\"4\")"}</span>{" "}{"<h2>"}{"Étape E4 — Cadrage & Stratégie"}{"    "}<span key={49} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}{" "}{"<h2>"}{"Tests combinés (espaces + parenthèses) — mêmes mots"}{"<h2>"}{" "}{" "}<span key={59} className="rmdl-lb">{"1 — Parenthèses normales + intérieur italique + espace 1 avant parenthèse"}</span>{" "}{"<h2>"}{"Étape C1 — Cadrage & Stratégie"}{" "}{"("}<em key={65} className="rmdl-em">{"1–2 h"}</em>{")"}{"<h2>"}{" "}{" "}<span key={70} className="rmdl-lb">{"2 — Parenthèses normales + intérieur gras + espace 2 avant parenthèse"}</span>{" "}{"<h2>"}{"Étape C2 — Cadrage & Stratégie"}{"  "}{"("}</strong>{"1–2 h"}<strong key={8}>{")"}{"<h2>"}{" "}{" "}<span key={4} className="rmdl-lb">{"3 — Parenthèses auto (pi) + espace 3 avant pi"}</span>{" "}{"<h2>"}{"Étape C3 — Cadrage & Stratégie"}{"   "}<span key={9} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1–2 h"}</em></strong><span className="rmdl-paren">)</span></span>{"<h2>"}{" "}{" "}<span key={13} className="rmdl-lb">{"4 — Parenthèses auto (pi) sous gras + reset normal à l’intérieur + espace 4 avant pi"}</span>{" "}{"<h2>"}</strong>{"Étape C4 — Cadrage & Stratégie"}{"    "}<span key={11} className="rmdl-pi"><span className="rmdl-paren">(</span><em><span key={0} className="rmdl-n">{"1–2 h"}</span></em><span className="rmdl-paren">)</span></span><strong key={12}>{"<h2>"}{" "}{" "}{" "}{"<h2>"}{"2 — Typo inline (gras / italique / normal forcé)"}{"<h2>"}{" "}{" "}{"Voici un mot en "}</strong>{"gras"}<strong key={14}>{", puis un mot en "}<em key={1} className="rmdl-em">{"italique"}</em>{", puis on force le "}<span key={3} className="rmdl-n">{"normal"}</span>{"."}{" "}{" "}</strong>{"Zone en gras"}<strong key={16}>{" "}<span key={1} className="rmdl-n">{":"}</span>{" "}{"Tout est fort sauf "}<span key={4} className="rmdl-n">{"ce segment"}</span>{" et la ponctuation "}<span key={6} className="rmdl-n">{":"}</span>{" "}{" "}</strong>{"Mix"}<strong key={18}>{" "}<em key={1} className="rmdl-em">{"gras + italique"}</em>{" "}{"avec un reset "}<span key={4} className="rmdl-n">{"normal"}</span>{" au milieu."}{" "}{" "}{" "}{"<h2>"}{"3 — Espaces forcés & sauts de ligne forcés"}{"<h2>"}{" "}{" "}<span key={14} className="rmdl-lb">{"Espaces forcés"}</span>{" "}<span key={16} className="rmdl-n">{":"}</span>{" Avant ce deux-points on insère 2 espaces ->"}{"  "}<span key={19} className="rmdl-n">{":"}</span>{" OK."}{" "}{" "}{"Adresse"}{" "}<span key={25} className="rmdl-n">{":"}</span><React.Fragment key={26}><br key={0} /><br key={1} /></React.Fragment>{" "}{"69 rue Maurice Tronel"}<React.Fragment key={29}><br key={0} /></React.Fragment>{" "}{"67620 Le Havre"}{" "}{" "}{" "}{"<h2>"}{"4 — Labels (préfixes sémantiques)"}{"<h2>"}{" "}{" "}<span key={40} className="rmdl-lb">{"Objectif"}</span>{" "}<span key={42} className="rmdl-n">{":"}</span>{" Poser un cap clair, cadrer le besoin, définir des priorités et un plan d’action."}{" "}<span key={45} className="rmdl-lb">{"Résultat"}</span>{" "}<span key={47} className="rmdl-n">{":"}</span>{" Une feuille de route exploitable immédiatement."}{" "}{" "}{" "}{"<h2>"}{"5 — Parenthèses typographiques (auto)"}{"<h2>"}{" "}{" "}</strong>{"Livrables"}<strong key={20}>{" "}<span key={1} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"selon formule"}</em></strong><span className="rmdl-paren">)</span></span>{" "}<span key={3} className="rmdl-n">{":"}</span>{" "}{" "}</strong>{"Un récapitulatif clair"}<strong key={22}>{" "}<span key={1} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"1 page"}</em></strong><span className="rmdl-paren">)</span></span>{" "}</strong>{"Un récapitulatif clair "}<span key={24} className="rmdl-pi"><span className="rmdl-paren">(</span><em>{"1 page"}</em><span className="rmdl-paren">)</span></span><strong key={25}>{" "}{" "}{" "}{"<h2>"}{"6 — Liens / CTA / Externe / Téléchargement"}{"<h2>"}{" "}{" "}{"Lien interne"}{" "}<span key={10} className="rmdl-n">{":"}</span>{" "}<RmdlLink key={12} href={"/contact"} ext={false} cta={false} dl={false}>{"Me contacter"}</RmdlLink><React.Fragment key={13}><br key={0} /></React.Fragment>{" "}{"Lien externe"}{" "}<span key={17} className="rmdl-n">{":"}</span>{" "}<RmdlLink key={19} href={"https://wii-design.com"} ext={true} cta={false} dl={false}>{"Voir le site"}</RmdlLink><React.Fragment key={20}><br key={0} /></React.Fragment>{" "}{"CTA"}{" "}<span key={24} className="rmdl-n">{":"}</span>{" "}<RmdlLink key={26} href={"/rendez-vous"} ext={false} cta={true} dl={false}>{"Prendre rendez-vous"}</RmdlLink><React.Fragment key={27}><br key={0} /></React.Fragment>{" "}{"Téléchargement"}{" "}<span key={31} className="rmdl-n">{":"}</span>{" "}<RmdlLink key={33} href={"/docs/plaquette.pdf"} ext={false} cta={false} dl={true}>{"Télécharger la plaquette"}</RmdlLink>{" "}{" "}{" "}{"<h2>"}{"7 — Glossaire / abréviations (infobulle)"}{"<h2>"}{" "}{" "}{"Le "}<RmdlAb key={43} definition={"Robot d’indexation des moteurs."}>{"crawler"}</RmdlAb>{" explore les pages."}{" "}{"Voir aussi"}{" "}<span key={48} className="rmdl-n">{":"}</span>{" "}<RmdlAb key={50} definition={"Robot d’indexation des moteurs."} href={"/glossaire#crawler"}>{"crawler"}</RmdlAb>{"."}{" "}{" "}{" "}{"<h2>"}{"8 — Quote (bloc de mise en avant)"}{"<h2>"}{" "}{" "}{"<q>"}{" "}{"Un bon cadrage réduit les allers-retours et sécurise le budget."}<React.Fragment key={63}><br key={0} /></React.Fragment>{" "}<span key={65} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"On évite de coder à l’aveugle."}</em></strong><span className="rmdl-paren">)</span></span><React.Fragment key={66}><br key={0} /></React.Fragment>{" "}</strong>{"Clarté"}<strong key={27}>{" "}<span key={1} className="rmdl-n">{":"}</span>{" "}{"moins de friction, plus d’impact."}{" "}{"<q>"}{" "}{" "}{" "}{"<h2>"}{"9 — Listes (simples, riches, sous-listes)"}{"<h2>"}{" "}{" "}<span key={14} className="rmdl-lb">{"Liste à puces simple"}</span>{" "}<span key={16} className="rmdl-n">{":"}</span>{" "}{"<l>"}{" "}{"<i>"}{"On pose un cadre."}{"<i>"}{" "}{"<i>"}{"On priorise."}{"<i>"}{" "}{"<i>"}{"On planifie la suite."}{"<i>"}{" "}{"<l>"}{" "}{" "}<span key={35} className="rmdl-lb">{"Liste numérotée (étapes)"}</span>{" "}<span key={37} className="rmdl-n">{":"}</span>{" "}{"<ol>"}{" "}{"<i>"}<span key={42} className="rmdl-lb">{"1. Cadrage"}</span>{" "}<span key={44} className="rmdl-n">{":"}</span>{" Définir le cap."}{"<i>"}{" "}{"<i>"}<span key={49} className="rmdl-lb">{"2. Design"}</span>{" "}<span key={51} className="rmdl-n">{":"}</span>{" Donner forme à l’interface."}{"<i>"}{" "}{"<i>"}<span key={56} className="rmdl-lb">{"3. Dev"}</span>{" "}<span key={58} className="rmdl-n">{":"}</span>{" Construire et itérer."}{"<i>"}{" "}{"<ol>"}{" "}{" "}<span key={65} className="rmdl-lb">{"Sous-liste (niveau 2)"}</span>{" "}<span key={67} className="rmdl-n">{":"}</span>{" "}{"<l>"}{" "}{"<i>"}{"Pré-requis"}{" "}{"<l2>"}{" "}{"<i>"}{"Logo "}<span key={78} className="rmdl-pi"><span className="rmdl-paren">(</span><strong><em>{"même provisoire"}</em></strong><span className="rmdl-paren">)</span></span>{"<i>"}{" "}{"<i>"}{"5 à 10 photos"}{"<i>"}{" "}{"<i>"}{"2 ou 3 sites d’inspiration"}{"<i>"}{" "}{"<l2>"}{" "}{"<i>"}{" "}{"<l>"}{" "}{" "}{" "}{"<h2>"}{"10 — Bloc de code (opaque, non parsé)"}{"<h2>"}{" "}{" "}<span key={102} className="rmdl-lb">{"Exemple (doit rester brut)"}</span>{" "}<span key={104} className="rmdl-n">{":"}</span>{" "}</strong></span>
    </RmdlHeading>
    </React.Fragment>
  );
}
