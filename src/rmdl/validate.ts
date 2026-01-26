import type { RmdlDoc } from "./ast";

export type ValidationError = Readonly<{
  message: string;
  path?: string;
}>;

/**
 * Validation RMDL — stub (Option A).
 * TODO: allowlist tags/attrs, urls, structure, règles typographiques (ponctuation hors <lb>/<s>).
 */
export function validate(_doc: RmdlDoc): ReadonlyArray<ValidationError> {
  return [];
}
