/**
 * Échappe une chaîne pour l’inclure comme littéral TSX.
 * JSON.stringify produit un littéral sûr (quotes/retours échappés).
 */
export function tsStringLiteral(value: string): string {
  return JSON.stringify(value);
}
