import type { RmdlDoc } from "./ast";
import type { Token } from "./lexer";

/**
 * Parser RMDL — stub (Option A).
 * TODO: construire un AST strict à partir des tokens (pile de tags, listes, quotes, code blocks).
 */
export function parse(_tokens: ReadonlyArray<Token>): RmdlDoc {
  return { blocks: [] };
}
