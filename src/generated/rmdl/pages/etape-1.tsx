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
      {"Phase 1 — Cadrage & stratégie"}
    </RmdlHeading>
    <p className="rmdl-p" key={1}>
      <span key={0} className="rmdl-lb">{"Objectif"}</span>
      {" : Poser un cap clair, cadrer le besoin, et définir une stratégie actionnable."}
    </p>
    <p className="rmdl-p" key={2}>
      <strong key={0}>{"Livrables"}</strong>
      {" "}
      <span key={2} className="rmdl-pi"><span>(</span><em>{"selon formule"}</em><span>)</span></span>
      {" :"}
      {" "}
    </p>
    <RmdlList key={3} kind={"l"}>
      <li key={0} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"1. Entretien de cadrage"}</span>
          {" : 60–90 min "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"visio ou présentiel"}</em><span>)</span></span>
        </p>
      </li>
      <li key={1} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"2. Analyse de l’existant"}</span>
          {" : Audit rapide (UX/UI, contenu, perf) "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"si support fourni"}</em><span>)</span></span>
        </p>
      </li>
      <li key={2} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <span key={0} className="rmdl-lb">{"3. Synthèse & recommandations"}</span>
          {" : Priorités, quick wins, plan d’action "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
        </p>
      </li>
    </RmdlList>
    <p className="rmdl-p" key={4}>
      <span key={0} className="rmdl-lb">{"Ce que vous obtenez"}</span>
      {" :"}
      {" "}
    </p>
    <RmdlList key={5} kind={"l"}>
      <li key={0} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Un récapitulatif clair"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
        </p>
      </li>
      <li key={1} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Une direction stratégique"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"objectifs + étapes"}</em><span>)</span></span>
        </p>
      </li>
      <li key={2} className="rmdl-li">
        <p className="rmdl-p" key={0}>
          <strong key={0}>{"Un plan d’action"}</strong>
          {" "}
          <span key={2} className="rmdl-pi"><span>(</span><em>{"priorisé"}</em><span>)</span></span>
        </p>
      </li>
    </RmdlList>
    <p className="rmdl-p" key={6}>
      <span key={0} className="rmdl-lb">{"Notes"}</span>
      {" :"}
      {" "}
    </p>
    <RmdlQuote key={7}>
      <p className="rmdl-p" key={0}>
        {"Un bon cadrage réduit les allers-retours et sécurise le budget."}
        {" "}
        <span key={2} className="rmdl-pi"><span>(</span><em>{"On évite de “coder à l’aveugle”."}</em><span>)</span></span>
        {" "}
      </p>
    </RmdlQuote>
    <p className="rmdl-p" key={8}>
      <span key={0} className="rmdl-lb">{"Exemple (règle pi + strong)"}</span>
      {" :"}
      {" "}
      <strong key={3}>{"Un récapitulatif clair"}</strong>
      {" "}
      <span key={5} className="rmdl-pi"><span>(</span><em>{"1 page"}</em><span>)</span></span>
      {" "}
      <strong key={7}>{"Un récapitulatif clair "}<span key={1} className="rmdl-pi"><span>(</span><strong><em>{"1 page"}</em></strong><span>)</span></span></strong>
    </p>
    <p className="rmdl-p" key={9}>
      <span key={0} className="rmdl-lb">{"Bloc de code (doit rester brut)"}</span>
      {" :"}
      {" "}
    </p>
    </React.Fragment>
  );
}
