import type { RmdlBlock, RmdlDoc, RmdlInline, RmdlListKind } from "./ast";
import type { Token } from "./lexer";

type Cursor = Readonly<{
  tokens: ReadonlyArray<Token>;
  idx: number;
}>;

const BLOCK_TAGS: ReadonlySet<string> = new Set([
  "h1",
  "h2",
  "h3",
  "l",
  "ol",
  "l2",
  "ol2",
  "q",
]);

function peek(cur: Cursor): Token | null {
  return cur.idx < cur.tokens.length ? cur.tokens[cur.idx] : null;
}

function next(cur: Cursor): [Token | null, Cursor] {
  const t = peek(cur);
  const nextIdx = cur.idx < cur.tokens.length ? cur.idx + 1 : cur.idx;
  return [t, { tokens: cur.tokens, idx: nextIdx }];
}

function skipEols(cur: Cursor): Cursor {
  let c = cur;
  while (true) {
    const t = peek(c);
    if (!t || t.kind !== "eol") break;
    c = { tokens: c.tokens, idx: c.idx + 1 };
  }
  return c;
}

function isBlankLineAhead(cur: Cursor): boolean {
  const t1 = peek(cur);
  if (!t1 || t1.kind !== "eol") return false;
  const t2 = cur.idx + 1 < cur.tokens.length ? cur.tokens[cur.idx + 1] : null;
  return !!t2 && t2.kind === "eol";
}

function tagName(t: Token | null): string | null {
  return t && t.kind === "tag" ? t.name : null;
}

function consumeIfTag(cur: Cursor, name: string): Cursor {
  const t = peek(cur);
  if (t && t.kind === "tag" && t.name === name) return next(cur)[1];
  return cur;
}

function mergeStopTags(a: ReadonlySet<string>, b: ReadonlySet<string>): ReadonlySet<string> {
  const out = new Set<string>();
  for (const x of a) out.add(x);
  for (const x of b) out.add(x);
  return out;
}

function parseInlinesUntilTag(cur: Cursor, stopTag: string): { inlines: ReadonlyArray<RmdlInline>; cur: Cursor } {
  const out: RmdlInline[] = [];
  let c = cur;

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && t.name === stopTag) break;

    if (t.kind === "eol") {
      out.push({ kind: "text", text: " " });
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    const parsed = parseInline(c);
    out.push(parsed.inline);
    c = parsed.cur;
  }

  return { inlines: out, cur: c };
}

function parseInline(cur: Cursor): { inline: RmdlInline; cur: Cursor } {
  const t = peek(cur);
  if (!t) return { inline: { kind: "text", text: "" }, cur };

  if (t.kind === "text") {
    const [, c2] = next(cur);
    return { inline: { kind: "text", text: t.value }, cur: c2 };
  }

  if (t.kind === "tag") {
    const name = t.name;
    const attrs = t.attrs;
    const [, afterOpen] = next(cur);

    if (name === "s") {
      const inner = parseInlinesUntilTag(afterOpen, "s");
      const afterClose = consumeIfTag(inner.cur, "s");
      return { inline: { kind: "strong", inlines: inner.inlines }, cur: afterClose };
    }

    if (name === "lb") {
      const inner = parseInlinesUntilTag(afterOpen, "lb");
      const afterClose = consumeIfTag(inner.cur, "lb");
      return { inline: { kind: "label", inlines: inner.inlines }, cur: afterClose };
    }

    if (name === "pi") {
        const inner = parseInlinesUntilTag(afterOpen, "pi");
        const afterClose = consumeIfTag(inner.cur, "pi");
        return { inline: { kind: "pi", inlines: inner.inlines, strong: false }, cur: afterClose };
      }
      

    if (name === "a") {
      const h = typeof attrs.h === "string" ? attrs.h : "";
      const ext = attrs.ext === true;
      const cta = attrs.cta === true;
      const dl = attrs.dl === true;

      const inner = parseInlinesUntilTag(afterOpen, "a");
      const afterClose = consumeIfTag(inner.cur, "a");

      return {
        inline: { kind: "link", href: h, text: inner.inlines, ext, cta, dl },
        cur: afterClose,
      };
    }

    if (name === "ab") {
      const d = typeof attrs.d === "string" ? attrs.d : undefined;
      const h = typeof attrs.h === "string" ? attrs.h : undefined;

      const inner = parseInlinesUntilTag(afterOpen, "ab");
      const afterClose = consumeIfTag(inner.cur, "ab");

      return { inline: { kind: "ab", definition: d, href: h, text: inner.inlines }, cur: afterClose };
    }

    return { inline: { kind: "text", text: `<${name}>` }, cur: afterOpen };
  }

  if (t.kind === "code") {
    const [, c2] = next(cur);
    return { inline: { kind: "text", text: t.code }, cur: c2 };
  }

  const [, c2] = next(cur);
  return { inline: { kind: "text", text: " " }, cur: c2 };
}

function parseHeading(cur: Cursor, level: 1 | 2 | 3, tag: "h1" | "h2" | "h3"): { block: RmdlBlock; cur: Cursor } {
  const [, afterOpen] = next(cur);
  const inner = parseInlinesUntilTag(afterOpen, tag);
  const afterClose = consumeIfTag(inner.cur, tag);

  return {
    block: { kind: "heading", level, inlines: inner.inlines },
    cur: afterClose,
  };
}

function parseParagraph(cur: Cursor, stopTags: ReadonlySet<string>): { block: RmdlBlock; cur: Cursor } {
  const inlines: RmdlInline[] = [];
  let c = cur;

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "eol") {
      if (isBlankLineAhead(c)) break;
      inlines.push({ kind: "text", text: " " });
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    if (t.kind === "tag" && stopTags.has(t.name)) break;
    if (t.kind === "code") break;

    const parsed = parseInline(c);
    inlines.push(parsed.inline);
    c = parsed.cur;
  }

  return { block: { kind: "paragraph", inlines }, cur: c };
}

function parseCode(cur: Cursor): { block: RmdlBlock; cur: Cursor } {
  const t = peek(cur);
  if (!t || t.kind !== "code") {
    return { block: { kind: "code", lang: "text", code: "" }, cur };
  }
  const [, c2] = next(cur);
  return { block: { kind: "code", lang: t.lang, code: t.code }, cur: c2 };
}

function parseBlocks(cur: Cursor, stopTags: ReadonlySet<string>): { blocks: ReadonlyArray<RmdlBlock>; cur: Cursor } {
  const blocks: RmdlBlock[] = [];
  let c = skipEols(cur);

  while (true) {
    c = skipEols(c);
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && stopTags.has(t.name)) break;

    if (t.kind === "code") {
      const b = parseCode(c);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    const name = tagName(t);

    if (name === "h1") {
      const b = parseHeading(c, 1, "h1");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }
    if (name === "h2") {
      const b = parseHeading(c, 2, "h2");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }
    if (name === "h3") {
      const b = parseHeading(c, 3, "h3");
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    if (name === "q") {
      const b = parseQuote(c);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    if (name === "l" || name === "ol" || name === "l2" || name === "ol2") {
      const b = parseList(c, name);
      blocks.push(b.block);
      c = skipEols(b.cur);
      continue;
    }

    const stopForParagraph = mergeStopTags(stopTags, BLOCK_TAGS);
    const p = parseParagraph(c, stopForParagraph);
    blocks.push(p.block);
    c = p.cur;
  }

  return { blocks, cur: c };
}

function parseQuote(cur: Cursor): { block: RmdlBlock; cur: Cursor } {
  const [, afterOpen] = next(cur);
  const inner = parseBlocks(afterOpen, new Set<string>(["q"]));
  const afterClose = consumeIfTag(inner.cur, "q");
  return { block: { kind: "quote", blocks: inner.blocks }, cur: afterClose };
}

function parseList(cur: Cursor, listKind: RmdlListKind): { block: RmdlBlock; cur: Cursor } {
  const listTag = listKind;
  const [, afterOpen] = next(cur);
  let c = skipEols(afterOpen);

  const items: Array<Readonly<{ kind: "item"; blocks: ReadonlyArray<RmdlBlock> }>> = [];

  while (true) {
    const t = peek(c);
    if (!t) break;

    if (t.kind === "tag" && t.name === listTag) {
      const [, afterClose] = next(c);
      c = afterClose;
      break;
    }

    if (t.kind === "eol") {
      c = { tokens: c.tokens, idx: c.idx + 1 };
      continue;
    }

    if (t.kind === "tag" && t.name === "i") {
        // consume <i> opening
        const [, afterItemOpen] = next(c);
      
        // parse item blocks until closing <i> OR closing list tag
        const inner = parseBlocks(afterItemOpen, new Set<string>(["i", listTag]));
      
        // consume closing <i> if present (sinon item fermé par fin de liste)
        const afterItemClose = consumeIfTag(inner.cur, "i");
      
        items.push({ kind: "item", blocks: inner.blocks });
        c = afterItemClose;
        continue;
      }
      

    const fallback = parseParagraph(c, new Set<string>(["i", listTag]));
    items.push({ kind: "item", blocks: [fallback.block] });
    c = fallback.cur;
  }

  return { block: { kind: "list", listKind, items }, cur: c };
}

export function parse(tokens: ReadonlyArray<Token>): RmdlDoc {
  const start: Cursor = { tokens, idx: 0 };
  const out = parseBlocks(start, new Set<string>());
  return { blocks: out.blocks };
}
