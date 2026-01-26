import type { RmdlDoc, RmdlInline, RmdlBlock, RmdlListItem } from "./ast";

function mapInlines(inlines: ReadonlyArray<RmdlInline>, inStrong: boolean): ReadonlyArray<RmdlInline> {
  return inlines.map((n) => {
    if (n.kind === "strong") {
        return { ...n, inlines: mapInlines(n.inlines, true) }; // strong impose true
      }
      
    if (n.kind === "pi") {
      // pi "hérite" du contexte strong, mais les parenthèses resteront normales au rendu
      return { ...n, strong: inStrong, inlines: mapInlines(n.inlines, inStrong) };
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
