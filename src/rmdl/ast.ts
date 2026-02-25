export type RmdlDoc = Readonly<{
    blocks: ReadonlyArray<RmdlBlock>;
    meta?: RmdlMeta;
}>;

export type RmdlMeta = Readonly<{
    slug?: string;
    title?: string;
}>;

export type RmdlBlock =
    | RmdlHeadingBlock
    | RmdlParagraphBlock
    | RmdlListBlock
    | RmdlQuoteBlock
    | RmdlCodeBlock;

export type RmdlHeadingLevel = 1 | 2 | 3;

export type RmdlHeadingBlock = Readonly<{
    kind: "heading";
    level: RmdlHeadingLevel;
    inlines: ReadonlyArray<RmdlInline>;
    id?: string;
}>;

export type RmdlParagraphBlock = Readonly<{
    kind: "paragraph";
    inlines: ReadonlyArray<RmdlInline>;
}>;

export type RmdlListKind = "l" | "ol" | "l2" | "ol2";

export type RmdlListBlock = Readonly<{
    kind: "list";
    listKind: RmdlListKind;
    items: ReadonlyArray<RmdlListItem>;
}>;

export type RmdlListItemTone = "em" | "s" | "n";

export type RmdlListItem = Readonly<{
    kind: "item";
    blocks: ReadonlyArray<RmdlBlock>;
    listItemTone?: RmdlListItemTone;
}>;

export type RmdlQuoteBlock = Readonly<{
    kind: "quote";
    blocks: ReadonlyArray<RmdlBlock>;
    by?: string;
}>;

export type RmdlCodeBlock = Readonly<{
    kind: "code";
    lang: string;
    code: string;
}>;

export type RmdlInline =
    | RmdlTextInline
    | RmdlStrongInline
    | RmdlEmInline
    | RmdlNormalInline
    | RmdlSpaceInline
    | RmdlBreakInline
    | RmdlLabelInline
    | RmdlParenItalicInline
    | RmdlLinkInline
    | RmdlAbInline;


export type RmdlTextInline = Readonly<{
    kind: "text";
    text: string;
}>;

export type RmdlStrongInline = Readonly<{
    kind: "strong";
    inlines: ReadonlyArray<RmdlInline>;
}>;

export type RmdlEmInline = Readonly<{
    kind: "em";
    inlines: ReadonlyArray<RmdlInline>;
}>;

export type RmdlNormalInline = Readonly<{
    kind: "normal";
    inlines: ReadonlyArray<RmdlInline>;
}>;

export type RmdlSpaceInline = Readonly<{
    kind: "sp";
    n: number;
}>;

export type RmdlBreakInline = Readonly<{
    kind: "br";
    n: number;
}>;


export type RmdlLabelInline = Readonly<{
    kind: "label";
    inlines: ReadonlyArray<RmdlInline>;
}>;

/**
 * pi : Parenthèse italique
 * - Les parenthèses sont rendues en normal (jamais en gras)
 * - `strong=true` => contenu interne gras+italique (mais parenthèses normales)
 */
export type RmdlParenItalicInline = Readonly<{
    kind: "pi";
    inlines: ReadonlyArray<RmdlInline>;
    strong: boolean;
}>;

export type RmdlLinkInline = Readonly<{
    kind: "link";
    href: string;
    text: ReadonlyArray<RmdlInline>;
    ext: boolean;
    cta: boolean;
    dl: boolean;
}>;

export type RmdlAbInline = Readonly<{
    kind: "ab";
    definition?: string;
    href?: string;
    text: ReadonlyArray<RmdlInline>;
}>;
