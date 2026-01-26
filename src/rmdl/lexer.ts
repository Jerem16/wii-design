export type Token =
  | Readonly<{ kind: "text"; value: string }>
  | Readonly<{ kind: "tag"; name: string; attrs: Readonly<Record<string, string | boolean>> }>
  | Readonly<{ kind: "code"; lang: string; code: string }>
  | Readonly<{ kind: "eol" }>;

/**
 * Lexer RMDL — stub (Option A).
 * TODO: découper le texte en tokens (tags RMDL en minuscules, fences ```lang).
 */
export function lex(_input: string): ReadonlyArray<Token> {
  return [];
}
