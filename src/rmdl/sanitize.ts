import type { RmdlDoc, RmdlInline, RmdlBlock, RmdlListItem } from "./ast";

function stripWrappingParens(inlines: ReadonlyArray<RmdlInline>): ReadonlyArray<RmdlInline> {
  if (inlines.length === 0) return inlines;

  const first = inlines[0];
  const last = inlines[inlines.length - 1];

  if (first.kind !== "text" || last.kind !== "text") return inlines;
  if (!first.text.startsWith("(") || !last.text.endsWith(")")) return inlines;

  if (inlines.length === 1) {
    const mid = first.text.slice(1, -1);
    return mid.length > 0 ? [{ ...first, text: mid }] : [];
  }

  const next: RmdlInline[] = [...inlines];
  const firstText = first.text.slice(1);
  const lastText = last.text.slice(0, -1);

  if (firstText.length === 0) {
    next.shift();
  } else {
    next[0] = { ...first, text: firstText };
  }

  const lastIndex = next.length - 1;
  if (lastIndex >= 0) {
    const tail = next[lastIndex];
    if (tail.kind === "text") {
      if (lastText.length === 0) {
        next.pop();
      } else {
        next[lastIndex] = { ...tail, text: lastText };
      }
    }
  }

  return next;
}

function mapInlines(inlines: ReadonlyArray<RmdlInline>, inStrong: boolean): ReadonlyArray<RmdlInline> {
  return inlines.map((n) => {
    if (n.kind === "strong") {
        return { ...n, inlines: mapInlines(n.inlines, true) }; // strong impose true
      }
      
    if (n.kind === "pi") {
      // pi "hérite" du contexte strong, mais les parenthèses resteront normales au rendu
      const normalized = stripWrappingParens(mapInlines(n.inlines, inStrong));
      return { ...n, strong: inStrong, inlines: normalized };
    }
    if (n.kind === "label") return { ...n, inlines: mapInlines(n.inlines, inStrong) };
    if (n.kind === "link") return { ...n, text: mapInlines(n.text, inStrong) };
    if (n.kind === "ab") return { ...n, text: mapInlines(n.text, inStrong) };
    return n;
  });
}

function mapBlocks(blocks: ReadonlyArray<RmdlBlock>): ReadonlyArray<RmdlBlock> {
  return blocks.map((b) => {
    if (b.kind === "heading") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "paragraph") return { ...b, inlines: mapInlines(b.inlines, false) };
    if (b.kind === "quote") return { ...b, blocks: mapBlocks(b.blocks) };
    if (b.kind === "list") {
      const items: ReadonlyArray<RmdlListItem> = b.items.map((it) => ({ ...it, blocks: mapBlocks(it.blocks) }));
      return { ...b, items };
    }
    return b; // code
  });
}

export function sanitize(doc: RmdlDoc): RmdlDoc {
  return { ...doc, blocks: mapBlocks(doc.blocks) };
}
