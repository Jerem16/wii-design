export type LinkAttr = "h" | "ext" | "cta" | "dl";
export const LINK_ATTRS: ReadonlySet<LinkAttr> = new Set<LinkAttr>([
    "h",
    "ext",
    "cta",
    "dl"
]);

export type AbAttr = "d" | "h";
export const AB_ATTRS: ReadonlySet<AbAttr> = new Set<AbAttr>(["d", "h"]);

// Règle s0 : symboles toujours neutres (jamais en gras), gérée en JS.
export const NEUTRAL_SYMBOLS = [
    ":",
    ".",
    ",",
    ";",
    "(",
    ")",
    "-",
    "–",
    "—",
    "--"
] as const;
export type NeutralSymbol = typeof NEUTRAL_SYMBOLS[number];
export type AllowedTag =
    | "h1"
    | "h2"
    | "h3"
    | "s"
    | "lb"
    | "pi"
    | "l"
    | "ol"
    | "l2"
    | "ol2"
    | "i"
    | "a"
    | "ab"
    | "q";

export const ALLOWED_TAGS: ReadonlySet<string> = new Set([
    "h1",
    "h2",
    "h3",
    "s",
    "lb",
    "pi",
    "l",
    "ol",
    "l2",
    "ol2",
    "i",
    "a",
    "ab",
    "q"
]);
export function isAllowedTag(name: string): name is AllowedTag {
    return ALLOWED_TAGS.has(name);
}
