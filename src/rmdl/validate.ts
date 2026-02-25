import type { RmdlBlock, RmdlDoc, RmdlInline } from "./ast";
import type { Token } from "./lexer";
import { sanitizeUrl } from "./url-policy";

export type ValidationError = Readonly<{
  message: string;
  path?: string;
}>;

type Cursor = Readonly<{
  tokens: ReadonlyArray<Token>;
  idx: number;
}>;

function peek(cur: Cursor): Token | null {
  return cur.idx < cur.tokens.length ? cur.tokens[cur.idx] : null;
}

function next(cur: Cursor): [Token | null, Cursor] {
  const token = peek(cur);
  const nextIdx = cur.idx < cur.tokens.length ? cur.idx + 1 : cur.idx;
  return [token, { tokens: cur.tokens, idx: nextIdx }];
}

function validateInlines(inlines: ReadonlyArray<RmdlInline>, path: string, errors: ValidationError[]): void {
  inlines.forEach((inline, idx) => {
    const here = `${path}.inlines[${idx}]`;

    if (inline.kind === "strong" || inline.kind === "em" || inline.kind === "normal" || inline.kind === "label") {
      validateInlines(inline.inlines, here, errors);
      return;
    }

    if (inline.kind === "pi") {
      validateInlines(inline.inlines, here, errors);
      return;
    }

    if (inline.kind === "link") {
      if (!sanitizeUrl(inline.href)) {
        errors.push({ message: `URL invalide ou interdite: ${inline.href}`, path: `${here}.href` });
      }
      validateInlines(inline.text, `${here}.text`, errors);
      return;
    }

    if (inline.kind === "ab") {
      if (inline.href && !sanitizeUrl(inline.href)) {
        errors.push({ message: `URL invalide ou interdite: ${inline.href}`, path: `${here}.href` });
      }
      validateInlines(inline.text, `${here}.text`, errors);
      return;
    }

    if ((inline.kind === "sp" || inline.kind === "br") && !Number.isFinite(inline.n)) {
      errors.push({ message: `n doit être numérique pour ${inline.kind}`, path: `${here}.n` });
    }
  });
}

function validateBlocks(blocks: ReadonlyArray<RmdlBlock>, path: string, errors: ValidationError[]): void {
  blocks.forEach((block, idx) => {
    const here = `${path}[${idx}]`;
    if (block.kind === "heading" || block.kind === "paragraph") {
      validateInlines(block.inlines, here, errors);
      return;
    }

    if (block.kind === "quote") {
      validateBlocks(block.blocks, `${here}.blocks`, errors);
      return;
    }

    if (block.kind === "list") {
      block.items.forEach((item, itemIdx) => {
        validateBlocks(item.blocks, `${here}.items[${itemIdx}].blocks`, errors);
      });
    }
  });
}

function validateListWrapperChildren(tokens: ReadonlyArray<Token>, errors: ValidationError[]): void {
  const start: Cursor = { tokens, idx: 0 };
  walkTopLevel(start, errors);
}

function walkTopLevel(cur: Cursor, errors: ValidationError[]): Cursor {
  let c = cur;
  while (true) {
    const token = peek(c);
    if (!token) return c;

    if (token.kind !== "tag") {
      c = next(c)[1];
      continue;
    }

    if (token.name === "l" || token.name === "ol" || token.name === "l2" || token.name === "ol2") {
      c = walkListContainer(next(c)[1], token.name, errors, `liste <${token.name}>`);
      continue;
    }

    c = next(c)[1];
  }
}

function walkListContainer(cur: Cursor, listTag: "l" | "ol" | "l2" | "ol2", errors: ValidationError[], context: string): Cursor {
  let c = cur;

  while (true) {
    const token = peek(c);
    if (!token) return c;

    if (token.kind === "tag" && token.name === listTag) {
      return next(c)[1];
    }

    if (token.kind === "tag" && (token.name === "em" || token.name === "s" || token.name === "n")) {
      c = walkWrapperContainer(next(c)[1], token.name, errors, `${context} > <${token.name}>`);
      continue;
    }

    c = next(c)[1];
  }
}

function walkWrapperContainer(cur: Cursor, wrapperTag: "em" | "s" | "n", errors: ValidationError[], context: string): Cursor {
  let c = cur;

  while (true) {
    const token = peek(c);
    if (!token) return c;

    if (token.kind === "tag" && token.name === wrapperTag) {
      return next(c)[1];
    }

    if (token.kind === "eol") {
      c = next(c)[1];
      continue;
    }

    if (token.kind === "tag" && token.name === "i") {
      c = skipUntilClosingTag(next(c)[1], "i");
      continue;
    }

    if (token.kind === "tag" && (token.name === "em" || token.name === "s" || token.name === "n")) {
      c = walkWrapperContainer(next(c)[1], token.name, errors, `${context} > <${token.name}>`);
      continue;
    }

    errors.push({
      message: `Contenu invalide dans ${context}: <${token.kind === "tag" ? token.name : token.kind}>. Un wrapper inline-scope en liste ne peut contenir que <i>, <em>, <s>, <n>.`,
    });
    c = next(c)[1];
  }
}

function skipUntilClosingTag(cur: Cursor, closeTag: "i"): Cursor {
  let c = cur;
  while (true) {
    const token = peek(c);
    if (!token) return c;
    if (token.kind === "tag" && token.name === closeTag) return next(c)[1];
    c = next(c)[1];
  }
}

export function validate(doc: RmdlDoc, tokens?: ReadonlyArray<Token>): ReadonlyArray<ValidationError> {
  const errors: ValidationError[] = [];
  validateBlocks(doc.blocks, "doc.blocks", errors);
  if (tokens) {
    validateListWrapperChildren(tokens, errors);
  }
  return errors;
}
