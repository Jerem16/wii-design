import type { RmdlDoc } from "./ast";

/**
 * Sanitize / Typo-pass — stub (Option A).
 * TODO:
 * - Appliquer la règle s0 (symboles neutres toujours en normal, jamais en gras)
 * - Normaliser les URLs via url-policy
 */
export function sanitize(doc: RmdlDoc): RmdlDoc {
  return doc;
}
