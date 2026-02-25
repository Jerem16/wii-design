import type {
    RmdlAbInline,
    RmdlBlock,
    RmdlDoc,
    RmdlInline,
    RmdlLinkInline,
    RmdlListBlock,
    RmdlListItem,
    RmdlListItemTone,
    RmdlQuoteBlock,
  } from "../ast";
  import { tsStringLiteral } from "./escape-tsx";
  
  export type EmitInput = Readonly<{
    slug: string;
    doc: RmdlDoc;
  }>;
  
export function emitTsxPage(input: EmitInput): string {
  const { slug, doc } = input;

  const body = renderBlocks(doc.blocks, 2);

  const output = [
    "/**",
    " * Page RMDL générée (Option A).",
    " * Ne pas modifier à la main.",
    " */",
      "",
      'import React from "react";',
      'import { RmdlHeading } from "../../../rmdl/components/rmdl-heading";',
      'import { RmdlList } from "../../../rmdl/components/rmdl-list";',
      'import { RmdlLink } from "../../../rmdl/components/rmdl-link";',
      'import { RmdlAb } from "../../../rmdl/components/rmdl-ab";',
      'import { RmdlQuote } from "../../../rmdl/components/rmdl-q";',
      'import { RmdlCode } from "../../../rmdl/components/rmdl-code";',
      "",
      "export default function Page(): React.ReactElement {",
      `  const __slug = ${tsStringLiteral(slug)};`,
      "  void __slug; // slug dispo si besoin",
      "  return (",
      "    <React.Fragment>",
      body.length ? body : "      {null}",
      "    </React.Fragment>",
    "  );",
    "}",
    "",
  ].join("\n");

  return output;
}
  
  function indent(n: number): string {
    return "  ".repeat(n);
  }
  
  function renderBlocks(blocks: ReadonlyArray<RmdlBlock>, depth: number): string {
    const out: string[] = [];
    blocks.forEach((b, idx) => {
      out.push(renderBlock(b, depth, idx));
    });
    return out.join("\n");
  }
  
  function renderBlock(block: RmdlBlock, depth: number, key: number): string {
    const pad = indent(depth);
  
    if (block.kind === "heading") {
      return [
        `${pad}<RmdlHeading level={${block.level}}${block.id ? ` id=${tsxLit(block.id)}` : ""} key=${tsxKey(
          key,
        )}>`,
        renderInlines(block.inlines, depth + 1),
        `${pad}</RmdlHeading>`,
      ].join("\n");
    }
  
    if (block.kind === "paragraph") {
      return [
        `${pad}<p className="rmdl-p" key=${tsxKey(key)}>`,
        renderInlines(block.inlines, depth + 1),
        `${pad}</p>`,
      ].join("\n");
    }
  
    if (block.kind === "code") {
      return `${pad}<RmdlCode key=${tsxKey(key)} lang=${tsxLit(block.lang)} code=${tsxLit(block.code)} />`;
    }
  
    if (block.kind === "quote") {
      const qb = block as RmdlQuoteBlock;
      return [
        `${pad}<RmdlQuote key=${tsxKey(key)}${qb.by ? ` by=${tsxLit(qb.by)}` : ""}>`,
        renderBlocks(qb.blocks, depth + 1),
        `${pad}</RmdlQuote>`,
      ].join("\n");
    }
  
    if (block.kind === "list") {
      const lb = block as RmdlListBlock;
      return [
        `${pad}<RmdlList key=${tsxKey(key)} kind=${tsxLit(lb.listKind)}>`,
        renderListItems(lb.items, depth + 1),
        `${pad}</RmdlList>`,
      ].join("\n");
    }
  
    // exhaustive safeguard
    return `${pad}{null /* block inconnu */}`;
  }
  
  function toneClassName(tone?: RmdlListItemTone): string {
    if (!tone) return "rmdl-li";
    return `rmdl-li rmdl-li--${tone}`;
  }

  function renderListItems(items: ReadonlyArray<RmdlListItem>, depth: number): string {
    const pad = indent(depth);
    const out: string[] = [];
    items.forEach((it, idx) => {
      out.push(`${pad}<li key=${tsxKey(idx)} className=${tsxLit(toneClassName(it.listItemTone))}>`);
      out.push(renderBlocks(it.blocks, depth + 1));
      out.push(`${pad}</li>`);
    });
    return out.join("\n");
  }
  
  function renderInlines(inlines: ReadonlyArray<RmdlInline>, depth: number): string {
    const pad = indent(depth);
    const out: string[] = [];
  
    inlines.forEach((n, idx) => {
      out.push(`${pad}${renderInline(n, idx)}`);
    });
  
    return out.join("\n");
  }
  
  function renderInline(n: RmdlInline, key: number): string {
    if (n.kind === "text") {
      // Texte => littéral en TSX (protégé)
      return tsxText(n.text);
    }
  
    if (n.kind === "strong") {
      return `<strong key=${tsxKey(key)}>${renderInlineChildren(n.inlines)}</strong>`;
    }
  
    
    if (n.kind === "em") {
      return `<em key=${tsxKey(key)} className="rmdl-em">${renderInlineChildren(n.inlines)}</em>`;
    }

    if (n.kind === "normal") {
      // normal forcé : annule le gras (CSS via .rmdl-n)
      return `<span key=${tsxKey(key)} className="rmdl-n">${renderInlineChildren(n.inlines)}</span>`;
    }

    if (n.kind === "br") {
      const count = Math.max(1, Number.isFinite(n.n) ? n.n : 1);
      const brs = Array.from({ length: count }, (_, i) => `<br key={${i}} />`).join("");
      return `<React.Fragment key=${tsxKey(key)}>${brs}</React.Fragment>`;
    }

    if (n.kind === "sp") {
      const count = Math.max(1, Number.isFinite(n.n) ? n.n : 1);
      const nbsp = "\u00A0".repeat(count);
      return `{${tsStringLiteral(nbsp)}}`;
    }

if (n.kind === "label") {
      // label sémantique : rendu simple (le ":" est hors balise côté source)
      return `<span key=${tsxKey(key)} className="rmdl-lb">${renderInlineChildren(n.inlines)}</span>`;
    }
  
    if (n.kind === "pi") {
      // Règle: parenthèses jamais en gras
      // - contenu toujours italic
      // - si pi.strong => strong+italic sur le contenu uniquement
      const inner = n.strong
        ? `<strong><em>${renderInlineChildren(n.inlines)}</em></strong>`
        : `<em>${renderInlineChildren(n.inlines)}</em>`;
  
      return `<span key=${tsxKey(key)} className="rmdl-pi"><span className="rmdl-paren">(</span>${inner}<span className="rmdl-paren">)</span></span>`;
    }
  
    if (n.kind === "link") {
      const ln = n as RmdlLinkInline;
      return `<RmdlLink key=${tsxKey(key)} href=${tsxLit(ln.href)} ext={${ln.ext}} cta={${ln.cta}} dl={${ln.dl}}>${renderInlineChildren(
        ln.text,
      )}</RmdlLink>`;
    }
  
    if (n.kind === "ab") {
      const ab = n as RmdlAbInline;
      return `<RmdlAb key=${tsxKey(key)}${ab.definition ? ` definition=${tsxLit(ab.definition)}` : ""}${
        ab.href ? ` href=${tsxLit(ab.href)}` : ""
      }>${renderInlineChildren(ab.text)}</RmdlAb>`;
    }
  
    return `{null /* inline inconnu */}`;
  }
  
  function renderInlineChildren(inlines: ReadonlyArray<RmdlInline>): string {
    // Enfants inline => on concatène directement (sans sauts de ligne)
    return inlines.map((x, i) => renderInline(x, i)).join("");
  }
  
  function tsxKey(n: number): string {
    return `{${n}}`;
  }
  
  function tsxLit(value: string): string {
    // littéral string TSX (JSON.stringify safe)
    return `{${tsStringLiteral(value)}}`;
  }

  function tsxText(value: string): string {
    return `{${tsStringLiteral(value)}}`;
  }
  
