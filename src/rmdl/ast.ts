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

export type RmdlListItem = Readonly<{
  kind: "item";
  inlines: ReadonlyArray<RmdlInline>;
  sublists?: ReadonlyArray<RmdlListBlock>;
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

export type RmdlLabelInline = Readonly<{
  kind: "label";
  inlines: ReadonlyArray<RmdlInline>;
}>;

export type RmdlParenItalicInline = Readonly<{
  kind: "pi";
  inlines: ReadonlyArray<RmdlInline>;
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
