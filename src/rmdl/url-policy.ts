const FORBIDDEN_SCHEMES = ["javascript:", "data:", "vbscript:"] as const;

export function sanitizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();

  for (const scheme of FORBIDDEN_SCHEMES) {
    if (lower.startsWith(scheme)) return null;
  }

  if (trimmed.startsWith("/")) return trimmed;
  if (trimmed.startsWith("#")) return trimmed;
  if (lower.startsWith("https://")) return trimmed;
  if (lower.startsWith("http://")) return trimmed;
  if (lower.startsWith("mailto:")) return trimmed;

  return null;
}
