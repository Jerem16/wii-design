import type { RmdlDoc } from "../ast";
import { tsStringLiteral } from "./escape-tsx";

export type EmitInput = Readonly<{
  slug: string;
  doc: RmdlDoc;
}>;

/**
 * Génère une page TSX (Server Component) à partir d’un doc RMDL.
 * Scaffold : stub (à compléter).
 *
 * Important : le TSX généré doit appeler des composants réutilisables (listes, liens, quotes...),
 * et ne doit jamais insérer de HTML brut utilisateur.
 */
export function emitTsxPage(input: EmitInput): string {
  const { slug } = input;

  return [
    "/**",
    " * Page RMDL générée (Option A).",
    " * Ne pas modifier à la main.",
    " */",
    "",
    'import React from "react";',
    'import { RmdlHeading } from "../../../rmdl/components/rmdl-heading";',
    'import { RmdlList } from "../../../rmdl/components/rmdl-list";',
    'import { RmdlLink } from "../../../rmdl/components/rmdl-link";',
    'import { RmdlAb } from "../../../rmdl/components/rmdl-ab";',
    'import { RmdlQuote } from "../../../rmdl/components/rmdl-q";',
    'import { RmdlCode } from "../../../rmdl/components/rmdl-code";',
    "",
    "export default function Page(): React.ReactElement {",
    "  // TODO: rendre les blocs réels à partir de l’AST (stub).",
    `  return <React.Fragment>{${tsStringLiteral(slug)}}</React.Fragment>;`,
    "}",
    "",
  ].join("\n");
}
